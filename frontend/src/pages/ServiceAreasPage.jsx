import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { setPageSeo } from '@/lib/seo';
import FaqSection from '@/components/FaqSection';
import { PAGE_FAQS } from '@/data/pageFaqs';
import { ROUTE_PAGES } from '@/data/routePages';
import { EVENT_PAGES } from '@/data/eventPages';
import { MARYLAND_PAGES } from '@/data/marylandPages';
import { LANDING_PAGES } from '@/data/landingPages';
import { GUIDES } from '@/data/guides';

// Hub page: one crawlable link to every data-driven landing page. Most of
// these were previously reachable only from the sitemap or from each other.
const byType = (type) => MARYLAND_PAGES.filter((p) => p.type === type).map((p) => ({ to: `/${p.slug}`, label: p.h1 }));
const GROUPS = [
  { title: 'Airport & City Limo Service', items: LANDING_PAGES.map((p) => ({ to: `/limo/${p.slug}`, label: p.h1 })) },
  { title: 'Cities We Serve', items: byType('city') },
  { title: 'Routes from Reagan National (DCA)', items: ROUTE_PAGES.map((p) => ({ to: `/${p.slug}`, label: p.h1 })) },
  { title: 'More Airport & City Routes', items: byType('route') },
  { title: 'Chauffeur Services', items: byType('service') },
  { title: 'Events & Venues', items: [...EVENT_PAGES.map((p) => ({ to: `/${p.slug}`, label: p.h1 })), ...byType('event')] },
  { title: 'Guides', items: GUIDES.map((g) => ({ to: `/${g.slug}`, label: g.title })) },
];

const ServiceAreasPage = () => {
  useEffect(() => {
    setPageSeo({
      title: 'Service Areas | DC, Virginia & Maryland Car Service | DCA Limos',
      description: 'Every city, airport route, venue and service DCA Limos covers across Washington DC, Northern Virginia and Maryland. Flat rates, 24/7. Call (877) 609-1919.',
      path: '/service-areas',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="service-areas-page">
      <section className="bg-black text-white pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Service Areas</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 max-w-4xl leading-tight">Where DCA Limos Drives</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Chauffeured car service across Washington DC, Northern Virginia and Maryland — every airport route, city,
            venue and service we publish a page for, in one place. If your town is not listed, we almost certainly
            still serve it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              <Link to="/booking">Book a Ride</Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black bg-transparent">
              <a href="tel:+18776091919">Call (877) 609-1919</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {GROUPS.filter((g) => g.items.length).map((group) => (
            <div key={group.title} data-testid="service-area-group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{group.title}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={PAGE_FAQS['/service-areas']} />
    </div>
  );
};

export default ServiceAreasPage;
