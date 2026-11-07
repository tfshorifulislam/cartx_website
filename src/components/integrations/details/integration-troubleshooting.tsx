"use client";

import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationTroubleshootingProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationTroubleshooting({
  integration,
  className,
}: IntegrationTroubleshootingProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { troubleshooting } = integration;

  if (!troubleshooting || troubleshooting.length === 0) return null;

  return (
    <section
      aria-label="Troubleshooting Guide"
      className={cn("py-12 sm:py-16 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "সহায়তা ও সমাধান" : "Diagnostic Support"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "ত্রুটি সমাধান গাইড" : "Diagnostic Reference"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "সাধারণ সমস্যা ও সমাধান সংক্রান্ত নির্দেশিকা" : "Troubleshooting Common Errors"}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              {isBn
                ? "ইন্টিগ্রেশন সংযোগ বা লেনদেনের সময় প্রায়শই যে সমস্যাগুলো দেখা যায় এবং সেগুলোর নিশ্চিত সমাধান।"
                : "Fast resolution steps for typical credential mismatch, webhook latency, or verification issues."}
            </p>
          </div>

          <div className="space-y-4">
            {troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      {isBn ? "সমস্যা" : "Reported Issue"}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {item.issue[isBn ? "bn" : "en"]}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-border/50 text-xs sm:text-sm">
                  {/* Cause */}
                  <div className="bg-muted/40 rounded-xl p-3.5">
                    <span className="font-bold text-foreground block mb-1">
                      {isBn ? "সম্ভাব্য কারণ:" : "Probable Cause:"}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.cause[isBn ? "bn" : "en"]}
                    </p>
                  </div>

                  {/* Resolution */}
                  <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/40 rounded-xl p-3.5">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {isBn ? "সমাধানের ধাপ:" : "Resolution Steps:"}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.resolution[isBn ? "bn" : "en"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
