"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    productInterest: "",
    orderQuantity: "",
    timeline: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Call the actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message || "Thank you for your inquiry! We'll get back to you within 24 hours.",
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          productInterest: "",
          orderQuantity: "",
          timeline: "",
          budget: "",
        });

        onSubmitSuccess?.();
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/20 border-gray-200 dark:border-slate-600 transition-colors duration-300">
      <CardHeader>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Ready to start your next project? Send us a message and we&apos;ll
          respond within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        {/* {submitStatus === "success" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-3 transition-colors duration-300">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <p className="text-green-800 dark:text-green-300 text-sm sm:text-base">{submitMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg transition-colors duration-300">
            <p className="text-red-800 dark:text-red-300 text-sm sm:text-base">{submitMessage}</p>
          </div>
        )} */}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="+92 300 1234567"
              />
            </div>

            <div>
              <label
                htmlFor="productInterest"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Product Interest
              </label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select a category</option>
                <option value="mens-wear" className="text-gray-900 dark:text-gray-100">Men&apos;s Wear</option>
                <option value="womens-wear" className="text-gray-900 dark:text-gray-100">Women&apos;s Wear</option>
                <option value="kids-wear" className="text-gray-900 dark:text-gray-100">Kids Wear</option>
                <option value="activewear" className="text-gray-900 dark:text-gray-100">Activewear</option>
                <option value="workwear" className="text-gray-900 dark:text-gray-100">Workwear</option>
                <option value="custom-design" className="text-gray-900 dark:text-gray-100">Custom Design</option>
                <option value="other" className="text-gray-900 dark:text-gray-100">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="orderQuantity"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Expected Order Quantity
              </label>
              <select
                id="orderQuantity"
                name="orderQuantity"
                value={formData.orderQuantity}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select quantity range</option>
                <option value="500-1000" className="text-gray-900 dark:text-gray-100">1500 - 5,000 pieces</option>
                <option value="1000-5000" className="text-gray-900 dark:text-gray-100">5,000 - 50,000 pieces</option>
                <option value="5000-10000" className="text-gray-900 dark:text-gray-100">50,000 - 500,000 pieces</option>
                <option value="10000+" className="text-gray-900 dark:text-gray-100">500,000+ pieces</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select timeline</option>
                <option value="urgent" className="text-gray-900 dark:text-gray-100">Urgent (2-4 weeks)</option>
                <option value="standard" className="text-gray-900 dark:text-gray-100">Standard (4-8 weeks)</option>
                <option value="flexible" className="text-gray-900 dark:text-gray-100">Flexible (8+ weeks)</option>
                <option value="planning" className="text-gray-900 dark:text-gray-100">Planning phase</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
              >
                Budget Range (USD)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              >
                <option value="" className="text-gray-500 dark:text-gray-400">Select budget range</option>
                <option value="5000-10000" className="text-gray-900 dark:text-gray-100">$5,000 - $10,000</option>
                <option value="10000-25000" className="text-gray-900 dark:text-gray-100">$10,000 - $25,000</option>
                <option value="25000-50000" className="text-gray-900 dark:text-gray-100">$25,000 - $50,000</option>
                <option value="50000-100000" className="text-gray-900 dark:text-gray-100">$50,000 - $100,000</option>
                <option value="100000+" className="text-gray-900 dark:text-gray-100">$100,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              placeholder="Brief subject of your inquiry"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-vertical"
              placeholder="Please provide details about your requirements, timeline, and any specific questions you have..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 dark:bg-blue-600 hover:bg-blue-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span className="hidden sm:inline">Sending Message...</span>
                <span className="sm:hidden">Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
        {submitStatus === "success" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-3 transition-colors duration-300">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <p className="text-green-800 dark:text-green-300 text-sm sm:text-base">{submitMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg transition-colors duration-300">
            <p className="text-red-800 dark:text-red-300 text-sm sm:text-base">{submitMessage}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}