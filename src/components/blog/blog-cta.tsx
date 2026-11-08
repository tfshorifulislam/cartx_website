"use client";

import React from "react";
import { Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function BlogCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <StandardCTASection
      ariaLabel="Start Your Store from the Blog"
      className={className}
      badge={{
        icon: Rocket,
        text: isBn ? "আজই শুরু করুন" : "Launch Your Online Store",
      }}
      titlePlain={
        isBn ? "পড়া শেষ? এবার ব্যবসা শুরু করুন" : "Ready to Apply These Insights?"
      }
      titleHighlight={
        isBn
          ? "কার্টএক্স দিয়ে গড়ে তুলুন আধুনিক অনলাইন স্টোর"
          : "Build Your Online Store With CartX Today"
      }
      description={
        isBn
          ? "বিকাশ, নগদ, কার্ড পেমেন্ট এবং স্বয়ংক্রিয় কুরিয়ার ট্র্যাকিং সহ সহজ ও নির্ভরযোগ্য ইকমার্স প্ল্যাটফর্মে আপনার ব্যবসা পরিচালনা করুন।"
          : "Join online merchants across Bangladesh. Set up products, local payment gateways, and courier delivery dispatch in minutes."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "বিনামূল্যে স্টোর শুরু করুন" : "Start Your Free Store",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text: isBn ? "প্ল্যান ও প্রাইসিং দেখুন" : "View Pricing Plans",
      }}
    />
  );
}
