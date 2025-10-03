import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Quality Assurance', href: '#quality' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const products = [
    { name: 'T-Shirts', href: '#tshirts' },
    { name: 'Polo Shirts', href: '#polo' },
    { name: 'Hoodies', href: '#hoodies' },
    { name: 'Sportswear', href: '#sportswear' },
    { name: 'Casual Wear', href: '#casual' },
  ];

  const services = [
    { name: 'Custom Manufacturing', href: '#custom' },
    { name: 'Private Labeling', href: '#labeling' },
    { name: 'Quality Control', href: '#quality' },
    { name: 'Worldwide Shipping', href: '#shipping' },
    { name: 'Design Consultation', href: '#design' },
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-2xl font-bold text-gradient mb-4">AL HADI EXPORTS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Leading manufacturer and exporter of premium quality garments since 1995. 
              We specialize in custom apparel manufacturing with a commitment to excellence 
              and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-warm transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-warm transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-warm transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-warm transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-warm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-warm">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-warm">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Industrial Area, Sialkot</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Punjab, Pakistan 51310</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm">+92 300 1234567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm">info@alhadiexports.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm">www.alhadiexports.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} AL HADI EXPORTS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;