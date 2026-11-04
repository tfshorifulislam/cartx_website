"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  UserCheck,
  Sliders,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function StartView({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  // Production Merchant App endpoints configured via environment variables
  const merchantSignupUrl =
    process.env.NEXT_PUBLIC_MERCHANT_SIGNUP_URL || "/register";
  const merchantLoginUrl =
    process.env.NEXT_PUBLIC_MERCHANT_LOGIN_URL || "/login";

  const isExternalSignup = merchantSignupUrl.startsWith("http");
  const isExternalLogin = merchantLoginUrl.startsWith("http");

  const onboardingSteps = [
    {
      num: "01",
      icon: UserCheck,
      titleEn: "1. Create Your Account",
      titleBn: "১. আপনার অ্যাকাউন্ট তৈরি করুন",
      descEn:
        "Provide your store name, business email, and administrative credentials in the secure merchant application portal.",
      descBn:
        "নিরাপদ মার্চেন্ট পোর্টালে আপনার স্টোরের নাম, ব্যবসায়িক ইমেইল এবং প্রশাসনিক তথ্য প্রদান করুন।",
    },
    {
      num: "02",
      icon: Sliders,
      titleEn: "2. Configure Your Store",
      titleBn: "২. স্টোর কনফিগার করুন",
      descEn:
        "Upload products, customize your theme, and connect your local bKash/Nagad gateways and courier partners.",
      descBn:
        "প্রোডাক্ট আপলোড করুন, ব্র্যান্ডের থিম সাজান এবং বিকাশ/নগদ পেমেন্ট ও কুরিয়ার পার্টনার যুক্ত করুন।",
    },
    {
      num: "03",
      icon: ShoppingBag,
      titleEn: "3. Prepare to Start Selling",
      titleBn: "৩. বিক্রি শুরু করার প্রস্তুতি নিন",
      descEn:
        "Share your storefront URL, test your checkout pipeline, and start accepting online customer orders.",
      descBn:
        "আপনার স্টোরফ্রন্ট লিংক শেয়ার করুন, চেকআউট পরীক্ষা করুন এবং অনলাইন অর্ডার গ্রহণ শুরু করুন।",
    },
  ];

  const trustHighlights = [
    {
      en: "14-day free trial on all plans",
      bn: "সকল প্ল্যানে ১৪ দিনের ফ্রি ট্রায়াল",
    },
    {
      en: "0% platform commission on sales",
      bn: "বিক্রয়ে ০% প্ল্যাটফর্ম কমিশন",
    },
    {
      en: "No credit card required to begin",
      bn: "শুরু করতে ক্রেডিট কার্ডের প্রয়োজন নেই",
    },
  ];

  return (
    <article className={cn("flex flex-col min-h-screen bg-background text-foreground transition-colors", className)}>
      {/* Hero Section */}
      <section
        aria-label="Get Started Hero"
        className="hero-bg relative overflow-hidden transition-colors py-12"
      >
        {/* Decorative subtle background accents */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
          style={{
            background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
          }}
        />

        <div className="container relative hero-padding mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-2xs">
              <Rocket className="h-3.5 w-3.5" />
              <span className="uppercase tracking-wider">
                {isBn ? "কার্টএক্সে শুরু করুন" : "GET STARTED WITH CARTX"}
              </span>
            </div>
          </ScrollReveal>

          {/* Main H1 Heading */}
          <ScrollReveal delay={80}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text block mb-1">
                {isBn
                  ? "আপনার অনলাইন স্টোর তৈরি শুরু করুন।"
                  : "Start Building Your Online Store."}
              </span>
            </h1>
          </ScrollReveal>

          {/* Supporting Copy */}
          <ScrollReveal delay={120}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {isBn
                ? "আপনার কার্টএক্স অ্যাকাউন্ট তৈরি করুন এবং আপনার স্টোর প্রস্তুত করার জন্য সেটআপ প্রক্রিয়া অনুসরণ করুন।"
                : "Create your CartX account and follow the setup process to prepare your store."}
            </p>
          </ScrollReveal>

          {/* Primary Action & Secondary Login Link */}
          <ScrollReveal delay={160}>
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                {isExternalSignup ? (
                  <a
                    href={merchantSignupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all motion-reduce:transform-none"
                  >
                    <span>{isBn ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={merchantSignupUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all motion-reduce:transform-none"
                  >
                    <span>{isBn ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}

                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all motion-reduce:transform-none"
                >
                  <span>{isBn ? "ডেমো অনুরোধ করুন" : "Request a Demo"}</span>
                </Link>
              </div>

              {/* Secondary Login Link */}
              <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 pt-1">
                <span>{isBn ? "ইতিমধ্যে অ্যাকাউন্ট আছে?" : "Already have an account?"}</span>
                {isExternalLogin ? (
                  <a
                    href={merchantLoginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{isBn ? "লগ ইন করুন" : "Log in"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={merchantLoginUrl}
                    className="font-bold text-primary hover:underline transition-colors"
                  >
                    {isBn ? "লগ ইন করুন" : "Log in"}
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Micro Trust Points */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground pt-4 border-t border-border/60">
              {trustHighlights.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                  <span>{isBn ? t.bn : t.en}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3-Step Store Setup Journey Explanation */}
      <section
        aria-label="Merchant Onboarding Journey"
        className="py-16 sm:py-20 border-b border-border bg-card/30"
      >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal delay={0} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
              {isBn ? "সহজ ৩টি ধাপ" : "ONBOARDING SEQUENCE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="brand-gradient-text">
                {isBn
                  ? "যেভাবে আপনার স্টোর চালু করবেন"
                  : "How Your Store Goes from Setup to Live"}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আমাদের প্ল্যাটফর্ম সুশৃঙ্খল ধাপে ধাপে আপনার স্টোর প্রস্তুত করতে সাহায্য করে।"
                : "The standard onboarding journey designed to get your storefront operational without technical roadblocks."}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboardingSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.num}
                  delay={idx * 75}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:shadow-card hover:-translate-y-1 motion-reduce:transform-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                        STEP {step.num}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {isBn ? step.titleBn : step.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {isBn ? step.descBn : step.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Direct Support Note */}
          <ScrollReveal delay={200} className="mt-12 text-center">
            <p className="text-xs text-muted-foreground">
              {isBn ? (
                <>
                  বড় ক্যাটালগ বা এন্টারপ্রাইজ মাইগ্রেশন নিয়ে আলোচনা করতে চান?{" "}
                  <Link href="/contact" className="text-primary font-semibold hover:underline">
                    আমাদের সেলস টিমের সাথে কথা বলুন
                  </Link>
                </>
              ) : (
                <>
                  Need guidance on custom integrations or catalog migration?{" "}
                  <Link href="/contact" className="text-primary font-semibold hover:underline">
                    Talk to our team
                  </Link>
                </>
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </article>
  );
}
