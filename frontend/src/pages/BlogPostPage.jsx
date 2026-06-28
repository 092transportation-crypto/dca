import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import DOMPurify from 'dompurify';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Full blog post content
  const blogPost = {
    slug: 'ultimate-guide-dca-airport-transportation',
    title: 'The Ultimate Guide to DCA Airport Transportation: What Every Traveler Needs to Know',
    image: 'https://images.unsplash.com/photo-1772410466566-3b652ecbf07c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85',
    author: 'Michael Chen',
    authorBio: 'Transportation industry analyst and frequent business traveler with over 15 years of experience in executive travel logistics.',
    date: 'January 10, 2025',
    readTime: '12 min read',
    category: 'Airport Transportation',
    content: `
      <p class="lead">Ronald Reagan Washington National Airport (DCA) serves millions of travelers annually, making it one of the busiest airports in the United States. Whether you're a business executive rushing to an important meeting or a leisure traveler beginning your Washington DC adventure, understanding your transportation options is crucial for a stress-free experience.</p>

      <h2>Understanding DCA Airport: Location and Layout</h2>
      <p>Located just three miles from downtown Washington DC, DCA Airport offers unparalleled proximity to the nation's capital. The airport features three terminals (A, B, and C) connected by pedestrian walkways, each serving different airlines and destinations. This strategic location makes ground transportation particularly important, as the choices you make can significantly impact your travel experience.</p>

      <p>Unlike many major airports situated far from city centers, DCA's proximity means shorter travel times but also presents unique challenges. Traffic patterns around the airport can be unpredictable, with congressional schedules, diplomatic visits, and special events often causing unexpected delays. Professional transportation services navigate these complexities daily, ensuring timely arrivals regardless of circumstances.</p>

      <h2>Transportation Options: A Comprehensive Comparison</h2>
      
      <h3>Professional Chauffeur Services</h3>
      <p>Premium chauffeur services represent the gold standard in airport transportation. With DCA Limo, travelers experience white-glove service from booking through arrival. Our professional drivers monitor flight statuses in real-time, adjusting pickup times automatically for delays or early arrivals. This eliminates the stress of coordinating with drivers or worrying about missed connections.</p>

      <p>The benefits extend far beyond convenience. Professional chauffeurs possess extensive knowledge of Washington DC's complex traffic patterns, security protocols, and alternative routes. During peak hours or unexpected road closures, this expertise proves invaluable. Additionally, our vehicles undergo rigorous maintenance schedules and comprehensive insurance coverage, providing peace of mind that rideshare alternatives cannot match.</p>

      <h3>Rideshare Services</h3>
      <p>While rideshare apps offer accessibility and familiarity, they present significant limitations for airport transportation. Surge pricing during peak travel times can inflate costs dramatically. Vehicle condition and driver professionalism vary considerably, creating inconsistency in service quality. Most concerning for business travelers, rideshare drivers often lack the discretion and professionalism required for confidential business discussions or client entertainment.</p>

      <h3>Rental Cars and Parking</h3>
      <p>Rental vehicles provide flexibility but come with hidden costs and complications. DCA's parking fees rank among the highest in the nation, with daily rates exceeding $30 in economy lots. The rental process itself adds 30-45 minutes to your journey, and returning vehicles during peak hours can create significant stress when catching flights.</p>

      <h2>Why Professional Transportation Makes Financial Sense</h2>
      <p>Many travelers assume professional chauffeur services cost significantly more than alternatives. However, comprehensive cost analysis often reveals otherwise. When factoring in parking fees, rental car costs, insurance, fuel, and most importantly, your time value, professional transportation frequently emerges as the most economical choice.</p>

      <p>For business travelers, the calculation becomes even more compelling. The ability to work productively during transit, make confidential phone calls, or prepare for meetings transforms travel time from lost productivity into valuable business hours. A DCA Limo corporate account provides detailed expense reporting, simplifying reimbursement and tax documentation.</p>

      <h2>The Business Traveler Advantage</h2>
      <p>Corporate executives and frequent business travelers face unique transportation challenges. Professional image matters, particularly when entertaining clients or attending high-stakes meetings. Arriving in a luxury sedan with a professional chauffeur makes a statement about your organization's commitment to excellence.</p>

      <p>Our corporate transportation services offer dedicated account management, flexible billing arrangements, and the ability to coordinate multi-stop itineraries seamlessly. Whether you need transportation for a full day of meetings across the DMV area or coordination for an executive team arriving on multiple flights, professional logistics expertise ensures flawless execution.</p>

      <h2>Security and Safety Considerations</h2>
      <p>In Washington DC, security considerations extend beyond typical transportation concerns. Professional chauffeur services undergo comprehensive background checks and security clearances, crucial for government contractors and diplomatic personnel. Our drivers receive training in secure transportation protocols and discrete service delivery.</p>

      <p>Vehicle safety represents another critical advantage. Our fleet undergoes preventive maintenance on strict schedules exceeding manufacturer recommendations. Each vehicle includes comprehensive insurance coverage, GPS tracking for additional security, and emergency response capabilities. These safety measures far exceed the standards of alternative transportation options.</p>

      <h2>Special Circumstances and Unique Needs</h2>
      <p>Certain travel situations particularly benefit from professional transportation services. International travelers arriving after long flights appreciate assistance with luggage and navigation through customs. Travelers with mobility challenges find our vehicles equipped to accommodate special needs with advance notice.</p>

      <p>Large groups and families face particular challenges with airport transportation. Coordinating multiple rideshare vehicles creates complexity and cost inefficiency. Our SUVs and larger vehicles accommodate groups comfortably, keeping families and colleagues together while managing substantial luggage requirements.</p>

      <h2>Booking Best Practices</h2>
      <p>Successful airport transportation begins with proper booking procedures. We recommend scheduling service at least 24-48 hours in advance, particularly during peak travel periods around holidays and major events. Provide detailed flight information, including airline, flight number, and any known delays or changes.</p>

      <p>For corporate accounts, establishing a relationship with a dedicated transportation provider creates consistency and reliability. Regular travelers benefit from driver familiarity with preferences, preferred routes, and schedule patterns. This personalized service level simply isn't possible with on-demand alternatives.</p>

      <h2>The Environmental Consideration</h2>
      <p>Professional transportation services increasingly embrace environmental responsibility. Our fleet includes hybrid and electric vehicles, reducing carbon footprint without compromising luxury or performance. Efficient route planning and vehicle utilization further minimize environmental impact compared to individual car usage.</p>

      <h2>Making Your Decision</h2>
      <p>Choosing the right airport transportation ultimately depends on your specific needs, budget, and priorities. However, for travelers who value punctuality, professionalism, productivity, and peace of mind, professional chauffeur services provide unmatched value. The combination of expertise, reliability, and premium service creates an experience that transforms airport transportation from a necessary inconvenience into a seamless part of your journey.</p>

      <p>At DCA Limo, we've built our reputation on delivering consistently exceptional service to thousands of satisfied clients. Our 99.2% on-time rate, professional chauffeurs, and immaculately maintained fleet represent our commitment to transportation excellence. Whether you're traveling for business or leisure, arriving or departing, we ensure your DCA airport experience begins and ends perfectly.</p>

      <h2>Conclusion</h2>
      <p>Ronald Reagan Washington National Airport's proximity to Washington DC makes it incredibly convenient, but only when paired with reliable ground transportation. As we've explored, professional chauffeur services offer advantages that extend far beyond simple point-to-point transit. From productivity enablement to professional image enhancement, from safety assurance to stress elimination, the benefits compound throughout your journey.</p>

      <p>The next time you book travel through DCA, consider the total value equation. Factor in your time, your professional image, your stress level, and your overall experience. When evaluated comprehensively, professional transportation isn't an luxury expense—it's an investment in successful travel.</p>
    `
  };

  const relatedPosts = [
    {
      slug: 'corporate-transportation-dc-executive-guide',
      title: 'Corporate Transportation in Washington DC: An Executive\'s Guide',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
    },
    {
      slug: 'chauffeur-vs-rideshare-business-travelers',
      title: 'Professional Chauffeur Services vs. Rideshare',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-96 lg:h-[500px]">
        <img 
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
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
            {/* Article Header */}
            <header className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-amber-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">Share:</span>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-500 transition-colors flex items-center justify-center">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </header>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-ul:my-6 prose-li:text-gray-700
                prose-lead:text-xl prose-lead:text-amber-600 prose-lead:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogPost.content) }}
            />

            {/* Author Bio */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
                  {blogPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">About {blogPost.author}</h3>
                  <p className="text-gray-700 leading-relaxed">{blogPost.authorBio}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 p-8 sm:p-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Experience Premium DCA Airport Transportation</h3>
              <p className="text-base sm:text-lg mb-6 text-black max-w-2xl mx-auto">
                Book your next airport transfer with DCA Limo and discover why thousands of travelers trust us for reliable, professional service.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-12 py-7"
              >
                <Link to="/booking">
                  Book Your Ride Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all border-2 hover:border-amber-500 overflow-hidden">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {post.title}
                      </h3>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;