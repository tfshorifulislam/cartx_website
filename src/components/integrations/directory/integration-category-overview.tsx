"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { INTEGRATION_CATEGORIES_OVERVIEW } from "../integrations-data";
import { IntegrationIcon } from "./integration-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationCategoryOverviewProps {
  onSelectCategory: (categoryId: string) => void;
  className?: string;
}

export function IntegrationCategoryOverview({
  onSelectCategory,
  className,
}: IntegrationCategoryOverviewProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const target = document.getElementById("integrations-directory");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Integration Categories"
      className={cn("py-16 sm:py-20 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              {isBn ? "ক্যাটাগরি নির্দেশিকা" : "Ecosystem Pillars"}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "স্মার্ট কানেক্টিভিটি" : "E-Commerce Infrastructure"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "৫টি মূল ক্যাটাগরিতে স্বয়ংক্রিয় ইন্টিগ্রেশন" : "Purpose-Built For Bangladeshi Commerce"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isBn
                ? "পেমেন্ট গেটওয়ে, ডেলিভারি লজিস্টিকস, অ্যানালিটিক্স এবং মেসেজিং—প্রতিটি ব্যবসায়িক প্রয়োজন আলাদাভাবে সাজানো।"
                : "From seamless mobile wallet payments to automated parcel booking, explore verified tools built to power your growth."}
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Grid (5 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATION_CATEGORIES_OVERVIEW.map((cat, idx) => (
            <ScrollReveal
              key={cat.id}
              delay={Math.min(idx * 60, 300)}
            >
              <div
                onClick={() => handleCategoryClick(cat.id)}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-border bg-card p-6 cursor-pointer shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  {/* Icon & Count */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-transform group-hover:scale-105">
                      <IntegrationIcon name={cat.iconName} className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {isBn
                        ? `${cat.providerCount}টি সার্ভিস`
                        : `${cat.providerCount} Services`}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cat.title[isBn ? "bn" : "en"]}
                  </h3>
                  <p className="text-xs font-medium text-primary/80 mb-2.5">
                    {cat.tagline[isBn ? "bn" : "en"]}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {cat.description[isBn ? "bn" : "en"]}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{isBn ? "ইন্টিগ্রেশনগুলো দেখুন" : "Explore Category"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

