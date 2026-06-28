import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Phone, Search } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | DCA Limo - Washington DC Limo Service";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4" data-testid="not-found-page">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold text-amber-500 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let us help you get back on track.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-6 rounded-lg transition-all"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
          <Link 
            to="/booking" 
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-lg border border-white/20 transition-all"
          >
            <Search className="h-5 w-5" />
            Book a Ride
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-white font-bold mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-amber-400 hover:text-amber-300 transition-colors">
              Services
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/fleet" className="text-amber-400 hover:text-amber-300 transition-colors">
              Our Fleet
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/about" className="text-amber-400 hover:text-amber-300 transition-colors">
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/contact" className="text-amber-400 hover:text-amber-300 transition-colors">
              Contact
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/blog" className="text-amber-400 hover:text-amber-300 transition-colors">
              Blog
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8">
          <p className="text-gray-400 mb-2">Need immediate assistance?</p>
          <a 
            href="tel:+18776790100" 
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold text-xl transition-colors"
          >
            <Phone className="h-5 w-5" />
            +1 (877) 679-0100
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
