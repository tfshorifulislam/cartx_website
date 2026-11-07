"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhiteLabelProcess({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const steps = [
    {
      num: "01",
      title: isBn ? "সার্ভিস রিকোয়েস্ট" : "Request the Service",
      desc: isBn
        ? "আমাদের টিমের সাথে প্রাথমিক যোগাযোগ ও অ্যাপ প্রয়োজনীয়তা আলোচনা।"
        : "Initial consultation and discussion of your business app timeline.",
    },
    {
      num: "02",
      title: isBn ? "যোগ্যতা ও স্কোপ নিশ্চিতকরণ" : "Confirm Eligibility & Scope",
      desc: isBn
        ? "প্ল্যান এলিজিবিলিটি ও প্ল্যাটফর্ম সাপোর্ট (আইওএস/অ্যান্ড্রয়েড) মূল্যায়ন।"
        : "Evaluate CartX subscription plan tier and platform compilation scope.",
    },
    {
      num: "03",
      title: isBn ? "ব্র্যান্ডিং অ্যাসেট জমা" : "Submit Branding Assets",
      desc: isBn
        ? "হাই-রেজোলিউশন লোগো, অ্যাপ আইকন, স্প্ল্যাশ স্ক্রিন ও কালার প্যালেট প্রদান।"
        : "Provide vector logos, high-res app icons, splash art, and hex palettes.",
    },
    {
      num: "04",
      title: isBn ? "কনফিগারেশন রিভিউ" : "Review the Configuration",
      desc: isBn
        ? "পুশ নোটিফিকেশন কী, ফায়ারবেস ক্রেডেনশিয়াল ও এপিআই লিংক অনুমোদন।"
        : "Review push notification channels, credentials, and app metadata.",
    },
    {
      num: "05",
      title: isBn ? "বিল্ড ও টেস্টিং" : "Build and Test",
      desc: isBn
        ? "টেস্টফ্লাইট ও অ্যান্ড্রয়েড টেস্ট বিল্ডের মাধ্যমে সরাসরি ফোনে যাচাই।"
        : "Generate internal staging builds for real-device testing and QA.",
    },
    {
      num: "06",
      title: isBn ? "স্টোর লিস্টিং প্রস্তুতি" : "Prepare Store Listing",
      desc: isBn
        ? "অ্যাপ ডেসক্রিপশন, স্ক্রিনশট ও প্রাইভেসি পলিসি ডকুমেন্টস সম্পন্ন করা।"
        : "Assemble store marketing copy, localized screenshots, and disclosures.",
    },
    {
      num: "07",
      title: isBn ? "রিভিউয়ের জন্য সাবমিট" : "Submit for Review",
      desc: isBn
        ? "অ্যাপল অ্যাপ স্টোর ও গুগল প্লে কনসোলে অফিসিয়াল রিভিউ সাবমিশন।"
        : "Submit compiled binary to Apple App Store & Google Play Console.",
    },
    {
      num: "08",
      title: isBn ? "অনুমোদনের পর রিলিজ" : "Release After Approval",
      desc: isBn
        ? "অনুমোদনের পর গ্রাহকদের ডাউনলোডের জন্য পাবলিকলি লাইভ প্রকাশ।"
        : "Publish live globally for your customers to download and enjoy.",
    },
  ];

  return (
    <section
      id="white-label-process"
      aria-label="White-label App Process"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <span>{isBn ? "ধাপে ধাপে যাত্রা" : "8-Step Implementation Journey"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "সুসংগঠিত রোডম্যাপ" : "Step-by-Step App Delivery"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "রিকোয়েস্ট থেকে রিলিজ পর্যন্ত ৮টি ধাপ"
                : "From Initial Request to Official Store Release"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "একটি সুশৃঙ্খল ও স্বচ্ছ প্রক্রিয়ার মাধ্যমে আমরা আপনার ব্র্যান্ডের মোবাইল অ্যাপ প্রস্তুত ও প্রকাশ করি।"
              : "A guided, structured deployment pipeline ensuring high quality and compliance with store policies."}
          </p>
        </ScrollReveal>

        {/* 8-step Responsive Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {steps.map((st, idx) => (
            <ScrollReveal
              key={st.num}
              delay={(idx % 4) * 60}
              className="rounded-2xl border border-border bg-card p-5 shadow-xs hover:border-primary/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {st.num}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-semibold">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">
                  {st.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
