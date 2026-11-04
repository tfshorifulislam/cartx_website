"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod, PricingPlan } from "../types/pricing.types";
import { getPlanDisplayPrice, formatLimit } from "../lib/pricing-utils";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  className?: string;
}

export function PricingCard({ plan, billingPeriod, className }: PricingCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const priceDisplay = getPlanDisplayPrice(plan, billingPeriod, locale);
  const isHighlighted = Boolean(plan.highlighted);

  const mobileAppBadge =
    plan.features.whiteLabelApps === "included"
      ? isBn
        ? "নেটিভ অ্যাপস"
        : "Native Apps"
      : plan.features.whiteLabelApps === "optional_addon"
      ? isBn
        ? "অ্যাপ অ্যাড-অন"
        : "App Add-on"
      : isBn
      ? "ওয়েব পিডব্লিউএ"
      : "Web PWA";

  const supportBadge =
    plan.features.supportLevel === "dedicated_sla"
      ? isBn
        ? "২৪/৭ এসএলএ"
        : "24/7 SLA"
      : plan.id === "business"
      ? isBn
        ? "অ্যাকাউন্ট ম্যানেজার"
        : "Dedicated Mgr"
      : plan.features.supportLevel === "priority"
      ? isBn
        ? "অগ্রাধিকার সাপোর্ট"
        : "Priority Support"
      : isBn
      ? "স্ট্যান্ডার্ড সাপোর্ট"
      : "Standard Support";

  const ctaHref = plan.prices.isCustom
    ? plan.cta.href
    : `/checkout?plan=${plan.id}&billing=${billingPeriod}`;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl transition-all duration-300 ease-out",
        "p-5 xl:p-6 bg-card text-card-foreground",
        isHighlighted
          ? "border-2 border-primary shadow-md ring-1 ring-primary/20 hover:shadow-dropdown hover:-translate-y-1 motion-reduce:transform-none"
          : "border border-border shadow-xs hover:border-primary/40 hover:shadow-card hover:-translate-y-1 motion-reduce:transform-none",
        className
      )}
    >
      <div className="flex flex-col flex-1">
        {/* 1. Plan Name & Highlight Badge */}
        <div className="flex items-center justify-between gap-2 h-7 mb-1.5">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            {plan.name[isBn ? "bn" : "en"]}
          </h3>
          {isHighlighted && (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              ★ {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "জনপ্রিয়" : "Most Popular")}
            </span>
          )}
        </div>

        {/* 2. Target Audience / Plan Subtitle */}
        <p className="text-xs text-muted-foreground leading-relaxed min-h-[36px] line-clamp-2 mb-4">
          {plan.targetAudience[isBn ? "bn" : "en"]}
        </p>

        {/* 3. Clearly Displayed Price with Smooth Transition on Period Switch */}
        <div className="flex items-baseline gap-1.5 min-h-[34px] transition-all duration-200">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground transition-colors duration-200">
            {priceDisplay.primaryPriceText}
          </span>
          {!priceDisplay.isSpecialState && (
            <span className="text-xs font-semibold text-muted-foreground transition-opacity duration-200">
              {priceDisplay.billingFrequencyText}
            </span>
          )}
        </div>

        {/* 4. Billing Period / Discount / Trial Info */}
        <div className="h-5 flex items-center text-[11px] sm:text-xs truncate mb-4 transition-all duration-200">
          {priceDisplay.secondaryPriceText ? (
            <span
              className={cn(
                "font-medium truncate transition-colors duration-200",
                billingPeriod === "yearly" && !priceDisplay.isSpecialState
                  ? "text-success font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {priceDisplay.secondaryPriceText}
            </span>
          ) : (
            <span className="text-muted-foreground truncate">
              {isBn ? "১৪ দিনের ফ্রি ট্রায়াল" : "14-day free trial"}
            </span>
          )}
        </div>

        {/* 5. Aligned Primary CTA Button */}
        <div className="mb-4">
          <Link
            href={ctaHref}
            className={cn(
              "group/btn w-full h-10 inline-flex items-center justify-center gap-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none",
              isHighlighted
                ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm"
                : "border border-border bg-card text-foreground hover:bg-muted/50"
            )}
          >
            <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transform-none" />
          </Link>
        </div>

        {/* 6. Subtle Divider */}
        <div className="border-t border-border/60 mb-4" />

        {/* 7. Key Features List */}
        <div className="space-y-2.5 flex-1 mb-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            {isBn ? "মূল সুবিধাসমূহ:" : "Key features:"}
          </p>
          {plan.featureHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs text-muted-foreground leading-snug"
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span className="text-foreground/90">
                {feat[isBn ? "bn" : "en"]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Additional Limits & Key Specifications */}
      <div className="pt-3 border-t border-border/60 space-y-2">
        <div className="grid grid-cols-4 gap-1 text-center">
          <div className="rounded bg-muted/40 border border-border/50 py-1 px-1 transition-colors hover:bg-muted/60">
            <span className="block font-medium text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "পণ্য" : "Products"}
            </span>
            <span className="block font-bold text-foreground truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="rounded bg-muted/40 border border-border/50 py-1 px-1 transition-colors hover:bg-muted/60">
            <span className="block font-medium text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "স্টাফ" : "Staff"}
            </span>
            <span className="block font-bold text-foreground truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          <div className="rounded bg-muted/40 border border-border/50 py-1 px-1 transition-colors hover:bg-muted/60">
            <span className="block font-medium text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "স্টোরেজ" : "Storage"}
            </span>
            <span className="block font-bold text-foreground truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          <div className="rounded bg-muted/40 border border-border/50 py-1 px-1 transition-colors hover:bg-muted/60">
            <span className="block font-medium text-muted-foreground uppercase text-[9px] truncate">
              {isBn ? "ডোমেইন" : "Domains"}
            </span>
            <span className="block font-bold text-foreground truncate text-[11px] mt-0.5">
              {formatLimit(plan.limits.customDomains, locale)}
            </span>
          </div>
        </div>

        {/* Micro-Row: Order Limits, Mobile App, Support */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground px-0.5 pt-0.5 border-t border-border/40">
          <span className="truncate">{isBn ? "অর্ডার: সীমাহীন" : "Orders: Unlimited"}</span>
          <span>•</span>
          <span className="truncate">{mobileAppBadge}</span>
          <span>•</span>
          <span className="truncate">{supportBadge}</span>
        </div>
      </div>
    </div>
  );
}
