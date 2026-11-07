"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface DemoFAQItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  linkHref?: string;
  linkTextEn?: string;
  linkTextBn?: string;
}

const DEMO_FAQS: DemoFAQItem[] = [
  {
    id: "df-1",
    questionEn: "What will the demo cover?",
    questionBn: "ডেমোতে ঠিক কী কী বিষয় দেখানো হবে?",
    answerEn:
      "A tailored walkthrough of CartX admin capabilities: product variant setup, theme customization, order management, bKash/Nagad payment gateways, and automated courier consignment generation.",
    answerBn:
      "CartX অ্যাডমিন ড্যাশবোর্ডের লাইভ ডেমো: প্রোডাক্ট ও ভ্যারিয়েন্ট আপলোড, থিম কাস্টমাইজার, অর্ডার প্রসেসিং, বিকাশ ও নগদ পেমেন্ট এবং কুরিয়ার ইন্টিগ্রেশন।",
    linkHref: "/features",
    linkTextEn: "Explore All Features",
    linkTextBn: "সমস্ত ফিচার দেখুন",
  },
  {
    id: "df-2",
    questionEn: "Who should request a demo?",
    questionBn: "কাদের ডেমো অনুরোধ করা উচিত?",
    answerEn:
      "A demo is recommended for established retail brands, growing e-commerce businesses, merchants seeking white-label mobile apps, or high-volume stores evaluating migration from social media inboxes or legacy tools.",
    answerBn:
      "প্রতিষ্ঠিত ব্র্যান্ড, দ্রুত বর্ধনশীল রিটেইল ব্যবসা, হোয়াইট-লেবেল মোবাইল অ্যাপের আগ্রহী মার্চেন্ট এবং উচ্চ অর্ডার ভলিউমের প্রতিষ্ঠানদের জন্য ডেমো অত্যন্ত সহায়ক।",
    linkHref: "/pricing",
    linkTextEn: "Compare Subscription Plans",
    linkTextBn: "প্ল্যান ও ফিচার তুলনা করুন",
  },
  {
    id: "df-3",
    questionEn: "Can I discuss enterprise or custom requirements?",
    questionBn: "আমি কি এন্টারপ্রাইজ বা বিশেষ কোনো কাস্টম চাহিদা নিয়ে আলোচনা করতে পারি?",
    answerEn:
      "Yes. If your business requires high API call volumes, dedicated onboarding assistance, custom integrations, or tailored SLA agreements, our technical specialists can review them during the consultation.",
    answerBn:
      "হ্যাঁ। আপনার যদি বিশেষ কোনো এপিআই ইন্টিগ্রেশন, কাস্টম ডেভলপমেন্ট বা ডেডিকেটেড সাপোর্টের প্রয়োজন থাকে, তবে আমাদের ইঞ্জিনিয়ারিং টিম তা পর্যালোচনা করবে।",
    linkHref: "/contact",
    linkTextEn: "Contact Enterprise Sales",
    linkTextBn: "সেলস টিমের সাথে কথা বলুন",
  },
  {
    id: "df-4",
    questionEn: "Can I request a white-label mobile app consultation?",
    questionBn: "হোয়াইট-লেবেল মোবাইল অ্যাপের বিস্তারিত কীভাবে জানা যাবে?",
    answerEn:
      "Yes. You can select 'White-label Mobile App' in the inquiry form. We will demonstrate live merchant and customer mobile app builds and explain store publishing requirements.",
    answerBn:
      "হ্যাঁ। ফর্মের 'White-label Mobile App' অপশন সিলেক্ট করুন। আমরা অ্যাপলের অ্যাপ স্টোর ও গুগল প্লে কনসোলে পাবলিশিং নির্দেশিকাসহ লাইভ অ্যাপ ডেমো প্রদর্শন করব।",
    linkHref: "/white-label-apps",
    linkTextEn: "Learn About White-label Apps",
    linkTextBn: "হোয়াইট-লেবেল অ্যাপ জানুন",
  },
  {
    id: "df-5",
    questionEn: "Do I need to book an immediate calendar time slot?",
    questionBn: "আমাকে কি এখনই কোনো নির্দিষ্ট ক্যালেন্ডার স্লট বুক করতে হবে?",
    answerEn:
      "No. Instead of rigid automated calendar slots, our team contacts you after reviewing your parameters to schedule a session at a mutually convenient time.",
    answerBn:
      "না। কোনো অটোমেটেড বিভ্রান্তিকর ক্যালেন্ডার স্লটের প্রয়োজন নেই। আমাদের টিম আপনার চাহিদা পর্যালোচনা করে আপনার সুবিধাজনক সময়ে গুগল মিট বা ফোনে সেশন নির্ধারণ করবে।",
  },
  {
    id: "df-6",
    questionEn: "How will the team follow up with me?",
    questionBn: "টিম কীভাবে আমার সাথে যোগাযোগ করবে?",
    answerEn:
      "We will follow up strictly using your preferred contact method (Email or Phone) indicated in your submission.",
    answerBn:
      "আপনার ফর্মে উল্লিখিত পছন্দের যোগাযোগ মাধ্যম (ইমেইল অথবা মোবাইল নম্বর) ব্যবহার করেই আমাদের টিম আপনার সাথে যোগাযোগ করবে।",
  },
];

export function DemoFAQ({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [openId, setOpenId] = useState<string | null>("df-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Demo Questions & FAQ"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-xs font-semibold text-primary transition-colors mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{isBn ? "প্রশ্নোত্তর" : "Demo FAQ"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "সাধারণ জিজ্ঞাসা ও উত্তর" : "Frequently Asked Questions"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "ডেমো বুকিং সম্পর্কিত তথ্যাবলী" : "About Booking a Demo"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {isBn
              ? "ডেমো কীভাবে পরিচালিত হয় এবং কী প্রত্যাশা করবেন সে সম্পর্কিত বিশদ তথ্য।"
              : "Everything you need to know about preparing for and attending your personalized platform demo."}
          </p>
        </ScrollReveal>

        <div className="space-y-3.5">
          {DEMO_FAQS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 50}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-card border-primary/40 shadow-xs"
                    : "bg-card/70 border-border hover:border-border/80"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="font-bold text-foreground text-sm sm:text-base">
                    {isBn ? item.questionBn : item.questionEn}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                    <p className="mb-3">{isBn ? item.answerBn : item.answerEn}</p>
                    {item.linkHref && (
                      <Link
                        href={item.linkHref}
                        className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline text-xs"
                      >
                        <span>{isBn ? item.linkTextBn : item.linkTextEn}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
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

