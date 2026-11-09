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
 *   - GET /api/chat reports { enabled: false } with no ANTHROPIC_API_KEY,
 *     which keeps the chat widget hidden.
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

  await test('GET status probe reports disabled with no ANTHROPIC_API_KEY', async () => {
    delete process.env.ANTHROPIC_API_KEY;
    const chat = freshRequire('api/chat.js');
    const req = mockReq({ method: 'GET' });
    const res = mockRes();
    await chat(req, res);
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.enabled, false);
  });

  await test('rejects other non-POST methods with 405 and never throws', async () => {
    const chat = freshRequire('api/chat.js');
    const req = mockReq({ method: 'PUT' });
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

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Test runner crashed:', err);
  process.exit(1);
});
