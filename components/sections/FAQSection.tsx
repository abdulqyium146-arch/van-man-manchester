"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a man and van cost in Manchester?",
    answer: "A man and van in Manchester typically costs from £30–£49 per hour depending on crew size. Most small flat moves cost £79–£149 as a fixed price. Larger house moves start from £249. We always agree a price before starting — no surprises.",
  },
  {
    question: "Do you offer same-day removals in Manchester?",
    answer: "Yes. Call before noon and we'll aim to have a crew with you the same day. Same-day availability is subject to slot availability but we carry slots 7 days a week. No extra charge for same-day bookings.",
  },
  {
    question: "Are you insured for removals?",
    answer: "Yes — every job is covered by goods in transit insurance and public liability insurance. Your belongings are fully protected throughout the move. We're happy to provide proof of insurance on request.",
  },
  {
    question: "Do you cover all of Greater Manchester?",
    answer: "Yes. We cover all Greater Manchester boroughs including Manchester, Salford, Bury, Rochdale, Oldham, Tameside, Stockport, Trafford, Bolton and Wigan. See our locations page for your specific area.",
  },
  {
    question: "Can you pack our belongings for us?",
    answer: "Yes. We offer a full packing service — our team will pack everything using double-walled boxes, wardrobe boxes, bubble wrap and packing paper. Add packing to your booking when you call.",
  },
  {
    question: "How far in advance do I need to book?",
    answer: "For weekday moves, 1–2 weeks is usually fine. Weekends and month-end dates (especially Fridays) book up quickly — we'd recommend 3–4 weeks for these. Same-day and next-day slots are sometimes available for urgent moves.",
  },
  {
    question: "Do you move pianos, antiques or fragile items?",
    answer: "We move upright pianos and can handle antiques and fragile items with specialist packaging. Call us to discuss your specific items and we'll advise on the best approach and materials.",
  },
  {
    question: "What's included in the removal price?",
    answer: "All prices include fuel, the van, and labour. Furniture disassembly/reassembly and stair carries are included as standard. Packing materials (boxes, tape, bubble wrap) are charged separately unless you opt for our full packing service.",
  },
];

export default function FAQSection({ items = faqs }: { items?: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
        </div>

        <div className="space-y-2">
          {items.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
