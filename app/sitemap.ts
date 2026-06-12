import type { MetadataRoute } from "next";

const BASE_URL = "https://meghnapower.biz";

const productSlugs: string[] = [
  "power-transformer",
  "ct-pt-unit",
  "auto-pfi-panel",
  "lt-ht-panel",
  "industrial-exhaust-fan",
  "solar-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const productEntries: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...productEntries,
  ];
}
