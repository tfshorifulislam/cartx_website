"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  ShoppingBag,
  Mail,
  Phone,
  ShieldCheck,
  Loader2,
  AlertCircle,
  ArrowRight,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckoutCustomerInfo } from "@/lib/checkout/checkout-types";
import { validateCheckoutCustomerInfo } from "@/lib/checkout/checkout-validation";
import { cn } from "@/lib/utils";

interface CheckoutFormProps {
  onSubmit: (info: CheckoutCustomerInfo) => Promise<void>;
  isSubmitting: boolean;
  serverError?: string | null;
  className?: string;
}

export function CheckoutForm({
  onSubmit,
  isSubmitting,
  serverError,
  className,
}: CheckoutFormProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  const [fullName, setFullName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);

  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof CheckoutCustomerInfo, string>>
  >({});
  const [termsError, setTermsError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTermsError(null);

    const info: CheckoutCustomerInfo = {
      fullName,
      storeName,
      email,
      phone,
    };

    const validation = validateCheckoutCustomerInfo(info, isBn);
    if (!validation.valid) {
      setFieldErrors(validation.errors);
      return;
    }

    if (!termsAccepted) {
      setTermsError(
        isBn
          ? "এগিয়ে যেতে অনুগ্রহ করে শর্তাবলীতে সম্মতি প্রদান করুন।"
          : "Please agree to the Terms of Service to proceed."
      );
      return;
    }

    setFieldErrors({});
    await onSubmit(info);
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all",
        className
      )}
    >
      {/* Form Header */}
      <div className="mb-6 pb-4 border-b border-border/70">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-2 shadow-2xs">
          <ShieldCheck className="size-3.5 text-primary" />
          <span>{t("checkout.eyebrow")}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-1">
          {t("checkout.customerInfoTitle")}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {t("checkout.customerInfoSubtitle")}
        </p>
      </div>

      {/* Error Alert Banner */}
      {serverError && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-5 rounded-2xl border border-destructive/30 bg-destructive/[0.08] p-3.5 text-xs text-destructive flex items-start gap-2.5 animate-in fade-in duration-150 motion-reduce:animate-none"
        >
          <AlertCircle className="size-4 shrink-0 mt-0.5 text-destructive" />
          <div className="flex-1 leading-relaxed">
            <p className="font-semibold mb-0.5">{t("checkout.errorTitle")}</p>
            <p>{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name & Store Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="checkout-fullname" error={Boolean(fieldErrors.fullName)}>
              {t("checkout.fullNameLabel")}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                <User className="size-4" />
              </div>
              <Input
                id="checkout-fullname"
                type="text"
                name="fullName"
                autoComplete="name"
                required
                disabled={isSubmitting}
                placeholder={t("checkout.fullNamePlaceholder")}
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (fieldErrors.fullName) {
                    setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
                  }
                }}
                error={Boolean(fieldErrors.fullName)}
                className="pl-10"
              />
            </div>
            {fieldErrors.fullName && (
              <p className="text-xs text-destructive font-medium mt-1">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          {/* Store / Brand Name */}
          <div className="space-y-1.5">
            <Label htmlFor="checkout-storename" error={Boolean(fieldErrors.storeName)}>
              {t("checkout.storeNameLabel")}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                <ShoppingBag className="size-4" />
              </div>
              <Input
                id="checkout-storename"
                type="text"
                name="storeName"
                autoComplete="organization"
                required
                disabled={isSubmitting}
                placeholder={t("checkout.storeNamePlaceholder")}
                value={storeName}
                onChange={(e) => {
                  setStoreName(e.target.value);
                  if (fieldErrors.storeName) {
                    setFieldErrors((prev) => ({ ...prev, storeName: undefined }));
                  }
                }}
                error={Boolean(fieldErrors.storeName)}
                className="pl-10"
              />
            </div>
            {fieldErrors.storeName && (
              <p className="text-xs text-destructive font-medium mt-1">
                {fieldErrors.storeName}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Work Email */}
          <div className="space-y-1.5">
            <Label htmlFor="checkout-email" error={Boolean(fieldErrors.email)}>
              {t("checkout.emailLabel")}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                <Mail className="size-4" />
              </div>
              <Input
                id="checkout-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                disabled={isSubmitting}
                placeholder={t("checkout.emailPlaceholder")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) {
                    setFieldErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                error={Boolean(fieldErrors.email)}
                className="pl-10"
              />
            </div>
            {fieldErrors.email && (
              <p className="text-xs text-destructive font-medium mt-1">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Mobile / WhatsApp Number */}
          <div className="space-y-1.5">
            <Label htmlFor="checkout-phone" error={Boolean(fieldErrors.phone)}>
              {t("checkout.phoneLabel")}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
                <Phone className="size-4" />
              </div>
              <Input
                id="checkout-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                disabled={isSubmitting}
                placeholder={t("checkout.phonePlaceholder")}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (fieldErrors.phone) {
                    setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                error={Boolean(fieldErrors.phone)}
                className="pl-10"
              />
            </div>
            {fieldErrors.phone && (
              <p className="text-xs text-destructive font-medium mt-1">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Demo Payment / 14-Day Free Trial Notice Box */}
        <div className="rounded-2xl border border-border/80 bg-muted/40 p-4 mt-2">
          <div className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
              <Lock className="size-3.5" />
            </div>
            <div className="text-xs leading-relaxed">
              <p className="font-bold text-foreground mb-0.5">
                {isBn ? "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই" : "No Credit Card Required Today"}
              </p>
              <p className="text-muted-foreground">
                {isBn
                  ? "আপনার ১৪ দিনের সম্পূর্ণ ঝুঁকিহীন ফ্রি ট্রায়াল অবিলম্বে শুরু হবে। স্টোর চালুর পর বিকাশ, নগদ বা ব্যাংক পেমেন্ট গেটওয়ে সহজেই ড্যাশবোর্ড থেকে যুক্ত করতে পারবেন।"
                  : "Your 14-day risk-free trial activates immediately. You can connect bKash, Nagad, and bank gateways inside your merchant dashboard whenever you are ready."}
              </p>
            </div>
          </div>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="space-y-1 pt-2">
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="checkout-terms"
              checked={termsAccepted}
              onCheckedChange={(val) => {
                setTermsAccepted(Boolean(val));
                if (termsError) setTermsError(null);
              }}
              disabled={isSubmitting}
              error={Boolean(termsError)}
              className="mt-0.5"
            />
            <Label
              htmlFor="checkout-terms"
              className="text-xs text-muted-foreground font-normal leading-relaxed cursor-pointer select-none"
            >
              {t("register.termsPrefix")}{" "}
              <Link
                href="/terms"
                target="_blank"
                className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring rounded-2xs"
              >
                {t("register.termsLink")}
              </Link>{" "}
              {t("register.andText")}{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring rounded-2xs"
              >
                {t("register.privacyLink")}
              </Link>
              . <span className="text-destructive">*</span>
            </Label>
          </div>
          {termsError && (
            <p className="text-xs text-destructive font-medium pl-6">
              {termsError}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>{t("checkout.submittingButton")}</span>
              </>
            ) : (
              <>
                <span>{t("checkout.submitButton")}</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>

        {/* Demo Simulation Notice */}
        <p className="text-[11px] text-center text-muted-foreground leading-normal pt-1">
          {t("checkout.demoNotice")}
        </p>
      </form>
    </div>
  );
}

