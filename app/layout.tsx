import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Country Health and Care",
  url: "https://www.countryhealthandcare.com.au",
  description: "NDIS disability and nursing services across Australia",
  areaServed: "Australia",
  serviceType: "NDIS Support Services",
  contactPoint: {
    "@type": "ContactPoint",
    email: "admin@countryhealthandcare.com.au",
    contactType: "customer service",
  },
};

const BASE_URL = "https://www.countryhealthandcare.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "Country Health and Care", template: "%s | Country Health and Care" },
  description:
    "Compassionate, person-centred NDIS services across Australia including Support Coordination, Nursing, In-Home Support and more.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    siteName: "Country Health and Care",
    locale: "en_AU",
    type: "website",
    images: [
      { url: "/images/logo-hero.webp", width: 1600, height: 1297, alt: "Country Health and Care" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Country Health and Care",
    description: "Compassionate, person-centred NDIS services across Australia.",
    images: ["/images/logo-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <RevealObserver />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
