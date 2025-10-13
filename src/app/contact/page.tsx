'use client';

import { useState } from 'react';
import { downloadCatalogPDF } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, Users, MessageSquare, Handshake, Shirt, FileText, CheckCircle, Star, Building, Leaf, ExternalLink } from 'lucide-react';
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error messages when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSubmitStatus('success');

        // Provide different messages based on email delivery status
        if (responseData.emailSent) {
          setSubmitMessage('✅ Quote request submitted successfully! We will contact you within 24 hours with a detailed response.');
        } else {
          setSubmitMessage('✅ Quote request received! We will contact you soon. (Email delivery may be delayed)');
        }

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
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      // Error submitting form - handle silently in production
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92-21-32434479'],
      description: 'Call us for immediate assistance',
      availability: '24/7 Support Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@alhadiexports.com'],
      description: 'Send us your detailed requirements',
      availability: 'Response within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['+92-300-2211587'],
      description: 'Quick chat for instant queries',
      availability: 'Available 9 AM - 9 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Karachi, Sindh, Pakistan'],
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
    'Children&apos;s Clothing',
    'Uniforms & Workwear',
    'Fashion Accessories',
    'Custom Requirements'
  ];

  const orderQuantities = [
    '1,500 - 2,000 pieces',
    '2,000 - 5,000 pieces',
    '5,000 - 25,000 pieces',
    '25,000 - 50,000 pieces',
    '100,000+ pieces'
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
    '$500,000+'
  ];

  const officeDetails = {
    address: companyInfo.contact.address,//"Industrial Area, Karachi-74500, Sindh, Pakistan",
    coordinates: "24.891086, 66.990536",
    nearbyLandmarks: [
      "Near Ghani Chowrangi",
    ],
    facilities: [
      "50,000 sq ft manufacturing facility",
      "Modern quality control system",
      "Sample development center",
      "Client meeting rooms",
      "Huge parking facility"
    ]
  };
  const whyChooseUs = [
    {
      icon: Building,
      title: "SEDEX",
      description: "Supplier Ethical Data and responsible business practices"
    },
    {
      icon: Handshake,
      title: "BSCI",
      description: "Business Social Compliance Initiative",
    },
    {
      icon: Leaf,
      title: "HIGG",
      description: "Higg Index Facility Environmental Module",
    },
    {
      icon: Shirt,
      title: "Accord Pakistan",
      description: "Pakistan Accord on Fire and Building Safety",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 9+ countries worldwide"
    },

    {
      icon: Star,
      title: "98.5% On-Time Delivery",
      description: "Reliable and punctual service record"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark dark:from-blue-800 dark:to-blue-900 text-white py-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact AL HADI EXPORTS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready to discuss your garment requirements? We&apos;re here to help you succeed.
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
                <span>14+ Years Experience</span>
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
      <section className="py-16 dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Choose your preferred communication method. Our dedicated team is ready to assist you with all your garment export needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{method.description}</p>
                </CardHeader>
                <CardContent>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-800 dark:text-gray-200 font-medium mb-1 transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-primary dark:text-blue-400 font-medium mt-2 transition-colors duration-300">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Details */}
      <section className="py-16 bg-white dark:bg-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div id="contact-form">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                Get a Custom Quote
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                Fill out our detailed form and receive a comprehensive quote within 24 hours. The more information you provide, the more accurate our quote will be.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-label="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-label="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      aria-label="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      aria-label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Product Category *
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      required
                      aria-label="Product Category"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    >
                      <option value="">Select a product category</option>
                      {productCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Order Quantity
                    </label>
                    <select
                      id="orderQuantity"
                      name="orderQuantity"
                      aria-label="Order Quantity"
                      value={formData.orderQuantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
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
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Required Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      aria-label="Required Timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      aria-label="Budget Range"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    aria-label="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Detailed Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-label="Detailed Requirements"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
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
                  isLoading={isSubmitting}
                  aria-label="Send Detailed Inquiry"
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

                {/* Success/Error Message Display */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center transition-colors duration-300 ${submitStatus === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800'
                    }`}>
                    <p className="text-sm font-medium">{submitMessage}</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center transition-colors duration-300">
                  By submitting this form, you agree to our privacy policy. We&apos;ll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Enhanced Office Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
                Visit Our Manufacturing Facility
              </h2>

              <Card className="mb-8 dark:bg-slate-700 dark:border-slate-600 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                    AL HADI EXPORTS - Head Office & Factory
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary dark:text-blue-400 mt-1 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Complete Address</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{officeDetails.address}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">GPS: {officeDetails.coordinates}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Direct Lines</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">+92-21-32434479 (Office)</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">+92-300-2211587 (Mobile/WhatsApp)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Email Contacts</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">info@alhadiexports.com</p>

                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary dark:text-blue-400 mt-1 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Business Hours</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card className="mb-8 dark:bg-slate-700 dark:border-slate-600 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Location Highlights</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">Nearby Landmarks:</h4>
                    {officeDetails.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary dark:bg-blue-400 rounded-full transition-colors duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">{landmark}</span>
                      </div>
                    ))}

                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-4 transition-colors duration-300">Facility Features:</h4>
                    {officeDetails.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent dark:bg-purple-400 rounded-full transition-colors duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>



              <section className="max-w-6xl mx-auto px-4 py-12">
                {/* Map Section */}
                <Card className="mb-8 shadow-lg border  border-gray-200 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-blue-900/50 dark:to-blue-800/50 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-primary dark:text-blue-400 transition-colors duration-300" />
                      Our Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 mt-2 transition-colors duration-300">
                      Visit our state-of-the-art manufacturing facility located in Karachi&apos;s premier industrial hub.
                      We welcome business partners and clients to tour our operations.
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Responsive Google Maps Iframe */}
                    <div className="relative w-full pb-[56.25%] md:pb-[40%] lg:pb-[35%]">
                      <iframe
                        title="Company Location on Google Maps"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.891571297235!2d66.990536!3d24.891086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0c4c96747d%3A0x9a1cf3c2c1b1234a!2s24%C2%B053'27.9%22N%2066%C2%B059'25.9%22E!5e0!3m2!1sen!2s!4v1733948200000!5m2!1sen!2s"
                        className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 dark:border-slate-600 shadow-md transition-colors duration-300"
                      ></iframe>
                    </div>


                    {/* View on Google Maps Button */}
                    <div className="p-6 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-600 transition-colors duration-300">
                      <div className="text-center mb-4">
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">AL HADI EXPORTS</p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Karachi, Pakistan</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">Coordinates: 24.891086, 66.990536</p>
                      </div>
                      <div className="flex justify-center">
                        <Button
                          onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=24.891086,66.990536', '_blank', 'noopener,noreferrer')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-primary text-white hover:bg-primary-dark dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                          aria-label="Open Location in Google Maps"
                        >
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          <span>Open Location in Google Maps 📍</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                  Why Partner With AL HADI EXPORTS?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-100 dark:border-slate-600 hover:shadow-md dark:hover:shadow-blue-500/10 transition-all duration-300">
                        <div className="w-8 h-8 bg-primary dark:bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm transition-colors duration-300">{item.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.description}</p>
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
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark dark:from-slate-800 dark:to-slate-700 text-white transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white dark:text-gray-100 transition-colors duration-300">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-gray-300 transition-colors duration-300">
            Join 500+ satisfied clients worldwide. Get your custom quote and samples within 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="hover:text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
              variant="secondary"
              onClick={() => {
                const form = document.getElementById('contact-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                  const firstInput = form.querySelector('input');
                  if (firstInput) firstInput.focus();
                }
              }}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 dark:bg-slate-600/50 dark:border-slate-500 dark:hover:bg-slate-600/70 transition-colors duration-300"
              onClick={downloadCatalogPDF}
            >
              <FileText className="h-5 w-5 mr-2" />
              Download Catalog
            </Button>
          </div>
          {/* <p className="text-sm text-blue-200 mt-6">
            🌟 Special offer: Free samples for orders above 1,000 pieces
          </p> */}
        </div>
      </section>
    </div>
  );
}