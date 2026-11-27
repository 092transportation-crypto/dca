import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageSeo } from '@/lib/seo';

const TITLE = 'Privacy Policy & SMS Terms | DCA Limos';
const DESCRIPTION =
  'DCA Limos Privacy Policy & SMS Terms: what we collect, how we use it, and SMS opt-in/opt-out. Mobile opt-in data is never shared for marketing.';

const H2 = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4 pb-2 border-b-2 border-amber-500">{children}</h2>
);
const H3 = ({ children }) => (
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
);
const P = ({ children }) => (
  <p className="text-base text-gray-700 leading-relaxed mb-4">{children}</p>
);
const UL = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2 text-base text-gray-700 mb-4">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
const A = ({ to, children }) => (
  <Link to={to} className="text-amber-600 hover:text-amber-700 underline">{children}</Link>
);

const PrivacyPolicyPage = () => {
  useEffect(() => {
    setPageSeo({ title: TITLE, description: DESCRIPTION, path: '/privacy-policy' });
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="privacy-policy-page">
      <section className="bg-black py-14 sm:py-20 border-b-2 border-amber-500">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Privacy Policy &amp; SMS Terms and Conditions</h1>
          <p className="text-sm sm:text-base text-gray-400">Effective date: November 26, 2026</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <H2>Privacy Policy</H2>

            <H3>Information We Collect</H3>
            <P>DCA Limos may collect the following information from customers:</P>
            <UL
              items={[
                'Name',
                'Phone number',
                'Email address',
                'Billing information',
                'Reservation and trip details, such as pickup and drop-off addresses, dates, times, and flight numbers',
                'Information submitted through phone calls, forms, emails, or customer interactions',
              ]}
            />

            <H3>How We Use Your Information</H3>
            <P>We use your information to:</P>
            <UL
              items={[
                'Book, confirm, and manage your reservations',
                'Schedule pickups and assign your chauffeur and vehicle',
                'Track flights and adjust pickup times for delays',
                'Process payments and respond to billing inquiries',
                'Provide customer care and respond to your requests',
                'Send SMS communications when consent has been provided',
              ]}
            />

            <H3>How We Share Your Information</H3>
            <P>We do not sell, rent, or share personal information with third parties for marketing purposes.</P>
            <P>
              We may share information with service providers who assist us in operating our business and delivering
              our services, such as payment processing. These providers are required to protect your information and
              use it only for authorized business purposes.
            </P>

            <H3>SMS Consent</H3>
            <P>
              Customers may provide consent to receive SMS messages by submitting a web form via our website at{' '}
              <A to="/contact">https://dcalimos.com/contact</A>.
            </P>
            <P>
              <strong className="text-gray-900">
                Mobile opt-in information and SMS consent data will never be sold, rented, or shared with any third
                parties or affiliates for marketing or promotional purposes.
              </strong>{' '}
              This includes your phone number and the fact that you opted in. No mobile information is shared with
              third parties for their own marketing.
            </P>
            <P>
              Phone numbers collected for SMS communications are used solely by DCA Limos for the purposes for which
              consent was provided (such as reservation updates and customer care).
            </P>

            <H2>SMS Terms and Conditions</H2>

            <H3>Types of Messages You May Receive</H3>
            <P>By providing consent, you may receive SMS messages related to:</P>
            <UL
              items={[
                'Reservation and trip confirmations',
                'Pickup time reminders',
                'Chauffeur and vehicle details for your trip',
                'Flight-delay and pickup updates',
                'Booking and payment notifications',
                'Customer care follow-ups',
              ]}
            />

            <H3>Message Frequency</H3>
            <P>
              Message frequency varies with your reservations and your interactions with DCA Limos.
            </P>

            <H3>Message and Data Rates</H3>
            <P>Message and data rates may apply. Charges are determined by your mobile carrier and service plan.</P>

            <H3>Opt-In Method</H3>
            <P>
              Customers opt in to receive SMS messages by submitting the web form on our website (
              <A to="/contact">https://dcalimos.com/contact</A>), or by providing verbal consent during a phone call
              with a DCA Limos representative.
            </P>
            <P>At the time consent is obtained, customers are informed that:</P>
            <UL
              items={[
                'Message frequency may vary.',
                'Message and data rates may apply.',
                'Reply STOP to unsubscribe.',
                'Reply HELP for assistance.',
              ]}
            />

            <H3>Opt-Out</H3>
            <P>You may opt out of SMS communications at any time by replying STOP to any message.</P>
            <P>
              After opting out, you will receive a confirmation message and no further SMS messages will be sent unless
              you provide new consent or reply START to re-subscribe.
            </P>

            <H3>Help</H3>
            <P>
              For assistance, reply HELP to any SMS message or contact us through our website:{' '}
              <A to="/contact">https://dcalimos.com/contact</A>.
            </P>

            <H3>Standard Messaging Disclosures</H3>
            <UL
              items={[
                'Message frequency may vary.',
                'Message and data rates may apply.',
                'To opt out at any time, text STOP.',
                'For assistance, text HELP or visit https://dcalimos.com/contact.',
                'SMS consent is not shared with third parties or affiliates for marketing purposes.',
              ]}
            />

            <H3>Contact Information</H3>
            <P>
              DCA Limos
              <br />
              9836 Lyon Ave, Laurel, MD 20723
              <br />
              Phone: <a href="tel:+18776091919" className="text-amber-600 hover:text-amber-700 underline">(877) 609-1919</a>
              <br />
              Email: <a href="mailto:info@dcalimos.com" className="text-amber-600 hover:text-amber-700 underline">info@dcalimos.com</a>
              <br />
              Website: <A to="/">https://dcalimos.com</A>
            </P>

            <H3>Policy Links</H3>
            <P>
              Visit <A to="/privacy-policy">https://dcalimos.com/privacy-policy</A> for our Privacy Policy and SMS Terms
              and Conditions.
            </P>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
