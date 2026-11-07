"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function HowItWorksHero({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="How CartX Works Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* Decorative background shapes (Matches Home/Features Hero) */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative hero-padding">
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-xs font-semibold text-primary mb-4 shadow-2xs">
            <Compass className="h-3.5 w-3.5" />
            <span>{isBn ? "সহজ ৭-ধাপে স্টোর গাইড" : "Step-by-Step Onboarding Guide"}</span>
          </div>

          {/* H1 */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "অ্যাকাউন্ট তৈরি থেকে" : "From Signup to"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "আপনার প্রথম অনলাইন অর্ডার" : "Your First Online Order."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {isBn
              ? "কার্টএক্সে অনলাইন স্টোর সেটআপ, প্রোডাক্ট ক্যাটালগিং, পেমেন্ট ও কুরিয়ার যুক্ত করে প্রথম অর্ডার প্রাপ্তির ধারাবাহিক রূপরেখা।"
              : "Follow the proven step-by-step path to configuring your storefront, cataloging inventory, connecting logistics, and fulfilling your first online orders."}
          </p>

          {/* Jump Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] transition-all"
            >
              <span>{isBn ? "এখনই স্টোর শুরু করুন" : "Start Your Free Trial"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#step-1"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-all shadow-2xs"
            >
              <span>{isBn ? "ধাপগুলো দেখুন" : "Explore the 7 Steps"}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
