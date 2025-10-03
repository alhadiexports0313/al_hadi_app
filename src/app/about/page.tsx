import { Award, Users, Globe, Target, Eye, Heart, Factory, Shield, TrendingUp, Clock, CheckCircle, Zap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { companyInfo, certifications, stats } from '@/data/content';

export default function About() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "AL HADI EXPORTS was established with a vision to provide premium quality garments to global markets."
    },
    {
      year: "2013",
      title: "International Expansion",
      description: "Began exporting to European markets, establishing our first international partnerships."
    },
    {
      year: "2016",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management."
    },
    {
      year: "2019",
      title: "Sustainable Practices",
      description: "Implemented eco-friendly manufacturing processes and obtained GOTS certification."
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Modernized our operations with advanced technology and digital quality control systems."
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Serving 25+ countries with over 1 million garments produced annually."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, ensuring every garment meets the highest international standards."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our customers' success is our success. We build lasting partnerships through exceptional service."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our operations."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and cultural differences, serving clients across the world with respect."
    }
  ];

  const leadership = [
    {
      name: "Muhammad Hassan",
      position: "Chief Executive Officer",
      experience: "15+ years",
      expertise: "Strategic Leadership & Global Business Development",
      description: "Leading AL HADI EXPORTS with a vision for sustainable growth and international expansion."
    },
    {
      name: "Fatima Ahmed",
      position: "Chief Operating Officer",
      experience: "12+ years",
      expertise: "Operations Management & Quality Assurance",
      description: "Ensuring operational excellence and maintaining our high-quality standards across all processes."
    },
    {
      name: "Ali Raza",
      position: "Head of Production",
      experience: "18+ years",
      expertise: "Manufacturing & Process Optimization",
      description: "Overseeing production operations and implementing innovative manufacturing solutions."
    },
    {
      name: "Sarah Khan",
      position: "Director of Quality Control",
      experience: "10+ years",
      expertise: "Quality Management & Compliance",
      description: "Maintaining our commitment to quality through rigorous testing and certification processes."
    }
  ];

  const coreStrengths = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "Modern facilities equipped with latest technology and machinery for efficient production",
      metrics: "50,000+ sq ft facility"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Experienced team of professionals dedicated to delivering exceptional quality",
      metrics: "500+ skilled workers"
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Established network of suppliers and logistics partners worldwide",
      metrics: "25+ countries served"
    },
    {
      icon: Award,
      title: "Quality Certifications",
      description: "International certifications ensuring compliance with global standards",
      metrics: "ISO, GOTS, OEKO-TEX certified"
    },
    {
      icon: TrendingUp,
      title: "Scalable Production",
      description: "Flexible manufacturing capacity to meet varying order volumes",
      metrics: "1M+ garments annually"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable delivery schedules with 98.5% on-time performance",
      metrics: "98.5% on-time delivery"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive quality control at every stage of production",
      metrics: "<0.5% defect rate"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Continuous investment in technology and process improvements",
      metrics: "R&D investment 5% of revenue"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">{companyInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {stats.find(s => s.label.includes('Years'))?.number}+ years of excellence in garment manufacturing and export
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, {companyInfo.name} has grown from a small local manufacturer 
                to a globally recognized leader in garment export. Our journey began with a simple mission: 
                to create high-quality garments that meet international standards while maintaining competitive pricing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we proudly serve clients in 25+ countries, employing over 500 
                skilled professionals who share our commitment to excellence. Our state-of-the-art manufacturing 
                facility combines traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <Button variant="primary" size="lg">
                Download Company Profile
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Founded:</span>
                    <span className="font-semibold">2010</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employees:</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Countries Served:</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-semibold">14+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To manufacture and export premium quality garments that exceed customer expectations 
                  while maintaining sustainable and ethical business practices. We strive to be the 
                  preferred partner for businesses seeking reliable, high-quality garment manufacturing solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the world's most trusted garment manufacturer, known for innovation, 
                  sustainability, and exceptional quality. We envision a future where our products 
                  contribute to a more sustainable fashion industry while empowering communities globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our company's vision and ensure operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-2xl">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.experience} Experience</p>
                  <p className="text-xs text-gray-500 mb-3 font-medium">{leader.expertise}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Strengths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key capabilities and advantages that set us apart in the global garment manufacturing industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{strength.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{strength.description}</p>
                    <div className="text-xs font-medium text-primary bg-blue-50 rounded-full px-3 py-1">
                      {strength.metrics}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our company's growth and success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and sustainability is validated by international certifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
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
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join hundreds of satisfied clients who trust {companyInfo.name} for their garment manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Start Partnership
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}