import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://alhadiexports.com'),
  title: {
    default: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
    template: "%s | AL HADI EXPORTS"
  },
  description:
    "Leading manufacturer and exporter of premium quality garments since 2010. Specializing in custom apparel manufacturing, private labeling, and worldwide shipping from Karachi, Pakistan. SEDEX, BSCI, and HIGG certified.",
  keywords: [
    "garments export",
    "clothing manufacturer", 
    "custom apparel",
    "private label",
    "textile export",
    "Pakistan garments",
    "Karachi textiles",
    "SEDEX certified",
    "BSCI certified",
    "sustainable fashion",
    "knit garments",
    "apparel manufacturing",
    "fashion export",
    "textile manufacturing"
  ],
  authors: [{ name: "AL HADI EXPORTS", url: "https://alhadiexports.com" }],
  creator: "AL HADI EXPORTS",
  publisher: "AL HADI EXPORTS",
  category: "Manufacturing",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
    description:
      "Leading manufacturer and exporter of premium quality garments since 2010. SEDEX, BSCI, and HIGG certified. Specializing in custom apparel manufacturing and worldwide shipping.",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alhadiexports.com",
    siteName: "AL HADI EXPORTS",
    images: [
      {
        url: "/images/logo/AHLogo.png",
        width: 1200,
        height: 630,
        alt: "AL HADI EXPORTS - Premium Garments Manufacturer Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
    description:
      "Leading manufacturer and exporter of premium quality garments since 2010. SEDEX, BSCI, and HIGG certified.",
    images: ["/images/logo/AHLogo.png"],
    creator: "@alhadiexports",
    site: "@alhadiexports",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://alhadiexports.com",
  },
  other: {
    "business:contact_data:street_address": "Karachi",
    "business:contact_data:locality": "Karachi", 
    "business:contact_data:region": "Sindh",
    "business:contact_data:postal_code": "75000",
    "business:contact_data:country_name": "Pakistan",
    "business:contact_data:email": "info@alhadiexports.com",
    "business:contact_data:phone_number": "+92 300 2211587",
    "business:contact_data:website": process.env.NEXT_PUBLIC_SITE_URL || "https://alhadiexports.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/AHLogo.png" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AL HADI EXPORTS",
              "description": "Leading manufacturer and exporter of premium quality garments since 2010",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://alhadiexports.com",
              "logo": "/images/logo/AHLogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-300-2211587",
                "contactType": "customer service",
                "email": "info@alhadiexports.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75000",
                "addressCountry": "PK"
              },
              "foundingDate": "2010",
              "industry": "Textile Manufacturing",
              "sameAs": [
                "https://www.linkedin.com/company/al-hadi-exports"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Header />
          <main 
            id="main-content"
            className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500 ease-in-out"
            role="main"
            aria-label="Main content"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
