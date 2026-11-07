"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { WhiteLabelFAQItem } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const FAQS: WhiteLabelFAQItem[] = [
  {
    id: "ownership",
    question: {
      en: "Who owns the published mobile app and store listing?",
      bn: "প্রকাশিত মোবাইল অ্যাপ ও স্টোর লিস্টিংয়ের মালিকানা কার?",
    },
    answer: {
      en: "You retain 100% legal ownership of your brand, customer data, and store listing. The app is published under your registered Apple Developer and Google Play developer accounts.",
      bn: "আপনার ব্র্যান্ড, গ্রাহকের তথ্য এবং স্টোর লিস্টিংয়ের ১০০% মালিকানা সম্পূর্ণ আপনার। আপনার নিজস্ব অ্যাপল ও গুগল একাউন্টের অধীনে অ্যাপটি প্রকাশিত হয়।",
    },
  },
  {
    id: "publishing",
    question: {
      en: "How does the app publishing process work?",
      bn: "অ্যাপ পাবলিশিং প্রক্রিয়াটি কীভাবে সম্পন্ন হয়?",
    },
    answer: {
      en: "Our engineering team compiles the native production binaries, guides you through adding our team as technical manager in your developer console, and submits the build for official store review.",
      bn: "আমাদের ইঞ্জিনিয়ারিং টিম প্রোডাকশন বাইনারি তৈরি করে এবং আপনার কনসোলে কার্টএক্স টিমকে টেকনিক্যাল ম্যানেজার হিসেবে যুক্ত করে সরাসরি অ্যাপল ও গুগল রিভিউয়ের জন্য সাবমিট করে।",
    },
  },
  {
    id: "updates",
    question: {
      en: "How are catalog changes and app updates handled?",
      bn: "প্রোডাক্ট ক্যাটালগের পরিবর্তন এবং অ্যাপ আপডেট কীভাবে কাজ করে?",
    },
    answer: {
      en: "Product additions, price updates, inventory levels, and order records sync instantly in real time from your CartX web dashboard without requiring new app store submissions.",
      bn: "নতুন প্রোডাক্ট যুক্ত করা, দামের পরিবর্তন এবং অর্ডার স্ট্যাটাস রিয়েলটাইমে সিঙ্ক হয়। এর জন্য অ্যাপ স্টোরে নতুন করে কোনো আপডেট বা সাবমিশন দিতে হয় না।",
    },
  },
  {
    id: "notifications",
    question: {
      en: "Are push notifications supported on both iOS and Android?",
      bn: "আইওএস এবং অ্যান্ড্রয়েড উভয় প্ল্যাটফর্মেই কি পুশ নোটিফিকেশন কাজ করে?",
    },
    answer: {
      en: "Yes. Push notifications are supported for transactional order status updates and store announcements, subject to customer device permission settings and platform channel policies.",
      bn: "হ্যাঁ, গ্রাহকের ফোনের অনুমতি সাপেক্ষে অর্ডার স্ট্যাটাস আপডেট এবং গুরুত্বপূর্ণ স্টোর ঘোষণার জন্য আইওএস ও অ্যান্ড্রয়েড উভয় প্ল্যাটফর্মেই পুশ নোটিফিকেশন সক্রিয় থাকে।",
    },
  },
  {
    id: "review",
    question: {
      en: "What happens if Apple or Google requests changes during review?",
      bn: "রিভিউ চলাকালীন অ্যাপল বা গুগল কোনো সংশোধনী চাইলে কী করা হয়?",
    },
    answer: {
      en: "Our technical team reviews official reviewer feedback, prepares the required binary or metadata adjustments, and resubmits until full approval is achieved.",
      bn: "আমাদের টেকনিক্যাল টিম অফিশিয়াল ফিডব্যাক পর্যালোচনা করে প্রয়োজনীয় কারিগরি সমন্বয় সম্পন্ন করে এবং অনুমোদন না হওয়া পর্যন্ত পুনরায় সাবমিশন প্রক্রিয়া পরিচালনা করে।",
    },
  },
];

export function WhiteLabelFAQ({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [FAQS[0].id]: true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="white-label-faq"
      aria-label="Frequently Asked Questions About White-Label Apps"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-background transition-colors",
        className,
      )}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{isBn ? "সাধারণ প্রশ্নোত্তর" : "App FAQ"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "সাধারণ জিজ্ঞাসা ও উত্তর" : "Everything You Need to Know"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "মোবাইল অ্যাপ সংক্রান্ত সাধারণ প্রশ্নাবলী"
                : "Frequently Asked Questions About Branded Apps"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "মালিকানা, পাবলিশিং পলিসি ও নিয়মিত আপডেট সম্পর্কে যাবতীয় তথ্য।"
              : "Clear answers regarding ownership, publishing processes, maintenance, and platform policies."}
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = !!openIds[faq.id];
            return (
              <ScrollReveal
                key={faq.id}
                delay={idx * 50}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs transition-all hover:border-border/80"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-muted/30 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground pr-4">
                    {faq.question[isBn ? "bn" : "en"]}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                    <div className="pt-3.5">
                      {faq.answer[isBn ? "bn" : "en"]}
                    </div>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
