'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, MapPin, Users, TrendingUp, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { testimonials, stats } from '@/data/content';

export default function Customers() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const globalPresence = [
    { region: 'North America', countries: ['USA', 'Canada'], clients: 2, color: 'bg-blue-500' },
    { region: 'Europe', countries: ['UK', 'Germany', 'France', 'Italy', 'Spain', 'Poland'], clients: 9, color: 'bg-green-500' },
   // { region: 'Asia Pacific', countries: ['Australia', 'Japan', 'South Korea', 'Singapore'], clients: 32, color: 'bg-purple-500' },
    { region: 'Middle East', countries: ['Saudia Arabia'], clients: 1, color: 'bg-orange-500' },
   // { region: 'Africa', countries: ['South Africa', 'Egypt', 'Morocco'], clients: 15, color: 'bg-red-500' }
  ];

  const clientLogos = [
    { name: 'Newlook', category: 'Fast Fashion', partnership: '8+ years', image: '/images/Trusted Brands/Newlook.jpg' },
    { name: 'Zara', category: 'Fashion Retail', partnership: '3+ years', image: '/images/Trusted Brands/Zara.jpg' },
    { name: 'Kik', category: 'Casual Wear', partnership: '6+ years', image: '/images/Trusted Brands/Kik.jpg' },
    { name: 'Exist', category: 'American Apparel', partnership: '6+ years', image: '/images/Trusted Brands/Exist.jpg' },
    { name: 'Woolworth', category: 'Germany Retail', partnership: '7+ years', image: '/images/Trusted Brands/Woolworth.jpg' },
    { name: 'Tedi', category: 'Germany Retail', partnership: '2+ years', image: '/images/Trusted Brands/Tedi.jpg' },
    { name: 'LPP', category: 'Poland Retail', partnership: '5+ years', image: '/images/Trusted Brands/LPP.jpg' },
    { name: 'inStyle', category: 'Italy Fashion', partnership: '4+ years', image: '/images/Trusted Brands/inStyle.jpg' },
    { name: 'Sherwin Willims', category: 'Canada', partnership: '1+ years', image: '/images/Trusted Brands/Sherwin willims.jpg' },
    { name: 'Prime', category: 'Saudi Arabia', partnership: '3+ years', image: '/images/Trusted Brands/Prime.jpg' },
    { name: 'Miltex', category: 'USA Retail', partnership: '3+ years', image: '/images/Trusted Brands/Miltex.jpg' },
    { name: 'Champion', category: 'American Retail', partnership: '3+ years', image: '/images/Trusted Brands/Champion.jpg' }
  ];

  const partnershipBenefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 50+ countries with reliable supply chain management"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Assigned account managers for personalized service and communication"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Flexible production capacity to meet growing business demands"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Consistent quality standards maintained across all client orders"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Global <span className="text-accent">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Trusted by leading brands worldwide for premium quality garment manufacturing
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stats[1].number}</div>
                <div className="text-sm md:text-base opacity-90">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">8+</div>
                <div className="text-sm md:text-base opacity-90">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stats[0].number}</div>
                <div className="text-sm md:text-base opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
                <div className="text-sm md:text-base opacity-90">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Footprint
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our manufacturing excellence reaches clients across five continents, 
              delivering quality garments to major markets worldwide.
            </p>
          </div>

          {/* World Map Representation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-full mb-4">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Worldwide Presence</h3>
                <p className="text-gray-600">Manufacturing and delivering across 50+ countries</p>
              </div>

              {/* Regional Distribution */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalPresence.map((region, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${region.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{region.region}</h4>
                      <p className="text-2xl font-bold text-primary mb-2">{region.clients} Clients</p>
                      <div className="text-sm text-gray-600">
                        <p className="font-medium mb-1">Key Markets:</p>
                        <p>{region.countries.join(', ')}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with some of the world's most recognized fashion and retail brands, 
              delivering consistent quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
            {clientLogos.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 hover:border-gray-200">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="relative w-full h-24 md:h-28 lg:h-32 mb-3 bg-gray-50 rounded-lg overflow-hidden group-hover:bg-white transition-all duration-300 group-hover:shadow-sm">
                    <Image
                      src={client.image}
                      alt={`${client.name} logo - trusted partner of AL HADI EXPORTS`}
                      fill
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                      priority={index < 6}
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 mb-1 truncate leading-tight">{client.name}</h3>
                  <p className="text-xs text-gray-600 mb-2 truncate">{client.category}</p>
                  <div className="text-xs text-primary font-medium bg-blue-50 px-2 py-0.5 rounded-full inline-block">
                    {client.partnership}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Partnership Success Metrics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm opacity-90">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
                <div className="text-sm opacity-90">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">{'<0.5%'}</div>
                <div className="text-sm opacity-90">Defect Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm opacity-90">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our valued clients about their experience working with AL HADI EXPORTS.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Global Network?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Become part of our growing family of satisfied clients. Let's discuss how we can 
            support your garment manufacturing needs with our proven expertise and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Start Partnership
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}