import { type ClassValue, clsx } from 'clsx';
import jsPDF from 'jspdf';
import { products } from '@/data/content';

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
    const overviewText = `AL HADI EXPORTS has been a leading manufacturer and exporter of premium quality garments since 2010. Based in Karachi, Pakistan, we specialize in producing high-quality apparel for global markets with a focus on innovation, sustainability, and customer satisfaction.

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
      '• SEDEX (Shipping Export Declaration Exchange)',
      '• BSCI (Business Social Compliance Initiative)',
      '• HIGG (High Integrity Garments Group)',
      '• Accord Pakistan (Quality Assurance)',
      
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

    doc.text('Whatsapp:', 20, 80);
    doc.text('+92 300 2211587', 20, 90);
    
    doc.text('Email:', 20, 105);
    doc.text('info@alhadiexports.com', 20, 115);
    doc.text('danishqazi@alhadiexports.com', 20, 125);
    
    doc.text('Website:', 20, 140);
    doc.text('www.alhadiexports.com', 20, 150);

    // Why Choose Us
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Why Choose AL HADI EXPORTS?', 20, 175);
    
    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const whyChoose = [
      '• 14+ Years of Industry Experience',
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

export function downloadCatalogPDF() {
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
    doc.text('AL HADI EXPORTS', 105, 25, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(102, 102, 102); // Gray color
    doc.text('Product Catalog 2024', 105, 35, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text('Excellence in Knit Fashion & Premier Garment Manufacturing', 105, 42, { align: 'center' });
    
    // Add line under header
    doc.setDrawColor(30, 64, 175);
    doc.setLineWidth(1);
    doc.line(20, 47, 190, 47);

    let yPos = 60;
    const pageHeight = 297; // A4 height in mm
    const bottomMargin = 30;

    // Introduction
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text('Welcome to AL HADI EXPORTS', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const introText = `Discover our comprehensive range of premium quality garments. With over 14 years of experience in manufacturing and exporting, we offer innovative designs, superior quality, and competitive pricing for global markets.`;
    const splitIntro = doc.splitTextToSize(introText, 170);
    doc.text(splitIntro, 20, yPos);
    yPos += splitIntro.length * 5 + 10;

    // Products Section
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('Our Product Range', 20, yPos);
    yPos += 15;

    // Loop through products
    products.forEach((product, index) => {
      // Check if we need a new page
      if (yPos > pageHeight - bottomMargin - 60) {
        doc.addPage();
        yPos = 30;
      }

      // Product name
      doc.setFontSize(12);
      doc.setTextColor(30, 64, 175);
      doc.text(`${index + 1}. ${product.name}`, 20, yPos);
      yPos += 8;

      // Category
      doc.setFontSize(9);
      doc.setTextColor(102, 102, 102);
      doc.text(`Category: ${product.category}`, 25, yPos);
      yPos += 6;

      // Description
      doc.setFontSize(9);
      doc.setTextColor(51, 51, 51);
      const descText = doc.splitTextToSize(product.description, 165);
      doc.text(descText, 25, yPos);
      yPos += descText.length * 4 + 3;

      // Features
      if (product.features && product.features.length > 0) {
        doc.setFontSize(9);
        doc.setTextColor(30, 64, 175);
        doc.text('Key Features:', 25, yPos);
        yPos += 5;
        
        doc.setTextColor(51, 51, 51);
        product.features.slice(0, 4).forEach(feature => {
          doc.text(`• ${feature}`, 30, yPos);
          yPos += 4;
        });
        yPos += 2;
      }

      // Order Information
      doc.setFontSize(8);
      doc.setTextColor(102, 102, 102);
      doc.text(`Min Order: ${product.minOrder} | Lead Time: ${product.leadTime}`, 25, yPos);
      yPos += 6;

      // Certifications
      if (product.certifications && product.certifications.length > 0) {
        doc.text(`Certifications: ${product.certifications.join(', ')}`, 25, yPos);
        yPos += 8;
      }

      // Add separator line
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.5);
      doc.line(20, yPos, 190, yPos);
      yPos += 8;
    });

    // Add new page for company information
    doc.addPage();
    yPos = 30;

    // Company Information
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text('About AL HADI EXPORTS', 20, yPos);
    yPos += 15;
    
    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const aboutText = `AL HADI EXPORTS has been a leading manufacturer and exporter of premium quality garments since 2010. Our state-of-the-art facility in Karachi, Pakistan, combines traditional craftsmanship with modern technology to deliver exceptional products to global markets.`;
    const splitAbout = doc.splitTextToSize(aboutText, 170);
    doc.text(splitAbout, 20, yPos);
    yPos += splitAbout.length * 5 + 15;

    // Why Choose Us
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text('Why Choose Us?', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(9);
    doc.setTextColor(51, 51, 51);
    const whyChoose = [
      '✓ 14+ Years of Industry Experience',
      '✓ State-of-the-art Manufacturing Facility',
      '✓ Skilled Workforce of 500+ Employees',
      '✓ Global Supply Chain Network',
      '✓ Competitive Pricing & Flexible MOQs',
      '✓ On-time Delivery Guarantee',
      '✓ Comprehensive Quality Assurance',
      '✓ Sustainable & Ethical Practices'
    ];
    
    whyChoose.forEach(reason => {
      doc.text(reason, 25, yPos);
      yPos += 6;
    });

    yPos += 10;

    // Contact Information
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text('Contact Information', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    
    doc.text('AL HADI EXPORTS', 20, yPos);
    yPos += 6;
    doc.text('Karachi, Pakistan', 20, yPos);
    yPos += 8;

    doc.text('WhatsApp: +92 300 2211587', 20, yPos);
    yPos += 6;
    doc.text('Email: info@alhadiexports.com', 20, yPos);
    yPos += 6;
    doc.text('Email: danishqazi@alhadiexports.com', 20, yPos);
    yPos += 6;
    doc.text('Website: www.alhadiexports.com', 20, yPos);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(102, 102, 102);
    doc.text('© 2024 AL HADI EXPORTS. All rights reserved.', 105, pageHeight - 15, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, pageHeight - 10, { align: 'center' });

    // Save the PDF
    doc.save('AL_HADI_EXPORTS_Product_Catalog_2024.pdf');
    
    console.log('Product catalog PDF downloaded successfully');
    return true;
    
  } catch (error) {
    console.error('Error generating product catalog PDF:', error);
    return false;
  }
}