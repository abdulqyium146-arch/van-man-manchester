"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  fromPostcode: z.string().min(3, "Please enter your current postcode"),
  toPostcode: z.string().min(3, "Please enter your destination postcode"),
  moveType: z.string().min(1, "Please select a move type"),
  moveDate: z.string().min(1, "Please select a preferred date"),
  bedrooms: z.string().min(1, "Please select property size"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Quote request:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 bg-blue-600" id="quote">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Quote request received!</h2>
          <p className="text-blue-100 text-lg">
            We'll call you back within 2 hours with your fixed price. If you need a faster response, call us directly on{" "}
            <a href="tel:07438447286" className="underline text-white font-semibold">07438 447286</a>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-blue-600" id="quote">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get a free instant quote</h2>
          <p className="text-blue-100">Fill in the form below and we'll call back within 2 hours with your fixed price.</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-6 sm:p-8 space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
              <input
                {...register("name")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Smith"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="07XXX XXX XXX"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Moving From (Postcode) *</label>
              <input
                {...register("fromPostcode")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="M26 1AB"
              />
              {errors.fromPostcode && <p className="text-red-500 text-xs mt-1">{errors.fromPostcode.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Moving To (Postcode) *</label>
              <input
                {...register("toPostcode")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="M1 1AE"
              />
              {errors.toPostcode && <p className="text-red-500 text-xs mt-1">{errors.toPostcode.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Move Type *</label>
              <select
                {...register("moveType")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select...</option>
                <option>House Removal</option>
                <option>Office Removal</option>
                <option>Student Move</option>
                <option>Furniture Delivery</option>
                <option>Same Day Move</option>
              </select>
              {errors.moveType && <p className="text-red-500 text-xs mt-1">{errors.moveType.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Size *</label>
              <select
                {...register("bedrooms")}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select...</option>
                <option>Studio / 1 Bed</option>
                <option>2 Bedroom</option>
                <option>3 Bedroom</option>
                <option>4 Bedroom</option>
                <option>5+ Bedroom</option>
                <option>Office</option>
              </select>
              {errors.bedrooms && <p className="text-red-500 text-xs mt-1">{errors.bedrooms.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date *</label>
              <input
                {...register("moveDate")}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.moveDate && <p className="text-red-500 text-xs mt-1">{errors.moveDate.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Information</label>
            <textarea
              {...register("message")}
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Parking, access issues, special items, stairs, lifts, storage needed..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors text-base"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Get My Free Quote →"
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            We'll call you back within 2 hours with your fixed price. No obligation.
          </p>
        </form>
      </div>
    </section>
  );
}
