import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { setJsonLd } from '@/lib/seo';
import { breadcrumbTrail, hasOwnBreadcrumbSchema } from '@/lib/breadcrumbs';

const ORIGIN = 'https://www.dcalimos.com';

// Site-wide breadcrumb bar (mounted once in App, above the footer) plus
// BreadcrumbList JSON-LD for page types that don't already emit their own.
const SiteBreadcrumbs = () => {
  const { pathname } = useLocation();
  const trail = useMemo(() => breadcrumbTrail(pathname), [pathname]);

  useEffect(() => {
    if (!trail || hasOwnBreadcrumbSchema(pathname.replace(/^\/|\/+$/g, ''))) return undefined;
    return setJsonLd('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: `${ORIGIN}${c.to === '/' ? '/' : c.to}`,
      })),
    });
  }, [trail, pathname]);

  if (!trail) return null;
  return (
    <nav aria-label="Breadcrumb" data-testid="breadcrumbs" className="bg-gray-100 border-t border-gray-200">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-gray-600">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="text-gray-900 font-medium">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-amber-600 transition-colors">{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default SiteBreadcrumbs;
