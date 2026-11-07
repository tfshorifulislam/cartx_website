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
      className={cn("py-12 sm:py-16 md:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
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
                  "inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs font-semibold transition-all cursor-pointer",
                  device === "desktop"
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Monitor className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                <span>{isBn ? "ডেস্কটপ ভিউ" : "Desktop View"}</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs font-semibold transition-all cursor-pointer",
                  device === "mobile"
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Smartphone className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                <span>{isBn ? "মোবাইল ভিউ" : "Mobile View"}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Device Container Frame */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center w-full">
            <div
              className={cn(
                "w-full transition-all duration-300",
                device === "mobile"
                  ? "max-w-full sm:max-w-[390px] rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-slate-800 bg-background shadow-2xl p-3 sm:p-4 min-h-[580px] sm:min-h-[640px]"
                  : "max-w-5xl rounded-2xl border border-border bg-background shadow-card p-4 sm:p-6"
              )}
            >
              {/* Browser / App Header bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs text-muted-foreground gap-2">
                <span className="font-extrabold text-xs sm:text-sm text-foreground truncate">
                  {store.brandName}
                </span>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="hidden md:inline-block font-mono text-[10px] text-muted-foreground truncate max-w-[150px]">
                    {store.domain}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-foreground text-xs">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>({cartCount})</span>
                  </span>
                </div>
              </div>

              {/* Announcement Strip */}
              <div className="rounded-lg bg-primary/10 text-primary text-[11px] sm:text-xs font-semibold py-2 px-3 text-center mb-4 sm:mb-6 truncate">
                {store.featuresBar[0][isBn ? "bn" : "en"]}
              </div>

              {/* Hero Section */}
              <div
                className={cn(
                  "rounded-xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background mb-6 sm:mb-8 transition-all",
                  device === "mobile" ? "p-4 sm:p-6" : "p-5 sm:p-8"
                )}
              >
                <span className="inline-block rounded-full bg-primary/15 text-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {store.hero.badge[isBn ? "bn" : "en"]}
                </span>
                <h3
                  className={cn(
                    "font-extrabold text-foreground tracking-tight mb-2",
                    device === "mobile"
                      ? "text-lg sm:text-xl"
                      : "text-xl sm:text-2xl"
                  )}
                >
                  {store.hero.headline[isBn ? "bn" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mb-4 leading-relaxed line-clamp-3">
                  {store.hero.subhead[isBn ? "bn" : "en"]}
                </p>
                <button
                  type="button"
                  className={cn(
                    "rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs",
                    device === "mobile" ? "w-full sm:w-auto" : "w-auto"
                  )}
                >
                  {store.hero.cta[isBn ? "bn" : "en"]}
                </button>
              </div>

              {/* Catalog Grid */}
              <div
                className={cn(
                  "grid gap-3 sm:gap-4",
                  device === "mobile"
                    ? "grid-cols-1"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {store.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="rounded-xl border border-border bg-card p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-all min-w-0"
                  >
                    <div>
                      <div className="h-24 sm:h-28 rounded-lg bg-muted/40 border border-border/50 mb-3 flex items-center justify-center text-xs font-bold text-muted-foreground px-2 text-center truncate">
                        {prod.tag}
                      </div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-foreground truncate min-w-0 flex-1">
                          {prod.name[isBn ? "bn" : "en"]}
                        </span>
                        <span className="text-[10px] text-primary font-bold shrink-0">★ {prod.rating}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-3">
                        {prod.description[isBn ? "bn" : "en"]}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-extrabold text-foreground truncate">
                        {prod.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-3 py-1 text-xs font-semibold transition-all cursor-pointer shrink-0"
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
