"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { INTEGRATION_WORKFLOW_STEPS } from "../integrations-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationWorkflowProps {
  className?: string;
}

export function IntegrationWorkflow({ className }: IntegrationWorkflowProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Integration Workflow"
      className={cn("py-16 sm:py-24 border-b border-border bg-background", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              {isBn ? "কাজের প্রক্রিয়া" : "Setup Workflow"}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "সহজ সেটআপ প্রক্রিয়া" : "Seamless Setup Flow"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "মাত্র ৬টি সহজ ধাপে ইন্টিগ্রেশন চালু করুন" : "How CartX Integrations Work in 6 Steps"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isBn
                ? "জটিল কোনো কোডিং ছাড়াই নিরাপদভাবে আপনার পছন্দের পেমেন্ট, কুরিয়ার ও অ্যানালিটিক্স টুল সংযুক্ত করুন।"
                : "No complex coding required. Connect your third-party providers with zero downtime and strict security guarantees."}
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INTEGRATION_WORKFLOW_STEPS.map((step, idx) => (
            <ScrollReveal
              key={step.stepNumber}
              delay={Math.min(idx * 70, 350)}
            >
              <div className="relative flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-extrabold shadow-sm">
                    {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {isBn ? `ধাপ ${step.stepNumber}` : `Step ${step.stepNumber}`}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-base font-bold text-foreground mb-2">
                  {step.title[isBn ? "bn" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.description[isBn ? "bn" : "en"]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

