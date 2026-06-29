"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Star, Shield, Clock, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              {SITE.rating.value} stars · {SITE.rating.count}+ reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Manchester's Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Trusted
            </span>{" "}
            Man &amp; Van
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            Professional removal service across all of Greater Manchester. House moves, office relocations, student removals and same-day collection. Fully insured. Fixed prices. 7 days a week.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
            >
              Instant Quote
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: Shield, text: "Fully Insured" },
              { icon: Clock, text: "Same Day Available" },
              { icon: CheckCircle, text: "Fixed Prices" },
              { icon: CheckCircle, text: "No Hidden Fees" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats card */}
        <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 hidden md:block">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
            <div className="grid grid-cols-3 gap-6 divide-x divide-white/20">
              {[
                { value: "2,500+", label: "Moves Completed" },
                { value: "4.9★", label: "Average Rating" },
                { value: "7 Days", label: "We Operate" },
              ].map(({ value, label }) => (
                <div key={label} className="px-4 first:pl-0 last:pr-0 text-center">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
