"use client";

import React from "react";
import { CheckSquare, Globe, Clock, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationRequirementsProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationRequirements({
  integration,
  className,
}: IntegrationRequirementsProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { requirements } = integration;

  return (
    <section
      aria-label="Requirements and Eligibility"
      className={cn("py-12 sm:py-16 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "প্রয়োজনীয় শর্ত" : "Prerequisites"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "প্রয়োজনীয় পূর্বশর্ত" : "Prerequisites & Eligibility"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "অ্যাকাউন্ট প্রয়োজনীয়তা ও পূর্বশর্তসমূহ" : "Requirements & Account Eligibility"}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Account Requirements */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                <CheckSquare className="h-4 w-4" />
                <span>{isBn ? "অ্যাকাউন্ট পূর্বশর্ত" : "Merchant Account Setup"}</span>
              </div>
              <ul className="space-y-2.5">
                {requirements.accountRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{req[isBn ? "bn" : "en"]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approval & Regions */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{isBn ? "অনুমোদন প্রক্রিয়া" : "Approval Timeline"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {requirements.approvalProcess[isBn ? "bn" : "en"]}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  <span>{isBn ? "সমর্থিত অঞ্চল ও কারেন্সি" : "Regions & Currencies"}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {requirements.supportedRegions[isBn ? "bn" : "en"]} •{" "}
                  {requirements.supportedCurrencies[isBn ? "bn" : "en"]}
                </p>
              </div>
            </div>

            {/* Plan Eligibility Note */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                  <ShieldAlert className="h-4 w-4" />
                  <span>{isBn ? "প্ল্যান গ্রহণযোগ্যতা" : "CartX Plan Availability"}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {requirements.planEligibilityNote[isBn ? "bn" : "en"]}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-border/60">
                <span className="text-[11px] text-muted-foreground">
                  {isBn
                    ? "আপনার বর্তমান প্ল্যানে এই ফিচার কার্যকর কিনা তা দেখতে প্রাইসিং পেজ পর্যালোচনা করুন।"
                    : "Review your active subscription tier to confirm gateway and courier API availability."}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

