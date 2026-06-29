import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/config";

const pricingTiers = [
  {
    name: "Man + Van",
    price: "£30",
    unit: "/hr",
    description: "Single driver. Perfect for small moves, single items or help loading a skip.",
    features: [
      "1 driver",
      "Large Luton van",
      "Minimum 2 hours",
      "Local moves only",
      "Suitable for boxes & small items",
    ],
    cta: "Book Now",
    highlight: false,
  },
  {
    name: "2 Man + Van",
    price: "£49",
    unit: "/hr",
    description: "Our most popular option. Two professional movers for fast, efficient house moves.",
    features: [
      "2 crew members",
      "Large Luton van",
      "Minimum 2 hours",
      "Furniture disassembly included",
      "Packing materials available",
      "Stair carry included",
    ],
    cta: "Book Now",
    highlight: true,
  },
  {
    name: "3 Man + Van",
    price: "£65",
    unit: "/hr",
    description: "Large family moves, 3–5 bedroom properties or same-day urgent relocations.",
    features: [
      "3 crew members",
      "Large Luton van",
      "Minimum 2 hours",
      "Full packing service available",
      "Reassembly service included",
      "Priority scheduling",
    ],
    cta: "Book Now",
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, honest pricing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            No hidden fees. No fuel surcharges. We agree your price before the job starts. Hourly or fixed-price — your choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map(({ name, price, unit, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 ${
                highlight
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02]"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 bg-white px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className={`font-bold text-lg mb-1 ${highlight ? "text-white" : "text-gray-900"}`}>{name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${highlight ? "text-white" : "text-gray-900"}`}>{price}</span>
                  <span className={`text-sm ${highlight ? "text-blue-200" : "text-gray-500"}`}>{unit}</span>
                </div>
                <p className={`text-sm mt-2 ${highlight ? "text-blue-100" : "text-gray-500"}`}>{description}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${highlight ? "text-blue-200" : "text-green-500"}`} />
                    <span className={`text-sm ${highlight ? "text-blue-50" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE.phoneTel}
                className={`flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-colors ${
                  highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Phone className="w-4 h-4" />
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Prefer a fixed price? <Link href="/pricing" className="text-blue-600 underline">See our fixed-price guide</Link> or{" "}
          <a href={SITE.phoneTel} className="text-blue-600 underline">call for a custom quote</a>.
        </p>
      </div>
    </section>
  );
}
