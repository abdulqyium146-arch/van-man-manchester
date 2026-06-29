import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = siteMetadata({
  title: "Man and Van Prices Manchester | Removal Costs 2024 | Fixed Price Guide",
  description: "Transparent man and van prices in Manchester. House removals from £149, office moves from £299, student moves from £79. Fixed prices — no hidden fees. Call for a quote.",
  alternates: { canonical: `${SITE.url}/pricing` },
});

const pricingFaqs = [
  { question: "Are your prices fixed or hourly?", answer: "We offer both. Most jobs are quoted as a fixed price — you know exactly what you'll pay. We also offer hourly rates from £30/hr for smaller or less predictable jobs." },
  { question: "What's included in the price?", answer: "All prices include the van, fuel, driver and labour. Furniture disassembly/reassembly and stair carry are included as standard. Packing materials and full packing service are charged separately." },
  { question: "Are there any hidden fees?", answer: "No. The price we quote is the price you pay. We don't add fuel surcharges, congestion charges or post-move uplifts." },
  { question: "How do you calculate the price?", answer: "Price depends on property size, distance, number of crew required, access conditions (lifts, stairs, parking) and any specialist items. We assess all of these before quoting." },
  { question: "Do you charge more for weekends?", answer: "No. We charge the same rates 7 days a week. We don't apply weekend or bank holiday surcharges." },
  { question: "Do you offer student discounts?", answer: "Yes. Students with valid ID receive a discount on standard rates. Contact us for the current student rate." },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Transparent Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Man and van prices in Manchester
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Fixed prices. Agreed before the job starts. No hidden extras, no fuel surcharges, no post-move surprises. Here's exactly what you can expect to pay.
          </p>
        </div>

        {/* Hourly */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hourly rates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { name: "1 Man + Van", hourly: "£30/hr", min: "2 hrs min", desc: "Driver only. Small items, loading help, single-room moves." },
              { name: "2 Men + Van", hourly: "£49/hr", min: "2 hrs min", desc: "Two crew. Our most popular option for flat and house moves." },
              { name: "3 Men + Van", hourly: "£65/hr", min: "2 hrs min", desc: "Three crew. Large houses, fast turnaround, same-day moves." },
            ].map(({ name, hourly, min, desc }) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <div className="text-4xl font-black text-blue-600 mb-0.5">{hourly}</div>
                <div className="text-sm text-gray-400 mb-3">{min}</div>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fixed price by type */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fixed prices by property size</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 text-sm font-semibold text-gray-900">Property</th>
                  <th className="text-left py-3 pr-6 text-sm font-semibold text-gray-900">Within Manchester</th>
                  <th className="text-left py-3 pr-6 text-sm font-semibold text-gray-900">Greater Manchester</th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Long Distance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Studio / 1 Bed Flat", local: "From £79", gm: "From £99", long: "From £149" },
                  { type: "2 Bedroom House", local: "From £149", gm: "From £179", long: "From £249" },
                  { type: "3 Bedroom House", local: "From £249", gm: "From £299", long: "From £349" },
                  { type: "4 Bedroom House", local: "From £349", gm: "From £399", long: "From £449" },
                  { type: "5+ Bedroom House", local: "From £449", gm: "From £499", long: "From £599" },
                ].map(({ type, local, gm, long }) => (
                  <tr key={type} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 pr-6 text-sm font-medium text-gray-900">{type}</td>
                    <td className="py-4 pr-6 text-sm text-gray-700">{local}</td>
                    <td className="py-4 pr-6 text-sm text-gray-700">{gm}</td>
                    <td className="py-4 text-sm text-gray-700">{long}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Prices are estimates. Final price confirmed after details provided. No obligation quote.
          </p>
        </section>

        {/* Add-ons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Optional extras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Full packing service", price: "From £50", desc: "We pack everything using professional materials." },
              { name: "Packing materials only", price: "From £25", desc: "Boxes, bubble wrap, tape, wardrobe boxes." },
              { name: "Furniture disassembly", price: "Included", desc: "Beds, wardrobes, flat-pack. Always included." },
              { name: "Piano removal", price: "From £100", desc: "Upright pianos. Grand pianos on request." },
              { name: "Storage", price: "From £25/week", desc: "Short or long-term secure storage." },
              { name: "Cleaning service", price: "From £80", desc: "End-of-tenancy clean. Add to your booking." },
            ].map(({ name, price, desc }) => (
              <div key={name} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{name}</span>
                    <span className="text-blue-600 font-bold text-sm">{price}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQSection items={pricingFaqs} />

        {/* CTA */}
        <div className="mt-12 bg-blue-600 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Get your exact price now</h2>
          <p className="text-blue-100 mb-6">Call for a fixed quote within 2 minutes. No obligation.</p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" /> {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
