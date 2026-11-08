"use client";

import React from "react";
import { Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface SolutionsFinalCTASectionProps {
  className?: string;
}

export function SolutionsFinalCTASection({
  className,
}: SolutionsFinalCTASectionProps) {
  const { t } = useLanguage();
  const [l1, l2] = (t("solutionsCta.title") || "").split("\n");

  return (
    <StandardCTASection
      ariaLabel="Start Your Store Today"
      className={className}
      badge={{
        icon: Rocket,
        text: t("solutionsCta.eyebrow"),
      }}
      titlePlain={l1}
      titleHighlight={l2}
      description={t("solutionsCta.description")}
      primaryButton={{
        href: "/start",
        text: t("solutionsCta.primary"),
        showArrow: true,
      }}
      secondaryButton={{
        href: "/features",
        text: t("solutionsCta.secondary"),
      }}
      trustNote={t("solutionsCta.featurePill")}
    />
  );
}
