import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/utils/url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    // Add more URLs here
  ];
}
