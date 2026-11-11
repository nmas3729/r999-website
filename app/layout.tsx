import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://r999.sihleb.co.za"),
  alternates: {
    canonical: "/",
  },
  title: "SihleB Digital Studio | R999.99 Festive Website Special",
  description:
    "Get a professional 5-page business website for R999.99 once-off development. Hosting and domain registration are separate. Offer ends 15 December 2026.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SihleB Digital Studio",
    locale: "en_ZA",
    title: "R999.99 Festive Website Special | SihleB Digital Studio",
    description:
      "A professional 5-page website for your business. R999.99 once-off website development. Offer ends 15 December 2026.",
  },
  twitter: {
    card: "summary",
    title: "R999.99 Festive Website Special | SihleB Digital Studio",
    description:
      "A professional 5-page website for your business. R999.99 once-off website development. Offer ends 15 December 2026.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
