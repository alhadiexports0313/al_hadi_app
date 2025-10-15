"use client";

import { Suspense, lazy } from "react";
import { downloadCatalogPDF } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Globe,
  Users,
  MessageSquare,
  Handshake,
  Shirt,
  FileText,
  Star,
  Building,
  Leaf,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import LazyIframe from "@/components/ui/LazyIframe";
import { companyInfo } from "@/data/content";

// Dynamically import the ContactForm component
const ContactForm = lazy(() => import("@/components/ContactForm"));

export default function ContactPage() {

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92-21-32434479"],
      description: "Call us for immediate assistance",
      availability: "24/7 Support Available",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@alhadiexports.com"],
      description: "Send us your detailed requirements",
      availability: "Response within 4 hours",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+92-300-2211587"],
      description: "Quick chat for instant queries",
      availability: "Available 9 AM - 9 PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Karachi, Sindh, Pakistan"],
      description: "Schedule a facility tour",
      availability: "Mon-Sat: 9 AM - 6 PM",
    },
  ];



  const officeDetails = {
    address: companyInfo.contact.address, //"Industrial Area, Karachi-74500, Sindh, Pakistan",
    coordinates: "24.891086, 66.990536",
    nearbyLandmarks: ["Near Ghani Chowrangi"],
    facilities: [
      "50,000 sq ft manufacturing facility",
      "Modern quality control system",
      "Sample development center",
      "Client meeting rooms",
      "Huge parking facility",
    ],
  };
  const whyChooseUs = [
    {
      icon: Building,
      title: "SEDEX",
      description: "Supplier Ethical Data and responsible business practices",
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
      description: "Exporting to 9+ countries worldwide",
    },

    {
      icon: Star,
      title: "98.5% On-Time Delivery",
      description: "Reliable and punctual service record",
    },
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
              Ready to discuss your garment manufacturing requirements? We&apos;re here to
              help you succeed.
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
                <Clock className="h-5 w-5" />
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
              Choose your preferred communication method. Our dedicated team is
              ready to assist you with all your garment export needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {method.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-800 dark:text-gray-200 font-medium mb-1 transition-colors duration-300"
                    >
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
                Fill out our detailed form and receive a comprehensive quote
                within 24 hours. The more information you provide, the more
                accurate our quote will be.
              </p>

              <Suspense 
                fallback={
                  <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">Loading form...</span>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
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
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                          Complete Address
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          {officeDetails.address}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                          GPS: {officeDetails.coordinates}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                          Direct Lines
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          +92-21-32434479 (Office)
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          +92-300-2211587 (Mobile/WhatsApp)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                          Email Contacts
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          info@alhadiexports.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary dark:text-blue-400 mt-1 flex-shrink-0 transition-colors duration-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                          Business Hours
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          Saturday: 9:00 AM - 2:00 PM
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card className="mb-8 dark:bg-slate-700 dark:border-slate-600 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    Location Highlights
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      Nearby Landmarks:
                    </h4>
                    {officeDetails.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary dark:bg-blue-400 rounded-full transition-colors duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                          {landmark}
                        </span>
                      </div>
                    ))}

                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-4 transition-colors duration-300">
                      Facility Features:
                    </h4>
                    {officeDetails.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent dark:bg-purple-400 rounded-full transition-colors duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
                          {facility}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <section className="max-w-6xl mx-auto px-4 py-12">
                {/* Map Section */}
                <Card className="mb-8 shadow-lg border  border-gray-200 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-blue-800/70 dark:to-blue-900 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-primary dark:text-red-800 transition-colors duration-300" />
                      Our Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 mt-2 transition-colors duration-300">
                      Visit our state-of-the-art manufacturing facility located
                      in Karachi&apos;s premier industrial hub. We welcome
                      business partners and clients to tour our operations.
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Responsive Google Maps Iframe */}
                    <div className="relative w-full pb-[56.25%] md:pb-[40%] lg:pb-[35%]">
                      <LazyIframe
                        title="Company Location on Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.891571297235!2d66.990536!3d24.891086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0c4c96747d%3A0x9a1cf3c2c1b1234a!2s24%C2%B053'27.9%22N%2066%C2%B059'25.9%22E!5e0!3m2!1sen!2s!4v1733948200000!5m2!1sen!2s"
                        className="absolute inset-0 w-full h-full rounded-lg border border-gray-200 dark:border-slate-600 shadow-md transition-colors duration-300"
                        allowFullScreen
                        loading="lazy"
                        threshold={0.1}
                        rootMargin="200px"
                        placeholderText="Loading Google Maps..."
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* View on Google Maps Button */}
                    <div className="p-6 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-600 transition-colors duration-300">
                      <div className="text-center mb-4">
                        <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                          AL HADI EXPORTS
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          Karachi, Pakistan
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                          Coordinates: 24.891086, 66.990536
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Button
                          onClick={() =>
                            window.open(
                              "https://www.google.com/maps/search/?api=1&query=24.891086,66.990536",
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
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
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-100 dark:border-slate-600 hover:shadow-md dark:hover:shadow-blue-500/10 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-primary dark:bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
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
            Join 500+ satisfied clients worldwide. Get your custom quote and
            samples within 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="hover:text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
              variant="secondary"
              onClick={() => {
                const form = document.getElementById("contact-form");
                if (form) {
                  form.scrollIntoView({ behavior: "smooth" });
                  const firstInput = form.querySelector("input");
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