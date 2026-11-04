"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { LoginForm } from "./login-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface LoginViewProps {
  className?: string;
}

export function LoginView({ className }: LoginViewProps) {
  const { t, locale } = useLanguage();
  const isBn = locale === "bn";

  const trustPoints = [
    {
      en: "256-bit TLS encrypted transmission",
      bn: "২৫৬-বিট টিএলএস এনক্রিপ্টেড সংযোগ",
    },
    {
      en: "Multi-staff permission control",
      bn: "টিম মেম্বার পারমিশন এক্সেস",
    },
    {
      en: "Automated session expiry protection",
      bn: "স্বয়ংক্রিয় সেশন সুরক্ষা",
    },
  ];

  return (
    <article
      className={cn(
        "flex flex-col min-h-screen bg-background text-foreground transition-colors overflow-hidden",
        className
      )}
    >
      {/* ── Main Login Hero Viewport ── */}
      <section
        aria-label="Merchant Login Section"
        className="hero-bg relative flex-1 flex items-center justify-center py-12 sm:py-16 lg:py-20"
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

        <div className="container relative mx-auto px-4 sm:px-6 z-10 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4 sm:mb-6 shadow-2xs">
              <Lock className="size-3 text-secondary-accent" />
              <span>{t("login.eyebrow")}</span>
            </div>
          </ScrollReveal>

          {/* Form Card */}
          <ScrollReveal direction="up" delay={80} className="w-full">
            <LoginForm />
          </ScrollReveal>

          {/* Security & Trust Strip below form */}
          <ScrollReveal direction="up" delay={150}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
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

            {/* Support link */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                {isBn
                  ? "লগইন করতে কোনো সমস্যা হচ্ছে? "
                  : "Need assistance with your account? "}
                <Link
                  href="/contact"
                  className="font-semibold text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  <HelpCircle className="size-3" />
                  <span>
                    {isBn ? "সাপোর্টে কথা বলুন" : "Contact CartX Support"}
                  </span>
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </article>
  );
}
