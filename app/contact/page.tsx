import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = siteMetadata({
  title: "Contact Us | Man and Van Manchester | Get a Free Quote",
  description: "Contact Man and Van Manchester for a free removal quote. Call, WhatsApp or fill in our online form. We respond within 2 hours. 7 days a week across Greater Manchester.",
  alternates: { canonical: `${SITE.url}/contact` },
});

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Get in touch
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Call, WhatsApp or fill in the form and we'll give you a fixed price within 2 hours. No obligation. No hard sell.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <a
              href={SITE.phoneTel}
              className="flex items-start gap-4 p-5 bg-blue-600 rounded-2xl text-white hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold mb-0.5">Call Us</p>
                <p className="text-blue-100 text-sm">{SITE.phone}</p>
                <p className="text-blue-200 text-xs mt-1">Fastest response</p>
              </div>
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-green-500 rounded-2xl text-white hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold mb-0.5">WhatsApp</p>
                <p className="text-green-100 text-sm">Message us 24/7</p>
                <p className="text-green-200 text-xs mt-1">Reply within hours</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl text-gray-900 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <Mail className="w-6 h-6 shrink-0 text-gray-600" />
              <div>
                <p className="font-bold mb-0.5">Email</p>
                <p className="text-gray-500 text-sm">{SITE.email}</p>
                <p className="text-gray-400 text-xs mt-1">Reply within 4 hours</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl text-gray-900 border border-gray-200">
              <Clock className="w-6 h-6 shrink-0 text-gray-600" />
              <div>
                <p className="font-bold mb-0.5">Opening Hours</p>
                <p className="text-gray-500 text-sm">Mon–Sun</p>
                <p className="text-gray-700 text-sm font-medium">7am – 8pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <QuoteForm />
    </div>
  );
}
