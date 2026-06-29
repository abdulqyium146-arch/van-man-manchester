import { Shield, Star, Clock, Banknote, Phone, CheckCircle } from "lucide-react";

const signals = [
  { icon: Shield, title: "Fully Insured", body: "Goods in transit + public liability on every job" },
  { icon: Star, title: "4.9★ Rating", body: "214 verified five-star reviews on Google" },
  { icon: Clock, title: "Same Day Available", body: "Call before noon for same-day moves" },
  { icon: Banknote, title: "Fixed Prices", body: "No hidden extras. Price agreed before we start." },
  { icon: Phone, title: "7 Days a Week", body: "Mon–Sun, 7am–8pm. Including bank holidays." },
  { icon: CheckCircle, title: "No Cancellation Fee", body: "Cancel or reschedule with 24 hours notice" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Manchester removal service you can trust</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {signals.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
