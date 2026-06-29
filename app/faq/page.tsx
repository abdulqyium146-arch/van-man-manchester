import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "FAQ | Man and Van Manchester | Frequently Asked Questions",
  description: "Common questions about our man and van service in Manchester. Pricing, insurance, availability, packing, same-day moves and more.",
  alternates: { canonical: `${SITE.url}/faq` },
});

const allFaqs = [
  { question: "How much does a man and van cost in Manchester?", answer: "A man and van in Manchester costs from £30/hr (1 man) or £49/hr (2 men). Most flat moves are fixed at £79–£149. House moves from £249. We always agree a fixed price before starting." },
  { question: "Do you offer same-day removals?", answer: "Yes. Call before noon for same-day availability. We operate 7 days a week and carry same-day slots across all of Greater Manchester. No extra charge for same-day bookings." },
  { question: "Are you insured?", answer: "Yes. Every job includes goods in transit insurance (covers your belongings during the move) and public liability insurance. We're happy to provide proof of insurance on request." },
  { question: "Do you disassemble and reassemble furniture?", answer: "Yes. Disassembly and reassembly of beds, wardrobes, flat-pack furniture and other large items is included as standard in all our removal services." },
  { question: "Can you pack our belongings?", answer: "Yes. We offer a full packing service using professional double-walled boxes, wardrobe boxes, bubble wrap and packing paper. This can be added to any booking." },
  { question: "Do you provide boxes?", answer: "Yes. We supply all packing materials including boxes, tape, bubble wrap, wardrobe boxes and mattress bags. Materials are charged separately from the move itself." },
  { question: "How far in advance do I need to book?", answer: "For weekdays, 1–2 weeks ahead is usually fine. Weekends and month-end Fridays book up fast — we recommend 3–4 weeks in advance for these. Same-day slots are available at short notice." },
  { question: "Do you cover all of Greater Manchester?", answer: "Yes. We cover every borough of Greater Manchester including Manchester, Salford, Bury, Rochdale, Oldham, Tameside, Stockport, Trafford, Bolton and Wigan, plus all towns and suburbs." },
  { question: "Can you move from Manchester to other parts of the UK?", answer: "Yes. We offer long-distance removals across the UK. Our most popular long-distance routes are Manchester to London, Manchester to Birmingham, Manchester to Leeds and Manchester to Liverpool." },
  { question: "Do you charge more on weekends?", answer: "No. We charge the same rates 7 days a week, including weekends and bank holidays. No weekend surcharge." },
  { question: "What vehicles do you use?", answer: "We use large Luton box vans (700 cubic feet capacity — enough for a 3-bed house) as well as transit vans for smaller moves. We'll recommend the right vehicle for your job." },
  { question: "Can you move pianos?", answer: "We move upright pianos. Grand pianos require specialist equipment — contact us for a custom quote and we can recommend a specialist." },
  { question: "Do you offer storage?", answer: "Yes. We offer short and long-term secure storage from £25 per week. Ideal for students between terms, during property renovations or for overflow between homes." },
  { question: "What happens if something gets damaged?", answer: "Every move is fully insured. In the unlikely event of damage, we have a clear claims process through our insurer. We've completed 2,500+ moves with very few incidents, but you're always covered." },
  { question: "Do you offer student discounts?", answer: "Yes. Show a valid student ID and receive a discount. Call us for the current student rate." },
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-20">
      <JsonLd data={faqSchema(allFaqs)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3 text-center">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 text-center">
            Frequently asked questions
          </h1>
          <p className="text-gray-500 text-lg text-center mb-12">
            Everything you need to know about our man and van service in Manchester.
          </p>
        </div>
        <FAQSection items={allFaqs} />
      </div>
    </div>
  );
}
