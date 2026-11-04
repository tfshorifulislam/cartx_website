"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Store,
  User,
  Mail,
  Phone,
  Zap,
  RotateCcw,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CheckoutResult } from "@/lib/checkout/checkout-types";
import { formatCurrency } from "@/components/pricing/lib/pricing-utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CheckoutConfirmationProps {
  result: CheckoutResult;
  onReset: () => void;
  className?: string;
}

export function CheckoutConfirmation({
  result,
  onReset,
  className,
}: CheckoutConfirmationProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  const submission = result.submission;
  const summary = result.summary;

  if (!submission || !summary) {
    return null;
  }

  const { customerInfo, billingInfo } = submission;
  const plan = summary.plan;

  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card animate-in fade-in duration-200 motion-reduce:animate-none",
        className
      )}
    >
      {/* Success Icon & Header */}
      <div className="text-center mb-8">
        <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-success/15 text-success mb-4 shadow-2xs">
          <CheckCircle2 className="size-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-2">
          {t("checkout.confirmationTitle")}
        </h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {t("checkout.confirmationSubtitle")}
        </p>
      </div>

      {/* Prominent Demo Notice Banner */}
      <div
        role="status"
        className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-foreground flex items-start gap-3"
      >
        <AlertTriangle className="size-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
        <div className="flex-1 leading-relaxed">
          <p className="font-bold text-amber-900 dark:text-amber-200 mb-0.5">
            {t("checkout.demoBannerTitle")}
          </p>
          <p className="text-amber-800/90 dark:text-amber-300/90">
            {t("checkout.demoBannerDesc")}
          </p>
        </div>
      </div>

      {/* Structured Details Card */}
      <div className="rounded-2xl border border-border/80 bg-muted/30 p-5 sm:p-6 mb-8 space-y-4">
        {/* Reference & Date */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border/60">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
              {t("checkout.orderIdLabel")}
            </span>
            <span className="text-sm font-mono font-bold text-primary">
              {result.orderId}
            </span>
          </div>
          <div className="sm:text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
              {t("checkout.trialStatusLabel")}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-success">
              <CheckCircle2 className="size-3.5" />
              <span>{t("checkout.trialActive")}</span>
            </span>
          </div>
        </div>

        {/* Store & Customer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pb-4 border-b border-border/60">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <Store className="size-3" />
              <span>{t("checkout.storeLabel")}</span>
            </span>
            <p className="font-bold text-foreground text-sm">
              {customerInfo.storeName}
            </p>
            <p className="text-muted-foreground">
              {customerInfo.storeName.toLowerCase().replace(/[^a-z0-9]/g, "")}.cartx.store
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <User className="size-3" />
              <span>{t("checkout.merchantLabel")}</span>
            </span>
            <p className="font-semibold text-foreground">
              {customerInfo.fullName}
            </p>
            <p className="text-muted-foreground flex items-center gap-1">
              <Mail className="size-3 shrink-0" />
              <span>{customerInfo.email}</span>
            </p>
            <p className="text-muted-foreground flex items-center gap-1">
              <Phone className="size-3 shrink-0" />
              <span>{customerInfo.phone}</span>
            </p>
          </div>
        </div>

        {/* Subscription & Pricing Breakdown */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="font-medium text-muted-foreground flex items-center gap-1.5">
              <Zap className="size-3.5 text-primary" />
              <span>{t("checkout.planSummaryLabel")}</span>
            </span>
            <span className="font-bold text-foreground">
              {plan.name[isBn ? "bn" : "en"]} (
              {billingInfo.billingPeriod === "yearly"
                ? isBn
                  ? "বার্ষিক বিলিং"
                  : "Annual Billing"
                : isBn
                ? "মাসিক বিলিং"
                : "Monthly Billing"}
              )
            </span>
          </div>

          <div className="flex justify-between items-center text-muted-foreground">
            <span>{t("checkout.totalDueToday")}</span>
            <span className="font-extrabold text-success text-sm">
              {formatCurrency(0, summary.currency, locale)}
            </span>
          </div>

          <div className="flex justify-between items-center text-muted-foreground pt-1 border-t border-border/40 text-[11px]">
            <span>{t("checkout.dueAfterTrial")}</span>
            <span className="font-semibold text-foreground">
              {formatCurrency(summary.total, summary.currency, locale)}
              <span className="font-normal text-muted-foreground">
                /{billingInfo.billingPeriod === "yearly" ? (isBn ? "বছর" : "yr") : (isBn ? "মাস" : "mo")}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/login"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all motion-reduce:transform-none"
        >
          <span>{t("checkout.startBuilding")}</span>
          <ArrowRight className="size-4" />
        </Link>

        <Link
          href="/pricing"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all motion-reduce:transform-none"
        >
          <span>{t("checkout.backToPricing")}</span>
        </Link>

        <Button
          type="button"
          variant="ghost"
          onClick={onReset}
          className="w-full sm:w-auto text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="size-3.5" />
          <span>{isBn ? "নতুন ডেমো পরীক্ষা" : "Simulate Again"}</span>
        </Button>
      </div>
    </div>
  );
}
