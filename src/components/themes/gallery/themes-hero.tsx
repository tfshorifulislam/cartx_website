"use client";

import React from "react";
import { Palette, ArrowDown, CheckCircle2, Monitor, Smartphone, Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface ThemesHeroProps {
  className?: string;
  onExploreClick?: () => void;
}

export function ThemesHero({ className, onExploreClick }: ThemesHeroProps) {
  const { locale } = useLanguage();

  const handleScrollToGrid = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.getElementById("theme-grid");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      aria-label="Themes Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[32rem] w-[32rem] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.04]"
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
          {/* Left Column: Copy & Actions */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <ScrollReveal delay={0}>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-4 select-none">
                <Palette className="size-3 text-secondary-accent shrink-0" />
                <span>
                  {locale === "bn"
                    ? "স্টোরফ্রন্ট থিম ও টেমপ্লেটস"
                    : "Storefront Themes & Templates"}
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-balance !mb-4 leading-[1.2] sm:leading-[1.18] font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                {locale === "bn" ? (
                  <>
                    আপনার ব্র্যান্ডের উপযোগী{" "}
                    <span className="brand-gradient-text">সেরা স্টোর ডিজাইন</span> বেছে নিন
                  </>
                ) : (
                  <>
                    Find a Store Design That{" "}
                    <span className="brand-gradient-text">Matches Your Brand.</span>
                  </>
                )}
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 !mb-7 text-balance">
                {locale === "bn"
                  ? "আমাদের স্টোরফ্রন্ট থিমগুলো ঘুরে দেখুন এবং আপনার পণ্য অনলাইনে কীভাবে সুন্দরভাবে প্রদর্শিত হবে তা পর্যবেক্ষণ করুন।"
                  : "Explore available storefront themes and see how your products can be presented online."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
                <a
                  href="#theme-grid"
                  onClick={handleScrollToGrid}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>{locale === "bn" ? "থিমগুলো দেখুন" : "Preview Themes"}</span>
                  <ArrowDown className="size-4 animate-bounce" />
                </a>
              </div>

              {/* Trust Line */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-success shrink-0" />
                  <span>
                    {locale === "bn"
                      ? "১০০% মোবাইল রেসপনসিভ"
                      : "100% Mobile Responsive"}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-success shrink-0" />
                  <span>
                    {locale === "bn"
                      ? "সকল স্ট্যান্ডার্ড প্ল্যানে ফ্রি অন্তর্ভুক্ত"
                      : "Included Free On All Standard Plans"}
                  </span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Theme Mockup */}
          <div className="flex-1 w-full max-w-xl">
            <ScrollReveal delay={120}>
              <div className="relative rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-lg overflow-hidden">
                {/* Browser top chrome */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/70 select-none">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="size-2.5 rounded-full bg-destructive/60" />
                    <div className="size-2.5 rounded-full bg-amber-500/60" />
                    <div className="size-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="rounded-md bg-muted px-3 py-1 text-[11px] font-mono text-muted-foreground">
                    cartx.app/themes/preview
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Monitor className="size-3.5" />
                    <Smartphone className="size-3.5" />
                  </div>
                </div>

                {/* Simulated Grid of 3 Theme Styles */}
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Theme 1: Aura (Editorial) */}
                  <div className="rounded-lg border border-stone-200 bg-[#FAF9F5] p-2.5 text-stone-800 flex flex-col justify-between h-36 sm:h-40">
                    <div>
                      <span className="text-[8px] font-bold tracking-wider uppercase text-stone-500 block">
                        FASHION
                      </span>
                      <span className="font-serif text-[11px] font-bold text-stone-900 block truncate">
                        Aura Studio
                      </span>
                    </div>
                    <div className="my-1.5 h-12 rounded bg-gradient-to-br from-stone-200/80 to-amber-100/40 border border-stone-200/60 flex items-center justify-center text-[9px] font-serif text-stone-700">
                      Lookbook
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 text-[8px] text-stone-600">
                      <span>৳২,৪৫০</span>
                      <span className="size-2 rounded-full bg-stone-800" />
                    </div>
                  </div>

                  {/* Theme 2: Volt (Modern Tech) */}
                  <div className="rounded-lg border border-slate-800 bg-[#0B0F17] p-2.5 text-slate-200 flex flex-col justify-between h-36 sm:h-40">
                    <div>
                      <span className="text-[8px] font-mono font-bold tracking-wider uppercase text-sky-400 block">
                        TECH
                      </span>
                      <span className="font-mono text-[11px] font-bold text-white block truncate">
                        Volt Tech
                      </span>
                    </div>
                    <div className="my-1.5 h-12 rounded bg-gradient-to-br from-slate-900 to-sky-950/60 border border-slate-800 flex items-center justify-center text-[9px] font-mono text-sky-300">
                      Spec Matrix
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[8px] font-mono text-slate-400">
                      <span className="text-white">৳৪,৮০০</span>
                      <span className="size-2 rounded-full bg-sky-400" />
                    </div>
                  </div>

                  {/* Theme 3: Lumina (Botanical) */}
                  <div className="rounded-lg border border-rose-100 bg-[#FAF5F2] p-2.5 text-rose-950 flex flex-col justify-between h-36 sm:h-40">
                    <div>
                      <span className="text-[8px] font-bold tracking-wider uppercase text-rose-600 block">
                        BEAUTY
                      </span>
                      <span className="font-serif text-[11px] font-bold text-rose-950 block truncate">
                        Lumina Essence
                      </span>
                    </div>
                    <div className="my-1.5 h-12 rounded bg-gradient-to-br from-rose-100/60 to-pink-50 border border-rose-200/60 flex items-center justify-center text-[9px] font-serif text-rose-800">
                      Skin Ritual
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-rose-100 text-[8px] text-rose-800">
                      <span>৳১,৬৫০</span>
                      <span className="size-2 rounded-full bg-rose-600" />
                    </div>
                  </div>
                </div>

                {/* Footer preview note */}
                <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Layers className="size-3 text-primary" />
                    <span>
                      {locale === "bn"
                        ? "৬টি প্রস্তুত রিটেল থিম ও টেমপ্লেট"
                        : "6 Ready Retail Themes & Templates"}
                    </span>
                  </span>
                  <span className="text-primary font-semibold">
                    {locale === "bn" ? "নো-কোড সেটআপ" : "No-Code Setup"}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

