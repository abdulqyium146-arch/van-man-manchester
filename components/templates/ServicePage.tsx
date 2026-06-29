import Link from "next/link";
import { Phone, MessageCircle, CheckCircle, Star, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data/services";
import { SITE } from "@/lib/config";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { locations } from "@/lib/data/locations";

export default function ServicePage({ service }: { service: Service }) {
  const featuredLocations = locations.slice(0, 12);

  return (
    <>
      <JsonLd data={servicePageSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: service.name, url: `${SITE.url}/services/${service.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              {service.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Manchester
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">{service.tagline}</p>

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
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Professional {service.name.toLowerCase()} across Greater Manchester
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">What's included</h3>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.phoneTel}
                className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-4xl font-black text-blue-100 mb-3">{step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            {service.name} prices in Manchester
          </h2>
          <p className="text-gray-500 text-center mb-10">Fixed prices. Agreed before we start. No hidden extras.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {service.pricing.map(({ label, price, description }) => (
              <div key={label} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-sm font-medium text-gray-500 mb-2">{label}</p>
                <p className="text-3xl font-black text-gray-900 mb-1">{price}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-400">
            Need a custom quote?{" "}
            <a href={SITE.phoneTel} className="text-blue-600 underline">Call us</a> or{" "}
            <a href={SITE.whatsapp} className="text-blue-600 underline">WhatsApp</a> — we'll respond within minutes.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {service.name} across Greater Manchester
          </h2>
          <p className="text-gray-500 mb-8">Click your area for local pricing and availability.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-3.5 py-3 transition-all"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                  {service.shortName} {loc.name}
                </span>
                <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-blue-500 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={service.faqs} />

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Book your {service.name.toLowerCase()} today
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Call or WhatsApp us now for a free fixed-price quote. 7 days a week across all of Greater Manchester.
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
