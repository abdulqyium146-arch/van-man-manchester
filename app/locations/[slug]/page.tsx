import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, CheckCircle, Star, ArrowRight } from "lucide-react";
import { getLocation, getLocationSlugs, locations } from "@/lib/data/locations";
import { locationMetadata } from "@/lib/seo/metadata";
import { locationPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/config";
import JsonLd from "@/components/seo/JsonLd";
import FAQSection from "@/components/sections/FAQSection";

export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return locationMetadata(location);
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearby = locations
    .filter((l) => location.nearbyAreas.some((a) => l.name === a))
    .slice(0, 5);

  const locationFaqs = [
    {
      question: `How much does a man and van in ${location.name} cost?`,
      answer: `A man and van in ${location.name} (${location.postcode}) typically costs from £79–£149 for a studio or 1-bed flat move. A 2–3 bedroom house removal starts from £249. We always give a fixed price before the job — no surprises.`,
    },
    {
      question: `Do you offer same-day removals in ${location.name}?`,
      answer: `Yes. We operate 7 days a week from ${location.name} and surrounding areas. Call before noon and we'll aim to be with you the same day. No extra charge for same-day bookings in ${location.postcode}.`,
    },
    {
      question: `Which postcodes do you cover in ${location.name}?`,
      answer: `We cover the full ${location.postcode} postcode area including all streets and estates in ${location.name}. We also cover nearby areas including ${location.nearbyAreas.slice(0, 3).join(", ")}.`,
    },
    {
      question: `Are you insured for removals in ${location.name}?`,
      answer: `Yes. All moves in ${location.name} and across Greater Manchester are covered by full goods in transit insurance and public liability insurance. Your belongings are protected throughout.`,
    },
    {
      question: `Can you move from ${location.name} to Manchester city centre?`,
      answer: `Absolutely. This is one of our most popular routes. ${location.distanceToCity} — our team covers this route regularly and can give you a fast, competitive fixed price.`,
    },
    {
      question: `Do you offer a packing service in ${location.name}?`,
      answer: `Yes. We offer a full packing service in ${location.name} using professional double-walled boxes, wardrobe boxes, bubble wrap and packing paper. Add packing to your booking when you call.`,
    },
  ];

  const services = [
    { name: "House Removals", href: "/services/house-removals", desc: `Full house removal in ${location.name}. Studio to 5-bed. Fixed price.` },
    { name: "Office Removals", href: "/services/office-removals", desc: `Office relocation from ${location.name}. Evenings and weekends available.` },
    { name: "Student Removals", href: "/services/student-removals", desc: `Student moves to and from ${location.name}. Affordable rates.` },
    { name: "Furniture Delivery", href: "/services/furniture-removals", desc: `Single item or full delivery in ${location.name} area.` },
    { name: "Same Day Removals", href: "/services/same-day-removals", desc: `Emergency same-day moves in ${location.name}. Call now.` },
  ];

  return (
    <>
      <JsonLd data={locationPageSchema(location)} />
      <JsonLd data={faqSchema(locationFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Locations", url: `${SITE.url}/locations` },
          { name: `Man and Van ${location.name}`, url: `${SITE.url}/locations/${location.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-white/80">{location.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">{location.postcode} · {location.area} · {location.county}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Man and Van{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {location.name}
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
              {location.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Quote
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {["Fully Insured", "Fixed Prices", "Same Day Available", "7 Days a Week"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Removal service in {location.name}, {location.postcode}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{location.description}</p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're moving within {location.name} or relocating to another part of Greater Manchester, our team offers a professional, punctual and fully insured service at honest fixed prices. We cover every street in the {location.postcode} postcode and are very familiar with local roads including {location.roads.slice(0, 3).join(", ")}.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {location.distanceToCity}. We run regular removal routes between {location.name} and Manchester city centre, Salford and surrounding boroughs — making us one of the most competitive options for long-distance moves within Greater Manchester.
              </p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Postcode</span>
                    <span className="font-semibold text-gray-900">{location.postcode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Borough</span>
                    <span className="font-semibold text-gray-900">{location.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Distance</span>
                    <span className="font-semibold text-gray-900">{location.distanceToCity.split(" from")[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability</span>
                    <span className="font-semibold text-green-600">7 Days · Same Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">From</span>
                    <span className="font-bold text-gray-900">£79</span>
                  </div>
                </div>
                <a
                  href={SITE.phoneTel}
                  className="mt-5 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Removal services in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ name, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700">{name} {location.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Man and van prices in {location.name}
          </h2>
          <p className="text-gray-500 mb-8">
            All prices are fixed and agreed before the job starts. No hidden extras. No fuel surcharges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Studio / 1 Bed", price: "From £79", note: "Up to 2 hours" },
              { label: "2 Bed House", price: "From £149", note: "Half day" },
              { label: "3 Bed House", price: "From £249", note: "Full day" },
              { label: "4–5 Bed House", price: "From £349", note: "Full day + crew" },
            ].map(({ label, price, note }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-2xl font-black text-gray-900">{price}</p>
                <p className="text-xs text-gray-400 mt-1">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Prices shown are for moves within {location.name} ({location.postcode}). Long-distance or complex moves may vary.{" "}
            <a href={SITE.phoneTel} className="text-blue-600 underline">Call for a fixed quote.</a>
          </p>
        </div>
      </section>

      {/* Local landmarks */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Landmarks</h3>
              <ul className="space-y-1.5">
                {location.landmarks.map((l) => (
                  <li key={l} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Roads We Cover</h3>
              <ul className="space-y-1.5">
                {location.roads.map((r) => (
                  <li key={r} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Schools Nearby</h3>
              <ul className="space-y-1.5">
                {location.schools.map((s) => (
                  <li key={s} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Shopping</h3>
              <ul className="space-y-1.5">
                {location.shopping.map((s) => (
                  <li key={s} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Customer reviews for {location.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { body: `The team arrived on time in ${location.name} and had the whole flat packed and loaded in no time. Professional, friendly and great value. Highly recommend.`, author: "A. S.", rating: 5 },
              { body: `Used them for a 3-bed house move from ${location.name}. Two lads, worked non-stop, nothing broken. Couldn't ask for more. Will use again when we move next year.`, author: "J. W.", rating: 5 },
              { body: `Quick same-day move in ${location.name}. Called at 10am, they were there by 1:30pm. Stress-free and priced very fairly. Would recommend to anyone.`, author: "K. B.", rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{r.body}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">{r.author} · {location.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={locationFaqs} />

      {/* Nearby locations */}
      {nearby.length > 0 && (
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Man and van services near {location.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-700 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  Man &amp; Van {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to move in {location.name}?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Call or WhatsApp us now for a free fixed-price quote. We cover {location.postcode} every day of the week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
