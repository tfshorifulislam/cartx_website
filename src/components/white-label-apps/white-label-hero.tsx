"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, ArrowRight, Bell, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhiteLabelHero({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="White-label Mobile Apps Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* Decorative background shapes (Matches Home/Features Hero) */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container relative hero-padding">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Column: Text & CTAs */}
          <ScrollReveal direction="up" distance={20} className="flex-1 max-w-xl text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-xs font-semibold text-primary mb-4 shadow-2xs">
              <Smartphone className="h-3.5 w-3.5" />
              <span>{isBn ? "হোয়াইট-লেবেল মোবাইল অ্যাপ্লিকেশন" : "White-Label Mobile Apps"}</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-4">
              <span className="block text-foreground">
                {isBn ? "আপনার নিজস্ব ব্র্যান্ড।" : "Your Brand."}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আপনার শপিং অ্যাপ।" : "Your Shopping App."}
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              {isBn
                ? "গ্রাহকদের আরও সরাসরি ও মানসম্মত শপিং অভিজ্ঞতা দিতে আপনার অনলাইন স্টোরের জন্য নিজস্ব ব্র্যান্ডেড মোবাইল অ্যাপ সলিউশন।"
                : "Explore branded mobile app options for businesses that want to deliver a more direct shopping experience to their customers."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] transition-all"
              >
                <span>{isBn ? "অ্যাপ কনসালটেশন বুক করুন" : "Request an App Consultation"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-all shadow-2xs"
              >
                <span>{isBn ? "প্রাইসিং দেখুন" : "View Pricing"}</span>
              </Link>
            </div>

            {/* Micro trust note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-success shrink-0" />
              <span>{isBn ? "নেটিভ আইওএস ও অ্যান্ড্রয়েড কম্পাইলেশন পাইপলাইন" : "Native iOS & Android compilation pipeline"}</span>
            </div>
          </ScrollReveal>

          {/* Right Column: Illustrative Mobile App Showcase */}
          <ScrollReveal direction="up" distance={20} delay={150} className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-3xl border-4 border-slate-800 bg-background shadow-2xl p-4 overflow-hidden">
              {/* App Status Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-[11px] text-muted-foreground">
                <span className="font-extrabold text-foreground tracking-wider">AURA APPAREL</span>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span>v2.4.0</span>
                </div>
              </div>

              {/* In-app Notification Card */}
              <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-3 mb-3 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Bell className="h-3.5 w-3.5" />
                </div>
                <div className="text-[10px] leading-tight flex-1">
                  <span className="font-bold text-foreground block">
                    {isBn ? "লাইভ অর্ডার ট্র্যাকিং" : "Order Dispatch Update"}
                  </span>
                  <span className="text-muted-foreground">
                    {isBn ? "আপনার পার্সেল কুরিয়ারে হ্যান্ডওভার হয়েছে" : "Package #CX-4092 is out for delivery"}
                  </span>
                </div>
              </div>

              {/* App Hero Card */}
              <div className="rounded-xl bg-gradient-to-br from-primary/15 via-muted/30 to-background border border-border p-3.5 mb-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary block mb-0.5">
                  EXCLUSIVE MOBILE PERK
                </span>
                <span className="font-bold text-xs text-foreground block">
                  10% Off First Mobile App Order
                </span>
                <span className="text-[10px] text-muted-foreground block mt-1">
                  Code: APPFIRST10
                </span>
              </div>

              {/* Sample Product Row */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-foreground px-1">
                  <span>{isBn ? "জনপ্রিয় পণ্য" : "Trending in App"}</span>
                  <span className="text-primary text-[10px]">{isBn ? "সব দেখুন" : "See All"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border bg-card p-2.5 text-left">
                    <div className="h-14 rounded bg-muted/40 mb-1.5 flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                      Linen Shirt
                    </div>
                    <span className="text-[10px] font-bold text-foreground block truncate">Relaxed Linen</span>
                    <span className="text-[10px] font-semibold text-primary font-mono">৳1,850</span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-2.5 text-left">
                    <div className="h-14 rounded bg-muted/40 mb-1.5 flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                      Chino Pant
                    </div>
                    <span className="text-[10px] font-bold text-foreground block truncate">Slim Chino</span>
                    <span className="text-[10px] font-semibold text-primary font-mono">৳2,450</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
