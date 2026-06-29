"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="flex">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-4 transition-colors"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href={SITE.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-4 transition-colors"
          aria-label={`Call ${SITE.phone}`}
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </div>
  );
}
