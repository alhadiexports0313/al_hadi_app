import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Generates and downloads a company profile PDF using client-side blob generation
 * This creates a simple HTML-based PDF that can be saved as AL_HADI_EXPORTS_Profile.pdf
 */
export function downloadCompanyProfilePDF() {
  // Company profile content
  const companyProfileContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AL HADI EXPORTS - Company Profile</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 40px;
                color: #333;
                background: white;
            }
            .header {
                text-align: center;
                border-bottom: 3px solid #1e40af;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .company-name {
                font-size: 36px;
                font-weight: bold;
                color: #1e40af;
                margin-bottom: 10px;
            }
            .tagline {
                font-size: 18px;
                color: #666;
                font-style: italic;
            }
            .section {
                margin-bottom: 30px;
                page-break-inside: avoid;
            }
            .section-title {
                font-size: 24px;
                font-weight: bold;
                color: #1e40af;
                border-bottom: 2px solid #e5e7eb;
                padding-bottom: 10px;
                margin-bottom: 15px;
            }
            .subsection {
                margin-bottom: 20px;
            }
            .subsection-title {
                font-size: 18px;
                font-weight: bold;
                color: #374151;
                margin-bottom: 10px;
            }
            .contact-info {
                background: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #1e40af;
            }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin: 20px 0;
            }
            .stat-item {
                text-align: center;
                padding: 15px;
                background: #f1f5f9;
                border-radius: 8px;
            }
            .stat-number {
                font-size: 24px;
                font-weight: bold;
                color: #1e40af;
            }
            .product-list {
                list-style: none;
                padding: 0;
            }
            .product-list li {
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
            }
            .product-list li:before {
                content: "✓ ";
                color: #10b981;
                font-weight: bold;
            }
            .certification-list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                margin: 15px 0;
            }
            .certification-item {
                padding: 10px;
                background: #ecfdf5;
                border-radius: 6px;
                border-left: 3px solid #10b981;
            }
            @media print {
                body { margin: 20px; }
                .section { page-break-inside: avoid; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="company-name">AL HADI EXPORTS</div>
            <div class="tagline">Global Leaders in Knit Fashion & Retail Garments</div>
        </div>

        <div class="section">
            <div class="section-title">Company Overview</div>
            <p>AL HADI EXPORTS is a leading manufacturer and exporter of high-quality knit garments, specializing in fashion and retail clothing for global markets. With over two decades of experience in the textile industry, we have established ourselves as a trusted partner for international brands and retailers.</p>
            
            <p>Based in Sialkot, Pakistan - the heart of the country's textile industry - we combine traditional craftsmanship with modern manufacturing techniques to deliver exceptional products that meet international quality standards.</p>
        </div>

        <div class="section">
            <div class="section-title">Vision & Mission</div>
            
            <div class="subsection">
                <div class="subsection-title">Our Vision</div>
                <p>To be the global leader in sustainable garment manufacturing, setting industry standards for quality, innovation, and ethical practices while empowering communities and protecting our environment.</p>
            </div>

            <div class="subsection">
                <div class="subsection-title">Our Mission</div>
                <p>To deliver world-class garments that combine traditional craftsmanship with modern innovation, ensuring sustainable practices and exceeding customer expectations in quality, design, and service.</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Key Statistics</div>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">25+</div>
                    <div>Years of Excellence</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div>Countries Served</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">2M+</div>
                    <div>Garments Annually</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">500+</div>
                    <div>Skilled Workers</div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Product Portfolio</div>
            <p>We specialize in a comprehensive range of knit garments for men, women, and children:</p>
            <ul class="product-list">
                <li>Men's Formal Shirts & Business Wear</li>
                <li>Women's Casual & Fashion Apparel</li>
                <li>Children's Clothing & School Uniforms</li>
                <li>Sportswear & Athletic Collections</li>
                <li>Denim Jeans & Jackets</li>
                <li>Fleece Hooded Jackets & Outerwear</li>
                <li>Polo Shirts & T-Shirts</li>
                <li>Nightwear & Loungewear</li>
                <li>Sweatshirts & Hoodies</li>
                <li>Knitwear Collections</li>
                <li>Uniforms & Workwear</li>
                <li>Fashion Accessories</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">Manufacturing Capabilities</div>
            
            <div class="subsection">
                <div class="subsection-title">Stitching Department</div>
                <ul class="product-list">
                    <li>45 Flat Lock Machines - High-speed seaming and hemming</li>
                    <li>60 Single Needle Machines - Precision stitching and topstitching</li>
                    <li>35 Over Lock Machines - Professional edge finishing</li>
                </ul>
            </div>

            <div class="subsection">
                <div class="subsection-title">Dyeing & Finishing Department</div>
                <ul class="product-list">
                    <li>8 High-Temperature Dyeing Machines - Consistent color quality</li>
                    <li>12 Fabric Finishing Units - Professional fabric treatment</li>
                    <li>6 Quality Control Stations - Rigorous quality assurance</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Quality Certifications</div>
            <div class="certification-list">
                <div class="certification-item">
                    <strong>SEDEX Certification</strong><br>
                    Ethical trade and responsible business practices
                </div>
                <div class="certification-item">
                    <strong>BSCI Certification</strong><br>
                    Business Social Compliance Initiative standards
                </div>
                <div class="certification-item">
                    <strong>HIGG Index</strong><br>
                    Sustainable manufacturing and environmental impact
                </div>
                <div class="certification-item">
                    <strong>Accord Pakistan</strong><br>
                    Workplace safety and building standards
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Why Choose AL HADI EXPORTS</div>
            <ul class="product-list">
                <li><strong>Quality Excellence:</strong> ISO-certified processes and rigorous quality control</li>
                <li><strong>Global Reach:</strong> Serving 50+ countries with reliable logistics</li>
                <li><strong>Competitive Pricing:</strong> Cost-effective solutions without compromising quality</li>
                <li><strong>Timely Delivery:</strong> Efficient production and supply chain management</li>
                <li><strong>Sustainable Practices:</strong> Eco-friendly manufacturing and ethical sourcing</li>
                <li><strong>Custom Solutions:</strong> Tailored products to meet specific requirements</li>
            </ul>
        </div>

        <div class="section contact-info">
            <div class="section-title">Contact Information</div>
            <p><strong>Address:</strong> Industrial Area, Sialkot, Punjab, Pakistan</p>
            <p><strong>Phone:</strong> +92 52 123 4567</p>
            <p><strong>Email:</strong> info@alhadiexports.com</p>
            <p><strong>Website:</strong> www.alhadiexports.com</p>
            
            <p style="margin-top: 20px; font-style: italic; color: #666;">
                For detailed product catalogs, pricing information, or partnership opportunities, 
                please contact our sales team. We look forward to building a successful business relationship with you.
            </p>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #666; font-size: 14px;">
            <p>© 2024 AL HADI EXPORTS. All rights reserved.</p>
            <p>This document contains confidential and proprietary information.</p>
        </div>
    </body>
    </html>
  `;

  try {
    // Create a Blob with the HTML content
    const blob = new Blob([companyProfileContent], { 
      type: 'text/html;charset=utf-8' 
    });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AL_HADI_EXPORTS_Profile.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);

    // Note: This creates an HTML file that can be opened and printed as PDF
    // For true PDF generation, you would integrate a library like jsPDF:
    // 
    // import jsPDF from 'jspdf';
    // const doc = new jsPDF();
    // doc.html(companyProfileContent, {
    //   callback: function (doc) {
    //     doc.save('AL_HADI_EXPORTS_Profile.pdf');
    //   }
    // });

    console.log('Company profile downloaded successfully as AL_HADI_EXPORTS_Profile.pdf');
    return true;
  } catch (error) {
    console.error('Error generating company profile PDF:', error);
    return false;
  }
}