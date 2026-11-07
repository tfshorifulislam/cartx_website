"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhiteLabelCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Discuss Your Branded App Call to Action"
      className={cn("py-16 sm:py-24 bg-card/30 transition-colors", className)}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16 text-center shadow-card">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-5 shadow-2xs">
              <Smartphone className="h-3.5 w-3.5" />
              <span>
                {isBn ? "মোবাইল অ্যাপ কনসালটেশন" : "Branded App Consultation"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              <span className="block text-foreground">
                {isBn
                  ? "আপনার অ্যাপ চালু করতে প্রস্তুত?"
                  : "Ready for iOS & Android?"}
              </span>
              <span className="block brand-gradient-text">
                {isBn
                  ? "আপনার নিজস্ব ব্র্যান্ডেড অ্যাপ নিয়ে আলোচনা করুন"
                  : "Discuss Your Branded App Today."}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              {isBn
                ? "আমাদের ইঞ্জিনিয়ারিং কনসালট্যান্টদের সাথে কথা বলুন এবং আপনার ব্র্যান্ডের জন্য আইওএস ও অ্যান্ড্রয়েড অ্যাপ বাস্তবায়নের প্রক্রিয়া জেনে নিন।"
                : "Schedule a technical scoping session to review your brand requirements, development timeline, and deployment pipeline."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-[var(--primary-hover)] transition-all w-full sm:w-auto"
              >
                <span>{isBn ? "যোগাযোগ করুন" : "Contact Us"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-all w-full sm:w-auto"
              >
                <span>{isBn ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing"}</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground pt-5 border-t border-border">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {isBn
                  ? "১০০% অ্যাপ ও ডেটা মালিকানা"
                  : "100% Brand & Data Ownership"}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {isBn
                  ? "আইওএস ও অ্যান্ড্রয়েড ডুয়াল প্ল্যাটফর্ম"
                  : "iOS & Android Dual Platform"}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {isBn ? "রিয়েলটাইম ইনভেন্টরি সিঙ্ক" : "Real-time Store Sync"}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
