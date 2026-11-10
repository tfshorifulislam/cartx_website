"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  Smartphone,
  Monitor,
  ShieldCheck,
  Check,
  ShoppingBag,
  Globe,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoStoreItem } from "./types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
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

  if (!store) return null;

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <Dialog
      open={Boolean(store)}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className={cn(
          "w-full max-w-[calc(100%-1rem)] sm:max-w-4xl md:max-w-5xl xl:max-w-6xl",
          "h-[94vh] sm:h-[90vh] max-h-230",
          "p-0 gap-0 overflow-hidden flex flex-col",
          "rounded-2xl border border-border bg-card shadow-2xl",
          "outline-none",
        )}
      >
        {/* ── Top Control Bar (Header) ── */}
        <DialogHeader className="px-3.5 sm:px-6 py-3 border-b border-border bg-muted/40 shrink-0 flex flex-row items-center justify-between gap-2 sm:gap-4 space-y-0 select-none">
          {/* Left: Store identity */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="min-w-0">
              <DialogTitle className="font-bold text-xs sm:text-sm md:text-base text-foreground truncate block">
                {store.name[isBn ? "bn" : "en"]}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {isBn
                  ? `${store.name.bn} এর ইন্টারঅ্যাক্টিভ ডেমো স্টোর প্রিভিউ`
                  : `Interactive live demo storefront preview for ${store.name.en}`}
              </DialogDescription>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground bg-background px-2 py-0.5 rounded border border-border/70 truncate max-w-[170px]">
              <Lock className="size-2.5 text-emerald-500 shrink-0" />
              <span className="truncate">{store.domain}</span>
            </div>

            <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full shrink-0">
              <Globe className="size-2.5" />
              <span>{store.categoryLabel[isBn ? "bn" : "en"]}</span>
            </span>
          </div>

          {/* Center: Device Viewport Switcher (Desktop / Mobile) */}
          <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-background p-1 shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("desktop")}
              aria-label={isBn ? "ডেস্কটপ ভিউ" : "Desktop View"}
              aria-pressed={viewMode === "desktop"}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all cursor-pointer min-h-[30px]",
                viewMode === "desktop"
                  ? "bg-primary text-primary-foreground shadow-2xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              <Monitor className="size-3.5 shrink-0" />
              <span className="hidden sm:inline">
                {isBn ? "ডেস্কটপ" : "Desktop"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("mobile")}
              aria-label={isBn ? "মোবাইল ভিউ" : "Mobile View"}
              aria-pressed={viewMode === "mobile"}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-2.5 sm:px-3 py-1 text-xs font-semibold transition-all cursor-pointer min-h-[30px]",
                viewMode === "mobile"
                  ? "bg-primary text-primary-foreground shadow-2xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              <Smartphone className="size-3.5 shrink-0" />
              <span className="hidden sm:inline">
                {isBn ? "মোবাইল" : "Mobile"}
              </span>
            </button>
          </div>

          {/* Right: Close button */}
          <DialogClose
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-ring"
            aria-label="Close demo store preview"
          >
            <X className="size-4 sm:size-5" />
          </DialogClose>
        </DialogHeader>

        {/* ── Demo Safe Environment Disclaimer Bar ── */}
        <div className="bg-primary/[0.07] border-b border-primary/15 px-3 sm:px-4 py-1.5 text-center text-[11px] sm:text-xs text-primary font-medium flex items-center justify-center gap-1.5 sm:gap-2 leading-snug shrink-0">
          <ShieldCheck className="size-3.5 text-primary shrink-0" />
          <span className="truncate sm:whitespace-normal">
            {isBn
              ? "প্রদর্শনীমূলক ডেমো পরিবেশ • কোনো বাস্তব অর্থ লেনদেন বা ব্যক্তিগত তথ্য সংগ্রহ করা হয় না।"
              : "Demo Preview Environment • Non-transactional simulation. No real payments are processed."}
          </span>
        </div>

        {/* ── Modal Body Container (Independent vertical scrolling) ── */}
        <div className="relative flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6 lg:p-8 bg-muted/20 flex justify-center">
          {/* DESKTOP PREVIEW MODE */}
          {viewMode === "desktop" && (
            <div className="w-full max-w-5xl mx-auto rounded-xl border border-border bg-background shadow-md overflow-hidden transition-all duration-300">
              {/* Desktop Browser Window Chrome */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-muted/50 border-b border-border text-xs text-muted-foreground select-none gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="size-2.5 rounded-full bg-destructive/60" />
                  <span className="size-2.5 rounded-full bg-amber-500/60" />
                  <span className="size-2.5 rounded-full bg-emerald-500/60" />
                </div>
                {/* Mock Address Bar */}
                <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-background border border-border text-[11px] text-muted-foreground truncate">
                  <Lock className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-mono truncate">{store.domain}</span>
                </div>
                <div className="shrink-0 text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
                  <Globe className="size-2.5" />
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
                      <ShoppingBag className="size-4 text-primary" />
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
                    className="rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover transition-all cursor-pointer shadow-xs"
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
                    <ShoppingBag className="size-3.5 text-primary" />
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
                    className="w-full rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-hover transition-all cursor-pointer shadow-xs"
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
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
              <Check className="size-4 text-success" />
              <span>
                {isBn
                  ? "পণ্যটি ডেমো কার্টে যুক্ত হয়েছে"
                  : "Product added to demo cart!"}
              </span>
            </div>
          )}
        </div>

        {/* ── Fixed Footer with Actions ── */}
        <DialogFooter className="px-4 sm:px-6 py-3 border-t border-border bg-card shrink-0 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Left: Reassuring Store / Platform Tag */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">
              {isBn
                ? "কার্টএক্স ক্লাউড স্টোরফ্রন্ট আর্কিটেকচার"
                : "Powered by CartX Cloud Storefront Architecture"}
            </span>
          </div>

          {/* Right: Primary Call to Action & Dismiss Button */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <DialogClose className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted/60 transition-colors cursor-pointer min-h-[36px]">
              {isBn ? "প্রিভিউ বন্ধ করুন" : "Close Preview"}
            </DialogClose>

            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:-translate-y-0.5 transition-all cursor-pointer min-h-[36px]"
            >
              <span>
                {isBn ? "এমন স্টোর তৈরি করুন" : "Create Store Like This"}
              </span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
