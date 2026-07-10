import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact DCA Limo | 24/7 Airport Transportation & Car Service | Call (877) 609-1919 | Washington DC, MD, VA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Contact DCA Limo for 24/7 airport transportation and luxury car service. Call (877) 609-1919 or email info@dcalimos.com. Serving Washington DC, Maryland & Virginia.');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.service || 'General inquiry',
          additional_details: formData.message,
          source: 'Contact page',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }
      toast.success('Message sent successfully! Our team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      toast.error("Couldn't send your message. Please call (877) 609-1919 instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85)'
        }}
        data-testid="contact-hero"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">Contact DCA Limo - 24/7 Transportation Service</h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Available 24/7 for <Link to="/services" className="text-amber-400 hover:underline">airport transportation</Link>, <Link to="/services" className="text-amber-400 hover:underline">corporate car service</Link>, and <Link to="/booking" className="text-amber-400 hover:underline">luxury limo bookings</Link> in Washington DC, Maryland &amp; Virginia.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gray-50" data-testid="contact-info-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-amber-500 hover:shadow-2xl transition-all" data-testid="contact-info-card-0">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-black mb-6 shadow-lg">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">24/7 Phone Service</h3>
                <a href="tel:+18776091919" className="text-2xl font-bold text-amber-600 hover:text-gray-700 block mb-3">
                  +1 (877) 609-1919
                </a>
                <p className="text-amber-600">Always available for immediate bookings and assistance</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-amber-500 hover:shadow-2xl transition-all" data-testid="contact-info-card-1">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-black mb-6 shadow-lg">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Service Area</h3>
                <p className="text-lg font-semibold mb-3 text-gray-900">BWI Airport & Baltimore, MD</p>
                <p className="text-amber-600">Serving the entire Baltimore-Washington metropolitan area</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-amber-500 hover:shadow-2xl transition-all" data-testid="contact-info-card-2">
              <CardContent className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-black mb-6 shadow-lg">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Operating Hours</h3>
                <p className="text-lg font-semibold mb-3 text-gray-900">24/7 Service</p>
                <p className="text-amber-600">Round-the-clock availability for all your transportation needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Booking */}
      <section className="py-24" data-testid="contact-form-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Send Message</span>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Request Information</h2>
                <p className="text-lg text-amber-600">Fill out the form below and our team will respond within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-900 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full h-14 text-lg border-2 focus:border-amber-500"
                    data-testid="contact-form-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-900 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-14 text-lg border-2 focus:border-amber-500"
                    data-testid="contact-form-email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold mb-2 text-gray-900 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full h-14 text-lg border-2 focus:border-amber-500"
                    data-testid="contact-form-phone"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold mb-2 text-gray-900 uppercase tracking-wider">
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Airport Transfer, Corporate, Event, etc."
                    className="w-full h-14 text-lg border-2 focus:border-amber-500"
                    data-testid="contact-form-service"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-900 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your transportation needs and we'll create a customized solution..."
                    rows={6}
                    className="w-full text-lg border-2 focus:border-amber-500"
                    data-testid="contact-form-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-7 shadow-lg"
                  data-testid="contact-form-submit"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Quick Booking Info */}
            <div>
              <div className="mb-8">
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Book Now</span>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Instant Reservation</h2>
                <p className="text-lg text-amber-600">Need immediate service? Choose your preferred booking method below.</p>
              </div>
              
              <Card className="bg-gradient-to-br from-gray-900 to-black text-white mb-8 border-2 border-amber-500">
                <CardContent className="p-10">
                  <div className="text-amber-500 text-5xl mb-6">💻</div>
                  <h3 className="text-3xl font-bold mb-4">Online Booking System</h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Use our secure online platform for instant confirmation, real-time pricing, and the best available rates.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg py-7 shadow-xl"
                    data-testid="quick-book-online-button"
                  >
                    <Link to="/booking">
                      Reserve Online Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500 to-amber-600 border-2 border-gray-700">
                <CardContent className="p-10">
                  <div className="text-black text-5xl mb-6">📞</div>
                  <h3 className="text-3xl font-bold mb-4 text-black">Call for Personalized Service</h3>
                  <p className="text-black mb-8 text-lg leading-relaxed">
                    Speak directly with our concierge team for customized quotes, special requests, and corporate account setup.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-black hover:bg-gray-900 text-white font-bold text-lg py-7 shadow-xl"
                    data-testid="quick-call-button"
                  >
                    <a href="tel:+18776091919" className="flex items-center justify-center space-x-3">
                      <Phone className="h-6 w-6" />
                      <span>Call +1 (877) 609-1919</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-8 p-8 bg-gray-50 rounded-xl border-2 border-gray-200">
                <h4 className="font-bold mb-4 text-lg text-gray-900 uppercase tracking-wider">Booking Information Needed:</h4>
                <ul className="space-y-3">
                  {[
                    'Pickup date, time, and location',
                    'Destination address',
                    'Number of passengers',
                    'Luggage requirements',
                    'Vehicle preference',
                    'Special requests or accommodations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">FAQ</span>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'While we accept last-minute bookings subject to availability, we recommend booking at least 24-48 hours in advance to guarantee vehicle availability, especially during peak travel periods and holidays.'
              },
              {
                q: 'What if my flight is delayed?',
                a: 'We monitor all flights in real-time using advanced tracking systems. Your chauffeur will automatically adjust pickup time based on actual arrival—no additional charges for reasonable delays.'
              },
              {
                q: 'Are there any hidden fees?',
                a: 'Absolutely not. Our pricing is completely transparent and all-inclusive. The quote you receive includes all taxes, fees, fuel surcharges, and gratuity unless otherwise specified.'
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Free cancellation up to 24 hours before scheduled pickup time. Cancellations within 24 hours may incur a cancellation fee. Contact us directly for specific circumstances.'
              },
              {
                q: 'Do you offer corporate accounts?',
                a: 'Yes! We offer comprehensive corporate account services with dedicated account managers, flexible billing options, detailed reporting, and preferential rates for regular clients.'
              },
              {
                q: 'How do I pay for services?',
                a: 'We accept all major credit cards, corporate accounts, and cash. Payment can be processed during online booking, over the phone, or after service completion.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-amber-500 transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                  <p className="text-amber-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore more — internal links */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto text-center text-sm sm:text-base text-gray-600 border-t border-gray-200 pt-8">
          Explore DCA Limos: <Link to="/fleet" className="text-amber-600 hover:underline font-semibold">our luxury fleet</Link>,{' '}
          <Link to="/services" className="text-amber-600 hover:underline font-semibold">all services</Link>,{' '}
          <Link to="/dca-to-washington-dc" className="text-amber-600 hover:underline font-semibold">DCA to DC rates</Link>, or{' '}
          <Link to="/booking" className="text-amber-600 hover:underline font-semibold">book your ride online</Link>.
        </div>
      </div>
    </div>
  );
};

export default ContactPage;