import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = siteMetadata({
  title: "How to Pack for a House Move | Complete Packing Guide Manchester",
  description:
    "Step-by-step packing guide for house moves. Room-by-room instructions, materials list, packing tips and what not to pack. From Manchester's local removal experts.",
  alternates: { canonical: `${SITE.url}/guides/packing-guide` },
});

const faqs = [
  {
    question: "How many boxes do I need for a house move?",
    answer:
      "As a rough guide: studio flat — 10–20 boxes; 1-bed flat — 20–30 boxes; 2-bed house — 30–50 boxes; 3-bed house — 50–80 boxes; 4-bed house — 80–120 boxes. These are estimates — heavy book collections, large kitchens and significant wardrobes all increase the number needed.",
  },
  {
    question: "Where can I get free boxes for moving in Manchester?",
    answer:
      "Supermarkets (Tesco, Asda, Morrisons, Lidl, Aldi) often give away boxes — ask at customer services or visit early in the morning. Facebook Marketplace and Freecycle also have people giving away boxes after their own moves. Our service includes professional double-walled boxes if you'd prefer new ones.",
  },
  {
    question: "Should I pack books in big or small boxes?",
    answer:
      "Always small boxes. Books are extremely heavy and a large box of books is almost impossible to lift safely. Use small boxes, fill them to the top (so they don't collapse when stacked), and write 'BOOKS — HEAVY' on every side.",
  },
  {
    question: "Can I leave clothes in drawers during the move?",
    answer:
      "For flat-pack furniture that you're disassembling, no — remove clothes first. For solid wood chests of drawers, sometimes yes — but check with your removal team. Drawers can be removed and transported separately to reduce weight.",
  },
  {
    question: "What shouldn't I pack in moving boxes?",
    answer:
      "Don't pack: hazardous materials (paint, chemicals, aerosols), perishable food, plants, passports, cash, medication (keep with you), jewellery or valuables, important documents, pets. Keep these in your car or on your person on moving day.",
  },
];

const materials = [
  { item: "Double-walled moving boxes (various sizes)", essential: true },
  { item: "Wardrobe boxes (hanging clothes)", essential: true },
  { item: "Bubble wrap (fragile items)", essential: true },
  { item: "Packing tape and dispenser", essential: true },
  { item: "Packing paper / newsprint", essential: true },
  { item: "Permanent marker pens (for labelling)", essential: true },
  { item: "Mattress bags", essential: true },
  { item: "Sofa covers / furniture blankets", essential: false },
  { item: "Stretch wrap / cling film (for drawers)", essential: false },
  { item: "Picture boxes", essential: false },
  { item: "Foam corner protectors", essential: false },
  { item: "Ziplock bags (for screws, bolts)", essential: true },
];

const rooms = [
  {
    room: "Kitchen",
    order: "Pack last (except rarely used items)",
    items: [
      "Start with items you rarely use: bread maker, fondue set, special occasion crockery",
      "Wrap plates individually in packing paper, stack vertically (on edge) — never flat",
      "Cups and mugs: wrap individually, pack upside down in boxes",
      "Glasses: wrap in bubble wrap, label 'FRAGILE — GLASS'",
      "Pots and pans: nest together with paper between, heavier items at the bottom",
      "Sharp knives: wrap in cardboard and tape before packing",
      "Food: pack non-perishables last. Defrost and run the freezer 24hrs before",
      "Small appliances: wrap in original boxes if kept, or in bubble wrap and packing paper",
    ],
    tip: "The kitchen takes longer than any other room. Most people underestimate it. Start packing non-essential kitchen items 2 weeks before moving day.",
  },
  {
    room: "Bedroom",
    order: "Pack clothes last, everything else early",
    items: [
      "Wardrobe boxes: hang clothes directly — no folding or taking off hangers",
      "Fold remaining clothes in drawers and tape drawers shut (or remove and transport separately)",
      "Bedding: pack in large boxes or bags, label clearly",
      "Books: always in small boxes, fill to the top, write 'HEAVY' clearly",
      "Sentimental items and ornaments: wrap individually in bubble wrap",
      "Disassemble bed frames — keep all screws in a labelled ziplock bag taped to the frame",
      "Pack a 'first night' bag: pyjamas, change of clothes, toiletries, phone charger",
    ],
    tip: "Pack a separate 'essentials bag' from your bedroom — clothes and toiletries for the first 2 nights. This bag doesn't go in the van.",
  },
  {
    room: "Living Room",
    order: "Pack early — books, decor, entertainment",
    items: [
      "Books: small boxes only. 'BOOKS — HEAVY' on all sides",
      "DVDs, CDs, games: medium boxes, packed tightly to prevent movement",
      "Ornaments and picture frames: wrap individually in bubble wrap or packing paper",
      "Artwork: use purpose-made picture boxes, or wrap in cardboard and blankets",
      "Electronics: photograph cables before disconnecting. Label each cable",
      "TV: use original box if available. If not, a specialist TV box. Never lay flat without protection",
      "Sofa cushions: large bags or boxes — these are light and can fill any gaps in the van",
    ],
    tip: "Electronics are one of the most commonly damaged items in house moves. Photograph the back of every device before disconnecting — you'll thank yourself when setting up.",
  },
  {
    room: "Bathroom",
    order: "Pack last before moving day",
    items: [
      "Seal liquids (shampoo, conditioner, medicine) with tape across lids before packing",
      "Wrap glass bottles individually in packing paper",
      "Medicine: keep all medication with you in a bag — do not put in the van",
      "Towels: great padding material — use around fragile items",
      "Toiletry bag: prepare a separate toiletries bag for the first night",
    ],
    tip: "Wrap toiletry lids with cling film or tape before packing — vibration in the van causes bottles to leak. You don't want shampoo all over your books.",
  },
  {
    room: "Home Office",
    order: "Pack documents and equipment carefully",
    items: [
      "Back up all computers and hard drives before packing",
      "Photograph cable setups before disconnecting",
      "Important documents: keep passports, contracts, insurance documents with you",
      "Use original boxes for monitors and computers if available",
      "Label all cables or use ziplock bags with labels",
      "Printers: remove ink cartridges, tape the paper tray closed",
    ],
    tip: "Keep all important documents — solicitor correspondence, mortgage documents, insurance policies — in a bag that travels with you, not in the van.",
  },
  {
    room: "Garage & Shed",
    order: "Pack separately — often the messiest room",
    items: [
      "Dispose of hazardous materials: paint, chemicals, aerosols — cannot be transported",
      "Petrol: drain from lawnmowers and strimmers before moving day",
      "Tools: wrap sharp tools in newspaper or bubble wrap",
      "Garden equipment: clean soil off gardening tools before packing",
      "Bikes: deflate tyres slightly to prevent tyre expansion in the van",
      "Heavy equipment: label clearly and inform the removal team in advance",
    ],
    tip: "Most removal companies cannot transport hazardous materials including paint, petrol, gas canisters, aerosols and chemicals. Dispose of these before moving day.",
  },
];

const doNotPack = [
  "Paint tins and decorating chemicals",
  "Petrol, oil and flammable liquids",
  "Gas canisters and camping fuel",
  "Aerosols and pressurised containers",
  "Bleach and cleaning chemicals",
  "Passports, IDs and legal documents",
  "Cash, jewellery and valuables",
  "Prescription medication",
  "Car keys and house keys",
  "Mobile phones and chargers",
  "Perishable food",
  "Pets and houseplants",
];

export default function PackingGuidePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "How to Pack for a House Move: The Complete Packing Guide",
          description: "Step-by-step packing guide for house moves. Room-by-room instructions.",
          slug: "packing-guide",
          publishedAt: "2024-09-01",
          updatedAt: "2025-01-10",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides` },
          { name: "Packing Guide", url: `${SITE.url}/guides/packing-guide` },
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
              <span className="text-white/70">Packing Guide</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-purple-400 bg-purple-950 border border-purple-800 px-2.5 py-1 rounded-full">Tips</span>
              <span className="text-white/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              How to Pack for a House Move: The Complete Guide
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Room-by-room packing instructions, materials lists and the packing mistakes that cause damage on moving day.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Poor packing is the number one cause of damage during house moves. After completing thousands of removals across Greater Manchester — from Radcliffe to Ashton-under-Lyne — our team has seen what works and what doesn't. This guide gives you the professional approach, room by room.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            If you'd prefer to leave packing entirely to us, our{" "}
            <Link href="/services/house-removals" className="text-blue-600 underline">full packing service</Link>{" "}
            is available on every house removal booking.
          </p>

          {/* Materials */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Packing materials you'll need</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {materials.map(({ item, essential }) => (
                <div key={item} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${essential ? "text-green-500" : "text-gray-300"}`} />
                  <div>
                    <span className="text-sm text-gray-700">{item}</span>
                    {essential && <span className="ml-2 text-xs text-green-600 font-medium">Essential</span>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We supply all packing materials when you add our packing service to your booking.{" "}
              <Link href="/contact" className="text-blue-600 underline">Get a quote</Link>.
            </p>
          </section>

          {/* Room by room */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Room-by-room packing guide</h2>
            <div className="space-y-8">
              {rooms.map(({ room, order, items, tip }) => (
                <div key={room} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-900 px-5 py-4 flex items-center justify-between">
                    <h3 className="font-bold text-white">{room}</h3>
                    <span className="text-gray-400 text-xs">{order}</span>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2 mb-4">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">Tip: </span>{tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Do not pack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">What NOT to put in the removal van</h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="text-gray-600 text-sm mb-4">
                These items cannot legally be transported in removal vans or are too valuable to risk. Keep them with you.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {doNotPack.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Labelling */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Labelling: the step most people skip</h2>
            <p className="text-gray-600 mb-4">
              Proper labelling makes unloading 3x faster and means you can find everything on the first night without opening every box. Here's the professional system our team uses:
            </p>
            <div className="space-y-3">
              {[
                { label: "Contents", detail: "Write the main contents on at least two sides of every box." },
                { label: "Destination room", detail: "Write the destination room clearly on top and at least one side." },
                { label: "Fragile", detail: "Mark all fragile boxes in red marker on every side and the top." },
                { label: "Priority", detail: "Mark boxes you'll need first as 'UNPACK FIRST' — kettle, bed, essentials." },
                { label: "Heavy", detail: "Write 'HEAVY' on boxes over 15kg so the team can plan the lift correctly." },
              ].map(({ label, detail }) => (
                <div key={label} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="w-24 shrink-0 font-semibold text-gray-900 text-sm">{label}</span>
                  <span className="text-gray-600 text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Packing FAQs</h2>
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
              { label: "Moving Checklist", href: "/guides/moving-checklist" },
              { label: "Removal Costs", href: "/guides/house-removal-cost" },
              { label: "House Removals", href: "/services/house-removals" },
              { label: "Get a Quote", href: "/contact" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1.5 text-sm text-blue-600 border border-blue-200 px-3.5 py-2 rounded-lg hover:bg-blue-50 transition-all">
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want us to handle the packing?</h2>
            <p className="text-blue-100 mb-6">
              Add our professional packing service to any house removal. We bring all materials and pack everything safely.
            </p>
            <a href={SITE.phoneTel} className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              <Phone className="w-5 h-5" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
