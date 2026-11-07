"use client";

import React from "react";
import Link from "next/link";
import { Info, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhiteLabelRequirements({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const requirements = [
    {
      title: isBn ? "প্ল্যাটফর্ম সহায়তা" : "Supported Platforms",
      desc: isBn
        ? "iOS (আইফোন) এবং Android (স্মার্টফোন) উভয়ের জন্য অপ্টিমাইজড নেটিভ কম্পাইলেশন সাপোর্ট।"
        : "Native compiled packages optimized for Apple iOS (App Store) and Google Android (Play Store).",
    },
    {
      title: isBn ? "ডেভেলপার অ্যাকাউন্ট মালিকানা" : "Developer Account Ownership",
      desc: isBn
        ? "অ্যাপল ও গুগলের নীতিমালা অনুসারে মার্চেন্টের নিজস্ব লিগ্যাল এনটিটির নামে অ্যাকাউন্ট থাকা বাধ্যতামূলক (Apple $99/yr, Google $25 এককালীন)।"
        : "Merchant-owned developer accounts are mandatory under Apple and Google guidelines for business legal identity.",
    },
    {
      title: isBn ? "সেটআপ ও কনফিগারেশন ফি" : "Setup & Scoping Scopes",
      desc: isBn
        ? "আপনার প্রয়োজনীয়তা এবং সাবস্ক্রিপশন প্ল্যান অনুযায়ী নির্ধারিত হয় (গ্রোথ ও বিজনেস প্ল্যানে পেইড অ্যাড-অন, এন্টারপ্রাইজে প্যাকেজ অন্তর্ভুক্ত)।"
        : "Determined by your chosen subscription plan tier and feature scope (Optional add-on on Growth/Business, included on Enterprise).",
    },
    {
      title: isBn ? "ওএস মেইনটেন্যান্স ও আপডেট পলিসি" : "OS Updates & SLA Policy",
      desc: isBn
        ? "অ্যাপল এবং গুগলের বার্ষিক ওএস আপডেট ও সিকিউরিটি প্যাচের সাথে অ্যাপ সক্রিয় রাখতে নিয়মিত ব্যাকএন্ড আপডেট সরবরাহ করা হয়।"
        : "Regular compatibility patches to maintain compliance with annual major iOS and Android operating system upgrades.",
    },
    {
      title: isBn ? "স্টোর রিভিউ ও অনুমোদন সীমাবদ্ধতা" : "App Store Review Limitations",
      desc: isBn
        ? "অ্যাপ রিভিউ এবং অনুমোদনের সময়সীমা সম্পূর্ণভাবে অ্যাপল ও গুগলের নিজস্ব পলিসি এবং টিম পর্যালোচনার ওপর নির্ভরশীল।"
        : "Approval timelines and review decisions are strictly subject to Apple App Store and Google Play compliance guidelines.",
    },
    {
      title: isBn ? "মার্চেন্টের দায়িত্ব" : "Merchant Responsibilities",
      desc: isBn
        ? "সঠিক ব্র্যান্ডিং অ্যাসেট, পণ্য ক্যাটালগ তথ্য ও বৈধ ট্রেড লাইসেন্স বা বিজনেস রেজিস্ট্রেশন তথ্য সরবরাহ করা।"
        : "Providing high-resolution vector logos, accurate product listings, privacy policy documents, and developer access.",
    },
  ];

  return (
    <section
      id="requirements-pricing"
      aria-label="Requirements and Service Policies"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Info className="h-3.5 w-3.5" />
            <span>{isBn ? "প্রয়োজনীয় শর্তাবলী ও স্বচ্ছ নীতিমালা" : "Service Requirements"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "পূর্বপ্রস্তুতি ও গাইডলাইন" : "Prerequisites & Preparation"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "অ্যাপ তৈরির পূর্বে জেনে রাখা দরকার এমন বিষয়"
                : "Essential Guidelines Before Requesting an App"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "অফিসিয়াল স্টোর একাউন্ট, ওএস সাপোর্ট এবং মেইনটেন্যান্স পলিসি সংক্রান্ত স্বচ্ছ তথ্য।"
              : "Clear transparency regarding third-party developer accounts, store publishing policies, and technical maintenance."}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {requirements.map((req, idx) => (
            <ScrollReveal
              key={idx}
              delay={(idx % 3) * 70}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs"
            >
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{req.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {req.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Third-party Developer Fees Card */}
        <ScrollReveal delay={100} className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-foreground">
              {isBn ? "অফিসিয়াল স্টোর অ্যাকাউন্ট চার্জ" : "Official Developer Account Fees"}
            </h4>
            <p className="text-xs text-muted-foreground">
              Apple Developer Program ($99/year) • Google Play Console ($25 one-time)
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
          >
            <span>{isBn ? "প্রাইসিং ও অ্যাড-অন বিস্তারিত" : "Explore Plan Add-ons"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
