import { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo/site-config";
import { TermsContent } from "./terms-content";

const canonical = getCanonicalUrl("/terms");

export const metadata: Metadata = {
  title: "Terms & Conditions | CartX Platform Agreement",
  description:
    "Review the Terms and Conditions governing merchant store creation, subscription billing, zero commission commitments, and acceptable use of the CartX platform.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Terms & Conditions | CartX Platform Agreement",
    description:
      "Review the Terms and Conditions governing merchant store creation, subscription billing, zero commission commitments, and acceptable use of the CartX platform.",
    url: canonical,
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
