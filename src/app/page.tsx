'use client';

import { ArrowRight, Award, Globe, Shield, Truck, Users, Star, CheckCircle, Clock, DollarSign, Wrench, Leaf, Target, Eye, Heart, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { companyInfo, products, stats, whyChooseUs, testimonials } from '@/data/content';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { downloadCompanyProfilePDF, downloadCatalogPDF } from '@/lib/utils';

// Fallback image component to gracefully handle missing images on home page
interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  priority?: boolean;
  [key: string]: unknown;
}

const FallbackImage = ({ src, alt, className, sizes, fill, priority, ...rest }: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/images/placeholder.svg')}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      {...rest}
    />
  );
};

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
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500" >
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
            backgroundImage: `url('/images/manufacturing/hero.jpg')`,
            backgroundAttachment: 'scroll', //'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center', //'center center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'auto', // ensures smooth rendering
            transform: 'translateZ(0)', // GPU render optimization
          }}
        />

        {/* Professional Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-blue-100/20 to-slate-400/30 dark:from-slate-900/40 dark:via-slate-800/40 dark:to-slate-700/40"></div>
        
        {/* Additional Subtle Overlay for Enhanced Contrast */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div> 
        

        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out text-gray-900 dark:text-white ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            AL HADI EXPORTS
          </h1>

          <p className={`text-lg sm:text-xl text-gray-900 dark:text-gray-100 md:text-2xl lg:text-3xl xl:text-4xl mb-8 sm:mb-10 lg:mb-12 font-medium leading-relaxed max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            Excellence in Knit Fashion & Premier Garment Manufacturing
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
                className="w-full sm:w-auto text-gray-900 dark:text-gray-100 sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600"
              >
                Explore Our Quality
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={downloadCompanyProfilePDF}
              className="w-full sm:w-auto text-gray-900 dark:text-gray-100 sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border-white/30 dark:border-slate-400/30 hover:bg-white/30 dark:hover:bg-slate-700/30"
              aria-label="Download company profile PDF"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Download Company Profile
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white dark:text-gray-200 transition-all duration-1000 ease-out delay-1000 
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white dark:border-gray-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white dark:bg-gray-200 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-500" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base transition-colors duration-300">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot - Vision & Mission */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors duration-500" aria-label="Company vision and mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" >
            <h2 className= "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Company Snapshot
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Driving excellence in garment manufacturing through innovation, sustainability, and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Vision */}
            <Card className="text-center lg:text-left group hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg transition-colors duration-300">
                  To emerge as a global pioneer in sustainable garment manufacturing, setting new benchmarks for quality, innovation, 
                  and ethical excellence. Our core policy women's empowerment and well-being, while our long-term goals 
                  emphasize eco-friendly production and a steadfast commitment to reducing our carbon footprint. 
                  Through these principles, we strive to foster a sustainable, inclusive, and forward-thinking work environment
                   that benefits both people and the planet.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center lg:text-left group hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-300 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg transition-colors duration-300">
                  To create exceptional garments that blend traditional craftsmanship with modern innovation. 
                  We are dedicated to sustainability, ethical production, and continuous improvement — ensuring 
                  every product exceeds customer expectations in quality, design, and service, while fostering 
                  a positive impact on people and the planet through responsible and forward-thinking manufacturing practices..
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 transition-colors duration-500" aria-label="Company core values">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300">Our Core Values</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">The principles that guide everything we do</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Pursuing perfection in every stitch, every process, and every partnership.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">Sustainability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Committed to environmental responsibility and ethical manufacturing practices.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 dark:bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">Integrity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Building trust through transparency, honesty, and reliable partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Why Choose {companyInfo.name}?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              We combine traditional craftsmanship with modern technology to deliver exceptional garments that meet global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="text-center bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700' : 'bg-gradient-accent dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-700'} rounded-lg flex items-center justify-center mb-6 mx-auto transition-colors duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Our Product Range
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
              From formal wear to casual clothing, we manufacture a diverse range of high-quality garments for global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.slice(0, 6).map((product, index) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
                  <FallbackImage
                    src={product.image}
                    alt={`${product.name} - ${product.category}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs sm:text-sm font-medium">{product.category}</div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-gray-100">{product.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{product.description}</p>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-0">
                      <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">MOQ: {product.minOrder}</span>
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 dark:text-green-400 group-hover:scale-110 transition-transform self-start sm:self-auto" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-2 sm:gap-1">
                      <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Lead Time: {product.leadTime}</span>
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.map((cert, i) => (
                          <span key={i} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
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
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Trusted by businesses worldwide for quality, reliability, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 dark:text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic transition-colors duration-300">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{testimonial.company}</div>
                    <div className="text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-700 text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your garment manufacturing needs and get a customized quote for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="flex items-center justify-center">
                Get Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={downloadCatalogPDF}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
