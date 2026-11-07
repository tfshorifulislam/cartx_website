"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionChallengesProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionChallenges({ solution, className }: SolutionChallengesProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, items } = solution.challenges;

  return (
    <section
      id="challenges"
      aria-label={`${solution.name[locale] || solution.name.en} Challenges`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <AlertCircle className="size-3 text-secondary-accent shrink-0" />
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

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div className="h-full flex flex-col rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 group">
                  <div className="size-11 rounded-lg bg-destructive/[0.08] border border-destructive/20 flex items-center justify-center text-destructive mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="size-5 shrink-0" />
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {item.title[locale] || item.title.en}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.description[locale] || item.description.en}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

