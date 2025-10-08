import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram, Award, Shield, CheckCircle, Building, Handshake, Leaf, Shirt  } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Customers', href: '/customers' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const products = [
    { name: 'T-Shirts & Polos', href: '/products#tshirts' },
    { name: 'Hoodies & Sweatshirts', href: '/products#hoodies' },
    { name: 'Sportswear', href: '/products#sportswear' },
    { name: 'Casual Wear', href: '/products#casual' },
    { name: 'Custom Apparel', href: '/products#custom' },
  ];

  const icons = {
  SEDEX: Building,
  BSCI: Handshake,
  HIGG: Leaf,
  ACCORD: Shirt
};

  const certifications = [
    { name: 'SEDEX', icon: icons.SEDEX },
    { name: 'BSCI', icon: icons.BSCI },
    { name: 'HIGG', icon: icons.HIGG },
    { name: 'ACCORD', icon: icons.ACCORD },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                AL HADI EXPORTS
              </h3>
              <p className="text-blue-100 text-sm mb-2">Premium Garments Since 2010</p>
            </div>
            
            {/* Mission Statement Summary */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4">
                To deliver world-class garments that combine traditional craftsmanship with modern innovation, 
                ensuring sustainable practices and exceeding customer expectations in quality, design, and service.
              </p>
              <p className="text-gray-400 text-sm">
                Trusted by leading brands worldwide for premium apparel manufacturing and export solutions.
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Certifications & Standards</h4>
              <div className="grid grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="text-center group">
                    <div className="bg-blue-800/30 p-3 rounded-lg mb-2 group-hover:bg-blue-700/40 transition-colors duration-200">
                      <cert.icon className="w-6 h-6 text-blue-400 mx-auto" />
                    </div>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      {cert.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800/30 p-3 rounded-lg text-blue-400 hover:bg-blue-700/40 hover:text-blue-300 transition-all duration-200 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800/30 p-3 rounded-lg text-blue-400 hover:bg-blue-700/40 hover:text-blue-300 transition-all duration-200 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800/30 p-3 rounded-lg text-blue-400 hover:bg-blue-700/40 hover:text-blue-300 transition-all duration-200 transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-800/30 p-3 rounded-lg text-blue-400 hover:bg-blue-700/40 hover:text-blue-300 transition-all duration-200 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm lg:text-base block py-1 hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Contact */}
          <div>
            {/* Products */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-300 mb-6">Our Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      href={product.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm lg:text-base block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Karachi, Pakistan */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">S.I.T.E Area</p>
                    <p className="text-gray-300 text-sm">Karachi, Sindh</p>
                    <p className="text-gray-300 text-sm">Pakistan 75700</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+92 0300 2211587</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">info@alhadiexports.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">www.alhadiexports.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-1">
                © {currentYear} AL HADI EXPORTS. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Committed to excellence in garment manufacturing and export since 2010.
              </p>
            </div>
            {/* <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-300 transition-colors duration-200">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;