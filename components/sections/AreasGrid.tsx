import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";

export default function AreasGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Service Areas</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Man and van across Greater Manchester
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We cover the whole of Greater Manchester including all suburban towns and boroughs. Click your area for local pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex items-center gap-2.5 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-3.5 py-3 transition-all duration-150"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight">{loc.name}</span>
              <span className="ml-auto text-xs text-gray-400 group-hover:text-blue-500">{loc.postcode}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Don't see your area? We likely cover it — call us to confirm.
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            View all service areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
