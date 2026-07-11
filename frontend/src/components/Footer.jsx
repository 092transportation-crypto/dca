import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { ROUTE_PAGES } from '@/data/routePages';
import { EVENT_PAGES } from '@/data/eventPages';

// Short keyword-rich anchors for the footer blog sitemap.
const BLOG_FOOTER_LINKS = [
  { slug: 'dca-airport-car-service-vs-uber-2026', label: 'DCA Car Service vs Uber' },
  { slug: 'best-black-car-service-dca-airport', label: 'Best Black Car Service at DCA' },
  { slug: 'reagan-national-airport-transportation-guide', label: 'DCA Ground Transportation Guide' },
  { slug: 'dca-to-dc-flat-rate-car-service', label: 'DCA to DC Flat-Rate Car Service' },
  { slug: 'corporate-car-service-dca-airport', label: 'Corporate Car Service at DCA' },
  { slug: 'dca-airport-to-annapolis-chauffeur-service', label: 'DCA to Annapolis Chauffeur Guide' },
  { slug: 'reagan-national-airport-limo-cost-2026', label: 'Reagan National Limo Cost' },
  { slug: 'dca-airport-meet-and-greet-service', label: 'DCA Meet & Greet Service' },
  { slug: 'best-time-to-book-dca-airport-car-service', label: 'Best Time to Book DCA Car Service' },
  { slug: 'dca-airport-corporate-travel-guide', label: 'DCA Corporate Travel Guide' },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-amber-500" data-testid="main-footer">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4 sm:mb-5" data-testid="footer-logo-block">
              <div className="relative shrink-0">
                <span className="absolute inset-0 rounded-full bg-amber-500/30 blur-xl" aria-hidden="true"></span>
                <span className="absolute inset-0 rounded-full ring-2 ring-amber-400/70" aria-hidden="true"></span>
                <img 
                  src="/dca-limos-logo.png" 
                  alt="DCA Limos — Premium Airport & Chauffeur Service" 
                  className="relative h-24 sm:h-28 w-24 sm:w-28 object-cover rounded-full bg-white shadow-[0_0_24px_rgba(245,158,11,0.6)]"
                />
              </div>
              <div className="border-l-2 border-amber-500/50 pl-3" data-testid="footer-slogan">
                <p className="text-amber-400 font-bold text-xs uppercase tracking-[0.18em] leading-tight">Luxury Airport</p>
                <p className="text-amber-400 font-bold text-xs uppercase tracking-[0.18em] leading-tight">&amp; Chauffeur Service</p>
                <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1">Maryland · DC · Virginia</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Licensed & insured Maryland carrier providing professional DMV transportation — airport transfers, corporate travel, and events.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61587066539463" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center text-black transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/dcalimos?igsh=Mzh3M2Rpb2twdDZ2" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center text-black transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://tiktok.com/@dca.limos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center text-black transition-all" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>Home</span></Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>Services</span></Link></li>
              <li><Link to="/fleet" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>Fleet</span></Link></li>
              <li><Link to="/about" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>About Us</span></Link></li>
              <li><Link to="/blog" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>Blog</span></Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span>→</span><span>Contact</span></Link></li>
              <li><Link to="/booking" className="text-sm sm:text-base text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center space-x-2"><span>→</span><span>Book Now</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span className="text-amber-500">•</span><span>Airport Transportation</span></Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span className="text-amber-500">•</span><span>Corporate Car Service</span></Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span className="text-amber-500">•</span><span>Wedding Limo</span></Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span className="text-amber-500">•</span><span>Prom Limo</span></Link></li>
              <li><Link to="/booking" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors flex items-center space-x-2"><span className="text-amber-500">•</span><span>Book Online</span></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-amber-400 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+18776091919" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors font-semibold block">+1 (877) 609-1919</a>
                  <span className="text-xs sm:text-sm text-gray-500">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@dcalimos.com" className="text-sm sm:text-base text-gray-300 hover:text-amber-400 transition-colors font-semibold block">info@dcalimos.com</a>
                  <span className="text-xs sm:text-sm text-gray-500">Email us anytime</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base text-gray-300 block">DCA Airport & Washington DC</span>
                  <span className="text-xs sm:text-sm text-gray-500">DMV Metropolitan Area</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base text-gray-300 block font-semibold">24/7 Service</span>
                  <span className="text-xs sm:text-sm text-gray-500">Always Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* DCA Airport Routes */}
        <div className="border-t border-amber-500/30 pt-8 pb-6 mb-4" data-testid="footer-dca-routes">
          <h3 className="text-sm sm:text-base font-bold mb-4 text-amber-400 uppercase tracking-wider text-center md:text-left">DCA Airport Routes</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
            {ROUTE_PAGES.map((r) => (
              <Link key={r.slug} to={`/${r.slug}`} className="hover:text-amber-400 transition-colors" data-testid={`footer-route-${r.slug}`}>
                DCA to {r.destination}
              </Link>
            ))}
          </div>
        </div>

        {/* Event Transportation */}
        <div className="border-t border-amber-500/30 pt-6 pb-2 mb-4" data-testid="footer-event-links">
          <h3 className="text-sm sm:text-base font-bold mb-4 text-amber-400 uppercase tracking-wider text-center md:text-left">Event Transportation</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
            {EVENT_PAGES.map((e) => (
              <Link key={e.slug} to={`/${e.slug}`} className="hover:text-amber-400 transition-colors" data-testid={`footer-event-${e.slug}`}>
                {e.name} Transportation
              </Link>
            ))}
          </div>
        </div>

        {/* From the Blog */}
        <div className="border-t border-amber-500/30 pt-6 pb-2 mb-4" data-testid="footer-blog-links">
          <h3 className="text-sm sm:text-base font-bold mb-4 text-amber-400 uppercase tracking-wider text-center md:text-left">From the Blog</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
            {BLOG_FOOTER_LINKS.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="hover:text-amber-400 transition-colors" data-testid={`footer-blog-${p.slug}`}>
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Maryland Service Areas */}
        <div className="border-t border-amber-500/30 pt-8 pb-6 mb-4" data-testid="footer-md-areas">
          <h3 className="text-sm sm:text-base font-bold mb-4 text-amber-400 uppercase tracking-wider text-center md:text-left">Maryland Service Areas</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
            {[
              'Annapolis','Baltimore','Bethesda','Silver Spring','Rockville','Frederick','Gaithersburg','Columbia','Towson','Ellicott City','Laurel','Greenbelt','College Park','Hanover','Linthicum Heights','Odenton','Severna Park','Crofton','Arnold','Pasadena','Glen Burnie','Edgewater','Crownsville','Gambrills','Millersville','Severn'
            ].map((city, i) => (
              <Link key={i} to="/services" className="hover:text-amber-400 transition-colors" data-testid={`footer-md-city-${i}`}>{city}, MD</Link>
            ))}
          </div>
        </div>

        {/* Partners & Resources */}
        <div className="border-t border-amber-500/30 pt-6 pb-2 mb-4" data-testid="footer-partners">
          <h3 className="text-sm sm:text-base font-bold mb-4 text-amber-400 uppercase tracking-wider text-center md:text-left">Partners &amp; Resources</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
            <a href="https://www.bwiairport.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">BWI Airport</a>
            <a href="https://www.flyreagan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Reagan National (DCA)</a>
            <a href="https://www.flydulles.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Dulles (IAD)</a>
            <a href="https://www.visitmaryland.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Visit Maryland</a>
            <a href="https://www.visitannapolis.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Visit Annapolis</a>
            <a href="https://www.baltimore.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Visit Baltimore</a>
            <a href="https://washington.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Destination DC</a>
            <a href="https://www.aacounty.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Anne Arundel County</a>
            <a href="https://www.usna.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">US Naval Academy</a>
            <a href="https://www.umd.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">UMD College Park</a>
            <a href="https://www.jhu.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Johns Hopkins</a>
            <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">NIH Bethesda</a>
            <a href="https://mva.maryland.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Maryland MVA</a>
            <a href="https://www.nlaride.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">National Limousine Assoc.</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/30 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <div>
              <p className="text-xs sm:text-sm text-gray-400">
                © {new Date().getFullYear()} DCA Limo. All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
              <span className="text-amber-400">Licensed & Insured Maryland Carrier</span>
              <span className="text-gray-600">•</span>
              <span className="text-amber-400">DOT Certified</span>
              <span className="text-gray-600">•</span>
              <span className="text-amber-400">Professional DMV Transportation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
