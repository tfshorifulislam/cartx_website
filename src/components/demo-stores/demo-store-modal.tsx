"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  Smartphone,
  Monitor,
  ShieldCheck,
  Check,
  ShoppingBag,
  Globe,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoStoreItem } from "./types";
import { cn } from "@/lib/utils";

interface DemoStoreModalProps {
  store: DemoStoreItem | null;
  mode: "desktop" | "mobile";
  onClose: () => void;
}

export function DemoStoreModal({
  store,
  mode: initialMode,
  onClose,
}: DemoStoreModalProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">(initialMode);
  const [cartCount, setCartCount] = useState<number>(0);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Keyboard close on Escape & Background page scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (store) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [store, onClose]);

  if (!store) return null;

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-store-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative flex flex-col w-full h-full sm:h-[90vh] sm:max-h-[920px] max-w-5xl xl:max-w-6xl rounded-none sm:rounded-2xl border-0 sm:border border-border bg-card shadow-2xl overflow-hidden">
        {/* ── Top Control Bar ── */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-border bg-muted/40 select-none gap-2 shrink-0">
          {/* Left: Store identity */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span
              className="font-bold text-xs sm:text-sm text-foreground truncate"
              id="demo-store-modal-title"
            >
              {store.name[isBn ? "bn" : "en"]}
            </span>
            <span className="hidden md:inline-block font-mono text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/60 truncate max-w-[160px]">
              {store.domain}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
              <Globe className="h-2.5 w-2.5" />
              <span>{store.categoryLabel[isBn ? "bn" : "en"]}</span>
            </span>
          </div>

          {/* Center: Desktop / Mobile Viewport Switcher */}
          <div className="flex items-center gap-1 bg-background border border-border rounded-full p-1 shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("desktop")}
              aria-label={isBn ? "ডেস্কটপ ভিউ" : "Desktop View"}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-ring min-h-[32px]",
                viewMode === "desktop"
                  ? "bg-primary text-primary-foreground shadow-2xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Monitor className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">{isBn ? "ডেস্কটপ" : "Desktop"}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("mobile")}
              aria-label={isBn ? "মোবাইল ভিউ" : "Mobile View"}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-ring min-h-[32px]",
                viewMode === "mobile"
                  ? "bg-primary text-primary-foreground shadow-2xs font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Smartphone className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">{isBn ? "মোবাইল" : "Mobile"}</span>
            </button>
          </div>

          {/* Right: Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close demo store preview"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-ring"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* ── Demo Safe Environment Disclaimer Bar ── */}
        <div className="bg-primary/10 border-b border-primary/20 px-3 sm:px-4 py-1.5 text-center text-[11px] sm:text-xs text-primary font-medium flex items-center justify-center gap-1.5 sm:gap-2 leading-snug shrink-0">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="truncate sm:whitespace-normal">
            {isBn
              ? "প্রদর্শনীমূলক ডেমো পরিবেশ • কোনো বাস্তব অর্থ লেনদেন বা ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।"
              : "Demo Preview Environment • Non-transactional simulation. No real payments are processed."}
          </span>
        </div>

        {/* ── Modal Body Container (Independent vertical scrolling) ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6 lg:p-8 bg-muted/20 flex justify-center">
          {/* DESKTOP PREVIEW MODE */}
          {viewMode === "desktop" && (
            <div className="w-full max-w-5xl mx-auto rounded-xl border border-border bg-background shadow-md overflow-hidden transition-all duration-300">
              {/* Desktop Browser Window Chrome */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-muted/50 border-b border-border text-xs text-muted-foreground select-none gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                </div>
                {/* Mock Address Bar */}
                <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-background border border-border text-[11px] text-muted-foreground truncate">
                  <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-mono truncate">{store.domain}</span>
                </div>
                <div className="shrink-0 text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
                  <Globe className="h-2.5 w-2.5" />
                  <span>{store.categoryLabel[isBn ? "bn" : "en"]}</span>
                </div>
              </div>

              {/* Desktop Storefront Content */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                {/* Store Navigation Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-border gap-2">
                  <span className="font-extrabold text-sm sm:text-base tracking-wider text-foreground truncate">
                    {store.brandName}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium text-muted-foreground shrink-0">
                    <div className="hidden sm:flex items-center gap-3 text-xs">
                      {store.navLinks.slice(0, 3).map((link, idx) => (
                        <span key={idx} className="hover:text-foreground">
                          {link[isBn ? "bn" : "en"]}
                        </span>
                      ))}
                    </div>
                    <span className="relative flex items-center gap-1 text-foreground font-semibold">
                      <ShoppingBag className="h-4 w-4" />
                      <span>({cartCount})</span>
                    </span>
                  </div>
                </div>

                {/* Announcement Banner */}
                <div className="rounded-lg bg-primary/10 text-primary px-3 py-2 text-center text-xs font-semibold truncate">
                  {store.featuresBar[0][isBn ? "bn" : "en"]}
                </div>

                {/* Storefront Hero Banner */}
                <div className="rounded-xl sm:rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background p-5 sm:p-8">
                  <span className="inline-block rounded-full bg-primary/15 text-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {store.hero.badge[isBn ? "bn" : "en"]}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                    {store.hero.headline[isBn ? "bn" : "en"]}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mb-4 leading-relaxed line-clamp-3">
                    {store.hero.subhead[isBn ? "bn" : "en"]}
                  </p>
                  <button
                    type="button"
                    className="rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
                  >
                    {store.hero.cta[isBn ? "bn" : "en"]}
                  </button>
                </div>

                {/* Product Catalog Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {isBn ? "নির্বাচিত পণ্যসমূহ" : "Featured Products"}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {store.products.length} {isBn ? "টি আইটেম" : "Items"}
                    </span>
                  </div>

                  {/* Desktop multi-column grid: scales across viewport widths */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {store.products.map((prod) => (
                      <div
                        key={prod.id}
                        className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-all min-w-0"
                      >
                        <div>
                          <div className="h-28 rounded-lg bg-muted/40 border border-border/50 mb-3 flex items-center justify-center text-xs font-bold text-muted-foreground px-2 text-center truncate">
                            {prod.tag}
                          </div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-bold text-foreground truncate min-w-0 flex-1">
                              {prod.name[isBn ? "bn" : "en"]}
                            </span>
                            <span className="text-[10px] text-primary font-bold shrink-0">
                              ★ {prod.rating}
                            </span>
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
                            onClick={handleAddToCart}
                            className="rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-ring"
                          >
                            {isBn ? "+ যুক্ত করুন" : "+ Add to Cart"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOBILE PREVIEW MODE */}
          {viewMode === "mobile" && (
            <div className="w-full max-w-full sm:max-w-[380px] md:max-w-[390px] mx-auto rounded-2xl sm:rounded-[2.5rem] border-2 sm:border-[6px] border-slate-800 dark:border-slate-700 bg-background shadow-2xl p-3 sm:p-4 my-auto transition-all duration-300 flex flex-col">
              {/* Phone Speaker Notch */}
              <div className="hidden sm:block h-3.5 w-24 bg-slate-800 dark:bg-slate-700 rounded-full mx-auto mb-3 shrink-0" />

              {/* Mobile Storefront Content */}
              <div className="space-y-4 flex-1">
                {/* Store Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-border gap-2">
                  <span className="font-extrabold text-xs sm:text-sm tracking-wider text-foreground truncate">
                    {store.brandName}
                  </span>
                  <span className="relative flex items-center gap-1 text-foreground font-semibold text-xs shrink-0">
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>({cartCount})</span>
                  </span>
                </div>

                {/* Announcement Banner */}
                <div className="rounded-lg bg-primary/10 text-primary px-2.5 py-1.5 text-center text-[10px] sm:text-[11px] font-semibold truncate">
                  {store.featuresBar[0][isBn ? "bn" : "en"]}
                </div>

                {/* Mobile Hero Banner */}
                <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background p-4">
                  <span className="inline-block rounded-full bg-primary/15 text-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-1.5">
                    {store.hero.badge[isBn ? "bn" : "en"]}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-foreground tracking-tight mb-1.5">
                    {store.hero.headline[isBn ? "bn" : "en"]}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                    {store.hero.subhead[isBn ? "bn" : "en"]}
                  </p>
                  <button
                    type="button"
                    className="w-full rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
                  >
                    {store.hero.cta[isBn ? "bn" : "en"]}
                  </button>
                </div>

                {/* Product Catalog Section (Mobile: strictly 1 column) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">
                      {isBn ? "নির্বাচিত পণ্যসমূহ" : "Featured Products"}
                    </h4>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                      {store.products.length} {isBn ? "টি আইটেম" : "Items"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {store.products.map((prod) => (
                      <div
                        key={prod.id}
                        className="rounded-xl border border-border bg-card p-3 flex flex-col justify-between shadow-2xs hover:border-primary/40 transition-all min-w-0"
                      >
                        <div>
                          <div className="h-20 sm:h-24 rounded-lg bg-muted/40 border border-border/50 mb-2 flex items-center justify-center text-[11px] font-bold text-muted-foreground px-2 text-center truncate">
                            {prod.tag}
                          </div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-bold text-foreground truncate min-w-0 flex-1">
                              {prod.name[isBn ? "bn" : "en"]}
                            </span>
                            <span className="text-[10px] text-primary font-bold shrink-0">
                              ★ {prod.rating}
                            </span>
                          </div>
                          <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2">
                            {prod.description[isBn ? "bn" : "en"]}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-extrabold text-foreground truncate">
                            {prod.price}
                          </span>
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-ring"
                          >
                            {isBn ? "+ যুক্ত করুন" : "+ Add to Cart"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone Bottom Home Bar */}
                <div className="hidden sm:block h-1 w-24 bg-slate-400/40 rounded-full mx-auto mt-3 shrink-0" />
              </div>
            </div>
          )}

          {/* Floating cart notification toast */}
          {addedNotice && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
              <Check className="h-4 w-4 text-success" />
              <span>
                {isBn
                  ? "পণ্যটি ডেমো কার্টে যুক্ত হয়েছে"
                  : "Product added to demo cart!"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
