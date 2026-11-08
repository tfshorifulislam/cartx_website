"use client";

import React from "react";
import { Rocket, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function AboutCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <StandardCTASection
      ariaLabel="About Page Call to Action"
      className={className}
      badge={{
        icon: Rocket,
        text: isBn ? "আমাদের সাথে যুক্ত হোন" : "Partner With CartX",
      }}
      titlePlain={isBn ? "চলুন একসাথে গড়ে তুলি" : "Let's Build Better"}
      titleHighlight={
        isBn ? "ডিজিটাল কমার্সের নতুন দিগন্ত" : "Online Businesses Together."
      }
      description={
        isBn
          ? "আপনি নতুন উদ্যোগ শুরু করছেন কিংবা প্রতিষ্ঠিত রিটেইল ব্যবসা স্কেল করছেন—CartX আপনাকে দিচ্ছে আধুনিক ও শক্তিশালী ইকমার্স প্রযুক্তি।"
          : "Whether you are starting small or scaling an established retail enterprise, CartX provides the dependable platform to power your growth."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "বিনামূল্যে স্টোর শুরু করুন" : "Start Your Free Store",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/contact",
        text: isBn ? "আমাদের সাথে কথা বলুন" : "Contact Our Team",
        icon: Mail,
      }}
    />
  );
}
