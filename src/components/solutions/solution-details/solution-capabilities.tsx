"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionCapabilitiesProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionCapabilities({ solution, className }: SolutionCapabilitiesProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, items } = solution.capabilities;

  return (
    <section
      id="capabilities"
      aria-label={`${solution.name[locale] || solution.name.en} Capabilities`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Layers className="size-3 text-secondary-accent shrink-0" />
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

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 group">
                  <div>
                    {/* Top row: Icon and Feature Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="size-11 rounded-lg bg-primary/[0.08] border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        <Icon className="size-5 shrink-0" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {item.featureName[locale] || item.featureName.en}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                      {item.title[locale] || item.title.en}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.description[locale] || item.description.en}
                    </p>
                  </div>

                  {/* Feature Route Link */}
                  <div className="pt-4 border-t border-border/60">
                    <Link
                      href={item.featureSlug}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors group/link"
                    >
                      <span>
                        {locale === "bn" ? "ফিচারের বিস্তারিত দেখুন" : "Explore feature details"}
                      </span>
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

