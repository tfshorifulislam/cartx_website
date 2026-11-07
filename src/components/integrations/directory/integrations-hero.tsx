"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface IntegrationsHeroProps {
  className?: string;
}

export function IntegrationsHero({ className }: IntegrationsHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const lenis = useLenis();

  const handleBrowseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("integrations-directory");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) {
        lenis.scrollTo(top, {
          duration: 1.0,
          easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
        });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.replaceState(null, "", "#integrations-directory");
    }
  };

  const trustHighlights = [
    {
      icon: Zap,
      label: isBn
        ? "অফিসিয়াল এমএফএস ডিরেক্ট এপিআই"
        : "Direct MFS Gateway APIs",
    },
    {
      icon: Layers,
      label: isBn
        ? "অটোমেটেড কুরিয়ার পার্সেল বুকিং"
        : "Automated Courier Dispatch",
    },
    {
      icon: ShieldCheck,
      label: isBn
        ? "ব্যাংক-গ্রেড ডেটা এনক্রিপশন"
        : "Encrypted Credential Vault",
    },
  ];

  return (
    <section
      aria-label="Integrations Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className,
      )}
    >
      {/* ── Decorative background shapes (Matches Home Hero) ── */}

      {/* Large soft radial in the top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content (uses centralized .hero-padding token) ── */}
      <div className="container relative hero-padding">
        <ScrollReveal
          direction="up"
          delay={0}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
            <Layers className="size-3 text-secondary-accent shrink-0" />
            <span>
              {isBn
                ? "কার্টএক্স ইন্টিগ্রেশন হাব"
                : "CartX Integration Ecosystem"}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "আপনার সমগ্র ব্যবসায়িক" : "Connect CartX With"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "ইকোসিস্টেমের সাথে যুক্ত করুন"
                : "Your Entire Business Ecosystem"}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-7 text-balance">
            {isBn
              ? "স্থানীয় এমএফএস পেমেন্ট গ্রহণ, স্বয়ংক্রিয় কুরিয়ার পার্সেল বুকিং, রিয়েল-টাইম কনভার্সন ট্র্যাকিং এবং এসএমএস নোটিফিকেশন পরিচালনা করুন একটি নিরাপদ ও সমন্বিত প্ল্যাটফর্মে।"
              : "Accept local MFS payments, automate courier parcel dispatch, track campaign conversions, and send instant SMS updates—all from a unified, enterprise-grade architecture."}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
            <a
              href="#integrations-directory"
              onClick={handleBrowseClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>
                {isBn ? "ইন্টিগ্রেশন ব্রাউজ করুন" : "Browse Integrations"}
              </span>
              <ArrowDown className="size-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>
                {isBn
                  ? "নতুন ইন্টিগ্রেশন অনুরোধ করুন"
                  : "Request an Integration"}
              </span>
              <ArrowRight className="size-3.5 text-muted-foreground" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-5 border-t border-border/50 text-xs text-muted-foreground">
            {trustHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <IconComponent className="size-2.5" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
