"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface SolutionsHeroProps {
  className?: string;
}

export function SolutionsHero({ className }: SolutionsHeroProps) {
  const { t } = useLanguage();
  const lenis = useLenis();

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("industry-solutions");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) {
        lenis.scrollTo(top, {
          duration: 1.0,
          easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
        });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.replaceState(null, "", "#industry-solutions");
    }
  };

  return (
    <section
      aria-label="Solutions Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className,
      )}
    >
      {/* ── Background subtle ambient accents (Exact Home/Features Hero alignment) ── */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[30rem] w-[30rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative hero-padding">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0}>
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4 select-none">
              <Layers className="size-3 text-secondary-accent shrink-0" />
              <span>{t("solutionsHero.badge")}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-balance !mb-4 leading-[1.2] sm:leading-[1.18] font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              <span className="block text-foreground">
                {t("solutionsHero.titlePlain")}
              </span>
              <span className="block brand-gradient-text">
                {t("solutionsHero.titleHighlight")}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-8 text-balance">
              {t("solutionsHero.description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
              <a
                href="#industry-solutions"
                onClick={handleExploreClick}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t("solutionsHero.ctaExplore")}</span>
                <ArrowDown className="size-3.5" />
              </a>

              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t("solutionsHero.ctaStart")}</span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
              </Link>
            </div>

            {/* Trust Line */}
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground !mb-0">
              <CheckCircle2 className="size-3.5 text-success shrink-0" />
              <span>{t("solutionsHero.trustLine")}</span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
