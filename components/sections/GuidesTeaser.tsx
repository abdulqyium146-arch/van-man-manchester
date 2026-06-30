import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { guides } from "@/lib/data/guides";

export default function GuidesTeaser() {
  const featured = guides.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white" id="guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Free Guides</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Moving guides from our Manchester team
            </h2>
          </div>
          <Link
            href="/guides"
            className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
          >
            All guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-md rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {guide.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {guide.readTime}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors">
                {guide.shortTitle}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{guide.description}</p>
              <span className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm">
            View all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
