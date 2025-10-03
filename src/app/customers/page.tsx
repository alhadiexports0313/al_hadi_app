'use client';

import { useState } from 'react';
import { Globe, MapPin, Users, TrendingUp, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { testimonials, stats } from '@/data/content';

export default function Customers() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const globalPresence = [
    { region: 'North America', countries: ['USA', 'Canada'], clients: 45, color: 'bg-blue-500' },
    { region: 'Europe', countries: ['UK', 'Germany', 'France', 'Italy', 'Spain'], clients: 78, color: 'bg-green-500' },
    { region: 'Asia Pacific', countries: ['Australia', 'Japan', 'South Korea', 'Singapore'], clients: 32, color: 'bg-purple-500' },
    { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar'], clients: 28, color: 'bg-orange-500' },
    { region: 'Africa', countries: ['South Africa', 'Egypt', 'Morocco'], clients: 15, color: 'bg-red-500' }
  ];

  const clientLogos = [
    { name: 'H&M', category: 'Fast Fashion', partnership: '5+ years' },
    { name: 'Zara', category: 'Fashion Retail', partnership: '7+ years' },
    { name: 'Uniqlo', category: 'Casual Wear', partnership: '4+ years' },
    { name: 'Gap Inc.', category: 'American Apparel', partnership: '6+ years' },
    { name: 'Next', category: 'UK Retail', partnership: '3+ years' },
    { name: 'Marks & Spencer', category: 'British Retail', partnership: '8+ years' },
    { name: 'Target', category: 'US Retail', partnership: '5+ years' },
    { name: 'Primark', category: 'Value Fashion', partnership: '4+ years' },
    { name: 'C&A', category: 'European Fashion', partnership: '6+ years' },
    { name: 'Walmart', category: 'Global Retail', partnership: '7+ years' },
    { name: 'Kohl\'s', category: 'Department Store', partnership: '3+ years' },
    { name: 'JCPenney', category: 'American Retail', partnership: '5+ years' }
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
                <div className="text-3xl md:text-4xl font-bold text-accent">{stats.countriesServed}+</div>
                <div className="text-sm md:text-base opacity-90">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
                <div className="text-sm md:text-base opacity-90">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{stats.yearsExperience}+</div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{client.category}</p>
                  <div className="text-xs text-primary font-medium">
                    Partnership: {client.partnership}
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
            <Button variant="accent" size="lg">
              Start Partnership
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}