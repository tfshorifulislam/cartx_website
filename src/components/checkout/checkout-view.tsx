"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, Lock, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BillingPeriod } from "@/components/pricing/types/pricing.types";
import {
  calculateOrderSummary,
  processCheckout,
  getPricingPlanById,
} from "@/lib/checkout/checkout-service";
import {
  CheckoutCustomerInfo,
  CheckoutResult,
} from "@/lib/checkout/checkout-types";
import { OrderSummary } from "./order-summary";
import { CheckoutForm } from "./checkout-form";
import { CheckoutConfirmation } from "./checkout-confirmation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface CheckoutViewProps {
  className?: string;
  initialPlan?: string;
  initialBilling?: BillingPeriod;
}

function CheckoutContent({
  className,
  initialPlan,
  initialBilling,
}: CheckoutViewProps) {
  const searchParams = useSearchParams();
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  // Resolve plan and billing cycle from URL query parameters or props
  const paramPlan = searchParams.get("plan") || initialPlan || "growth";
  const paramBilling =
    (searchParams.get("billing") as BillingPeriod) ||
    initialBilling ||
    "monthly";

  // Interactive user override state (derived state pattern without useEffect)
  const [userSelectedPlan, setUserSelectedPlan] = useState<string | null>(null);
  const [userSelectedBilling, setUserSelectedBilling] = useState<BillingPeriod | null>(null);

  const selectedPlanId = userSelectedPlan ?? getPricingPlanById(paramPlan).id;
  const billingPeriod: BillingPeriod =
    userSelectedBilling ?? (paramBilling === "yearly" ? "yearly" : "monthly");

  // Dynamic order summary based on selected plan and cycle
  const orderSummary = calculateOrderSummary(selectedPlanId, billingPeriod);

  // Submission & Confirmation state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [checkoutResult, setCheckoutResult] = useState<CheckoutResult | null>(
    null
  );

  const handlePlanChange = (newPlanId: string) => {
    setUserSelectedPlan(newPlanId);
    if (serverError) setServerError(null);
  };

  const handleBillingPeriodChange = (newPeriod: BillingPeriod) => {
    setUserSelectedBilling(newPeriod);
    if (serverError) setServerError(null);
  };

  const handleFormSubmit = async (customerInfo: CheckoutCustomerInfo) => {
    setServerError(null);
    setIsSubmitting(true);

    try {
      const result = await processCheckout(
        {
          customerInfo,
          billingInfo: {
            planId: selectedPlanId,
            billingPeriod,
          },
        },
        locale
      );

      if (!result.success) {
        setServerError(result.message);
      } else {
        setCheckoutResult(result);
        // Smoothly scroll to the top of the container
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } catch {
      setServerError(
        isBn
          ? "চেকআউট প্রক্রিয়াকরণে অপ্রত্যাশিত ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
          : "An unexpected error occurred during checkout. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCheckoutResult(null);
    setServerError(null);
  };

  const trustPoints = [
    {
      en: "14-day free trial on all retail plans",
      bn: "সকল রিটেইল প্ল্যানে ১৪ দিনের ফ্রি ট্রায়াল",
    },
    {
      en: "0% platform commission on sales",
      bn: "বিক্রয়ে ০% প্ল্যাটফর্ম কমিশন",
    },
    {
      en: "256-bit TLS encrypted session",
      bn: "২৫৬-বিট টিএলএস এনক্রিপ্টেড সেশন",
    },
  ];

  return (
    <article
      className={cn(
        "flex flex-col min-h-screen bg-background text-foreground transition-colors overflow-hidden",
        className
      )}
    >
      <section
        aria-label="Merchant Storefront Checkout Section"
        className="hero-bg relative flex-1 flex flex-col justify-center py-10 sm:py-14 lg:py-16"
      >
        {/* Decorative soft radial in top-right */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          }}
        />

        {/* Small accent orb bottom-left for balance */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
          style={{
            background:
              "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid-dot pattern overlay for depth */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 z-10 max-w-6xl">
          {/* If demo checkout is completed, render Confirmation */}
          {checkoutResult ? (
            <CheckoutConfirmation
              result={checkoutResult}
              onReset={handleReset}
            />
          ) : (
            <>
              {/* Checkout Page Header */}
              <ScrollReveal direction="up" delay={0}>
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 shadow-2xs">
                    <Lock className="size-3 text-secondary-accent" />
                    <span>{t("checkout.eyebrow")}</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                    <span className="brand-gradient-text block mb-1">
                      {t("checkout.heading")}
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {t("checkout.subheading")}
                  </p>
                </div>
              </ScrollReveal>

              {/* Main 2-Column Responsive Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Customer Form (7 cols) */}
                <ScrollReveal
                  direction="up"
                  delay={60}
                  className="lg:col-span-7 w-full"
                >
                  <CheckoutForm
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                    serverError={serverError}
                  />
                </ScrollReveal>

                {/* Right Column: Order Summary (5 cols) */}
                <ScrollReveal
                  direction="up"
                  delay={120}
                  className="lg:col-span-5 w-full"
                >
                  <OrderSummary
                    summary={orderSummary}
                    onBillingPeriodChange={handleBillingPeriodChange}
                    onPlanChange={handlePlanChange}
                  />
                </ScrollReveal>
              </div>

              {/* Trust & Guarantee Strip */}
              <ScrollReveal direction="up" delay={180}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground border-t border-border/60 pt-6">
                  {trustPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 font-medium"
                    >
                      <ShieldCheck className="size-3.5 text-success shrink-0" />
                      <span>{isBn ? point.bn : point.en}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    {isBn
                      ? "প্ল্যান বা চেকআউট সংক্রান্ত যেকোনো প্রশ্নে "
                      : "Have questions about plans or setup? "}
                    <Link
                      href="/contact"
                      className="font-semibold text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <HelpCircle className="size-3" />
                      <span>
                        {isBn ? "আমাদের টিমের সাথে কথা বলুন" : "Contact Our Team"}
                      </span>
                    </Link>
                  </p>
                </div>
              </ScrollReveal>
            </>
          )}
        </div>
      </section>
    </article>
  );
}

export function CheckoutView(props: CheckoutViewProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }
    >
      <CheckoutContent {...props} />
    </Suspense>
  );
}
