'use client';

import { ArrowRight, Award, Globe, Shield, Truck, Users, Star, CheckCircle, Clock, DollarSign, Wrench, Leaf, Target, Eye, Heart, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { companyInfo, products, stats, whyChooseUs, testimonials } from '@/data/content';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { downloadCompanyProfilePDF } from '@/lib/utils';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const iconMap = {
    Award,
    Globe,
    Shield,
    Truck,
    Users,
    Star,
    Clock,
    DollarSign,
    Wrench,
    Leaf
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - MANDATORY INTERACTIVITY */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
        role="banner"
        aria-label="Hero section with company introduction"
      >
        {/* Background Image with Parallax Animation */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed sm:bg-scroll transition-transform 
            duration-[3000ms] ease-out ${isLoaded ? 'scale-105' : 'scale-100'
            }`}
          style={{
            backgroundImage: `url('./images/manufacturing/manfucture_15.jpg')`,
            backgroundAttachment: 'scroll', //'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center', //'center center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'auto', // ensures smooth rendering
            transform: 'translateZ(0)', // GPU render optimization
          }}
        />

        {/* Professional Gradient Overlay for Text Readability */}
        {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/75"></div>
        
        {/* Additional Subtle Overlay for Enhanced Contrast */}
        {/*<div className="absolute inset-0 bg-black/20"></div>
        

        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-gray-900 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            AL HADI EXPORTS
          </h1>

          <p className={`text-lg sm:text-xl text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl mb-8 sm:mb-10 lg:mb-12 font-bold leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            Global Leaders in Knit Fashion & Retail Garments
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto transition-all duration-1000 ease-out delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <Link
              href="/products"
              className="w-full sm:w-auto"
              aria-label="Explore our quality products"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-gray-900 sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Quality
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={downloadCompanyProfilePDF}
              className="w-full sm:w-auto text-gray-900 sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              aria-label="Download company profile PDF"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Download Company Profile
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-all duration-1000 ease-out delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-white transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot - Vision & Mission */}
      <section className="py-16 sm:py-20" aria-label="Company vision and mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Snapshot
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Driving excellence in garment manufacturing through innovation, sustainability, and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Vision */}
            <Card className="text-center lg:text-left group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  To emerge as a global pioneer in sustainable garment manufacturing, setting new benchmarks for quality, innovation, 
                  and ethical excellence. Our core policy champions women’s empowerment and well-being, while our long-term goals 
                  emphasize eco-friendly production and a steadfast commitment to reducing our carbon footprint. 
                  Through these principles, we strive to foster a sustainable, inclusive, and forward-thinking work environment
                   that benefits both people and the planet.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center lg:text-left group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  To create exceptional garments that blend traditional craftsmanship with modern innovation. 
                  We are dedicated to sustainability, ethical production, and continuous improvement — ensuring 
                  every product exceeds customer expectations in quality, design, and service, while fostering 
                  a positive impact on people and the planet through responsible and forward-thinking manufacturing practices..
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12" aria-label="Company core values">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h3>
              <p className="text-gray-600 text-sm sm:text-base">The principles that guide everything we do</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Pursuing perfection in every stitch, every process, and every partnership.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Committed to environmental responsibility and ethical manufacturing practices.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Building trust through transparency, honesty, and reliable partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose {companyInfo.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver exceptional garments that meet global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From formal wear to casual clothing, we manufacture a diverse range of high-quality garments for global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.slice(0, 6).map((product, index) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`h-40 sm:h-48 ${index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white text-center">
                    <div className="text-4xl sm:text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">👔</div>
                    <div className="text-xs sm:text-sm opacity-75">{product.category}</div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-0">
                      <span className="text-gray-500">MOQ: {product.minOrder}</span>
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 group-hover:scale-110 transition-transform self-start sm:self-auto" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-2 sm:gap-1">
                      <span className="text-gray-500">Lead Time: {product.leadTime}</span>
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.map((cert, i) => (
                          <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="primary" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for quality, reliability, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                    <div className="text-sm text-gray-400">{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your garment manufacturing needs and get a customized quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="flex items-center justify-center">
              Get Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ... existing code ...
