"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { THEMES_GALLERY_FAQS } from "../themes-data";
import { cn } from "@/lib/utils";

export interface ThemesFAQProps {
  className?: string;
}

export function ThemesFAQ({ className }: ThemesFAQProps) {
  const { locale } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(THEMES_GALLERY_FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="themes-faq"
      aria-label="Themes Frequently Asked Questions"
      className={cn("py-16 sm:py-20 lg:py-24 border-b border-border bg-muted/20 relative", className)}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <HelpCircle className="size-3 text-secondary-accent shrink-0" />
              <span>{locale === "bn" ? "সাধারণ প্রশ্নোত্তর" : "Frequently Asked Questions"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance !mb-4 leading-tight">
              <span className="block text-foreground">
                {locale === "bn" ? "সাধারণ জিজ্ঞাসা ও উত্তর" : "Frequently Asked Questions"}
              </span>
              <span className="block brand-gradient-text">
                {locale === "bn"
                  ? "থিম সম্পর্কিত তথ্যাবলী"
                  : "Everything You Need to Know About Themes"}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              {locale === "bn"
                ? "থিম নির্বাচন, মোবাইল প্রিভিউ, নো-কোড কাস্টমাইজেশন এবং প্ল্যান সম্পর্কিত সাধারণ প্রশ্নের উত্তর।"
                : "Clear answers on choosing themes, interactive previews, customization boundaries, and plan eligibility."}
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {THEMES_GALLERY_FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            const contentId = `theme-faq-content-${faq.id}`;
            const headerId = `theme-faq-header-${faq.id}`;

            return (
              <ScrollReveal key={faq.id} delay={index * 50}>
                <div className="rounded-xl border border-border bg-card transition-all duration-200 overflow-hidden shadow-xs hover:border-border/80">
                  <h3>
                    <button
                      id={headerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-foreground text-sm sm:text-base hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <span>{faq.question[locale] || faq.question.en}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-muted-foreground shrink-0 transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40"
                    >
                      <p className="!mb-0">{faq.answer[locale] || faq.answer.en}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

