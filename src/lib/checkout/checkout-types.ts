import { BillingPeriod, PricingPlan } from "@/components/pricing/types/pricing.types";

export interface CheckoutCustomerInfo {
  fullName: string;
  storeName: string;
  email: string;
  phone: string;
}

export interface CheckoutBillingInfo {
  planId: string;
  billingPeriod: BillingPeriod;
}

export interface CheckoutOrderSummary {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
  unitPrice: number;
  subtotal: number;
  discount: number;
  discountPercentage: number;
  total: number;
  currency: string;
  currencySymbol: string;
  trialDays: number;
  isCustom: boolean;
}

export interface CheckoutSubmission {
  customerInfo: CheckoutCustomerInfo;
  billingInfo: CheckoutBillingInfo;
}

export interface CheckoutResult {
  success: boolean;
  orderId?: string;
  createdAt?: string;
  message: string;
  fieldErrors?: Partial<Record<keyof CheckoutCustomerInfo, string>>;
  isDemo: true;
  submission?: CheckoutSubmission;
  summary?: CheckoutOrderSummary;
}

export interface CheckoutValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof CheckoutCustomerInfo, string>>;
}

