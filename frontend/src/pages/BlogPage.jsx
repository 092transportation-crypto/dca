import { useEffect } from 'react';
import { setPageSeo } from '@/lib/seo';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogPosts';

const BlogPage = () => {
  useEffect(() => {
    setPageSeo({
      title: "Blog | Airport Transportation Tips, Limo Service Guides & DC Travel Advice | DCA Limo",
      description: "Read expert tips on airport transportation, corporate travel guides, wedding limo planning, and DC area travel advice from DCA Limo's transportation specialists.",
      path: "/blog",
    });
  }, []);

  const blogPosts = [
    // Newest, data-driven posts (each has its own /blog/<slug> page)
    ...BLOG_POSTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      image: p.image,
      author: p.author,
      date: p.date,
      readTime: p.readTime,
      category: p.category,
    })),
    {
      slug: 'ultimate-guide-dca-airport-transportation',
      title: 'The Ultimate Guide to DCA Airport Transportation: What Every Traveler Needs to Know',
      excerpt: 'Navigating Ronald Reagan Washington National Airport can be complex. Discover insider tips, transportation options, and why professional chauffeur services offer unmatched convenience for business and leisure travelers alike.',
      image: 'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'Airport Transportation'
    },
    {
      slug: 'corporate-transportation-dc-executive-guide',
      title: 'Corporate Transportation in Washington DC: An Executive\'s Comprehensive Guide',
      excerpt: 'In the nation\'s capital, image and punctuality matter. Learn how Fortune 500 companies are leveraging professional transportation services to enhance productivity, impress clients, and streamline executive travel logistics.',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
      author: 'Sarah Williams',
      date: 'January 5, 2025',
      readTime: '15 min read',
      category: 'Corporate Travel'
    },
    {
      slug: 'luxury-wedding-transportation-planning',
      title: 'Planning Perfect Wedding Transportation: A Complete Guide for Couples',
      excerpt: 'Your wedding day deserves flawless execution. From timeline coordination to vehicle selection, discover how to plan elegant transportation that complements your special day and creates lasting memories.',
      image: 'https://images.unsplash.com/photo-1764269711580-6ec7ced59b7c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
      author: 'Jennifer Martinez',
      date: 'December 28, 2024',
      readTime: '10 min read',
      category: 'Wedding & Events'
    },
    {
      slug: 'chauffeur-vs-rideshare-business-travelers',
      title: 'Professional Chauffeur Services vs. Rideshare: What Business Travelers Should Know',
      excerpt: 'Not all transportation services are created equal. Explore the critical differences between professional chauffeur services and rideshare apps, and why executives increasingly choose dedicated luxury transportation.',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
      author: 'David Thompson',
      date: 'December 20, 2024',
      readTime: '8 min read',
      category: 'Business Insights'
    },
    {
      slug: 'dc-corporate-events-transportation-logistics',
      title: 'Mastering Corporate Event Transportation Logistics in Washington DC',
      excerpt: 'Successfully coordinating transportation for conferences, galas, and corporate events requires meticulous planning. Learn proven strategies from event professionals who manage high-profile gatherings in the nation\'s capital.',
      image: 'https://images.pexels.com/photos/17396143/pexels-photo-17396143.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200',
      author: 'Robert Anderson',
      date: 'December 15, 2024',
      readTime: '14 min read',
      category: 'Event Planning'
    },
    {
      slug: 'luxury-ground-transportation-trends-2025',
      title: 'Luxury Ground Transportation Trends Shaping 2025: Technology, Sustainability, and Service Excellence',
      excerpt: 'The transportation industry is evolving rapidly. Discover emerging trends including electric luxury vehicles, AI-powered logistics, enhanced safety protocols, and personalized service innovations transforming the chauffeur experience.',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
      author: 'Emily Parker',
      date: 'December 10, 2024',
      readTime: '11 min read',
      category: 'Industry Trends'
    }
  ];

  const categories = ['All', 'Airport Transportation', 'Corporate Travel', 'Wedding & Events', 'Business Insights', 'Event Planning', 'Industry Trends'];

  return (
    <div className="min-h-screen bg-white" data-testid="blog-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500 text-black px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 sm:mb-6">
            DCA Limo Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Limo Service Tips &amp; Airport Transportation Guides</h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Expert advice on <Link to="/services" className="text-amber-400 hover:underline">airport transportation</Link>, corporate travel tips, and luxury limo service insights. Ready to book? <Link to="/booking" className="text-amber-400 hover:underline">Reserve your ride</Link>.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  index === 0
                    ? 'bg-amber-500 text-black shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-500 overflow-hidden">
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-amber-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-amber-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-xs sm:text-sm text-amber-600 font-medium">{post.author}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-amber-500 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black px-4">Stay Updated with Industry Insights</h2>
          <p className="text-base sm:text-xl mb-8 text-black max-w-2xl mx-auto leading-relaxed px-4">
            Subscribe to receive expert transportation tips, industry news, and exclusive offers delivered monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto px-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;