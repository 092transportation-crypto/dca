// Server-side (CommonJS) copy of the phone-validation rule in
// src/lib/phone.js. That file uses ES module `export` syntax so the Vercel
// serverless functions under api/ (plain CommonJS, `require()`-based, same
// pattern as api/_pricing.js vs. src/lib/pricing.js) can't import it
// directly. MUST stay in sync with src/lib/phone.js's isValidPhone rule.

// Count of actual digits, ignoring formatting characters.
const phoneDigits = (value) => String(value ?? '').replace(/\D/g, '');

// A usable phone number has 10–15 digits (US local through full E.164).
const isValidPhone = (value) => {
  const digits = phoneDigits(value);
  return digits.length >= 10 && digits.length <= 15;
};

module.exports = { phoneDigits, isValidPhone };
