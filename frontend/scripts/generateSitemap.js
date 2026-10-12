/* eslint-disable */
/**
 * Sitemap generator for dcalimos.com.
 *
 * public/sitemap-static.xml has historically been maintained by hand/by one-off
 * scripts whenever a content batch landed. This script makes that mechanism
 * repeatable: it loads every real route from the site's own data modules
 * (the same source of truth App.js uses to build <Route> elements) plus the
 * handful of static pages, diffs that against the existing sitemap, and
 * rewrites public/sitemap-static.xml so:
 *   - every real route is listed (new pages never go missing from the sitemap)
 *   - every orphaned <url> (no longer backed by a route) is dropped, so the
 *     sitemap never points Search Console at a 404
 *   - existing <lastmod>/<changefreq>/<priority> values are preserved for
 *     untouched URLs; new URLs get type-appropriate defaults inferred from
 *     the conventions already used in the file
 *
 * Run with: node scripts/generateSitemap.js
 * (also wired up as `npm run sitemap` — see package.json)
 */
const fs = require("fs");
const path = require("path");
const Module = require("module");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const SITEMAP_PATH = path.join(ROOT, "public", "sitemap-static.xml");
const ORIGIN = "https://dcalimos.com";
const TODAY = new Date().toISOString().slice(0, 10);

// Pages touched by the 2026-10-12 SEO pass: get a fresh <lastmod> even though
// they already existed. Everything else keeps its prior lastmod untouched.
const TOUCHED_TODAY = new Set([
  "/",
  "/limo/dca-airport-limo",
  "/limo/bwi-airport-limo",
  "/limo/dulles-airport-limo",
  "/limo/wedding-limo-service",
  "/limo/prom-limo-service",
  "/limo/corporate-car-service",
  "/limo/sports-game-day-limo",
  "/limo/annapolis-limo-service",
  "/limo/baltimore-limo-service",
  "/limo/columbia-limo-service",
  "/limo/hanover-limo-service",
  "/maryland-wedding-limo",
  "/maryland-corporate-car-service",
  "/maryland-prom-limo",
  "/maryland-concert-transportation",
  "/maryland-wine-tour-transportation",
  "/philadelphia-airport-car-service",
  "/herndon-limo-service",
  "/clarendon-arlington-limo-service",
  "/chantilly-limo-service",
  "/holiday-lights-limo-tours-dc-maryland-virginia",
  "/blog/dca-to-dc-flat-rate-car-service",
  "/blog/reagan-national-arrivals-where-your-chauffeur-meets-you",
  "/blog/dc-wedding-transportation-timeline",
  "/blog/capitol-hill-meeting-day-car-service-guide",
  "/blog/black-car-vs-taxi-vs-rideshare-at-dca",
]);

function installCompiler() {
  const babel = require("@babel/core");
  const opts = {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  };
  const compile = (module, filename) =>
    module._compile(babel.transformSync(fs.readFileSync(filename, "utf8"), { ...opts, filename }).code, filename);
  const origJs = Module._extensions[".js"];
  Module._extensions[".jsx"] = compile;
  Module._extensions[".js"] = (module, filename) =>
    filename.startsWith(SRC + path.sep) ? compile(module, filename) : origJs(module, filename);
  for (const ext of [".css", ".scss"]) Module._extensions[ext] = () => {};
  for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"])
    Module._extensions[ext] = (module, filename) => {
      module.exports = "/" + path.basename(filename);
    };
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (request, ...rest) {
    if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
    return origResolve.call(this, request, ...rest);
  };
}

installCompiler();

// { path: [changefreq, priority] } — matches the conventions already present
// in public/sitemap-static.xml for each page family.
const STATIC_DEFAULTS = {
  "/": ["weekly", "1.0"],
  "/services": ["monthly", "0.9"],
  "/fleet": ["monthly", "0.9"],
  "/about": ["monthly", "0.7"],
  "/contact": ["monthly", "0.8"],
  "/blog": ["weekly", "0.6"],
  "/booking": ["weekly", "0.95"],
  "/service-areas": ["monthly", "0.8"],
};

function collectRoutes() {
  const routes = new Map(); // path -> [changefreq, priority]
  for (const [p, v] of Object.entries(STATIC_DEFAULTS)) routes.set(p, v);

  const { LANDING_PAGES } = require(path.join(SRC, "data/landingPages"));
  for (const p of LANDING_PAGES) routes.set(`/limo/${p.slug}`, ["monthly", "0.85"]);

  const { MARYLAND_PAGES } = require(path.join(SRC, "data/marylandPages"));
  for (const p of MARYLAND_PAGES) routes.set(`/${p.slug}`, ["monthly", "0.8"]);

  const { ROUTE_PAGES } = require(path.join(SRC, "data/routePages"));
  for (const p of ROUTE_PAGES) routes.set(`/${p.slug}`, ["monthly", "0.9"]);

  const { EVENT_PAGES } = require(path.join(SRC, "data/eventPages"));
  for (const p of EVENT_PAGES) routes.set(`/${p.slug}`, ["weekly", "0.8"]);

  const { GUIDES } = require(path.join(SRC, "data/guides"));
  for (const p of GUIDES) routes.set(`/${p.slug}`, ["monthly", "0.8"]);

  const { BLOG_POSTS } = require(path.join(SRC, "data/blogPosts"));
  for (const p of BLOG_POSTS) routes.set(`/blog/${p.slug}`, ["monthly", "0.7"]);

  return routes;
}

function parseExisting(xml) {
  const existing = new Map(); // path -> { lastmod, changefreq, priority }
  const re = /<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]*)<\/lastmod>\s*)?<changefreq>([^<]*)<\/changefreq>\s*<priority>([^<]*)<\/priority>\s*<\/url>/g;
  let m;
  while ((m = re.exec(xml))) {
    const p = new URL(m[1]).pathname.replace(/(.)\/+$/, "$1");
    existing.set(p, { lastmod: m[2] || "", changefreq: m[3], priority: m[4] });
  }
  return existing;
}

function main() {
  const routes = collectRoutes();
  const existingXml = fs.existsSync(SITEMAP_PATH) ? fs.readFileSync(SITEMAP_PATH, "utf8") : "";
  const existing = parseExisting(existingXml);

  const added = [];
  const removed = [...existing.keys()].filter((p) => !routes.has(p));
  const sortedPaths = [...routes.keys()].sort();

  const blocks = sortedPaths.map((p) => {
    const [defChangefreq, defPriority] = routes.get(p);
    const prev = existing.get(p);
    const isNew = !prev;
    if (isNew) added.push(p);
    const lastmod = isNew || TOUCHED_TODAY.has(p) ? TODAY : prev.lastmod;
    const changefreq = prev ? prev.changefreq : defChangefreq;
    const priority = prev ? prev.priority : defPriority;
    const loc = p === "/" ? `${ORIGIN}/` : `${ORIGIN}${p}`;
    const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
    return `  <url>\n    <loc>${loc}</loc>${lastmodLine}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${blocks.join("\n")}\n</urlset>\n`;
  fs.writeFileSync(SITEMAP_PATH, xml, "utf8");

  console.log(`[sitemap] wrote ${sortedPaths.length} URLs to ${path.relative(ROOT, SITEMAP_PATH)}`);
  if (added.length) console.log(`[sitemap] added ${added.length}:\n  ` + added.join("\n  "));
  if (removed.length) console.log(`[sitemap] removed ${removed.length} orphan(s):\n  ` + removed.join("\n  "));
}

main();
