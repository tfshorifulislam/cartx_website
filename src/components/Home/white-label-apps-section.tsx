"use client";

import React from "react";
import {
  Smartphone,
  Store,
  ShoppingBag,
  Bell,
  Search,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Star,
  Package,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface WhiteLabelAppsSectionProps {
  className?: string;
}

export function WhiteLabelAppsSection({
  className,
}: WhiteLabelAppsSectionProps) {
  const { t, locale } = useLanguage();

  const benefits = [
    {
      id: "brand",
      icon: Store,
      titleKey: "whiteLabelApps.benefit1.title",
      descKey: "whiteLabelApps.benefit1.desc",
    },
    {
      id: "shopping",
      icon: ShoppingBag,
      titleKey: "whiteLabelApps.benefit2.title",
      descKey: "whiteLabelApps.benefit2.desc",
    },
    {
      id: "connected",
      icon: Bell,
      titleKey: "whiteLabelApps.benefit3.title",
      descKey: "whiteLabelApps.benefit3.desc",
    },
  ];

  return (
    <section
      aria-label="White-label Mobile Apps"
      className={cn(
        "relative section-padding border-b border-border bg-card/25 transition-colors overflow-hidden",
        className
      )}
    >
      {/* ── Background Subtle Ambient Lighting ── */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDE — Compelling Product Content & Benefit Points
              ══════════════════════════════════════════════════════════════ */}
          <ScrollReveal
            direction="up"
            delay={0}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            {/* Eyebrow Badge (Hero-aligned) */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
              <Smartphone className="size-3 text-secondary-accent shrink-0" />
              <span>{t("whiteLabelApps.badge")}</span>
            </div>

            {/* H2 Title with Hero-matching Brand Gradient Highlight */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-[1.2] !mb-3 sm:!mb-4 text-balance">
              <span className="block text-foreground">
                {locale === "bn" ? "আপনার ব্র্যান্ডকে নিয়ে যান" : "Take Your Brand"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn" ? "ওয়েব ব্রাউজারেরও বাইরে।" : "Beyond the Browser."}
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground !mb-6 sm:!mb-8 text-balance">
              {t("whiteLabelApps.description")}
            </p>

            {/* Three Concise Benefit Points */}
            <div className="w-full space-y-4 mb-7 sm:mb-8 text-left">
              {benefits.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.id}
                    className="flex items-start gap-3.5 p-3 rounded-xl border border-border/70 bg-card/70 hover:border-primary/40 hover:bg-card hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
                  >
                    <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/15 shadow-2xs">
                      <IconComponent className="size-4 shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {t(b.titleKey)}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {t(b.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-5 w-full">
              <CTAButton
                action="exploreWhiteLabelApps"
                variant="primary"
                locale={locale}
                size="lg"
                showArrow
                className="px-6 py-2.5 text-xs sm:text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              />
              <CTAButton
                action="talkToOurTeam"
                variant="outline"
                locale={locale}
                size="lg"
                className="px-6 py-2.5 text-xs sm:text-sm rounded-lg hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>

            {/* Factual Transparency Footnote */}
            <div className="flex items-start gap-2 text-[11px] text-muted-foreground/80 leading-relaxed text-left">
              <ShieldCheck className="size-3.5 text-secondary-accent shrink-0 mt-0.5" />
              <span>{t("whiteLabelApps.requirements.note")}</span>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDE — Premium Overlapping Mobile App Showcase
              ══════════════════════════════════════════════════════════════ */}
          <ScrollReveal
            direction="up"
            delay={150}
            className="lg:col-span-7 relative flex items-center justify-center py-4 lg:py-6 w-full"
          >
            {/* Ambient Radial Glow behind the mockups */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.12) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            {/* Floating Context Badges (Restrained SaaS Accents) */}
            <div className="hidden sm:inline-flex absolute -top-1 left-2 lg:left-6 z-30 items-center gap-1.5 rounded-full border border-border bg-card/95 px-3 py-1 text-[11px] font-semibold text-foreground shadow-dropdown backdrop-blur-xs select-none">
              <CheckCircle2 className="size-3.5 text-success shrink-0" />
              <span>iOS & Android Native</span>
            </div>

            <div className="hidden sm:inline-flex absolute -bottom-2 right-2 lg:right-6 z-30 items-center gap-1.5 rounded-full border border-border bg-card/95 px-3 py-1 text-[11px] font-semibold text-foreground shadow-dropdown backdrop-blur-xs select-none">
              <Truck className="size-3.5 text-primary shrink-0" />
              <span>Live Courier Sync</span>
            </div>

            {/* Overlapping Phones Wrapper */}
            <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[560px] mx-auto select-none py-2 sm:py-4 overflow-hidden sm:overflow-visible">
              {/* ────────────────────────────────────────────────────────────
                  PHONE 1: Merchant Operations App (Background Layer)
                  ──────────────────────────────────────────────────────────── */}
              <div
                className="absolute right-0 sm:right-2 sm:top-1/2 sm:-translate-y-1/2 z-10 w-[215px] sm:w-[260px] lg:w-[275px] rounded-[2.25rem] sm:rounded-[2.5rem] p-2 sm:p-3 bg-slate-950 border-[3px] sm:border-[3.5px] border-slate-800 shadow-modal transition-transform duration-300 hover:z-30 hover:scale-[1.02] opacity-90 sm:opacity-95"
                style={{
                  transform: "translateY(-12px) translateX(20px) rotate(3deg)",
                }}
              >
                {/* Screen Chassis */}
                <div className="rounded-[2rem] bg-background border border-border/60 overflow-hidden flex flex-col justify-between p-3 space-y-2.5">
                  {/* Status Bar & Mini Notch */}
                  <div className="flex items-center justify-between px-1.5 pb-1 border-b border-border/50">
                    <span className="text-[9px] font-mono font-bold text-muted-foreground">
                      9:41
                    </span>
                    <div className="w-14 h-3 rounded-full bg-slate-900 mx-auto flex items-center justify-center">
                      <div className="size-1 rounded-full bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                      <span className="text-[8px] font-semibold">5G</span>
                      <div className="w-3 h-1.5 rounded-xs border border-muted-foreground/60" />
                    </div>
                  </div>

                  {/* Merchant Bar Header */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <div className="size-5 rounded-md bg-secondary-accent text-slate-950 font-black text-[9px] flex items-center justify-center shadow-2xs">
                        M
                      </div>
                      <span className="text-xs font-bold text-foreground tracking-tight">
                        CartX Merchant
                      </span>
                    </div>
                    <span className="text-[8.5px] font-bold text-success bg-success/10 px-1.5 py-0.5 rounded border border-success/20 flex items-center gap-1">
                      <span className="size-1 rounded-full bg-success animate-pulse" />
                      <span>Online</span>
                    </span>
                  </div>

                  {/* Daily Revenue Overview Card */}
                  <div className="rounded-xl border border-border bg-card p-2.5 space-y-1 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-medium text-muted-foreground">
                        {t("whiteLabelApps.merchant.todaySales")}
                      </span>
                      <span className="text-[8.5px] font-bold text-success bg-success/10 px-1 py-0.2 rounded">
                        +18.4%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-extrabold text-foreground tracking-tight">
                        {t("whiteLabelApps.merchant.todaySalesVal")}
                      </span>
                      <span className="text-[9px] font-semibold text-secondary-accent">
                        {t("whiteLabelApps.merchant.todayOrders")}
                      </span>
                    </div>
                    {/* Micro Sparkline Curve */}
                    <div className="h-4 w-full pt-0.5">
                      <svg
                        viewBox="0 0 100 20"
                        className="w-full h-full text-secondary-accent fill-none stroke-current stroke-2"
                      >
                        <path d="M0 16 Q 25 18, 45 10 T 75 8 T 100 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Incoming Order Card (Actionable) */}
                  <div className="rounded-xl border border-primary/30 bg-primary/[0.04] p-2.5 space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[9.5px] font-bold text-foreground">
                        {t("whiteLabelApps.merchant.recentOrder")}
                      </span>
                      <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        ৳3,200
                      </span>
                    </div>
                    <p className="text-[9px] text-muted-foreground truncate">
                      Rahim Ahmed • 2 items (Dhaka Metro)
                    </p>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="w-full py-1.5 rounded-md bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center gap-1 shadow-xs select-none"
                    >
                      <CheckCircle2 className="size-2.5" />
                      <span>{t("whiteLabelApps.merchant.orderAction")}</span>
                    </button>
                  </div>

                  {/* Merchant Inventory Watch Widget */}
                  <div className="rounded-xl border border-border bg-card p-2 flex items-center gap-2">
                    <div className="size-6 rounded-md bg-warning/10 text-warning flex items-center justify-center shrink-0">
                      <Package className="size-3" />
                    </div>
                    <p className="text-[9px] text-muted-foreground truncate leading-tight">
                      {t("whiteLabelApps.merchant.stockAlert")}
                    </p>
                  </div>

                  {/* Native Merchant Dock */}
                  <div className="pt-1 border-t border-border/50 flex items-center justify-around text-[7.5px] font-bold text-muted-foreground">
                    <span className="text-secondary-accent">Dashboard</span>
                    <span>Orders (3)</span>
                    <span>Stock</span>
                    <span>Settings</span>
                  </div>
                  {/* Home Bar */}
                  <div className="w-16 h-1 rounded-full bg-slate-600/60 mx-auto" />
                </div>
              </div>

              {/* ────────────────────────────────────────────────────────────
                  PHONE 2: Customer Shopping App (Foreground Layer)
                  ──────────────────────────────────────────────────────────── */}
              <div
                className="relative z-20 w-[240px] sm:w-[275px] lg:w-[290px] rounded-[2.25rem] sm:rounded-[2.5rem] p-2 sm:p-3 bg-slate-950 border-[3px] sm:border-[3.5px] border-slate-800 shadow-2xl transition-transform duration-300 hover:scale-[1.02] -translate-x-5 sm:translate-x-0"
                style={{
                  transform: "translateY(0) rotate(-1deg)",
                }}
              >
                {/* Screen Chassis */}
                <div className="rounded-[2rem] bg-background border border-border/60 overflow-hidden flex flex-col justify-between p-3 space-y-2.5">
                  {/* Status Bar with Dynamic Island */}
                  <div className="flex items-center justify-between px-1.5 pb-1 border-b border-border/50">
                    <span className="text-[9px] font-mono font-bold text-muted-foreground">
                      9:41
                    </span>
                    {/* Dynamic Island pill */}
                    <div className="w-16 h-3 rounded-full bg-slate-900 mx-auto flex items-center justify-center gap-1">
                      <div className="size-1 rounded-full bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                      <span className="text-[8px] font-semibold">LTE</span>
                      <div className="w-3 h-1.5 rounded-xs border border-muted-foreground/60" />
                    </div>
                  </div>

                  {/* Branded Storefront Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="size-5 rounded-md bg-primary text-primary-foreground font-black text-[9px] flex items-center justify-center shadow-2xs">
                        Y
                      </div>
                      <span className="text-xs font-bold text-foreground tracking-tight">
                        YOUR BRAND
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="size-6 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground">
                        <Search className="size-3" />
                      </div>
                      <div className="relative size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                        <ShoppingBag className="size-3" />
                        <span className="absolute -top-1 -right-1 size-3 bg-primary text-primary-foreground text-[7.5px] font-bold rounded-full flex items-center justify-center">
                          2
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Category Filter Pills */}
                  <div className="flex items-center gap-1 text-[8.5px] font-medium overflow-x-hidden">
                    <span className="rounded-full bg-primary text-primary-foreground px-2 py-0.5 shrink-0 font-bold">
                      {t("whiteLabelApps.customer.catAll")}
                    </span>
                    <span className="rounded-full bg-card border border-border px-2 py-0.5 text-muted-foreground shrink-0">
                      {t("whiteLabelApps.customer.catNew")}
                    </span>
                    <span className="rounded-full bg-card border border-border px-2 py-0.5 text-muted-foreground shrink-0">
                      {t("whiteLabelApps.customer.catPopular")}
                    </span>
                  </div>

                  {/* Featured Collection Teaser Banner */}
                  <div className="rounded-lg bg-gradient-to-r from-primary/15 via-sky-400/10 to-transparent p-2 border border-primary/20">
                    <span className="text-[7.5px] font-extrabold uppercase tracking-wider text-primary block leading-none mb-0.5">
                      New Season
                    </span>
                    <p className="text-[10px] font-bold text-foreground leading-tight">
                      Autumn Minimal Capsule
                    </p>
                  </div>

                  {/* Product Card with Realistic Illustrated Apparel Visual */}
                  <div className="rounded-xl border border-border bg-card p-2 space-y-1.5 shadow-2xs">
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 via-sky-400/5 to-transparent border border-border/50 flex flex-col items-center justify-center relative p-2 select-none overflow-hidden">
                      <span className="absolute top-1 left-1 rounded bg-primary/15 border border-primary/25 px-1 py-0.2 text-[7px] font-bold text-primary">
                        Top Rated
                      </span>
                      <ShoppingBag className="size-7 text-primary/70 mb-0.5" />
                      <span className="text-[8px] font-medium text-muted-foreground/80">
                        100% Pure Linen
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold text-foreground truncate">
                        {t("whiteLabelApps.customer.prodTitle")}
                      </p>
                      <div className="flex items-center text-[8.5px] font-bold text-warning">
                        <Star className="size-2 fill-current mr-0.5" />
                        <span>4.9</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-border/50">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-extrabold text-foreground">
                          {t("whiteLabelApps.customer.prodPrice")}
                        </span>
                        <span className="text-[8px] text-muted-foreground line-through">
                          ৳2,200
                        </span>
                      </div>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="px-2 py-1 rounded bg-primary text-primary-foreground text-[8px] font-bold shadow-2xs"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>

                  {/* Customer Order Updates Notification Toast */}
                  <div className="rounded-xl border border-primary/30 bg-primary/[0.04] p-2 space-y-0.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-wider text-primary">
                        {t("whiteLabelApps.customer.orderUpdate")}
                      </span>
                      <Truck className="size-2.5 text-primary shrink-0" />
                    </div>
                    <p className="text-[9.5px] font-bold text-foreground leading-tight">
                      {t("whiteLabelApps.customer.orderStatus")}
                    </p>
                    <p className="text-[8px] text-muted-foreground">
                      {t("whiteLabelApps.customer.orderEta")}
                    </p>
                  </div>

                  {/* Native Mobile Bottom Dock */}
                  <div className="pt-1 border-t border-border/50 flex items-center justify-around text-[7.5px] font-bold text-muted-foreground">
                    <span className="text-primary">Shop</span>
                    <span>Search</span>
                    <span>Cart (2)</span>
                    <span>Account</span>
                  </div>
                  {/* Home Bar */}
                  <div className="w-16 h-1 rounded-full bg-slate-600/60 mx-auto" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
