import { SITE } from "@/lib/config";
import type { Location } from "@/lib/data/locations";
import type { Service } from "@/lib/data/services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: ["Manchester Man Van", "Man Van Manchester", "Manandvanmanchester"],
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo.png`,
      width: 200,
      height: 60,
    },
    image: `${SITE.url}/og-image.jpg`,
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4808,
      longitude: -2.2426,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
      contactOption: "TollFree",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    knowsAbout: [
      "House Removals",
      "Office Removals",
      "Student Removals",
      "Furniture Delivery",
      "Same Day Removals",
      "Man and Van Manchester",
      "Removal Services",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SITE.social.facebook, SITE.social.google],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    openingHours: SITE.openingHours,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer, Debit Card, Credit Card",
    image: `${SITE.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4808,
      longitude: -2.2426,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SITE.social.facebook, SITE.social.google],
    parentOrganization: { "@id": `${SITE.url}/#organization` },
  };
}

export function locationPageSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${SITE.url}/locations/${location.slug}/#localbusiness`,
    name: `Man and Van ${location.name}`,
    url: `${SITE.url}/locations/${location.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    description: `Professional man and van removal service in ${location.name}, ${location.postcode}. House removals, office moves, student removals and same-day service across ${location.county}.`,
    openingHours: SITE.openingHours,
    priceRange: "££",
    image: `${SITE.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      postalCode: location.postcode,
      addressRegion: location.county,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: location.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: location.county,
        },
      },
      ...location.nearbyAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
    },
    parentOrganization: { "@id": `${SITE.url}/#organization` },
  };
}

export function servicePageSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${service.slug}/#service`,
    name: `${service.name} Manchester`,
    url: `${SITE.url}/services/${service.slug}`,
    description: service.description,
    provider: {
      "@id": `${SITE.url}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE.url}/#organization` },
    },
  };
}

export function articleSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}/guides/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    image: `${SITE.url}/og-image.jpg`,
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/guides/${slug}`,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema(
  reviews: { author: string; rating: number; body: string; date: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      reviewBody: r.body,
      datePublished: r.date,
      itemReviewed: { "@id": `${SITE.url}/#localbusiness` },
    })),
  };
}
