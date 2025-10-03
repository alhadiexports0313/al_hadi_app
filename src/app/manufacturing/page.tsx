import { CheckCircle, Clock, Cog, Factory, Shield, Award, Users, Zap, Leaf, Globe, ArrowRight, Settings, Truck, Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { certifications, services } from '@/data/content';

export default function Manufacturing() {
  const processSteps = [
    {
      id: 1,
      title: "Design & Development",
      description: "Collaborative design process with our expert team to bring your vision to life",
      icon: Target,
      duration: "3-5 days",
      details: ["Pattern making", "Tech pack creation", "Sample development", "Fit sessions"]
    },
    {
      id: 2,
      title: "Material Sourcing",
      description: "Premium fabric selection from certified suppliers worldwide",
      icon: Globe,
      duration: "5-7 days",
      details: ["Fabric selection", "Quality testing", "Color matching", "Bulk ordering"]
    },
    {
      id: 3,
      title: "Production Planning",
      description: "Detailed production scheduling and resource allocation",
      icon: Settings,
      duration: "2-3 days",
      details: ["Production timeline", "Resource allocation", "Quality checkpoints", "Delivery planning"]
    },
    {
      id: 4,
      title: "Manufacturing",
      description: "Precision manufacturing using state-of-the-art machinery",
      icon: Factory,
      duration: "15-25 days",
      details: ["Cutting", "Sewing", "Finishing", "Quality control"]
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Rigorous quality testing at every stage of production",
      icon: Shield,
      duration: "2-3 days",
      details: ["Final inspection", "Testing", "Packaging", "Documentation"]
    },
    {
      id: 6,
      title: "Shipping & Delivery",
      description: "Secure packaging and timely delivery to your destination",
      icon: Truck,
      duration: "5-15 days",
      duration_note: "Varies by location",
      details: ["Packaging", "Documentation", "Shipping", "Tracking"]
    }
  ];

  const facilities = [
    {
      title: "Cutting Department",
      description: "Advanced automated cutting systems for precision and efficiency",
      capacity: "10,000 pieces/day",
      equipment: ["CAD cutting systems", "Laser cutting machines", "Fabric spreading tables"],
      icon: Zap
    },
    {
      title: "Sewing Floor",
      description: "Modern sewing lines with skilled craftspeople",
      capacity: "5,000 garments/day",
      equipment: ["Industrial sewing machines", "Overlock machines", "Button hole machines"],
      icon: Cog
    },
    {
      title: "Finishing Unit",
      description: "Complete finishing services for perfect garment presentation",
      capacity: "8,000 pieces/day",
      equipment: ["Steam pressing", "Ironing stations", "Packaging systems"],
      icon: Award
    },
    {
      title: "Quality Control",
      description: "Dedicated QC department ensuring highest standards",
      capacity: "100% inspection",
      equipment: ["Testing equipment", "Measurement tools", "Documentation systems"],
      icon: Shield
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
              <Button variant="accent" size="lg" className="text-lg">
                View Our Process
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                Download Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Timeline */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, our streamlined process ensures quality, efficiency, and timely completion of every order.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.id} className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className="group hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6 lg:p-8">
                          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span>{step.duration}</span>
                                {step.duration_note && <span className="text-xs">({step.duration_note})</span>}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <div className="grid grid-cols-2 gap-2">
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

                    {/* Timeline Node */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-primary">{step.id}</span>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing facilities are equipped with the latest technology and operated by skilled professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                        <p className="text-gray-600 mb-3">{facility.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <Factory className="w-4 h-4" />
                          <span>Capacity: {facility.capacity}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Equipment:</h4>
                      <div className="space-y-2">
                        {facility.equipment.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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

      {/* Certifications */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and sustainability is validated by internationally recognized certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.id} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                  <div className="space-y-2">
                    {cert.benefits.slice(0, 2).map((benefit, i) => (
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
            <Button variant="accent" size="lg" className="flex items-center justify-center">
              Request Factory Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Capabilities Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}