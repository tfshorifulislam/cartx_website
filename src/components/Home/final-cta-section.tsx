"use client";

import React from "react";
import { Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface FinalCTASectionProps {
  className?: string;
}

export function FinalCTASection({ className }: FinalCTASectionProps) {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Ready to Build Your Online Store"
      className={cn(
        "relative section-padding overflow-hidden bg-slate-950 text-slate-100 transition-colors border-t border-border",
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
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-4 select-none">
              <Rocket className="size-3 text-secondary-accent shrink-0" />
              <span>{t("finalCta.badge")}</span>
            </div>

            {/* Heading with Brand Gradient Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              <span className="block text-white">
                {locale === "bn" ? "আজই শুরু করুন" : "Ready to Build Your"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn" ? "আপনার অনলাইন স্টোর।" : "Online Store?"}
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("finalCta.description")}
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6">
              <CTAButton
                action="startStore"
                variant="primary"
                locale={locale}
                size="lg"
                showArrow
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-hover hover:-translate-y-0.5 text-primary-foreground shadow-md transition-all duration-200"
              />

              <CTAButton
                action="contactUs"
                variant="outline"
                locale={locale}
                size="lg"
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold rounded-lg border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:-translate-y-0.5 text-slate-100 hover:text-white transition-all duration-200"
              />
            </div>

            {/* Reassuring Factual Note */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="size-3.5 text-secondary-accent shrink-0" />
              <span>{t("finalCta.trustNote")}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

