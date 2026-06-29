import { SITE } from "@/lib/config";
import type { Location } from "@/lib/data/locations";
import type { Service } from "@/lib/data/services";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    openingHours: SITE.openingHours,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer, Card",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      addressCountry: SITE.address.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
    },
    sameAs: [SITE.social.facebook, SITE.social.google],
  };
}

export function locationPageSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Man and Van ${location.name}`,
    provider: {
      "@type": "MovingCompany",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    description: `Professional man and van removal service in ${location.name}, ${location.postcode}. House removals, office moves, student removals and same-day service.`,
    url: `${SITE.url}/locations/${location.slug}`,
  };
}

export function servicePageSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@type": "MovingCompany",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    description: service.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    url: `${SITE.url}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
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

export function reviewSchema(reviews: { author: string; rating: number; body: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
      datePublished: r.date,
    })),
  };
}
