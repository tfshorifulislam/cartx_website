"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function AboutCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="About Page Call to Action"
      className={cn("py-20 sm:py-28 bg-background relative overflow-hidden transition-colors", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal delay={0}>
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-xs p-8 sm:p-14 text-center shadow-card relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
              <span className="block text-foreground">
                {isBn ? "চলুন একসাথে গড়ে তুলি" : "Let's Build Better"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "ডিজিটাল কমার্সের নতুন দিগন্ত" : "Online Businesses Together."}
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {isBn
                ? "আপনি নতুন উদ্যোগ শুরু করছেন কিংবা প্রতিষ্ঠিত রিটেইল ব্যবসা স্কেল করছেন—CartX আপনাকে দিচ্ছে আধুনিক ও শক্তিশালী ইকমার্স প্রযুক্তি।"
                : "Whether you are starting small or scaling an established retail enterprise, CartX provides the dependable platform to power your growth."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
              >
                <span>{isBn ? "বিনামূল্যে স্টোর শুরু করুন" : "Start Your Free Store"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{isBn ? "আমাদের সাথে কথা বলুন" : "Contact Our Team"}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
