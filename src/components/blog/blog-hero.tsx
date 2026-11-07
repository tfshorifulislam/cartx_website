"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function BlogHero({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Blog Hero"
      className={cn("hero-bg relative overflow-hidden transition-colors", className)}
    >
      <div className="container relative hero-padding">
        <ScrollReveal direction="up" distance={20} className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary transition-colors mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            <span>
              {isBn ? "কার্টএক্স নলেজ হাব ও ব্লগ" : "CartX Knowledge Hub & Merchant Guides"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            <span className="brand-gradient-text block mb-1">
              {isBn
                ? "আপনার অনলাইন ব্যবসা বৃদ্ধির প্রয়োজনীয় দিকনির্দেশনা"
                : "Insights to Help Your Online Business Grow."}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isBn
              ? "ইকমার্স কৌশল, ডেলিভারি অপারেশন, পেমেন্ট গেটওয়ে এবং বিক্রয় বৃদ্ধির কার্যকর পরামর্শ নিয়ে আমাদের নিয়মিত নিবন্ধ।"
              : "Actionable guides, operational strategies, and industry insights curated to help modern merchants launch and scale."}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
