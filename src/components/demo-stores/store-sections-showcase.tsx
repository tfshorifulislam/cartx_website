"use client";

import React, { useState } from "react";
import { Layers, Megaphone, Compass, Grid, Tag, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function StoreSectionsShowcase({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [activeTab, setActiveTab] = useState<number>(0);

  const storefrontSections = [
    {
      id: "announcement",
      title: isBn ? "অ্যানাউন্সমেন্ট বার" : "Announcement Bar",
      subtitle: isBn ? "অফার ও নোটিশ প্রদর্শন" : "Promotions & Notices",
      icon: Megaphone,
      desc: isBn
        ? "স্টোরের সবার উপরে ফ্রি শিপিং নোটিশ, সিজনাল ডিসকাউন্ট কোড কিংবা জরুরি ডেলিভারি বার্তা তুলে ধরুন।"
        : "Display real-time flash sale countdowns, minimum order thresholds for free shipping, or service updates at the very top of your site.",
      previewComponent: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="rounded-lg bg-primary/10 border border-primary/20 text-primary py-2.5 px-4 text-xs font-semibold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Megaphone className="h-4 w-4" />
              <span>
                {isBn
                  ? "স্পেশাল উইকেন্ড অফার: সকল অর্ডারে ফ্রি ডেলিভারি!"
                  : "Weekend Flash Deal: Free nationwide courier on orders over ৳2,000"}
              </span>
            </span>
            <span className="font-mono text-[11px] bg-primary text-primary-foreground px-2 py-0.5 rounded">
              CARTX20
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "navigation",
      title: isBn ? "স্মার্ট নেভিগেশন ও হেডার" : "Store Navigation & Header",
      subtitle: isBn ? "ব্র্যান্ড ও ক্যাটাগরি মেনু" : "Menus, Search & Cart",
      icon: Compass,
      desc: isBn
        ? "সহজ ড্রপডাউন মেনু, রিয়েলটাইম সার্চ বার, কার্ট ড্রয়ার এবং গ্রাহক অ্যাকাউন্ট অ্যাক্সেস।"
        : "Sticky or transparent headers with mega-menus, live predictive catalog search, wishlists, and localized currency/language selectors.",
      previewComponent: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <span className="font-extrabold text-sm tracking-widest text-foreground">
              CARTX STORE
            </span>
            <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="text-primary font-bold">
                {isBn ? "হোম" : "Home"}
              </span>
              <span>{isBn ? "ক্যাটাগরি" : "Collections"}</span>
              <span>{isBn ? "অফার" : "Sale"}</span>
              <span>{isBn ? "যোগাযোগ" : "Contact"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                Search...
              </span>
              <span className="rounded-full bg-primary/10 text-primary px-2.5 py-1 font-bold">
                Cart (2)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "hero-banner",
      title: isBn ? "হিরো প্রমোশনাল ব্যানার" : "Hero Promo Banner",
      subtitle: isBn ? "মূল ক্যাম্পেইন ও কল-টু-অ্যাকশন" : "Call to Action",
      icon: Layers,
      desc: isBn
        ? "নতুন কালেকশন কিংবা প্রধান অফারকে বড় দৃষ্টিনন্দন ব্যানার ও সরাসরি শপিং বাটনের মাধ্যমে তুলে ধরুন।"
        : "High-impact visual slider or static hero banner pairing lifestyle media with localized conversion typography and primary CTAs.",
      previewComponent: (
        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-muted/30 to-background p-6 sm:p-8">
          <span className="inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-2">
            {isBn ? "সিজনাল কালেকশন ২০২৬" : "NEW ARRIVALS 2026"}
          </span>
          <h4 className="text-lg sm:text-xl font-extrabold text-foreground mb-2">
            {isBn
              ? "স্টাইলিশ ফ্যাশন ওয়্যার ও প্রিমিয়াম ডিজাইন"
              : "Elevate Your Everyday Essentials"}
          </h4>
          <p className="text-xs text-muted-foreground max-w-md mb-4">
            {isBn
              ? "মানসম্মত কাপড় এবং দীর্ঘস্থায়ী আরামের নিশ্চয়তা।"
              : "Meticulously crafted with organic breathable fabrics."}
          </p>
          <button
            type="button"
            className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs"
          >
            {isBn ? "এখনই কিনুন" : "Shop Collection"}
          </button>
        </div>
      ),
    },
    {
      id: "categories",
      title: isBn ? "ক্যাটাগরি গ্রিড" : "Category Showcase",
      subtitle: isBn ? "দ্রুত বিভাগ ভিত্তিক ব্রাউজিং" : "Visual Departments",
      icon: Grid,
      desc: isBn
        ? "গ্রাহকদের পছন্দের ক্যাটাগরিতে দ্রুত প্রবেশ করতে সাহায্য করে এমন আধুনিক কার্ড গ্রিড।"
        : "Visual category blocks allowing shoppers to dive directly into specific sub-collections with hover zoom effects.",
      previewComponent: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            {["Men's Wear", "Women's Collection", "Accessories"].map(
              (cat, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border/80 bg-muted/40 p-3 hover:border-primary/40 transition-colors"
                >
                  <span className="block text-xs font-bold text-foreground">
                    {cat}
                  </span>
                  <span className="block text-[10px] text-primary mt-1 font-semibold">
                    {isBn ? "ব্রাউজ করুন →" : "Explore →"}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      ),
    },
    {
      id: "details",
      title: isBn ? "প্রোডাক্ট ডিটেইলস ও স্পেক্স" : "Product Details & Specs",
      subtitle: isBn ? "স্পেসিফিকেশন ও ভ্যারিয়েন্ট" : "Variant Matrix & Stock",
      icon: Tag,
      desc: isBn
        ? "মাল্টি-ইমেজ গ্যালারি, সাইজ সিলেক্টর, স্টক স্ট্যাটাস এবং ক্যাশ অন ডেলিভারি ব্যাজ।"
        : "Structured product pages highlighting multi-angle imagery, variant pills, inventory indicators, and official warranty tabs.",
      previewComponent: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-24 h-24 rounded-lg bg-muted/50 border border-border/60 flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
              Photo
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="text-xs font-bold text-foreground block">
                Tailored Linen Blend Shirt
              </span>
              <span className="font-mono text-xs font-extrabold text-primary block">
                ৳1,850
              </span>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[10px] text-muted-foreground mr-1">
                  Size:
                </span>
                {["S", "M", "L", "XL"].map((sz, i) => (
                  <span
                    key={i}
                    className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-semibold border",
                      i === 1
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground",
                    )}
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentSection = storefrontSections[activeTab];

  return (
    <section
      id="storefront-sections"
      aria-label="Example Storefront Sections"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-background transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>{isBn ? "মডুলার সেকশন" : "Modular Sections"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "স্টোরের মূল উপাদানসমূহ" : "High-Converting Modules"}
              </span>
              <span className="block brand-gradient-text">
                {isBn
                  ? "আপনার স্টোরফ্রন্টের প্রতিটি গুরুত্বপূর্ণ সেকশন"
                  : "Essential Building Blocks of CartX"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "অ্যানাউন্সমেন্ট বার থেকে শুরু করে ভ্যারিয়েন্ট সিলেক্টর ও চেকআউট—সবকিছুই সহজেই সাজিয়ে নেওয়ার উপযোগী।"
                : "Explore the modular storefront components that merchants can customize directly to reflect their brand identity."}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Tab navigation */}
        <ScrollReveal delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left: Tab list */}
            <div className="lg:col-span-5 space-y-2">
              {storefrontSections.map((sec, idx) => {
                const Icon = sec.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3",
                      isActive
                        ? "border-primary bg-primary/[0.05] shadow-xs"
                        : "border-border bg-card hover:bg-muted/40 text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground">
                          {sec.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          {sec.subtitle}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Active Section Preview Card */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {currentSection.title}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {currentSection.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {currentSection.desc}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  {isBn
                    ? "লাইভ কম্পোনেন্ট রূপরেখা:"
                    : "Interactive Component Preview:"}
                </span>
                {currentSection.previewComponent}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
