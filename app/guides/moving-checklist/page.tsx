import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Clock } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "Moving Checklist Manchester 2025 | Complete Week-by-Week Guide",
  description:
    "Complete moving checklist for Greater Manchester. Week-by-week tasks from 8 weeks before moving day to settling in. Free printable guide from local removal experts.",
  alternates: { canonical: `${SITE.url}/guides/moving-checklist` },
});

const faqs = [
  {
    question: "When should I start planning my house move in Manchester?",
    answer:
      "Ideally 8 weeks before your moving date. This gives you time to declutter, get quotes, book your removal company (especially important for weekend or month-end moves), organise packing materials and notify all necessary parties of your address change.",
  },
  {
    question: "How far in advance should I book a man and van in Manchester?",
    answer:
      "For weekday moves, 1–2 weeks in advance is usually sufficient. For weekends, the last Friday of the month, or any date around school half-terms and summer holidays — book 4–6 weeks ahead. Same-day slots are available by calling before noon.",
  },
  {
    question: "What documents do I need to change when I move house?",
    answer:
      "You'll need to update: DVLA (driving licence and vehicle registration), electoral roll (via your local council), bank accounts, HMRC, National Insurance records, your GP and dentist, insurance policies, subscriptions, utilities (council tax, water, gas, electricity, broadband), and any loyalty cards or store accounts.",
  },
  {
    question: "Can I pack everything myself before the removal team arrives?",
    answer:
      "Yes — and many customers do. Have everything in labelled boxes, clearly marked with destination room. Leave large furniture and appliances for the removal team. If you're using our packing service, we'll arrive the day before or morning of to pack everything ourselves.",
  },
];

const weeks8 = [
  "Confirm your moving date and exchange contracts",
  "Start decluttering — sell, donate or dispose of items you won't move",
  "Get at least 3 removal quotes (call us for a same-day fixed price)",
  "Book your removal company — especially for Fridays and month-end dates",
  "Notify your landlord or start the conveyancing process",
  "Check your lease or mortgage completion timeline",
  "Research and book storage if needed between moves",
];

const weeks6 = [
  "Start collecting boxes — supermarkets, Facebook Marketplace, buy online",
  "Order specialist boxes: wardrobe boxes, picture boxes, mattress bags",
  "Begin packing non-essentials: books, out-of-season clothes, ornaments",
  "Photograph the back of your TV and electronics before unplugging",
  "Label every box with contents and destination room",
  "Start using up food in the freezer",
  "Check your buildings and contents insurance covers the move date",
];

const weeks4 = [
  "Notify your employer of your new address",
  "Update your address with your bank and building society",
  "Inform HMRC (tax, NI, child benefit, tax credits)",
  "Update your driving licence via DVLA (£14 online)",
  "Update your vehicle registration if applicable",
  "Redirect your post via Royal Mail (usually £33.99 for 3 months)",
  "Inform your GP, dentist and any specialists",
  "Notify DVLA of your new address for your driving licence",
  "Contact your children's school about the move",
  "Update subscriptions: magazines, Amazon, eBay, etc.",
];

const weeks2 = [
  "Pack most rooms — keep out only daily essentials",
  "Confirm time and details with your removal company (call us to confirm)",
  "Notify your utility providers: gas, electricity, water, broadband",
  "Contact your council tax department (old and new)",
  "Defrost your fridge and freezer (24–48 hours before move)",
  "Arrange parking permits or suspension for the removal van if needed",
  "Pack your essentials box (see below)",
  "Confirm keys handover time with solicitor or estate agent",
];

const movingDay = [
  "Be ready before the removal team arrives",
  "Have the kettle, cups and milk easily accessible — the team will appreciate it",
  "Do a final check of every room, loft, cellar, shed and garage",
  "Check all windows and doors are locked before leaving",
  "Take meter readings (gas, electric, water) at both properties",
  "Photograph the condition of both properties",
  "Confirm any parking arrangements at the new property",
  "Keep your essentials box with you — don't put it in the van",
  "Do a room-by-room check at the new property as items are unloaded",
  "Give the removal team a signed completion of the job",
];

const essentialsBox = [
  "Kettle, tea, coffee, mugs and milk",
  "Phone charger and portable power bank",
  "Important documents: ID, contracts, insurance, mortgage paperwork",
  "Keys: new property, car, storage",
  "Medication and first aid essentials",
  "Change of clothes and toiletries",
  "Snacks and water for the day",
  "Children's favourite toys or activities",
  "Cash (for tips, parking, unexpected costs)",
  "Bedding for your first night",
];

const afterMove = [
  "Check all items have arrived and nothing is damaged",
  "Register with a local GP in your new area",
  "Update your electoral roll (can be done at gov.uk)",
  "Set up your broadband — book installation well in advance",
  "Introduce yourself to neighbours",
  "Check your new home's utility meters and accounts",
  "Locate your stopcock, fuse board and gas meter",
  "Update your contents insurance with your new address",
];

export default function MovingChecklistPage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "The Ultimate Moving Checklist for Greater Manchester (2025)",
          description:
            "A complete week-by-week moving checklist for house moves in Manchester.",
          slug: "moving-checklist",
          publishedAt: "2024-09-01",
          updatedAt: "2025-01-10",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides` },
          { name: "Moving Checklist", url: `${SITE.url}/guides/moving-checklist` },
        ])}
      />

      <div className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-gray-950 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <span className="text-white/70">Moving Checklist</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-blue-400 bg-blue-950 border border-blue-800 px-2.5 py-1 rounded-full">Planning</span>
              <span className="text-white/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 12 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              The Ultimate Moving Checklist for Greater Manchester (2025)
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              A complete week-by-week guide built from thousands of moves across Manchester. Every task, in the right order, with nothing left out.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Intro */}
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Moving house is consistently rated one of the most stressful life events — but most of that stress comes from poor planning. After completing thousands of house moves across Greater Manchester, from Radcliffe and Heywood to Eccles and Ashton-under-Lyne, our team knows exactly what goes wrong when people don't have a clear plan.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              This checklist covers everything from eight weeks before your moving date through to settling in. Work through it in order and you'll arrive at moving day prepared, calm and in control.
            </p>
          </div>

          {/* 8 weeks */}
          <ChecklistSection
            week="8 Weeks Before Moving Day"
            color="blue"
            items={weeks8}
            tip="The single most important thing at this stage is booking your removal company. Good slots — especially weekend and month-end Fridays — fill up 4–6 weeks in advance across Greater Manchester."
          />

          {/* 6 weeks */}
          <ChecklistSection
            week="6 Weeks Before Moving Day"
            color="indigo"
            items={weeks6}
            tip="Start packing a room or two per weekend. Books and out-of-season clothes are the easiest to start with — they're the least disruptive to pack early."
          />

          {/* 4 weeks */}
          <ChecklistSection
            week="4 Weeks Before Moving Day"
            color="violet"
            items={weeks4}
            tip="Address changes take longer than people expect. DVLA can take 2–4 weeks. Royal Mail redirection should be set up now to catch anything you miss."
          />

          {/* 2 weeks */}
          <ChecklistSection
            week="2 Weeks Before Moving Day"
            color="purple"
            items={weeks2}
            tip="If you need parking suspension for the removal van on moving day, apply to your local council now — Manchester City Council, Salford, Bury, Oldham and others require 5–10 working days' notice."
          />

          {/* Essentials box */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Pack your essentials box first</h2>
            <p className="text-gray-600 text-sm mb-4">
              This box travels in your car, not the removal van. It has everything you need for the first 24 hours in your new home. Don't put it in the van.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {essentialsBox.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Moving day */}
          <ChecklistSection
            week="Moving Day"
            color="green"
            items={movingDay}
            tip="Take meter readings at both properties. Photograph every room at both addresses before and after. This protects you against disputes with landlords or sellers."
          />

          {/* After move */}
          <ChecklistSection
            week="After the Move"
            color="teal"
            items={afterMove}
            tip="Register to vote at your new address — it takes 5 minutes at gov.uk and affects your credit score if you're not on the electoral roll."
          />

          {/* Room-by-room packing guide CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-2">Need a room-by-room packing guide?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Our full packing guide covers every room in detail — what materials you need, in what order to pack, and what not to put in the removal van.
            </p>
            <Link
              href="/guides/packing-guide"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
            >
              Read the packing guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Moving checklist FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <div className="border-t border-gray-100 pt-8 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Related services &amp; guides</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "House Removals Manchester", href: "/services/house-removals" },
                { label: "Removal Costs Guide", href: "/guides/house-removal-cost" },
                { label: "Packing Guide", href: "/guides/packing-guide" },
                { label: "Same Day Removals", href: "/services/same-day-removals" },
                { label: "Pricing", href: "/pricing" },
                { label: "All Locations", href: "/locations" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 px-3.5 py-2 rounded-lg transition-all"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to book your Manchester removal?</h2>
            <p className="text-blue-100 mb-6">
              Call us for a free fixed-price quote. We cover all of Greater Manchester, 7 days a week.
            </p>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ChecklistSection({
  week,
  color,
  items,
  tip,
}: {
  week: string;
  color: string;
  items: string[];
  tip: string;
}) {
  const colours: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50",
    indigo: "border-indigo-200 bg-indigo-50",
    violet: "border-violet-200 bg-violet-50",
    purple: "border-purple-200 bg-purple-50",
    green: "border-green-200 bg-green-50",
    teal: "border-teal-200 bg-teal-50",
  };
  const iconColours: Record<string, string> = {
    blue: "text-blue-500",
    indigo: "text-indigo-500",
    violet: "text-violet-500",
    purple: "text-purple-500",
    green: "text-green-500",
    teal: "text-teal-500",
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{week}</h2>
      <div className="space-y-2 mb-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${iconColours[color]}`} />
            <span className="text-gray-700 text-sm">{item}</span>
          </div>
        ))}
      </div>
      <div className={`rounded-xl border p-4 text-sm text-gray-600 ${colours[color]}`}>
        <span className="font-semibold text-gray-800">Tip: </span>{tip}
      </div>
    </section>
  );
}
