import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Ready to Move?</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
          Get your free quote in under 2 minutes
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Call or WhatsApp us now. We'll give you a fixed price — no obligation, no hidden fees. Same-day availability across Greater Manchester.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-colors shadow-lg shadow-blue-600/20"
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
        <p className="text-gray-600 text-sm mt-8">
          Mon–Sun · 7am–8pm · Fully Insured · Fixed Prices · Greater Manchester
        </p>
      </div>
    </section>
  );
}
