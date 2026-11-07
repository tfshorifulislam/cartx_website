"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface ThemesCTAProps {
  className?: string;
}

export function ThemesCTA({ className }: ThemesCTAProps) {
  const { locale } = useLanguage();

  return (
    <section
      aria-label="Themes Call to Action"
      className={cn("py-20 sm:py-24 lg:py-28 bg-muted/30 relative overflow-hidden", className)}
    >
      {/* Ambient background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[42rem] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <ScrollReveal delay={0}>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 text-center shadow-lg relative overflow-hidden">
            {/* Guarantee Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary mb-6 select-none">
              <CheckCircle2 className="size-3.5 text-success shrink-0" />
              <span>
                {locale === "bn"
                  ? "১৪ দিনের ফ্রি ট্রায়াল • কোনো ক্রেডিট কার্ডের প্রয়োজন নেই • তাৎক্ষণিক সেটআপ"
                  : "14-Day Free Trial • No Credit Card Required • Instant Setup"}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "আপনার অনলাইন স্টোরের জন্য" : "Find the Perfect Design"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn" ? "সেরা ডিজাইন নির্বাচন করুন" : "For Your Store"}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto !mb-8">
              {locale === "bn"
                ? "আমাদের যেকোনো থিম বেছে নিয়ে মিনিটেই চালু করুন আপনার আধুনিক অনলাইন বিজনেস। আপনার পছন্দের প্ল্যান নির্বাচন করুন।"
                : "Select any of our pre-built themes, customize your brand identity, and launch your e-commerce storefront in minutes."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{locale === "bn" ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing"}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-muted hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{locale === "bn" ? "স্টোর শুরু করুন" : "Start Your Store"}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

