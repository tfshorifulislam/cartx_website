"use client";

import React, { useState } from "react";
import { BillingPeriod } from "../types/pricing.types";
import {
  getPricingPlans,
  getComparisonCategories,
  getAdditionalCharges,
  getPricingFaqs,
} from "../lib/pricing-service";
import { PricingHero } from "./pricing-hero";
import { PricingGrid } from "./pricing-grid";
import { PlanComparisonTable } from "./plan-comparison-table";
import { WhiteLabelPricing } from "./white-label-pricing";
import { AdditionalCharges } from "./additional-charges";
import { PricingFAQ } from "./pricing-faq";
import { PricingCTA } from "./pricing-cta";

export function PricingView() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const plans = getPricingPlans();
  const comparisonCategories = getComparisonCategories();
  const additionalCharges = getAdditionalCharges();
  const faqs = getPricingFaqs();

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 01: Hero & Billing Selector */}
      <PricingHero
        billingPeriod={billingPeriod}
        onPeriodChange={setBillingPeriod}
      />

      {/* Section 02 & 03: Four Pricing Cards in One Desktop Row */}
      <PricingGrid
        plans={plans}
        billingPeriod={billingPeriod}
      />

      {/* Section 04: Plan Comparison Table */}
      <PlanComparisonTable
        plans={plans}
        categories={comparisonCategories}
        billingPeriod={billingPeriod}
      />

      {/* Section 05: White-label Add-on */}
      <WhiteLabelPricing />

      {/* Section 06: Additional Charges */}
      <AdditionalCharges charges={additionalCharges} />

      {/* Section 07: Pricing FAQ */}
      <PricingFAQ faqs={faqs} />

      {/* Section 08: Final CTA */}
      <PricingCTA />
    </article>
  );
}
