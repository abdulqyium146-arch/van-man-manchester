import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "House Removal Cost Manchester 2025 | Honest Price Guide",
  description:
    "How much does a house removal cost in Manchester? 2025 prices by property size, distance and crew. Fixed vs hourly rates, extras and how to reduce your costs.",
  alternates: { canonical: `${SITE.url}/guides/house-removal-cost` },
});

const faqs = [
  {
    question: "What is the average cost of a house removal in Manchester?",
    answer:
      "The average house removal in Manchester costs £250–£500 for a 2–3 bedroom property moving within Greater Manchester. A studio or 1-bed flat averages £100–£150. A 4–5 bed house averages £400–£700. Long-distance moves (Manchester to London, for example) typically cost £600–£1,200 depending on volume.",
  },
  {
    question: "Is it cheaper to hire an hourly rate or a fixed-price removal?",
    answer:
      "For moves under 3 hours, hourly rates (from £49/hr for 2 men) are often cheaper. For longer moves — especially anything involving packing, disassembly or a longer drive — a fixed price gives you certainty. We offer both and will advise which is better value for your specific move.",
  },
  {
    question: "What's included in a removal quote?",
    answer:
      "A standard removal quote includes the van, fuel, driver and any additional crew. Furniture disassembly/reassembly and stair carry are included as standard with us. Packing materials (boxes, tape, bubble wrap) and a full packing service are extras.",
  },
  {
    question: "Why do some removal companies charge more than others in Manchester?",
    answer:
      "Price differences usually reflect: crew experience, insurance level (some smaller operators have minimal cover), vehicle condition, booking demand, and whether the company is VAT-registered. Cheapest is rarely best for a house move — look for a company with genuine reviews and verifiable insurance.",
  },
  {
    question: "How can I reduce the cost of my house removal?",
    answer:
      "Book mid-week (Tue–Thu) rather than Friday. Avoid month-end dates. Pack yourself. Declutter before the move to reduce volume. Have everything ready when the team arrives — idle time costs money on hourly jobs. Be flexible on moving date if possible.",
  },
];

const priceTable = [
  { property: "Studio / Bedsit", crew: "1 man + van", time: "1–2 hrs", local: "£79–£120", gm: "£100–£150", longDistance: "£180–£280" },
  { property: "1 Bedroom Flat", crew: "2 men + van", time: "2–3 hrs", local: "£120–£170", gm: "£150–£200", longDistance: "£220–£320" },
  { property: "2 Bedroom House", crew: "2 men + van", time: "3–5 hrs", local: "£170–£260", gm: "£220–£320", longDistance: "£300–£450" },
  { property: "3 Bedroom House", crew: "2–3 men + van", time: "5–8 hrs", local: "£270–£400", gm: "£320–£480", longDistance: "£400–£650" },
  { property: "4 Bedroom House", crew: "3 men + van", time: "7–10 hrs", local: "£380–£550", gm: "£450–£650", longDistance: "£550–£850" },
  { property: "5+ Bedroom House", crew: "3–4 men + 2 vans", time: "Full day+", local: "£500–£800", gm: "£600–£900", longDistance: "£700–£1,200" },
];

const factors = [
  {
    title: "Property size and volume",
    body: "The single biggest factor. A studio with a car boot of boxes is a 1-hour job. A 5-bed house packed to the rafters with 20 years of accumulated furniture is a two-day operation. Every extra box, wardrobe and item of furniture adds time — and time is money.",
  },
  {
    title: "Distance",
    body: "A move from Heywood to Middleton (4 miles) is very different from Heywood to London (200 miles). Most Greater Manchester removal companies charge a flat daily rate for local moves and add mileage or a long-distance premium for moves beyond 30–50 miles.",
  },
  {
    title: "Crew size",
    body: "More crew = faster move = less total hours. A 3-bed house move with 2 men takes around 6 hours. The same move with 3 men might take 4 hours. More crew costs more per hour but often costs less overall — and is much less stressful.",
  },
  {
    title: "Access and parking",
    body: "Narrow streets, double yellow lines, third-floor flats with no lift, awkward staircases, tight parking — these all add time and effort. Some removal companies add a surcharge for difficult access. We assess this during quoting and include it in your fixed price.",
  },
  {
    title: "Day and time",
    body: "Friday (especially month-end Fridays) is the most expensive and least available day for removals in Manchester. Tuesday, Wednesday and Thursday are cheapest and most available. Weekend rates are similar to weekday — we don't add a surcharge.",
  },
  {
    title: "Packing service",
    body: "If you pack yourself, this is zero cost. If you want us to pack for you — using professional boxes, bubble wrap and wrapping paper — expect to add £100–£300 depending on property size. It's worth it for fragile items or if time is short.",
  },
  {
    title: "Specialist items",
    body: "Pianos, safes, large antiques, gym equipment and pool tables all require special handling and sometimes specialist equipment. These are always quoted separately. Standard removal insurance may not cover items over a certain value — ask about this when you call.",
  },
];

export default function HouseRemovalCostPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "How Much Does a House Removal Cost in Manchester? (2025 Prices)",
          description: "A transparent guide to house removal costs in Manchester.",
          slug: "house-removal-cost",
          publishedAt: "2024-09-01",
          updatedAt: "2025-01-10",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides` },
          { name: "House Removal Cost", url: `${SITE.url}/guides/house-removal-cost` },
        ])}
      />

      <div className="pt-24 pb-20">
        <div className="bg-gray-950 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white">Guides</Link>
              <span>/</span>
              <span className="text-white/70">House Removal Cost</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-green-400 bg-green-950 border border-green-800 px-2.5 py-1 rounded-full">Pricing</span>
              <span className="text-white/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              How Much Does a House Removal Cost in Manchester? (2025)
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Transparent pricing from a local removal company. No guesswork — just honest numbers based on thousands of Manchester moves.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-gray-600 text-lg leading-relaxed mb-10">
            <p>
              The most common question we get is: <em>"how much will my removal cost?"</em> The honest answer is — it depends on several variables. But after completing thousands of house moves across Greater Manchester, we can give you reliable price ranges for almost any situation.
            </p>
            <p className="mt-4">
              This guide breaks down exactly what affects removal costs in Manchester, gives you real price ranges by property size and distance, and tells you how to reduce your bill without cutting corners on quality.
            </p>
          </div>

          {/* Price table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">House removal prices in Manchester (2025)</h2>
            <p className="text-gray-500 text-sm mb-5">
              All prices are estimates. Your actual quote may vary based on access, floor level, volume and special items. We always agree a fixed price before starting.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Property</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Crew</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Time</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Within Manchester</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Greater Manchester</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Long Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-4 font-medium text-gray-900 border-b border-gray-100">{row.property}</td>
                      <td className="p-4 text-gray-600 border-b border-gray-100">{row.crew}</td>
                      <td className="p-4 text-gray-600 border-b border-gray-100">{row.time}</td>
                      <td className="p-4 font-semibold text-gray-900 border-b border-gray-100">{row.local}</td>
                      <td className="p-4 text-gray-700 border-b border-gray-100">{row.gm}</td>
                      <td className="p-4 text-gray-700 border-b border-gray-100">{row.longDistance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What affects removal costs in Manchester?</h2>
            <div className="space-y-5">
              {factors.map(({ title, body }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hourly vs fixed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Fixed price vs hourly rate: which is better?</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Fixed price — best for</h3>
                <ul className="space-y-2">
                  {["Full house moves", "Long-distance removals", "Complex access situations", "When you want certainty", "When the move is likely to overrun"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Hourly rate — best for</h3>
                <ul className="space-y-2">
                  {["Small flat moves under 3 hours", "Single item deliveries", "Loading help only", "When everything is already packed", "Short-distance moves"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Tips to save */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">How to reduce your removal costs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: "Move mid-week", detail: "Tue–Thu moves are 10–20% more available and sometimes cheaper than Fridays." },
                { tip: "Avoid month-end", detail: "The last Friday of the month is always fully booked. Move on a Wednesday instead." },
                { tip: "Pack yourself", detail: "Self-packing can save £100–£300. Use free supermarket boxes for books and linen." },
                { tip: "Declutter first", detail: "Every item you don't move is money saved. Sell on Facebook Marketplace or donate." },
                { tip: "Be ready on the day", detail: "Have everything boxed before the team arrives. Idle time on an hourly job costs £30–£65/hr." },
                { tip: "Be flexible on dates", detail: "If you can move on a Tuesday 2 weeks earlier, we often have discounted slots available." },
              ].map(({ tip, detail }) => (
                <div key={tip} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{tip}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Removal cost FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location links */}
          <div className="mb-8 border border-gray-100 rounded-2xl p-6 bg-gray-50">
            <h3 className="font-semibold text-gray-900 mb-3">Local removal prices by area</h3>
            <p className="text-gray-500 text-sm mb-4">Click your area for location-specific pricing and availability.</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Heywood", slug: "heywood" },
                { name: "Radcliffe", slug: "radcliffe" },
                { name: "Middleton", slug: "middleton" },
                { name: "Eccles", slug: "eccles" },
                { name: "Walkden", slug: "walkden" },
                { name: "Atherton", slug: "atherton" },
                { name: "Leigh", slug: "leigh" },
                { name: "Swinton", slug: "swinton" },
              ].map(({ name, slug }) => (
                <Link
                  key={slug}
                  href={`/locations/${slug}`}
                  className="text-sm text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 px-3 py-1.5 rounded-lg bg-white transition-all"
                >
                  Removals {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related guides */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Moving Checklist", href: "/guides/moving-checklist" },
              { label: "Packing Guide", href: "/guides/packing-guide" },
              { label: "Pricing Page", href: "/pricing" },
              { label: "Get a Quote", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 border border-blue-200 px-3.5 py-2 rounded-lg hover:bg-blue-50 transition-all"
              >
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get your exact removal price now</h2>
            <p className="text-blue-100 mb-6">Fixed price. No hidden fees. Response within 2 hours.</p>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
