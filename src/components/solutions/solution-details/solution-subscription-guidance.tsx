"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { CreditCard, Check, ArrowRight, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionSubscriptionGuidanceProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionSubscriptionGuidance({ solution, className }: SolutionSubscriptionGuidanceProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, plans, disclaimer } = solution.subscriptionGuidance;

  return (
    <section
      id="plans"
      aria-label={`${solution.name[locale] || solution.name.en} Subscription Guidance`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <CreditCard className="size-3 text-secondary-accent shrink-0" />
              <span>{eyebrow[locale] || eyebrow.en}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              {(() => {
                const [l1, l2] = splitHeading(title[locale] || title.en);
                return (
                  <>
                    <span className="block text-foreground">{l1}</span>
                    <span className="block brand-gradient-text">{l2}</span>
                  </>
                );
              })()}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {description[locale] || description.en}
            </p>
          </ScrollReveal>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 items-stretch">
          {plans.map((plan, index) => {
            const isRec = plan.isRecommended;
            return (
              <ScrollReveal key={plan.tier} delay={index * 100}>
                <div
                  className={cn(
                    "h-full flex flex-col justify-between rounded-xl border bg-card p-6 sm:p-7 shadow-xs transition-all duration-200 relative",
                    isRec
                      ? "border-primary shadow-md ring-1 ring-primary/40 -translate-y-1"
                      : "border-border hover:shadow-md hover:border-primary/30"
                  )}
                >
                  {isRec && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-xs">
                        {plan.badge?.[locale] || plan.badge?.en || "Recommended"}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Plan Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground">
                        {plan.name[locale] || plan.name.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        {plan.summary[locale] || plan.summary.en}
                      </p>
                    </div>

                    {/* Reasons / Fit points */}
                    <div className="space-y-2.5 pt-4 border-t border-border/60">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                        {locale === "bn" ? "কেন এই ব্যবসার জন্য উপযুক্ত:" : "Why it fits this business:"}
                      </span>
                      {plan.reasons.map((reason, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-snug">
                          <Check className="size-4 text-success shrink-0 mt-0.5" />
                          <span>{reason[locale] || reason.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <div className="pt-6 mt-6 border-t border-border/60">
                    <Link
                      href="/pricing"
                      className={cn(
                        "w-full inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 text-xs font-semibold transition-all duration-200",
                        isRec
                          ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs"
                          : "border border-border bg-background text-foreground hover:bg-muted"
                      )}
                    >
                      <span>
                        {locale === "bn" ? "প্ল্যানের বিস্তারিত দেখুন" : "View Plan Details"}
                      </span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pricing Comparison Button & Disclaimer */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors shadow-xs"
          >
            <span>
              {locale === "bn"
                ? "সকল প্ল্যানের বিস্তারিত ও মূল্য তুলনা করুন"
                : "Compare All Plan Features & Pricing"}
            </span>
            <ArrowRight className="size-4" />
          </Link>

          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-balance">
            <Info className="size-3.5 text-primary shrink-0" />
            <span>{disclaimer[locale] || disclaimer.en}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

