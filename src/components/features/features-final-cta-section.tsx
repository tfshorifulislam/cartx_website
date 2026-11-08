"use client";

import React from "react";
import { Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface FeaturesFinalCTASectionProps {
  className?: string;
}

/**
 * Section 07 — Final CTA for the CartX Features Overview Page (/features).
 * Closing call-to-action encouraging visitors to explore CartX subscription plans.
 * Standardized to match Home Page Final CTA design.
 */
export function FeaturesFinalCTASection({ className }: FeaturesFinalCTASectionProps) {
  const { t, locale } = useLanguage();

  return (
    <StandardCTASection
      ariaLabel="Find the Right Tools for Your Business"
      className={className}
      badge={{
        icon: Rocket,
        text: t("featuresCta.badge"),
      }}
      titlePlain={t("featuresCta.titlePlain")}
      titleHighlight={t("featuresCta.titleHighlight")}
      description={t("featuresCta.description")}
      actions={
        <CTAButton
          action="viewPricing"
          variant="primary"
          locale={locale}
          size="lg"
          showArrow
          className="w-full sm:w-auto px-8 py-3 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-hover hover:-translate-y-0.5 text-primary-foreground shadow-md transition-all duration-200"
        />
      }
      trustNote={t("featuresCta.trustNote")}
    />
  );
}
