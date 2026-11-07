"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemeDetailCTAProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeDetailCTA({ theme, className }: ThemeDetailCTAProps) {
  const { locale } = useLanguage();

  return (
    <section
      aria-label="Theme Action CTA"
      className={cn("py-20 sm:py-24 lg:py-28 bg-muted/30 relative overflow-hidden", className)}
    >
      {/* Background ambient light */}
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
                  ? "১৪ দিনের ফ্রি ট্রায়াল • কোনো ক্রেডিট কার্ড লাগবে না • সহজ সেটআপ"
                  : "14-Day Free Trial • No Credit Card Required • Instant Launch"}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "আজই শুরু করুন আপনার ব্যবসা" : "Launch Your Online Store"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn" ? `${theme.name.bn} দিয়ে আপনার অনলাইন স্টোর` : `With ${theme.name.en} Today`}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto !mb-8">
              {locale === "bn"
                ? "কোনো কোডিং ছাড়া কয়েক মিনিটেই আপনার প্রোডাক্ট ক্যাটালগ আপলোড করুন এবং কুরিয়ার ও পেমেন্ট সংযোগ দিয়ে বিক্রি শুরু করুন।"
                : "Upload your product catalog, personalize your color palette, and start accepting online orders and cash on delivery in minutes."}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href={`/start?theme=${theme.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>
                  {locale === "bn" ? "এই থিম দিয়ে শুরু করুন" : "Start With This Theme"}
                </span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-muted hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{locale === "bn" ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing Plans"}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

