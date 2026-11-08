"use client";

import React from "react";
import { Rocket, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function BookDemoCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <StandardCTASection
      ariaLabel="Book Demo Call to Action"
      className={className}
      badge={{
        icon: Rocket,
        text: isBn ? "লাইভ ডেমো ও কনসালটেশন" : "Live Demo & Consultation",
      }}
      titlePlain={
        isBn ? "কার্টএক্স অভিজ্ঞতা নিতে প্রস্তুত?" : "Ready to See CartX in Action?"
      }
      titleHighlight={
        isBn
          ? "আপনার ব্যবসার জন্য সেরা সমাধান খুঁজুন"
          : "Let's Find the Right Fit for Your Business"
      }
      description={
        isBn
          ? "CartX এক্সপ্লোর করুন অথবা আপনার চাহিদা নিয়ে বিস্তারিত কথা বলতে সরাসরি আমাদের টিমের সাথে যোগাযোগ করুন।"
          : "Explore CartX on your own or contact our team directly to discuss your custom retail requirements."
      }
      primaryButton={{
        href: "/start",
        text: isBn ? "বিনামূল্যে স্টোর শুরু করুন" : "Start Your Store",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/contact",
        text: isBn ? "আমাদের সাথে যোগাযোগ করুন" : "Contact Us",
        icon: Mail,
      }}
    />
  );
}
