"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { Sliders, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CUSTOMIZATION_OVERVIEW } from "../themes-data";
import { cn } from "@/lib/utils";

export interface ThemesCustomizationProps {
  className?: string;
}

export function ThemesCustomization({ className }: ThemesCustomizationProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, categories } = CUSTOMIZATION_OVERVIEW;

  return (
    <section
      id="customization"
      aria-label="Theme Customization and Plan Rules"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Sliders className="size-3 text-secondary-accent shrink-0" />
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

        {/* Customization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {categories.map((cat, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {cat.title[locale] || cat.title.en}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {cat.description[locale] || cat.description.en}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <CheckCircle2 className="size-3.5 text-success" />
                    <span>{cat.planRequirement[locale] || cat.planRequirement.en}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Plan Transparency Banner */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border bg-muted/40 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div className="flex items-start gap-3.5">
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {locale === "bn"
                      ? "স্বচ্ছ সাবস্ক্রিপশন নীতি ও সুবিধা"
                      : "Subscription Transparency & Plan Rules"}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                    {locale === "bn"
                      ? "প্রতিটি কার্টএক্স থিমে কোনো লুকানো চার্জ বা আলাদা থিম ফি নেই। কাস্টম ডোমেইন, কর্মী অ্যাকাউন্ট এবং অটো কুরিয়ার সুবিধা যাচাই করতে আমাদের অফিসিয়াল প্রাইসিং পেজ দেখুন।"
                      : "All 6 published themes are included across all standard retail tiers. For details on courier booking, staff logins, and custom domains, review our verified pricing tiers."}
                  </p>
                </div>
              </div>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-xs transition-colors shrink-0"
              >
                <span>{locale === "bn" ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing Plans"}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

