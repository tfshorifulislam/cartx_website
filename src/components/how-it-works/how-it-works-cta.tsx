"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";
import { ArrowRight, Target, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HowItWorksCTA() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const highlights = [
    { en: "No credit card required to start", bn: "শুরু করতে কোনো ক্রেডিট কার্ড প্রয়োজন নেই" },
    { en: "Instant setup in under 2 minutes", bn: "২ মিনিটের মধ্যে ইনস্ট্যান্ট সেটআপ" },
    { en: "0% platform transaction commission", bn: "০% প্ল্যাটফর্ম লেনদেন কমিশন" },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="relative rounded-3xl p-8 sm:p-12 md:p-16 border border-border bg-card/80 backdrop-blur-sm text-center shadow-lg">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            <Target className="h-3.5 w-3.5" />
            <span>{isBn ? "সহজেই শুরু করুন" : "Get Started Today"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto">
            <span className="block text-foreground">
              {isBn ? "আজই শুরু করুন আপনার ব্যবসা" : "Take the First Step"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "আপনার অনলাইন স্টোর চালু করতে প্রস্তুত?"
                : "Ready to Build Your Store?"}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isBn
              ? "CartX-এর সাহায্যে আজই একটি পেশাদার ইকমার্স স্টোর তৈরি করুন। নির্ভরযোগ্য প্রযুক্তি, স্থানীয় পেমেন্ট গেটওয়ে এবং কুরিয়ার ইন্টিগ্রেশন সহ সম্পূর্ণ সমাধান।"
              : "Join hundreds of merchants who run their daily e-commerce operations on CartX. Simple setup, connected workflows, and transparent pricing."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <span>{isBn ? "ফ্রি স্টোর শুরু করুন" : "Start Your Store"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/demo-stores"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
            >
              <span>{isBn ? "ডেমো স্টোর দেখুন" : "Explore Demo Stores"}</span>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
            {highlights.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{isBn ? item.bn : item.en}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

