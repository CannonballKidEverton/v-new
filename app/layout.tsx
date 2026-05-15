import type { Metadata } from "next";
import { LenisProvider } from "@/components/system/LenisProvider";
import { Header } from "@/components/system/Header";
import { Footer } from "@/components/system/Footer";
import { GridLines } from "@/components/system/GridLines";
import "./globals.css";

export const metadata: Metadata = {
  title:       { default: "Valantai", template: "%s — Valantai" },
  description: "An operating institution for ambitious companies. Built by operators. Accelerated by AI.",
  metadataBase: new URL("https://valantai.com"),
  openGraph: {
    siteName: "Valantai",
    type:     "website",
    locale:   "en_GB",
  },
  twitter: {
    card:  "summary_large_image",
    title: "Valantai — From idea to exit",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://valantai.com" },
};

const SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Valantai",
  url: "https://valantai.com",
  description: "An operating institution for ambitious companies. Built by operators. Accelerated by AI.",
  foundingDate: "2024",
  areaServed: ["GB", "AE", "SA", "US"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@valantai.com",
    contactType: "customer service",
  },
  sameAs: [],
  knowsAbout: [
    "Business strategy",
    "Capital advisory",
    "Enterprise technology",
    "Operational risk management",
    "AI implementation",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400;1,8..60,500&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }}
        />
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-bg focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-widest focus:uppercase"
        >
          Skip to main content
        </a>

        <LenisProvider>
          <GridLines />
          <Header />
          <main id="main-content" className="relative z-[2] header-offset">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
