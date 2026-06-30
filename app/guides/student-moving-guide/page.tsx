import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, CheckCircle, MapPin, ArrowRight, Star } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "Student Moving Guide Manchester 2025 | Cheap Student Removals Advice",
  description:
    "Complete student moving guide for Manchester. Best student areas, moving timeline, budget tips, storage options and how to find an affordable man and van in Manchester.",
  alternates: { canonical: `${SITE.url}/guides/student-moving-guide` },
});

const faqs = [
  {
    question: "How much does a student move cost in Manchester?",
    answer:
      "A student room move in Manchester (e.g. halls to a student house) costs from £79 with a 1-man-and-van. A full student house share move (3–4 people worth of stuff) starts from £149–£249. We offer student ID discounts — call us for the current rate.",
  },
  {
    question: "When is the best time to move in Manchester as a student?",
    answer:
      "Move mid-week if possible. September (especially the last week of August and first two weeks of September) is extremely busy across all Manchester universities. If you can move on a Tuesday or Wednesday, you'll find better availability and sometimes lower prices than peak weekend slots.",
  },
  {
    question: "Can you store my belongings between terms?",
    answer:
      "Yes. We offer student storage from £25 per week. Ideal for storing belongings over summer or between properties. We collect from your student address and deliver to your new address when term starts.",
  },
  {
    question: "Do I need a van or can I just use a car?",
    answer:
      "Depends on how much you have. A single room worth of belongings — some boxes, a bag of clothes, a small TV — can often fit in a medium car. But a bed frame, desk, wardrobe, boxes of books, kitchen items and everything else from a full room usually needs a small van. Call us and we'll advise.",
  },
  {
    question: "What's the best student area to live in Manchester?",
    answer:
      "Fallowfield is the most popular student area for University of Manchester and MMU students. Withington and Didsbury are slightly more expensive but very popular. Rusholme (Curry Mile) is great value and central. Victoria Park offers beautiful period houses. Hulme and Castlefield suit postgraduate students. Salford Quays and Salford University students tend to live in Salford city centre and Eccles.",
  },
];

const manchesterUniAreas = [
  {
    area: "Fallowfield",
    uni: "UoM / MMU",
    vibe: "The heart of student Manchester. Busy, social, walking distance to UoM.",
    price: "£90–£140/week",
    slug: null,
  },
  {
    area: "Withington",
    uni: "UoM / MMU",
    vibe: "Slightly quieter than Fallowfield but still popular. Good transport into town.",
    price: "£95–£150/week",
    slug: null,
  },
  {
    area: "Rusholme",
    uni: "UoM / MMU",
    vibe: "Great value, diverse, the famous Curry Mile. Very popular with first and second years.",
    price: "£80–£120/week",
    slug: null,
  },
  {
    area: "Hulme",
    uni: "MMU",
    vibe: "Close to MMU All Saints campus. More mixed community but well-connected.",
    price: "£85–£130/week",
    slug: null,
  },
  {
    area: "Didsbury",
    uni: "UoM / MMU",
    vibe: "Upmarket, quieter, popular with postgrads and older students. Great cafes.",
    price: "£100–£165/week",
    slug: null,
  },
  {
    area: "Eccles",
    uni: "Salford",
    vibe: "Affordable, good transport links via Metrolink to Salford and Manchester.",
    price: "£75–£115/week",
    slug: "eccles",
  },
  {
    area: "Swinton",
    uni: "Salford / Bolton",
    vibe: "Quiet suburban, good value, train links to Salford and Manchester Victoria.",
    price: "£70–£110/week",
    slug: "swinton",
  },
  {
    area: "Oldham / Failsworth",
    uni: "Manchester Met / Oldham",
    vibe: "Very affordable, tram access via Metrolink, popular with Oldham College students.",
    price: "£65–£100/week",
    slug: "failsworth",
  },
];

const timeline = [
  { when: "April/May (year before)", task: "Start looking for student housing. Good student houses in Fallowfield and Withington are signed by February/March for September." },
  { when: "June/July", task: "Confirm your accommodation. Pay deposits. Notify your current landlord of your end date." },
  { when: "4 weeks before move", task: "Book your man and van in Manchester — especially important for September moves which are extremely busy." },
  { when: "2 weeks before", task: "Start packing non-essentials. Order boxes. Photograph your current room for deposit protection." },
  { when: "Moving week", task: "Pack remaining items. Clean your old room. Do inventory check with landlord." },
  { when: "Moving day", task: "Be ready when the team arrives. Have everything boxed. Do a final check of every cupboard, drawer, shelf and wardrobe." },
  { when: "Moving in", task: "Photograph your new room before unpacking. Note any existing damage to landlord in writing." },
];

const budgetTips = [
  {
    tip: "Move mid-week",
    detail: "Tuesday–Thursday slots are cheaper and more available than Friday–Sunday, especially in September.",
  },
  {
    tip: "Share the van",
    detail: "Moving with housemates? Share a single van booking and split the cost. Much cheaper than everyone booking separately.",
  },
  {
    tip: "Pack yourself",
    detail: "Our packing service is great but self-packing saves £50–£150. Start a few days before — don't leave it to the night before.",
  },
  {
    tip: "Use free boxes",
    detail: "Ask at supermarkets (Tesco, Asda, Lidl) for free boxes. Facebook Marketplace and student Facebook groups always have people giving them away post-move.",
  },
  {
    tip: "Don't move what you don't need",
    detail: "Sell textbooks, old electronics and unwanted clothes on Facebook, Depop or Student Beans before moving. Less to move = cheaper.",
  },
  {
    tip: "Book early",
    detail: "September bookings fill up in July. Book as soon as you know your dates. Same-day students always pay more (when we can even fit them in).",
  },
];

const packingList = [
  "Bedding: duvet, pillows, pillow cases, fitted sheet",
  "Towels (at least 2)",
  "Kitchen basics: pots, pans, plates, mugs, cutlery, tin opener",
  "Laundry: basket, detergent, washing machine tablets",
  "Cleaning: basics for your room and bathroom",
  "Stationery: pens, paper, folders, highlighters",
  "First aid kit",
  "Clothes for all seasons (Manchester weather is unpredictable)",
  "Rain jacket and waterproof shoes",
  "Extension lead and UK plug adaptors",
  "Photo ID (passport or driving licence)",
  "Bank card and a small amount of cash",
  "Prescription medication (repeat prescription sorted before you move)",
  "Laptop and charger",
  "Freshers' week essentials",
];

export default function StudentMovingGuidePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "Student Moving Guide Manchester: Everything You Need to Know",
          description: "Complete guide for students moving in Manchester. Best student areas, moving timeline, budget tips.",
          slug: "student-moving-guide",
          publishedAt: "2024-09-01",
          updatedAt: "2025-01-10",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides` },
          { name: "Student Moving Guide", url: `${SITE.url}/guides/student-moving-guide` },
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
              <span className="text-white/70">Student Moving Guide</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-amber-400 bg-amber-950 border border-amber-800 px-2.5 py-1 rounded-full">Student</span>
              <span className="text-white/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 9 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Student Moving Guide Manchester 2025
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Everything you need to know about moving in Manchester as a student — from halls to student houses, between terms and back home.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Manchester is home to over 100,000 students — the largest student population of any city in Europe. University of Manchester, Manchester Metropolitan University, University of Salford, Manchester Business School, Royal Northern College of Music — the city never stops moving, and neither do its students.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our student removal service has helped thousands of Manchester students move between halls, student houses, between terms and back home at the end of the year. This guide covers everything — areas, timing, packing and budget tips — so your student move goes smoothly.
          </p>

          {/* Student areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Best student areas in Manchester (and where we cover)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manchesterUniAreas.map(({ area, uni, vibe, price, slug }) => (
                <div key={area} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                      <h3 className="font-bold text-gray-900">{area}</h3>
                    </div>
                    <span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">{uni}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{vibe}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{price}</span>
                    {slug && (
                      <Link href={`/locations/${slug}`} className="text-xs text-blue-600 hover:underline">
                        Removals {area} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student moving timeline</h2>
            <div className="space-y-4">
              {timeline.map(({ when, task }) => (
                <div key={when} className="flex gap-4">
                  <div className="w-36 shrink-0 text-xs font-semibold text-blue-600 pt-1">{when}</div>
                  <div className="flex items-start gap-3 flex-1 pb-4 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">{task}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Budget tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Budget tips: how to keep your student move affordable</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {budgetTips.map(({ tip, detail }) => (
                <div key={tip} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{tip}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Packing list */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Student packing list for Manchester</h2>
            <p className="text-gray-500 text-sm mb-5">Manchester is rainy, cold in winter and can be boiling hot in September. Pack for all seasons.</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {packingList.map((item) => (
                <div key={item} className="flex items-center gap-2.5 py-2 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Service CTA inline */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <Star className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Our student removal service</h3>
                <p className="text-gray-600 text-sm mb-4">
                  From £79 for a single room. Student ID discount available. We cover halls, student houses and private rentals across all of Manchester and Greater Manchester. Same-day slots available.
                </p>
                <Link href="/services/student-removals" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
                  View student removals <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student moving FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Student Removals", href: "/services/student-removals" },
              { label: "Moving Checklist", href: "/guides/moving-checklist" },
              { label: "Removal Costs", href: "/guides/house-removal-cost" },
              { label: "All Locations", href: "/locations" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1.5 text-sm text-blue-600 border border-blue-200 px-3.5 py-2 rounded-lg hover:bg-blue-50 transition-all">
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Book your student removal in Manchester</h2>
            <p className="text-blue-100 mb-2">From £79. Student discount available. 7 days a week.</p>
            <p className="text-blue-200 text-sm mb-6">September slots fill up fast — book early to avoid disappointment.</p>
            <a href={SITE.phoneTel} className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
