import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...siteMetadata(),
  applicationName: "Man and Van Manchester",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Man & Van Manchester",
  },
  other: {
    "google-site-verification": "zXdvlPfQwV8L37Lc-YQurvbOIpMsrnDVoxF0EeNPTrI",
    "msapplication-TileColor": "#2563EB",
    "msapplication-config": "/browserconfig.xml",
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
