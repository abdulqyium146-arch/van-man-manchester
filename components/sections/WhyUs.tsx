import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/config";

const reasons = [
  {
    title: "Always on time",
    body: "We respect your time. Our team calls 30 minutes before arrival and arrives within the agreed window — every time.",
  },
  {
    title: "Fully insured on every job",
    body: "Goods in transit insurance and public liability insurance are included as standard. Your belongings are fully covered.",
  },
  {
    title: "Fixed prices — no surprises",
    body: "We agree your price before we start. No hidden extras, no fuel surcharges, no post-move uplifts. What we quote is what you pay.",
  },
  {
    title: "Experienced Manchester-based team",
    body: "Our team knows Greater Manchester inside out. Every road, every estate, every postcode. Local knowledge means faster, smarter moves.",
  },
  {
    title: "We handle the heavy lifting",
    body: "Furniture disassembly, reassembly, stair carries, wardrobe boxes — we handle everything. You don't lift a finger.",
  },
  {
    title: "7 days a week availability",
    body: "We operate Monday to Sunday, 7am–8pm including bank holidays. Weekend and same-day slots available.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Manchester's removal service that actually shows up
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We built our reputation move by move across Greater Manchester. Over 2,500 completed jobs and 214 five-star reviews — because we do what we say, every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                Call for a Free Quote
              </a>
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                Read Our Reviews
              </Link>
            </div>
          </div>

          {/* Right: checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ title, body }) => (
              <div key={title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
