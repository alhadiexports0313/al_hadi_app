import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AL HADI EXPORTS - Premium Garments Manufacturer & Exporter",
  description: "Leading manufacturer and exporter of premium quality garments since 2000. Specializing in custom apparel manufacturing, private labeling, and worldwide shipping from Karachi, Pakistan.",
  keywords: "garments export, clothing manufacturer, custom apparel, private label, textile export, Pakistan garments, Karachi textiles",
  authors: [{ name: "AL HADI EXPORTS" }],
  openGraph: {
    title: "AL HADI EXPORTS - Premium Garments Manufacturer",
    description: "Leading garments manufacturer and exporter from Pakistan since 2000",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
