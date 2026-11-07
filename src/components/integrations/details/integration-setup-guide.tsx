"use client";

import React, { useState } from "react";
import { Check, Copy, HelpCircle, Terminal } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationSetupGuideProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationSetupGuide({
  integration,
  className,
}: IntegrationSetupGuideProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      aria-label="Step-by-Step Setup Guide"
      className={cn("py-12 sm:py-16 border-b border-border bg-muted/20", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "কনফিগারেশন নির্দেশিকা" : "Configuration Walkthrough"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "কনফিগারেশন গাইড" : "Configuration Steps"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "ধাপে ধাপে সংযোগ ও সেটআপ গাইড" : "Step-by-Step Setup Guide"}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              {isBn
                ? "কার্টএক্স ড্যাশবোর্ডে নিরাপদে ক্রেডেনশিয়াল যুক্ত করে কয়েক মিনিটে লাইভ চালু করার ধাপসমূহ অনুসরণ করুন।"
                : "Follow this sequential workflow to safely configure API tokens, webhook endpoints, and environment variables."}
            </p>
          </div>

          {/* Steps Timeline / Cards */}
          <div className="space-y-6">
            {integration.setupSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-primary/40"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                  {/* Step Number Badge */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-sm shadow-sm">
                    {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
                  </div>

                  {/* Step Body */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {step.title[isBn ? "bn" : "en"]}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description[isBn ? "bn" : "en"]}
                    </p>

                    {/* Code Snippet / Config Box if available */}
                    {step.codeSnippet && (
                      <div className="mt-4 rounded-xl border border-border bg-muted/60 p-3 sm:p-4 font-mono text-xs text-foreground overflow-x-auto relative group">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50 text-[11px] text-muted-foreground font-sans">
                          <span className="flex items-center gap-1.5 font-medium">
                            <Terminal className="h-3.5 w-3.5 text-primary" />
                            {isBn ? "কনফিগারেশন প্যারামিটার" : "Configuration Example"}
                          </span>
                          <button
                            onClick={() => handleCopy(step.codeSnippet!, idx)}
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors p-1 rounded"
                            aria-label="Copy snippet"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-emerald-500" />
                                <span className="text-emerald-500 text-[10px]">{isBn ? "কপি হয়েছে" : "Copied"}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" />
                                <span className="text-[10px]">{isBn ? "কপি করুন" : "Copy"}</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="text-xs text-foreground/90 leading-relaxed whitespace-pre overflow-x-auto">
                          {step.codeSnippet}
                        </pre>
                      </div>
                    )}

                    {/* Tip Banner */}
                    {step.tip && (
                      <div className="mt-3 flex items-start gap-2.5 rounded-lg bg-primary/5 border border-primary/15 p-3 text-xs text-primary/90">
                        <HelpCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <div>
                          <span className="font-semibold">{isBn ? "পরামর্শ: " : "Pro Tip: "}</span>
                          <span>{step.tip[isBn ? "bn" : "en"]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

