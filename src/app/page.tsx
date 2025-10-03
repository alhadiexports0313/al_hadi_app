import { ArrowRight, Award, Globe, Shield, Truck, Users, Star, CheckCircle, Clock, DollarSign, Wrench, Leaf, Target, Eye, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { companyInfo, products, stats, whyChooseUs, testimonials } from '@/data/content';

export default function Home() {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-16 sm:py-20 lg:py-32 overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              {companyInfo.tagline.split(' ').slice(0, 2).join(' ')}
              <span className="block text-accent mt-2">{companyInfo.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in px-4">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in px-4">
              <Button variant="accent" size="lg" className="text-lg w-full sm:w-auto">
                View Our Products
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-white transition-colors animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot - Vision & Mission */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Snapshot
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Driving excellence in garment manufacturing through innovation, sustainability, and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Vision */}
            <Card className="text-center lg:text-left group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the global leader in sustainable garment manufacturing, setting industry standards for quality, 
                  innovation, and ethical practices while empowering communities and protecting our environment.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center lg:text-left group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver world-class garments that combine traditional craftsmanship with modern innovation, 
                  ensuring sustainable practices and exceeding customer expectations in quality, design, and service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
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
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
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
            <Button variant="primary" size="lg">
              View All Products
            </Button>
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
