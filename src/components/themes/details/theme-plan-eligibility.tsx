"use client";

import React from "react";
import Link from "next/link";
import { CreditCard, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemePlanEligibilityProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemePlanEligibility({ theme, className }: ThemePlanEligibilityProps) {
  const { locale } = useLanguage();
  const { plans, summary } = theme.planEligibility;

  if (plans.length === 0) return null;

  return (
    <section
      id="theme-plans"
      aria-label="Theme Plan Eligibility"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <CreditCard className="size-3 text-secondary-accent shrink-0" />
              <span>
                {locale === "bn" ? "প্ল্যান ও যোগ্যতা" : "Plan Eligibility"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "প্ল্যান প্রাপ্যতা" : "Subscription Tiers"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn"
                  ? `${theme.name.bn} ব্যবহারের সাবস্ক্রিপশন প্ল্যান`
                  : `Plan Eligibility for ${theme.name.en}`}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {summary[locale] || summary.en}
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 items-stretch">
          {plans.map((p, index) => {
            const isGrowth = p.tier === "growth";

            return (
              <ScrollReveal key={p.tier} delay={index * 90}>
                <div
                  className={cn(
                    "h-full flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-xs transition-all duration-200 relative",
                    isGrowth
                      ? "border-primary shadow-md ring-1 ring-primary/40 -translate-y-1"
                      : "border-border hover:shadow-md hover:border-primary/30"
                  )}
                >
                  {isGrowth && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-xs">
                        {locale === "bn" ? "জনপ্রিয় চয়েস" : "Most Popular"}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground">
                        {p.name[locale] || p.name.en}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                        <Check className="size-3 text-success" />
                        <span>
                          {locale === "bn" ? "থিম অন্তর্ভুক্ত" : "Theme Included"}
                        </span>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-3 border-t border-border/60">
                      {p.note[locale] || p.note.en}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60">
                    <Link
                      href="/pricing"
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-semibold transition-all duration-200",
                        isGrowth
                          ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      )}
                    >
                      <span>{locale === "bn" ? "প্ল্যানের বিস্তারিত দেখুন" : "View Plan Details"}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pricing Comparison Button */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/70 transition-colors shadow-2xs"
          >
            <span>
              {locale === "bn"
                ? "সকল সাবস্ক্রিপশন প্ল্যানের পূর্ণাঙ্গ তুলনা দেখুন"
                : "Compare All Pricing Plans & Features"}
            </span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

