"use client";

import React from "react";
import { ArrowDown, MonitorPlay, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface BookDemoHeroProps {
  onScrollToForm?: () => void;
  className?: string;
}

export function BookDemoHero({ onScrollToForm, className }: BookDemoHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const handleScroll = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById("demo-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      aria-label="Book a Demo Hero"
      className={cn("hero-bg relative overflow-hidden transition-colors", className)}
    >
      <div className="container relative hero-padding">
        <ScrollReveal direction="up" distance={20} className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-semibold text-primary transition-colors mb-6">
            <MonitorPlay className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">
              {isBn ? "ডেমো অনুরোধ করুন" : "BOOK A DEMO"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn
                ? "কার্টএক্স কীভাবে আপনার ব্যবসাকে"
                : "See How CartX"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "এগিয়ে নেবে তা দেখুন।"
                : "Can Support Your Business."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isBn
              ? "আপনার ব্যবসা এবং প্রয়োজনীয় ফিচারগুলো সম্পর্কে জানান। আমাদের বিশেষজ্ঞ টিম আপনার চাহিদা পর্যালোচনা করে পছন্দের মাধ্যমে আপনার সাথে যোগাযোগ করবে।"
              : "Tell us about your business and the capabilities you're looking for. Our team can review your requirements and follow up using your preferred contact method."}
          </p>

          {/* Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              <span>{isBn ? "কাস্টমাইজড ওয়াকথ্রু" : "Tailored Platform Walkthrough"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              <span>{isBn ? "হোয়াইট-লেবেল অ্যাপ পরামর্শ" : "White-Label App Consultation"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 backdrop-blur-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              <span>{isBn ? "০% লেনদেন কমিশন পলিসি" : "0% Commission Architecture"}</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <MonitorPlay className="h-4 w-4" />
              <span>{isBn ? "ডেমোর জন্য অনুরোধ করুন" : "Request a Demo"}</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

