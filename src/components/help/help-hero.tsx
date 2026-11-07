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
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home Hero) ── */}

      {/* Large soft radial in the top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content (uses centralized .hero-padding token) ── */}
      <div className="container relative hero-padding">
        <ScrollReveal
          direction="up"
          delay={0}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
            <HelpCircle className="size-3 text-secondary-accent shrink-0" />
            <span>
              {isBn ? "সহায়তা কেন্দ্র ও প্রশ্নোত্তর" : "Help Center & Knowledge Base"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "আমরা আপনাকে কীভাবে" : "How Can We"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "সাহায্য করতে পারি?" : "Help You?"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-8 text-balance">
            {isBn
              ? "স্টোর সেটআপ, পণ্য আপলোড, পেমেন্ট গেটওয়ে এবং কুরিয়ার পরিচালনা সম্পর্কিত যেকোনো প্রশ্নের স্পষ্ট উত্তর খুঁজুন।"
              : "Find quick answers, setup guides, and technical solutions for launching, running, and scaling your CartX store."}
          </p>

          {/* Integrated Search Bar */}
          <div className="w-full max-w-xl mx-auto relative px-1 sm:px-0">
            <Search className="absolute left-4 sm:left-4.5 top-1/2 -translate-y-1/2 size-4 sm:size-4.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                isBn
                  ? "যেকোনো প্রশ্ন অনুসন্ধান করুন (যেমন: বিকাশ, কুরিয়ার, ডোমেন)..."
                  : "Search topics, features, or questions (e.g. bKash, courier, domain)..."
              }
              className="w-full rounded-xl sm:rounded-2xl border border-border bg-card/90 backdrop-blur-xs pl-10 sm:pl-11 pr-10 py-3 sm:py-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground cursor-pointer rounded-full"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

