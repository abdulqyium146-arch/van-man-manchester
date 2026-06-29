import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/data/locations";
import { siteMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/config";

export const metadata: Metadata = siteMetadata({
  title: "Man and Van Locations | Greater Manchester | All Areas Covered",
  description: "Man and van removal service covering all of Greater Manchester. Click your town or suburb for local pricing, availability and reviews.",
  alternates: { canonical: `${SITE.url}/locations` },
});

const boroughs: Record<string, string[]> = {
  Bury: ["Radcliffe", "Whitefield"],
  Rochdale: ["Heywood", "Middleton", "Littleborough", "Royton"],
  Wigan: ["Atherton", "Leigh", "Tyldesley", "Golborne", "Westhoughton"],
  Bolton: ["Horwich"],
  Oldham: ["Failsworth", "Chadderton"],
  Salford: ["Walkden", "Eccles", "Irlam", "Swinton"],
  Tameside: ["Mossley", "Ashton-under-Lyne"],
};

export default function LocationsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Service Areas</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Man and van across Greater Manchester
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We cover all of Greater Manchester. Click your area for local pricing, reviews and availability.
          </p>
        </div>

        {/* All locations grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex items-start gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl p-4 transition-all"
            >
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">{loc.name}</p>
                <p className="text-xs text-gray-400">{loc.postcode} · {loc.area}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Borough breakdown */}
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by borough</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(boroughs).map(([borough, towns]) => (
              <div key={borough} className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">{borough}</h3>
                <ul className="space-y-2">
                  {towns.map((town) => {
                    const loc = locations.find((l) => l.name === town);
                    return loc ? (
                      <li key={town}>
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                        >
                          Man &amp; Van {town}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Don't see your area?</h2>
          <p className="text-blue-100 mb-6">We likely cover it. Call us and we'll confirm within minutes.</p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
