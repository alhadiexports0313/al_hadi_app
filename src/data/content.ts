import type {
  CompanyInfo,
  Product,
  Service,
  Certification,
  Testimonial,
  Stat,
  WhyChooseUsItem,
} from "@/types";

export const companyInfo: CompanyInfo = {
  name: "AL HADI EXPORTS",
  tagline: "Premium Quality Garments for Global Markets",
  description:
    "Leading manufacturer and exporter of high-quality garments, serving international markets with excellence since 2010. We specialize in sustainable fashion production with state-of-the-art facilities.",
  founded: "2010",
  employees: "500+",
  countries: "9+",
  experience: "14+ Years",
  contact: {
    phone: "+92-21-32434479, +92-300 2211587 ",
    email: "info@alhadiexports.com",
    address: "D/103-A S.I.T.E. Industrial Area, Karachi-75700 Pakistan",
    website: "www.alhadiexports.com",
  },
  social: {
    linkedin: "https://linkedin.com/company/alhadiexports",
    facebook: "https://facebook.com/alhadiexports",
    instagram: "https://instagram.com/alhadiexports",
    twitter: "https://twitter.com/alhadiexports",
  },
};

export const products: Product[] = [
  {
    id: 1,
    name: "Fleece Hooded Jackets",
    category: "Outerwear",
    description:
      "Premium fleece hooded jackets with superior warmth and comfort for casual and athletic wear.",
    features: [
      "Anti-Pill Fleece",
      "Adjustable Hood",
      "Kangaroo Pocket",
      "Ribbed Cuffs",
    ],
    minOrder: "1500 pieces one /color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Fleece_Hooded_Jackets.jpg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 2,
    name: "Polo Shirts",
    category: "Casual Wear",
    description:
      "Classic polo shirts in premium cotton pique with modern fit and professional styling.",
    features: [
      "100% Cotton Pique",
      "3-Button Placket",
      "Side Vents",
      "Pre-Shrunk",
    ],
    minOrder: "1500 pieces one color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men POLOS.jpeg", 
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 3,
    name: "Nightwear Collection",
    category: "Nightwear",
    description:
      "Comfortable and stylish nightwear including pajamas, robes, and sleepwear sets.",
    features: [
      "Soft Cotton",
      "Breathable Fabric",
      "Comfortable Fit",
      "Easy Care",
    ],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men Night wear.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 4,
    name: "T-Shirts & Tank Tops",
    category: "Casual Wear",
    description:
      "Essential t-shirts and tank tops in various styles, colors, and premium cotton blends.",
    features: [
      "Ring-Spun Cotton",
      "Reinforced Seams",
      "Tagless Labels",
      "Color Fast",
    ],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men T_Shirt.jpg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 5,
    name: "Sweatshirts & Hoodies",
    category: "Outerwear",
    description:
      "Cozy sweatshirts and hoodies with brushed fleece lining for ultimate comfort.",
    features: ["Brushed Fleece", "Drawstring Hood", "Ribbed Hem", "Preshrunk"],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men Hood.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 6,
    name: "Formal Shirts",
    category: "Formal Wear",
    description:
      "Professional dress shirts with precision tailoring for corporate and business environments.",
    features: [
      "100% Cotton",
      "Wrinkle Resistant",
      "French Seams",
      "Mother of Pearl Buttons",
    ],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men Crew Neck.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 7,
    name: "Sportswear & Activewear",
    category: "Athletic Wear",
    description:
      "High-performance athletic wear designed for sports, fitness, and active lifestyles.",
    features: [
      "Moisture Wicking",
      "4-Way Stretch",
      "Anti-Odor",
      "UV Protection",
    ],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men Shorts.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 8,
    name: "Home Textiles",
    category: "Home Textiles",
    description:
      "Soft and durable home textile range including fitted sheets and bedding essentials with premium quality finishing.",
    features: ["Fitted Sheets", "High-Quality Fabric", "Durable Stitching"],
    minOrder: "12000 pieces",
    leadTime: "30-45 days",
    image: "/images/products/mens/Home_Textile.jpg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 9,
    name: "Children's Clothing",
    category: "Kids Wear",
    description:
      "Safe, comfortable, and playful clothing for children with attention to skin-friendly materials.",
    features: ["Hypoallergenic", "Soft Cotton", "Fun Prints", "Easy Wash"],
    minOrder: "1500 pieces per color",
    leadTime: "30-45 days",
    image: "/images/products/kids/Kids Suit.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 10,
    name: "Uniforms & Workwear",
    category: "Workwear",
    description:
      "Durable uniforms and workwear designed for various industries with focus on functionality.",
    features: [
      "Durable Fabric",
      "Reinforced Stress Points",
      "Multiple Pockets",
      "Easy Care",
    ],
    minOrder: "1500 pieces",
    leadTime: "30-45 days",
    image: "/images/products/mens/Men Trouser.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 11,
    name: "Knitwear Collection",
    category: "Knitwear",
    description:
      "Elegant knitwear including sweaters, cardigans, and knitted accessories.",
    features: [
      "Fine Gauge Knit",
      "Soft Yarn",
      "Shape Retention",
      "Pill Resistant",
    ],
    minOrder: "1500 pieces",
    leadTime: "30-45 days",
    image: "/images/products/women/Ladies Hood.jpeg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
  {
    id: 12,
    name: "Fashion Accessories",
    category: "Accessories",
    description:
      "Complementary fashion accessories including scarves, hats, and belts.",
    features: [
      "Premium Materials",
      "Trendy Designs",
      "Quality Hardware",
      "Versatile Styling",
    ],
    minOrder: "1500 pieces",
    leadTime: "30-45 days",
    image: "/images/products/women/Fashion_Accessories.jpg",
    certifications: ["Accord Pakistan", "BSCI", "SEDEX", "HIGG"],
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Manufacturing",
    description:
      "End-to-end garment manufacturing services tailored to your specific requirements and brand standards.",
    icon: "Settings",
    features: [
      "Design Development",
      "Pattern Making",
      "Sample Production",
      "Bulk Manufacturing",
    ],
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Comprehensive quality control processes ensuring every garment meets international standards.",
    icon: "Shield",
    features: [
      "Pre-production Inspection",
      "In-line Quality Control",
      "Final Random Inspection",
      "Third-party Testing",
    ],
  },
  {
    id: 3,
    title: "Private Labeling",
    description:
      "Complete private label solutions including branding, packaging, and custom label manufacturing.",
    icon: "Tag",
    features: [
      "Brand Development",
      "Custom Labels",
      "Packaging Design",
      "Brand Guidelines",
    ],
  },
  {
    id: 4,
    title: "Logistics Support",
    description:
      "Efficient shipping and logistics solutions to ensure timely delivery to global destinations.",
    icon: "Truck",
    features: [
      "Global Shipping",
      "Customs Clearance",
      "Tracking Systems",
      "Insurance Coverage",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "SEDEX",
    description:
      "Supplier Ethical Data Exchange and responsible business practices",
    logo: "/images/certifications/SEDEX.webp",
  },
  {
    name: "BSCI",
    description: "Business Social Compliance Initiative",
    logo: "/images/certifications/BSCI.webp",
  },
  {
    name: "HIGG",
    description: "Higg Index Facility Environmental Module",
    logo: "/images/certifications/HIGG.webp",
  },
  {
    name: "Accord Pakistan",
    description: "Pakistan Accord on Fire and Building Safety",
    logo: "/images/certifications/Accord Pakistan.webp",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Fashion Forward Ltd.",
    country: "United Kingdom",
    text: "AL HADI EXPORTS has been our trusted partner for over 5 years. Their quality consistency and timely delivery have helped us grow our business significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marco Rodriguez",
    company: "European Garments Co.",
    country: "Spain",
    text: "Exceptional quality and professional service. The team at AL HADI understands our requirements perfectly and always delivers beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Chen",
    company: "Pacific Retail Group",
    country: "Australia",
    text: "Working with AL HADI EXPORTS has been a game-changer for our business. Their sustainable practices align perfectly with our brand values.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  {
    number: "14+",
    label: "Years Experience",
    description: "Serving global markets",
  },
  {
    number: "9+",
    label: "Countries Served",
    description: "Worldwide presence",
  },
  {
    number: "500+",
    label: "Skilled Workers",
    description: "Expert craftspeople",
  },
  {
    number: "2.5M+",
    label: "Garments Produced",
    description: "Annual capacity",
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Premium Quality",
    description:
      "We use only the finest materials and employ skilled craftspeople to ensure every garment meets the highest quality standards.",
    icon: "Award",
  },
  {
    title: "Sustainable Practices",
    description:
      "Committed to environmentally responsible manufacturing with certified organic materials and eco-friendly processes.",
    icon: "Leaf",
  },
  {
    title: "Global Compliance",
    description:
      "All our products meet international quality and safety standards with proper certifications and documentation.",
    icon: "Globe",
  },
  {
    title: "Timely Delivery",
    description:
      "Efficient production planning and logistics ensure your orders are delivered on time, every time.",
    icon: "Clock",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct manufacturer pricing with no middlemen, offering the best value for premium quality garments.",
    icon: "DollarSign",
  },
  {
    title: "Custom Solutions",
    description:
      "Flexible manufacturing capabilities to accommodate custom designs, sizes, and specific requirements.",
    icon: "Wrench",
  },
];
