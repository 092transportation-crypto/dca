// Resolves a plain city/area name (as used in LANDING_PAGES' relatedCities
// lists) to a real, existing internal route — a Maryland/city content page,
// a sister "pillar" landing page, or a DCA route page — so pillar pages can
// link down to their geo-specific spokes instead of showing inert text.
// Returns null (never an invented slug) when no matching page exists.
import { MARYLAND_PAGES } from '@/data/marylandPages';
import { ROUTE_PAGES } from '@/data/routePages';
import { LANDING_PAGES } from '@/data/landingPages';

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[.’']/g, '')
    .replace(/\bheights\b/g, '')
    .replace(/,\s*(md|va|de|pa|dc)$/i, '')
    .replace(/\s+/g, ' ')
    .trim();

const CITY_INDEX = MARYLAND_PAGES.filter((p) => p.type === 'city').map((p) => ({ slug: p.slug, name: norm(p.name) }));
const PILLAR_CITY_INDEX = LANDING_PAGES.filter((p) => p.category === 'Maryland Cities').map((p) => ({
  slug: p.slug,
  name: norm(p.h1.replace(/ Limo Service$/i, '')),
}));
const ROUTE_INDEX = ROUTE_PAGES.map((p) => ({ slug: p.slug, name: norm(p.destination) }));

export function resolveAreaLink(rawName) {
  const n = norm(rawName);
  if (n === 'washington dc' || n === 'washington d c') return '/dca-to-washington-dc';
  if (n === 'howard county') return '/limo/columbia-limo-service';
  const city = CITY_INDEX.find((c) => c.name === n);
  if (city) return `/${city.slug}`;
  const pillar = PILLAR_CITY_INDEX.find((c) => c.name === n);
  if (pillar) return `/limo/${pillar.slug}`;
  const route = ROUTE_INDEX.find((r) => r.name === n);
  if (route) return `/${route.slug}`;
  return null;
}
