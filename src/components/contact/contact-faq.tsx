"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  linkHref: string;
  linkTextEn: string;
  linkTextBn: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-start",
    questionEn: "How can I start using CartX?",
    questionBn: "আমি কীভাবে CartX ব্যবহার শুরু করতে পারি?",
    answerEn:
      "You can launch your online store in under 2 minutes without entering a credit card. Choose a design theme, configure your products, and start receiving orders.",
    answerBn:
      "কোনো ক্রেডিট কার্ড ছাড়াই ২ মিনিটের মধ্যে ফ্রি অ্যাকাউন্ট খুলে আপনার অনলাইন স্টোর শুরু করতে পারেন। পছন্দের থিম বেছে নিন এবং তাৎক্ষণিক পণ্য আপলোড করুন।",
    linkHref: "/start",
    linkTextEn: "Start Your Free Store",
    linkTextBn: "ফ্রি স্টোর শুরু করুন",
  },
  {
    id: "faq-pricing",
    questionEn: "How can I ask about pricing?",
    questionBn: "প্রাইসিং বা প্ল্যান সম্পর্কে কীভাবে জানতে পারি?",
    answerEn:
      "All CartX subscription plans are published with complete transparency, including 0% platform sales commission. You can inspect all plan tiers or send us a sales inquiry.",
    answerBn:
      "CartX-এর সমস্ত সাবস্ক্রিপশন প্ল্যানে ০% প্ল্যাটফর্ম লেনদেন কমিশন রয়েছে। বিস্তারিত প্ল্যান ও ফিচার তুলনা আমাদের প্রাইসিং পেজে দেখতে পারেন।",
    linkHref: "/pricing",
    linkTextEn: "View Transparent Pricing",
    linkTextBn: "প্রাইসিং প্ল্যান দেখুন",
  },
  {
    id: "faq-white-label",
    questionEn: "How do I request a white-label app?",
    questionBn: "হোয়াইট-লেবেল মোবাইল অ্যাপ কীভাবে রিকোয়েস্ট করতে পারি?",
    answerEn:
      "We provide fully branded customer and merchant applications published directly under your official Apple Developer and Google Play Console accounts.",
    answerBn:
      "আপনার নিজস্ব ব্র্যান্ড ও অফিসিয়াল অ্যাপল ও গুগল প্লে স্টোর অ্যাকাউন্টে পাবলিশযোগ্য সম্পূর্ণ কাস্টমাইজড মোবাইল অ্যাপের জন্য আবেদন করতে পারেন।",
    linkHref: "/white-label-apps",
    linkTextEn: "Explore White-label Apps",
    linkTextBn: "হোয়াইট-লেবেল অ্যাপ জানুন",
  },
  {
    id: "faq-support",
    questionEn: "Where can existing merchants get support?",
    questionBn: "চলমান মার্চেন্টরা কীভাবে সহায়তা পেতে পারেন?",
    answerEn:
      "Existing store owners can browse our comprehensive Help Center for step-by-step documentation, or email our support desk at support@cartx.store.",
    answerBn:
      "মার্চেন্টরা যেকোনো কারিগরি ও স্টোর পরিচালনার সহায়তার জন্য আমাদের হেল্প সেন্টারের গাইডগুলো দেখতে পারেন অথবা সরাসরি টিকেট সাবমিট করতে পারেন।",
    linkHref: "/help",
    linkTextEn: "Visit Help Center",
    linkTextBn: "সহায়তা কেন্দ্র দেখুন",
  },
  {
    id: "faq-integrations",
    questionEn: "Which integrations are available?",
    questionBn: "কোন কোন পেমেন্ট ও কুরিয়ার ইন্টিগ্রেশন চালু আছে?",
    answerEn:
      "CartX natively integrates with Bangladesh payment gateways (bKash, Nagad, cards) and leading courier logistics networks (Steadfast, Pathao, RedX, Paperfly).",
    answerBn:
      "CartX-এ দেশীয় পেমেন্ট গেটওয়ে (বিকাশ, নগদ, কার্ড) এবং শীর্ষস্থানীয় কুরিয়ার নেটওয়ার্ক (স্টেডফাস্ট, পাঠাও, রেডএক্স) সরাসরি এপিআই দিয়ে ইন্টিগ্রেটেড।",
    linkHref: "/integrations",
    linkTextEn: "Browse Integrations Directory",
    linkTextBn: "ইন্টিগ্রেশন ডিরেক্টরি দেখুন",
  },
];

export function ContactFAQ({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [openId, setOpenId] = useState<string | null>("faq-start");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/25 transition-colors", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <Badge variant="outline" className="gap-1.5 px-3 py-1 mb-3 text-xs font-semibold border-primary/20 bg-primary/[0.06] text-primary">
            <HelpCircle className="size-3.5" />
            <span>{isBn ? "সাধারণ প্রশ্নোত্তর" : "Quick Answers"}</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "সহায়ক তথ্য ও উত্তর" : "Quick Answers"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ" : "Frequently Asked Questions"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {isBn
              ? "শুরু করার আগে আপনার যেকোনো সাধারণ প্রশ্নের স্পষ্ট উত্তর।"
              : "Clear answers to common questions about getting started, billing, and technical capabilities."}
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 50}
              >
                <Card
                  className={cn(
                    "p-0 gap-0 transition-all duration-200 overflow-hidden",
                    isOpen
                      ? "bg-card border-primary/40 shadow-xs"
                      : "bg-card/70 border-border hover:border-border/90"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="font-bold text-foreground text-sm sm:text-base">
                      {isBn ? item.questionBn : item.questionEn}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                      <p className="mb-3">{isBn ? item.answerBn : item.answerEn}</p>
                      <Link
                        href={item.linkHref}
                        className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline text-xs"
                      >
                        <span>{isBn ? item.linkTextBn : item.linkTextEn}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
