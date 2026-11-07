"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationFAQProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationFAQ({ integration, className }: IntegrationFAQProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { faqs } = integration;
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id || ""]: true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      aria-label="Frequently Asked Questions"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>{isBn ? "প্রশ্নোত্তর" : "FAQ"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          <span className="block text-foreground">
            {isBn ? "সাধারণ জিজ্ঞাসা ও উত্তর" : "Frequently Asked Questions"}
          </span>
          <span className="block brand-gradient-text">
            {isBn
              ? `${integration.name} সম্পর্কিত তথ্যাবলী`
              : `About ${integration.name} Integration`}
          </span>
        </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-muted/30"
                  >
                    <span className="text-sm sm:text-base font-bold text-foreground pr-4">
                      {faq.question[isBn ? "bn" : "en"]}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                      <div className="pt-4">{faq.answer[isBn ? "bn" : "en"]}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

