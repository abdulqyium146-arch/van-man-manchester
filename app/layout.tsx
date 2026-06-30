import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/seo/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...siteMetadata(),
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${SITE.name} — Moving Guides`} href={`${SITE.url}/feed.xml`} />
        <link rel="canonical" href={SITE.url} />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#0a0a0a]">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
