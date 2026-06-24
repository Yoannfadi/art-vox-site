import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/biographie", "/sarah-sanders", "/thomas-gerome", "/clara-poirieux"],
    },
    sitemap: "https://www.artvox.io/sitemap.xml",
    host: "https://www.artvox.io",
  };
}
