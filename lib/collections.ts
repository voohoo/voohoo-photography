export type CollectionImage = {
  file: string;
  width: number;
  height: number;
};

export type Collection = {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  cover: number;
  images: CollectionImage[];
};

export const collections: Collection[] = [
  {
    slug: "big-sur",
    title: "Big Sur",
    location: "Central California Coast",
    year: "2025",
    description:
      "Sea caves and stacked cliffs under a moonless sky, where the Pacific carves through stone and the Milky Way fills in the rest.",
    cover: 0,
    images: [
      { file: "DSCF2570.jpg", width: 1080, height: 1620 },
      { file: "DSCF2595.jpg", width: 1080, height: 1620 },
    ],
  },
  {
    slug: "mt-tamalpais",
    title: "Mt Tamalpais",
    location: "Marin County, California",
    year: "2025",
    description:
      "Above the fog line at dusk, where the marine layer settles into the valleys and the ridgeline holds the last color of the day.",
    cover: 0,
    images: [
      { file: "DSCF1669.jpg", width: 1080, height: 1669 },
      { file: "DSCF1679.jpg", width: 1080, height: 1574 },
    ],
  },
  {
    slug: "pacific-northwest",
    title: "Pacific Northwest",
    location: "Washington & Oregon",
    year: "2025",
    description:
      "Mist, stone, and shoreline across the Cascades and the coast — quiet mountain passes, fog-bound beaches, and old-growth understory.",
    cover: 7,
    images: [
      { file: "DSCF2127.jpg", width: 1080, height: 1620 },
      { file: "DSCF2161.jpg", width: 1080, height: 1620 },
      { file: "DSCF2168.jpg", width: 1080, height: 1620 },
      { file: "DSCF2180.jpg", width: 1080, height: 1620 },
      { file: "DSCF2188.jpg", width: 1080, height: 1620 },
      { file: "DSCF2193.jpg", width: 1080, height: 1620 },
      { file: "DSCF2203.jpg", width: 1080, height: 1620 },
      { file: "DSCF2204.jpg", width: 1080, height: 1620 },
      { file: "DSCF2205.jpg", width: 1080, height: 1620 },
      { file: "DSCF2210.jpg", width: 1080, height: 1620 },
      { file: "DSCF2213.jpg", width: 1080, height: 1620 },
      { file: "DSCF2216.jpg", width: 1080, height: 1620 },
      { file: "DSCF2218.jpg", width: 1080, height: 1620 },
      { file: "DSCF2224.jpg", width: 1080, height: 1620 },
      { file: "DSCF2226.jpg", width: 1080, height: 1620 },
      { file: "DSCF2230.jpg", width: 1080, height: 1620 },
      { file: "DSCF2241.jpg", width: 1080, height: 1620 },
      { file: "DSCF2248.jpg", width: 1080, height: 1620 },
      { file: "DSCF2252.jpg", width: 1080, height: 1620 },
      { file: "DSCF2256.jpg", width: 1080, height: 1620 },
      { file: "DSCF2267.jpg", width: 1080, height: 1620 },
      { file: "DSCF2273.jpg", width: 1080, height: 1620 },
      { file: "DSCF2282.jpg", width: 1080, height: 1620 },
      { file: "DSCF2307.jpg", width: 1080, height: 1620 },
      { file: "DSCF2320.jpg", width: 1080, height: 1620 },
      { file: "DSCF2331.jpg", width: 1080, height: 1620 },
      { file: "DSCF2333.jpg", width: 1080, height: 1620 },
      { file: "DSCF2339.jpg", width: 1080, height: 1350 },
      { file: "DSCF2342.jpg", width: 1080, height: 1350 },
      { file: "DSCF2359.jpg", width: 1080, height: 1620 },
      { file: "DSCF2368.jpg", width: 1080, height: 1620 },
      { file: "DSCF2374.jpg", width: 1080, height: 1620 },
      { file: "DSCF2380.jpg", width: 1080, height: 1620 },
      { file: "DSCF2382.jpg", width: 1080, height: 1620 },
      { file: "DSCF2384.jpg", width: 1080, height: 1620 },
      { file: "DSCF2387.jpg", width: 1080, height: 1620 },
      { file: "DSCF2389.jpg", width: 1620, height: 1080 },
      { file: "DSCF2403.jpg", width: 1080, height: 1620 },
      { file: "DSCF2406.jpg", width: 1620, height: 1080 },
      { file: "DSCF2408.jpg", width: 1080, height: 1620 },
      { file: "DSCF2409.jpg", width: 1620, height: 1080 },
      { file: "DSCF2415.jpg", width: 1620, height: 1080 },
      { file: "DSCF2419.jpg", width: 1080, height: 1620 },
      { file: "DSCF2420.jpg", width: 1620, height: 1080 },
      { file: "DSCF2421.jpg", width: 1080, height: 1620 },
      { file: "DSCF2422.jpg", width: 1080, height: 1620 },
      { file: "DSCF2423.jpg", width: 1620, height: 1080 },
      { file: "DSCF2424.jpg", width: 1080, height: 1620 },
      { file: "DSCF2427.jpg", width: 1620, height: 1080 },
      { file: "DSCF2428.jpg", width: 1080, height: 1620 },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function imagePath(slug: string, file: string): string {
  return `/images/${slug}/${file}`;
}
