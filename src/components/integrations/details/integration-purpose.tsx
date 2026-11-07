"use client";

import React from "react";
import { CheckCircle2, Target, Cpu, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationPurposeProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationPurpose({ integration, className }: IntegrationPurposeProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { whatItDoes } = integration;

  return (
    <section
      aria-label="What the Integration Does"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Section Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "সেবা ও উদ্দেশ্য" : "Capabilities & Impact"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "কাজের পরিধি ও সুবিধা" : "Functional Overview"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "ইন্টিগ্রেশনটি কীভাবে কাজ করে ও কী সুবিধা দেয়" : "What This Integration Does"}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Purpose & Problem Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                    <Target className="h-4 w-4" />
                    <span>{isBn ? "মূল উদ্দেশ্য" : "Primary Objective"}</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {whatItDoes.purpose[isBn ? "bn" : "en"]}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>{isBn ? "যে ব্যবসায়িক সমস্যার সমাধান করে" : "Business Problem Solved"}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {whatItDoes.businessProblem[isBn ? "bn" : "en"]}
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works Card */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <Cpu className="h-4 w-4" />
                <span>{isBn ? "কাজের পদ্ধতি ও আর্কিটেকচার" : "How It Works Under the Hood"}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {whatItDoes.howItWorks[isBn ? "bn" : "en"]}
              </p>

              {/* Key Benefits */}
              <div className="pt-4 border-t border-border/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                  {isBn ? "প্রধান সুবিধাসমূহ:" : "Core Merchant Benefits:"}
                </h4>
                <ul className="space-y-2">
                  {whatItDoes.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{benefit[isBn ? "bn" : "en"]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

