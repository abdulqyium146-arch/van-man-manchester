import type { Metadata } from "next";
import { SITE } from "@/lib/config";
import type { Location } from "@/lib/data/locations";
import type { Service } from "@/lib/data/services";

export function siteMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} | Cheap Removals Manchester`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    keywords: [
      "man and van manchester",
      "house removals manchester",
      "cheap removals manchester",
      "removal company manchester",
      "moving company manchester",
      "office removals manchester",
      "student removals manchester",
      "same day removals manchester",
      "man with a van manchester",
      "furniture delivery manchester",
    ],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: SITE.url,
      siteName: SITE.name,
      title: `${SITE.name} | Manchester's Most Trusted Removal Service`,
      description: SITE.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} | Manchester Removals`,
      description: SITE.description,
      images: ["/opengraph-image"],
    },
    alternates: { canonical: SITE.url },
    ...overrides,
  };
}

export function locationMetadata(location: Location): Metadata {
  const title = `Man and Van ${location.name} | Removals ${location.postcode} | Same Day Available`;
  const description = `Looking for a man and van in ${location.name}? We cover ${location.postcode} and all surrounding areas. Professional house removals, office moves & student removals. Fully insured. Call for a free quote.`;
  const url = `${SITE.url}/locations/${location.slug}`;

  return siteMetadata({
    title,
    description,
    keywords: [
      `man and van ${location.name.toLowerCase()}`,
      `removals ${location.name.toLowerCase()}`,
      `house removals ${location.name.toLowerCase()}`,
      `cheap removals ${location.name.toLowerCase()}`,
      `${location.postcode} removals`,
      `removal company ${location.name.toLowerCase()}`,
      `moving company ${location.name.toLowerCase()}`,
    ],
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Man and Van ${location.name}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    alternates: { canonical: url },
  });
}

export function serviceMetadata(service: Service): Metadata {
  const title = `${service.name} Manchester | ${service.tagline}`;
  const description = service.description.slice(0, 155) + "…";
  const url = `${SITE.url}/services/${service.slug}`;

  return siteMetadata({
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: service.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    alternates: { canonical: url },
  });
}
