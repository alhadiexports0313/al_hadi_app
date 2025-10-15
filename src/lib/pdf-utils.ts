import jsPDF from "jspdf";
import { products } from "@/data/content";

/**
 * Generates and downloads a company profile PDF using jsPDF
 * This creates a proper PDF file that downloads directly without opening blank pages
 */
export function downloadCompanyProfilePDF() {
  try {
    // Create new jsPDF instance
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set font
    doc.setFont("helvetica");

    // Header Section
    doc.setFontSize(24);
    doc.setTextColor(30, 64, 175); // Blue color
    doc.text("AL HADI EXPORTS", 105, 30, { align: "center" });

    doc.setFontSize(14);
    doc.setTextColor(102, 102, 102); // Gray color
    doc.text("Premium Garments Manufacturer & Exporter", 105, 40, {
      align: "center",
    });

    // Add line under header
    doc.setDrawColor(30, 64, 175);
    doc.setLineWidth(1);
    doc.line(20, 45, 190, 45);

    // Company Overview
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Company Overview", 20, 60);

    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const overviewText = `AL HADI EXPORTS has been a leading manufacturer and exporter of premium quality garments since 2010. Based in Karachi, Pakistan, we specialize in producing high-quality apparel for global markets with a focus on innovation, sustainability, and customer satisfaction.

Our state-of-the-art manufacturing facility spans over 50,000 square feet and employs more than 500 skilled workers. We have successfully served clients across North America, Europe, and Asia, building long-term partnerships based on trust and quality.`;

    const splitOverview = doc.splitTextToSize(overviewText, 170);
    doc.text(splitOverview, 20, 70);

    // Core Values
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Core Values", 20, 110);

    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const values = [
      "Quality Excellence: Commitment to superior craftsmanship",
      "Innovation: Embracing latest technology and design trends",
      "Sustainability: Eco-friendly manufacturing processes",
      "Customer Focus: Building lasting partnerships",
      "Integrity: Transparent and ethical business practices",
    ];

    let yPos = 120;
    values.forEach((value) => {
      doc.text(`• ${value}`, 25, yPos);
      yPos += 8;
    });

    // Services
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Our Services", 20, yPos + 10);

    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    const services = [
      "Custom Manufacturing & Private Labeling",
      "Design Development & Pattern Making",
      "Quality Assurance & Testing",
      "Worldwide Shipping & Logistics",
      "Sustainable Manufacturing Solutions",
    ];

    yPos += 20;
    services.forEach((service) => {
      doc.text(`• ${service}`, 25, yPos);
      yPos += 8;
    });

    // Contact Information
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Contact Information", 20, yPos + 15);

    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    yPos += 25;
    doc.text("Email: info@alhadiexports.com", 25, yPos);
    doc.text("Phone: +92 21 1234 5678", 25, yPos + 8);
    doc.text("Address: Karachi, Pakistan", 25, yPos + 16);
    doc.text("Website: www.alhadiexports.com", 25, yPos + 24);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      "© 2024 AL HADI EXPORTS. All rights reserved.",
      105,
      280,
      { align: "center" }
    );

    // Save the PDF
    doc.save("AL_Hadi_Exports_Company_Profile.pdf");
  } catch (error) {
    console.error("Error generating company profile PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
}

export function downloadCatalogPDF() {
  try {
    // Create new jsPDF instance
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set font
    doc.setFont("helvetica");

    // Header Section
    doc.setFontSize(24);
    doc.setTextColor(30, 64, 175); // Blue color
    doc.text("AL HADI EXPORTS", 105, 25, { align: "center" });

    doc.setFontSize(16);
    doc.setTextColor(102, 102, 102); // Gray color
    doc.text("Product Catalog 2024", 105, 35, { align: "center" });

    doc.setFontSize(12);
    doc.text(
      "Excellence in Knit Fashion & Premier Garment Manufacturing",
      105,
      42,
      { align: "center" },
    );

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
    doc.text("Welcome to AL HADI EXPORTS", 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const introText = `Discover our comprehensive range of premium quality garments. With over 14 years of experience in manufacturing and exporting, we offer innovative designs, superior quality, and competitive pricing for global markets.`;
    const splitIntro = doc.splitTextToSize(introText, 170);
    doc.text(splitIntro, 20, yPos);
    yPos += splitIntro.length * 5 + 10;

    // Product Categories
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Product Categories", 20, yPos);
    yPos += 10;

    // Group products by category
    const categories = [...new Set(products.map((p) => p.category))];

    categories.forEach((category) => {
      // Check if we need a new page
      if (yPos > pageHeight - bottomMargin - 40) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(12);
      doc.setTextColor(30, 64, 175);
      doc.text(category, 20, yPos);
      yPos += 8;

      const categoryProducts = products.filter((p) => p.category === category);

      categoryProducts.forEach((product) => {
        // Check if we need a new page
        if (yPos > pageHeight - bottomMargin - 20) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFontSize(10);
        doc.setTextColor(51, 51, 51);
        doc.text(`• ${product.name}`, 25, yPos);
        yPos += 5;

        doc.setFontSize(8);
        doc.setTextColor(102, 102, 102);
        const description = doc.splitTextToSize(product.description, 160);
        doc.text(description, 30, yPos);
        yPos += description.length * 3 + 2;

        // Features
        if (product.features && product.features.length > 0) {
          doc.setFontSize(8);
          doc.setTextColor(102, 102, 102);
          doc.text(`Features: ${product.features.join(", ")}`, 30, yPos);
          yPos += 4;
        }

        // Order info
        doc.setFontSize(8);
        doc.setTextColor(102, 102, 102);
        doc.text(
          `Min Order: ${product.minOrder} | Lead Time: ${product.leadTime}`,
          30,
          yPos,
        );
        yPos += 8;
      });

      yPos += 5; // Space between categories
    });

    // Add new page for contact info
    doc.addPage();

    // Contact Information
    doc.setFontSize(16);
    doc.setTextColor(30, 64, 175);
    doc.text("Contact Information", 20, 30);

    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);
    doc.text("Ready to place an order or need more information?", 20, 45);

    doc.setFontSize(11);
    doc.text("Email: info@alhadiexports.com", 20, 60);
    doc.text("Phone: +92 21 1234 5678", 20, 70);
    doc.text("Address: Karachi, Pakistan", 20, 80);
    doc.text("Website: www.alhadiexports.com", 20, 90);

    // Quality Certifications
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Quality Certifications", 20, 110);

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const certifications = ["BSCI", "SEDEX", "Accord Pakistan", "HIGG"];
    certifications.forEach((cert, index) => {
      doc.text(`• ${cert}`, 25, 125 + index * 8);
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      "© 2024 AL HADI EXPORTS. All rights reserved.",
      105,
      280,
      { align: "center" }
    );

    // Save the PDF
    doc.save("AL_Hadi_Exports_Catalogue.pdf");
  } catch (error) {
    console.error("Error generating catalog PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
}

export function downloadCapabilitiesPDF() {
  try {
    // Create new jsPDF instance
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set font
    doc.setFont("helvetica");

    // Header Section
    doc.setFontSize(24);
    doc.setTextColor(30, 64, 175); // Blue color
    doc.text("AL HADI EXPORTS", 105, 25, { align: "center" });

    doc.setFontSize(16);
    doc.setTextColor(102, 102, 102); // Gray color
    doc.text("Manufacturing Capabilities 2024", 105, 35, { align: "center" });

    doc.setFontSize(12);
    doc.text(
      "Advanced Manufacturing Solutions & Quality Assurance",
      105,
      42,
      { align: "center" },
    );

    // Add line under header
    doc.setDrawColor(30, 64, 175);
    doc.setLineWidth(1);
    doc.line(20, 47, 190, 47);

    let yPos = 60;

    // Manufacturing Overview
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Manufacturing Overview", 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const overviewText = `Our state-of-the-art manufacturing facility features advanced machinery and skilled workforce capable of producing high-quality garments at scale. We maintain strict quality control throughout the production process.`;
    const splitOverview = doc.splitTextToSize(overviewText, 170);
    doc.text(splitOverview, 20, yPos);
    yPos += splitOverview.length * 5 + 15;

    // Production Capacity
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Production Capacity", 20, yPos);
    yPos += 10;

    const capacityData = [
      "Monthly Production: 500,000+ pieces",
      "Daily Capacity: 25,000+ pieces",
      "Workforce: 500+ skilled workers",
      "Facility Size: 50,000+ sq ft",
      "Production Lines: 12 active lines",
    ];

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    capacityData.forEach((item) => {
      doc.text(`• ${item}`, 25, yPos);
      yPos += 6;
    });

    yPos += 10;

    // Machinery Details
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Machinery & Equipment", 20, yPos);
    yPos += 10;

    const machinery = [
      "Flat Lock Machines: 85 units",
      "Single Needle Machines: 129 units",
      "Over Lock Machines: 155 units",
      "Double Needle Machines: 95 units",
      "Button Hole Machines: 45 units",
      "Cutting Tables: 12 units",
    ];

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    machinery.forEach((item) => {
      doc.text(`• ${item}`, 25, yPos);
      yPos += 6;
    });

    yPos += 15;

    // Quality Control
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Quality Control Process", 20, yPos);
    yPos += 10;

    const qualitySteps = [
      "Incoming Material Inspection",
      "In-Process Quality Checks",
      "Final Product Inspection",
      "Pre-Shipment Audit",
      "Customer Feedback Integration",
    ];

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    qualitySteps.forEach((step) => {
      doc.text(`• ${step}`, 25, yPos);
      yPos += 6;
    });

    // Add new page for certifications and contact
    doc.addPage();

    // Certifications
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Certifications & Compliance", 20, 30);

    doc.setFontSize(10);
    doc.setTextColor(51, 51, 51);
    const certifications = [
      "BSCI (Business Social Compliance Initiative)",
      "SEDEX (Supplier Ethical Data Exchange)",
      "Accord Pakistan (Workplace Safety)",
      "HIGG (Sustainable Apparel Coalition)",
    ];

    let certYPos = 45;
    certifications.forEach((cert) => {
      doc.text(`• ${cert}`, 25, certYPos);
      certYPos += 8;
    });

    // Contact Information
    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.text("Contact Information", 20, certYPos + 20);

    doc.setFontSize(11);
    doc.setTextColor(51, 51, 51);
    doc.text("Email: info@alhadiexports.com", 25, certYPos + 35);
    doc.text("Phone: +92 21 1234 5678", 25, certYPos + 45);
    doc.text("Address: Karachi, Pakistan", 25, certYPos + 55);
    doc.text("Website: www.alhadiexports.com", 25, certYPos + 65);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      "© 2024 AL HADI EXPORTS. All rights reserved.",
      105,
      280,
      { align: "center" }
    );

    // Save the PDF
    doc.save("AL_Hadi_Exports_Manufacturing_Capabilities.pdf");
  } catch (error) {
    console.error("Error generating capabilities PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
}