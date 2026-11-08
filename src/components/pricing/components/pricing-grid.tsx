"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, PricingPlan } from "../types/pricing.types";
import { PricingCard } from "./pricing-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingGridProps {
  plans: PricingPlan[];
  billingPeriod: BillingPeriod;
  className?: string;
}

export function PricingGrid({
  plans,
  billingPeriod,
  className,
}: PricingGridProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const trustHighlights = [
    {
      icon: CheckCircle2,
      label: isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-Day Free Trial",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই" : "No Credit Card Required",
    },
    {
      icon: Zap,
      label: isBn ? "০% প্ল্যাটফর্ম লেনদেন ফি" : "0% Platform Commission",
    },
  ];

  return (
    <section
      id="plans-grid"
      aria-label="Available Subscription Plans"
      className={cn("pt-6 sm:pt-8 pb-16 sm:pb-20 border-b border-border bg-background", className)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* All Four Pricing Cards in One Single Row on Desktop (lg:grid-cols-4), 2-col on tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={plan.id}
              direction="up"
              delay={idx * 75}
              className="h-full flex flex-col"
            >
              <PricingCard
                plan={plan}
                billingPeriod={billingPeriod}
                className="w-full h-full"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Micro Trust Strip below cards with ScrollReveal */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 pt-6 border-t border-border/70 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground">
            {trustHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 font-medium transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <IconComponent className="h-3 w-3" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
