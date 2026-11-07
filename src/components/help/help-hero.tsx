"use client";

import React from "react";
import { HelpCircle, Search, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface HelpHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

export function HelpHero({ searchQuery, onSearchChange, className }: HelpHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Help Center Hero"
      className={cn("hero-bg relative overflow-hidden transition-colors", className)}
    >
      <div className="container relative hero-padding">
        <ScrollReveal direction="up" distance={20} className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary transition-colors mb-6">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>
              {isBn ? "সহায়তা কেন্দ্র ও প্রশ্নোত্তর" : "Help Center & Knowledge Base"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            <span className="brand-gradient-text block mb-1">
              {isBn
                ? "আমরা আপনাকে কীভাবে সাহায্য করতে পারি?"
                : "How Can We Help You?"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isBn
              ? "স্টোর সেটআপ, পণ্য আপলোড, পেমেন্ট গেটওয়ে এবং কুরিয়ার পরিচালনা সম্পর্কিত যেকোনো প্রশ্নের স্পষ্ট উত্তর খুঁজুন।"
              : "Find quick answers, setup guides, and technical solutions for launching, running, and scaling your CartX store."}
          </p>

          {/* Integrated Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                isBn
                  ? "যেকোনো প্রশ্ন অনুসন্ধান করুন (যেমন: বিকাশ, কুরিয়ার, ডোমেন, কমিশন)..."
                  : "Search topics, features, or questions (e.g. bKash, courier, domain, fees)..."
              }
              className="w-full rounded-2xl border border-border bg-card/90 backdrop-blur-xs pl-12 pr-10 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

