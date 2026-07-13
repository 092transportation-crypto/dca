import { useEffect } from 'react';
import { setPageSeo } from '@/lib/seo';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, Users, Heart, CheckCircle, Target } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    setPageSeo({
      title: "About DCA Limos | Licensed Maryland Car Service",
      description: 'Meet DCA Limos — a licensed & insured Maryland carrier providing professional DMV transportation with pro chauffeurs, 24/7. Book online or call (877) 609-1919.',
      path: "/about",
    });
  }, []);

  const values = [
    {
      icon: <Shield className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Safety & Security',
      description: 'Your safety is paramount. All chauffeurs undergo comprehensive background checks, drug testing, and professional training. Our fleet is fully insured, licensed, and maintained to the highest safety standards.',
    },
    {
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Unwavering Excellence',
      description: 'We maintain the highest standards in every aspect of service delivery—from immaculate vehicle presentation to professional chauffeur conduct and customer care.',
    },
    {
      icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Punctuality Guaranteed',
      description: 'Count on us for dependable, on-time service. Real-time flight tracking, careful route planning, and strategic buffer time ensure punctual arrivals every single time.',
    },
    {
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Professional Excellence',
      description: 'Our chauffeurs embody professionalism—courteous, knowledgeable, immaculately presented, and committed to providing exceptional service on every journey.',
    },
    {
      icon: <Heart className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Customer-Centric',
      description: 'Your satisfaction drives everything we do. We go above and beyond to exceed expectations, creating memorable experiences that keep clients returning.',
    },
    {
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: 'Integrity & Trust',
      description: 'Transparent pricing, honest communication, and ethical business practices have built our reputation as Baltimore\'s most trusted transportation provider.',
    },
  ];

  const stats = [
    { number: 'Licensed', label: 'Insured Maryland Carrier', icon: '🛡️' },
    { number: 'DMV', label: 'Professional Transportation', icon: '🚘' },
    { number: '24/7', label: 'Availability', icon: '🕐' },
    { number: '99.2%', label: 'On-Time Rate', icon: '⏱️' },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="about-page">
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85)'
        }}
        data-testid="about-hero"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6">
            About DCA Limo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">Professional DMV Transportation, Licensed & Insured</h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Premier luxury airport transportation and executive car service provider serving Washington DC, Maryland &amp; Virginia.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-20 lg:py-24" data-testid="company-story-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">A Legacy of Luxury & Reliability</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85" 
                  alt="Our Service"
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  DCA Limos was built with a singular vision—to redefine luxury transportation in the Baltimore-Washington corridor. As a licensed and insured Maryland carrier, we have grown into a trusted name in <Link to="/services" className="text-amber-600 hover:underline font-semibold">airport transportation</Link> and <Link to="/services" className="text-amber-600 hover:underline font-semibold">executive car service</Link>.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our growth is built on an unwavering commitment to excellence: <Link to="/fleet" className="text-amber-600 hover:underline font-semibold">impeccably maintained vehicles</Link>, professionally trained chauffeurs, and service that consistently exceeds expectations.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-10 border-l-4 border-amber-500">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Today, we serve business and leisure travelers across the DMV—from Fortune 500 executives to families celebrating life's special moments. Our on-time record and consistent five-star reviews reflect our dedication to operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-r from-amber-500 to-amber-600" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl sm:text-6xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-5xl font-bold text-black mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-lg text-black font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white" data-testid="core-values-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Our Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Built on Principles of Excellence</h2>
            <p className="text-base sm:text-xl text-amber-600 max-w-3xl mx-auto leading-relaxed px-4">
              These core values guide every decision we make and every service we provide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-amber-500 hover:shadow-2xl transition-all duration-300" data-testid={`value-${index}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-black mb-4 sm:mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-sm sm:text-base text-amber-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" data-testid="why-choose-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Competitive Advantages</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">The 92 Limo Services Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Veteran Chauffeurs', desc: 'Average 10+ years professional driving experience. Background-checked, drug-tested, and professionally trained.' },
              { title: 'Premium Fleet', desc: 'Late-model luxury vehicles maintained to manufacturer specifications. Detailed before every service.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. All-inclusive quotes with upfront pricing and flexible payment options.' },
              { title: '24/7 Concierge Support', desc: 'Round-the-clock customer service for bookings, modifications, and assistance whenever you need us.' },
              { title: 'Real-Time Flight Tracking', desc: 'Advanced monitoring ensures we adjust for delays automatically—no extra charges for wait time.' },
              { title: 'Satisfaction Guaranteed', desc: 'We stand behind our service. If we don\'t meet your expectations, we\'ll make it right—guaranteed.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur p-4 sm:p-6 rounded-xl border border-white/10">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gray-50" data-testid="about-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Experience the Excellence</h2>
          <p className="text-base sm:text-xl text-amber-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Experience professional DMV transportation from a licensed & insured Maryland carrier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="about-cta-book-button"
            >
              <Link to="/booking">
                Book Your Ride Now
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="about-cta-call-button"
            >
              <a href="tel:+18776091919">
                Call +1 (877) 609-1919
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;