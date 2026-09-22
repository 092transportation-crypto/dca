import { keywordSection } from '@/lib/keywordSection';

// Keyword-rich H2 + two paragraphs (see lib/keywordSection.js), light theme.
const KeywordSection = ({ slug, place, kind }) => {
  const kw = keywordSection(slug, place, kind);
  return (
    <section className="py-12 sm:py-16 bg-gray-50" data-testid="keyword-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{kw.h2}</h2>
          {kw.text.map((t) => (
            <p key={t.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4">{t}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordSection;
