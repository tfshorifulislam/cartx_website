"use client";

import React from "react";
import { Sliders, CheckCircle2, Info, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

export interface ThemeCustomizationOptionsProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeCustomizationOptions({ theme, className }: ThemeCustomizationOptionsProps) {
  const { locale } = useLanguage();
  const { customizable, nonCustomizable, planDependent, considerations } = theme.customization;

  return (
    <section
      id="theme-customization"
      aria-label="Theme Customization Options"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-card relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Sliders className="size-3 text-secondary-accent shrink-0" />
              <span>
                {locale === "bn" ? "কাস্টমাইজেশন নির্দেশিকা" : "Supported Customization"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "কাস্টমাইজেশন অপশন" : "Flexible Styling"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn"
                  ? `${theme.name.bn}-এ যা যা পরিবর্তন করা যাবে`
                  : `Customization Controls for ${theme.name.en}`}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {locale === "bn"
                ? "কোডিং ছাড়াই স্টোর বিল্ডারের সাহায্যে কীভাবে আপনি এই থিমটি নিজের ব্র্যান্ডের মতো সাজাবেন।"
                : "A detailed breakdown of customizable visual elements, built-in safeguards, and plan-dependent features."}
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Columns: Customizable, Built-In Safeguards, Plan-Dependent */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {/* 1. Customizable Elements */}
          <ScrollReveal delay={50}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {locale === "bn" ? "কাস্টমাইজযোগ্য উপাদান" : "Customizable Elements"}
                  </h3>
                </div>

                <ul className="space-y-3" role="list">
                  {customizable.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-snug">
                      <CheckCircle2 className="size-3.5 text-success shrink-0 mt-0.5" />
                      <span>{c[locale] || c.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60 mt-6">
                <span className="text-[11px] text-muted-foreground">
                  {locale === "bn" ? "কোনো কোডিং ছাড়া তাৎক্ষণিক পরিবর্তন" : "Instant no-code updates"}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Non-Customizable (Built-in Safeguards) */}
          <ScrollReveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="size-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                    <ShieldCheck className="size-4" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {locale === "bn" ? "বিল্ট-ইন সুরক্ষা ও গতি" : "Protected Safeguards"}
                  </h3>
                </div>

                <ul className="space-y-3" role="list">
                  {nonCustomizable.map((nc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-snug">
                      <span className="size-1.5 rounded-full bg-muted-foreground/60 shrink-0 mt-1.5" />
                      <span>{nc[locale] || nc.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60 mt-6">
                <span className="text-[11px] text-muted-foreground">
                  {locale === "bn" ? "পারফরম্যান্স ও নিরাপত্তা রক্ষার জন্য লকড" : "Locked for stability & speed"}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Plan-Dependent Features */}
          <ScrollReveal delay={150}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Sliders className="size-4" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">
                    {locale === "bn" ? "প্ল্যান-ভিত্তিক সুবিধা" : "Plan-Dependent Features"}
                  </h3>
                </div>

                <ul className="space-y-3" role="list">
                  {planDependent.map((pd, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-snug">
                      <Info className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{pd[locale] || pd.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60 mt-6">
                <span className="text-[11px] text-muted-foreground">
                  {locale === "bn" ? "প্ল্যান আপগ্রেডের মাধ্যমে সক্রিয়" : "Activated via plan tier"}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Consideration Callout */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 sm:p-5 flex items-start gap-3.5">
              <Info className="size-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                {considerations[locale] || considerations.en}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

