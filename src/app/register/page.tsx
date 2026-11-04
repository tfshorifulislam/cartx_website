import { Metadata } from "next";
import { RegisterView } from "@/components/auth/register-view";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { getCanonicalUrl, SITE_CONFIG } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/register");

export const metadata: Metadata = {
  title: "Create Your Store Account | CartX",
  description:
    "Start your 14-day free trial on CartX. Create your merchant account to begin cataloging products, configuring local payment gateways, and launching your high-converting storefront.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Create Your Store Account | CartX",
    description:
      "Start your 14-day free trial on CartX. Create your merchant account to begin cataloging products, configuring local payment gateways, and launching your high-converting storefront.",
    url: canonical,
    type: "website",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "CartX Merchant Account Registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Your Store Account | CartX",
    description:
      "Start your 14-day free trial on CartX. Create your merchant account to begin cataloging products, configuring local payment gateways, and launching your high-converting storefront.",
    site: SITE_CONFIG.twitterHandle,
  },
};

export default function RegisterPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Register", item: "/register" },
        ]}
      />
      <RegisterView />
    </>
  );
}

