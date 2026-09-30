// Tops a page's FAQ list up to five questions from a pool of policy answers
// that are true for every trip (waiting time, cancellation, car seats, flight
// delays, payment). The pool is rotated by slug so neighbouring pages don't all
// get the same extra question, and a topic is skipped when the page already
// answers it. Each answer has a few differently-worded variants (also picked
// by slug) so the same policy doesn't read as identical boilerplate copied
// across dozens of pages. Policy numbers mirror the Terms page — change them
// together, in every variant.
const POOL = [
  {
    topic: /wait/i,
    q: (n) => `How much waiting time is included${n ? ` on ${n} trips` : ''}?`,
    a: [
      'Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown. All other pickups include 15 minutes.',
      'You get 45 minutes of free wait time after a domestic flight lands and 60 minutes after an international arrival, so there\'s no rush through baggage claim. Non-airport pickups carry a 15-minute grace window.',
      'No charge for the first 45 minutes after your domestic flight touches down (60 minutes for international arrivals) — plenty of time to clear customs or collect bags. Everywhere else, you get 15 minutes free.',
    ],
  },
  {
    topic: /cancel/i,
    q: () => 'What is the cancellation policy?',
    a: [
      'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.',
      'Plans change — cancel a sedan or SUV booking at no cost any time up to 3 hours before pickup. Sprinter vans, limousines and special-event reservations have a longer 12-hour free-cancellation window.',
      'For sedans and SUVs, cancel free up to 3 hours ahead of your pickup time. Larger vehicles — Sprinter vans, limousines, and anything booked for a special event — can be cancelled free up to 12 hours out.',
    ],
  },
  {
    topic: /car seat|child|kids/i,
    q: () => 'Can you provide child car seats?',
    a: [
      'Yes. Infant, convertible and booster seats are available on request — tell us the child\'s age when you book and the seat is installed before the vehicle arrives.',
      'Yes — just let us know your child\'s age when you reserve, and we\'ll bring the right infant, convertible or booster seat, already installed before your chauffeur arrives.',
      'We carry infant, convertible and booster seats and install whichever one fits your child before the car shows up. Mention the child\'s age in your booking request and we\'ll take care of the rest.',
    ],
  },
  {
    topic: /delay|late|flight track/i,
    q: () => 'What happens if my flight is delayed?',
    a: [
      'Every airport pickup is flight-tracked, so your chauffeur is dispatched against the actual arrival time rather than the schedule. You never need to call from the tarmac.',
      'Nothing on your end — we track your flight and adjust the pickup time automatically to match when you actually land, not the original schedule. No need to call us from the runway.',
      'We monitor your flight status in real time, so a delay simply shifts your chauffeur\'s dispatch to match your real arrival — you don\'t have to call ahead to reschedule.',
    ],
  },
  {
    topic: /pay|charge|card|price|cost|rate/i,
    q: () => 'When is my card charged?',
    a: [
      'Your flat rate is confirmed before you book, and your card is charged only after the reservation and the rate are confirmed with you — never at the time of the online request.',
      'You see and confirm the flat rate before booking; the card on file isn\'t charged until that reservation and rate are locked in with you, not the moment you submit the request online.',
      'The flat rate is agreed on before you book, and billing only happens once your reservation and price are confirmed — submitting the online request itself doesn\'t trigger a charge.',
    ],
  },
];

const hash = (s) => [...String(s || '')].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// keys: [questionKey, answerKey] used by the page's FAQ objects.
export const ensureFiveFaqs = (faqs, { slug = '', name = '', keys = ['q', 'a'] } = {}) => {
  const [qk, ak] = keys;
  const out = [...(faqs || [])];
  const h = hash(slug);
  const start = h % POOL.length;
  for (let i = 0; i < POOL.length && out.length < 5; i++) {
    const item = POOL[(start + i) % POOL.length];
    if (out.some((f) => item.topic.test(f[qk]))) continue;
    const variant = item.a[(h + i) % item.a.length];
    out.push({ [qk]: item.q(name), [ak]: variant });
  }
  return out;
};
