"use client";

import React from "react";
import { CheckCircle2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function DemoStoresCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustItems = [
    {
      icon: CheckCircle2,
      text: isBn ? "ক্রেডিট কার্ড প্রয়োজন নেই" : "No credit card required",
    },
    {
      icon: CheckCircle2,
      text: isBn ? "০% লেনদেন কমিশন" : "0% transaction fee",
    },
    {
      icon: CheckCircle2,
      text: isBn ? "দ্রুত ২ মিনিটে সেটআপ" : "Instant 2-minute setup",
    },
  ];

  return (
    <StandardCTASection
      ariaLabel="Create Your Store Call to Action"
      className={className}
      badge={{
        icon: Rocket,
        text: isBn ? "আপনার ব্র্যান্ড তৈরি করুন" : "Launch Your Store",
      }}
      titlePlain={
        isBn ? "আজই শুরু করুন আপনার ব্যবসা" : "Ready to Start Building?"
      }
      titleHighlight={
        isBn
          ? "আপনার নিজস্ব অনলাইন স্টোর তৈরি করুন"
          : "Create Your Branded Store."
      }
      description={
        isBn
          ? "আজই আপনার ১৪ দিনের ফ্রি ট্রায়াল শুরু করুন। কোনো ক্রেডিট কার্ডের প্রয়োজন নেই—কয়েক মিনিটেই সাজিয়ে নিন সম্পূর্ণ কার্যকরী অনলাইন শপ।"
          : "Start your 14-day free trial today. Build, customize, and launch your high-converting online storefront in minutes."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন" : "Start 14-Day Free Trial",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text: isBn ? "প্ল্যান ও প্রাইসিং দেখুন" : "View Plans & Pricing",
      }}
      trustItems={trustItems}
    />
  );
}
