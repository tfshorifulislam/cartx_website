"use client";

import React, { useState } from "react";
import {
  Home,
  Grid,
  Tag,
  ShoppingBag,
  Truck,
  User,
  Search,
  Bell,
  Smartphone,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CustomerScreenId } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function CustomerAppShowcase({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [activeScreen, setActiveScreen] = useState<CustomerScreenId>("home");

  const screens: { id: CustomerScreenId; label: string; icon: React.ElementType; description: string }[] = [
    {
      id: "home",
      label: isBn ? "হোম স্ক্রিন" : "1. Home Screen",
      icon: Home,
      description: isBn
        ? "সিজনাল ব্যানার, ফ্ল্যাশ ডিল এবং ব্যক্তিগত সুপারিশ সমৃদ্ধ মূল পেজ।"
        : "Dynamic carousel banners, featured collections, and curated personalized product recommendations.",
    },
    {
      id: "products",
      label: isBn ? "প্রোডাক্ট ক্যাটালগ" : "2. Product Listing",
      icon: Grid,
      description: isBn
        ? "ফিল্টারিং, শর্টিং এবং দ্রুত গ্রিড ও লিস্ট ভিউ সংবলিত প্রোডাক্ট পেজ।"
        : "Fast catalog discovery with multi-faceted category filters, attribute sorting, and instant search.",
    },
    {
      id: "details",
      label: isBn ? "প্রোডাক্ট ডিটেইলস" : "3. Product Details",
      icon: Tag,
      description: isBn
        ? "মাল্টি-অ্যাঙ্গেল গ্যালারি, সাইজ সিলেক্টর এবং সহজ অ্যাড-টু-কার্ট সুবিধা।"
        : "High-resolution pinch-to-zoom galleries, variant selectors, stock availability, and specs.",
    },
    {
      id: "cart",
      label: isBn ? "শপিং কার্ট" : "4. Cart & Checkout",
      icon: ShoppingBag,
      description: isBn
        ? "ডিসকাউন্ট কুপন, ফ্রি শিপিং ক্যালকুলেটর ও এক ক্লিকে অর্ডার সম্পন্ন করার ব্যবস্থা।"
        : "Streamlined shopping bag, auto-applied promo codes, delivery estimates, and 1-tap checkout.",
    },
    {
      id: "tracking",
      label: isBn ? "অর্ডার ট্র্যাকিং" : "5. Order Tracking",
      icon: Truck,
      description: isBn
        ? "কুরিয়ার পার্সেল ট্র্যাকিং ও ডেলিভারি অগ্রগতি রিয়েলটাইমে দেখার সুবিধা।"
        : "Real-time delivery milestones showing pickup, transit with courier, and delivery status.",
    },
    {
      id: "profile",
      label: isBn ? "কাস্টমার প্রোফাইল" : "6. Customer Profile",
      icon: User,
      description: isBn
        ? "পূর্ববর্তী অর্ডার ইতিহাস, সংরক্ষিত ঠিকানা ও ব্যক্তিগত সেটিংস।"
        : "Saved shipping addresses, order receipts, notification preferences, and saved wishlists.",
    },
  ];

  return (
    <section
      id="customer-app"
      aria-label="Customer App Showcase"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Smartphone className="h-3.5 w-3.5" />
            <span>{isBn ? "কাস্টমার শপিং অভিজ্ঞতা" : "Customer App Showcase"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "গ্রাহকদের সেরা অভিজ্ঞতা" : "Delight Every Shopper"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "মসৃণ ও দ্রুততম শপিং ইন্টারফেস"
                : "The Native Mobile Shopping Journey"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "হোম স্ক্রিন থেকে শুরু করে কার্ট ও লাইভ অর্ডার ট্র্যাকিং পর্যন্ত প্রতিটি স্ক্রিনের বাস্তবসম্মত ডেমো দেখুন।"
              : "Experience the six core interfaces shoppers use every day to discover products and complete purchases."}
          </p>
        </ScrollReveal>

        {/* Interactive Layout: Left Screen Tabs, Right Device Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Screen selector tabs */}
          <ScrollReveal direction="left" distance={16} className="lg:col-span-5 space-y-2">
            {screens.map((s) => {
              const Icon = s.icon;
              const isActive = activeScreen === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScreen(s.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3",
                    isActive
                      ? "border-primary bg-primary/[0.05] shadow-xs"
                      : "border-border bg-card hover:bg-muted/40 text-muted-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {s.label}
                      </h4>
                      <p className="text-[11px] text-muted-foreground line-clamp-1">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={cn("h-4 w-4 transition-transform", isActive ? "text-primary translate-x-0.5" : "text-muted-foreground/40")} />
                </button>
              );
            })}
          </ScrollReveal>

          {/* Right Column: Active Screen Rendering inside Mobile Frame */}
          <ScrollReveal direction="right" distance={16} delay={100} className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[340px] rounded-3xl border-4 border-slate-800 bg-background shadow-2xl p-4 min-h-[560px] flex flex-col justify-between">
              <div>
                {/* Status Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-xs text-muted-foreground">
                  <span className="font-extrabold text-foreground tracking-wider">AURA APPAREL</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px]">9:41 AM</span>
                    <Bell className="h-3.5 w-3.5 text-primary" />
                  </div>
                </div>

                {/* Dynamic Screen View */}
                {activeScreen === "home" && (
                  <div className="space-y-3">
                    <div className="rounded-xl bg-gradient-to-br from-primary/15 to-muted/40 p-4 border border-border">
                      <span className="text-[9px] font-bold text-primary uppercase">SUMMER CAPSULE</span>
                      <h4 className="font-extrabold text-sm text-foreground mt-0.5">Air Linen Shirts</h4>
                      <span className="text-[10px] text-muted-foreground block mt-1">Starting from ৳1,850</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg border border-border p-2 bg-card">
                        <div className="h-14 rounded bg-muted/40 mb-1 flex items-center justify-center text-[10px] text-muted-foreground font-semibold">Twill Chino</div>
                        <span className="text-[10px] font-bold text-foreground block">Slim Chino</span>
                        <span className="text-[10px] font-mono text-primary font-bold">৳2,450</span>
                      </div>
                      <div className="rounded-lg border border-border p-2 bg-card">
                        <div className="h-14 rounded bg-muted/40 mb-1 flex items-center justify-center text-[10px] text-muted-foreground font-semibold">Leather Tote</div>
                        <span className="text-[10px] font-bold text-foreground block">Tote Bag</span>
                        <span className="text-[10px] font-mono text-primary font-bold">৳3,600</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === "products" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground">
                      <Search className="h-3.5 w-3.5" />
                      <span>Search 240+ apparel items...</span>
                    </div>
                    <div className="flex gap-1.5 text-[10px] font-semibold">
                      <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground">All</span>
                      <span className="px-2 py-0.5 rounded border border-border bg-card">Shirts</span>
                      <span className="px-2 py-0.5 rounded border border-border bg-card">Pants</span>
                      <span className="px-2 py-0.5 rounded border border-border bg-card">Bags</span>
                    </div>
                    <div className="space-y-2 pt-1">
                      {["Relaxed Linen Shirt — ৳1,850", "Tailored Twill Chino — ৳2,450", "Oxford Cotton Shirt — ৳1,950"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-border bg-card text-xs">
                          <span className="font-medium text-foreground">{item}</span>
                          <span className="text-primary font-bold text-[10px]">View</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeScreen === "details" && (
                  <div className="space-y-3">
                    <div className="h-28 rounded-xl bg-muted/40 border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                      Product Photo Gallery
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-foreground">Relaxed Linen Shirt</h4>
                      <span className="font-mono text-sm font-extrabold text-primary">৳1,850</span>
                    </div>
                    <div className="flex gap-1.5 items-center text-xs">
                      <span className="text-muted-foreground text-[10px]">Sizes:</span>
                      {["S", "M", "L", "XL"].map((sz, i) => (
                        <span key={i} className={cn("px-2 py-0.5 rounded text-[10px] font-bold border", i === 1 ? "bg-primary text-primary-foreground border-primary" : "border-border")}>
                          {sz}
                        </span>
                      ))}
                    </div>
                    <button type="button" className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-xs">
                      Add to Bag
                    </button>
                  </div>
                )}

                {activeScreen === "cart" && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs text-foreground pb-1 border-b border-border">My Bag (1 item)</h4>
                    <div className="flex justify-between items-center p-2 rounded-lg border border-border bg-card text-xs">
                      <div>
                        <span className="font-bold block text-foreground">Relaxed Linen Shirt</span>
                        <span className="text-[10px] text-muted-foreground">Size: M • Qty: 1</span>
                      </div>
                      <span className="font-mono font-bold text-primary">৳1,850</span>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-2 text-[11px] space-y-1">
                      <div className="flex justify-between text-muted-foreground"><span>Delivery:</span><span className="font-mono">৳60</span></div>
                      <div className="flex justify-between font-bold text-foreground"><span>Total:</span><span className="font-mono text-primary">৳1,910</span></div>
                    </div>
                    <button type="button" className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-xs">
                      1-Tap Checkout
                    </button>
                  </div>
                )}

                {activeScreen === "tracking" && (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-3 text-xs space-y-1">
                      <span className="font-bold text-primary block">Order #CX-8841</span>
                      <span className="text-muted-foreground text-[11px]">Estimated delivery: Today, 3:30 PM</span>
                    </div>
                    <div className="space-y-2 text-xs pt-1">
                      <div className="flex items-center gap-2 text-success font-semibold">
                        <CheckCircle2 className="h-4 w-4" /><span>Order Confirmed</span>
                      </div>
                      <div className="flex items-center gap-2 text-success font-semibold">
                        <CheckCircle2 className="h-4 w-4" /><span>Packed & Invoiced</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <Truck className="h-4 w-4" /><span>Out for Courier Delivery</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreen === "profile" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        TA
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-foreground block">Tanvir Ahmed</span>
                        <span className="text-muted-foreground text-[10px]">tanvir@example.com</span>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2.5 rounded-lg border border-border bg-card flex justify-between items-center text-foreground font-medium">
                        <span>Past Orders (4)</span>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="p-2.5 rounded-lg border border-border bg-card flex justify-between items-center text-foreground font-medium">
                        <span>Saved Addresses (2)</span>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom In-App Tab Bar */}
              <div className="pt-3 border-t border-border flex items-center justify-around text-muted-foreground text-[10px]">
                <span className="flex flex-col items-center text-primary font-bold"><Home className="h-3.5 w-3.5" />Home</span>
                <span className="flex flex-col items-center"><Grid className="h-3.5 w-3.5" />Shop</span>
                <span className="flex flex-col items-center"><ShoppingBag className="h-3.5 w-3.5" />Cart</span>
                <span className="flex flex-col items-center"><User className="h-3.5 w-3.5" />Account</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
