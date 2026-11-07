"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import { FolderTree, Lightbulb, Tag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionStoreStructureProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionStoreStructure({ solution, className }: SolutionStoreStructureProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, discoveryTip, categories } = solution.storeStructure;

  return (
    <section
      id="store-structure"
      aria-label={`${solution.name[locale] || solution.name.en} Store Structure`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <FolderTree className="size-3 text-secondary-accent shrink-0" />
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

        {/* Discovery Merchandising Tip Box */}
        <div className="max-w-4xl mx-auto mb-10">
          <ScrollReveal delay={50}>
            <div className="rounded-xl border border-primary/25 bg-primary/[0.04] p-4 sm:p-5 flex items-start gap-3.5">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Lightbulb className="size-4" />
              </div>
              <div className="flex-1 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <strong className="font-semibold text-primary block mb-0.5">
                  {locale === "bn" ? "ক্যাটাগরি ও ন্যাভিগেশন টিপ" : "Navigation & Merchandising Tip"}
                </strong>
                {discoveryTip[locale] || discoveryTip.en}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <ScrollReveal key={index} delay={100 + index * 60}>
              <div className="h-full flex flex-col rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/30">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="size-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {cat.name[locale] || cat.name.en}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {cat.description[locale] || cat.description.en}
                </p>

                {/* Subcategories tags */}
                <div className="pt-3 border-t border-border/60">
                  <span className="text-[11px] font-medium text-muted-foreground/80 block mb-2">
                    {locale === "bn" ? "প্রস্তাবিত সাব-ক্যাটাগরি:" : "Suggested Subcategories:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subcategories.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium rounded-md bg-muted px-2 py-0.5 text-foreground/80 border border-border/50"
                      >
                        <Tag className="size-2.5 text-muted-foreground" />
                        {sub[locale] || sub.en}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

