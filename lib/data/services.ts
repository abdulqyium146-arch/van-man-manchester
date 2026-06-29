export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  process: { step: string; title: string; description: string }[];
  pricing: { label: string; price: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "house-removals",
    name: "House Removals",
    shortName: "House Removals",
    icon: "Home",
    tagline: "Full house removal service across Greater Manchester",
    description:
      "Our house removal service covers every type of property across Greater Manchester — from one-bed flats to large five-bedroom family homes. We handle the heavy lifting, the packing, the transport and the set-up so you can focus on your new home.",
    features: [
      "Professional packing service available",
      "Furniture disassembly and reassembly",
      "Fully insured goods in transit",
      "Wardrobe and specialist boxes provided",
      "Multiple van sizes — 2 to 6 crew",
      "Weekend and evening moves available",
      "Free quote within 2 hours",
    ],
    process: [
      { step: "01", title: "Free Quote", description: "Call or WhatsApp us with your move date, current address and destination. We'll give you a fixed price within 2 hours — no hidden extras." },
      { step: "02", title: "Confirmation", description: "We confirm your booking in writing with a full breakdown. You'll have a direct number for your lead mover." },
      { step: "03", title: "Moving Day", description: "Our team arrives on time in clean, well-equipped vans. We load carefully, protect your furniture and transport everything safely." },
      { step: "04", title: "Settled In", description: "We unload, position furniture to your instructions and remove all packing materials. Done — enjoy your new home." },
    ],
    pricing: [
      { label: "Studio / 1 Bed", price: "From £149", description: "1 van, 1 driver + 1 helper. Ideal for small flats and single rooms." },
      { label: "2–3 Bed House", price: "From £249", description: "1–2 vans, 2 crew. Covers most standard family moves." },
      { label: "4–5 Bed House", price: "From £399", description: "2 vans, 3–4 crew. Full day move with packing available." },
      { label: "Long Distance", price: "From £349", description: "Fixed price. Greater Manchester to anywhere in the UK." },
    ],
    faqs: [
      { question: "How much does a house removal in Manchester cost?", answer: "A studio or 1-bed flat move typically starts from £149. A 2–3 bedroom house removal starts from £249. Prices depend on property size, distance and access. We always give a fixed price before the job — no surprises." },
      { question: "Do you provide packing materials?", answer: "Yes. We supply double-walled boxes, wardrobe boxes, bubble wrap, packing tape and furniture blankets. Full packing service is also available if you'd rather leave everything to us." },
      { question: "Are you insured for house removals?", answer: "Yes. We carry full goods in transit insurance and public liability insurance on every job. Your belongings are fully covered throughout your move." },
      { question: "Can you move on weekends?", answer: "Absolutely. We operate 7 days a week including weekends and bank holidays. Weekend slots are popular — book early to secure your date." },
      { question: "Do you disassemble and reassemble furniture?", answer: "Yes. Our team will disassemble flat-pack furniture, beds, wardrobes and large items before loading and reassemble everything at your new property." },
      { question: "How far in advance should I book?", answer: "For weekdays, 1–2 weeks is usually fine. For weekends and month-end moves (especially end of month Friday), 3–4 weeks in advance is recommended." },
    ],
  },
  {
    slug: "office-removals",
    name: "Office Removals",
    shortName: "Office Removals",
    icon: "Building2",
    tagline: "Minimal downtime. Maximum care. Manchester office moves done right.",
    description:
      "We specialise in office relocations across Greater Manchester. Whether you're moving a 5-person startup or a 50-desk operation, our team works around your schedule — evenings and weekends — to ensure zero business disruption.",
    features: [
      "Out-of-hours and weekend scheduling",
      "IT equipment and server room moves",
      "Furniture labelling system",
      "Archive box packing and labelling",
      "Secure document handling",
      "Disconnect and reconnect assistance",
      "Full risk assessment on request",
    ],
    process: [
      { step: "01", title: "Survey", description: "We visit your office (or do a video survey) to assess volume, access, lift capacity and any fragile or specialist equipment." },
      { step: "02", title: "Move Plan", description: "We create a detailed move plan with timings, crew requirements and a floor plan layout for your new office." },
      { step: "03", title: "Move Night/Day", description: "Our professional crew arrives, labels everything systematically, loads and transports — working to your floor plan." },
      { step: "04", title: "Set Up", description: "Furniture and equipment placed exactly where you need it. You arrive Monday morning ready to work." },
    ],
    pricing: [
      { label: "Small Office (1–5 desks)", price: "From £299", description: "Half-day move. 1 van, 2 crew." },
      { label: "Medium Office (6–20 desks)", price: "From £599", description: "Full-day move. 1–2 vans, 3 crew." },
      { label: "Large Office (21–50 desks)", price: "From £999", description: "Overnight or weekend move. Multiple vans, full crew." },
      { label: "Enterprise", price: "Custom quote", description: "Multi-phase moves, multi-site, large-scale operations." },
    ],
    faqs: [
      { question: "Can you move our office outside business hours?", answer: "Yes — in fact, we recommend it. Most of our office moves happen evenings or weekends to avoid disrupting business operations. We work 7 days a week, 7am–10pm." },
      { question: "Can you move IT equipment and servers?", answer: "Yes. Our team has experience moving IT equipment, monitors, servers and networking hardware. We recommend your IT team handles disconnection and reconnection of servers, and we transport everything safely." },
      { question: "Do you provide boxes and packing materials for offices?", answer: "Yes. We provide archive boxes, document boxes, bubble wrap, monitor bags and cable labels. Full packing service available." },
      { question: "Are you insured for office moves?", answer: "Yes. Full goods in transit and public liability insurance is included on every commercial move." },
      { question: "How long does an office move take?", answer: "A small 5-desk office typically takes 3–4 hours. A 20-desk office is usually a full day. We'll give you a precise timeline after surveying your space." },
    ],
  },
  {
    slug: "student-removals",
    name: "Student Removals",
    shortName: "Student Moves",
    icon: "GraduationCap",
    tagline: "Affordable student moves across Manchester. No van needed.",
    description:
      "Moving into halls, a student house or back home? Our student removal service is fast, affordable and designed for the chaos of student moving day. We cover all Manchester universities and student areas.",
    features: [
      "Competitive student rates",
      "Single item and part-load moves",
      "Same-day and next-day availability",
      "Storage options between terms",
      "Bed, desk and wardrobe moves",
      "Student ID discount available",
      "Covers all Manchester uni areas",
    ],
    process: [
      { step: "01", title: "Book Online or Call", description: "Tell us your collection address, destination and what needs moving. We'll give you an instant price — no fuss." },
      { step: "02", title: "We Arrive", description: "Our crew arrives at your student property on time. We do the heavy lifting — you just show us what needs moving." },
      { step: "03", title: "Move", description: "Boxes, bags, furniture — all loaded safely and transported to your new place. No waiting around." },
      { step: "04", title: "Done", description: "Everything unloaded into your new room. Enjoy the new place (and the rest of your moving budget)." },
    ],
    pricing: [
      { label: "Single Room", price: "From £79", description: "1 man + van. Under 1 hour. Ideal for room moves within Manchester." },
      { label: "Student House (1–2 beds)", price: "From £149", description: "2 crew, 1 van. Covers most standard student house moves." },
      { label: "Full Student House (3–4 beds)", price: "From £249", description: "2 crew, 1–2 vans. For larger group house moves." },
      { label: "Storage", price: "From £25/week", description: "Short or long-term storage between terms or during the summer." },
    ],
    faqs: [
      { question: "Do you offer student discounts?", answer: "Yes. Show your valid student ID and receive a discount on your move. Call us to find out the current student rate." },
      { question: "Can you move just a few boxes?", answer: "Absolutely. We offer part-load moves — you only pay for the space you use. Perfect for moving a few boxes or a single item." },
      { question: "Which areas of Manchester do you cover for student moves?", answer: "We cover all student areas including Fallowfield, Withington, Rusholme, Hulme, Salford, the Northern Quarter, Didsbury and all suburbs." },
      { question: "Can you store my stuff over summer?", answer: "Yes. We offer student storage from £25 per week. Perfect for students heading home between academic years." },
      { question: "Do you move students in and out of halls?", answer: "Yes. We work with students moving into and out of halls across Manchester, Salford and MMU. Book early for September moves as it's our busiest period." },
    ],
  },
  {
    slug: "furniture-removals",
    name: "Furniture Removals",
    shortName: "Furniture Delivery",
    icon: "Sofa",
    tagline: "Single item or full furniture delivery across Greater Manchester.",
    description:
      "Need a sofa delivered? A wardrobe collected from Facebook Marketplace? A bed moved between rooms? Our furniture removal service handles single items and multiple pieces across Greater Manchester — same day available.",
    features: [
      "Same-day and next-day slots",
      "Marketplace and auction pickups",
      "IKEA and flat-pack assembly",
      "Two-man carry for heavy items",
      "Stair carry included",
      "Blanket wrapping for delicate items",
      "No job too small",
    ],
    process: [
      { step: "01", title: "Tell Us What", description: "Describe the item(s) — dimensions, weight if known, collection and delivery postcode. We'll give you an immediate price." },
      { step: "02", title: "Book a Slot", description: "Choose your time slot — same day, next day or a future date. We'll confirm within minutes." },
      { step: "03", title: "We Collect", description: "Our two-man team arrives, wraps and protects your item and loads it safely." },
      { step: "04", title: "We Deliver", description: "Delivered to the room of your choice. Flat-pack assembly available on request." },
    ],
    pricing: [
      { label: "Single Item (local)", price: "From £49", description: "Sofa, bed, wardrobe, fridge. Within 5 miles." },
      { label: "2–3 Items", price: "From £89", description: "Small furniture collection. Within 10 miles." },
      { label: "Flat-pack assembly", price: "From £35", description: "IKEA, Argos, Amazon flat-pack. Per item." },
      { label: "Marketplace Pickup", price: "From £59", description: "Collect from any seller address, deliver to your home." },
    ],
    faqs: [
      { question: "Can you collect from Facebook Marketplace or eBay sellers?", answer: "Yes — this is one of our most popular services. Give us the seller's address and your delivery address and we'll handle everything." },
      { question: "Do you assemble flat-pack furniture?", answer: "Yes. We assemble all flat-pack furniture including IKEA, Argos and Amazon. Add this to your booking when you call." },
      { question: "Can you carry furniture up stairs?", answer: "Yes. Stair carry is included in our standard service. We use protective coverings on all banisters and walls." },
      { question: "Do you move pianos?", answer: "We move upright pianos. Grand pianos require specialist equipment — contact us for a custom quote." },
      { question: "How quickly can you deliver?", answer: "We often have same-day slots available. Call before noon for a same-day furniture collection or delivery in Greater Manchester." },
    ],
  },
  {
    slug: "same-day-removals",
    name: "Same Day Removals",
    shortName: "Same Day",
    icon: "Zap",
    tagline: "Emergency moves covered. Same day. Any size.",
    description:
      "Need to move today? Our same-day removal service is available 7 days a week across Greater Manchester. Whether it's an emergency move, a last-minute booking or a deadline you can't miss — we'll be there.",
    features: [
      "Available 7 days a week",
      "Call before noon — move same day",
      "All property sizes covered",
      "No extra charge for same-day",
      "Experienced rapid-response crew",
      "Fully insured",
      "WhatsApp booking available",
    ],
    process: [
      { step: "01", title: "Call Now", description: "Call or WhatsApp us with your collection address, destination and what needs moving. We'll confirm availability in minutes." },
      { step: "02", title: "Confirmed", description: "We confirm your same-day slot, crew size and fixed price immediately. No waiting — no back and forth." },
      { step: "03", title: "We Arrive", description: "Our crew is with you within hours. We load fast, carefully and professionally." },
      { step: "04", title: "Done Today", description: "Move completed the same day. Problem solved." },
    ],
    pricing: [
      { label: "Single Item", price: "From £69", description: "One item, same day, within Manchester." },
      { label: "Studio / 1 Bed", price: "From £179", description: "Same-day full flat move. 2 crew, 1 van." },
      { label: "2–3 Bed House", price: "From £299", description: "Same-day house move. Subject to slot availability." },
      { label: "Emergency Move", price: "Call for price", description: "Immediate dispatch for urgent situations." },
    ],
    faqs: [
      { question: "How do I book a same-day removal?", answer: "Call us or send a WhatsApp message. Tell us your addresses and what needs moving. We'll confirm availability and price within minutes. Same-day slots go fast — call early." },
      { question: "Is there an extra charge for same-day moves?", answer: "No. We charge the same competitive rates for same-day moves as for pre-booked jobs. No premium surcharge." },
      { question: "How late can I book for a same-day move?", answer: "Call before noon for guaranteed same-day availability. We can sometimes accommodate later calls depending on crew availability — always worth ringing." },
      { question: "Do you cover emergency situations?", answer: "Yes. We understand that sometimes moves need to happen urgently — relationship breakdowns, sudden tenancy endings, family emergencies. We handle these situations professionally and discreetly." },
      { question: "What areas do you cover for same-day moves?", answer: "We cover all of Greater Manchester for same-day moves including Manchester, Salford, Bury, Rochdale, Oldham, Tameside, Stockport, Wigan and Bolton." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
