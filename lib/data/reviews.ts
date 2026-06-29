export interface Review {
  author: string;
  location: string;
  rating: number;
  body: string;
  date: string;
  service: string;
}

export const reviews: Review[] = [
  {
    author: "Sarah M.",
    location: "Radcliffe",
    rating: 5,
    body: "Absolutely brilliant service. The lads were on time, careful with all my furniture and had the whole move done in 3 hours. Would highly recommend to anyone in Radcliffe or Bury.",
    date: "2024-11-12",
    service: "House Removals",
  },
  {
    author: "James T.",
    location: "Heywood",
    rating: 5,
    body: "Used them to move from Heywood to Middleton. Two lads, big van, very professional. Not a scratch on anything. Great price too — much cheaper than the big removal firms.",
    date: "2024-10-28",
    service: "House Removals",
  },
  {
    author: "Priya K.",
    location: "Eccles",
    rating: 5,
    body: "Needed a same-day move and they came through. Called at 9am and they were at my door by 1pm. Incredible service — very grateful. Will use again.",
    date: "2024-12-03",
    service: "Same Day Removals",
  },
  {
    author: "David W.",
    location: "Whitefield",
    rating: 5,
    body: "Moved our 3-bed house from Whitefield to Bury. The team were professional, friendly and fast. They even disassembled and reassembled all the flat-pack furniture. 10/10.",
    date: "2024-09-15",
    service: "House Removals",
  },
  {
    author: "Rachel B.",
    location: "Ashton-under-Lyne",
    rating: 5,
    body: "Student move from Ashton to Fallowfield. Reasonably priced, fast and the guys were really helpful. Made the whole thing stress-free. Definitely recommending to my housemates.",
    date: "2024-08-20",
    service: "Student Removals",
  },
  {
    author: "Mohammed A.",
    location: "Middleton",
    rating: 5,
    body: "Office move — 15 desks from Middleton to Manchester city centre on a Saturday. Zero disruption, everything labelled correctly and set up exactly how we wanted. Outstanding.",
    date: "2024-11-30",
    service: "Office Removals",
  },
  {
    author: "Gemma L.",
    location: "Atherton",
    rating: 5,
    body: "Used them to deliver a sofa I bought from Facebook Marketplace. Collected from Bolton and delivered to my house in Atherton. Quick, clean and really good value.",
    date: "2024-10-05",
    service: "Furniture Delivery",
  },
  {
    author: "Steve H.",
    location: "Leigh",
    rating: 5,
    body: "Second time using Man and Van Manchester. First for a flat move, second for an office move. Both times excellent. Reliable, professional and always on time.",
    date: "2024-12-10",
    service: "Office Removals",
  },
  {
    author: "Kerry F.",
    location: "Walkden",
    rating: 5,
    body: "Really impressed. The team rang 30 minutes before arrival, came fully prepared with blankets and tape, and treated everything like it was their own. Best removal team I've used.",
    date: "2024-09-22",
    service: "House Removals",
  },
  {
    author: "Tom R.",
    location: "Horwich",
    rating: 4,
    body: "Good service overall. The lads worked hard and were polite. Move took slightly longer than quoted but they didn't charge extra which was fair. Would use again.",
    date: "2024-10-18",
    service: "House Removals",
  },
];
