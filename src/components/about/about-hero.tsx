"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function AboutHero({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="About CartX Hero"
      className={cn("hero-bg relative overflow-hidden transition-colors", className)}
    >
      <div className="container relative hero-padding">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary transition-colors mb-6">
              <Building2 className="h-3.5 w-3.5" />
              <span>
                {isBn
                  ? "ওয়েবিকিউ লিমিটেড-এর একটি উদ্যোগ"
                  : "A Product of WebQ LTD • Dhaka, Bangladesh"}
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={80}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
              <span className="brand-gradient-text block mb-1">
                {isBn
                  ? "ডিজিটাল ভবিষ্যৎ গড়ার লক্ষ্যে ব্যবসায়ীদের নির্ভরযোগ্য প্ল্যাটফর্ম"
                  : "Helping Businesses Build Their Digital Future."}
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={140}>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isBn
                ? "CartX হলো একটি আধুনিক ইকমার্স প্ল্যাটফর্ম যা WebQ LTD তৈরি করেছে আধুনিক উদ্যোক্তা ও প্রতিষ্ঠানের জন্য নির্ভরযোগ্য, সমন্বিত এবং সহজে ব্যবহারযোগ্য কমার্স টুলস নিশ্চিত করতে।"
                : "CartX is an e-commerce platform built by WebQ LTD to provide reliable, connected, and accessible commerce tools for modern merchants."}
            </p>
          </ScrollReveal>

          {/* Meta Badges */}
          <ScrollReveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>{isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-success" />
                <span>{isBn ? "০% লেনদেন কমিশন" : "0% Platform Commission"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                <span>{isBn ? "সম্পূর্ণ স্টোর মালিকানা" : "100% Store Ownership"}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
              >
                <span>{isBn ? "আপনার স্টোর শুরু করুন" : "Start Your Store"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
              >
                <span>{isBn ? "যোগাযোগ করুন" : "Contact Team"}</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
