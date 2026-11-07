"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import { Package, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionSampleCatalogProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionSampleCatalog({ solution, className }: SolutionSampleCatalogProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, products } = solution.catalog;

  return (
    <section
      id="sample-catalog"
      aria-label={`${solution.name[locale] || solution.name.en} Example Catalog`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Package className="size-3 text-secondary-accent shrink-0" />
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

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-background p-5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 group">
                <div>
                  {/* Top Bar: Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {product.category[locale] || product.category.en}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {product.badge[locale] || product.badge.en}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-base font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {product.name[locale] || product.name.en}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4 pb-3 border-b border-border/60">
                    <span className="text-lg font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Attributes / Variants Pill List */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                      {locale === "bn" ? "ভ্যারিয়েন্ট ও স্পেক্স:" : "Variants & Specs:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.attributes.map((attr, aIdx) => (
                        <div
                          key={aIdx}
                          className="inline-flex items-center gap-1 text-[11px] rounded bg-muted px-2 py-1 text-foreground/90 border border-border/60"
                        >
                          <span className="text-muted-foreground font-normal">
                            {attr.label[locale] || attr.label.en}:
                          </span>
                          <span className="font-medium">
                            {attr.value[locale] || attr.value.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlight / Key Feature Note */}
                <div className="pt-3 border-t border-border/60 flex items-start gap-2 bg-muted/30 -mx-5 -mb-5 p-3.5 rounded-b-xl">
                  <Check className="size-3.5 text-success shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-snug text-muted-foreground">
                    {product.highlight[locale] || product.highlight.en}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
