// Breadcrumb trail for any pathname, from the site's data files. Used by
// <SiteBreadcrumbs> for the visible trail and the BreadcrumbList JSON-LD.
import { ROUTE_PAGES } from '@/data/routePages';
import { EVENT_PAGES } from '@/data/eventPages';
import { MARYLAND_PAGES } from '@/data/marylandPages';
import { LANDING_PAGES } from '@/data/landingPages';
import { BLOG_POSTS } from '@/data/blogPosts';
import { GUIDES } from '@/data/guides';

const STATIC = {
  '/services': 'Services',
  '/fleet': 'Fleet',
  '/about': 'About',
  '/contact': 'Contact',
  '/blog': 'Blog',
  '/booking': 'Book a Ride',
  '/service-areas': 'Service Areas',
};
const HOME = { label: 'Home', to: '/' };
const AREAS = { label: 'Service Areas', to: '/service-areas' };
const SERVICES = { label: 'Services', to: '/services' };
const BLOG = { label: 'Blog', to: '/blog' };

// These page types already emit their own BreadcrumbList inside their JSON-LD graph.
export const hasOwnBreadcrumbSchema = (slug) =>
  ROUTE_PAGES.some((p) => p.slug === slug) || EVENT_PAGES.some((p) => p.slug === slug) || MARYLAND_PAGES.some((p) => p.slug === slug);

export const breadcrumbTrail = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (path === '/' || path === '') return null;
  const slug = path.slice(1);
  const here = (label) => ({ label, to: path });
  if (STATIC[path]) return [HOME, here(STATIC[path])];
  if (path.startsWith('/blog/')) {
    const post = BLOG_POSTS.find((p) => p.slug === slug.slice(5));
    if (post) return [HOME, BLOG, here(post.title)];
    // The one legacy article that lives outside BLOG_POSTS.
    return slug === 'blog/ultimate-guide-dca-airport-transportation' ? [HOME, BLOG, here('The Ultimate Guide to DCA Airport Transportation')] : null;
  }
  if (path.startsWith('/limo/')) {
    const page = LANDING_PAGES.find((p) => p.slug === slug.slice(5));
    return page ? [HOME, SERVICES, here(page.h1)] : null;
  }
  const guide = GUIDES.find((g) => g.slug === slug);
  if (guide) return [HOME, BLOG, here(guide.title)];
  const route = ROUTE_PAGES.find((p) => p.slug === slug);
  if (route) return [HOME, AREAS, here(route.h1)];
  const event = EVENT_PAGES.find((p) => p.slug === slug);
  if (event) return [HOME, AREAS, here(event.h1)];
  const md = MARYLAND_PAGES.find((p) => p.slug === slug);
  if (md) return [HOME, md.type === 'service' ? SERVICES : AREAS, here(md.h1)];
  return null; // runtime event pages / 404
};
