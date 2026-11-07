"use client";

import React, { useState } from "react";
import { Monitor, Smartphone, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { DemoStoreItem } from "./types";
import { cn } from "@/lib/utils";

interface StoreDevicePreviewProps {
  store: DemoStoreItem;
  className?: string;
}

export function StoreDevicePreview({ store, className }: StoreDevicePreviewProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [cartCount, setCartCount] = useState<number>(1);

  return (
    <section
      id="device-preview"
      aria-label="Responsive Storefront Previews"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <Monitor className="h-3.5 w-3.5" />
              <span>{isBn ? "রেসপন্সিভ প্রিভিউ" : "Responsive Device Views"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "রেসপনসিভ ও আধুনিক ডিজাইন" : "Cross-Device Experience"}
              </span>
              <span className="block brand-gradient-text">
                {isBn
                  ? "ডেস্কটপ ও মোবাইলে স্টোরফ্রন্টের বাস্তব দৃশ্য"
                  : "Desktop & Mobile Storefronts"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "যেকোনো ডিভাইসের স্ক্রিনেই কার্টএক্স স্টোরফ্রন্ট স্বয়ংক্রিয়ভাবে নিখুঁত ও দৃষ্টিনন্দনভাবে মানিয়ে নেয়।"
                : "CartX storefronts automatically adapt seamlessly across desktop computers, tablets, and mobile handsets."}
            </p>

            {/* Working Device Switcher */}
            <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer",
                  device === "desktop"
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Monitor className="h-4 w-4" />
                <span>{isBn ? "ডেস্কটপ ভিউ" : "Desktop View"}</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer",
                  device === "mobile"
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Smartphone className="h-4 w-4" />
                <span>{isBn ? "মোবাইল ভিউ" : "Mobile View"}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Device Container Frame */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center">
          <div
            className={cn(
              "w-full transition-all duration-300",
              device === "mobile"
                ? "max-w-[400px] rounded-3xl border-4 border-slate-800 bg-background shadow-2xl p-4 min-h-[640px]"
                : "max-w-5xl rounded-2xl border border-border bg-background shadow-card p-6"
            )}
          >
            {/* Browser / App Header bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs text-muted-foreground">
              <span className="font-extrabold text-sm text-foreground">
                {store.brandName}
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block font-mono text-[10px] text-muted-foreground">
                  {store.domain}
                </span>
                <span className="flex items-center gap-1 font-semibold text-foreground">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>({cartCount})</span>
                </span>
              </div>
            </div>

            {/* Announcement Strip */}
            <div className="rounded-lg bg-primary/10 text-primary text-xs font-semibold py-2 px-3 text-center mb-6">
              {store.featuresBar[0][isBn ? "bn" : "en"]}
            </div>

            {/* Hero Section */}
            <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background p-6 sm:p-8 mb-8">
              <span className="inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-2">
                {store.hero.badge[isBn ? "bn" : "en"]}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-2">
                {store.hero.headline[isBn ? "bn" : "en"]}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mb-4 leading-relaxed">
                {store.hero.subhead[isBn ? "bn" : "en"]}
              </p>
              <button
                type="button"
                className="rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
              >
                {store.hero.cta[isBn ? "bn" : "en"]}
              </button>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {store.products.map((prod) => (
                <div
                  key={prod.id}
                  className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-all"
                >
                  <div>
                    <div className="h-28 rounded-lg bg-muted/40 border border-border/50 mb-3 flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {prod.tag}
                    </div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold text-foreground truncate">
                        {prod.name[isBn ? "bn" : "en"]}
                      </span>
                      <span className="text-[10px] text-primary font-bold">★ {prod.rating}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
                      {prod.description[isBn ? "bn" : "en"]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-extrabold text-foreground">
                      {prod.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCartCount((c) => c + 1)}
                      className="rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-3 py-1 text-xs font-semibold transition-all cursor-pointer"
                    >
                      {isBn ? "+ কার্ট" : "+ Add"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
