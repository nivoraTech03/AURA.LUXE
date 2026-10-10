import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import MobileBottomBarWrapper from "@/components/MobileBottomBarWrapper";
import { PROPERTY_INFO } from "@/data/propertyData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PROPERTY_INFO.brandName} | Luxury PG Accommodation & Serviced Living`,
  description: `Experience boutique 5-star PG accommodation in Golf Course Road, Gurugram. Fully furnished executive single, double, and triple suites with chef dining, high-speed Wi-Fi, and 24/7 security.`,
  keywords: [
    "Luxury PG Gurugram",
    "Executive PG Golf Course Road",
    "Premium Coliving Delhi NCR",
    "Boutique Student Accommodation",
    "Serviced PG with Food",
    "Aura Luxe Suites",
  ],
  authors: [{ name: PROPERTY_INFO.brandName }],
  openGraph: {
    title: `${PROPERTY_INFO.brandName} - Premium Living. Better Everyday.`,
    description: `High-end paying guest residence designed for corporate executives and scholars. Starting from ${PROPERTY_INFO.startingPrice}.`,
    url: "https://auraluxesuites.com",
    siteName: PROPERTY_INFO.brandName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Aura Luxe Suites Luxury Residence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROPERTY_INFO.brandName} - Premium Living`,
    description: `Boutique luxury PG accommodation in Sector 43, Gurugram.`,
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: PROPERTY_INFO.brandName,
    description: PROPERTY_INFO.tagline,
    url: "https://auraluxesuites.com",
    telephone: PROPERTY_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 43, Golf Course Road",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    priceRange: "₹₹",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "High-Speed Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Chef-Curated Meals", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security & CCTV", value: true },
      { "@type": "LocationFeatureSpecification", name: "Housekeeping", value: true },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0c10] text-[#e5e7eb]">
        <NavbarWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBarWrapper />
      </body>
    </html>
  );
}
