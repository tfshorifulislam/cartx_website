"use client";

import React from "react";
import { Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeFeatureCard } from "./theme-feature-card";
import { THEME_FEATURES } from "../themes-data";
import { cn } from "@/lib/utils";

export interface ThemesFeaturesProps {
  className?: string;
}

export function ThemesFeatures({ className }: ThemesFeaturesProps) {
  const { locale } = useLanguage();

  return (
    <section
      id="theme-features"
      aria-label="Storefront Theme Features"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Layers className="size-3 text-secondary-accent shrink-0" />
              <span>
                {locale === "bn" ? "স্টোরফ্রন্ট সক্ষমতা" : "Storefront Capabilities"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "স্টোরফ্রন্ট সক্ষমতা" : "Core Visual Capabilities"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn"
                  ? "কার্টএক্স থিমের মূল সুবিধাসমূহ"
                  : "Built Into Every Theme"}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {locale === "bn"
                ? "আমাদের প্রতিটি থিম আধুনিক মোবাইল ক্রেতাদের অভিজ্ঞতা এবং উচ্চ কনভার্সন রেট নিশ্চিত করার জন্য বিশেষভাবে অপ্টিমাইজড।"
                : "Every CartX theme is purpose-built for high conversion rates, frictionless mobile checkouts, and effortless brand identity personalization."}
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Feature Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {THEME_FEATURES.map((feature, index) => (
            <ThemeFeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
