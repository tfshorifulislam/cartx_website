"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface ThemesCTAProps {
  className?: string;
}

export function ThemesCTA({ className }: ThemesCTAProps) {
  const { locale } = useLanguage();

  return (
    <StandardCTASection
      ariaLabel="Themes Call to Action"
      className={className}
      badge={{
        icon: CheckCircle2,
        text:
          locale === "bn"
            ? "১৪ দিনের ফ্রি ট্রায়াল • কোনো ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ"
            : "14-Day Free Trial • No Credit Card Required • Instant Setup",
      }}
      titlePlain={
        locale === "bn" ? "আপনার অনলাইন স্টোরের জন্য" : "Find the Perfect Design"
      }
      titleHighlight={
        locale === "bn" ? "সেরা ডিজাইন নির্বাচন করুন" : "For Your Store"
      }
      description={
        locale === "bn"
          ? "আমাদের যেকোনো থিম বেছে নিয়ে মিনিটেই চালু করুন আপনার আধুনিক অনলাইন বিজনেস। আপনার পছন্দের প্ল্যান নির্বাচন করুন।"
          : "Select any of our pre-built themes, customize your brand identity, and launch your e-commerce storefront in minutes."
      }
      primaryButton={{
        href: "/pricing",
        text: locale === "bn" ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/start",
        text: locale === "bn" ? "স্টোর শুরু করুন" : "Start Your Store",
      }}
    />
  );
}
