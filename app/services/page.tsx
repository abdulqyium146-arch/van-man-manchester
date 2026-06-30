import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, GraduationCap, Sofa, Zap, ArrowRight } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "Removal Services Manchester | House, Office & Student Removals",
  description:
    "Professional removal services across Greater Manchester. House removals, office relocations, student moves, furniture delivery and same-day removals. Fully insured. Fixed prices.",
  alternates: { canonical: `${SITE.url}/services` },
});

const services = [
  {
    slug: "house-removals",
    icon: Home,
    name: "House Removals",
    price: "From £149",
    description:
      "Full house removal service across Greater Manchester. Studio flats to 5-bedroom houses. Packing, disassembly, reassembly and full insurance included.",
    features: ["All property sizes", "Packing service available", "Furniture disassembly/reassembly", "Fully insured", "Fixed price"],
    highlight: "Most Popular",
  },
  {
    slug: "office-removals",
    icon: Building2,
    name: "Office Removals",
    price: "From £299",
    description:
      "Commercial office relocation across Manchester. Minimal downtime. We move around your schedule — evenings, weekends and out of hours — to keep your business running.",
    features: ["Evening & weekend moves", "IT equipment handled", "Archive box labelling", "Risk assessment", "Fixed price"],
    highlight: null,
  },
  {
    slug: "student-removals",
    icon: GraduationCap,
    name: "Student Removals",
    price: "From £79",
    description:
      "Affordable student removal service across all Manchester universities. Halls, student houses, single rooms and full house shares. Student ID discount available.",
    features: ["All universities covered", "Single room moves", "Storage between terms", "Student discount", "Same-day available"],
    highlight: "Best Value",
  },
  {
    slug: "furniture-removals",
    icon: Sofa,
    name: "Furniture Delivery",
    price: "From £49",
    description:
      "Single item or multiple pieces. Marketplace pickups, IKEA delivery, two-man carry up stairs. No job too small. Same-day slots available across Greater Manchester.",
    features: ["Marketplace pickups", "IKEA assembly", "Stair carry included", "Two-man service", "Same-day available"],
    highlight: null,
  },
  {
    slug: "same-day-removals",
    icon: Zap,
    name: "Same Day Removals",
    price: "From £69",
    description:
      "Emergency removal service available 7 days a week. Call before noon for same-day dispatch across Greater Manchester. No extra charge for last-minute bookings.",
    features: ["7 days a week", "No surcharge", "All property sizes", "Emergency moves", "Rapid response"],
    highlight: "Available Today",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
        ])}
      />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-700">Services</span>
            </nav>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
              Removal services across Greater Manchester
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Professional, fully insured removal services for every situation. From a single sofa to a five-bedroom house — we have the right crew and van for the job.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {services.map(({ slug, icon: Icon, name, price, description, features, highlight }) => (
              <div key={slug} className="relative bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-200 flex flex-col gap-5">
                {highlight && (
                  <span className="absolute top-5 right-5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {highlight}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-xl mb-1">{name}</h2>
                    <span className="text-blue-600 font-bold text-sm">{price}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                <ul className="flex flex-wrap gap-2">
                  {features.map((f) => (
                    <li key={f} className="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  View {name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Guides teaser */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Not sure where to start?</h2>
            <p className="text-gray-500 text-sm mb-5">
              Our free moving guides help you plan your move, understand costs and pack properly — whatever service you need.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Moving Checklist", href: "/guides/moving-checklist" },
                { label: "Removal Costs Guide", href: "/guides/house-removal-cost" },
                { label: "Packing Guide", href: "/guides/packing-guide" },
                { label: "Student Moving Guide", href: "/guides/student-moving-guide" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700 bg-white border border-gray-200 hover:border-blue-300 px-4 py-2.5 rounded-xl transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">All services are available across Greater Manchester.</p>
            <Link href="/locations" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
              View all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
