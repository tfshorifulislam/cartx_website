"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Palette } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeCard } from "../gallery/theme-card";
import { ThemeItem } from "../types";
import { getThemeBySlug, PUBLISHED_THEMES } from "../themes-data";
import { cn } from "@/lib/utils";

export interface ThemeRelatedThemesProps {
  currentTheme: ThemeItem;
  className?: string;
}

export function ThemeRelatedThemes({ currentTheme, className }: ThemeRelatedThemesProps) {
  const { locale } = useLanguage();

  // Find related themes (matching category or style, excluding current theme)
  const relatedThemes = React.useMemo(() => {
    const list: ThemeItem[] = [];

    // 1. First add explicit related themes
    for (const relSlug of currentTheme.relatedThemeSlugs) {
      const rel = getThemeBySlug(relSlug);
      if (rel && rel.slug !== currentTheme.slug && !list.some((t) => t.slug === rel.slug)) {
        list.push(rel);
      }
    }

    // 2. If less than 2, fill from other published themes
    if (list.length < 2) {
      for (const t of PUBLISHED_THEMES) {
        if (t.slug !== currentTheme.slug && !list.some((item) => item.slug === t.slug)) {
          list.push(t);
        }
        if (list.length >= 3) break;
      }
    }

    return list.slice(0, 3);
  }, [currentTheme]);

  if (relatedThemes.length === 0) return null;

  return (
    <section
      id="related-themes"
      aria-label="Related Themes"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-2 select-none">
              <Palette className="size-3 text-secondary-accent shrink-0" />
              <span>{locale === "bn" ? "সম্পর্কিত ডিজাইন" : "Explore Alternatives"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              <span className="block text-foreground">
                {locale === "bn" ? "আরও এক্সপ্লোর করুন" : "Explore Alternatives"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn" ? "অন্যান্য সম্পর্কিত থিম" : "Related Storefront Themes"}
              </span>
            </h2>
          </div>

          <Link
            href="/themes"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors shrink-0"
          >
            <span>{locale === "bn" ? "সকল থিম ব্রাউজ করুন" : "Browse all themes"}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Related Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {relatedThemes.map((theme) => (
            <ScrollReveal key={theme.slug} delay={60}>
              <ThemeCard theme={theme} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

