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
    service_type: field(body.service_type, 80),
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

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const row = (label, value) =>
    `<tr><td style="padding:8px 12px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;">${label}</td><td style="padding:8px 12px;color:#111;">${escapeHtml(value).replace(/\n/g, '<br>') || '&mdash;'}</td></tr>`;

  const html = `<!doctype html>
<html><body style="font-family:Arial,sans-serif;margin:0;padding:24px;background:#000;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:2px solid #f59e0b;">
    <div style="background:#000;color:#f59e0b;padding:18px 24px;">
      <h1 style="margin:0;font-size:22px;letter-spacing:0.04em;">DCA LIMOS &mdash; NEW QUOTE REQUEST</h1>
      <p style="margin:6px 0 0;color:#fff;font-size:13px;">Submitted ${createdAt} &middot; via ${escapeHtml(quote.source)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row('Full Name', quote.full_name)}
      ${row('Email', quote.email)}
      ${row('Phone', quote.phone)}
      ${row('Service Type', quote.service_type)}
      ${row('Pickup Date', quote.pickup_date)}
      ${row('Pickup Time', quote.pickup_time)}
      ${row('Pickup Location', quote.pickup_location)}
      ${row('Drop-off Location', quote.dropoff_location)}
      ${row('Additional Details', quote.additional_details)}
      ${row('Quote ID', id)}
    </table>
    <div style="background:#000;color:#fff;padding:14px 24px;text-align:center;font-size:12px;">
      Reply directly to this email to respond to the customer.
    </div>
  </div>
</body></html>`;

  const text = [
    'NEW QUOTE REQUEST — DCA LIMOS',
    `Submitted: ${createdAt} (via ${quote.source})`,
    '',
    `Name:             ${quote.full_name}`,
    `Email:            ${quote.email}`,
    `Phone:            ${quote.phone}`,
    `Service Type:     ${quote.service_type}`,
    `Pickup Date:      ${quote.pickup_date || '—'}`,
    `Pickup Time:      ${quote.pickup_time || '—'}`,
    `Pickup Location:  ${quote.pickup_location || '—'}`,
    `Drop-off:         ${quote.dropoff_location || '—'}`,
    `Details:          ${quote.additional_details || '—'}`,
    `Quote ID:         ${id}`,
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
