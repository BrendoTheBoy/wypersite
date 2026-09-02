import type { Metadata } from "next";
import { Anton, Inter, Lilita_One } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCTABar from "@/components/MobileCTABar";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Professional residential and commercial window cleaning in Guelph, Fergus, Elora, Rockwood, Cambridge, and surrounding Wellington County.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description:
      "Professional residential and commercial window cleaning in Guelph and Wellington County.",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "Professional residential and commercial window cleaning in Guelph and Wellington County.",
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  priceRange: SITE.priceRange,
  openingHours: SITE.openingHours,
  address: {
    "@type": "PostalAddress",
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: SITE.areasServed.map((name) => ({
    "@type": "City",
    name,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${lilita.variable} ${anton.variable}`}
    >
      <body className="min-h-screen font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
