import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { guides } from "@/lib/data/guides";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";

export const metadata: Metadata = siteMetadata({
  title: "Removal Guides | Manchester Moving Tips & Advice",
  description:
    "Free moving guides for Greater Manchester residents. Moving checklists, removal costs, packing tips and student moving advice from our experienced team.",
  alternates: { canonical: `${SITE.url}/guides` },
});

export default function GuidesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Moving Guides</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Free moving guides for Manchester
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Practical advice from our removal team — built from thousands of moves across Greater Manchester. No fluff. Just the information you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {guide.category}
                </span>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readTime}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{guide.description}</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Read guide <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Cross-links to services */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-2">Ready to book your removal?</h2>
              <p className="text-gray-500 text-sm mb-4">
                Our guides give you the knowledge. Our team does the work. Explore our services or get a free quote.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "House Removals", href: "/services/house-removals" },
                  { label: "Office Removals", href: "/services/office-removals" },
                  { label: "Student Removals", href: "/services/student-removals" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "All Locations", href: "/locations" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-700 border border-gray-200 hover:border-blue-300 bg-white px-3.5 py-2 rounded-lg transition-all"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
