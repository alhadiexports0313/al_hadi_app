'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin, Download } from 'lucide-react';
import { downloadCompanyProfilePDF } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // sm change .......... sm change.............

  // Apply theme from localStorage or system preference
  // useEffect(() => {
  //   const applyTheme = (t: 'light' | 'dark') => {
  //     setTheme(t);
  //     try {
  //       localStorage.setItem('theme', t);
  //     } catch {}
  //     const html = document.documentElement;
  //     if (t === 'dark') html.classList.add('dark');
  //     else html.classList.remove('dark');
  //   };

  //   try {
  //     const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
  //     if (saved === 'light' || saved === 'dark') {
  //       applyTheme(saved);
  //     } else {
  //       const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //       applyTheme(prefersDark ? 'dark' : 'light');
  //     }
  //   } catch {
  //     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     applyTheme(prefersDark ? 'dark' : 'light');
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   const next = theme === 'dark' ? 'light' : 'dark';
  //   setTheme(next);
  //   try {
  //     localStorage.setItem('theme', next);
  //   } catch {}
  //   const html = document.documentElement;
  //   if (next === 'dark') html.classList.add('dark');
  //   else html.classList.remove('dark');
  // };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Customers', href: '/customers' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

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
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-slate-700'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm ' // sm change ..........
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="AL HADI EXPORTS Home">
              {/* <div className="relative">
                <GarmentIcon />
              </div> */}
              <div className="relative w-20 h-20">
                <Image
                  src="/images/logo/AHLogo.png" 
                  alt="AL HADI EXPORTS Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
               <div className=""> {/*"hidden sm:block" */}
                <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
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
                  className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-primary/5 dark:hover:bg-white/5 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" aria-hidden="true"></span>
                </Link>
              ))}
            </nav>

            {/* Right-side actions: Theme Toggle + Primary CTA    sm change   */}
            <div className="hidden lg:flex items-center space-x-3"> 
              {/* Sliding Theme Toggle */}
              {/* <button
                onClick={toggleTheme}
                role="switch"
                aria-checked={theme === 'dark'}
                aria-label={theme === 'dark' ? 'Dark mode enabled' : 'Dark mode disabled'}
                className="relative inline-flex items-center w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-200 shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
                >
                  <span className="flex items-center justify-center w-full h-full text-sm" aria-hidden="true">🌙</span>
                </span>
              </button> */}

              <button
                onClick={downloadCompanyProfilePDF}
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Download company profile PDF"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" aria-hidden="true" />
                <span>Download Company Profile</span>
              </button>
            </div>

            {/* Mobile actions: Theme Toggle + menu button   sm change */}
            <div className="lg:hidden flex items-center gap-2"> 
              {/* Sliding Theme Toggle (Mobile) */}
              {/* <button
                onClick={toggleTheme}
                role="switch"
                aria-checked={theme === 'dark'}
                aria-label={theme === 'dark' ? 'Dark mode enabled' : 'Dark mode disabled'}
                className="relative inline-flex items-center w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-200 shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
                >
                  <span className="flex items-center justify-center w-full h-full text-sm" aria-hidden="true">🌙</span>
                </span>
              </button> */}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary p-2 rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-xl rounded-b-lg">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-white/5 block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-primary transform hover:translate-x-1"
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
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
              <div className="pt-4 px-4 border-t border-gray-100 dark:border-slate-800 mt-4">
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href="tel:+925212345678" className="hover:text-primary transition-colors">+92 0300 2211587</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href="mailto:info@alhadiexports.com" className="hover:text-primary transition-colors">info@alhadiexports.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>Karachi, Pakistan</span>
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