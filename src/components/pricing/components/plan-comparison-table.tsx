"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Minus, Layers, ArrowRight, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, ComparisonCategory, PricingPlan } from "../types/pricing.types";
import { MobilePlanComparison } from "./mobile-plan-comparison";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface PlanComparisonTableProps {
  plans: PricingPlan[];
  categories: ComparisonCategory[];
  billingPeriod?: BillingPeriod;
  className?: string;
}

export function PlanComparisonTable({
  plans,
  categories,
  billingPeriod = "monthly",
  className,
}: PlanComparisonTableProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const renderValue = (val: unknown) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-3.5 w-3.5" />
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center justify-center text-muted-foreground/40">
          <Minus className="h-3.5 w-3.5" />
        </span>
      );
    }
    if (typeof val === "object" && val !== null && "en" in val && "bn" in val) {
      const locVal = val as { en: string; bn: string };
      return (
        <span className="text-xs font-semibold text-foreground">
          {locVal[isBn ? "bn" : "en"]}
        </span>
      );
    }
    return (
      <span className="text-xs font-medium text-foreground">
        {String(val)}
      </span>
    );
  };

  return (
    <section
      id="plan-comparison"
      aria-label="Detailed Plan Comparison"
      className={cn("py-16 sm:py-20 border-b border-border bg-card/30", className)}
    >
      <div className="container mx-auto">
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delay={0} className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>{isBn ? "ফিচার তুলনা" : "Plan Comparison"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="brand-gradient-text">
              {isBn
                ? "ফিচার ও সক্ষমতার পূর্ণাঙ্গ তুলনা"
                : "Compare All Features & Plan Entitlements"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "আপনার ব্যবসার জন্য কোন প্ল্যানটি সবচেয়ে উপযুক্ত তা ফিচারভিত্তিক তুলনা করে নিশ্চিত হন।"
              : "Evaluate exact catalog limits, staff accounts, logistics integrations, and white-label capabilities side-by-side."}
          </p>
        </ScrollReveal>

        {/* Mobile View (Tabbed/Grouped Cards with Motion) */}
        <MobilePlanComparison plans={plans} categories={categories} />

        {/* Desktop & Tablet View (Horizontally Scrollable Full Table with Entrance Motion) */}
        <ScrollReveal
          direction="up"
          delay={100}
          className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-card shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header: Plan Names & CTAs */}
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th scope="col" className="p-5 w-[28%] text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {isBn ? "ফিচার ও সক্ষমতা" : "Features & Capabilities"}
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={cn(
                        "p-5 text-center w-[18%] transition-colors",
                        plan.highlighted && "bg-primary/[0.04]"
                      )}
                    >
                      <div className="font-extrabold text-base text-foreground mb-1">
                        {plan.name[isBn ? "bn" : "en"]}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-normal line-clamp-1 mb-3">
                        {plan.targetAudience[isBn ? "bn" : "en"]}
                      </div>
                      <Link
                        href={
                          plan.prices.isCustom
                            ? plan.cta.href
                            : `/checkout?plan=${plan.id}&billing=${billingPeriod}`
                        }
                        className={cn(
                          "group/thbtn inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150 w-full shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none",
                          plan.highlighted
                            ? "bg-primary text-primary-foreground hover:bg-[var(--primary-hover)]"
                            : "border border-border bg-card text-foreground hover:bg-muted/50"
                        )}
                      >
                        <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/thbtn:translate-x-0.5 motion-reduce:transform-none" />
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body: Grouped by Categories */}
              <tbody>
                {categories.map((category) => (
                  <React.Fragment key={category.id}>
                    {/* Category Header Row */}
                    <tr className="border-b border-border bg-muted/60">
                      <td
                        colSpan={plans.length + 1}
                        className="py-2.5 px-5 text-[11px] font-extrabold uppercase tracking-wider text-primary"
                      >
                        {category.name[isBn ? "bn" : "en"]}
                      </td>
                    </tr>

                    {/* Features Rows */}
                    {category.features.map((feature) => (
                      <tr
                        key={feature.id}
                        className="border-b border-border/40 hover:bg-muted/20 transition-colors duration-150"
                      >
                        {/* Feature Name & Tooltip */}
                        <td className="py-3.5 px-5 text-xs font-medium text-foreground">
                          <div className="flex items-center gap-1.5">
                            <span>{feature.name[isBn ? "bn" : "en"]}</span>
                            {feature.tooltip && (
                              <span
                                title={feature.tooltip[isBn ? "bn" : "en"]}
                                className="cursor-help text-muted-foreground/70 hover:text-foreground transition-colors"
                              >
                                <HelpCircle className="h-3.5 w-3.5" />
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Plan Values */}
                        {plans.map((plan) => (
                          <td
                            key={plan.id}
                            className={cn(
                              "py-3.5 px-5 text-center transition-colors duration-150",
                              plan.highlighted && "bg-primary/[0.02]"
                            )}
                          >
                            {renderValue(feature.planValues[plan.id])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
