import { PRICING_PLANS } from "@/components/pricing/lib/pricing-service";
import { BillingPeriod, PricingPlan } from "@/components/pricing/types/pricing.types";
import { calculateYearlySavings } from "@/components/pricing/lib/pricing-utils";
import {
  CheckoutOrderSummary,
  CheckoutResult,
  CheckoutSubmission,
} from "./checkout-types";
import { validateCheckoutCustomerInfo } from "./checkout-validation";

/**
 * Retrieve a pricing plan by its unique identifier.
 * Defaults to "growth" if the identifier is not found or invalid.
 */
export function getPricingPlanById(planId: string): PricingPlan {
  const found = PRICING_PLANS.find(
    (p) => p.id.toLowerCase() === (planId || "").toLowerCase()
  );
  if (found) return found;
  // Fallback to the recommended retail plan
  return PRICING_PLANS.find((p) => p.id === "growth") || PRICING_PLANS[0];
}

/**
 * Dynamically calculate the order summary without duplicating pricing data.
 * Derives prices, billing cycles, and yearly savings directly from the pricing plan registry.
 */
export function calculateOrderSummary(
  planId: string,
  billingPeriod: BillingPeriod
): CheckoutOrderSummary {
  const plan = getPricingPlanById(planId);
  const currency = plan.prices.currency || "BDT";
  const currencySymbol = plan.prices.currencySymbol || "৳";
  const trialDays = plan.trialDays ?? 14;
  const isCustom = Boolean(plan.prices.isCustom);

  if (isCustom || plan.prices.monthly === null) {
    return {
      plan,
      billingPeriod,
      unitPrice: 0,
      subtotal: 0,
      discount: 0,
      discountPercentage: 0,
      total: 0,
      currency,
      currencySymbol,
      trialDays,
      isCustom: true,
    };
  }

  const monthlyPrice = plan.prices.monthly;
  const yearlyPrice = plan.prices.yearly ?? monthlyPrice * 12;

  if (billingPeriod === "yearly") {
    const annualStandard = monthlyPrice * 12;
    const savings = calculateYearlySavings(monthlyPrice, yearlyPrice);
    const discount = savings ? savings.annualSavings : Math.max(0, annualStandard - yearlyPrice);
    const discountPercentage = savings ? savings.discountPercentage : 17;

    return {
      plan,
      billingPeriod: "yearly",
      unitPrice: monthlyPrice,
      subtotal: annualStandard,
      discount,
      discountPercentage,
      total: yearlyPrice,
      currency,
      currencySymbol,
      trialDays,
      isCustom: false,
    };
  }

  // Monthly billing
  return {
    plan,
    billingPeriod: "monthly",
    unitPrice: monthlyPrice,
    subtotal: monthlyPrice,
    discount: 0,
    discountPercentage: 0,
    total: monthlyPrice,
    currency,
    currencySymbol,
    trialDays,
    isCustom: false,
  };
}

/**
 * Frontend-only dummy checkout simulation.
 *
 * Simulates a realistic checkout flow and returns an explicit DEMO confirmation state.
 * Fully decoupled from the UI: a backend developer can replace the body of this
 * function with a standard API dispatch (e.g., fetch("/api/checkout", ...)) without
 * touching any frontend components.
 */
export async function processCheckout(
  submission: CheckoutSubmission,
  locale: string = "en"
): Promise<CheckoutResult> {
  const isBn = locale === "bn";

  // 1. Validate customer information
  const validation = validateCheckoutCustomerInfo(submission.customerInfo, isBn);
  if (!validation.valid) {
    return {
      success: false,
      isDemo: true,
      message: isBn
        ? "অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন।"
        : "Please review and complete all required customer fields.",
      fieldErrors: validation.errors,
    };
  }

  // 2. Compute the exact summary from pricing config
  const summary = calculateOrderSummary(
    submission.billingInfo.planId,
    submission.billingInfo.billingPeriod
  );

  // 3. Simulate realistic asynchronous request delay
  await new Promise((resolve) => setTimeout(resolve, 650));

  // 4. Generate structured demo confirmation response
  const demoOrderId = `DEMO-CTX-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  return {
    success: true,
    isDemo: true,
    orderId: demoOrderId,
    createdAt: timestamp,
    message: isBn
      ? "আপনার ১৪ দিনের ফ্রি ট্রায়াল সফলভাবে সক্রিয় করা হয়েছে (ডেমো)।"
      : "Your 14-day free trial has been successfully activated (Demo).",
    submission,
    summary,
  };
}

