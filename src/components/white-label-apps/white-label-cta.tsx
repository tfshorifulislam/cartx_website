"use client";

import React from "react";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function WhiteLabelCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustItems = [
    {
      icon: CheckCircle2,
      text: isBn
        ? "১০০% অ্যাপ ও ডেটা মালিকানা"
        : "100% Brand & Data Ownership",
    },
    {
      icon: CheckCircle2,
      text: isBn
        ? "আইওএস ও অ্যান্ড্রয়েড ডুয়াল প্ল্যাটফর্ম"
        : "iOS & Android Dual Platform",
    },
    {
      icon: CheckCircle2,
      text: isBn ? "রিয়েলটাইম ইনভেন্টরি সিঙ্ক" : "Real-time Store Sync",
    },
  ];

  return (
    <StandardCTASection
      ariaLabel="Discuss Your Branded App Call to Action"
      className={className}
      badge={{
        icon: Smartphone,
        text: isBn
          ? "মোবাইল অ্যাপ কনসালটেশন"
          : "Branded App Consultation",
      }}
      titlePlain={
        isBn ? "আপনার অ্যাপ চালু করতে প্রস্তুত?" : "Ready for iOS & Android?"
      }
      titleHighlight={
        isBn
          ? "আপনার নিজস্ব ব্র্যান্ডেড অ্যাপ নিয়ে আলোচনা করুন"
          : "Discuss Your Branded App Today."
      }
      description={
        isBn
          ? "আমাদের ইঞ্জিনিয়ারিং কনসালট্যান্টদের সাথে কথা বলুন এবং আপনার ব্র্যান্ডের জন্য আইওএস ও অ্যান্ড্রয়েড অ্যাপ বাস্তবায়নের প্রক্রিয়া জেনে নিন।"
          : "Schedule a technical scoping session to review your brand requirements, development timeline, and deployment pipeline."
      }
      primaryButton={{
        href: "/contact",
        text: isBn ? "যোগাযোগ করুন" : "Contact Us",
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
