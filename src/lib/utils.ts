import { type ClassValue, clsx } from 'clsx';
import jsPDF from 'jspdf';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Generates and downloads a company profile PDF using jsPDF
 * This creates a proper PDF file that downloads directly without opening blank pages
 */
export function downloadCompanyProfilePDF() {
  try {
    // Create new jsPDF instance
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Set font
    doc.setFont('helvetica');

    // Header Section
    doc.setFontSize(24);
    doc.setTextColor(30, 64, 175); // Blue color
    doc.text('AL HADI EXPORTS', 105, 30, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(102, 102, 102); // Gray color
    doc.text('Premium Garments Manufacturer & Exporter', 105, 40, { align: 'center' });
    
    // Add line under header
    doc.setDrawColor(30, 64, 175);
    doc.setLineWidth(1);
    doc.line(20, 45, 190, 45);

    // Company Overview
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Company Overview', 20, 60);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const overviewText = `AL HADI EXPORTS has been a leading manufacturer and exporter of premium quality garments since 2000. Based in Karachi, Pakistan, we specialize in producing high-quality apparel for global markets with a focus on innovation, sustainability, and customer satisfaction.

Our state-of-the-art manufacturing facility spans over 50,000 square feet and employs more than 500 skilled workers. We have successfully served clients across North America, Europe, and Asia, building long-term partnerships based on trust and quality.`;
    
    const splitOverview = doc.splitTextToSize(overviewText, 170);
    doc.text(splitOverview, 20, 70);

    // Core Services
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Core Services', 20, 110);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const services = [
      '• Custom Garment Manufacturing',
      '• Private Label Production',
      '• Design & Development Services',
      '• Quality Control & Assurance',
      '• Global Shipping & Logistics',
      '• Sustainable Manufacturing Practices'
    ];
    
    let yPos = 120;
    services.forEach(service => {
      doc.text(service, 25, yPos);
      yPos += 8;
    });

    // Product Categories
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Product Categories', 20, 175);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const categories = [
      '• Outerwear: Jackets, Coats, Hoodies',
      '• Casual Wear: T-shirts, Polo Shirts, Sweatshirts',
      '• Formal Wear: Dress Shirts, Trousers',
      '• Activewear: Sports Apparel, Gym Wear',
      '• Children\'s Clothing: Kids & Baby Apparel',
      '• Custom Designs: Tailored Solutions'
    ];
    
    yPos = 185;
    categories.forEach(category => {
      doc.text(category, 25, yPos);
      yPos += 8;
    });

    // Quality Standards
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Quality Standards & Certifications', 20, 235);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const standards = [
      '• ISO 9001:2015 Quality Management',
      '• OEKO-TEX Standard 100',
      '• GOTS (Global Organic Textile Standard)',
      '• WRAP (Worldwide Responsible Accredited Production)',
      '• BSCI (Business Social Compliance Initiative)'
    ];
    
    yPos = 245;
    standards.forEach(standard => {
      doc.text(standard, 25, yPos);
      yPos += 8;
    });

    // Add new page for contact information
    doc.addPage();

    // Contact Information
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Contact Information', 20, 30);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    
    doc.text('Head Office:', 20, 45);
    doc.text('AL HADI EXPORTS', 20, 55);
    doc.text('Karachi, Pakistan', 20, 65);
    
    doc.text('Phone:', 20, 80);
    doc.text('+92 (21) 1234-5678', 20, 90);
    
    doc.text('Email:', 20, 105);
    doc.text('info@alhadiexports.com', 20, 115);
    doc.text('sales@alhadiexports.com', 20, 125);
    
    doc.text('Website:', 20, 140);
    doc.text('www.alhadiexports.com', 20, 150);

    // Why Choose Us
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Why Choose AL HADI EXPORTS?', 20, 175);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const whyChoose = [
      '• 24+ Years of Industry Experience',
      '• State-of-the-art Manufacturing Facility',
      '• Skilled Workforce of 500+ Employees',
      '• Global Supply Chain Network',
      '• Competitive Pricing & Flexible MOQs',
      '• On-time Delivery Guarantee',
      '• Comprehensive Quality Assurance',
      '• Sustainable & Ethical Practices'
    ];
    
    yPos = 185;
    whyChoose.forEach(reason => {
      doc.text(reason, 25, yPos);
      yPos += 8;
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(102, 102, 102);
    doc.text('© 2024 AL HADI EXPORTS. All rights reserved.', 105, 270, { align: 'center' });
    doc.text('This document contains confidential and proprietary information.', 105, 280, { align: 'center' });

    // Save the PDF
    doc.save('AL_HADI_EXPORTS_Company_Profile.pdf');
    
    console.log('Company profile PDF downloaded successfully');
    return true;
    
  } catch (error) {
    console.error('Error generating company profile PDF:', error);
    return false;
  }
}