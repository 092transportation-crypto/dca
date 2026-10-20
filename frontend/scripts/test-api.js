#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Lightweight test runner for the Vercel serverless functions under api/.
 *
 * These are plain CommonJS (req, res) handlers living outside src/, so
 * CRA's jest config (`roots: ["<rootDir>/src"]`, testEnvironment: jsdom)
 * never picks them up — `craco test` only covers src/. This script instead
 * requires each handler directly and drives it with a minimal mock
 * req/res, run with plain `node` (see package.json's `test:api` script).
 *
 * Covers:
 *   - POST /api/chat falls back gracefully (never throws) with no
 *     ANTHROPIC_API_KEY set.
 *   - POST /api/lead-capture 400s on missing/invalid name or phone.
 *   - POST /api/lead-capture 201s and returns promptly even when the
 *     Twilio/webhook env vars are unset, and when LEAD_WEBHOOK_URL points
 *     at an unreachable host — including a case built to actually exercise
 *     the 6s AbortController timeout, not just a fast ECONNREFUSED.
 */

const assert = require('assert');
const path = require('path');

let passed = 0;
let failed = 0;

async function test(name, fn) {
  const start = Date.now();
  try {
    await fn();
    const ms = Date.now() - start;
    console.log(`  ok  ${name} (${ms}ms)`);
    passed += 1;
  } catch (err) {
    console.log(`FAIL  ${name}`);
    console.log(`      ${err && err.stack ? err.stack : err}`);
    failed += 1;
  }
}

function mockReq({ method = 'POST', body = {} } = {}) {
  return { method, body };
}

function mockRes() {
  const res = {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(name, value) {
      res.headers[name] = value;
    },
    status(code) {
      res.statusCode = code;
      return res;
    },
    json(payload) {
      res.body = payload;
      return res;
    },
  };
  return res;
}

// Require fresh each time in case a future change caches env-derived state
// at module scope (none currently do, but this keeps the harness honest).
function freshRequire(relPath) {
  const full = require.resolve(path.join(__dirname, '..', relPath));
  delete require.cache[full];
  return require(full);
}

async function main() {
  console.log('api/chat.js');
  await test('returns a graceful fallback (200, no throw) when ANTHROPIC_API_KEY is unset', async () => {
    const prevKey = process.env.ANTHROPIC_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;
    try {
      const chat = freshRequire('api/chat.js');
      const req = mockReq({ body: { messages: [{ role: 'user', content: 'Hi, what cars do you have?' }] } });
      const res = mockRes();
      await chat(req, res);
      assert.strictEqual(res.statusCode, 200, `expected 200, got ${res.statusCode}`);
      assert.strictEqual(typeof res.body.reply, 'string', 'expected a string reply');
      assert.ok(res.body.reply.includes('(877) 609-1919'), 'fallback reply should include the phone number');
    } finally {
      if (prevKey !== undefined) process.env.ANTHROPIC_API_KEY = prevKey;
    }
  });

  await test('rejects non-POST with 405 and never throws', async () => {
    const chat = freshRequire('api/chat.js');
    const req = mockReq({ method: 'GET' });
    const res = mockRes();
    await chat(req, res);
    assert.strictEqual(res.statusCode, 405);
  });

  await test('with no messages, returns a canned 200 greeting without calling Anthropic', async () => {
    const chat = freshRequire('api/chat.js');
    const req = mockReq({ body: { messages: [] } });
    const res = mockRes();
    await chat(req, res);
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(typeof res.body.reply, 'string');
  });

  console.log('\napi/lead-capture.js');

  await test('400s on missing name', async () => {
    const leadCapture = freshRequire('api/lead-capture.js');
    const req = mockReq({ body: { phone: '(877) 609-1919' } });
    const res = mockRes();
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.body.success, false);
  });

  await test('400s on missing phone', async () => {
    const leadCapture = freshRequire('api/lead-capture.js');
    const req = mockReq({ body: { name: 'Jane Doe' } });
    const res = mockRes();
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('400s on an invalid (too-short) phone', async () => {
    const leadCapture = freshRequire('api/lead-capture.js');
    const req = mockReq({ body: { name: 'Jane Doe', phone: '12345' } });
    const res = mockRes();
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('400s on an invalid email, when a name and phone are present', async () => {
    const leadCapture = freshRequire('api/lead-capture.js');
    const req = mockReq({
      body: { name: 'Jane Doe', phone: '(877) 609-1919', email: 'not-an-email' },
    });
    const res = mockRes();
    await leadCapture(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('201s promptly when Twilio/webhook env vars are all unset (no-op path)', async () => {
    const envKeys = [
      'TWILIO_ACCOUNT_SID',
      'TWILIO_AUTH_TOKEN',
      'TWILIO_FROM_NUMBER',
      'ALERT_PHONE_NUMBER',
      'LEAD_WEBHOOK_URL',
    ];
    const saved = {};
    envKeys.forEach((k) => {
      saved[k] = process.env[k];
      delete process.env[k];
    });
    try {
      const leadCapture = freshRequire('api/lead-capture.js');
      const req = mockReq({ body: { name: 'Jane Doe', phone: '(877) 609-1919' } });
      const res = mockRes();
      const start = Date.now();
      await leadCapture(req, res);
      const elapsed = Date.now() - start;
      assert.strictEqual(res.statusCode, 201, `expected 201, got ${res.statusCode}`);
      assert.strictEqual(res.body.success, true);
      assert.ok(elapsed < 1000, `expected the no-op path to return fast, took ${elapsed}ms`);
    } finally {
      envKeys.forEach((k) => {
        if (saved[k] !== undefined) process.env[k] = saved[k];
        else delete process.env[k];
      });
    }
  });

  await test('201s and does not hang when LEAD_WEBHOOK_URL is a closed local port', async () => {
    const prevUrl = process.env.LEAD_WEBHOOK_URL;
    // Nothing listens here — expect a fast ECONNREFUSED, well under the
    // 6s AbortController timeout.
    process.env.LEAD_WEBHOOK_URL = 'http://127.0.0.1:1';
    try {
      const leadCapture = freshRequire('api/lead-capture.js');
      const req = mockReq({ body: { name: 'Jane Doe', phone: '(877) 609-1919' } });
      const res = mockRes();
      const start = Date.now();
      await leadCapture(req, res);
      const elapsed = Date.now() - start;
      assert.strictEqual(res.statusCode, 201, `expected 201, got ${res.statusCode}`);
      assert.ok(elapsed < 8000, `expected a bounded response time, took ${elapsed}ms`);
    } finally {
      if (prevUrl !== undefined) process.env.LEAD_WEBHOOK_URL = prevUrl;
      else delete process.env.LEAD_WEBHOOK_URL;
    }
  });

  await test('201s within ~6s when LEAD_WEBHOOK_URL is an unreachable (black-holed) host — proves the AbortController timeout actually bounds the wait, not just a fast refusal', async () => {
    const prevUrl = process.env.LEAD_WEBHOOK_URL;
    // 10.255.255.1 is a private, non-routable-from-here address: packets are
    // silently dropped rather than refused, so without our own timeout this
    // would hang on the OS/TCP connect timeout (often 60s+). This proves
    // lib/leadWebhook.js's 6s AbortController timeout is what bounds it.
    process.env.LEAD_WEBHOOK_URL = 'http://10.255.255.1:65535/webhook';
    try {
      const leadCapture = freshRequire('api/lead-capture.js');
      const req = mockReq({ body: { name: 'Jane Doe', phone: '(877) 609-1919' } });
      const res = mockRes();
      const start = Date.now();
      await leadCapture(req, res);
      const elapsed = Date.now() - start;
      assert.strictEqual(res.statusCode, 201, `expected 201, got ${res.statusCode}`);
      assert.ok(
        elapsed < 8000,
        `expected the 6s timeout to bound the wait (with margin), took ${elapsed}ms`
      );
    } finally {
      if (prevUrl !== undefined) process.env.LEAD_WEBHOOK_URL = prevUrl;
      else delete process.env.LEAD_WEBHOOK_URL;
    }
  });

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Test runner crashed:', err);
  process.exit(1);
});
