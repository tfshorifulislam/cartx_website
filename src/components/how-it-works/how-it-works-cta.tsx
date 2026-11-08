"use client";

import React from "react";
import { Target, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function HowItWorksCTA() {
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
        ? "২ মিনিটের মধ্যে ইনস্ট্যান্ট সেটআপ"
        : "Instant setup in under 2 minutes",
    },
    {
      icon: CheckCircle2,
      text: isBn
        ? "০% প্ল্যাটফর্ম লেনদেন কমিশন"
        : "0% platform transaction commission",
    },
  ];

  return (
    <StandardCTASection
      ariaLabel="How CartX Works Call to Action"
      badge={{
        icon: Target,
        text: isBn ? "সহজেই শুরু করুন" : "Get Started Today",
      }}
      titlePlain={
        isBn ? "আজই শুরু করুন আপনার ব্যবসা" : "Take the First Step"
      }
      titleHighlight={
        isBn
          ? "আপনার অনলাইন স্টোর চালু করতে প্রস্তুত?"
          : "Ready to Build Your Store?"
      }
      description={
        isBn
          ? "CartX-এর সাহায্যে আজই একটি পেশাদার ইকমার্স স্টোর তৈরি করুন। নির্ভরযোগ্য প্রযুক্তি, স্থানীয় পেমেন্ট গেটওয়ে এবং কুরিয়ার ইন্টিগ্রেশন সহ সম্পূর্ণ সমাধান।"
          : "Join hundreds of merchants who run their daily e-commerce operations on CartX. Simple setup, connected workflows, and transparent pricing."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "ফ্রি স্টোর শুরু করুন" : "Start Your Store",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/demo-stores",
        text: isBn ? "ডেমো স্টোর দেখুন" : "Explore Demo Stores",
      }}
      trustItems={trustItems}
    />
  );
}
