import { useEffect } from 'react';
import { setJsonLd } from '@/lib/seo';

// FAQ block + FAQPage JSON-LD for pages that don't build their own.
// `faqs` is [{ q, a }]. Render at most one per page (one FAQPage per URL).
const FaqSection = ({ faqs, heading = 'Frequently Asked Questions' }) => {
  useEffect(() => {
    if (!faqs || !faqs.length) return undefined;
    return setJsonLd('page-faq-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }, [faqs]);

  if (!faqs || !faqs.length) return null;
  return (
    <section className="py-12 sm:py-16 bg-gray-50" data-testid="page-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">{heading}</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
