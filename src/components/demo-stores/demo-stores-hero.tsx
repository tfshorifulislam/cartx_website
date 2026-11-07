"use client";

import React from "react";
import { Store, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface DemoStoresHeroProps {
  className?: string;
  onExploreClick?: () => void;
}

export function DemoStoresHero({ className, onExploreClick }: DemoStoresHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Demo Stores Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors py-12",
        className
      )}
    >
      {/* Decorative background shapes */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative hero-padding">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Pill Badge */}
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-4 shadow-2xs">
              <Store className="h-3.5 w-3.5 text-primary" />
              <span>{isBn ? "লাইভ স্টোরফ্রন্ট অভিজ্ঞতা" : "Interactive Storefront Gallery"}</span>
            </div>
          </ScrollReveal>

          {/* Main H1 Heading */}
          <ScrollReveal delay={80}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18] mb-4">
              <span className="brand-gradient-text">
                {isBn
                  ? "আসল কেনাকাটার অনুভূতি নিন ৬টি ডেমো স্টোরে"
                  : "Experience Real E-Commerce with 6 Interactive Demo Stores"}
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheading / Description */}
          <ScrollReveal delay={140}>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              {isBn
                ? "ফ্যাশন, গ্যাজেট, কসমেটিকস কিংবা মুদি সামগ্রী—প্রতিটি খাতের জন্য অপ্টিমাইজড থিম এবং সম্পূর্ণ কেনাকাটা প্রক্রিয়া সরাসরি টেস্ট করুন।"
                : "Explore real e-commerce experiences built with CartX. Browse dynamic storefronts, test product variants, and preview checkout flows across desktop and mobile."}
            </p>
          </ScrollReveal>

          {/* Scroll Action Button */}
          <ScrollReveal delay={200}>
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span>{isBn ? "ডেমো স্টোরগুলো দেখুন" : "Explore Demo Stores"}</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
