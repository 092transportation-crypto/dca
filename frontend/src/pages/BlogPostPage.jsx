import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Phone, Share2, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';
import DOMPurify from 'dompurify';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findBlogPost, BLOG_POSTS } from '@/data/blogPosts';
import { findRoutePage, ROUTE_PAGES } from '@/data/routePages';

const PHONE_DISPLAY = '(877) 609-1919';
const PHONE_TEL = 'tel:+18776091919';

// Legacy article shown for older slugs that predate the data-driven system.
const LEGACY_POST = {
  slug: 'ultimate-guide-dca-airport-transportation',
  title: 'The Ultimate Guide to DCA Airport Transportation: What Every Traveler Needs to Know',
  image: 'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
  author: 'Michael Chen',
  authorBio: 'Transportation industry analyst and frequent business traveler with over 15 years of experience in executive travel logistics.',
  date: 'January 10, 2025',
  readTime: '12 min read',
  category: 'Airport Transportation',
  metaTitle: 'The Ultimate Guide to DCA Airport Transportation | DCA Limos',
  metaDesc: 'A complete guide to Ronald Reagan Washington National Airport (DCA) transportation options, tips, and why professional chauffeur service offers unmatched convenience.',
  faqs: [],
  content: `
    <p class="lead">Ronald Reagan Washington National Airport (DCA) serves millions of travelers annually. Whether you are a business executive rushing to a meeting or a leisure traveler beginning your Washington DC adventure, understanding your transportation options is crucial for a stress-free experience.</p>
    <h2>Understanding DCA Airport</h2>
    <p>Located just three miles from downtown Washington DC, DCA offers unparalleled proximity to the nation's capital. Professional chauffeur services navigate the area's complex traffic patterns daily, ensuring timely arrivals regardless of circumstances. For a deeper breakdown, see our <a href="/blog/reagan-national-airport-transportation-guide">Reagan National transportation guide</a>.</p>
    <h2>Why professional transportation makes sense</h2>
    <p>When you factor in parking fees, rental costs, and the value of your time, professional transportation frequently emerges as the most economical and least stressful choice — especially for business travelers who can work productively in transit.</p>
  `,
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const blogPost = findBlogPost(slug) || LEGACY_POST;

  useEffect(() => {
    const canonicalHref = `https://www.dcalimos.com/blog/${blogPost.slug}`;
    document.title = blogPost.metaTitle || blogPost.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && (blogPost.metaDesc || blogPost.excerpt)) {
      metaDesc.setAttribute('content', blogPost.metaDesc || blogPost.excerpt);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    const SCRIPT_ID = 'blog-jsonld';
    const graph = [
      {
        '@type': 'BlogPosting',
        headline: blogPost.title,
        author: { '@type': 'Person', name: blogPost.author },
        datePublished: blogPost.date,
        image: blogPost.image,
        publisher: { '@type': 'Organization', name: 'DCA Limos', url: 'https://www.dcalimos.com' },
        mainEntityOfPage: canonicalHref,
      },
    ];
    if (blogPost.faqs && blogPost.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: blogPost.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
    }
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });

    return () => {
      const s = document.getElementById(SCRIPT_ID);
      if (s) s.remove();
    };
  }, [blogPost]);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== blogPost.slug).slice(0, 2);

  const recommendedRoutes = (() => {
    const routes = (blogPost.relatedRoutes || []).map(findRoutePage).filter(Boolean);
    for (const r of ROUTE_PAGES) {
      if (routes.length >= 3) break;
      if (!routes.some((x) => x.slug === r.slug)) routes.push(r);
    }
    return routes.slice(0, 3);
  })();

  return (
    <div className="min-h-screen bg-white" data-testid={`blog-post-${blogPost.slug}`}>
      {/* Hero Image */}
      <div className="relative h-64 sm:h-96 lg:h-[500px]">
        <img src={blogPost.image} alt={blogPost.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white hover:text-amber-500 transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-semibold">Back to Blog</span>
            </Link>
            <span className="inline-block bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded mb-4">
              {blogPost.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {blogPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-amber-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2"><User className="h-5 w-5 text-gray-400" /><span className="font-semibold">{blogPost.author}</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gray-400" /><span>{blogPost.date}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-gray-400" /><span>{blogPost.readTime}</span></div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">Share:</span>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center"><Facebook className="h-5 w-5" /></button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center"><Twitter className="h-5 w-5" /></button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center"><Linkedin className="h-5 w-5" /></button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center"><Share2 className="h-5 w-5" /></button>
              </div>
            </header>

            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-ul:my-6 prose-li:text-gray-700 prose-ol:my-6
                prose-lead:text-xl prose-lead:text-amber-600 prose-lead:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogPost.content) }}
            />

            {/* Author Bio */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                  {blogPost.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
                  <p className="text-gray-700 leading-relaxed">{blogPost.authorBio}</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            {blogPost.faqs && blogPost.faqs.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {blogPost.faqs.map((f) => (
                    <div key={f.q} className="border border-gray-200 rounded-xl p-5 sm:p-6" data-testid="blog-faq">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Routes */}
            {recommendedRoutes.length > 0 && (
              <div className="mt-12 sm:mt-16" data-testid="recommended-routes">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Recommended DCA Routes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {recommendedRoutes.map((r) => (
                    <Link key={r.slug} to={`/${r.slug}`} className="group" data-testid={`recommended-route-${r.slug}`}>
                      <Card className="border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-5">
                          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors leading-snug">{r.h1}</h3>
                          <p className="text-sm text-gray-600 flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-amber-600" /> {r.distance} · {r.driveTime}</p>
                          <span className="mt-3 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm">
                            View route &amp; rates <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 sm:mt-16 p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Book Your DCA Airport Transfer</h3>
              <p className="text-base sm:text-lg mb-6 text-black max-w-2xl mx-auto">
                Flat-rate luxury chauffeur service with flight tracking and a guaranteed pickup. Reserve online or call us 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-10 py-7">
                  <Link to="/booking">Book Your Ride Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-lg px-10 py-7">
                  <a href={PHONE_TEL}><Phone className="mr-2 h-5 w-5" /> {PHONE_DISPLAY}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {relatedPosts.map((post) => (
                  <Card key={post.slug} className="group hover:shadow-xl transition-all border-2 hover:border-amber-500 overflow-hidden">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{post.title}</h3>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
