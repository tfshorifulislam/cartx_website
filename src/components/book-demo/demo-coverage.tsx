"use client";

import React from "react";
import {
  Store,
  Package,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function DemoCoverage({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const capabilities = [
    {
      icon: Store,
      titleEn: "1. Storefront & Store Setup",
      titleBn: "১. স্টোরফ্রন্ট ও থিম কাস্টমাইজেশন",
      descEn:
        "Visual theme editor, responsive mobile layouts, brand typography, and rapid catalog onboarding.",
      descBn:
        "কোডমুক্ত ভিজ্যুয়াল থিম এডিটর, মোবাইল-বান্ধব লেআউট, ব্র্যান্ডের রঙ-ফন্ট এবং দ্রুত ক্যাটালগ সেটআপ।",
    },
    {
      icon: Package,
      titleEn: "2. Product & Stock Management",
      titleBn: "২. পণ্য ও ইনভেন্টরি নিয়ন্ত্রণ",
      descEn:
        "Multi-variant SKU configuration (size, color), low-stock thresholds, and bulk CSV spreadsheet importing.",
      descBn:
        "সাইজ ও কালার ভ্যারিয়েন্ট ম্যানেজমেন্ট, স্বয়ংক্রিয় স্টক সতর্কবার্তা এবং বাল্ক এক্সেল ইমপোর্ট সুবিধা।",
    },
    {
      icon: ShoppingBag,
      titleEn: "3. Order Management & Invoicing",
      titleBn: "৩. অর্ডার প্রসেসিং ও ইনভয়েস",
      descEn:
        "Single-page checkout pipeline, printable thermal barcode slips, status progression, and phone verification.",
      descBn:
        "এক-পৃষ্ঠার দ্রুত চেকআউট, বারকোড লেবেল ও ইনভয়েস প্রিন্ট এবং ফোন নম্বরের মাধ্যমে ভুয়া অর্ডার প্রতিরোধ।",
    },
    {
      icon: CreditCard,
      titleEn: "4. Payment & Courier Integrations",
      titleBn: "৪. পেমেন্ট গেটওয়ে ও কুরিয়ার",
      descEn:
        "Native API integration with bKash, Nagad, cards, plus one-click consignment booking with Steadfast, Pathao & RedX.",
      descBn:
        "বিকাশ, নগদ, কার্ড গেটওয়ে এবং স্টেডফাস্ট, পাঠাও ও রেডএক্স কুরিয়ারে এক ক্লিকে পার্সেল বুকিং।",
    },
    {
      icon: BarChart3,
      titleEn: "5. Operations & Business Analytics",
      titleBn: "৫. রিয়েল-টাইম ব্যবসায়িক অ্যানালিটিক্স",
      descEn:
        "Sales reports, customer lifetime value, repeat order frequencies, and delivery performance metrics.",
      descBn:
        "বিক্রয় গ্রাফ, কাস্টমার লাইফটাইম ভ্যালু, পার্সেল ডেলিভারি সাকসেস রেট এবং আর্থিক সারসংক্ষেপ।",
    },
    {
      icon: Smartphone,
      titleEn: "6. White-label Mobile Apps",
      titleBn: "৬. নিজস্ব ব্র্যান্ডের মোবাইল অ্যাপ",
      descEn:
        "Dedicated iOS & Android applications published under your developer accounts with free push notifications.",
      descBn:
        "আপনার নিজস্ব ডেভেলপার অ্যাকাউন্টে পাবলিশযোগ্য ব্র্যান্ডেড মোবাইল অ্যাপ ও আনলিমিটেড পুশ নোটিফিকেশন।",
    },
  ];

  return (
    <section
      aria-label="Capabilities Covered in Demo"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
            {isBn ? "ডেমোতে যা যা দেখানো হবে" : "DEMO FOCUS AREAS"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "ব্যবসায়িক প্রবৃদ্ধির জন্য" : "Explore the Capabilities"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "গুরুত্বপূর্ণ ফিচারগুলো এক্সপ্লোর করুন"
                : "That Matter to Your Business"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "আমাদের প্রোডাক্ট ডেমো আপনার নির্দিষ্ট রিটেইল মডেল ও অপারেশনাল প্রয়োজনীয়তার ওপর ভিত্তি করে সাজানো হয়।"
              : "Every demonstration is tailored directly around your specific retail model, team size, and workflow requirements."}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal
                key={idx}
                delay={(idx % 3) * 60}
                className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {isBn ? cap.titleBn : cap.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {isBn ? cap.descBn : cap.descEn}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

