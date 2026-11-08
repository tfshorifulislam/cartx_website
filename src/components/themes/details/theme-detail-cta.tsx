"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeItem } from "../types";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface ThemeDetailCTAProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeDetailCTA({ theme, className }: ThemeDetailCTAProps) {
  const { locale } = useLanguage();

  return (
    <StandardCTASection
      ariaLabel="Theme Action CTA"
      className={className}
      badge={{
        icon: CheckCircle2,
        text:
          locale === "bn"
            ? "১৪ দিনের ফ্রি ট্রায়াল • কোনো ক্রেডিট কার্ড লাগবে না • সহজ সেটআপ"
            : "14-Day Free Trial • No Credit Card Required • Instant Launch",
      }}
      titlePlain={
        locale === "bn"
          ? "আজই শুরু করুন আপনার ব্যবসা"
          : "Launch Your Online Store"
      }
      titleHighlight={
        locale === "bn"
          ? `${theme.name.bn} দিয়ে আপনার অনলাইন স্টোর`
          : `With ${theme.name.en} Today`
      }
      description={
        locale === "bn"
          ? "কোনো কোডিং ছাড়া কয়েক মিনিটেই আপনার প্রোডাক্ট ক্যাটালগ আপলোড করুন এবং কুরিয়ার ও পেমেন্ট সংযোগ দিয়ে বিক্রি শুরু করুন।"
          : "Upload your product catalog, personalize your color palette, and start accepting online orders and cash on delivery in minutes."
      }
      primaryButton={{
        href: `/start?theme=${theme.slug}`,
        text:
          locale === "bn"
            ? "এই থিম দিয়ে শুরু করুন"
            : "Start With This Theme",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text:
          locale === "bn" ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing Plans",
      }}
    />
  );
}
