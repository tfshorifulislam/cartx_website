import { Metadata } from "next";
import { LoginView } from "@/components/auth/login-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl, SITE_CONFIG } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/login");

export const metadata: Metadata = {
  title: "Log In to Your Store Account | CartX",
  description:
    "Log in to your CartX merchant administration portal to manage products, inventory, orders, courier booking, and online storefront checkouts.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Log In to Your Store Account | CartX",
    description:
      "Log in to your CartX merchant administration portal to manage products, inventory, orders, courier booking, and online storefront checkouts.",
    url: canonical,
    type: "website",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "CartX Merchant Portal Login",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Log In to Your Store Account | CartX",
    description:
      "Log in to your CartX merchant administration portal to manage products, inventory, orders, courier booking, and online storefront checkouts.",
    site: SITE_CONFIG.twitterHandle,
  },
};

export default function LoginPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Log In", item: "/login" },
        ]}
      />
      <LoginView />
    </>
  );
}

