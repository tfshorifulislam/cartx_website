"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { HelpArticle } from "./help-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface HelpFAQAccordionProps {
  articles: HelpArticle[];
  className?: string;
}

export function HelpFAQAccordion({ articles, className }: HelpFAQAccordionProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [openIds, setOpenIds] = useState<string[]>(
    articles.length > 0 ? [articles[0].id] : []
  );

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={cn("space-y-3", className)}>
      {articles.map((art, idx) => {
        const isOpen = openIds.includes(art.id);
        return (
          <ScrollReveal
            key={art.id}
            delay={idx * 40}
            className={cn(
              "rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-card border-primary/40 shadow-xs"
                : "bg-card/70 border-border hover:border-border/80"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(art.id)}
              aria-expanded={isOpen}
              className="w-full text-left px-4 sm:px-6 py-3.5 sm:py-4.5 flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
            >
              <div className="flex-1 pr-1 sm:pr-2">
                <span className="font-bold text-foreground text-xs sm:text-sm md:text-base block leading-snug sm:leading-normal">
                  {isBn ? art.questionBn : art.questionEn}
                </span>
                {art.capability && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-primary font-semibold mt-1">
                    <CheckCircle2 className="size-3 shrink-0" />
                    <span>{art.capability}</span>
                  </span>
                )}
              </div>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-0.5 sm:mt-0",
                  isOpen && "rotate-180 text-primary"
                )}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60">
                {isBn ? art.answerBn : art.answerEn}
              </div>
            )}
          </ScrollReveal>
        );
      })}
    </div>
  );
}

