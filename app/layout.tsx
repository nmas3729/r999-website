import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const campaignStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://sihleb.co.za/#organization",
      name: "SihleB Digital Studio",
      url: "https://sihleb.co.za/",
      logo: "https://sihleb.co.za/SihleB-Logo.jpeg",
      description:
        "Web design, development, hosting and support for South African businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressCountry: "ZA",
      },
      areaServed: ["Johannesburg", "Gauteng", "South Africa"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@sihleb.co.za",
        availableLanguage: "English",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "NMAS INNOVATIONS (Pty) Ltd",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sihleb.co.za/#website",
      url: "https://sihleb.co.za/",
      name: "SihleB Digital Studio",
      publisher: { "@id": "https://sihleb.co.za/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://r999.sihleb.co.za/#website",
      url: "https://r999.sihleb.co.za/",
      name: "R999 Festive Website Special | SihleB",
      description:
        "A professional 5-page business website for R999.99 once-off development. Hosting and domain registration are separate.",
      isPartOf: { "@id": "https://sihleb.co.za/#website" },
      publisher: { "@id": "https://sihleb.co.za/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://r999.sihleb.co.za/#webpage",
      url: "https://r999.sihleb.co.za/",
      name: "R999 Festive Website Special | SihleB",
      description:
        "A professional 5-page business website for R999.99 once-off development. Hosting and domain registration are separate.",
      isPartOf: { "@id": "https://r999.sihleb.co.za/#website" },
      publisher: { "@id": "https://sihleb.co.za/#organization" },
      about: { "@id": "https://sihleb.co.za/#organization" },
      mainEntity: { "@id": "https://r999.sihleb.co.za/#offer" },
    },
    {
      "@type": "Offer",
      "@id": "https://r999.sihleb.co.za/#offer",
      name: "R999 Festive Website Special",
      description:
        "Once-off development of a professional 5-page business website for R999.99. Hosting and domain registration are not included and are quoted separately.",
      url: "https://r999.sihleb.co.za/",
      price: 999.99,
      priceCurrency: "ZAR",
      validThrough: "2026-12-15",
      seller: { "@id": "https://sihleb.co.za/#organization" },
      itemOffered: {
        "@type": "Service",
        name: "Professional 5-page business website development",
        provider: { "@id": "https://sihleb.co.za/#organization" },
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://r999.sihleb.co.za"),
  alternates: {
    canonical: new URL("https://r999.sihleb.co.za/"),
  },
  title: "R999 Festive Website Special | SihleB",
  description:
    "Discover SihleB Digital Studio's festive offer: a professional 5-page business website for R999.99 once-off development. Hosting and domain registration are quoted separately.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SihleB Digital Studio",
    locale: "en_ZA",
    title: "R999 Festive Website Special | SihleB",
    description:
      "A professional 5-page business website for R999.99 once-off development. Hosting and domain registration are quoted separately.",
  },
  twitter: {
    card: "summary",
    title: "R999 Festive Website Special | SihleB",
    description:
      "A professional 5-page business website for R999.99 once-off development. Hosting and domain registration are quoted separately.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5DXDH56"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N5DXDH56');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(campaignStructuredData),
          }}
        />
      </body>
    </html>
  );
}
