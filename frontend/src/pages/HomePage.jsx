import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users, CheckCircle, Star, Phone, Car, Briefcase, PartyPopper } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    document.title = "DCA Limos – Luxury Airport Chauffeur Service";
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'DCA Limos provides 24/7 premium airport transportation, corporate car service, and luxury limo rentals in Washington DC, Maryland & Virginia. Professional chauffeurs, Mercedes fleet, best rates. Book online now!');
    }
  }, []);
  const services = [
    {
      title: 'Airport Transportation',
      description: 'Reliable DCA, BWI & Dulles airport transfers with real-time flight tracking and professional meet-and-greet service. Your stress-free journey begins here.',
      icon: <Car className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      link: '/services'
    },
    {
      title: 'Corporate Car Service',
      description: 'Executive transportation for business professionals in Washington DC, Maryland & Virginia. Impress clients and arrive on time, every time.',
      icon: <Briefcase className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
      link: '/services'
    },
    {
      title: 'Wedding & Event Limo',
      description: 'Make your special occasions unforgettable with our elegant limousine service. Perfect for weddings, proms, and celebrations.',
      icon: <PartyPopper className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1764269711580-6ec7ced59b7c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      link: '/services'
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Fully Licensed & Insured',
      description: 'DOT certified, commercially licensed, and comprehensively insured for your complete peace of mind.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '99% On-Time Guarantee',
      description: 'Real-time flight tracking and route optimization ensure punctual service every single time.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Professional Chauffeurs',
      description: 'Background-checked, professionally trained drivers with an average of 10+ years experience.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '24/7 Concierge Service',
      description: 'Round-the-clock customer support and booking assistance. We\'re always here when you need us.',
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85)',
          backgroundPosition: 'center center'
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl text-white">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase">
                Premier Airport Transportation Since 2008
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight" data-testid="hero-title">
              Premium Airport Limo &amp;
              <br />
              <span className="text-amber-400">Car Service in Washington DC</span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-2xl" data-testid="hero-subtitle">
              24/7 luxury airport transportation, executive car service &amp; limousine rentals serving DCA, BWI, Dulles &amp; the entire DMV area. Professional chauffeurs, Mercedes fleet, best rates guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-2xl hover:shadow-amber-500/50 transition-all w-full sm:w-auto"
                data-testid="hero-book-now-button"
              >
                <Link to="/booking">
                  Reserve Your Ride
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 transition-all w-full sm:w-auto"
                data-testid="hero-call-button"
              >
                <a href="tel:+16674000092" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+1 (667) 400-0092</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-6 sm:py-8 border-y-2 sm:border-y-4 border-amber-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-1">15+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Years in Business</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-1">50K+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-1">99%</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">On-Time Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white" data-testid="services-overview-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Comprehensive Transportation Solutions</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From executive airport transfers to elegant event transportation, we deliver exceptional service tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-500 overflow-hidden" data-testid={`service-card-${index}`}>
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-amber-500 text-black p-2.5 sm:p-3 rounded-full inline-block mb-3">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <Button 
                    asChild 
                    variant="link" 
                    className="text-amber-600 hover:text-amber-700 font-semibold p-0 group"
                  >
                    <Link to={service.link} className="flex items-center">
                      Learn More 
                      <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" data-testid="why-choose-us-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">The DCA Limo Difference</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Setting the gold standard for professional <Link to="/services" className="text-amber-400 hover:underline">transportation services</Link> in the Washington DC metropolitan area. <Link to="/about" className="text-amber-400 hover:underline">Learn more about us</Link>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group" data-testid={`feature-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed px-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - Maryland Locations */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gray-50" data-testid="service-areas-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Service Coverage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Areas We Serve</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              DCA Limo proudly provides 24/7 premium transportation throughout the Washington DC metropolitan area and Anne Arundel County, Maryland.
            </p>
          </div>

          {/* Main Areas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* DC & Virginia */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-amber-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-black" />
                </div>
                Washington DC & Virginia
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'DCA Airport - All Terminals',
                  'Downtown Washington DC',
                  'Arlington',
                  'Alexandria',
                  'Georgetown',
                  'Dupont Circle',
                  'Capitol Hill',
                  'Northern Virginia'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Maryland - Northern */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-amber-400">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-black" />
                </div>
                Maryland - BWI Area
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Bethesda',
                  'Silver Spring',
                  'Hanover',
                  'Linthicum Heights',
                  'Maryland City',
                  'Severn',
                  'Odenton',
                  'Millersville'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Anne Arundel County Full Coverage */}
          <div className="max-w-6xl mx-auto mt-6 sm:mt-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-10 text-white">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Anne Arundel County - Full Coverage</h3>
                <p className="text-gray-300 text-sm sm:text-base">Premium limo service to all communities in Anne Arundel County</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {[
                  'Annapolis',
                  'Arnold',
                  'Cape St Claire',
                  'Crofton',
                  'Crownsville',
                  'Edgewater',
                  'Gambrills',
                  'Pasadena',
                  'Riva',
                  'Severna Park',
                  'Shady Side',
                  'Sherwood Forest'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-amber-500/20 rounded-lg backdrop-blur-sm border border-amber-500/30">
                    <CheckCircle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm mb-4">Don't see your area? We likely serve it!</p>
                <Button 
                  asChild 
                  className="bg-amber-500 text-black hover:bg-amber-400 font-bold"
                  data-testid="service-areas-contact-button"
                >
                  <a href="tel:+16674000092" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call to Confirm Coverage
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners & Maryland Resources */}
      <section className="py-12 sm:py-20 bg-white border-t border-gray-100" data-testid="partners-resources-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Trusted Partners &amp; Resources</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Proudly Serving Maryland &amp; The DMV</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              DCA Limos partners with and serves clients traveling to Maryland's top airports, tourism destinations, universities, and business hubs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Airports */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-airports">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Airports We Serve</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.bwiairport.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ BWI Thurgood Marshall Airport</a></li>
                <li><a href="https://www.flyreagan.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Reagan National Airport (DCA)</a></li>
                <li><a href="https://www.flydulles.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Washington Dulles International (IAD)</a></li>
                <li><a href="https://www.tsa.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ TSA Travel Information</a></li>
              </ul>
            </div>

            {/* Tourism */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-tourism">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Maryland Tourism</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.visitmaryland.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Visit Maryland</a></li>
                <li><a href="https://www.visitannapolis.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Visit Annapolis &amp; Anne Arundel</a></li>
                <li><a href="https://www.baltimore.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Visit Baltimore</a></li>
                <li><a href="https://washington.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Destination DC</a></li>
                <li><a href="https://www.visitfrederick.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Visit Frederick MD</a></li>
              </ul>
            </div>

            {/* Venues */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-venues">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Popular MD Venues</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.nationalaquarium.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ National Aquarium Baltimore</a></li>
                <li><a href="https://www.merriweathermusic.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Merriweather Post Pavilion</a></li>
                <li><a href="https://www.marylandlivecasino.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Live! Casino Maryland</a></li>
                <li><a href="https://www.mlb.com/orioles" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Camden Yards (Orioles)</a></li>
                <li><a href="https://www.baltimoreravens.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ M&amp;T Bank Stadium (Ravens)</a></li>
              </ul>
            </div>

            {/* Universities */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-universities">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Universities</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.usna.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ US Naval Academy (Annapolis)</a></li>
                <li><a href="https://www.umd.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ University of Maryland</a></li>
                <li><a href="https://www.jhu.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Johns Hopkins Baltimore</a></li>
                <li><a href="https://www.georgetown.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Georgetown University</a></li>
                <li><a href="https://www.gwu.edu/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ George Washington University</a></li>
              </ul>
            </div>

            {/* Government & Business */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-government">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Government &amp; Business</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.aacounty.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Anne Arundel County</a></li>
                <li><a href="https://www.montgomerycountymd.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Montgomery County MD</a></li>
                <li><a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ NIH Bethesda</a></li>
                <li><a href="https://www.nist.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ NIST Gaithersburg</a></li>
                <li><a href="https://mva.maryland.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Maryland MVA</a></li>
              </ul>
            </div>

            {/* Industry */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-t-4 border-amber-500" data-testid="partners-industry">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Industry &amp; Credentials</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="https://www.nlaride.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ National Limousine Association</a></li>
                <li><a href="https://www.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ FMCSA (DOT Safety)</a></li>
                <li><a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Better Business Bureau</a></li>
                <li><a href="https://www.mdchamber.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Maryland Chamber of Commerce</a></li>
                <li><a href="https://www.annapolischamber.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">→ Annapolis Chamber of Commerce</a></li>
              </ul>
            </div>
          </div>

          {/* Internal link cluster */}
          <div className="max-w-6xl mx-auto mt-10 sm:mt-14 bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 sm:p-10 border border-amber-200" data-testid="internal-links-cluster">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 text-center">Explore DCA Limos</h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto text-sm sm:text-base">
              From <Link to="/services" className="text-amber-600 hover:underline font-semibold">airport transfers</Link> and <Link to="/services" className="text-amber-600 hover:underline font-semibold">corporate car service</Link> to <Link to="/services" className="text-amber-600 hover:underline font-semibold">wedding limousines</Link> across Maryland — explore our <Link to="/fleet" className="text-amber-600 hover:underline font-semibold">luxury fleet</Link>, read travel tips on the <Link to="/blog" className="text-amber-600 hover:underline font-semibold">DCA Limos blog</Link>, <Link to="/about" className="text-amber-600 hover:underline font-semibold">learn about our company</Link>, or <Link to="/booking" className="text-amber-600 hover:underline font-semibold">book your Maryland ride online</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
              {[
                { to: '/services', label: 'Annapolis Limo' },
                { to: '/services', label: 'Baltimore Limo' },
                { to: '/services', label: 'Bethesda Car Service' },
                { to: '/services', label: 'BWI Airport Transfer' },
                { to: '/services', label: 'DCA Airport Transfer' },
                { to: '/services', label: 'Dulles Airport Transfer' },
                { to: '/services', label: 'Corporate Travel MD' },
                { to: '/services', label: 'Wedding Limo MD' },
                { to: '/services', label: 'Prom Limo MD' },
                { to: '/fleet', label: 'Mercedes S-Class' },
                { to: '/fleet', label: 'Cadillac Escalade' },
                { to: '/fleet', label: 'Sprinter Van' },
                { to: '/booking', label: 'Book Online' },
                { to: '/contact', label: 'Corporate Accounts' },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-amber-300 text-gray-800 hover:bg-amber-500 hover:text-black hover:border-amber-500 rounded-full text-xs sm:text-sm font-medium transition-all"
                  data-testid={`internal-link-chip-${i}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-r from-amber-500 to-amber-600" data-testid="cta-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black px-4">Ready to Experience Premium Service?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-10 text-black max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of satisfied clients who trust us for their most important journeys. Book now and discover excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 shadow-2xl w-full sm:w-auto"
              data-testid="cta-book-button"
            >
              <Link to="/booking">
                Book Online Now
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="cta-call-button"
            >
              <a href="tel:+16674000092" className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
