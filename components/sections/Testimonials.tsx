import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";

export default function Testimonials() {
  const featured = reviews.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Customer Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-bold text-gray-900 ml-1">4.9</span>
            <span className="text-gray-500">/ 5 based on 214 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-gray-100" />
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
    </section>
  );
}
