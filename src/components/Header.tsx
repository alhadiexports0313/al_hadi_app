'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-elegant sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@alhadiexports.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>Sialkot, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">
              AL HADI EXPORTS
            </h1>
            <p className="text-xs text-gray-600 -mt-1">Premium Garments Since 1995</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.name === 'Home' ? '/' : item.name === 'About' ? '/about' : item.name === 'Products' ? '/products' : item.name === 'Contact' ? '/contact' : item.href}
                  className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md text-sm transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-accent text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-accent p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.name === 'Home' ? '/' : item.name === 'About' ? '/about' : item.name === 'Products' ? '/products' : item.name === 'Contact' ? '/contact' : item.href}
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4">
                <Button className="w-full text-base py-3" size="lg">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;