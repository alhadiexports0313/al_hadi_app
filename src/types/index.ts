// Type definitions for AL HADI EXPORTS application

export interface CompanyContact {
  phone: string;
  email: string;
  address: string;
  website: string;
}

export interface SocialMedia {
  linkedin: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  employees: string;
  countries: string;
  experience: string;
  contact: CompanyContact;
  social: SocialMedia;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  minOrder: string;
  leadTime: string;
  image: string;
  certifications: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  name: string;
  description: string;
  logo: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  country: string;
  text: string;
  rating: number;
}

export interface Stat {
  number: string;
  label: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface EmailResponse extends ApiResponse {
  messageId?: string;
}