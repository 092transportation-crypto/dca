// Fire-and-forget POST of a captured lead to an external webhook (CRM,
// Zapier, Slack, etc). Never throws and never blocks the caller beyond
// TIMEOUT_MS — a slow or failing webhook must never fail or delay the
// response the visitor sees.
//
// Required environment variable (set in Vercel project settings):
//   LEAD_WEBHOOK_URL — destination URL for lead JSON payloads
//
// If unset, this no-ops (logs and returns) instead of attempting a request
// that would just fail.

const TIMEOUT_MS = 6000;

async function notifyLeadWebhook(payload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.log('notifyLeadWebhook: LEAD_WEBHOOK_URL not configured — skipping');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload ?? {}),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`notifyLeadWebhook: webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error('notifyLeadWebhook failed:', err && err.message ? err.message : err);
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { notifyLeadWebhook };
