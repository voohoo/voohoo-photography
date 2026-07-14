export type Collection = {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  cover: number;
};

export const collections: Collection[] = [
  {
    slug: "big-sur",
    title: "Big Sur",
    location: "Central California Coast",
    year: "2025",
    description:
      "Sea caves and stacked cliffs under a moonless sky, where the Pacific carves through stone and the Milky Way fills in the rest.",
    cover: 1,
  },
  {
    slug: "mt-tamalpais",
    title: "Mt Tamalpais",
    location: "Marin County, California",
    year: "2025",
    description:
      "Above the fog line at dusk, where the marine layer settles into the valleys and the ridgeline holds the last color of the day.",
    cover: 1,
  },
  {
    slug: "pacific-northwest",
    title: "Pacific Northwest",
    location: "Washington & Oregon",
    year: "2025",
    description:
      "Mist, stone, and shoreline across the Cascades and the coast — quiet mountain passes, fog-bound beaches, and old-growth understory.",
    cover: 50,
  },
  {
    slug: "croatia",
    title: "Croatia",
    location: "Dubrovnik, Korčula, Split, Zadar, Plitvice Lakes",
    year: "2025",
    description:
      "Beautiful beaches, ancient cities, and natural wonders.",
    cover: 36,
  },
  {
    slug: "ocma",
    title: "OCMA",
    location: "UC Irvine Langson Orange County Museum of Art | Costa Mesa",
    year: "2025",
    description:
      "Finding simple lines and shapes in the architecture.",
    cover: 1,
  },
  {
    slug: "auto-show-in-petaluma",
    title: "Auto Show in Petaluma",
    location: "Petaluma, California",
    year: "2025",
    description:
      "I like Posches and Lambos.",
    cover: 4,
  }
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
