"use client";

import React from "react";
import { Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { splitHeading } from "@/lib/heading-utils";
import { FeatureDetailConfig } from "./types";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface FeatureCTAProps {
  feature: FeatureDetailConfig;
  className?: string;
}

export function FeatureCTA({ feature, className }: FeatureCTAProps) {
  const { locale } = useLanguage();
  const cta = feature.cta;
  const [l1, l2] = splitHeading(cta.title[locale] || cta.title.en);

  return (
    <StandardCTASection
      ariaLabel="Closing Call to Action"
      className={className}
      badge={{
        icon: Zap,
        text: cta.eyebrow[locale] || cta.eyebrow.en,
      }}
      titlePlain={l1}
      titleHighlight={l2}
      description={cta.description[locale] || cta.description.en}
      primaryButton={{
        href: "/pricing",
        text: cta.buttonText[locale] || cta.buttonText.en,
        showArrow: true,
      }}
      trustNote={cta.trustNote[locale] || cta.trustNote.en}
    />
  );
}
