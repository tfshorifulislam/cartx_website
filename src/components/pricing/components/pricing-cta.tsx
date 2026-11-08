"use client";

import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

interface PricingCTAProps {
  className?: string;
}

export function PricingCTA({ className }: PricingCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustItems = [
    {
      icon: CheckCircle2,
      text: isBn ? "ক্রেডিট কার্ডের প্রয়োজন নেই" : "No credit card required",
    },
    {
      icon: CheckCircle2,
      text: isBn ? "যেকোনো সময় বাতিলযোগ্য" : "Cancel anytime",
    },
    {
      icon: CheckCircle2,
      text: isBn ? "০% লেনদেন কমিশন" : "0% platform commission",
    },
  ];

  return (
    <StandardCTASection
      ariaLabel="Pricing Final Call to Action"
      className={className}
      badge={{
        icon: Zap,
        text: isBn ? "এখনই শুরু করুন" : "Get Started Risk-Free",
      }}
      titlePlain={
        isBn ? "আজই শুরু করুন আপনার ব্যবসা" : "Ready to Start Building?"
      }
      titleHighlight={
        isBn
          ? "আপনার প্ল্যান নির্বাচন করে এগিয়ে যান"
          : "Choose Your Plan and Launch Today"
      }
      description={
        isBn
          ? "১৪ দিনের ফ্রি ট্রায়ালে সম্পূর্ণ স্টোর সেটআপ করুন, লোকাল পেমেন্ট ও কুরিয়ার যুক্ত করুন এবং আজই আপনার প্রথম অর্ডার গ্রহণ করুন।"
          : "Launch your modern digital storefront in minutes with automated courier booking, localized checkouts, and 0% transaction fees."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন" : "Start 14-Day Free Trial",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/contact",
        text: isBn ? "সেলস টিমের সাথে কথা বলুন" : "Talk to Sales",
      }}
      trustItems={trustItems}
    />
  );
}
