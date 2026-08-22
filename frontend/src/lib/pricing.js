// Point-to-point instant-quote pricing, kept in sync with dispatch rates.
// Flat rate covers the first 9.9 miles; beyond that each extra mile is billed
// at the vehicle's per-mile rate on top of the flat base.

export const FLAT_MILES = 9.9;
export const CARD_FEE_RATE = 0.03;

export const PRICING = {
  'Business Sedan': { flat: 90, perMile: 1.7, model: 'Mercedes E-Class' },
  'First Class Sedan': { flat: 180, perMile: 2.6, model: 'BMW 7 Series / Mercedes S-Class' },
  'Midsize SUV': { flat: 110, perMile: 1.9, model: 'Lincoln Nautilus' },
  'Luxury SUV': { flat: 130, perMile: 2.2, model: 'Chevrolet Suburban' },
  'Premium SUV': { flat: 150, perMile: 2.4, model: 'Cadillac Escalade' },
  'Sprinter Shuttle': { flat: 250, perMile: 3.5, model: 'Mercedes Sprinter' },
  'Sprinter Executive': { flat: 330, perMile: 4.2, model: 'Mercedes Sprinter' },
};

const round2 = (n) => Math.round(n * 100) / 100;

export const money = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

/**
 * Point-to-point fare for a vehicle class over a trip of `miles` miles.
 * Returns null when the vehicle has no instant-quote pricing (e.g. Sprinter
 * Limo) or the mileage isn't usable.
 */
export function computeQuote(miles, vehicle) {
  const rates = PRICING[vehicle];
  if (!rates || !Number.isFinite(miles) || miles <= 0) return null;
  const base =
    miles <= FLAT_MILES
      ? rates.flat
      : rates.flat + (miles - FLAT_MILES) * rates.perMile;
  const baseFare = round2(base);
  const cardFee = round2(baseFare * CARD_FEE_RATE);
  return {
    miles: round2(miles),
    vehicle,
    baseFare,
    cardFee,
    total: round2(baseFare + cardFee),
  };
}
