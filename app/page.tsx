import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import AreasGrid from "@/components/sections/AreasGrid";
import PricingTable from "@/components/sections/PricingTable";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import QuoteForm from "@/components/sections/QuoteForm";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

const homeFaqs = [
  { question: "How much does a man and van cost in Manchester?", answer: "A man and van in Manchester costs from £30–£49 per hour. Most flat moves are £79–£149 as a fixed price. House moves from £249. We agree the price before starting." },
  { question: "Do you offer same-day removals?", answer: "Yes. Call before noon and we'll aim to get a crew to you the same day across Greater Manchester. No extra charge for same-day bookings." },
  { question: "Are you insured?", answer: "Yes. Every job includes goods in transit insurance and public liability insurance. Your belongings are fully covered." },
  { question: "Which areas of Manchester do you cover?", answer: "We cover all of Greater Manchester — Manchester city centre, Salford, Bury, Rochdale, Oldham, Tameside, Stockport, Trafford, Bolton and Wigan, plus all suburban towns." },
  { question: "Can you pack for us?", answer: "Yes. We offer a full packing service using professional double-walled boxes, wardrobe boxes and bubble wrap. Add it to your booking." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <AreasGrid />
      <PricingTable />
      <Testimonials />
      <FAQSection items={homeFaqs} />
      <QuoteForm />
      <FinalCTA />
    </>
  );
}
