"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function DemoStoresCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Create Your Store Call to Action"
      className={cn("py-12 sm:py-16 md:py-24 bg-card/30 transition-colors", className)}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-16 text-center shadow-card">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-4 sm:mb-5 shadow-2xs">
                <span>{isBn ? "আপনার ব্র্যান্ড তৈরি করুন" : "Launch Your Store"}</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3 sm:mb-4">
                <span className="block text-foreground">
                  {isBn ? "আজই শুরু করুন আপনার ব্যবসা" : "Ready to Start Building?"}
                </span>
                <span className="block brand-gradient-text">
                  {isBn
                    ? "আপনার নিজস্ব অনলাইন স্টোর তৈরি করুন"
                    : "Create Your Branded Store."}
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                {isBn
                  ? "আজই আপনার ১৪ দিনের ফ্রি ট্রায়াল শুরু করুন। কোনো ক্রেডিট কার্ডের প্রয়োজন নেই—কয়েক মিনিটেই সাজিয়ে নিন সম্পূর্ণ কার্যকরী অনলাইন শপ।"
                  : "Start your 14-day free trial today. Build, customize, and launch your high-converting online storefront in minutes."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] transition-all w-full sm:w-auto min-h-[44px]"
                >
                  <span>{isBn ? "১৪ দিনের ফ্রি ট্রায়াল শুরু করুন" : "Start 14-Day Free Trial"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-all w-full sm:w-auto min-h-[44px]"
                >
                  <span>{isBn ? "প্ল্যান ও প্রাইসিং দেখুন" : "View Plans & Pricing"}</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>{isBn ? "ক্রেডিট কার্ড প্রয়োজন নেই" : "No credit card required"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>{isBn ? "০% লেনদেন কমিশন" : "0% transaction fee"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>{isBn ? "দ্রুত ২ মিনিটে সেটআপ" : "Instant 2-minute setup"}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
