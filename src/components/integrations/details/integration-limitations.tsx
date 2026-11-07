"use client";

import React from "react";
import { AlertTriangle, AlertCircle, DollarSign, Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationLimitationsProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationLimitations({
  integration,
  className,
}: IntegrationLimitationsProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { limitations } = integration;

  return (
    <section
      aria-label="Limitations and Additional Fees"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {isBn ? "সীমাবদ্ধতা ও ফি পলিসি" : "Constraints & Billing"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "ব্যবহারের পরিধি" : "Operational Scope"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "সীমাবদ্ধতা ও ফি সংক্রান্ত স্পষ্ট নির্দেশিকা" : "Limitations & Additional Fees"}
              </span>
            </h2>
          </div>

          {/* Beta Notice Banner if present */}
          {limitations.betaNotice && (
            <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">
                  {isBn ? "বেটা রিলিজ সতর্কতা" : "Beta Release Notice"}
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                  {limitations.betaNotice[isBn ? "bn" : "en"]}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Unsupported Operations */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm mb-4">
                <AlertTriangle className="h-4 w-4" />
                <span>{isBn ? "অসমর্থিত অপারেশনসমূহ" : "Unsupported Operations"}</span>
              </div>
              <ul className="space-y-2.5">
                {limitations.unsupportedOperations.map((op, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{op[isBn ? "bn" : "en"]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Structure & Regional Restrictions */}
            <div className="space-y-6">
              {/* Fee Notice */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{isBn ? "চার্জ ও লেনদেন ফি স্ট্রাকচার" : "Fee Structure Notice"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {limitations.feeStructureNotice[isBn ? "bn" : "en"]}
                </p>
              </div>

              {/* Regional Restrictions */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                  <Globe2 className="h-4 w-4" />
                  <span>{isBn ? "আঞ্চলিক সীমাবদ্ধতা" : "Regional Boundaries"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {limitations.regionalRestrictions[isBn ? "bn" : "en"]}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

