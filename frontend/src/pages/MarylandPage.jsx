import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Calendar, Car, CheckCircle2, MapPin, Clock, ArrowRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findMarylandPage } from '@/data/marylandPages';

const SITE_URL = 'https://www.dcalimos.com';
const PHONE_DISPLAY = '(877) 609-1919';
const PHONE_TEL = 'tel:+18776091919';
const HERO_IMAGE = '/images/airport-curbside.jpg';
const STAT_ICONS = [MapPin, Clock, Car, Star];

// Maryland city, route and service landing pages — same layout system as
// RoutePage; content lives in src/data/marylandPages.js.
const MarylandPage = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp || params.slug;
  const data = findMarylandPage(slug);

  useEffect(() => {
    if (!data) return;
    const canonicalHref = `${SITE_URL}/${data.slug}`;
    document.title = data.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#business`,
          name: 'DCA Limos',
          telephone: '+1-877-609-1919',
          url: SITE_URL,
          priceRange: '$$',
          address: { '@type': 'PostalAddress', addressRegion: 'MD', addressCountry: 'US' },
          areaServed: data.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
          openingHours: 'Mo-Su 00:00-23:59',
        },
        {
          '@type': 'Service',
          name: data.h1,
          serviceType: data.schema.serviceType,
          url: canonicalHref,
          description: data.metaDescription,
          areaServed: data.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
          provider: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: data.h1, item: canonicalHref },
          ],
        },
      ],
    };

    const SCRIPT_ID = 'maryland-jsonld';
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    window.scrollTo(0, 0);

    return () => {
      const s = document.getElementById(SCRIPT_ID);
      if (s) s.remove();
    };
  }, [data]);

  if (!data) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-white" data-testid={`maryland-page-${data.slug}`}>
      {/* HERO */}
      <section
        className="relative py-20 sm:py-28 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(${HERO_IMAGE})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 bg-amber-500/10 border border-amber-500/40 px-4 py-1.5 rounded-full">
            {data.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl leading-tight">{data.h1}</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">{data.intro[0]}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/booking">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-8 py-6 shadow-lg w-full sm:w-auto" data-testid="maryland-cta-book">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={PHONE_TEL}>
              <Button variant="outline" className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-base sm:text-lg px-8 py-6 w-full sm:w-auto" data-testid="maryland-cta-call">
                <Phone className="mr-2 h-5 w-5" /> {PHONE_DISPLAY}
              </Button>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {data.stats.map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest mb-1"><Icon className="h-3.5 w-3.5" /> {s.label}</div>
                  <p className="text-white font-bold text-lg">{s.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BODY + SIDEBAR */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              {data.intro.slice(1).map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{p}</p>
              ))}

              <ul className="space-y-3.5 mb-10">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-black" />
                    </span>
                    <span className="text-base sm:text-lg text-gray-800">{h}</span>
                  </li>
                ))}
              </ul>

              {data.sections.map((s) => (
                <div key={s.h2} className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{s.h2}</h2>
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              ))}

              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Vehicles for {data.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.vehicles.map((v) => (
                    <div key={v.name} className="border border-gray-200 rounded-xl p-4 bg-white">
                      <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">{v.cls}</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{v.name}</p>
                      <p className="text-sm text-gray-600 mt-1 flex items-center gap-1.5"><Users className="h-4 w-4 text-amber-600" /> Up to {v.seats} · {v.best}</p>
                    </div>
                  ))}
                </div>
                <Link to="/fleet" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 mt-4">
                  View the full fleet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-2">
              <Card className="border-2 border-amber-500 shadow-xl sticky top-28">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Book {data.name}</h3>
                  <p className="text-base font-semibold text-gray-900 mb-1">Contact us for pricing</p>
                  <p className="text-sm text-gray-600 mb-5">Get a fast, exact quote for your trip and vehicle.</p>
                  <Link to="/booking" className="block">
                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-6 text-base mb-3" data-testid="maryland-sidebar-book">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href={PHONE_TEL} className="block">
                    <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 font-semibold py-6 text-base">
                      <Phone className="mr-2 h-4 w-4" /> {PHONE_DISPLAY}
                    </Button>
                  </a>
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-600" /> 24/7 service · 365 days</div>
                    <div className="flex items-center gap-2"><Car className="h-4 w-4 text-amber-600" /> Sedans · SUVs · Sprinters · Limos</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600" /> Flat rate · no surge</div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">{data.name} — Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-xl p-5 sm:p-6" data-testid="maryland-faq">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/booking">
                <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-6 text-base">
                  Book {data.name} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Related Maryland Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.related.map((r) => (
                <Link key={r.to} to={r.to} className="group">
                  <Card className="border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-5 sm:p-6">
                      <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">DCA Limos</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-600 transition-colors">{r.label}</h3>
                      <div className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm">
                        View page <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Book <span className="text-amber-400">{data.name}</span> today
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professionally chauffeured and guaranteed — free cancellation up to 3 hours before pickup for sedans and SUVs (12 hours for Sprinter vans, limousines and special events). Call {PHONE_DISPLAY} for a free, exact quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-8 py-6 shadow-lg w-full sm:w-auto" data-testid="maryland-final-book">
                <Calendar className="mr-2 h-5 w-5" /> Get a Free Quote
              </Button>
            </Link>
            <a href={PHONE_TEL}>
              <Button variant="outline" className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-base sm:text-lg px-8 py-6 w-full sm:w-auto" data-testid="maryland-final-call">
                <Phone className="mr-2 h-5 w-5" /> Call {PHONE_DISPLAY}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarylandPage;
