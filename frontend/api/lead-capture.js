// Vercel serverless function: captures a lead from the site-wide lead-capture
// popup (30s after page load) or the exit-intent popup, and alerts the
// dispatch team — never email (that's the api/quote-requests.js flow).
// Fire-and-forget resilience: SMS/webhook failures never fail or delay the
// response the visitor sees (same pattern used throughout this file).
//
// Required environment variables — see lib/sms.js and lib/leadWebhook.js for
// what each one does. All are optional: if unset, that notification channel
// silently no-ops and the lead is still accepted.
//   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER,
//   ALERT_PHONE_NUMBER, LEAD_WEBHOOK_URL

const { isValidPhone } = require('../lib/phone.js');
const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');

const clip = (v, max) => String(v ?? '').trim().slice(0, max);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const source = clip(body.source, 40) || 'lead_popup';
  const name = clip(body.name, 120);
  const phone = clip(body.phone, 40);
  const email = clip(body.email, 200);

  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }
  if (!phone || !isValidPhone(phone)) {
    return res.status(400).json({ success: false, message: 'A valid phone number is required.' });
  }
  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, message: "That email address doesn't look valid." });
  }

  const submittedAt = new Date().toISOString();
  const smsLines = [`New lead (${source}) — ${name} — ${phone}`];
  if (email) smsLines.push(`Email: ${email}`);

  // Never let a slow/failing SMS or webhook block or fail this response —
  // the lead is already valid, so the visitor always gets a success reply.
  await Promise.allSettled([
    sendSms(smsLines.join('\n')),
    notifyLeadWebhook({
      source,
      name,
      phone,
      email: email || undefined,
      submitted_at: submittedAt,
    }),
  ]);

  return res.status(201).json({
    success: true,
    message: "Got it — our team will reach out shortly.",
  });
};
