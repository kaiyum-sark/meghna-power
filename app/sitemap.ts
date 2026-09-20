import type { MetadataRoute } from "next";
import { productSlugs } from "./products/data";

const BASE_URL = "https://meghnapower.biz";

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
