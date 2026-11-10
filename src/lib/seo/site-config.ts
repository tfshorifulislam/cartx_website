export const SITE_CONFIG = {
  name: "CartX",
  legalName: "WebQ LTD",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cartx.com",
  ogImage: "https://cartx.com/og-image.png",
  twitterHandle: "@CartXCommerce",
  supportEmail: "support@cartx.com",
  defaultLocale: "en",
  locales: ["en", "bn"],
  titleTemplate: "%s | CartX",
  defaultTitle: "CartX — Build and Manage Your Online Store",
  defaultDescription:
    "Explore CartX, an e-commerce SaaS platform designed to help businesses manage online stores, products, orders, payments and delivery workflows.",
};

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath === "/" ? "" : cleanPath}`;
}
