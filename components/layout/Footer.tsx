import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/config";
import { locations } from "@/lib/data/locations";

const serviceLinks = [
  { label: "House Removals", href: "/services/house-removals" },
  { label: "Office Removals", href: "/services/office-removals" },
  { label: "Student Removals", href: "/services/student-removals" },
  { label: "Furniture Delivery", href: "/services/furniture-removals" },
  { label: "Same Day Removals", href: "/services/same-day-removals" },
];

const quickLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "All Locations", href: "/locations" },
];

export default function Footer() {
  const featuredLocations = locations.slice(0, 10);

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm">
                MV
              </span>
              <span className="font-bold text-white text-base">
                Man &amp; Van Manchester
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Professional removal services across Greater Manchester. Fully insured. 7 days a week.
            </p>
            <div className="space-y-3">
              <a href={SITE.phoneTel} className="flex items-center gap-3 text-sm text-white hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                Greater Manchester, UK
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                Mon–Sun: 7am – 8pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm mt-8 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-4">Areas We Cover</h3>
            <div className="grid grid-cols-2 gap-2">
              {featuredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="text-sm hover:text-white hover:underline transition-colors"
                >
                  Man &amp; Van {loc.name}
                </Link>
              ))}
            </div>
            <Link href="/locations" className="inline-block mt-4 text-sm text-blue-400 hover:text-blue-300 underline">
              View all {locations.length} locations →
            </Link>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Fully Insured", "Same Day Available", "Fixed Prices", "No Hidden Fees", "5★ Rated"].map((badge) => (
                <span key={badge} className="text-xs border border-gray-700 text-gray-400 px-2.5 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
            <Link href={SITE.url} className="hover:text-gray-400">
              manandvanmanchester.org.uk
            </Link>
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
