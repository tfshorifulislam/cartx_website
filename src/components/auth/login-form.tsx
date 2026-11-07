"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
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
import { validateLoginCredentials } from "@/lib/auth/auth-validation";
import { cn } from "@/lib/utils";

export interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  // Form input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Interaction and submission states
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ title: string; message: string } | null>(null);

  // Forgot password notice dialog state
  const [showForgotPasswordNotice, setShowForgotPasswordNotice] =
    useState(false);

  // Live input change handlers
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

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setNotice(null);

    // 1. Client-side input validation
    const validation = validateLoginCredentials({ email, password }, isBn);
    if (!validation.valid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setIsLoading(true);

    // Display clear notice that merchant portal is not connected in this frontend-only website
    setNotice({
      title: isBn ? "পাবলিক ডেমো নোটিশ" : "Public Demo Notice",
      message: isBn
        ? "এই পাবলিক মার্কেটিং ওয়েবসাইটে মার্চেন্ট পোর্টাল লগইন সংযুক্ত নেই। কোনো ব্যাকএন্ড বা ডেটাবেস সংযোগ সক্রিয় নয়।"
        : "Merchant portal authentication is not connected in this public marketing website. No backend or database connection is active.",
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
          {t("login.heading")}
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
          {t("login.subheading")}
        </p>
      </div>

      {/* ── Form Section ── */}
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
              <p className="font-semibold mb-0.5">{t("login.errorTitle")}</p>
              <p>{serverError}</p>
            </div>
          </div>
        )}

        {/* Forgot Password Notice Alert */}
        {showForgotPasswordNotice && (
          <div
            role="status"
            className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-3.5 text-xs text-foreground flex items-start gap-2.5 animate-in fade-in duration-150 motion-reduce:animate-none"
          >
            <Info className="size-4 shrink-0 mt-0.5 text-primary" />
            <div className="flex-1 leading-relaxed">
              <p className="font-bold text-primary mb-0.5">
                {t("login.forgotPassword")}
              </p>
              <p className="text-muted-foreground">
                {t("login.forgotPasswordNotice")}
              </p>
              <button
                type="button"
                onClick={() => setShowForgotPasswordNotice(false)}
                className="mt-1.5 text-[11px] font-semibold text-primary hover:underline cursor-pointer"
              >
                {isBn ? "বন্ধ করুন" : "Dismiss"}
              </button>
            </div>
          </div>
        )}

        {/* 1. Email Field */}
        <div className="space-y-1.5">
          <Label htmlFor="login-email" error={Boolean(formErrors.email)}>
            {t("login.emailLabel")}{" "}
            <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <Mail className="size-4" />
            </div>
            <Input
              id="login-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              disabled={isLoading}
              placeholder={t("login.emailPlaceholder")}
              value={email}
              onChange={handleEmailChange}
              error={Boolean(formErrors.email)}
              aria-describedby={
                formErrors.email ? "login-email-error" : undefined
              }
              className="pl-10"
            />
          </div>
          {formErrors.email && (
            <p
              id="login-email-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.email}
            </p>
          )}
        </div>

        {/* 2. Password Field with Show/Hide toggle */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="login-password"
              error={Boolean(formErrors.password)}
            >
              {t("login.passwordLabel")}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <button
              type="button"
              onClick={() => setShowForgotPasswordNotice(true)}
              className="text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring rounded-xs cursor-pointer select-none"
            >
              {t("login.forgotPassword")}
            </button>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground">
              <Lock className="size-4" />
            </div>
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              disabled={isLoading}
              placeholder={t("login.passwordPlaceholder")}
              value={password}
              onChange={handlePasswordChange}
              error={Boolean(formErrors.password)}
              aria-describedby={
                formErrors.password ? "login-password-error" : undefined
              }
              className="pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring rounded-md cursor-pointer transition-colors"
              aria-label={
                showPassword
                  ? t("login.hidePassword")
                  : t("login.showPassword")
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
              id="login-password-error"
              className="text-xs text-destructive font-medium mt-1"
            >
              {formErrors.password}
            </p>
          )}
        </div>

        {/* 3. Remember Me Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onCheckedChange={(val) => setRememberMe(Boolean(val))}
            disabled={isLoading}
          />
          <Label
            htmlFor="remember-me"
            className="text-xs text-muted-foreground font-normal cursor-pointer select-none"
          >
            {t("login.rememberMe")}
          </Label>
        </div>

        {/* 4. Submit Button */}
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
                <span>{t("login.submitting")}</span>
              </>
            ) : (
              <>
                <span>{t("login.submit")}</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>

        {/* 5. Sign-up prompt */}
        <div className="text-center pt-3 border-t border-border/60">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t("login.noAccount")}{" "}
            <Link
              href="/start"
              className="font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring rounded-xs transition-colors"
            >
              {t("login.startStoreLink")}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
