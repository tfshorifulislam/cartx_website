"use client";

import React from "react";
import Link from "next/link";
import { Rocket, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface SolutionsFinalCTASectionProps {
  className?: string;
}

export function SolutionsFinalCTASection({
  className,
}: SolutionsFinalCTASectionProps) {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Start Your Store Today"
      className={cn(
        "dark relative section-padding overflow-hidden bg-slate-950 text-slate-100 transition-colors border-t border-border",
        className,
      )}
    >
      {/* ── Background Subtle Glow ── */}
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
              <span>{t("solutionsCta.eyebrow")}</span>
            </div>

            {/* Title with Brand Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.25] sm:leading-[1.2] text-balance">
              {(() => {
                const [l1, l2] = (t("solutionsCta.title") || "").split("\n");
                return (
                  <>
                    <span className="block text-white">{l1}</span>
                    <span className="block brand-gradient-text">{l2}</span>
                  </>
                );
              })()}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("solutionsCta.description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t("solutionsCta.primary")}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t("solutionsCta.secondary")}</span>
              </Link>
            </div>

            {/* Trust Pill / Footnote */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="size-4 text-secondary-accent shrink-0" />
              <span>{t("solutionsCta.featurePill")}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
