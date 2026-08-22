import { useEffect } from 'react';
import { setPageSeo } from '@/lib/seo';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Calendar, MapPin, Clock, Car, BadgeDollarSign } from 'lucide-react';
import { Toaster } from 'sonner';
import InquiryForm from '@/components/InquiryForm';
import QuoteCalculator from '@/components/QuoteCalculator';

const BookingPage = () => {
  useEffect(() => {
    setPageSeo({
      title: "Book DCA Airport Car Service | Instant Quote",
      description: 'Book DCA airport car service in minutes — instant flat-rate quote, no surge, 24/7 chauffeurs across DC, MD & VA. Reserve online or call (877) 609-1919.',
      path: "/booking",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-8 sm:py-12" data-testid="booking-page">
      <Toaster position="top-right" richColors />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">Premium Luxury Transportation</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Get a <span className="text-amber-400">Free Quote</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Fast response guaranteed. Reserve airport transportation, corporate car service, wedding limos &amp; more across Maryland, DC &amp; Virginia.
          </p>
        </div>

        {/* Flat-Rate Notice */}
        <div
          data-testid="rates-notice"
          className="max-w-6xl mx-auto mb-8 overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10"
        >
          <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-amber-200" aria-hidden="true" />
          <div className="flex flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-200 shadow-lg shadow-amber-500/30">
              <BadgeDollarSign className="h-6 w-6 text-black" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-base font-bold text-white md:text-lg">
                Flat-Rate Pricing — <span className="text-amber-400">No Surge, Ever</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-300">
                Rates vary by vehicle and distance. Every quote is all-inclusive — tolls,
                taxes &amp; gratuity. Fill out the form below for your{' '}
                <span className="font-semibold text-amber-400">free instant quote</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Instant quote calculator above the inquiry form */}
          <div className="lg:col-span-2">
            <QuoteCalculator />
            <InquiryForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border border-amber-500/40 bg-white/[0.03] shadow-lg shadow-amber-500/5">
              <CardContent className="p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Or Call 24/7</h2>
                    <p className="text-sm text-gray-400 mb-2">Talk to our concierge instantly.</p>
                    <a
                      href="tel:+18776091919"
                      className="text-xl sm:text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                      data-testid="booking-phone-link"
                    >
                      +1 (877) 609-1919
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-gradient-to-br from-gray-900 to-black text-white shadow-lg">
              <CardContent className="p-6 sm:p-7">
                <h2 className="text-lg sm:text-xl font-bold mb-4">Why Book With DCA Limos?</h2>
                <ul className="space-y-2.5">
                  {[
                    'Instant confirmation',
                    'Best price guarantee',
                    'Professional chauffeurs',
                    'Real-time flight tracking',
                    'Luxury Mercedes fleet',
                    '24/7 customer support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-amber-400 text-base">✓</span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-amber-500/20 bg-amber-500/[0.05] shadow">
              <CardContent className="p-6 sm:p-7">
                <h3 className="font-bold text-white mb-3">How It Works</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span><strong>1.</strong> Tell us your pickup &amp; destination</span></li>
                  <li className="flex gap-3"><Clock className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span><strong>2.</strong> Choose date, time &amp; service</span></li>
                  <li className="flex gap-3"><Car className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span><strong>3.</strong> Get a personalized quote within 15 min</span></li>
                  <li className="flex gap-3"><Calendar className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" /><span><strong>4.</strong> Confirm &amp; ride in luxury</span></li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Info */}
        <div className="max-w-6xl mx-auto mt-8 bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-8 shadow">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Important Booking Information</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base text-gray-300">
            {[
              'Book at least 2 hours in advance for guaranteed availability',
              'For airport pickups, provide your flight number for real-time tracking',
              'Free cancellation up to 24 hours before scheduled pickup',
              'All major credit cards accepted — secure payment processing',
              'Gratuity and all taxes included in quoted price',
              '60-minute complimentary wait time on airport pickups',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Explore more — internal links */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto text-center text-sm sm:text-base text-gray-400 border-t border-white/10 pt-8 mt-8">
          Explore DCA Limos: <Link to="/fleet" className="text-amber-400 hover:underline font-semibold">our luxury fleet</Link>,{' '}
          <Link to="/services" className="text-amber-400 hover:underline font-semibold">all services</Link>,{' '}
          <Link to="/dca-to-washington-dc" className="text-amber-400 hover:underline font-semibold">DCA to DC rates</Link>, or{' '}
          <Link to="/contact" className="text-amber-400 hover:underline font-semibold">contact our team</Link>.
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
