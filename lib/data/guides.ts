export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
}

export const guides: Guide[] = [
  {
    slug: "moving-checklist",
    title: "The Ultimate Moving Checklist for Greater Manchester (2025)",
    shortTitle: "Moving Checklist",
    description:
      "A complete week-by-week moving checklist for house moves in Manchester. From 8 weeks before moving day to settling in — every task covered.",
    publishedAt: "2024-09-01",
    updatedAt: "2025-01-10",
    readTime: "12 min read",
    category: "Planning",
  },
  {
    slug: "house-removal-cost",
    title: "How Much Does a House Removal Cost in Manchester? (2025 Prices)",
    shortTitle: "House Removal Costs",
    description:
      "A transparent guide to house removal costs in Manchester. Property size, distance, crew size, extras — everything that affects the price explained.",
    publishedAt: "2024-09-01",
    updatedAt: "2025-01-10",
    readTime: "10 min read",
    category: "Pricing",
  },
  {
    slug: "packing-guide",
    title: "How to Pack for a House Move: The Complete Packing Guide",
    shortTitle: "Packing Guide",
    description:
      "Step-by-step packing guide for house moves. Room-by-room instructions, materials list, packing tips and what not to pack with your removal firm.",
    publishedAt: "2024-09-01",
    updatedAt: "2025-01-10",
    readTime: "11 min read",
    category: "Tips",
  },
  {
    slug: "student-moving-guide",
    title: "Student Moving Guide Manchester: Everything You Need to Know",
    shortTitle: "Student Moving Guide",
    description:
      "Complete guide for students moving in Manchester. Best student areas, moving timeline, budget tips, storage options and how to find an affordable man and van.",
    publishedAt: "2024-09-01",
    updatedAt: "2025-01-10",
    readTime: "9 min read",
    category: "Student",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
