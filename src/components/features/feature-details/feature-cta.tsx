"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { splitHeading } from "@/lib/heading-utils";
import { FeatureDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface FeatureCTAProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureCTA({ feature, className }: FeatureCTAProps) {
  const { locale } = useLanguage();
  const cta = feature.cta;

  return (
    <section
      aria-label="Closing Call to Action"
      className={cn(
        "dark relative section-padding overflow-hidden bg-slate-950 text-slate-100 transition-colors border-t border-border",
        className,
      )}
    >
      {/* ── Subtle Background Radial Glow (Matches Final CTA Standard) ── */}
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
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-4 select-none">
              <Zap className="size-3 text-secondary-accent shrink-0" />
              <span>{cta.eyebrow[locale] || cta.eyebrow.en}</span>
            </div>

            {/* Heading with Brand Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.25] sm:leading-[1.2] text-balance">
              {(() => {
                const [l1, l2] = splitHeading(
                  cta.title[locale] || cta.title.en,
                );
                return (
                  <>
                    <span className="block text-white">{l1}</span>
                    <span className="block brand-gradient-text">{l2}</span>
                  </>
                );
              })()}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {cta.description[locale] || cta.description.en}
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center mb-6">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>{cta.buttonText[locale] || cta.buttonText.en}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Trust Note */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="size-3.5 text-secondary-accent shrink-0" />
              <span>{cta.trustNote[locale] || cta.trustNote.en}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
