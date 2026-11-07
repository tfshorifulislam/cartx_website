"use client";

import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { INTEGRATION_SECURITY_PILLARS } from "../integrations-data";
import { IntegrationIcon } from "./integration-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationSecurityProps {
  className?: string;
}

export function IntegrationSecurity({ className }: IntegrationSecurityProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Security and Compliance"
      className={cn("py-16 sm:py-24 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{isBn ? "নিরাপত্তা ও কমপ্লায়েন্স" : "Security & Reliability"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "নিরাপদ ও নির্ভরযোগ্য" : "Data Protection by Design"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "ব্যাংক-গ্রেড সুরক্ষা ও আর্কিটেকচার" : "Enterprise Security Built Into Every Integration"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isBn
                ? "আপনার এপিআই কি, মার্চেন্ট সিক্রেট এবং কাস্টমার ডেটা সুরক্ষিত রাখতে কার্টএক্স সর্বোচ্চ নিরাপত্তা মান মেনে চলে।"
                : "Every external connection is protected by strict isolation, encrypted vaulting, and cryptographic webhook verification."}
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEGRATION_SECURITY_PILLARS.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              delay={Math.min(idx * 60, 300)}
            >
              <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
                  <IntegrationIcon name={pillar.iconName} className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {pillar.title[isBn ? "bn" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description[isBn ? "bn" : "en"]}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-background/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {isBn
                  ? "জিরো ট্রাস্ট ক্রেডেনশিয়াল স্টোরেজ"
                  : "Zero-Trust Credential Isolation"}
              </h4>
              <p className="text-xs text-muted-foreground">
                {isBn
                  ? "ক্লায়েন্ট সাইড স্ক্রিপ্ট বা ব্রাউজার কোডে কোনো প্রাইভেট এপিআই কি অথবা পেমেন্ট সিক্রেট কখনই প্রকাশিত হয় না।"
                  : "Private API keys and merchant secrets are never exposed in browser payloads or public responses."}
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            {isBn ? "১০০% ভল্ট প্রোটেকশন" : "100% Vault Protected"}
          </span>
        </div>
      </div>
    </section>
  );
}

