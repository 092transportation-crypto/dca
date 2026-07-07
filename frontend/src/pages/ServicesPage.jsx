import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Briefcase, PartyPopper, Calendar, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Limo Services | Airport Transportation, Corporate Car Service & Wedding Limo in DC, MD, VA | DCA Limo";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'DCA Limo offers premium airport transportation to DCA, BWI & Dulles, corporate car service, wedding limos, and prom transportation in Washington DC, Maryland & Virginia. Book 24/7!');
    }
  }, []);

  const services = [
    {
      title: 'Airport Transportation Service',
      icon: <Plane className="h-10 w-10 sm:h-12 sm:w-12" />,
      image: 'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      description: 'Premier DCA, BWI & Dulles airport transfer service with real-time flight tracking, meet-and-greet, and luggage assistance. Your stress-free journey starts here.',
      features: [
        'Real-time flight tracking for precise pickups',
        'Complimentary meet-and-greet service',
        'Professional luggage assistance',
        'Free waiting time for flight delays',
        'Door-to-door premium service',
        'Available 24 hours, 7 days a week',
      ],
    },
    {
      title: 'Corporate Car Service',
      icon: <Briefcase className="h-10 w-10 sm:h-12 sm:w-12" />,
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
      description: 'Executive transportation solutions for business professionals in Washington DC, Maryland & Virginia who demand punctuality, privacy, and professionalism.',
      features: [
        'Dedicated corporate account management',
        'Flexible billing and invoicing options',
        'Multi-stop itinerary coordination',
        'Wi-Fi equipped executive vehicles',
        'Professional business attire chauffeurs',
        'Absolute confidentiality and discretion',
      ],
    },
    {
      title: 'Wedding Limo Service',
      icon: <PartyPopper className="h-10 w-10 sm:h-12 sm:w-12" />,
      image: 'https://images.unsplash.com/photo-1764269711580-6ec7ced59b7c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      description: 'Elegant wedding limousine service that transforms your special day into an unforgettable experience. Luxury, style, and sophistication for your big day.',
      features: [
        'Red carpet arrival service',
        'Champagne and premium refreshments',
        'Custom vehicle decorations available',
        'Multiple vehicle fleet coordination',
        'Professional event photography',
        'Flexible hourly packages',
      ],
    },
    {
      title: 'Prom Limo & Party Transportation',
      icon: <Calendar className="h-10 w-10 sm:h-12 sm:w-12" />,
      image: 'https://images.pexels.com/photos/17396143/pexels-photo-17396143.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200',
      description: 'Create lasting memories for birthdays, graduations, anniversaries, and milestone celebrations with our premium fleet.',
      features: [
        'Personalized decoration packages',
        'Birthday and anniversary specials',
        'Large group accommodation',
        'Multi-destination celebration tours',
        'Surprise coordination assistance',
        'Premium sound and entertainment systems',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="services-page">
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85)'
        }}
        data-testid="services-hero"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6">
            Premium Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">Premium Limo &amp; Car Services in Washington DC, Maryland &amp; Virginia</h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            From airport transportation to corporate travel and wedding limousines, we provide comprehensive, reliable, and luxurious transportation services throughout the DMV area.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 sm:py-20 lg:py-24" data-testid="services-detail-section">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`mb-16 sm:mb-20 lg:mb-24 ${index !== services.length - 1 ? 'pb-16 sm:pb-20 lg:pb-24 border-b-2 border-gray-200' : ''}`}
              data-testid={`service-detail-${index}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 text-black p-3 sm:p-4 rounded-xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 sm:space-x-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-lg w-full sm:w-auto"
                    data-testid={`service-book-button-${index}`}
                  >
                    <Link to="/booking">
                      Book This Service Now
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gray-50" data-testid="additional-services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">More Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">Additional Transportation Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">View our <Link to="/fleet" className="text-amber-600 hover:underline font-semibold">luxury vehicle fleet</Link> or <Link to="/contact" className="text-amber-600 hover:underline font-semibold">contact us</Link> for custom quotes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-amber-500 hover:shadow-xl transition-all">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">⏱️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Hourly Charter Service</h3>
                <p className="text-sm sm:text-base text-amber-600 leading-relaxed">
                  Maximum flexibility for multiple stops and extended engagements. Perfect for business roadshows, city tours, or special occasions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-amber-500 hover:shadow-xl transition-all">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🛣️</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Long Distance Travel</h3>
                <p className="text-sm sm:text-base text-amber-600 leading-relaxed">
                  Comfortable, luxurious transportation to Washington DC, Philadelphia, New York, and beyond. Premium service on every mile.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-amber-500 hover:shadow-xl transition-all">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">👥</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Group Transportation</h3>
                <p className="text-sm sm:text-base text-amber-600 leading-relaxed">
                  Coordinated fleet services for large groups. Ideal for corporate events, conferences, conventions, and group celebrations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" data-testid="services-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Reserve Your Premium Service Today</h2>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Experience the difference of professional, reliable, and luxurious transportation. Book instantly online or speak with our concierge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="services-cta-book-button"
            >
              <Link to="/booking">
                Book Online Now
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="services-cta-call-button"
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

export default ServicesPage;