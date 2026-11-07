"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionHeroProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionHero({ solution, className }: SolutionHeroProps) {
  const { locale } = useLanguage();
  const Icon = solution.icon;

  return (
    <section
      aria-label={`${solution.name[locale] || solution.name.en} Hero`}
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Background subtle ambient accents (Home/Features standard) ── */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[30rem] w-[30rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative hero-padding">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* ── Left Column: Copy & Actions ── */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <ScrollReveal delay={0}>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4 select-none">
                <Icon className="size-3 text-secondary-accent shrink-0" />
                <span>{solution.badge[locale] || solution.badge.en}</span>
              </div>

              {/* H1 Heading with Brand Gradient */}
              <h1 className="text-balance !mb-4 leading-[1.2] sm:leading-[1.18] font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                {solution.hero.h1Plain[locale] || solution.hero.h1Plain.en}{" "}
                <span className="brand-gradient-text">
                  {solution.hero.h1Highlight[locale] || solution.hero.h1Highlight.en}
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 !mb-7 text-balance">
                {solution.hero.description[locale] || solution.hero.description.en}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>{solution.hero.primaryCta[locale] || solution.hero.primaryCta.en}</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href={solution.hero.secondaryHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>{solution.hero.secondaryCta[locale] || solution.hero.secondaryCta.en}</span>
                </Link>
              </div>

              {/* Trust Line */}
              <p className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-muted-foreground !mb-0">
                <CheckCircle2 className="size-3.5 text-success shrink-0" />
                <span>{solution.hero.trustNote[locale] || solution.hero.trustNote.en}</span>
              </p>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Industry Representative Visual Mockup ── */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <ScrollReveal delay={120}>
              <div className="relative rounded-2xl border border-border/80 bg-card p-6 shadow-card overflow-hidden">
                {/* Visual Header Pill */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-error/70" />
                    <span className="size-2.5 rounded-full bg-warning/70" />
                    <span className="size-2.5 rounded-full bg-success/70" />
                    <span className="text-[10px] font-mono text-muted-foreground ml-2">
                      admin.cartx.app/solutions/{solution.slug}
                    </span>
                  </div>
                  <span className="text-[9.5px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                {/* Mini Store Hero Mockup */}
                <div
                  className={cn(
                    "p-5 rounded-xl border border-border/60 bg-gradient-to-br mb-4",
                    solution.storefrontPreview.accentGradient
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-primary">
                      {solution.hero.previewTagline}
                    </span>
                    <Icon className="size-4 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 leading-snug">
                    {solution.hero.previewHeadline}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {solution.hero.previewSubhead}
                  </p>
                </div>

                {/* Key Capabilities Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {solution.hero.previewBadges.map((badgeText, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-2.5 rounded-lg border border-border/70 bg-background/60 text-center flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span className="text-[10px] font-semibold text-foreground truncate">
                        {badgeText}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quality Transparency Strip */}
                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[10.5px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3 text-secondary-accent" />
                    CartX Commerce Engine
                  </span>
                  <span className="text-primary font-medium">Native Local Stack</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

