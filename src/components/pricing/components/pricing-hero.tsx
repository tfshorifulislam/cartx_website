"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "../types/pricing.types";
import { BillingToggle } from "./billing-toggle";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingHeroProps {
  billingPeriod: BillingPeriod;
  onPeriodChange: (period: BillingPeriod) => void;
  className?: string;
}

export function PricingHero({
  billingPeriod,
  onPeriodChange,
  className,
}: PricingHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Pricing Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home/Features Hero) ── */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative hero-padding max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center flex flex-col items-center">
          {/* Eyebrow, Heading & Supporting Copy with Entrance Motion */}
          <ScrollReveal direction="up" delay={0} className="w-full flex flex-col items-center">
            {/* Branded Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-4 shadow-2xs">
              <CreditCard className="h-3.5 w-3.5" />
              <span>{isBn ? "স্বচ্ছ মূল্যতালিকা" : "Transparent Pricing"}</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-4">
              <span className="block text-foreground">
                {isBn ? "সহজ, স্বচ্ছ প্রাইসিং" : "Simple, Transparent Pricing"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আপনার অনলাইন ব্যবসার জন্য।" : "for Your Online Business."}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {isBn
                ? "আপনার স্টোরের চাহিদা, দলের আকার এবং প্রয়োজনীয় ফিচারের উপর ভিত্তি করে সঠিক প্ল্যান বেছে নিন।"
                : "Choose a plan based on your store's needs, team size and required features."}
            </p>
          </ScrollReveal>

          {/* Monthly / Yearly Billing Selector with Staggered Entrance Motion */}
          <ScrollReveal direction="up" delay={120} className="w-full flex justify-center">
            <BillingToggle
              billingPeriod={billingPeriod}
              onPeriodChange={onPeriodChange}
              yearlyDiscountPercentage={17}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
