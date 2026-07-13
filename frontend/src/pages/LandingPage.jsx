import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, Calendar, Car, CheckCircle2, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findLandingPage, LANDING_PAGES } from '@/data/landingPages';

const LandingPage = () => {
  const { slug } = useParams();
  const data = findLandingPage(slug);

  useEffect(() => {
    if (!data) return;
    document.title = data.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.metaDesc);
    const canonical = document.querySelector('link[rel="canonical"]');
    const href = `https://www.dcalimos.com/limo/${data.slug}`;
    if (canonical) {
      canonical.setAttribute('href', href);
    } else {
      const l = document.createElement('link');
      l.rel = 'canonical';
      l.href = href;
      document.head.appendChild(l);
    }
  }, [data]);

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  const relatedLandings = LANDING_PAGES.filter((p) => p.slug !== data.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-white" data-testid={`landing-page-${data.slug}`}>
      {/* HERO */}
      <section
        className="relative py-20 sm:py-28 lg:py-36 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url(${data.image})` }}
        data-testid="landing-hero"
      >
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 bg-amber-500/10 border border-amber-500/40 px-4 py-1.5 rounded-full">
            {data.category}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl leading-tight">
            {data.h1}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">{data.hero}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/booking">
              <Button
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-8 py-6 shadow-lg w-full sm:w-auto"
                data-testid="landing-cta-book"
              >
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+18776091919">
              <Button
                variant="outline"
                className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-base sm:text-lg px-8 py-6 w-full sm:w-auto"
                data-testid="landing-cta-call"
              >
                <Phone className="mr-2 h-5 w-5" /> (877) 609-1919
              </Button>
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-400 fill-amber-400" /> Licensed & Insured Maryland Carrier</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-400" /> 24/7 dispatch</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-400" /> Licensed & insured</div>
          </div>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why choose DCA Limos for {data.category.toLowerCase()}?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{data.intro}</p>
              {data.seoText && (
                <p className="text-base text-gray-600 leading-relaxed mb-6">{data.seoText}</p>
              )}
              <ul className="space-y-3.5">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3" data-testid="landing-highlight">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-black" />
                    </span>
                    <span className="text-base sm:text-lg text-gray-800">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-2">
              <Card className="border-2 border-amber-500 shadow-xl sticky top-28">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to book?</h3>
                  <p className="text-sm text-gray-600 mb-5">Get a personalized quote in under 15 minutes.</p>
                  <Link to="/booking" className="block">
                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-6 text-base mb-3" data-testid="landing-sidebar-book">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href="tel:+18776091919" className="block">
                    <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 font-semibold py-6 text-base" data-testid="landing-sidebar-call">
                      <Phone className="mr-2 h-4 w-4" /> (877) 609-1919
                    </Button>
                  </a>
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-600" /> 24/7 service · 365 days</div>
                    <div className="flex items-center gap-2"><Car className="h-4 w-4 text-amber-600" /> Mercedes fleet · SUVs · Sprinters</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600" /> Best-rate guarantee</div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Surrounding areas we serve</h2>
            <p className="text-base sm:text-lg text-gray-600">We cover {data.relatedCities.join(', ')} and the entire DMV region.</p>
          </div>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">
            {data.relatedCities.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm sm:text-base text-gray-800 font-medium">
                <MapPin className="h-4 w-4 text-amber-600" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS to other landing pages */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">Other DCA Limos services</h2>
            <p className="text-center text-gray-600 mb-10">Explore our complete range of luxury transportation across Maryland, DC & Virginia.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedLandings.map((p) => (
                <Link key={p.slug} to={`/limo/${p.slug}`} className="group" data-testid={`related-landing-${p.slug}`}>
                  <Card className="border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-5 sm:p-6">
                      <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">{p.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-amber-600 transition-colors">{p.h1}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{p.hero}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm">
                        Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            Book your <span className="text-amber-400">{data.h1.replace(' Service', '').toLowerCase()}</span> today
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get a quote in under 15 minutes. Free cancellation up to 24 hours before pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-8 py-6 shadow-lg w-full sm:w-auto" data-testid="landing-final-book">
                <Calendar className="mr-2 h-5 w-5" /> Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+18776091919">
              <Button variant="outline" className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-base sm:text-lg px-8 py-6 w-full sm:w-auto" data-testid="landing-final-call">
                <Phone className="mr-2 h-5 w-5" /> Call (877) 609-1919
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
