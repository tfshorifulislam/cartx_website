import { Metadata } from "next";
import { CheckoutView } from "@/components/checkout";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl, SITE_CONFIG } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/checkout");

export const metadata: Metadata = {
  title: "Checkout — Initialize Your Store Account | CartX",
  description:
    "Complete your merchant onboarding and start your 14-day free trial on CartX. Zero credit card required today.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Checkout — Initialize Your Store Account | CartX",
    description:
      "Complete your merchant onboarding and start your 14-day free trial on CartX. Zero credit card required today.",
    url: canonical,
    type: "website",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "CartX Store Checkout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout — Initialize Your Store Account | CartX",
    description:
      "Complete your merchant onboarding and start your 14-day free trial on CartX.",
    site: SITE_CONFIG.twitterHandle,
  },
};

export default function CheckoutPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Pricing", item: "/pricing" },
          { name: "Checkout", item: "/checkout" },
        ]}
      />
      <CheckoutView />
    </>
  );
}

