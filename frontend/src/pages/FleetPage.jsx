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

  const vehicles = [
    {
      name: 'Economy Class',
      tagline: 'Affordable Comfort',
      capacity: '3 Passengers',
      luggage: '2 Bags',
      image: 'https://92limo.com/wp-content/uploads/2025/07/economy-class-removebg-preview-300x179.png',
      features: [
        'Comfortable seating',
        'Climate control',
        'Professional chauffeur',
        'Affordable rates',
        'Clean and maintained',
        'On-time guarantee',
      ],
      description: 'Our Economy Class vehicles offer reliable and comfortable transportation at affordable rates. Perfect for solo travelers or small groups looking for quality service without the premium price tag.',
    },
    {
      name: 'Business Class',
      tagline: 'Mercedes E-Class',
      capacity: '3 Passengers',
      luggage: '2 Bags',
      image: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-e-class-removebg-preview-300x138.png',
      features: [
        'Mercedes-Benz E-Class',
        'Premium leather interior',
        'Executive comfort',
        'Wi-Fi available',
        'USB charging ports',
        'Professional uniformed chauffeur',
      ],
      description: 'Step up to our Business Class with the elegant Mercedes E-Class. Ideal for corporate travel, client meetings, and professionals who demand sophistication and reliability.',
    },
    {
      name: 'First Class',
      tagline: 'Mercedes S-Class',
      capacity: '3 Passengers',
      luggage: '2 Bags',
      image: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-s-class-300x186.png',
      features: [
        'Mercedes-Benz S-Class',
        'Ultimate luxury interior',
        'Rear executive seating',
        'Premium sound system',
        'Climate-controlled seats',
        'VIP treatment guaranteed',
      ],
      description: 'Experience the pinnacle of automotive luxury with our First Class Mercedes S-Class. The flagship sedan delivers uncompromising comfort for executives and VIPs who expect nothing but the best.',
    },
    {
      name: 'Premium SUV',
      tagline: 'Cadillac Escalade',
      capacity: '5 Passengers',
      luggage: '5 Bags',
      image: 'https://92limo.com/wp-content/uploads/2025/06/cadillac-escalade-300x169.png',
      features: [
        'Cadillac Escalade',
        'Spacious luxury interior',
        'Extra luggage capacity',
        'Premium entertainment',
        'All-weather capability',
        'Perfect for groups',
      ],
      description: 'The iconic Cadillac Escalade combines commanding presence with exceptional comfort. Ideal for families, small groups, or anyone who needs extra space without sacrificing luxury.',
    },
    {
      name: 'Sprinter Van',
      tagline: 'Mercedes Sprinter',
      capacity: '13 Passengers',
      luggage: '12 Bags',
      image: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-sprinter-300x200.png',
      features: [
        'Mercedes-Benz Sprinter',
        'Large group capacity',
        'Ample luggage space',
        'Standing room available',
        'Corporate event ready',
        'Airport group transfers',
      ],
      description: 'Our Mercedes Sprinter Van is the ultimate solution for large groups, corporate events, and airport transfers. Comfortable seating for up to 13 passengers with generous luggage capacity.',
    },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="fleet-page">
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(https://92limo.com/wp-content/uploads/2025/06/mercedes-s-class-300x186.png)',
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

      {/* Fleet Showcase */}
      <section className="py-12 sm:py-20 lg:py-24" data-testid="fleet-showcase-section">
        <div className="container mx-auto px-4">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className={`mb-16 sm:mb-20 lg:mb-24 ${index !== vehicles.length - 1 ? 'pb-16 sm:pb-20 lg:pb-24 border-b-2 border-gray-200' : ''}`}
              data-testid={`vehicle-${index}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} order-2 lg:order-none`}>
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 sm:h-64 lg:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <div className="bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold">
                        {vehicle.tagline}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} order-1 lg:order-none`}>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">{vehicle.name}</h2>
                  <div className="flex gap-4 sm:gap-8 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Capacity</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">{vehicle.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-amber-500" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Luggage</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">{vehicle.luggage}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">{vehicle.description}</p>
                  <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-900 uppercase tracking-wider">Premium Features:</h3>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-8 sm:mb-10">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-lg w-full sm:w-auto"
                    data-testid={`vehicle-book-button-${index}`}
                  >
                    <Link to="/booking">
                      Reserve This Vehicle
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
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
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <img src="https://92limo.com/wp-content/uploads/2025/06/mercedes-benz-logo.png" alt="Mercedes-Benz" className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://92limo.com/wp-content/uploads/2025/06/cadillac-logo.png" alt="Cadillac" className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://92limo.com/wp-content/uploads/2025/06/lincoln-logo.png" alt="Lincoln" className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://92limo.com/wp-content/uploads/2025/06/ford-logo.png" alt="Ford" className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://92limo.com/wp-content/uploads/2025/06/chevrolet-logo.png" alt="Chevrolet" className="h-12 sm:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
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
              <a href="tel:+18776790100">
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
