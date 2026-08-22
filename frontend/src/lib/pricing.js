// Point-to-point instant-quote pricing, kept in sync with dispatch rates.
// Every trip is priced as base rate + (total miles × per-mile rate) from
// mile 1 — no separate short-trip flat tier.

export const CARD_FEE_RATE = 0.03;

// Automatic discount applied to every instant quote, before the card fee.
export const AUTO_DISCOUNT_RATE = 0.1;

export const PRICING = {
  'Business Sedan': { base: 90, perMile: 2.8, model: 'Mercedes E-Class' },
  'First Class Sedan': { base: 150, perMile: 3.8, model: 'BMW 7 Series / Mercedes S-Class' },
  'Midsize SUV': { base: 100, perMile: 3.0, model: 'Lincoln Nautilus' },
  'Luxury SUV': { base: 110, perMile: 3.2, model: 'Chevrolet Suburban' },
  'Premium SUV': { base: 125, perMile: 3.0, model: 'Cadillac Escalade' },
  'Sprinter Shuttle': { base: 220, perMile: 4.2, model: 'Mercedes Sprinter' },
  'Sprinter Executive': { base: 330, perMile: 4.8, model: 'Mercedes Sprinter' },
};

const round2 = (n) => Math.round(n * 100) / 100;

export const money = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

/**
 * Point-to-point fare: base rate + (miles × per-mile rate).
 * Returns null when the vehicle has no instant-quote pricing (e.g. Sprinter
 * Limo) or the mileage isn't usable.
 */
export function computeQuote(miles, vehicle) {
  const rates = PRICING[vehicle];
  if (!rates || !Number.isFinite(miles) || miles <= 0) return null;
  const baseFare = round2(rates.base + miles * rates.perMile);
  // Every instant quote gets the automatic discount; the card fee is
  // charged on the discounted fare.
  const discount = round2(baseFare * AUTO_DISCOUNT_RATE);
  const discounted = round2(baseFare - discount);
  const cardFee = round2(discounted * CARD_FEE_RATE);
  return {
    miles: round2(miles),
    vehicle,
    baseFare,
    discount,
    cardFee,
    total: round2(discounted + cardFee),
  };
}
