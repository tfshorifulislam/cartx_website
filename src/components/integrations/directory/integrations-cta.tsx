"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

interface IntegrationsCTAProps {
  className?: string;
}

export function IntegrationsCTA({ className }: IntegrationsCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <StandardCTASection
      ariaLabel="Integrations Call to Action"
      className={className}
      badge={{
        icon: MessageSquare,
        text: isBn
          ? "আপনার প্রয়োজনীয় সার্ভিস খুঁজছেন?"
          : "Looking For a Custom Integration?",
      }}
      titlePlain={
        isBn ? "বিশেষ কাস্টম প্রয়োজন?" : "Have Custom Integration Needs?"
      }
      titleHighlight={
        isBn
          ? "আপনার কাস্টম ইআরপি বা সিস্টেম যুক্ত করতে চান?"
          : "Need a Specific Gateway or Custom ERP Bridge?"
      }
      description={
        isBn
          ? "আমাদের এন্টারপ্রাইজ টিম আপনাকে কাস্টম ওয়েবহুক, প্রাইভেট এপিআই এবং বিশেষায়িত সিস্টেম ইন্টিগ্রেশনে সহায়তা করার জন্য প্রস্তুত।"
          : "CartX Enterprise provides custom webhooks, private API connectors, and bespoke integration support tailored to your unique requirements."
      }
      primaryButton={{
        href: "/contact",
        text: isBn ? "টিমের সাথে যোগাযোগ করুন" : "Talk to Solutions Team",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text: isBn ? "প্রাইসিং ও প্ল্যান দেখুন" : "View Pricing & Plans",
      }}
    />
  );
}
