// Scheduled publishing for blog posts.
//
// Opt-in: a post with `scheduled: true` whose `date` (America/New_York) is
// later than the build's publish cutoff is left out of BLOG_POSTS
// (src/data/blogPosts.js), so it has no /blog/<slug> page, no card on /blog,
// no related-post link, no breadcrumb, no sitemap entry and no prerendered
// HTML. Posts without the flag are always live (some older posts carry future
// dates and are already indexed).
// A daily Vercel cron (api/cron/rebuild.js) redeploys the site, which moves the
// cutoff forward and publishes posts on their date with no manual step.
//
// `date` may be the site's long form ("November 6, 2026") or YYYY-MM-DD.
// A scheduled post with an unparseable date stays hidden.
//
// Import-free on purpose so build scripts can load it without the app.
//
// Cutoff source: the client bundle gets REACT_APP_PUBLISH_CUTOFF inlined at
// build time (set in craco.config.js), so the browser never uses its own clock.
// Node scripts (sitemap, prerender) fall back to today's Eastern date.

export const PUBLISH_TZ = 'America/New_York';

export function easternDate(d = new Date()) {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: PUBLISH_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

// "November 6, 2026" / "Nov 6, 2026" / "2026-11-06" -> "2026-11-06" ('' if not a date).
export function toIsoDate(value) {
  if (typeof value !== 'string') return '';
  const s = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const m = /^([A-Za-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/.exec(s);
  if (!m) return '';
  const word = m[1].toLowerCase();
  const month = MONTHS.findIndex((name) => word.length >= 3 && name.startsWith(word));
  if (month < 0) return '';
  return `${m[3]}-${String(month + 1).padStart(2, '0')}-${m[2].padStart(2, '0')}`;
}

function readCutoff() {
  let fromEnv = '';
  try {
    // Written literally so CRA's DefinePlugin can inline it.
    fromEnv = process.env.REACT_APP_PUBLISH_CUTOFF || '';
  } catch (e) {
    fromEnv = '';
  }
  return /^\d{4}-\d{2}-\d{2}$/.test(fromEnv) ? fromEnv : easternDate();
}

export const PUBLISH_CUTOFF = readCutoff();

export function isPublished(post) {
  if (!post || post.scheduled !== true) return true;
  const iso = toIsoDate(post.date);
  return iso !== '' && iso <= PUBLISH_CUTOFF;
}
