"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureHeroProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureHero({ feature, className }: FeatureHeroProps) {
  const { locale, t } = useLanguage();
  const Icon = feature.icon;

  const isComingSoon = feature.status === "coming-soon";

  return (
    <section
      aria-label={`${feature.name[locale] || feature.name.en} Hero`}
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home/Features Hero) ── */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative hero-padding">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4 select-none">
              <Icon className="size-3 text-secondary-accent shrink-0" />
              <span>{feature.eyebrow[locale] || feature.eyebrow.en}</span>
              {isComingSoon && (
                <span className="ml-1 text-[9px] bg-amber-500/15 text-amber-600 dark:text-amber-400 px-1.5 py-0.2 rounded font-semibold">
                  {locale === "bn" ? "শীঘ্রই আসছে" : "Coming Soon"}
                </span>
              )}
            </div>

            {/* H1 Title with Brand Gradient Text */}
            <h1 className="text-balance !mb-3 sm:!mb-4 leading-[1.25] sm:leading-[1.2]">
              {feature.hero.titlePlain[locale] || feature.hero.titlePlain.en}{" "}
              <span className="brand-gradient-text">
                {feature.hero.titleHighlight[locale] || feature.hero.titleHighlight.en}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-8">
              {feature.hero.description[locale] || feature.hero.description.en}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:-translate-y-0.5 transition-all"
              >
                <span>
                  {feature.hero.primaryCtaText?.[locale] ||
                    feature.hero.primaryCtaText?.en ||
                    t("btn.viewPricing") ||
                    (locale === "bn" ? "প্ল্যান ও প্রাইসিং দেখুন" : "Explore Pricing")}
                </span>
                <ArrowRight className="size-3.5" />
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted/70 hover:-translate-y-0.5 transition-all"
              >
                <span>
                  {feature.hero.secondaryCtaText?.[locale] ||
                    feature.hero.secondaryCtaText?.en ||
                    (locale === "bn" ? "সুবিধাসমূহ দেখুন" : "View Capabilities")}
                </span>
              </a>
            </div>

            {/* Trust / Transparency line */}
            <div className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              {isComingSoon ? (
                <>
                  <Info className="size-3.5 text-amber-500 shrink-0" />
                  <span>
                    {locale === "bn"
                      ? "এই ফিচারটি বর্তমানে সক্রিয় উন্নয়ন পর্যায়ে রয়েছে এবং শীঘ্রই উন্মুক্ত হবে।"
                      : "This feature is currently under active development and scheduled for release."}
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="size-3.5 text-success shrink-0" />
                  <span>
                    {locale === "bn"
                      ? "কোনো অতিরিক্ত ট্রানজ্যাকশন ফি নেই। নিরাপদ ও দ্রুত ডেপ্লয়মেন্ট।"
                      : "Zero per-transaction platform penalties. Verified cloud architecture."}
                  </span>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

