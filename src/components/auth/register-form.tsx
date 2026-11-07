"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  ArrowRight,
  Info,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { validateRegisterCredentials } from "@/lib/auth/auth-validation";
import { cn } from "@/lib/utils";

export interface RegisterFormProps {
  className?: string;
}

export function RegisterForm({ className }: RegisterFormProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  // Form input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Interaction and submission states
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    termsAccepted?: string;
  }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ title: string; message: string } | null>(null);

  // Live input change handlers
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (formErrors.fullName) {
      setFormErrors((prev) => ({ ...prev, fullName: undefined }));
    }
    if (serverError) setServerError(null);
    if (notice) setNotice(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (formErrors.email) {
      setFormErrors((prev) => ({ ...prev, email: undefined }));
    }
    if (serverError) setServerError(null);
    if (notice) setNotice(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (formErrors.password) {
      setFormErrors((prev) => ({ ...prev, password: undefined }));
    }
    if (serverError) setServerError(null);
    if (notice) setNotice(null);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (formErrors.confirmPassword) {
      setFormErrors((prev) => ({ ...prev, confirmPassword: undefined }));
    }
    if (serverError) setServerError(null);
    if (notice) setNotice(null);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setNotice(null);

    // 1. Client-side input validation
    const validation = validateRegisterCredentials(
      {
        fullName,
        email,
        password,
        confirmPassword,
        termsAccepted,
      },
      isBn
    );

    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsLoading(true);

    // Display clear notice that merchant store registration is not connected in this frontend-only website
    setNotice({
      title: isBn ? "পাবলিক ডেমো নোটিশ" : "Public Demo Notice",
      message: isBn
        ? "এই পাবলিক মার্কেটিং ওয়েবসাইটে স্টোর রেজিস্ট্রেশন ব্যাকএন্ড সংযুক্ত নেই। কোনো অ্যাকাউন্ট তৈরি বা ডেটা সংরক্ষণ করা হয়নি।"
        : "Merchant store registration is not connected in this public marketing website. No backend account was created and no data was persisted.",
    });
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all",
        className
      )}
    >
      {/* ── Brand Lockup & Header ── */}
      <div className="flex flex-col items-center text-center mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-ring group select-none mb-4 transition-transform hover:scale-105 active:scale-95 motion-reduce:transform-none"
          aria-label="CartX Home"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-extrabold text-base tracking-tight shadow-xs">
            CX
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Cart<span className="text-primary font-black">X</span>
          </span>
        </Link>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-1.5">
          {t("register.heading")}
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
          {t("register.subheading")}
        </p>
      </div>

      {/* ── Registration Form ── */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Frontend Demo Notice (when form is submitted in frontend-only mode) */}
        {notice && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-primary/25 bg-primary/[0.08] p-3.5 text-xs text-foreground flex items-start gap-2.5 animate-in fade-in duration-150 motion-reduce:animate-none"
          >
            <Info className="size-4 shrink-0 mt-0.5 text-primary" />
            <div className="flex-1 leading-relaxed">
              <p className="font-bold text-primary mb-0.5">{notice.title}</p>
              <p className="text-muted-foreground">{notice.message}</p>
            </div>
          </div>
        )}

        {/* Server Response / Error Alert (e.g. when API is not connected) */}
        {serverError && (
          <div
            role="alert"
            aria-live="polite"
            className="rounded-2xl border border-destructive/30 bg-destructive/[0.08] p-3.5 text-xs text-destructive flex items-start gap-2.5 animate-in fade-in duration-150 motion-reduce:animate-none"
          >
            <AlertCircle className="size-4 shrink-0 mt-0.5 text-destructive" />
            <div className="flex-1 leading-relaxed">
              <p className="font-semibold mb-0.5">{t("register.errorTitle")}</p>
              <p>{serverError}</p>
            </div>
          </div>
        )}

        {/* 1. Full Name Field */}
        <div className="space-y-1.5">
          <Label htmlFor="register-fullname" error={Boolean(formErrors.fullName)}>
            {t("register.fullNameLabel")}{" "}
            <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <User className="size-4" />
            </div>
            <Input
              id="register-fullname"
              type="text"
              name="fullName"
              autoComplete="name"
              required
              disabled={isLoading}
              placeholder={t("register.fullNamePlaceholder")}
              value={fullName}
              onChange={handleFullNameChange}
              error={Boolean(formErrors.fullName)}
              aria-describedby={
                formErrors.fullName ? "register-fullname-error" : undefined
              }
              className="pl-10"
            />
          </div>
          {formErrors.fullName && (
            <p
              id="register-fullname-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.fullName}
            </p>
          )}
        </div>

        {/* 2. Email Field */}
        <div className="space-y-1.5">
          <Label htmlFor="register-email" error={Boolean(formErrors.email)}>
            {t("register.emailLabel")}{" "}
            <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <Mail className="size-4" />
            </div>
            <Input
              id="register-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              disabled={isLoading}
              placeholder={t("register.emailPlaceholder")}
              value={email}
              onChange={handleEmailChange}
              error={Boolean(formErrors.email)}
              aria-describedby={
                formErrors.email ? "register-email-error" : undefined
              }
              className="pl-10"
            />
          </div>
          {formErrors.email && (
            <p
              id="register-email-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.email}
            </p>
          )}
        </div>

        {/* 3. Password Field with Show/Hide toggle */}
        <div className="space-y-1.5">
          <Label htmlFor="register-password" error={Boolean(formErrors.password)}>
            {t("register.passwordLabel")}{" "}
            <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <Lock className="size-4" />
            </div>
            <Input
              id="register-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              required
              disabled={isLoading}
              placeholder={t("register.passwordPlaceholder")}
              value={password}
              onChange={handlePasswordChange}
              error={Boolean(formErrors.password)}
              aria-describedby={
                formErrors.password ? "register-password-error" : undefined
              }
              className="pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring rounded-md cursor-pointer transition-colors"
              aria-label={
                showPassword
                  ? t("register.hidePassword")
                  : t("register.showPassword")
              }
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          {formErrors.password && (
            <p
              id="register-password-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.password}
            </p>
          )}
        </div>

        {/* 4. Confirm Password Field with Show/Hide toggle */}
        <div className="space-y-1.5">
          <Label
            htmlFor="register-confirm-password"
            error={Boolean(formErrors.confirmPassword)}
          >
            {t("register.confirmPasswordLabel")}{" "}
            <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <Lock className="size-4" />
            </div>
            <Input
              id="register-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              autoComplete="new-password"
              required
              disabled={isLoading}
              placeholder={t("register.confirmPasswordPlaceholder")}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={Boolean(formErrors.confirmPassword)}
              aria-describedby={
                formErrors.confirmPassword
                  ? "register-confirm-password-error"
                  : undefined
              }
              className="pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring rounded-md cursor-pointer transition-colors"
              aria-label={
                showConfirmPassword
                  ? t("register.hidePassword")
                  : t("register.showPassword")
              }
            >
              {showConfirmPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          {formErrors.confirmPassword && (
            <p
              id="register-confirm-password-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.confirmPassword}
            </p>
          )}
        </div>

        {/* 5. Terms & Conditions Checkbox */}
        <div className="space-y-1 pt-1">
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="terms-accepted"
              checked={termsAccepted}
              onCheckedChange={(val) => {
                setTermsAccepted(Boolean(val));
                if (formErrors.termsAccepted) {
                  setFormErrors((prev) => ({ ...prev, termsAccepted: undefined }));
                }
                if (serverError) setServerError(null);
              }}
              disabled={isLoading}
              error={Boolean(formErrors.termsAccepted)}
              className="mt-0.5"
            />
            <Label
              htmlFor="terms-accepted"
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
          {formErrors.termsAccepted && (
            <p
              id="register-terms-error"
              className="text-xs text-destructive font-medium pl-6"
            >
              {formErrors.termsAccepted}
            </p>
          )}
        </div>

        {/* 6. Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>{t("register.submitting")}</span>
              </>
            ) : (
              <>
                <span>{t("register.submit")}</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>

        {/* 7. Already have an account prompt */}
        <div className="text-center pt-3 border-t border-border/60">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t("register.alreadyAccount")}{" "}
            <Link
              href="/login"
              className="font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring rounded-xs transition-colors"
            >
              {t("register.loginLink")}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

