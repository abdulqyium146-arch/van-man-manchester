import type { Metadata } from "next";
import { Star } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import { reviews } from "@/lib/data/reviews";
import JsonLd from "@/components/seo/JsonLd";
import { reviewSchema } from "@/lib/schema";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = siteMetadata({
  title: "Reviews | Man and Van Manchester | 4.9★ Customer Reviews",
  description: "Read genuine customer reviews for Man and Van Manchester. 4.9 stars from 214 reviews. House removals, office moves and student removals across Greater Manchester.",
  alternates: { canonical: `${SITE.url}/reviews` },
});

export default function ReviewsPage() {
  return (
    <div className="pt-24">
      <JsonLd data={reviewSchema(reviews.map((r) => ({ author: r.author, rating: r.rating, body: r.body, date: r.date })))} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Customer Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            What our customers say
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-500 text-lg">
            <span className="font-bold text-gray-900">4.9 / 5</span> from {SITE.rating.count}+ verified reviews across Greater Manchester
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { value: "4.9★", label: "Average Rating" },
            { value: "214+", label: "Total Reviews" },
            { value: "98%", label: "5-Star Reviews" },
            { value: "2,500+", label: "Jobs Completed" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
              <div className="text-3xl font-black text-gray-900">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4">
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{review.body}&rdquo;</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                  <p className="text-xs text-gray-400">{review.location} · {review.service}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(review.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
