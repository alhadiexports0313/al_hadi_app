'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Globe, Target, Eye, Heart, Factory, Shield, TrendingUp, Clock, CheckCircle, Zap} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { companyInfo, certifications, stats } from '@/data/content';
import { downloadCompanyProfilePDF } from '@/lib/utils';


export default function About() {
  // const milestones = [
  //   {
  //     year: "2010",
  //     title: "Company Founded",
  //     description: "AL HADI EXPORTS was established with a vision to provide premium quality garments to global markets."
  //   },
  //   {
  //     year: "2013",
  //     title: "International Expansion",
  //     description: "Began exporting to European markets, establishing our first international partnerships."
  //   },
  //   {
  //     year: "2016",
  //     title: "ISO Certification",
  //     description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management."
  //   },
  //   {
  //     year: "2019",
  //     title: "Sustainable Practices",
  //     description: "Implemented eco-friendly manufacturing processes and obtained GOTS certification."
  //   },
  //   {
  //     year: "2022",
  //     title: "Digital Transformation",
  //     description: "Modernized our operations with advanced technology and digital quality control systems."
  //   },
  //   {
  //     year: "2024",
  //     title: "Global Recognition",
  //     description: `Serving ${stats[1].number} countries with over 1 million garments produced annually.`
  //   }
  // ];
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "AL HADI EXPORTS was established with a vision to deliver premium-quality garments to international markets.",
    },
    {
      year: "2013",
      title: "Global Expansion",
      description:
        "Began exporting to European and Middle Eastern markets, forming our first long-term international partnerships.",
    },
    {
      year: "2016",
      title: "Certified Excellence",
      description:
        "Earned major global certifications including SEDEX, HIGG, BSCI, and Accord Pakistan, ensuring compliance and ethical manufacturing standards.",
    },
    {
      year: "2019",
      title: "Sustainability Commitment",
      description:
        "Strengthened our focus on responsible production by integrating eco-conscious methods and enhancing worker welfare initiatives.",
    },
    {
      year: "2022",
      title: "Operational Expansion",
      description:
        "Expanded production capacity to meet growing global demand while maintaining strict quality and ethical standards.",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description:
        `Now proudly serving over ${stats[1].number} countries with more than 2.5 million garments produced annually, backed by 500+ skilled professionals.`
    },
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
      description: "Our customers&apos; success is our success. We build lasting partnerships through exceptional service."
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
      name: "Danish Qazi",
      position: "Chief Executive Officer",
      experience: "18+ years",
      expertise: "Strategic Leadership & Global Business Development",
      description: "Leading AL HADI EXPORTS with a vision for sustainable growth and international expansion.",
      image: "/images/Leadership/danish.jpg"
    },
    {
      name: "Zeeshan Qazi",
      position: "Director",
      experience: "12+ years",
      expertise: "Operations Management & Business Development",
      description: "Driving operational excellence and strategic partnerships for global market expansion.",
      image: "/images/Leadership/zeeshan.png"
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
      metrics: `${stats[1].number} countries served`
    },
    {
      icon: Award,
      title: "Quality Certifications",
      description: "International certifications ensuring compliance with global standards",
      metrics: "SEDEX, HIGG, BSCI, Accord Pakistan"
    },
    {
      icon: TrendingUp,
      title: "Scalable Production",
      description: "Flexible manufacturing capacity to meet varying order volumes",
      metrics: "2.5M+ garments annually"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable delivery schedules with 98.2% on-time performance",
      metrics: "98.2% on-time delivery"
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
    <main className="min-h-screen dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary dark:from-blue-700 dark:to-blue-800 text-white py-20 transition-colors duration-300">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-30 transition-opacity duration-300"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-blue-200 transition-colors duration-300">
              About <span className="text-accent dark:text-blue-400">{companyInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 dark:text-blue-100 transition-colors duration-300">
              {stats.find(s => s.label.includes('Years'))?.number} years of excellence in garment manufacturing and export
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Founded in 2010, {companyInfo.name} has grown into a globally recognized leader in garment production and export.
                Our journey began with a clear vision — to craft premium-quality garments that meet international standards while
                maintaining competitive pricing.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Today, we proudly export over 2.5 million garments annually to clients in 9+ countries, supported by a team of
                500+ skilled professionals dedicated to precision and excellence. Our state-of-the-art manufacturing facilities
                combine traditional craftsmanship to ensure consistent quality and timely delivery on every order.
              </p>
              {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike local or retail operations, we focus exclusively on large-scale manufacturing and bulk exports, serving 
                leading global brands with reliability, innovation, and trust.
              </p> */}
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r bg-blue-700 dark:bg-blue-600 text-white hover:shadow-lg hover:bg-purple-600 dark:hover:bg-blue-500 hover:text-white transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900"
                onClick={downloadCompanyProfilePDF}
              >
                Download Company Profile
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-white transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-6 dark:text-blue-200 transition-colors duration-300">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="dark:text-blue-100 transition-colors duration-300">Founded:</span>
                    <span className="font-semibold dark:text-blue-200 transition-colors duration-300">2010</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="dark:text-blue-100 transition-colors duration-300">Employees:</span>
                    <span className="font-semibold dark:text-blue-200 transition-colors duration-300">500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="dark:text-blue-100 transition-colors duration-300">Countries Served:</span>
                    <span className="font-semibold dark:text-blue-200 transition-colors duration-300">{stats[1].number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="dark:text-blue-100 transition-colors duration-300">Experience:</span>
                    <span className="font-semibold dark:text-blue-200 transition-colors duration-300">14+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center dark:bg-slate-700 dark:border-slate-600 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Our Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  To manufacture and export premium quality garments that exceed customer expectations
                  while maintaining sustainable and ethical business practices. We strive to be the
                  preferred partner for businesses seeking reliable, high-quality garment manufacturing solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-slate-700 dark:border-slate-600 hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">Our Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  To become the world&apos;s most trusted garment manufacturer, known for innovation,
                  sustainability, and exceptional quality. We envision a future where our products
                  contribute to a more sustainable fashion industry while empowering communities globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
              Meet the experienced professionals who drive our company&apos;s vision and ensure operational excellence.
            </p>
          </div>
          {/*Centered grid for 2 leadership cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-5xl w-full">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 mx-auto w-full max-w-md bg-yellow-200 dark:bg-slate-700 rounded-2xl dark:border-slate-600"
                >
                  <CardContent className="p-6 sm:p-8">
                    {/* Full-width image section */}
                    <div className="relative w-full h-80 sm:h-96 mb-4 overflow-hidden rounded-lg border-4 border-primary/20 dark:border-blue-500/30 shadow-lg dark:shadow-slate-900/20 transition-all duration-300">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="100vw"
                      />
                    </div>

                    {/* Text content with white color and compact spacing */}
                    <div className="space-y-0.5">
                      <h3 className="text-2xl sm:text-3xl font-bold dark:text-gray-100 transition-colors duration-300">{leader.name}</h3>
                      <p className="font-semibold text-lg sm:text-xl text-blue-500 dark:text-blue-400 transition-colors duration-300">{leader.position}</p>
                      <p className="text-base sm:text-lg font-medium text-blue-500 dark:text-blue-400 transition-colors duration-300">{leader.experience} Experience</p>
                      <p className="text-sm sm:text-base italic text-blue-500 dark:text-blue-400 transition-colors duration-300">{leader.expertise}</p>
                      <p className="text-base sm:text-lg leading-relaxed pt-1 text-gray-400 dark:text-gray-300 transition-colors duration-300">{leader.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Our Core Strengths
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              The key capabilities and advantages that set us apart in the global garment manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 dark:bg-slate-700 dark:border-slate-600">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">{strength.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed transition-colors duration-300">{strength.description}</p>
                    <div className="text-xs font-medium text-primary dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full px-3 py-1 transition-colors duration-300">
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
      <section className="py-20 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold dark:text-gray-100 transition-colors duration-300">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Key milestones that have shaped our company&apos;s growth and success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary dark:from-blue-600 dark:to-blue-700 transition-colors duration-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 dark:bg-slate-700 dark:border-slate-600">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-300">{milestone.year}</div>
                        <h3 className="text-xl font-semibold dark:text-gray-100 mb-3 transition-colors duration-300">{milestone.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-accent dark:bg-purple-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg dark:shadow-slate-900/20 transition-all duration-300"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Numbers that reflect our commitment to excellence and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary dark:text-blue-400 mb-2 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg transition-colors duration-300">{stat.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Our commitment to quality and sustainability is validated by international certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 dark:bg-slate-700 dark:border-slate-600"
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-white dark:bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 dark:border-slate-500 transition-colors duration-300">
                    <Image
                      src={cert.logo}
                      alt={`${cert.name} certification logo`}
                      width={80}
                      height={80}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      priority={index < 2}
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary dark:from-blue-700 dark:to-blue-800 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-blue-200 transition-colors duration-300">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 dark:text-blue-100 transition-colors duration-300">
            Join hundreds of satisfied clients who trust {companyInfo.name} for their garment manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button variant="accent" size="lg">
              Start Partnership
            </Button>
            </Link>

            <Link href="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-purple-600 hover:text-white dark:border-blue-200 dark:text-blue-200 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
              Contact Us
            </Button>
            </Link>


          </div>
        </div>
      </section>
    </main>
  );
}