'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, Users, MessageSquare, FileText, CheckCircle, Star, Award, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { companyInfo } from '@/data/content';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: '',
    orderQuantity: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours with a detailed response.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      productInterest: '',
      orderQuantity: '',
      timeline: '',
      budget: ''
    });
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92-52-4261234', '+92-300-8765432'],
      description: 'Call us for immediate assistance',
      availability: '24/7 Support Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@alhadiexports.com', 'sales@alhadiexports.com'],
      description: 'Send us your detailed requirements',
      availability: 'Response within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['+92-300-8765432'],
      description: 'Quick chat for instant queries',
      availability: 'Available 9 AM - 9 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Sialkot, Punjab, Pakistan'],
      description: 'Schedule a facility tour',
      availability: 'Mon-Sat: 9 AM - 6 PM'
    }
  ];

  const productCategories = [
    'T-Shirts & Polo Shirts',
    'Formal Shirts',
    'Casual Wear',
    'Sportswear',
    'Denim Products',
    'Knitwear',
    'Children\'s Clothing',
    'Uniforms & Workwear',
    'Fashion Accessories',
    'Custom Requirements'
  ];

  const orderQuantities = [
    '100 - 500 pieces',
    '500 - 1,000 pieces',
    '1,000 - 5,000 pieces',
    '5,000 - 10,000 pieces',
    '10,000+ pieces'
  ];

  const timelines = [
    'Rush Order (2-3 weeks)',
    'Standard (4-6 weeks)',
    'Regular (6-8 weeks)',
    'Flexible (8+ weeks)'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const officeDetails = {
    address: "Industrial Area, Sialkot-51310, Punjab, Pakistan",
    coordinates: "32.4945° N, 74.5229° E",
    nearbyLandmarks: [
      "5 minutes from Sialkot International Airport",
      "Adjacent to Industrial Export Zone",
      "Near Sialkot Chamber of Commerce"
    ],
    facilities: [
      "50,000 sq ft manufacturing facility",
      "Modern quality control laboratory",
      "Sample development center",
      "Client meeting rooms",
      "Parking available"
    ]
  };

  const whyChooseUs = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "International quality management standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 25+ countries worldwide"
    },
    {
      icon: Shield,
      title: "OEKO-TEX & GOTS",
      description: "Eco-friendly and sustainable practices"
    },
    {
      icon: Star,
      title: "98.5% On-Time Delivery",
      description: "Reliable and punctual service record"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact AL HADI EXPORTS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready to discuss your garment requirements? We're here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Global Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred communication method. Our dedicated team is ready to assist you with all your garment export needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-800 font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-primary font-medium mt-2">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get a Custom Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out our detailed form and receive a comprehensive quote within 24 hours. The more information you provide, the more accurate our quote will be.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Category *
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      required
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a product category</option>
                      {productCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Order Quantity
                    </label>
                    <select
                      id="orderQuantity"
                      name="orderQuantity"
                      value={formData.orderQuantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select quantity range</option>
                      {orderQuantities.map((quantity, index) => (
                        <option key={index} value={quantity}>{quantity}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Required Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Please provide detailed information about your requirements including: 
• Product specifications and designs
• Fabric preferences and quality standards
• Sizing requirements and fit preferences
• Packaging and labeling requirements
• Delivery destination and timeline
• Any special certifications needed
• Previous experience with garment imports"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Detailed Inquiry
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Enhanced Office Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Manufacturing Facility
              </h2>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    AL HADI EXPORTS - Head Office & Factory
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Complete Address</p>
                        <p className="text-gray-600">{officeDetails.address}</p>
                        <p className="text-sm text-gray-500 mt-1">GPS: {officeDetails.coordinates}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Direct Lines</p>
                        <p className="text-gray-600">+92-52-4261234 (Office)</p>
                        <p className="text-gray-600">+92-300-8765432 (Mobile/WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email Contacts</p>
                        <p className="text-gray-600">info@alhadiexports.com</p>
                        <p className="text-gray-600">sales@alhadiexports.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card className="mb-8">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Location Highlights</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Nearby Landmarks:</h4>
                    {officeDetails.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700 text-sm">{landmark}</span>
                      </div>
                    ))}
                    
                    <h4 className="font-medium text-gray-900 mt-4">Facility Features:</h4>
                    {officeDetails.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-gray-700 text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-gray-700 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-600">Sialkot Industrial Area, Pakistan</p>
                      <p className="text-xs text-gray-500 mt-1">Click to view in Google Maps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Partner With AL HADI EXPORTS?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ satisfied clients worldwide. Get your custom quote and samples within 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <FileText className="h-5 w-5 mr-2" />
              Request Detailed Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Globe className="h-5 w-5 mr-2" />
              Download Full Catalog
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            🌟 Special offer: Free samples for orders above 1,000 pieces
          </p>
        </div>
      </section>
    </div>
  );
}