// Small "spoke -> pillar" link row for geo/route/event pages, so a visitor
// (and a crawler) landing on a city, route or venue page can click straight
// up to the broad airport/service pillar pages at /limo/<slug>. Pulled from
// LANDING_PAGES so every link is guaranteed to resolve to a real route.
import { Link } from 'react-router-dom';
import { LANDING_PAGES } from '@/data/landingPages';

const byslug = (slug) => LANDING_PAGES.find((p) => p.slug === slug);

// kind: "city" | "route" | "event" | "service" — picks one extra, contextually
// relevant pillar beyond the three airport pages every page links to.
const EXTRA_BY_KIND = {
  city: 'corporate-car-service',
  route: 'corporate-car-service',
  event: 'sports-game-day-limo',
  wedding: 'wedding-limo-service',
};

const PillarLinks = ({ kind = 'city' }) => {
  const airportSlugs = ['dca-airport-limo', 'bwi-airport-limo', 'dulles-airport-limo'];
  const extraSlug = EXTRA_BY_KIND[kind];
  const slugs = [...airportSlugs, ...(extraSlug ? [extraSlug] : [])];
  const pages = slugs.map(byslug).filter(Boolean);
  if (pages.length === 0) return null;

  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100" data-testid="pillar-links">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:text-base">
          <span className="text-gray-500 font-medium">Also see:</span>
          {pages.map((p) => (
            <Link key={p.slug} to={`/limo/${p.slug}`} className="text-amber-600 hover:text-amber-700 font-semibold">
              {p.h1}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarLinks;
