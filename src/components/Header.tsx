"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Download } from "lucide-react";
import { downloadCompanyProfilePDF } from "@/lib/utils";
import { ThemeToggle } from "./ui/ThemeToggle";
import { trapFocus, handleEscapeKey } from "@/lib/keyboard-navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    let cleanupFocusTrap: (() => void) | undefined;

    // Trap focus within mobile menu
    if (mobileMenuRef.current) {
      cleanupFocusTrap = trapFocus(mobileMenuRef.current);
    }

    // Handle escape key to close menu
    const cleanupEscapeHandler = handleEscapeKey(() => {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    });

    document.addEventListener('keydown', cleanupEscapeHandler);

    return () => {
      cleanupFocusTrap?.();
      if (cleanupEscapeHandler) {
        document.removeEventListener('keydown', cleanupEscapeHandler);
      }
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Customers", href: "/customers" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div 
        className="bg-gradient-primary dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-700 text-white py-2 px-4 hidden lg:block transition-colors duration-500 ease-in-out"
        role="banner"
        aria-label="Contact information"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            {/* <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white/90" aria-hidden="true" />
              <a 
                href="tel:+923002211587"
                className="text-white/95 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                aria-label="Call us at +92 300 2211587"
              >
                +92 300 2211587
              </a>
              <span className="text-white/95" aria-hidden="true">-</span>
              <a 
                href="tel:+923222214479"
                className="text-white/95 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                aria-label="Call us at +92 322 2214479"
              >
                +92 322 2214479
              </a>
            </div> */}
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white/90" aria-hidden="true" />
              <a 
                href="mailto:info@alhadiexports.com"
                className="text-white/95 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                aria-label="Send email to info@alhadiexports.com"
              >
                info@alhadiexports.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-white/90" aria-hidden="true" />
            <span className="text-white/95">Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-slate-700"
            : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
              aria-label="AL HADI EXPORTS Home"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src="/images/logo/AHLogo.png"
                  alt="AL HADI EXPORTS Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300 truncate">
                  AL HADI EXPORTS
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 -mt-1 transition-colors duration-300 hidden sm:block">
                  Premium Garments Since 2010
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Right-side actions: Theme Toggle + Primary CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Modern Sliding Theme Toggle */}
              <ThemeToggle size="md" />

              <button
                onClick={downloadCompanyProfilePDF}
                className="bg-gradient-to-r from-primary to-primary-dark dark:from-blue-600 dark:to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-xl dark:hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                aria-label="Download company profile PDF"
              >
                <Download
                  className="w-4 h-4 group-hover:animate-bounce"
                  aria-hidden="true"
                />
                <span>Download Company Profile</span>
              </button>
            </div>

            {/* Mobile actions: Theme Toggle + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <ThemeToggle size="sm" />

              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-xl rounded-b-lg transition-colors duration-300">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 block px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? "slideInLeft 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 px-4">
                <button
                  className="w-full bg-gradient-to-r from-primary to-primary-dark dark:from-blue-600 dark:to-blue-700 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg dark:hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                  onClick={() => {
                    downloadCompanyProfilePDF();
                    setIsMenuOpen(false);
                  }}
                  aria-label="Download company profile PDF"
                >
                  <Download
                    className="w-4 h-4 group-hover:animate-bounce"
                    aria-hidden="true"
                  />
                  <span>Download Company Profile</span>
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 px-4 border-t border-gray-100 dark:border-slate-800 mt-4">
                <h3 className="sr-only">Contact Information</h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                    <a
                      href="tel:+923002211587"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded"
                      aria-label="Call us at +92 300 2211587"
                    >
                      +92 300 2211587
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:info@alhadiexports.com"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded"
                      aria-label="Send email to info@alhadiexports.com"
                    >
                      info@alhadiexports.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
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
