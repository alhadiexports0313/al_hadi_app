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
  title: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
  description: "Leading manufacturer and exporter of premium quality garments since 2010. Specializing in custom apparel manufacturing, private labeling, and worldwide shipping from Karachi, Pakistan.",
  keywords: "garments export, clothing manufacturer, custom apparel, private label, textile export, Pakistan garments, Karachi textiles",
  authors: [{ name: "AL HADI EXPORTS" }],
  creator: "AL HADI EXPORTS",
  publisher: "AL HADI EXPORTS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AL HADI EXPORTS - Premium Garments Manufacturer",
    description: "Leading garments manufacturer and exporter from Pakistan since 2010",
    type: "website",
    locale: "en_US",
    url: "https://alhadiexports.com",
    siteName: "AL HADI EXPORTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL HADI EXPORTS - Premium Garments Manufacturer",
    description: "Leading garments manufacturer and exporter from Pakistan since 2010",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">  
      <body className={`${inter.variable} antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out`}> 
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500 ease-in-out">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
