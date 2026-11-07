"use client";

import React from "react";
import Link from "next/link";
import { Store, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function HowItWorksPreview({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      id="sample-store-preview"
      aria-label="Sample Store Connection Preview"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-background transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Store className="h-3.5 w-3.5" />
            <span>{isBn ? "লাইভ কানেকশন" : "Seamless Store Sync"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn
                ? "একত্রিত প্ল্যাটফর্ম আর্কিটেকচার"
                : "Unified Platform Architecture"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "মার্চেন্ট ড্যাশবোর্ড ও কাস্টমার স্টোরের নিখুঁত সংযোগ"
                : "Connecting Dashboard to Shoppers"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "ড্যাশবোর্ডে আপনি যে পরিবর্তনই আনুন—নতুন প্রোডাক্ট, স্টক লেভেল কিংবা অফার—তা তাৎক্ষণিকভাবে কাস্টমার স্টোরে দৃশ্যমান হয়।"
              : "Every update made inside your merchant dashboard immediately reflects in real-time across your desktop and mobile storefront."}
          </p>
        </ScrollReveal>

        {/* 2-Column Split: Merchant Action vs Customer Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left: Merchant Panel */}
          <ScrollReveal
            direction="left"
            distance={16}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                {isBn
                  ? "১. মার্চেন্ট ড্যাশবোর্ড অ্যাকশন"
                  : "1. Merchant Admin Action"}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {isBn
                  ? "ইনস্ট্যান্ট মূল্য বা স্টক আপডেট"
                  : "One-Click Price or Stock Update"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {isBn
                  ? "মার্চেন্ট প্যানেলে পণ্যের দাম ৳১,৮৫০ পরিবর্তন করে অফার প্রাইস ৳১,৬৫০ নির্ধারণ করা হলো।"
                  : "Merchant updates 'Relaxed Linen Shirt' retail price from ৳1,850 to ৳1,650 and adds 20 units of fresh stock."}
              </p>

              <div className="rounded-xl border border-border/80 bg-muted/30 p-4 font-mono text-xs space-y-1.5">
                <div className="flex justify-between text-muted-foreground">
                  <span>Product SKU:</span>
                  <span>LINEN-SHIRT-M</span>
                </div>
                <div className="flex justify-between font-bold text-foreground">
                  <span>New Price:</span>
                  <span className="text-primary">৳1,650 [Saved]</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-border flex items-center gap-2 text-xs text-success font-semibold">
              <CheckCircle2 className="h-4 w-4" />
              <span>
                {isBn
                  ? "ক্লাউড ডাটাবেজ সিঙ্ক সম্পন্ন"
                  : "Instantly propagated to cloud CDN"}
              </span>
            </div>
          </ScrollReveal>

          {/* Right: Live Customer Storefront Result */}
          <ScrollReveal
            direction="right"
            distance={16}
            delay={100}
            className="rounded-2xl border border-primary/40 bg-primary/[0.03] p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/15 px-2.5 py-0.5 rounded-full inline-block">
                {isBn
                  ? "২. লাইভ কাস্টমার স্টোরফ্রন্ট"
                  : "2. Live Shopper Viewport"}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {isBn
                  ? "তাৎক্ষণিক লাইভ ডিসপ্লে পরিবর্তন"
                  : "Zero-Delay Customer Checkout Sync"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {isBn
                  ? "গ্রাহক তাৎক্ষণিকভাবে ডিসকাউন্ট ব্যাজসহ নতুন দাম দেখতে পাচ্ছেন এবং কার্টে যোগ করে অর্ডার করতে পারছেন।"
                  : "Shoppers instantly see the updated discounted price badge with live in-stock badge ready for instant checkout."}
              </p>

              <div className="rounded-xl border border-border bg-card p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">
                    Relaxed Linen Shirt
                  </span>
                  <span className="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">
                    Special Deal
                  </span>
                </div>
                <div className="flex items-baseline gap-2 font-mono">
                  <span className="text-base font-extrabold text-foreground">
                    ৳1,650
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    ৳1,850
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-border/60">
              <Link
                href="/demo-stores"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>
                  {isBn
                    ? "সকল ডেমো স্টোর দেখুন"
                    : "Explore Realistic Demo Stores"}
                </span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
