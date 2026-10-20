// Vercel serverless function: backend for the floating chat widget
// (src/components/ChatBot.jsx). Calls the Anthropic Messages API directly
// via fetch — no SDK, no new dependency.
//
// Contract: POST /api/chat, body { messages: [{role, content}, ...] } — the
// full conversation so far (the frontend keeps state and resends it each
// turn). Always responds 200 with { reply } (plus { leadCaptured: true } when
// a booking lead was just captured) — never throws, so a down/misconfigured
// AI backend never breaks the chat window.
//
// Required environment variables (set in Vercel project settings):
//   ANTHROPIC_API_KEY    — without it, chat still "works": every message
//                          gets a friendly fallback reply pointing to the
//                          phone number / booking form.
//   ANTHROPIC_CHAT_MODEL — optional, defaults to claude-haiku-5-5
// Also uses TWILIO_* / ALERT_PHONE_NUMBER (lib/sms.js) and LEAD_WEBHOOK_URL
// (lib/leadWebhook.js) when a visitor completes the booking-lead flow.

const { computeQuote } = require('./_pricing.js');
const { getDistanceMiles } = require('./distance.js');
const { isValidPhone } = require('../lib/phone.js');
const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');

const PHONE_DISPLAY = '(877) 609-1919';
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = process.env.ANTHROPIC_CHAT_MODEL || 'claude-haiku-5-5';
const MAX_TOOL_ROUNDS = 3;

const FALLBACK_REPLY =
  `Live chat isn't available right now — call ${PHONE_DISPLAY} or use the booking form and our team will get right back to you.`;

// Real fleet, from src/pages/FleetPage.jsx — kept in sync with that page.
const FLEET = [
  'Business Sedan (Mercedes-Benz E-Class or similar) — 3 passengers, 2 bags',
  'First Class Sedan (BMW 7 Series / Mercedes S-Class or similar) — 3 passengers, 2 bags',
  'Midsize SUV (Lincoln Nautilus or similar) — 3 passengers, 4 bags',
  'Luxury SUV (Chevrolet Suburban or similar) — 5 passengers, 5 bags',
  'Premium SUV (Cadillac Escalade or similar) — 6 passengers, 5 bags',
  'Sprinter Shuttle (Mercedes Sprinter) — 13 passengers, 13 bags',
  'Sprinter Executive (Mercedes Sprinter, upgraded interior) — 13 passengers, 13 bags',
];

// Marketing fleet names (above / InquiryForm.jsx) don't label 1:1 with the
// rate-table keys in ./_pricing.js — map between them for get_instant_quote.
const VEHICLE_ALIASES = {
  'business sedan': 'Business Sedan',
  'first class sedan': 'First Class',
  'first class': 'First Class',
  'midsize suv': 'Mid-Size SUV',
  'mid-size suv': 'Mid-Size SUV',
  'mid size suv': 'Mid-Size SUV',
  'luxury suv': 'Luxury SUV',
  'premium suv': 'Premium SUV',
  'sprinter shuttle': 'Sprinter Van',
  'sprinter van': 'Sprinter Van',
  'sprinter executive': 'Sprinter Executive',
};
const ALL_PRICING_VEHICLES = [...new Set(Object.values(VEHICLE_ALIASES))];

function resolveVehicleKey(name) {
  if (!name) return null;
  return VEHICLE_ALIASES[String(name).trim().toLowerCase()] || null;
}

const SYSTEM_PROMPT = `You are the live chat assistant for DCA Limos (dcalimos.com), a licensed, insured chauffeured car service serving the Washington DC / Maryland / Virginia area (MD PSC Carrier No. 6325).

REAL FLEET (only mention these vehicles — never invent others):
${FLEET.map((v) => `- ${v}`).join('\n')}

PHONE: ${PHONE_DISPLAY}

How to answer common questions:
- Pricing: never state a specific dollar price yourself. The ONLY source of a price is a get_instant_quote tool result. If that tool isn't available, doesn't apply (hourly/wedding/special-event work, or a trip over 150 miles), or hasn't been called yet, explain that pricing depends on distance and vehicle, and offer to collect trip details so a dispatcher can follow up with an exact quote.
- "What cars do you have": describe the real fleet above.
- "How do I book": point them to the booking form on the site or the phone number, and offer to collect their trip details yourself right now.
- Availability: never claim to know real calendar availability for a specific date — there is no live booking calendar. Say the fleet is large and availability is usually open, and offer to collect trip details so a dispatcher can confirm.

Booking flow:
- After 2–3 exchanges, or as soon as the visitor shows booking interest, ask: "Would you like to book a ride? I can get you a quote right now." If they say yes, collect the following ONE AT A TIME — never ask for more than one piece of information in a single message: name, phone number, pickup location, destination, date, and time. Once you have all six, call submit_booking_lead.
- If the visitor gives you both a pickup and a destination and wants a sense of price, you may call get_instant_quote with what you have (pass a vehicle only if they named one).

Be warm, concise, and helpful. Don't repeat the phone number in every message.`;

const TOOLS = [
  {
    name: 'submit_booking_lead',
    description:
      "Submit a visitor's booking request to the dispatch team. Call this only once you have collected all six fields from the visitor: name, phone, pickup, destination, date, and time.",
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: "Visitor's full name" },
        phone: { type: 'string', description: 'Visitor phone number' },
        pickup: { type: 'string', description: 'Pickup location or address' },
        destination: { type: 'string', description: 'Destination / drop-off location or address' },
        date: { type: 'string', description: 'Pickup date, as given by the visitor' },
        time: { type: 'string', description: 'Pickup time, as given by the visitor' },
      },
      required: ['name', 'phone', 'pickup', 'destination', 'date', 'time'],
    },
  },
  {
    name: 'get_instant_quote',
    description:
      'Look up a real instant quote using live driving distance and the current rate table. Only use once the visitor has given both a pickup and a destination.',
    input_schema: {
      type: 'object',
      properties: {
        pickup: { type: 'string', description: 'Pickup address' },
        dropoff: { type: 'string', description: 'Destination address' },
        vehicle: {
          type: 'string',
          description:
            'Optional vehicle name the visitor asked about, e.g. "Luxury SUV". Omit if they did not mention one.',
        },
      },
      required: ['pickup', 'dropoff'],
    },
  },
];

const clip = (v, max) => String(v ?? '').trim().slice(0, max);

// Keep only well-formed user/assistant turns, bounded in length and count,
// and make sure the conversation we send to Anthropic starts with a user
// turn (required by the API) — the frontend already does this, but a
// defensive second check here costs nothing.
function sanitizeMessages(input) {
  if (!Array.isArray(input)) return [];
  const cleaned = input
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content != null)
    .map((m) => ({
      role: m.role,
      content: typeof m.content === 'string' ? m.content.slice(0, 4000) : m.content,
    }))
    .slice(-30);
  const firstUserIndex = cleaned.findIndex((m) => m.role === 'user');
  return firstUserIndex >= 0 ? cleaned.slice(firstUserIndex) : [];
}

async function callAnthropic(messages) {
  const res = await fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Anthropic API ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

function composeLeadConfirmation(name) {
  const first = String(name || '').trim().split(/\s+/)[0] || 'there';
  return `Thanks, ${first} — I've sent your trip details to our dispatch team and they'll reach out shortly to confirm. You can also call ${PHONE_DISPLAY} any time.`;
}

// Handles the submit_booking_lead tool call directly — no second Claude call,
// the confirmation text is composed here server-side.
async function handleSubmitBookingLead(input) {
  const name = clip(input && input.name, 120);
  const phone = clip(input && input.phone, 40);
  const pickup = clip(input && input.pickup, 300);
  const destination = clip(input && input.destination, 300);
  const date = clip(input && input.date, 60);
  const time = clip(input && input.time, 60);

  if (!name || !phone || !pickup || !destination || !date || !time) {
    return {
      reply: "I'm missing a detail — could you share your name, phone, pickup, destination, date and time?",
    };
  }
  if (!isValidPhone(phone)) {
    return {
      reply: `That phone number doesn't look complete — could you double-check it? Or just call us directly at ${PHONE_DISPLAY}.`,
    };
  }

  const smsBody =
    `New chat lead — ${name} — ${phone}\n` +
    `Pickup: ${pickup}\nDrop-off: ${destination}\nWhen: ${date} ${time}`;

  // Never let a slow/failing SMS or webhook block or fail the chat reply.
  await Promise.allSettled([
    sendSms(smsBody),
    notifyLeadWebhook({
      source: 'chat_widget',
      name,
      phone,
      pickup,
      destination,
      date,
      time,
      submitted_at: new Date().toISOString(),
    }),
  ]);

  return { reply: composeLeadConfirmation(name), leadCaptured: true };
}

// Handles the get_instant_quote tool call: real distance + rate-table math,
// returned as a tool_result for a second Anthropic call to phrase naturally.
async function handleGetInstantQuote(input) {
  const pickup = clip(input && input.pickup, 300);
  const dropoff = clip(input && input.dropoff, 300);
  const vehicleKey = resolveVehicleKey(input && input.vehicle);

  if (pickup.length < 4 || dropoff.length < 4) {
    return { error: 'Need both a pickup and a destination address to look up a quote.' };
  }

  try {
    const { miles } = await getDistanceMiles(pickup, dropoff);
    const vehiclesToTry = vehicleKey ? [vehicleKey] : ALL_PRICING_VEHICLES;
    const quotes = vehiclesToTry
      .map((v) => computeQuote(miles, v, false))
      .filter((q) => q && !q.overLimit);

    if (!quotes.length) {
      return miles > 150
        ? {
            error: `That trip is about ${Math.round(miles)} miles, which is over the 150-mile instant-quote limit — a dispatcher can work up a custom quote.`,
          }
        : { error: 'No instant pricing is available for that vehicle.' };
    }

    return {
      miles: Math.round(miles),
      quotes: quotes.map((q) => ({ vehicle: q.vehicle, total: q.total })),
      note: 'Price excludes any short-notice surcharge, which only applies within 4 hours of pickup.',
    };
  } catch (err) {
    console.error('get_instant_quote failed:', err.message);
    return { error: "Couldn't calculate the distance for those addresses right now." };
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const messages = sanitizeMessages(body.messages);

  if (!messages.length) {
    return res.status(200).json({
      reply: "Hi! I'm the DCA Limos chat assistant. How can I help with your ride today?",
    });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }

  try {
    let workingMessages = messages;
    let response = await callAnthropic(workingMessages);
    let rounds = 0;

    while (response.stop_reason === 'tool_use' && rounds < MAX_TOOL_ROUNDS) {
      rounds += 1;
      const toolUseBlocks = (response.content || []).filter((b) => b.type === 'tool_use');
      workingMessages = [...workingMessages, { role: 'assistant', content: response.content }];

      // submit_booking_lead short-circuits: reply directly, no second
      // Claude call — the confirmation text is composed in this file.
      const bookingBlock = toolUseBlocks.find((b) => b.name === 'submit_booking_lead');
      if (bookingBlock) {
        const result = await handleSubmitBookingLead(bookingBlock.input || {});
        return res.status(200).json(result);
      }

      const toolResults = [];
      for (const block of toolUseBlocks) {
        if (block.name === 'get_instant_quote') {
          // eslint-disable-next-line no-await-in-loop
          const result = await handleGetInstantQuote(block.input || {});
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: JSON.stringify(result),
          });
        } else {
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: 'Unknown tool',
            is_error: true,
          });
        }
      }

      workingMessages = [...workingMessages, { role: 'user', content: toolResults }];
      // eslint-disable-next-line no-await-in-loop
      response = await callAnthropic(workingMessages);
    }

    const textBlock = (response.content || []).find((b) => b.type === 'text');
    return res.status(200).json({ reply: textBlock ? textBlock.text : FALLBACK_REPLY });
  } catch (err) {
    console.error('chat endpoint failed:', err.message);
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }
};
