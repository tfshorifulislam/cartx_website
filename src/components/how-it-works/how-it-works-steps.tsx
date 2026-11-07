"use client";

import React from "react";
import {
  UserPlus,
  Store,
  Layers,
  CreditCard,
  Globe,
  Package,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function HowItWorksSteps({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const steps = [
    {
      id: "step-1",
      number: "01",
      icon: UserPlus,
      title: isBn ? "অ্যাকাউন্ট তৈরি ও ভেরিফিকেশন" : "Create an Account",
      subtitle: isBn
        ? "নিরাপদ সাইনআপ ও ওটিপি যাচাই"
        : "Registration & Phone Verification",
      desc: isBn
        ? "আপনার নাম, ব্যবসায়িক মোবাইল নম্বর ও পাসওয়ার্ড দিয়ে নিমেষেই বিনামূল্যে অ্যাকাউন্ট তৈরি করুন। কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।"
        : "Sign up in seconds with your business phone number and email. Instant SMS OTP verification gets your workspace ready with a 14-day free trial.",
      details: [
        isBn ? "সহজ মোবাইল ওটিপি ভেরিফিকেশন" : "Fast phone OTP verification",
        isBn
          ? "কোনো ক্রেডিট কার্ডের তথ্য ছাড়াই ১৪ দিনের ট্রায়াল"
          : "14-day free trial without credit card",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-2 text-xs">
          <div className="flex justify-between items-center text-muted-foreground pb-2 border-b border-border">
            <span>Sign Up Form</span>
            <span className="text-success font-semibold">Verified</span>
          </div>
          <div className="rounded border border-border/80 bg-muted/40 p-2 font-mono text-[11px]">
            +880 1711-XXXXXX [SMS OTP: 4920]
          </div>
        </div>
      ),
    },
    {
      id: "step-2",
      number: "02",
      icon: Store,
      title: isBn ? "স্টোর তৈরি ও ব্র্যান্ডিং" : "Create Your Store",
      subtitle: isBn
        ? "নাম, ক্যাটাগরি ও থিম নির্বাচন"
        : "Store Name, Category & Theme",
      desc: isBn
        ? "আপনার ব্যবসার জন্য একটি পছন্দের সাবডোমেন নির্বাচন করুন (যেমন: yourbrand.cartx.app), লোগো আপলোড করুন এবং চমৎকার থিম বেছে নিন।"
        : "Choose a memorable store handle (e.g. yourbrand.cartx.app), upload your high-resolution logo, and choose a tailored e-commerce theme.",
      details: [
        isBn
          ? "ফ্রি ইন্সট্যান্ট কার্টএক্স সাবডোমেন"
          : "Instant free CartX subdomain",
        isBn
          ? "৬টি প্রস্তুত রেসপন্সিভ থিম টেমপ্লেট"
          : "Choice of 6 production-ready responsive themes",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-2 text-xs">
          <div className="text-muted-foreground text-[11px]">Store Handle:</div>
          <div className="p-2 rounded bg-primary/10 text-primary font-mono font-bold text-xs">
            aurafashion.cartx.app
          </div>
          <div className="text-[10px] text-muted-foreground">
            Theme Selected: Aura Studio (Editorial)
          </div>
        </div>
      ),
    },
    {
      id: "step-3",
      number: "03",
      icon: Layers,
      title: isBn ? "পণ্য ও ভ্যারিয়েন্ট যোগ" : "Add Products & Variants",
      subtitle: isBn
        ? "ছবি, বিবরণ, মূল্য ও ইনভেন্টরি"
        : "Details, Variants, Pricing & Stock",
      desc: isBn
        ? "পণ্যের একাধিক ছবি, টাইটেল, বিস্তারিত ডেসক্রিপশন, সাইজ ও কালার ভ্যারিয়েন্ট ম্যাট্রিক্স এবং স্টক সংখ্যা যুক্ত করুন।"
        : "Upload multi-angle photography, rich descriptions, multi-attribute variants (sizes, colors, weights), retail pricing, and SKU counts.",
      details: [
        isBn
          ? "মাল্টি-ভ্যারিয়েন্ট ম্যাট্রিক্স (সাইজ/কালার/ওজন)"
          : "Multi-attribute size and color matrix",
        isBn
          ? "স্বয়ংক্রিয় লো-স্টক ও ইনভেন্টরি ট্র্যাকিং"
          : "Automated low-stock tracking and threshold alerts",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-1.5 text-xs">
          <div className="font-bold text-foreground">Relaxed Linen Shirt</div>
          <div className="flex gap-1.5 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-muted">
              Size: S, M, L, XL
            </span>
            <span className="px-2 py-0.5 rounded bg-muted">
              Color: Navy, Charcoal
            </span>
          </div>
          <div className="font-mono text-primary font-extrabold text-sm pt-1">
            ৳1,850 • Stock: 45
          </div>
        </div>
      ),
    },
    {
      id: "step-4",
      number: "04",
      icon: CreditCard,
      title: isBn ? "পেমেন্ট ও কুরিয়ার যুক্তকরণ" : "Configure Checkout",
      subtitle: isBn
        ? "বিকাশ, নগদ ও অটো কুরিয়ার"
        : "Payment Gateways & Courier APIs",
      desc: isBn
        ? "ক্যাশ অন ডেলিভারি (COD), বিকাশ, নগদ ও কার্ড পেমেন্ট সচল করুন। পাঠাও, স্টেডফাস্ট বা রেডএক্স কুরিয়ার এক ক্লিকে লিংক করুন।"
        : "Enable Cash on Delivery, bKash, Nagad, and local cards. Connect Pathao, Steadfast, and RedX couriers with API token integrations.",
      details: [
        isBn
          ? "০% কার্টএক্স প্ল্যাটফর্ম কমিশন"
          : "0% CartX platform transaction commission",
        isBn
          ? "অটোমেটেড কুরিয়ার বুকিং ও ডেলিভারি ট্র্যাকিং"
          : "Automated courier tracking and consignment booking",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[11px]">
            <span>bKash Online Merchant API</span>
            <span className="text-success font-bold">Connected</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span>Pathao Courier API Key</span>
            <span className="text-success font-bold">Active</span>
          </div>
        </div>
      ),
    },
    {
      id: "step-5",
      number: "05",
      icon: Globe,
      title: isBn ? "স্টোর পাবলিশ ও ডোমেন সেটআপ" : "Publish Your Store",
      subtitle: isBn
        ? "কাস্টম ডোমেন ও ফ্রি এসএসএল"
        : "Custom Domain & Automated SSL",
      desc: isBn
        ? "আপনার নিজস্ব ব্র্যান্ডেড কাস্টম ডোমেন (যেমন: yourbrand.com) সংযুক্ত করুন। স্বয়ংক্রিয়ভাবে ফ্রি SSL সিকিউরিটি সার্টিফিকেট সক্রিয় হবে।"
        : "Connect your custom top-level domain with automated Cloudflare/Let's Encrypt SSL certificates and launch your store to the public.",
      details: [
        isBn
          ? "ফ্রি স্বয়ংক্রিয় ক্লাউডফ্লেয়ার SSL এনক্রিপশন"
          : "Free automated zero-config SSL encryption",
        isBn
          ? "সরাসরি যেকোনো সময় স্টোরফ্রন্ট প্রিভিউ"
          : "Instant live storefront preview before going live",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-success font-bold text-xs">
            <CheckCircle2 className="h-4 w-4" />
            <span>SSL Certificate Active</span>
          </div>
          <div className="font-mono text-xs text-foreground">
            https://www.aurafashion.com
          </div>
        </div>
      ),
    },
    {
      id: "step-6",
      number: "06",
      icon: Package,
      title: isBn ? "অর্ডার ম্যানেজমেন্ট ও ডেলিভারি" : "Manage Your Orders",
      subtitle: isBn
        ? "ইনভয়েস প্রিন্ট ও কুরিয়ার হ্যান্ডওভার"
        : "Invoicing, Packing & Dispatch",
      desc: isBn
        ? "নতুন অর্ডার আসলে এসএমএস অ্যালার্ট পান, চালান প্রিন্ট করুন এবং এক ক্লিকে কুরিয়ার ডেলিভারিম্যানকে পিকআপের জন্য অ্যাসাইন করুন।"
        : "Receive instant notifications for incoming orders, print automated PDF invoices, and trigger single-click courier pickups.",
      details: [
        isBn
          ? "এক ক্লিকে অটোমেটেড ইনভয়েস প্রিন্টিং"
          : "Single-click PDF invoice and packing slip generation",
        isBn
          ? "কাস্টমারদের কাছে স্বয়ংক্রিয় ডেলিভারি এসএমএস"
          : "Automated SMS notification updates to buyers",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="font-bold">Order #CX-1049</span>
            <span className="text-primary font-bold">৳2,450</span>
          </div>
          <div className="rounded bg-muted/40 p-1.5 text-[10px] text-muted-foreground">
            Courier: Steadfast (Tracking: ST-882049)
          </div>
        </div>
      ),
    },
    {
      id: "step-7",
      number: "07",
      icon: TrendingUp,
      title: isBn ? "পারফরম্যান্স ও সেলস রিপোর্ট" : "Review Performance",
      subtitle: isBn
        ? "অ্যানালিটিক্স ও ব্যবসায়িক প্রবৃদ্ধি"
        : "Sales Insights & Realized Metrics",
      desc: isBn
        ? "দৈনিক মোট বিক্রি, সর্বাধিক বিক্রিত পণ্য, রিটার্ন রেশিও এবং ভিজিটর রূপান্তর হার পর্যবেক্ষণ করে ব্যবসার সঠিক সিদ্ধান্ত গ্রহণ করুন।"
        : "Evaluate gross sales totals, top revenue items, return ratios, and localized checkout conversion rates to scale profitably.",
      details: [
        isBn
          ? "দৈনিক, সাপ্তাহিক ও মাসিক সেলস গ্রাফ"
          : "Daily, weekly, and monthly net sales reporting",
        isBn
          ? "মেটা পিক্সেল ও গুগল অ্যানালিটিক্স ৪ ট্র্যাকিং"
          : "Built-in Meta Pixel CAPI and Google Analytics 4 sync",
      ],
      mockupPreview: (
        <div className="rounded-xl border border-border bg-card p-4 space-y-1 text-xs">
          <div className="text-muted-foreground text-[10px]">
            Monthly Revenue:
          </div>
          <div className="font-mono text-base font-extrabold text-foreground">
            ৳1,48,900
          </div>
          <div className="text-[10px] text-success font-semibold">
            94% Successful Delivery Rate
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="how-it-works-steps"
      aria-label="7 Step Process Guide"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-background transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <span>
              {isBn ? "পর্যায়ক্রমিক প্রক্রিয়া" : "Step-by-Step Flow"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "অনবোর্ডিং নির্দেশিকা" : "Simple Onboarding Path"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "৭টি সহজ ধাপে সম্পূর্ণ অনলাইন স্টোর চালু করুন"
                : "Launch Your Store in 7 Steps"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "কোনো জটিল কোডিং ছাড়াই একজন সাধারণ উদ্যোক্তা কীভাবে সফলভাবে অনলাইন ব্যবসা শুরু করবেন।"
              : "A clear, guided roadmap from zero to fulfilling customer orders and tracking performance."}
          </p>
        </ScrollReveal>

        {/* 7 Vertical Step Lockups with Alternating/Progressive Layout */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isEven = idx % 2 === 1;

            return (
              <ScrollReveal
                key={st.id}
                delay={(idx % 2) * 80}
                className={cn(
                  "rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs hover:border-primary/40 hover:shadow-card transition-all flex flex-col md:flex-row gap-8 items-center",
                  isEven ? "md:flex-row-reverse" : "",
                )}
              >
                <div
                  id={st.id}
                  className="w-full flex flex-col md:flex-row gap-8 items-center"
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                        {st.number}
                      </span>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {st.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {st.desc}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs text-foreground">
                      {st.details.map((dt, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                          <span>{dt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Mockup Illustration Area */}
                  <div className="w-full md:w-5/12 max-w-sm rounded-xl border border-border bg-muted/20 p-5 shadow-2xs">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        Step {st.number} Interface
                      </span>
                    </div>
                    {st.mockupPreview}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
