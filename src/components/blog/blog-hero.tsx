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
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home Hero) ── */}

      {/* Large soft radial in the top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content (uses centralized .hero-padding token) ── */}
      <div className="container relative hero-padding">
        <ScrollReveal
          direction="up"
          delay={0}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
            <BookOpen className="size-3 text-secondary-accent shrink-0" />
            <span>
              {isBn ? "কার্টএক্স নলেজ হাব ও ব্লগ" : "CartX Knowledge Hub & Merchant Guides"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "আপনার অনলাইন ব্যবসা বৃদ্ধির" : "Insights to Help"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "প্রয়োজনীয় দিকনির্দেশনা" : "Your Online Business Grow."}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-8 text-balance">
            {isBn
              ? "ইকমার্স কৌশল, ডেলিভারি অপারেশন, পেমেন্ট গেটওয়ে এবং বিক্রয় বৃদ্ধির কার্যকর পরামর্শ নিয়ে আমাদের নিয়মিত নিবন্ধ।"
              : "Actionable guides, operational strategies, and industry insights curated to help modern merchants launch and scale."}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
