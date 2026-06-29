import Link from "next/link";
import { Home, Building2, GraduationCap, Sofa, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    name: "House Removals",
    href: "/services/house-removals",
    description: "Full house removal service across Greater Manchester. Studio flats to 5-bed homes. Packing service available.",
    price: "From £149",
    highlight: "Most Popular",
  },
  {
    icon: Building2,
    name: "Office Removals",
    href: "/services/office-removals",
    description: "Minimal downtime. We move around your schedule — evenings and weekends. 5 desks to 50-desk operations.",
    price: "From £299",
    highlight: null,
  },
  {
    icon: GraduationCap,
    name: "Student Removals",
    href: "/services/student-removals",
    description: "Affordable student moves across Manchester. All universities covered. Student ID discount available.",
    price: "From £79",
    highlight: "Best Value",
  },
  {
    icon: Sofa,
    name: "Furniture Delivery",
    href: "/services/furniture-removals",
    description: "Single item or full delivery. Marketplace pickups, IKEA assembly, two-man carry. No job too small.",
    price: "From £49",
    highlight: null,
  },
  {
    icon: Zap,
    name: "Same Day Removals",
    href: "/services/same-day-removals",
    description: "Emergency moves covered. Call before noon for same-day service. No extra charge for last-minute bookings.",
    price: "From £69",
    highlight: "Available Today",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Removal services for every need
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From a single sofa to a full five-bedroom house — we handle moves of every shape and size across Greater Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, name, href, description, price, highlight }) => (
            <Link
              key={href}
              href={href}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col gap-4"
            >
              {highlight && (
                <span className="absolute top-4 right-4 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {highlight}
                </span>
              )}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="font-bold text-gray-900">{price}</span>
                <span className="flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Get quote <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
