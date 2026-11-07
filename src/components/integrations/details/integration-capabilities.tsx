"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationCapabilitiesProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationCapabilities({
  integration,
  className,
}: IntegrationCapabilitiesProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Supported Capabilities"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "সক্ষমতা তালিকা" : "Verified Features"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "সিস্টেম সক্ষমতা" : "Technical Scope"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "সমর্থিত কারিগরি সক্ষমতা ও ফিচারসমূহ" : "Confirmed Capabilities"}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              {isBn
                ? "কার্টএক্স এবং প্রোভাইডারের মধ্যে সরাসরি যাচাইকৃত ও পরীক্ষিত কারিগরি ফিচারসমূহের বিস্তারিত তালিকা।"
                : "A verified inventory of functional capabilities actively supported through this integration bridge."}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {integration.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {isBn ? "সমর্থিত" : "Supported"}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground mb-1.5">
                    {cap.title[isBn ? "bn" : "en"]}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cap.description[isBn ? "bn" : "en"]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
