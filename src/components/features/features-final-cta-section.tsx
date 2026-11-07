"use client";

import React from "react";
import { Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface FeaturesFinalCTASectionProps {
  className?: string;
}

/**
 * Section 07 — Final CTA for the CartX Features Overview Page (/features).
 * Closing call-to-action encouraging visitors to explore CartX subscription plans.
 * Styled with a deep navy background and restrained blue accent glow matching Home Page Final CTA.
 */
export function FeaturesFinalCTASection({ className }: FeaturesFinalCTASectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Find the Right Tools for Your Business"
      className={cn(
        "dark relative section-padding overflow-hidden bg-slate-950 text-slate-100 transition-colors border-t border-border",
        className
      )}
    >
      {/* ── Subtle Background Radial Glow (Restrained & SaaS-Aligned) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 10%, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <ScrollReveal delay={0}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-4 select-none">
              <Rocket className="size-3 text-secondary-accent shrink-0" />
              <span>{t("featuresCta.badge")}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.25] sm:leading-[1.2] text-balance">
              <span className="block text-white">{t("featuresCta.titlePlain")}</span>
              <span className="block brand-gradient-text">{t("featuresCta.titleHighlight")}</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("featuresCta.description")}
            </p>

            {/* Primary CTA Button */}
            <div className="flex items-center justify-center mb-6">
              <CTAButton
                action="viewPricing"
                variant="primary"
                locale={locale}
                size="lg"
                showArrow
                className="px-8 py-3.5 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              />
            </div>

            {/* Trust Note */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="size-3.5 text-secondary-accent shrink-0" />
              <span>{t("featuresCta.trustNote")}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
