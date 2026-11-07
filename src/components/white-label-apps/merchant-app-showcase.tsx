"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Bell,
  Package,
  Layers,
  Archive,
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { MerchantScreenId } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function MerchantAppShowcase({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [activeScreen, setActiveScreen] =
    useState<MerchantScreenId>("overview");

  const merchantTabs: {
    id: MerchantScreenId;
    label: string;
    icon: React.ElementType;
    title: string;
    desc: string;
  }[] = [
    {
      id: "overview",
      label: isBn ? "সেলস ও রেভিনিউ" : "1. Sales Overview",
      icon: TrendingUp,
      title: isBn
        ? "দৈনিক বিক্রয় ও অর্ডার সামারি"
        : "Daily Revenue & Metric Summaries",
      desc: isBn
        ? "মোবাইল থেকেই আজকের বিক্রয়, গড় অর্ডার ভ্যালু এবং মোট অর্ডার সংখ্যা তাৎক্ষণিক পর্যবেক্ষণ।"
        : "Live transaction totals, order counts, and channel breakdown directly on your mobile device.",
    },
    {
      id: "notifications",
      label: isBn ? "অর্ডার নোটিফিকেশন" : "2. Order Alerts",
      icon: Bell,
      title: isBn ? "নতুন অর্ডারের পুশ সতর্কতা" : "Immediate Push Order Alerts",
      desc: isBn
        ? "নতুন গ্রাহক অর্ডার স্থাপন করার সাথে সাথে ইনস্ট্যান্ট পুশ নোটিফিকেশন অ্যালার্ট ও সাউন্ড।"
        : "Receive immediate native sound and lock-screen alerts whenever a buyer submits an order.",
    },
    {
      id: "orders",
      label: isBn ? "অর্ডার ম্যানেজমেন্ট" : "3. Order Processing",
      icon: Package,
      title: isBn
        ? "এক ক্লিকে কুরিয়ার অ্যাসাইন"
        : "Courier Booking & Dispatch",
      desc: isBn
        ? "পাঠাও, রেডেক্স বা স্টেডফাস্ট কুরিয়ারে এক ট্যাপেই পার্সেল বুকিং এবং চালান ইনভয়েস জেনারেট।"
        : "Approve orders, print packing slips, and dispatch directly to integrated couriers in seconds.",
    },
    {
      id: "products",
      label: isBn ? "প্রোডাক্ট আপডেট" : "4. Fast Product Edits",
      icon: Layers,
      title: isBn
        ? "মূল্য ও স্টক দ্রুত পরিবর্তন"
        : "Instant Price & Stock Tweaks",
      desc: isBn
        ? "ফোন থেকেই যেকোনো পণ্যের দাম, ডিসকাউন্ট অফার কিংবা বিবরণ তাৎক্ষণিক এডিট ও আপডেট।"
        : "Adjust retail prices, update product descriptions, and toggle visibility on the fly.",
    },
    {
      id: "inventory",
      label: isBn ? "ইনভেন্টরি অ্যালার্ট" : "5. Low-Stock Alerts",
      icon: Archive,
      title: isBn
        ? "স্বয়ংক্রিয় লো-স্টক নোটিশ"
        : "Automated Low-Stock Tracking",
      desc: isBn
        ? "স্টক ফুরিয়ে যাওয়ার আগেই ইনভেন্টরি সতর্কবার্তা গ্রহণ করুন যাতে কোনো বিক্রয় হাতছাড়া না হয়।"
        : "Track remaining units per SKU and receive notifications when stock falls below thresholds.",
    },
  ];

  const currentTab =
    merchantTabs.find((t) => t.id === activeScreen) || merchantTabs[0];

  return (
    <section
      id="merchant-app"
      aria-label="Merchant App Showcase"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-card/30 transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>
              {isBn ? "মার্চেন্ট অপারেশনাল অ্যাপ" : "Merchant Companion App"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn
                ? "স্মার্ট মার্চেন্ট কন্ট্রোল"
                : "Merchant Management on the Go"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "চলতে ফিরতেই স্টোর পরিচালনা ও অর্ডার নিয়ন্ত্রণ"
                : "Manage Store Operations from Anywhere"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "ডেস্কটপ কম্পিউটারের সামনে না থেকেও ফোন থেকেই নতুন অর্ডার প্রসেসিং ও কুরিয়ার বুকিং সুবিধা।"
              : "Keep a pulse on daily sales, fulfill incoming orders, and manage stock on the go without opening a laptop."}
          </p>
        </ScrollReveal>

        {/* Disclaimer pill */}
        <ScrollReveal delay={80}>
          <div className="max-w-xl mx-auto rounded-full border border-border bg-card px-4 py-1.5 text-center text-xs text-muted-foreground mb-10 flex items-center justify-center gap-2">
            <Info className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>
              {isBn
                ? "প্রদর্শিত পরিসংখ্যানসমূহ কাল্পনিক ডেমো ডেটা; বাস্তব ব্যবসার তথ্য নয়।"
                : "Screens represent illustrative mock workflows. Metrics shown are illustrative simulation data."}
            </span>
          </div>

          {/* 5 Tabs on Top */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
            {merchantTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeScreen === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveScreen(tab.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-xs font-bold"
                      : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/40",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Content Showcase Box */}
        <ScrollReveal
          delay={120}
          className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Explanatory Context */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
              {currentTab.label}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {currentTab.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {currentTab.desc}
            </p>
            <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <span>
                  {isBn
                    ? "তাৎক্ষণিক ক্লাউড ডাটাবেজ সিঙ্ক"
                    : "Instant backend cloud sync"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <span>
                  {isBn
                    ? "ক্যাশ অন ডেলিভারি ও অনলাইন পেমেন্ট ফিল্টার"
                    : "Multi-channel payment reconciliation"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Mockup Interface Screen */}
          <div className="rounded-2xl border border-border bg-muted/20 p-5 shadow-2xs">
            {activeScreen === "overview" && (
              <div className="space-y-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <span className="text-[10px] font-semibold text-muted-foreground block">
                    TODAY&apos;S REVENUE
                  </span>
                  <span className="font-mono text-2xl font-extrabold text-foreground block mt-0.5">
                    ৳34,250
                  </span>
                  <span className="text-[10px] text-success font-semibold mt-1 block">
                    ↑ 18% vs yesterday
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border bg-card p-3">
                    <span className="text-[10px] text-muted-foreground block">
                      Orders Today
                    </span>
                    <span className="font-mono text-lg font-bold text-foreground">
                      16 Orders
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-3">
                    <span className="text-[10px] text-muted-foreground block">
                      Avg Order Value
                    </span>
                    <span className="font-mono text-lg font-bold text-foreground">
                      ৳2,140
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "notifications" && (
              <div className="space-y-2.5">
                {[
                  {
                    title: "New Order #CX-1092",
                    time: "2m ago",
                    desc: "৳3,600 • 2 items (Banani, Dhaka)",
                  },
                  {
                    title: "Courier Dispatched #CX-1088",
                    time: "18m ago",
                    desc: "Handed to Pathao Courier",
                  },
                  {
                    title: "Customer Review Posted",
                    time: "1h ago",
                    desc: "5.0 ★ on Relaxed Linen Shirt",
                  },
                ].map((notif, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-card p-3 text-xs flex items-start gap-2.5"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {notif.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeScreen === "orders" && (
              <div className="space-y-2.5">
                <div className="rounded-xl border border-primary/30 bg-card p-3 text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground">
                      #CX-1092 • Pending Dispatch
                    </span>
                    <span className="font-mono text-primary font-bold">
                      ৳3,600
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Recipient: Tanvir Ahmed, Road 11, Banani
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      className="flex-1 py-1.5 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold"
                    >
                      Book Pathao Courier
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-lg border border-border text-[11px] text-foreground font-semibold"
                    >
                      Invoice
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "products" && (
              <div className="space-y-2 text-xs">
                {[
                  "Relaxed Linen Shirt — Stock: 42 — ৳1,850",
                  "Tailored Twill Chino — Stock: 18 — ৳2,450",
                ].map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-card p-3 flex justify-between items-center"
                  >
                    <span className="font-semibold text-foreground truncate max-w-[200px]">
                      {p}
                    </span>
                    <span className="text-primary text-[10px] font-bold border border-primary/20 px-2 py-0.5 rounded">
                      Quick Edit
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeScreen === "inventory" && (
              <div className="space-y-2 text-xs">
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/[0.05] p-3 flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">
                      Low Stock Alert: Chino Pant Size 34
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Only 3 units remaining in warehouse
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3 flex justify-between items-center">
                  <span className="font-medium text-foreground">
                    Total Active SKUs: 148
                  </span>
                  <span className="text-success font-semibold text-[11px]">
                    98% in stock
                  </span>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
