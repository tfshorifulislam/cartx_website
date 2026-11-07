"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionCTAProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionCTA({ solution, className }: SolutionCTAProps) {
  const { locale } = useLanguage();
  const { heading, description, primaryCta, secondaryCta, guaranteePill } = solution.cta;

  return (
    <section
      aria-label={`${solution.name[locale] || solution.name.en} Call to Action`}
      className={cn("py-20 sm:py-24 lg:py-28 bg-muted/30 relative overflow-hidden", className)}
    >
      {/* Ambient background decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[45rem] rounded-full opacity-[0.05]"
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
              <span>{guaranteePill[locale] || guaranteePill.en}</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              {(() => {
                const [l1, l2] = splitHeading(heading[locale] || heading.en);
                return (
                  <>
                    <span className="block text-foreground">{l1}</span>
                    <span className="block brand-gradient-text">{l2}</span>
                  </>
                );
              })()}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto !mb-8">
              {description[locale] || description.en}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{primaryCta[locale] || primaryCta.en}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-muted hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{secondaryCta[locale] || secondaryCta.en}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

