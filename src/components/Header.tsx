'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, Download } from 'lucide-react';
import { downloadCompanyProfilePDF } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Customers', href: '/customers' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Garment Icon SVG Component
  const GarmentIcon = () => (
    <svg
      className="w-8 h-8 text-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V20H17V6H7Z"
        fill="currentColor"
      />
      <path
        d="M9 8H15V10H9V8ZM9 12H15V14H9V12Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92 300 2211587 - +92 322 2214479</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@alhadiexports.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="AL HADI EXPORTS Home">
              {/* <div className="relative">
                <GarmentIcon />
              </div> */}
              <div className="relative w-25 h-25">
                <img
                  src="/images/about us/logo.png" 
                  alt="AL HADI EXPORTS Logo"
                  className="object-contain w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                  AL HADI EXPORTS
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 -mt-1">Premium Garments Since 2010</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-primary/5 relative group"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" aria-hidden="true"></span>
                </Link>
              ))}
            </nav>

            {/* Primary CTA Button - Download Company Profile */}
            <div className="hidden lg:block">
              <button
                onClick={downloadCompanyProfilePDF}
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 group"
                aria-label="Download company profile PDF"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" aria-hidden="true" />
                <span>Download Company Profile</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary p-2 rounded-md transition-colors duration-200"
                aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                ? 'max-h-screen opacity-100 visible'
                : 'max-h-0 opacity-0 invisible'
              }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200 shadow-xl rounded-b-lg">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary hover:bg-primary/5 block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-primary transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 px-4">
                <button
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
                  onClick={() => {
                    downloadCompanyProfilePDF();
                    setIsMenuOpen(false);
                  }}
                  aria-label="Download company profile PDF"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" aria-hidden="true" />
                  <span>Download Company Profile</span>
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 px-4 border-t border-gray-100 mt-4">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href="tel:+925212345678" className="hover:text-primary transition-colors">+92 52 123 4567</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href="mailto:info@alhadiexports.com" className="hover:text-primary transition-colors">info@alhadiexports.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Sialkot, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;