'use client';

import Link from 'next/link';
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

  // Enhanced Machinery Data with specific counts
  const stitchingMachinery = [
    { name: "Flat Lock", count: 85, icon: Settings, description: "Professional flat seaming" },
    { name: "Single Needle", count: 129, icon: Zap, description: "Precision single needle stitching" },
    { name: "Over Lock", count: 155, icon: Cog, description: "Edge finishing and seaming" },
    { name: "Button Hole", count: 45, icon: Target, description: "Automated button hole creation" },
    { name: "Button Attach", count: 38, icon: Package, description: "Button attachment machines" },
    { name: "Blind Stitch", count: 22, icon: Wrench, description: "Invisible hemming machines" }
  ];

  const dyeingMachinery = [
    { name: "Jet Dyeing", count: 12, icon: Palette, description: "High-efficiency jet dyeing machines" },
    { name: "Beam Dyeing", count: 8, icon: Factory, description: "Large capacity beam dyeing" },
    { name: "Sample Dyeing", count: 6, icon: Gauge, description: "Small batch sample dyeing" },
    { name: "Washing Machines", count: 15, icon: Sparkles, description: "Industrial washing systems" },
    { name: "Hydro Extractors", count: 10, icon: Zap, description: "Water extraction machines" },
    { name: "Stenters", count: 4, icon: Monitor, description: "Fabric finishing machines" }
  ];

  // Enhanced Certifications with specific ones mentioned
  const certifications = [
    {
      name: "SEDEX",
      fullName: "Supplier Ethical Data Exchange",
      description: "Ethical trade and responsible business practices",
      logo: "🏢",
      benefits: ["Ethical sourcing", "Supply chain transparency", "Worker welfare"]
    },
    {
      name: "BSCI",
      fullName: "Business Social Compliance Initiative",
      description: "Social compliance and sustainability standards",
      logo: "🤝",
      benefits: ["Social compliance", "Worker rights", "Environmental protection"]
    },
    {
      name: "HIGG",
      fullName: "Higg Index Facility Environmental Module",
      description: "Environmental performance measurement",
      logo: "🌱",
      benefits: ["Environmental impact", "Sustainability metrics", "Resource efficiency"]
    },
    {
      name: "Accord Pakistan",
      fullName: "Pakistan Accord on Fire and Building Safety",
      description: "Workplace safety and building standards",
      logo: "🛡️",
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
                className="text-lg border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  // You can replace this with actual capabilities download functionality
                  alert('Manufacturing capabilities brochure download will be available soon. Please contact us for immediate access.');
                }}
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

          {/* Stitching Machinery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Stitching Department</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stitchingMachinery.map((machine, index) => {
                const IconComponent = machine.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{machine.name}</h4>
                      <div className="text-3xl font-bold text-primary mb-2">{machine.count}</div>
                      <p className="text-sm text-gray-600">{machine.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Dyeing Machinery */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dyeing Department</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dyeingMachinery.map((machine, index) => {
                const IconComponent = machine.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{machine.name}</h4>
                      <div className="text-3xl font-bold text-accent mb-2">{machine.count}</div>
                      <p className="text-sm text-gray-600">{machine.description}</p>
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

      {/* Enhanced Certifications Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, ethics, and sustainability is validated by internationally recognized certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary">
                <CardContent className="p-6">
                  {/* Logo Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-gray-300">
                    <span className="text-4xl">{cert.logo}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 font-medium">{cert.fullName}</p>
                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                  
                  <div className="space-y-2">
                    {cert.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                // You can replace this with actual brochure download functionality
                alert('Capabilities brochure download will be available soon. Please contact us for immediate access.');
              }}
            >
              Download Capabilities Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}