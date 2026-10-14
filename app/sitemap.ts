import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!profile.siteUrl) return [];
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${profile.siteUrl}/en`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${profile.siteUrl}/projects/lama-credentialing`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${profile.siteUrl}/en/projects/lama-credentialing`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
