import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const campaignStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sihleb.co.za/#organization",
      name: "SihleB Digital Studio",
      url: "https://sihleb.co.za/",
      mainEntityOfPage: { "@id": "https://sihleb.co.za/#website" },
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
      mainEntityOfPage: { "@id": "https://r999.sihleb.co.za/#webpage" },
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
        {children}
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
