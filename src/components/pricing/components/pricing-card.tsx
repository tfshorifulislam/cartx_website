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
        "group relative flex flex-col h-full rounded-2xl transition-all duration-300 ease-out",
        "p-6 bg-card text-card-foreground",
        isHighlighted
          ? "border-2 border-primary shadow-md ring-1 ring-primary/20 hover:shadow-xl hover:-translate-y-1.5 motion-reduce:transform-none"
          : "border border-border/80 shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-1 motion-reduce:transform-none",
        className
      )}
    >
      {/* Featured / Recommended Plan Floating Badge */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 select-none">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
            {plan.badge?.[isBn ? "bn" : "en"] || (isBn ? "সর্বাধিক জনপ্রিয়" : "Most Popular")}
          </span>
        </div>
      )}

      {/* 1. Header: Plan Name & Target Audience */}
      <div className="mb-4">
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-1.5">
          {plan.name[isBn ? "bn" : "en"]}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed min-h-[36px] line-clamp-2">
          {plan.targetAudience[isBn ? "bn" : "en"]}
        </p>
      </div>

      {/* 2. Price Section with Prominent Amount */}
      <div className="mb-5 pb-5 border-b border-border/70">
        <div className="flex items-baseline gap-1.5 min-h-[42px] transition-all duration-200">
          <span
            className={cn(
              "font-extrabold tracking-tight text-foreground transition-colors duration-200",
              priceDisplay.isSpecialState
                ? "text-2xl sm:text-3xl"
                : "text-3xl sm:text-4xl"
            )}
          >
            {priceDisplay.primaryPriceText}
          </span>
          {!priceDisplay.isSpecialState && (
            <span className="text-xs font-semibold text-muted-foreground">
              {priceDisplay.billingFrequencyText}
            </span>
          )}
        </div>

        {/* Secondary billing note / Discount badge */}
        <div className="h-6 flex items-center mt-1">
          {priceDisplay.secondaryPriceText ? (
            <span
              className={cn(
                "inline-flex items-center text-xs font-medium truncate transition-colors duration-200",
                billingPeriod === "yearly" && !priceDisplay.isSpecialState
                  ? "rounded-full bg-success/10 text-success font-semibold px-2 py-0.5 border border-success/20"
                  : "text-muted-foreground"
              )}
            >
              {priceDisplay.secondaryPriceText}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              {isBn ? "১৪ দিনের ফ্রি ট্রায়াল অন্তর্ভুক্ত" : "14-day free trial included"}
            </span>
          )}
        </div>
      </div>

      {/* 3. Feature Highlights List (flex-1 pushes specs and CTA downward) */}
      <div className="flex-1 mb-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
          {isBn ? "মূল সুবিধাসমূহ:" : "Included features:"}
        </p>
        <ul className="space-y-2.5">
          {plan.featureHighlights.map((feat, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs text-muted-foreground leading-snug"
            >
              <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <Check className="size-2.5 stroke-[3]" />
              </div>
              <span className="text-foreground/90 font-medium">
                {feat[isBn ? "bn" : "en"]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Plan Limits & Capacity Specifications (Clean 2x2 Grid) */}
      <div className="pt-4 border-t border-border/60 mb-5">
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div className="flex items-center justify-between rounded-lg bg-muted/40 px-2.5 py-1.5 border border-border/50">
            <span className="text-[11px] text-muted-foreground font-medium">
              {isBn ? "পণ্য সীমা" : "Products"}
            </span>
            <span className="text-xs font-bold text-foreground">
              {formatLimit(plan.limits.products, locale)}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/40 px-2.5 py-1.5 border border-border/50">
            <span className="text-[11px] text-muted-foreground font-medium">
              {isBn ? "স্টাফ" : "Staff"}
            </span>
            <span className="text-xs font-bold text-foreground">
              {formatLimit(plan.limits.staffAccounts, locale)}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/40 px-2.5 py-1.5 border border-border/50">
            <span className="text-[11px] text-muted-foreground font-medium">
              {isBn ? "স্টোরেজ" : "Storage"}
            </span>
            <span className="text-xs font-bold text-foreground">
              {formatLimit(plan.limits.storageGB, locale, { en: "GB", bn: "জিবি" })}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/40 px-2.5 py-1.5 border border-border/50">
            <span className="text-[11px] text-muted-foreground font-medium">
              {isBn ? "ডোমেইন" : "Domains"}
            </span>
            <span className="text-xs font-bold text-foreground">
              {formatLimit(plan.limits.customDomains, locale)}
            </span>
          </div>
        </div>

        {/* Micro Specification Bar */}
        <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
          <span className="truncate">{isBn ? "অর্ডার: সীমাহীন" : "Orders: Unlimited"}</span>
          <span className="text-muted-foreground/40">•</span>
          <span className="truncate">{mobileAppBadge}</span>
          <span className="text-muted-foreground/40">•</span>
          <span className="truncate">{supportBadge}</span>
        </div>
      </div>

      {/* 5. Aligned Primary CTA Button at the Bottom of Every Card */}
      <div className="mt-auto">
        <Link
          href={ctaHref}
          className={cn(
            "group/btn w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none",
            isHighlighted
              ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg"
              : "border border-border bg-card text-foreground hover:bg-muted/60 hover:border-border/90"
          )}
        >
          <span>{plan.cta.label[isBn ? "bn" : "en"]}</span>
          <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transform-none" />
        </Link>
      </div>
    </div>
  );
}
