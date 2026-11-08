"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { splitHeading } from "@/lib/heading-utils";
import { useLanguage } from "@/lib/i18n/language-context";
import { SolutionDetailConfig } from "./types";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export interface SolutionCTAProps {
  solution: SolutionDetailConfig;
  className?: string;
}

export function SolutionCTA({ solution, className }: SolutionCTAProps) {
  const { locale } = useLanguage();
  const { heading, description, primaryCta, secondaryCta, guaranteePill } = solution.cta;
  const [l1, l2] = splitHeading(heading[locale] || heading.en);

  return (
    <StandardCTASection
      ariaLabel={`${solution.name[locale] || solution.name.en} Call to Action`}
      className={className}
      badge={{
        icon: CheckCircle2,
        text: guaranteePill[locale] || guaranteePill.en,
      }}
      titlePlain={l1}
      titleHighlight={l2}
      description={description[locale] || description.en}
      primaryButton={{
        href: "/start",
        text: primaryCta[locale] || primaryCta.en,
        showArrow: true,
      }}
      secondaryButton={{
        href: "/pricing",
        text: secondaryCta[locale] || secondaryCta.en,
      }}
    />
  );
}
