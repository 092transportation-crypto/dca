// Fire-and-forget SMS alert via the Twilio REST API (direct fetch, no SDK).
// Used to text the dispatch team the moment a lead comes in (chat widget
// booking flow, lead-capture popup, exit-intent popup). Never throws and
// never blocks the caller beyond TIMEOUT_MS — a slow or failing SMS must
// never fail or delay the response the visitor sees.
//
// Required environment variables (set in Vercel project settings):
//   TWILIO_ACCOUNT_SID
//   TWILIO_AUTH_TOKEN
//   TWILIO_FROM_NUMBER   — Twilio phone number the alert is sent from
//   ALERT_PHONE_NUMBER   — phone number that receives the alert (dispatch team)
//
// If any of the four are missing, this no-ops (logs and returns) instead of
// attempting a request that would just fail.

const TIMEOUT_MS = 6000;

async function sendSms(body) {
  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_FROM_NUMBER,
    ALERT_PHONE_NUMBER,
  } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !ALERT_PHONE_NUMBER) {
    console.log('sendSms: Twilio env vars not fully configured — skipping SMS alert');
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');
    const params = new URLSearchParams({
      To: ALERT_PHONE_NUMBER,
      From: TWILIO_FROM_NUMBER,
      Body: String(body ?? '').slice(0, 1600),
    });

    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`sendSms: Twilio responded ${res.status}: ${text.slice(0, 300)}`);
    }
  } catch (err) {
    console.error('sendSms failed:', err && err.message ? err.message : err);
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { sendSms };
