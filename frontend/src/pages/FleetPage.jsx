import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Award, Star, Users, Briefcase } from 'lucide-react';

const FleetPage = () => {
  useEffect(() => {
    document.title = "Luxury Fleet | Mercedes E-Class, S-Class, Cadillac Escalade, Sprinter Van | DCA Limo Washington DC";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore DCA Limo\'s luxury fleet: Mercedes E-Class, S-Class, Cadillac Escalade SUV, and Sprinter Vans. Professional chauffeurs, immaculate vehicles for airport transfers and events in DC, MD, VA.');
    }
  }, []);

  // Same categories, vehicles, and order as bwichauffeur.com.
  // "First Class Sedan" and "Van" each contain two vehicles.
  const vehicles = [
    {
      category: 'Business Sedan',
      name: 'Mercedes-Benz E-Class 2025',
      image: '/images/mercedes-e-class.jpg',
      passengers: '3',
      luggage: '2',
      description:
        'The perfect business sedan for airport transfers and corporate travel. Refined elegance meets cutting-edge technology.',
    },
    {
      category: 'First Class Sedan',
      name: 'BMW 7 Series',
      image: '/images/bmw-7-series.jpg',
      passengers: '3',
      luggage: '2',
      description:
        'Where performance meets pure luxury. The ultimate first class sedan for discerning travelers.',
    },
    {
      category: 'First Class Sedan',
      name: 'Mercedes-Benz S-Class',
      image: '/images/mercedes-sclass.jpg',
      passengers: '3',
      luggage: '2',
      description:
        'The pinnacle of sedan luxury. First-class experience for those who accept nothing less.',
    },
    {
      category: 'Midsize SUV',
      name: 'Lincoln Nautilus',
      image: '/images/lincoln-nautilus.jpg',
      passengers: '3',
      luggage: '4',
      description:
        'The perfect balance of comfort and practicality for families and travelers with extra luggage.',
    },
    {
      category: 'Luxury SUV',
      name: 'Chevrolet Suburban',
      image: '/images/chevy-suburban.jpg',
      passengers: '5',
      luggage: '5',
      description:
        'Maximum space without compromising luxury. Ideal for larger groups and extended journeys.',
    },
    {
      category: 'Premium SUV',
      name: 'Cadillac Escalade',
      image: '/images/cadillac-escalade.jpg',
      passengers: '6',
      luggage: '5',
      description:
        "America's premier luxury SUV. Commanding presence with superior comfort for families and groups.",
    },
    {
      category: 'Van',
      name: 'Mercedes Sprinter Shuttle',
      image: '/images/sprinter-shuttle-seats.jpg',
      passengers: '13',
      luggage: '13',
      description:
        'Comfortable group transportation for airport runs, corporate events, and group outings. Spacious and reliable for larger parties.',
    },
    {
      category: 'Van',
      name: 'Mercedes Sprinter Executive',
      image: '/images/mercedes-sprinter.jpg',
      passengers: '13',
      luggage: '13',
      description:
        'Premium executive van with upgraded interior, captain chairs, and luxury amenities. Perfect for corporate groups who demand comfort.',
    },
    {
      category: 'Limo',
      name: 'Mercedes Sprinter Limo',
      image: '/images/limousine.jpg',
      passengers: '13',
      luggage: '13',
      description:
        'The ultimate stretch limo experience in a Sprinter. Perfect for weddings, proms, and special occasions that deserve a grand entrance.',
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="fleet-page">
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/images/mercedes-sclass.jpg)',
          backgroundColor: '#111'
        }}
        data-testid="fleet-hero"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6">
            Our Premium Fleet
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">Luxury Limo Fleet - Mercedes, Cadillac &amp; More</h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            From economy to first class, we offer a diverse fleet of meticulously maintained vehicles. <Link to="/booking" className="text-amber-400 hover:underline">Book your ride</Link> or view our <Link to="/services" className="text-amber-400 hover:underline">services</Link>.
          </p>
        </div>
      </section>

      {/* Fleet Showcase — black & gold card grid, same structure as bwichauffeur */}
      <section className="py-12 sm:py-20 lg:py-24 bg-black" data-testid="fleet-showcase-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-500/20 hover:border-amber-500/60 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col"
                data-testid={`vehicle-${index}`}
              >
                {/* Vehicle Image */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} — ${vehicle.category} chauffeur vehicle, seats ${vehicle.passengers}`}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{vehicle.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  {/* Gold category label */}
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {vehicle.category}
                  </span>

                  {/* Vehicle name */}
                  <h3 className="text-xl font-bold text-white mb-4">{vehicle.name}</h3>

                  {/* Passengers + luggage with icons */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-amber-400" />
                      <span className="text-white font-medium">{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-amber-400" />
                      <span className="text-white font-medium">{vehicle.luggage} Bags</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm flex-1">{vehicle.description}</p>

                  {/* Book Now button */}
                  <Button
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold shadow-lg"
                    data-testid={`vehicle-book-button-${index}`}
                  >
                    <Link to="/booking" aria-label={`Book the ${vehicle.name}`}>
                      Book Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust message */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3">
              <Star className="h-5 w-5 text-amber-400" />
              <span className="text-gray-300">
                All vehicles are fully licensed, insured, and professionally maintained
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white" data-testid="fleet-standards-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 block">Our Standards</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Uncompromising Excellence</h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Every vehicle undergoes rigorous maintenance and inspection protocols to ensure your safety, comfort, and satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { emoji: '🔧', title: 'Rigorous Maintenance', desc: 'Comprehensive maintenance schedules exceed manufacturer recommendations. Every vehicle is service-ready, every time.' },
              { emoji: '✨', title: 'Pristine Condition', desc: 'Professional detailing before every service ensures you always experience immaculate, showroom-quality surroundings.' },
              { emoji: '🛡️', title: 'Safety First', desc: 'Advanced safety features and comprehensive insurance coverage provide complete peace of mind on every journey.' },
              { emoji: '🌟', title: 'Premium Amenities', desc: 'Complimentary refreshments, charging capabilities, and thoughtful touches elevate every experience.' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-amber-500/20">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.emoji}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Fleet Brands</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {['Mercedes-Benz', 'BMW', 'Cadillac', 'Lincoln', 'Chevrolet'].map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-2xl font-bold tracking-wide text-gray-400 hover:text-gray-700 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Certifications */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 px-4">Certified & Compliant Fleet</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed px-4">
              All vehicles meet or exceed federal safety standards and are fully licensed for commercial transportation.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'DOT Certified' },
                { icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Commercial Licensed' },
                { icon: <Star className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Fully Insured' },
                { icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Safety Inspected' },
              ].map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-amber-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-500 rounded-full text-black mb-3 sm:mb-4">
                    {cert.icon}
                  </div>
                  <p className="text-sm sm:text-base font-bold text-gray-900">{cert.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-r from-amber-500 to-amber-600" data-testid="fleet-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black px-4">Select Your Perfect Vehicle</h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-10 text-black max-w-2xl mx-auto leading-relaxed px-4">
            Experience the finest in luxury transportation. Reserve your vehicle today and discover excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="fleet-cta-book-button"
            >
              <Link to="/booking">
                Reserve Your Vehicle
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base sm:text-lg px-10 sm:px-12 py-6 sm:py-7 w-full sm:w-auto"
              data-testid="fleet-cta-call-button"
            >
              <a href="tel:+18776091919">
                Call for Details
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
