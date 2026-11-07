"use client";

import React from "react";
import { Smartphone, Eye, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoStoreItem } from "./types";
import { cn } from "@/lib/utils";

interface DemoStoreCardProps {
  store: DemoStoreItem;
  onViewDemo: (store: DemoStoreItem) => void;
  onMobilePreview: (store: DemoStoreItem) => void;
  className?: string;
}

export function DemoStoreCard({
  store,
  onViewDemo,
  onMobilePreview,
  className,
}: DemoStoreCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-card text-card-foreground shadow-xs hover:border-primary/40 hover:shadow-card transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* 1. Storefront Screen Mockup Frame */}
      <div className="relative bg-muted/40 border-b border-border p-3 sm:p-4 pb-0 flex flex-col justify-end overflow-hidden">
        {/* Mock Browser Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60 text-[10px] text-muted-foreground select-none gap-2">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="h-2 w-2 rounded-full bg-destructive/40 shrink-0" />
            <span className="h-2 w-2 rounded-full bg-warning/40 shrink-0" />
            <span className="h-2 w-2 rounded-full bg-success/40 shrink-0" />
            <span className="ml-1 font-mono text-[10px] truncate">
              {store.domain}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
            <Globe className="h-2.5 w-2.5" />
            <span>{store.categoryLabel[isBn ? "bn" : "en"]}</span>
          </span>
        </div>

        {/* Visual Mockup Preview */}
        <div className="relative rounded-t-xl border-t border-x border-border bg-background p-3 sm:p-4 shadow-xs transition-transform duration-300 group-hover:-translate-y-1">
          {/* Mock announcement */}
          <div className="bg-primary/10 text-primary text-[9px] font-semibold py-1 px-2 rounded text-center truncate mb-2.5">
            {store.featuresBar[0][isBn ? "bn" : "en"]}
          </div>

          {/* Mock Brand Header */}
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border/50 gap-2">
            <span className="font-extrabold text-[11px] sm:text-xs tracking-wider text-foreground truncate shrink-0 max-w-[120px] sm:max-w-none">
              {store.brandName}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] text-muted-foreground truncate">
              {store.navLinks.slice(0, 2).map((link, idx) => (
                <span key={idx} className="hover:text-foreground truncate">
                  {link[isBn ? "bn" : "en"]}
                </span>
              ))}
            </div>
          </div>

          {/* Mock Hero Banner */}
          <div className="rounded-lg bg-gradient-to-br from-primary/10 via-muted/40 to-background border border-border/60 p-2.5 sm:p-3 mb-2.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-primary block mb-0.5 sm:mb-1">
              {store.hero.badge[isBn ? "bn" : "en"]}
            </span>
            <h4 className="font-bold text-[11px] sm:text-xs text-foreground line-clamp-1 mb-0.5">
              {store.hero.headline[isBn ? "bn" : "en"]}
            </h4>
            <p className="text-[10px] text-muted-foreground line-clamp-1">
              {store.hero.subhead[isBn ? "bn" : "en"]}
            </p>
          </div>

          {/* Mock Sample Products (2 items) */}
          <div className="grid grid-cols-2 gap-2">
            {store.products.slice(0, 2).map((prod) => (
              <div
                key={prod.id}
                className="rounded-md border border-border/60 bg-card p-2 text-left min-w-0"
              >
                <div className="h-10 rounded bg-muted/50 mb-1.5 flex items-center justify-center text-[9px] font-semibold text-muted-foreground truncate px-1">
                  {prod.tag}
                </div>
                <div className="text-[10px] font-bold text-foreground truncate">
                  {prod.name[isBn ? "bn" : "en"]}
                </div>
                <div className="text-[10px] font-semibold text-primary font-mono mt-0.5 truncate">
                  {prod.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground truncate">
              {store.name[isBn ? "bn" : "en"]}
            </h3>
            <span className="text-[10px] font-semibold text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full border border-border/50 shrink-0">
              {store.themeName[isBn ? "bn" : "en"]}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {store.description[isBn ? "bn" : "en"]}
          </p>
        </div>

        {/* 3. Action CTAs */}
        <div className="pt-3 border-t border-border/60 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onViewDemo(store)}
            className="flex-1 min-h-[40px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-ring"
          >
            <Eye className="h-3.5 w-3.5 shrink-0" />
            <span>{isBn ? "স্টোর দেখুন" : "View Demo"}</span>
          </button>

          <button
            type="button"
            onClick={() => onMobilePreview(store)}
            title={isBn ? "মোবাইল প্রিভিউ" : "Mobile Preview"}
            aria-label={isBn ? "মোবাইল প্রিভিউ" : "Mobile Preview"}
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-xl border border-border bg-card p-2 text-foreground hover:bg-muted/50 transition-all cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-ring shrink-0"
          >
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
