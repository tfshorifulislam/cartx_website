"use client";

import { splitHeading } from "@/lib/heading-utils";

import React from "react";
import Link from "next/link";
import { Network, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SolutionDetailConfig } from "./types";
import { cn } from "@/lib/utils";

export interface SolutionIntegrationsProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionIntegrations({ solution, className }: SolutionIntegrationsProps) {
  const { locale } = useLanguage();
  const { eyebrow, title, description, items } = solution.integrations;

  return (
    <section
      id="integrations"
      aria-label={`${solution.name[locale] || solution.name.en} Integrations`}
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Network className="size-3 text-secondary-accent shrink-0" />
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

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.name} delay={index * 80}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 group">
                  <div>
                    {/* Top Row: Icon & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="size-11 rounded-lg bg-primary/[0.08] border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        <Icon className="size-5 shrink-0" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {item.category[locale] || item.category.en}
                      </span>
                    </div>

                    {/* Integration Name */}
                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                      {item.name}
                    </h3>

                    {/* Why this integration matters for the industry */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.reason[locale] || item.reason.en}
                    </p>
                  </div>

                  {/* Integration Link */}
                  <div className="pt-4 border-t border-border/60">
                    <Link
                      href={item.linkHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors group/link"
                    >
                      <span>
                        {locale === "bn" ? "ইন্টিগ্রেশন এক্সপ্লোর করুন" : "Explore integration"}
                      </span>
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Global Integrations Link Banner */}
        <div className="text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            <span>
              {locale === "bn"
                ? "কার্টএক্সের সকল পেমেন্ট, কুরিয়ার ও অ্যানালিটিক্স ইন্টিগ্রেশন ব্রাউজ করুন"
                : "Browse all CartX payment, courier, and analytics integrations"}
            </span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

