'use client';

import Link from 'next/link';
import Image from 'next/image';
import { downloadCapabilitiesPDF } from '@/lib/utils';
import { CheckCircle, Clock, Cog, Factory, Shield, Award, Users, Zap, Leaf, Globe, ArrowRight, Settings, Truck, Target, Scissors, Palette, Sparkles, Package, Search, Gauge, Wrench, Monitor } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export default function Manufacturing() {
  // Enhanced Process Flow with specific manufacturing steps
  const processSteps = [
    {
      id: 1,
      title: "Cutting",
      description: "Precision fabric cutting using advanced CAD systems and automated cutting machines",
      icon: Scissors,
      duration: "2-3 days",
      details: ["Pattern layout optimization", "Automated cutting systems", "Fabric waste minimization", "Quality marking"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Stitching",
      description: "Expert stitching using state-of-the-art sewing machines and skilled craftspeople",
      icon: Settings,
      duration: "8-12 days",
      details: ["Single needle stitching", "Overlock finishing", "Flat lock seaming", "Button hole creation"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Embroidery/Dyeing",
      description: "Custom embroidery and professional dyeing with eco-friendly processes",
      icon: Palette,
      duration: "3-5 days",
      details: ["Custom embroidery designs", "Color matching", "Eco-friendly dyeing", "Print application"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Finishing",
      description: "Professional finishing touches including pressing, trimming, and final assembly",
      icon: Sparkles,
      duration: "2-4 days",
      details: ["Steam pressing", "Thread trimming", "Final assembly", "Accessory attachment"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Quality Control",
      description: "Comprehensive quality inspection ensuring every garment meets international standards",
      icon: Search,
      duration: "1-2 days",
      details: ["Visual inspection", "Measurement verification", "Defect identification", "Final approval"],
      color: "from-red-500 to-red-600"
    }
  ];

  // Enhanced Machinery Data with specific counts - organized into 6 cards
  const mainMachinery = [
    { 
      name: "Flat Lock Machines", 
      count: 85, 
      icon: Settings, 
      description: "Professional flat seaming for high-quality finishes",
      details: ["• Flat seam construction", "• Professional finishing", "• High-speed operation"]
    },
    { 
      name: "Single Needle Machines", 
      count: 129, 
      icon: Zap, 
      description: "Precision single needle stitching for detailed work",
      details: ["• Precision stitching", "• Detailed construction", "• Versatile applications"]
    },
    { 
      name: "Over Lock Machines", 
      count: 155, 
      icon: Cog, 
      description: "Edge finishing and seaming for durability",
      details: ["• Edge finishing", "• Seam reinforcement", "• Professional quality"]
    }
  ];

  const supportMachinery = [
    { 
      name: "Press Equipment", 
      count: 12, 
      icon: Sparkles, 
      description: "Professional pressing and finishing equipment",
      details: ["• Steam pressing", "• Professional finishing", "• Quality enhancement"]
    },
    { 
      name: "Two Needle Machines", 
      count: 4, 
      icon: Target, 
      description: "Specialized two-needle stitching for reinforced seams",
      details: ["• Reinforced stitching", "• Parallel seaming", "• Structural strength"]
    },
    { 
      name: "Other Facilities", 
      count: 25, 
      icon: Package, 
      description: "Specialized equipment for complete production",
      details: [
        "• Feedo Machines (3 units)",
        "• Bar Tack Machines (4 units)", 
        "• Button Hole Machines (3 units)",
        "• Button Attachment (2 units)",
        "• Eyelet Machines (3 units)",
        "• Consie Machines (3 units)",
        "• Press Boilers (3 units)",
        "• Cutting Machines (3 units)"
      ]
    }
  ];

  // Enhanced Certifications with actual image logos
  const certifications = [
    {
      name: "SEDEX",
      fullName: "Supplier Ethical Data Exchange",
      description: "Ethical trade and responsible business practices",
      logo: "/images/logo/certi/Sedex-logo.png",
      benefits: ["Ethical sourcing", "Supply chain transparency", "Worker welfare"]
    },
    {
      name: "BSCI",
      fullName: "Business Social Compliance Initiative",
      description: "Social compliance and sustainability standards",
      logo: "/images/logo/certi/bsci_logo.png",
      benefits: ["Social compliance", "Worker rights", "Environmental protection"]
    },
    {
      name: "HIGG",
      fullName: "Higg Index Facility Environmental Module",
      description: "Environmental performance measurement",
      logo: "/images/logo/certi/higg_logo.jpg",
      benefits: ["Environmental impact", "Sustainability metrics", "Resource efficiency"]
    },
    {
      name: "Accord Pakistan",
      fullName: "Pakistan Accord on Fire and Building Safety",
      description: "Workplace safety and building standards",
      logo: "/images/logo/certi/accord_logo.png",
      benefits: ["Fire safety", "Building safety", "Worker protection"]
    }
  ];

  const qualityStandards = [
    {
      title: "Pre-Production",
      checks: ["Material inspection", "Color approval", "Pattern verification", "Sample approval"]
    },
    {
      title: "In-Line Production",
      checks: ["Continuous monitoring", "Process verification", "Dimensional checks", "Defect tracking"]
    },
    {
      title: "Final Inspection",
      checks: ["100% visual inspection", "Measurement verification", "Packaging quality", "Documentation review"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Manufacturing
              <span className="block text-accent mt-2">& Quality Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              State-of-the-art facilities, skilled craftspeople, and rigorous quality control processes
              ensure every garment meets the highest international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="text-lg"
                onClick={() => {
                  const element = document.getElementById('manufacturing-process');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Process
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                onClick={downloadCapabilitiesPDF}
              >
                Download Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Flow Timeline */}
      <section id="manufacturing-process" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Process Flow
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-step manufacturing process ensures quality, efficiency, and timely completion of every order.
            </p>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-orange-500 to-red-500 transform -translate-y-1/2"></div>

              <div className="flex justify-between items-center relative">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.id} className="flex flex-col items-center group">
                      {/* Timeline Node */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-6 relative z-10`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content Card */}
                      <Card className="w-64 group-hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{step.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                          <div className="space-y-2">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 via-orange-500 to-red-500"></div>

              <div className="space-y-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.id} className="flex items-start gap-6">
                      {/* Timeline Node */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10 flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content Card */}
                      <Card className="flex-1 hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{step.duration}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Facilities with Machinery Lists */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Facilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities house advanced machinery operated by skilled professionals.
            </p>
          </div>

          {/* Main Production Machinery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Primary Production Equipment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainMachinery.map((machine, index) => {
                const IconComponent = machine.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{machine.name}</h4>
                      <div className="text-3xl font-bold text-primary mb-2">{machine.count}</div>
                      <p className="text-sm text-gray-600 mb-3">{machine.description}</p>
                      <div className="text-xs text-gray-500 text-left space-y-1">
                        {machine.details.map((detail, i) => (
                          <div key={i}>{detail}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Support & Specialized Machinery */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Support & Specialized Equipment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportMachinery.map((machine, index) => {
                const IconComponent = machine.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{machine.name}</h4>
                      <div className="text-3xl font-bold text-accent mb-2">{machine.count}</div>
                      <p className="text-sm text-gray-600 mb-3">{machine.description}</p>
                      <div className="text-xs text-gray-500 text-left space-y-1">
                        {machine.details.map((detail, i) => (
                          <div key={i}>{detail}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Control Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality control system ensures every garment meets international standards and customer expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{standard.title}</h3>
                  <div className="space-y-3">
                    {standard.checks.map((check, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced International Certifications Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              International Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our commitment to quality, ethics, and sustainability is validated by internationally recognized certifications that ensure the highest standards in manufacturing.
            </p>
          </div>

          {/* Responsive Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                {/* Card Content */}
                <div className="p-6 sm:p-8 text-center">
                  {/* Logo Container with Rounded Background */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-gray-100 group-hover:border-blue-200 group-hover:scale-110">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                        <Image
                          src={cert.logo}
                          alt={`${cert.name} certification logo`}
                          fill
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300 opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Certification Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">
                      {cert.fullName}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="mt-6 space-y-2">
                    {cert.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-left">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Certifications Stats */}
          <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{certifications.length}</div>
                <div className="text-sm sm:text-base text-gray-600">International Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm sm:text-base text-gray-600">Compliance Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">14+</div>
                <div className="text-sm sm:text-base text-gray-600">Years Certified</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm sm:text-base text-gray-600">Quality Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Manufacturing Excellence?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Partner with us for world-class garment manufacturing that combines quality, efficiency, and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="flex items-center justify-center">
                Request Factory Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              onClick={downloadCapabilitiesPDF}
            >
              Download Capabilities Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}