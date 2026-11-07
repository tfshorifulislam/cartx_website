"use client";

import React from "react";
import {
  Camera,
  Sliders,
  ShoppingBag,
  Zap,
  Cpu,
  ShieldCheck,
  Clock,
  Heart,
  Filter,
  CheckCircle2,
  Star,
  PlusCircle,
  Package,
  Truck,
  Home,
  Ruler,
  Palette,
  BookOpen,
  FileText,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ThemeItem } from "../types";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Camera,
  Sliders,
  ShoppingBag,
  Zap,
  Cpu,
  ShieldCheck,
  Clock,
  Heart,
  Filter,
  CheckCircle2,
  Star,
  PlusCircle,
  Package,
  Truck,
  Home,
  Ruler,
  Palette,
  BookOpen,
  FileText,
  Layers,
};

export interface ThemeCapabilitiesProps {
  theme: ThemeItem;
  className?: string;
}

export function ThemeCapabilities({ theme, className }: ThemeCapabilitiesProps) {
  const { locale } = useLanguage();

  if (theme.capabilities.length === 0) return null;

  return (
    <section
      id="theme-capabilities"
      aria-label="Theme Capabilities"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <Layers className="size-3 text-secondary-accent shrink-0" />
              <span>
                {locale === "bn" ? "ভেরিফায়েড সক্ষমতা" : "Verified Capabilities"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "থিমের মূল সক্ষমতা" : "Theme Capabilities"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn"
                  ? `${theme.name.bn}-এর বিশেষ বৈশিষ্ট্যসমূহ`
                  : `Built Specifically for ${theme.name.en}`}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {locale === "bn"
                ? "এই থিমে অন্তর্ভুক্ত প্রতিটি ফিচার বাস্তব গ্রাহকদের অভিজ্ঞতা বৃদ্ধি ও সহজে কেনাকাটার জন্য তৈরি।"
                : "Every feature in this theme is engineered to address the specific browsing habits and checkout demands of this vertical."}
            </p>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {theme.capabilities.map((cap, index) => {
            const Icon = ICON_MAP[cap.iconName] || Layers;

            return (
              <ScrollReveal key={cap.id} delay={index * 70}>
                <div className="h-full flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:shadow-md hover:border-primary/40 group">
                  <div>
                    <div className="size-11 rounded-lg bg-primary/[0.08] border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 mb-4">
                      <Icon className="size-5 shrink-0" />
                    </div>

                    <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                      {cap.title[locale] || cap.title.en}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cap.description[locale] || cap.description.en}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

