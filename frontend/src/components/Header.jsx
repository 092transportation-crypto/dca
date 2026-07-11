import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Events & Concerts', href: '/concert-transportation' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const navTestId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-2xl border-b-2 border-amber-500" data-testid="main-header">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-black py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <a href="tel:+18776091919" className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">+1 (877) 609-1919</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              <a href="mailto:info@dcalimos.com" className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">info@dcalimos.com</span>
              </a>
            </div>
            <div className="hidden md:block font-semibold text-xs lg:text-sm">
              ✨ 24/7 Premium Service | Licensed & Insured | 99% On-Time Guarantee
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3 sm:py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo + Slogan */}
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group" data-testid="logo-link">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-amber-500/30 blur-xl group-hover:bg-amber-500/50 transition-all duration-500" aria-hidden="true"></span>
              <span className="absolute inset-0 rounded-full ring-2 ring-amber-400/70" aria-hidden="true"></span>
              <img 
                src="/dca-limos-logo.png" 
                alt="DCA Limos — Premium Airport & Chauffeur Service" 
                className="relative h-20 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28 object-cover rounded-full bg-white shadow-[0_0_24px_rgba(245,158,11,0.6)]"
              />
            </div>
            <div className="hidden sm:block border-l-2 border-amber-500/50 pl-3 lg:pl-4" data-testid="header-slogan">
              <p className="text-amber-400 font-bold text-xs lg:text-sm uppercase tracking-[0.18em] leading-tight">Luxury Airport</p>
              <p className="text-amber-400 font-bold text-xs lg:text-sm uppercase tracking-[0.18em] leading-tight">&amp; Chauffeur Service</p>
              <p className="text-white/70 text-[10px] lg:text-xs uppercase tracking-wider mt-1">Maryland · DC · Virginia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                data-testid={`nav-link-${navTestId(item.name)}`}
                className={`text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors hover:text-amber-400 relative group ${
                  isActive(item.href) ? 'text-amber-400' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform origin-left transition-transform ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild 
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold shadow-lg transition-all text-sm px-4 py-2"
              data-testid="header-book-now-button"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-400 hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-500/30" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  data-testid={`mobile-nav-link-${navTestId(item.name)}`}
                  className={`text-base font-bold uppercase tracking-wider px-3 py-3 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-amber-400 bg-gray-800'
                      : 'text-white hover:text-amber-400 hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold w-full"
                data-testid="mobile-book-now-button"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
