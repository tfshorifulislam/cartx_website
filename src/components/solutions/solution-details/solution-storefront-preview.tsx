"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { Monitor, Lock, ExternalLink, CheckCircle2, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionStorefrontPreviewProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionStorefrontPreview({ solution, className }: SolutionStorefrontPreviewProps) {
  const { locale } = useLanguage();
  const {
    eyebrow,
    title,
    description,
    domain,
    brandName,
    tagline,
    demoThemeId,
    isLiveDemo,
    previewNotice,
    accentGradient,
    highlights,
  } = solution.storefrontPreview;

  return (
    <section
      id="storefront-preview"
      aria-label={`${solution.name[locale] || solution.name.en} Storefront Preview`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Monitor className="size-3 text-secondary-accent shrink-0" />
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

        {/* Browser Window Mockup */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
              {/* Window Header Bar */}
              <div className="bg-muted/70 px-4 py-3 border-b border-border flex items-center justify-between gap-4 select-none">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                  <div className="size-3 rounded-full bg-destructive/60" />
                  <div className="size-3 rounded-full bg-amber-500/60" />
                  <div className="size-3 rounded-full bg-emerald-500/60" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-1.5 bg-background/80 rounded-md py-1 px-3 border border-border/60 text-xs text-muted-foreground">
                    <Lock className="size-3 text-emerald-500 shrink-0" />
                    <span className="font-mono text-[11px] truncate">{domain}</span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden sm:inline">
                    {isLiveDemo ? (locale === "bn" ? "লাইভ স্টোর" : "Live Store") : (locale === "bn" ? "কনসেপ্ট স্টোর" : "Concept Store")}
                  </span>
                </div>
              </div>

              {/* Inside Window: Storefront Canvas */}
              <div className="p-6 sm:p-8 bg-background">
                {/* Simulated Navbar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {brandName.charAt(0)}
                    </div>
                    <span className="font-bold text-foreground text-sm tracking-tight">
                      {brandName}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{locale === "bn" ? "হোম" : "Home"}</span>
                    <span>{locale === "bn" ? "কালেকশন" : "Collections"}</span>
                    <span>{locale === "bn" ? "নতুন আগমন" : "New Arrivals"}</span>
                    <span>{locale === "bn" ? "অফার" : "Offers"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-primary text-primary-foreground">
                      {locale === "bn" ? "কার্ট (০)" : "Cart (0)"}
                    </span>
                  </div>
                </div>

                {/* Simulated Hero Banner */}
                <div
                  className="rounded-xl p-6 sm:p-8 mb-6 text-foreground relative overflow-hidden border border-border/40"
                  style={{ background: accentGradient }}
                >
                  <div className="max-w-md relative z-10">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-background/90 text-foreground mb-3 border border-border/40">
                      {locale === "bn" ? "প্রিমিয়াম ই-কমার্স এক্সপেরিয়েন্স" : "Premium E-commerce Experience"}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold tracking-tight mb-2 text-foreground">
                      {tagline}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/80 mb-4">
                      {locale === "bn"
                        ? "কার্টএক্সের দ্রুততম ও রেসপনসিভ স্টোরফ্রন্ট আর্কিটেকচার যা যেকোনো ডিভাইসে অনায়াসে লোড হয়।"
                        : "Ultra-fast storefront architecture built to convert visitors on mobile and desktop seamlessly."}
                    </p>
                  </div>
                </div>

                {/* Key Features / Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/40 border border-border/50 text-xs text-foreground/90"
                    >
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      <span>{h[locale] || h.en}</span>
                    </div>
                  ))}
                </div>

                {/* Live Demo or Illustrative Callout Bar */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground text-center sm:text-left">
                    <Info className="size-4 text-primary shrink-0" />
                    <span>{previewNotice[locale] || previewNotice.en}</span>
                  </div>

                  {isLiveDemo && demoThemeId ? (
                    <Link
                      href={`/demo-stores?theme=${demoThemeId}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover shadow-xs transition-all duration-200 shrink-0"
                    >
                      <span>
                        {locale === "bn" ? "লাইভ ডেমো স্টোর দেখুন" : "Launch Live Demo Store"}
                      </span>
                      <ExternalLink className="size-3.5" />
                    </Link>
                  ) : (
                    <span className="text-[11px] font-medium text-muted-foreground px-3 py-1 rounded bg-muted border border-border/60 shrink-0">
                      {locale === "bn" ? "কার্টএক্স স্টোরফ্রন্ট মডেল" : "CartX Storefront Model"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

