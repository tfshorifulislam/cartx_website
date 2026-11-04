"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Zap, ArrowRight, RotateCcw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CheckoutOrderSummary } from "@/lib/checkout/checkout-types";
import { BillingPeriod } from "@/components/pricing/types/pricing.types";
import { PRICING_PLANS } from "@/components/pricing/lib/pricing-service";
import { formatCurrency } from "@/components/pricing/lib/pricing-utils";
import { cn } from "@/lib/utils";

interface OrderSummaryProps {
  summary: CheckoutOrderSummary;
  onBillingPeriodChange: (period: BillingPeriod) => void;
  onPlanChange: (planId: string) => void;
  className?: string;
}

export function OrderSummary({
  summary,
  onBillingPeriodChange,
  onPlanChange,
  className,
}: OrderSummaryProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";
  const { plan, billingPeriod, subtotal, discount, total, currency, trialDays } =
    summary;

  const retailPlans = PRICING_PLANS.filter((p) => !p.prices.isCustom);

  return (
    <aside
      aria-label="Order Summary"
      className={cn(
        "rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-card transition-all flex flex-col justify-between h-full",
        className
      )}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-5">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Zap className="size-4" />
            </div>
            <h2 className="text-base font-bold text-foreground">
              {t("checkout.orderSummaryTitle")}
            </h2>
          </div>
          <Link
            href="/pricing"
            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 transition-colors"
          >
            <span>{t("checkout.changePlan")}</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

        {/* Plan Switcher Pills */}
        <div className="mb-5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            {t("checkout.selectedPlan")}
          </label>
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-muted/50 border border-border/60">
            {retailPlans.map((p) => {
              const isSelected = p.id === plan.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onPlanChange(p.id)}
                  className={cn(
                    "py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer truncate",
                    isSelected
                      ? "bg-card text-foreground shadow-2xs border border-border/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  )}
                >
                  <span>{p.name[isBn ? "bn" : "en"]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Plan Details Card */}
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.03] p-4 mb-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <h3 className="text-base font-extrabold text-foreground">
                {plan.name[isBn ? "bn" : "en"]}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  ({billingPeriod === "yearly" ? (isBn ? "বার্ষিক" : "Annual") : (isBn ? "মাসিক" : "Monthly")})
                </span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {plan.tagline[isBn ? "bn" : "en"]}
              </p>
            </div>
            {plan.highlighted && (
              <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "জনপ্রিয়" : "Popular")}
              </span>
            )}
          </div>

          {/* Billing Cycle Switcher */}
          <div className="mt-3 pt-3 border-t border-primary/10 flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              {t("checkout.billingTitle")}
            </span>
            <div className="inline-flex rounded-lg border border-border bg-card p-0.5 shadow-2xs text-xs">
              <button
                type="button"
                onClick={() => onBillingPeriodChange("monthly")}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer",
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t("checkout.monthly")}
              </button>
              <button
                type="button"
                onClick={() => onBillingPeriodChange("yearly")}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1",
                  billingPeriod === "yearly"
                    ? "bg-primary text-primary-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span>{t("checkout.yearly")}</span>
                <span
                  className={cn(
                    "text-[9px] font-bold px-1 py-0.2 rounded",
                    billingPeriod === "yearly"
                      ? "bg-white/20 text-white"
                      : "text-success bg-success/10"
                  )}
                >
                  {t("checkout.saveBadge")}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Line Items & Calculations */}
        <div className="space-y-2.5 text-xs pb-4 border-b border-border/70 mb-4">
          <div className="flex justify-between items-center text-muted-foreground">
            <span>
              {plan.name[isBn ? "bn" : "en"]} ({billingPeriod === "yearly" ? (isBn ? "১২ মাসের হিসাব" : "12-month standard") : (isBn ? "১ মাস" : "1 month")})
            </span>
            <span className="font-semibold text-foreground">
              {formatCurrency(subtotal, currency, locale)}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between items-center text-success font-medium">
              <span>{t("checkout.annualDiscount")}</span>
              <span>-{formatCurrency(discount, currency, locale)}</span>
            </div>
          )}

          <div className="flex justify-between items-center text-muted-foreground pt-1">
            <span>{t("checkout.dueAfterTrial")}</span>
            <span className="font-bold text-foreground">
              {formatCurrency(total, currency, locale)}
              <span className="font-normal text-[11px] text-muted-foreground">
                /{billingPeriod === "yearly" ? (isBn ? "বছর" : "yr") : (isBn ? "মাস" : "mo")}
              </span>
            </span>
          </div>
        </div>

        {/* Total Due Today (Highlighted) */}
        <div className="rounded-2xl border border-success/30 bg-success/[0.08] p-3.5 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-success shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground">
                {t("checkout.totalDueToday")}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {isBn
                  ? `প্রথম ${trialDays} দিন সম্পূর্ণ ফ্রি`
                  : `First ${trialDays} days completely free`}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-success">
              {formatCurrency(0, currency, locale)}
            </span>
          </div>
        </div>

        {/* Feature Highlights Included */}
        <div className="space-y-2 pt-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            {t("checkout.featuresIncluded")}
          </p>
          {plan.featureHighlights.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="size-2.5 stroke-[3]" />
              </div>
              <span className="leading-snug text-foreground/90">
                {feat[isBn ? "bn" : "en"]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust reassurance banner at bottom */}
      <div className="mt-6 pt-4 border-t border-border/70 text-[11px] text-muted-foreground flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <RotateCcw className="size-3.5 text-muted-foreground shrink-0" />
          {isBn ? "যেকোনো সময় বাতিলযোগ্য" : "Cancel anytime during trial"}
        </span>
        <span className="font-semibold text-primary">0% Commission</span>
      </div>
    </aside>
  );
}
