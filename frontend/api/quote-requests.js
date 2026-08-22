// Vercel serverless function: receives quote/contact form submissions and
// emails them to the team via Gmail SMTP.
//
// Required environment variables (set in Vercel project settings):
//   SMTP_USER          — Gmail address used to send (e.g. 092transportation@gmail.com)
//   SMTP_PASSWORD      — 16-character Gmail app password
//   NOTIFICATION_EMAIL — where booking notifications are delivered (defaults to SMTP_USER)

const nodemailer = require('nodemailer');
const crypto = require('crypto');

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const field = (v, max) => String(v ?? '').trim().slice(0, max);

// "2026-10-21" + "17:32" -> "October 21, 2026 at 5:32 PM".
// Parses the parts directly (no Date-from-ISO-string) so the customer's chosen
// date/time is never shifted by the server's timezone. Falls back to the raw
// strings if they don't match the expected <input type=date|time> formats.
function formatDateTime(date, time) {
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const prettyDate = dm
    ? `${MONTHS[Number(dm[2]) - 1]} ${Number(dm[3])}, ${dm[1]}`
    : date;
  const tm = /^(\d{1,2}):(\d{2})/.exec(time);
  let prettyTime = time;
  if (tm) {
    const h = Number(tm[1]);
    const suffix = h >= 12 ? 'PM' : 'AM';
    prettyTime = `${h % 12 || 12}:${tm[2]} ${suffix}`;
  }
  if (prettyDate && prettyTime) return `${prettyDate} at ${prettyTime}`;
  return prettyDate || prettyTime || '';
}

// Human-readable submission stamp in the business's timezone (Washington, DC).
function formatSubmittedAt(d) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true,
    timeZoneName: 'short',
  }).format(d);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.NOTIFICATION_EMAIL || smtpUser;
  if (!smtpUser || !smtpPassword) {
    console.error('SMTP_USER / SMTP_PASSWORD not configured');
    return res.status(500).json({ success: false, message: 'Email service not configured' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const quote = {
    full_name: field(body.full_name, 120),
    email: field(body.email, 200),
    phone: field(body.phone, 40),
    preferred_contact: field(body.preferred_contact, 20),
    service_type: field(body.service_type, 80),
    trip_type: field(body.trip_type, 40),
    flight_number: field(body.flight_number, 40),
    passengers: field(body.passengers, 10),
    pickup_date: field(body.pickup_date, 40),
    pickup_time: field(body.pickup_time, 40),
    pickup_location: field(body.pickup_location, 300),
    dropoff_location: field(body.dropoff_location, 300),
    additional_details: field(body.additional_details, 2000),
    source: field(body.source, 40) || 'Booking form',
  };

  if (!quote.full_name || !quote.email || !quote.phone || !quote.service_type) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name, email, phone and service type.',
    });
  }

  // Instant point-to-point estimate shown to the customer on the form —
  // numbers only, so a malformed payload can't inject content.
  const iq = typeof body.instant_quote === 'object' && body.instant_quote !== null
    ? body.instant_quote
    : null;
  const num = (v) => (Number.isFinite(Number(v)) ? Number(v) : null);
  const usd = (v) => `$${v.toFixed(2)}`;
  const instantQuote = iq
    ? {
        miles: num(iq.miles),
        vehicle: field(iq.vehicle, 40),
        base_fare: num(iq.base_fare),
        card_fee: num(iq.card_fee),
        total: num(iq.total),
      }
    : null;
  const hasInstantQuote =
    instantQuote &&
    instantQuote.miles !== null &&
    instantQuote.base_fare !== null &&
    instantQuote.total !== null;

  const id = crypto.randomUUID();
  const submittedAt = formatSubmittedAt(new Date());
  const dateTime = formatDateTime(quote.pickup_date, quote.pickup_time);

  // [label, value] in display order — one clearly labeled line per field.
  const fields = [
    ['Name', quote.full_name],
    ['Phone', quote.phone],
    ['Email', quote.email],
    ['Preferred Contact', quote.preferred_contact],
    ['Service Type', quote.service_type],
    ...(quote.trip_type ? [['Trip Type', quote.trip_type]] : []),
    // Only present for airport transfers — omit the row entirely otherwise.
    ...(quote.flight_number ? [['Flight Number', quote.flight_number]] : []),
    ['Pickup Location', quote.pickup_location],
    ['Drop-off Location', quote.dropoff_location],
    ['Date & Time', dateTime],
    ['Passengers', quote.passengers],
    // What the customer was quoted on the form, if an instant price was shown.
    ...(hasInstantQuote
      ? [
          ['Estimated Distance', `${instantQuote.miles} miles`],
          [
            'Instant Quote',
            `${instantQuote.vehicle ? `${instantQuote.vehicle}: ` : ''}${usd(instantQuote.base_fare)}` +
              (instantQuote.card_fee !== null
                ? ` + card fee (3%) ${usd(instantQuote.card_fee)}`
                : '') +
              ` = TOTAL ${usd(instantQuote.total)}`,
          ],
        ]
      : []),
    ['Notes', quote.additional_details],
  ];

  const row = ([label, value]) =>
    `<tr>
       <td style="padding:10px 14px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;border-bottom:1px solid #e5e5e5;vertical-align:top;white-space:nowrap;">${label}</td>
       <td style="padding:10px 14px;color:#111;border-bottom:1px solid #e5e5e5;">${escapeHtml(value).replace(/\n/g, '<br>') || '<span style="color:#999;">&mdash;</span>'}</td>
     </tr>`;

  const html = `<!doctype html>
<html><body style="font-family:Arial,sans-serif;margin:0;padding:24px;background:#000;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:2px solid #f59e0b;">
    <div style="background:#000;color:#f59e0b;padding:18px 24px;">
      <h1 style="margin:0;font-size:22px;letter-spacing:0.04em;">DCA LIMOS &mdash; NEW QUOTE REQUEST</h1>
      <p style="margin:6px 0 0;color:#fff;font-size:13px;">Submitted ${escapeHtml(submittedAt)} &middot; via ${escapeHtml(quote.source)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${fields.map(row).join('\n      ')}
    </table>
    <div style="background:#000;color:#fff;padding:14px 24px;text-align:center;font-size:12px;">
      Reply directly to this email to respond to the customer.<br>
      <span style="color:#777;">Quote ID: ${id}</span>
    </div>
  </div>
</body></html>`;

  const pad = (label) => `${label}:`.padEnd(19);
  const text = [
    'NEW QUOTE REQUEST — DCA LIMOS',
    `Submitted: ${submittedAt} (via ${quote.source})`,
    '',
    ...fields.map(([label, value]) => `${pad(label)}${value || '—'}`),
    '',
    `Quote ID: ${id}`,
  ].join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: `DCA Limos Website <${smtpUser}>`,
      to: recipient,
      replyTo: quote.email || smtpUser,
      subject: `New Quote Request — ${quote.service_type} — ${quote.full_name}`,
      text,
      html,
    });

    return res.status(200).json({
      id,
      success: true,
      message: 'Quote request received. Our team will contact you within 15 minutes.',
    });
  } catch (err) {
    console.error('Failed to send quote email:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your request right now. Please call (877) 609-1919.',
    });
  }
};
