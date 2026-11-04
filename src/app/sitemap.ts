import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/seo/site-config";
import { FEATURE_SLUGS } from "@/components/features/feature-details";
import { PUBLISHED_SOLUTION_SLUGS } from "@/components/solutions/solution-details/solution-details-data";
import { PUBLISHED_THEME_SLUGS } from "@/components/themes/themes-data";
import { PUBLISHED_INTEGRATION_SLUGS } from "@/components/integrations/integrations-data";
import { getPublishedBlogPosts } from "@/lib/cms/content-service";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 1. Core indexable public marketing routes
  const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/features", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.8, changeFrequency: "weekly" },
    { path: "/themes", priority: 0.8, changeFrequency: "weekly" },
    { path: "/integrations", priority: 0.8, changeFrequency: "weekly" },
    { path: "/demo-stores", priority: 0.8, changeFrequency: "weekly" },
    { path: "/white-label-apps", priority: 0.8, changeFrequency: "weekly" },
    { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/help", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/start", priority: 0.9, changeFrequency: "monthly" },
    { path: "/register", priority: 0.9, changeFrequency: "monthly" },
    { path: "/checkout", priority: 0.8, changeFrequency: "monthly" },
    { path: "/login", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.4, changeFrequency: "monthly" },
    { path: "/refund-policy", priority: 0.4, changeFrequency: "monthly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/acceptable-use", priority: 0.3, changeFrequency: "monthly" },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: getCanonicalUrl(r.path),
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // 2. Dynamic Feature Routes
  FEATURE_SLUGS.forEach((slug) => {
    sitemapEntries.push({
      url: getCanonicalUrl(`/features/${slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 3. Dynamic Solution Routes
  PUBLISHED_SOLUTION_SLUGS.forEach((slug) => {
    sitemapEntries.push({
      url: getCanonicalUrl(`/solutions/${slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 4. Dynamic Theme Routes
  PUBLISHED_THEME_SLUGS.forEach((slug) => {
    sitemapEntries.push({
      url: getCanonicalUrl(`/themes/${slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // 5. Dynamic Integration Routes
  PUBLISHED_INTEGRATION_SLUGS.forEach((slug) => {
    sitemapEntries.push({
      url: getCanonicalUrl(`/integrations/${slug}`),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // 6. Dynamic Published Blog Articles
  const blogPosts = getPublishedBlogPosts();
  blogPosts.forEach((post) => {
    sitemapEntries.push({
      url: getCanonicalUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedAt || lastModified),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
