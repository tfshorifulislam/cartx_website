"use client";

import React from "react";
import { Lock, KeyRound, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationSecurityNotesProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationSecurityNotes({
  integration,
  className,
}: IntegrationSecurityNotesProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { securityNotes } = integration;

  return (
    <section
      aria-label="Security Notes"
      className={cn("py-12 sm:py-16 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {isBn ? "নিরাপত্তা নীতি" : "Security Architecture"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "নিরাপত্তা ও এনক্রিপশন" : "Security Architecture"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "নিরাপত্তা প্রটোকল ও এনক্রিপশন স্ট্যান্ডার্ড" : "Security Notes & Best Practices"}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Credential Storage */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <Lock className="h-4 w-4" />
                <span>{isBn ? "ক্রেডেনশিয়াল স্টোরেজ" : "Credential Vaulting"}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {securityNotes.credentialStorage[isBn ? "bn" : "en"]}
              </p>
            </div>

            {/* Permission Scope */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <KeyRound className="h-4 w-4" />
                <span>{isBn ? "অনুমতির পরিধি" : "Least Privilege Scope"}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {securityNotes.permissionScope[isBn ? "bn" : "en"]}
              </p>
            </div>

            {/* Webhook Verification */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <FileCheck className="h-4 w-4" />
                <span>{isBn ? "ওয়েবহুক ভেরিফিকেশন" : "Webhook Verification"}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {securityNotes.webhookVerification[isBn ? "bn" : "en"]}
              </p>
            </div>
          </div>

          {/* Best Practices Checklist */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-4">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>{isBn ? "মার্চেন্টদের জন্য সেরা নিরাপত্তা অনুশীলন:" : "Recommended Merchant Best Practices:"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {securityNotes.bestPractices.map((bp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{bp[isBn ? "bn" : "en"]}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

