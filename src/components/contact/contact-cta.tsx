"use client";

import React from "react";
import { CheckCircle2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function ContactCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustItems = [
    {
      icon: CheckCircle2,
      text: isBn
        ? "শুরু করতে কোনো ক্রেডিট কার্ড প্রয়োজন নেই"
        : "No credit card required to start",
    },
    {
      icon: CheckCircle2,
      text: isBn
        ? "০% প্ল্যাটফর্ম লেনদেন কমিশন"
        : "0% platform transaction commission",
    },
    {
      icon: CheckCircle2,
      text: isBn
        ? "ফ্রি এসএসএল এবং সাবডোমেইন অন্তর্ভুক্ত"
        : "Free SSL and subdomain included",
    },
  ];

  return (
    <StandardCTASection
      ariaLabel="Ready to Explore CartX"
      className={className}
      badge={{
        icon: Rocket,
        text: isBn ? "সহজেই শুরু করুন" : "Get Started Today",
      }}
      titlePlain={
        isBn ? "অনলাইন স্টোর শুরু করতে প্রস্তুত?" : "Ready to Start Building?"
      }
      titleHighlight={
        isBn ? "কার্টএক্স প্ল্যাটফর্ম এক্সপ্লোর করুন" : "Explore the CartX Platform"
      }
      description={
        isBn
          ? "শত শত বাংলাদেশি উদ্যোক্তার সাথে যোগ দিন যারা প্রতিদিন তাদের অনলাইন স্টোর পরিচালনায় CartX ব্যবহার করছেন।"
          : "Launch your storefront today or explore our transparent subscription plans designed for businesses of every scale."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "আপনার স্টোর শুরু করুন" : "Start Your Store",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text: isBn ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing",
      }}
      trustItems={trustItems}
    />
  );
}
