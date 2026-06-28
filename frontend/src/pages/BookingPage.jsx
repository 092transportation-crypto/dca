import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Calendar, MapPin, Clock, Car, CheckCircle2, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const SERVICE_TYPES = [
  'Airport Transportation',
  'Corporate Transportation',
  'Wedding Limo Service',
  'Prom & Graduation',
  'Special Events',
  'Hourly Charter',
  'Point-to-Point',
  'Sports Game Day',
  'Other',
];

const initialForm = {
  full_name: '',
  email: '',
  phone: '',
  service_type: '',
  pickup_date: '',
  pickup_time: '',
  pickup_location: '',
  dropoff_location: '',
  additional_details: '',
};

const BookingPage = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Book Limo Online | Get a Free Quote | DCA Limos Maryland";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get a free quote for DCA Limos. Reserve airport transportation, corporate car service, wedding limos & more. Fast response guaranteed. Maryland, DC & Virginia.');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim() || !form.service_type) {
      toast.error('Please fill in your name, email, phone and service type.');
      return;
    }

    setSubmitting(true);
    try {
      const API_URL = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${API_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
        toast.success(data.message || 'Quote request received!');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      toast.error("Couldn't send your request. Please call (877) 679-0100 instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12" data-testid="booking-page">
      <Toaster position="top-right" richColors />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-amber-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">Premium Luxury Transportation</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Get a Free Quote</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Fast response guaranteed. Reserve airport transportation, corporate car service, wedding limos &amp; more across Maryland, DC &amp; Virginia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-2xl overflow-hidden" data-testid="quote-form-card">
              <CardContent className="p-6 sm:p-10">
                {submitted ? (
                  <div className="text-center py-12" data-testid="quote-success">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mb-6">
                      <CheckCircle2 className="h-10 w-10 text-black" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quote Request Received</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto mb-6">
                      Thank you! Our concierge team will contact you within 15 minutes with a personalized quote.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-amber-500 hover:bg-amber-400 text-black font-bold"
                      data-testid="quote-submit-another"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="quote-form" noValidate>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Tell us about your trip</h2>
                    <p className="text-sm text-gray-500 mb-4">Fill out the form and we'll get back to you ASAP.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-amber-600">*</span></label>
                        <input
                          id="full_name"
                          name="full_name"
                          type="text"
                          required
                          value={form.full_name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          placeholder="John Doe"
                          data-testid="quote-input-name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email <span className="text-amber-600">*</span></label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          placeholder="you@example.com"
                          data-testid="quote-input-email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone <span className="text-amber-600">*</span></label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          placeholder="(877) 679-0100"
                          data-testid="quote-input-phone"
                        />
                      </div>
                      <div>
                        <label htmlFor="service_type" className="block text-sm font-semibold text-gray-700 mb-1.5">Service Type <span className="text-amber-600">*</span></label>
                        <select
                          id="service_type"
                          name="service_type"
                          required
                          value={form.service_type}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white transition"
                          data-testid="quote-input-service"
                        >
                          <option value="">Select Service</option>
                          {SERVICE_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="pickup_date" className="block text-sm font-semibold text-gray-700 mb-1.5">Pickup Date</label>
                        <input
                          id="pickup_date"
                          name="pickup_date"
                          type="date"
                          value={form.pickup_date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          data-testid="quote-input-date"
                        />
                      </div>
                      <div>
                        <label htmlFor="pickup_time" className="block text-sm font-semibold text-gray-700 mb-1.5">Pickup Time</label>
                        <input
                          id="pickup_time"
                          name="pickup_time"
                          type="time"
                          value={form.pickup_time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          data-testid="quote-input-time"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="pickup_location" className="block text-sm font-semibold text-gray-700 mb-1.5">Pickup Location</label>
                        <input
                          id="pickup_location"
                          name="pickup_location"
                          type="text"
                          value={form.pickup_location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          placeholder="Address, airport terminal, hotel, etc."
                          data-testid="quote-input-pickup"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="dropoff_location" className="block text-sm font-semibold text-gray-700 mb-1.5">Drop-off Location</label>
                        <input
                          id="dropoff_location"
                          name="dropoff_location"
                          type="text"
                          value={form.dropoff_location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          placeholder="Final destination"
                          data-testid="quote-input-dropoff"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="additional_details" className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Details</label>
                        <textarea
                          id="additional_details"
                          name="additional_details"
                          rows={4}
                          value={form.additional_details}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none transition"
                          placeholder="Number of passengers, flight number, special requests, return trip, etc."
                          data-testid="quote-input-details"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-base sm:text-lg py-6 shadow-lg disabled:opacity-70"
                      data-testid="quote-submit-button"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Get My Free Quote'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to be contacted by DCA Limos. We never share your info.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-2 border-amber-500 shadow-lg">
              <CardContent className="p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Or Call 24/7</h2>
                    <p className="text-sm text-gray-600 mb-2">Talk to our concierge instantly.</p>
                    <a
                      href="tel:+18776790100"
                      className="text-xl sm:text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors"
                      data-testid="booking-phone-link"
                    >
                      +1 (877) 679-0100
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black text-white shadow-lg">
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

            <Card className="bg-amber-50 border border-amber-200 shadow">
              <CardContent className="p-6 sm:p-7">
                <h3 className="font-bold text-gray-900 mb-3">How It Works</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>1.</strong> Tell us your pickup &amp; destination</span></li>
                  <li className="flex gap-3"><Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>2.</strong> Choose date, time &amp; service</span></li>
                  <li className="flex gap-3"><Car className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>3.</strong> Get a personalized quote within 15 min</span></li>
                  <li className="flex gap-3"><Calendar className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" /><span><strong>4.</strong> Confirm &amp; ride in luxury</span></li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Info */}
        <div className="max-w-6xl mx-auto mt-8 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Important Booking Information</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base text-gray-800">
            {[
              'Book at least 2 hours in advance for guaranteed availability',
              'For airport pickups, provide your flight number for real-time tracking',
              'Free cancellation up to 24 hours before scheduled pickup',
              'All major credit cards accepted — secure payment processing',
              'Gratuity and all taxes included in quoted price',
              '60-minute complimentary wait time on airport pickups',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
