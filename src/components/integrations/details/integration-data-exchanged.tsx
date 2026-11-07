"use client";

import React from "react";
import { ArrowUpRight, ArrowDownLeft, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationDataExchangedProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationDataExchanged({
  integration,
  className,
}: IntegrationDataExchangedProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const { dataExchanged } = integration;

  return (
    <section
      aria-label="Data Exchanged"
      className={cn("py-12 sm:py-16 border-b border-border bg-background", className)}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Eyebrow & Title */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {isBn ? "ডেটা প্রবাহ ও গোপনীয়তা" : "Data Flow & Privacy"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              <span className="block text-foreground">
                {isBn ? "ডেটা সিঙ্কিং বিবরণ" : "Data Flow Overview"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আদান-প্রদানকৃত তথ্যের স্পষ্ট বিবরণ" : "Data Exchanged Between CartX & Provider"}
              </span>
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              {dataExchanged.summary[isBn ? "bn" : "en"]}
            </p>
          </div>

          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {dataExchanged.items.map((item, idx) => {
              const isSent = item.direction === "sent";
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-xl",
                          isSent
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        )}
                      >
                        {isSent ? (
                          <ArrowUpRight className="h-5 w-5" />
                        ) : (
                          <ArrowDownLeft className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {isSent
                            ? isBn
                              ? "আউটবাউন্ড ডেটা (প্রেরিত)"
                              : "Outbound (Sent to Provider)"
                            : isBn
                            ? "ইনবাউন্ড ডেটা (গৃহীত)"
                            : "Inbound (Received from Provider)"}
                        </span>
                        <h3 className="text-sm font-bold text-foreground">
                          {item.title[isBn ? "bn" : "en"]}
                        </h3>
                      </div>
                    </div>

                    {/* Fields List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.fields.map((field, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-1 rounded bg-muted text-[11px] font-mono text-muted-foreground"
                        >
                          {field[isBn ? "bn" : "en"]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="pt-3 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
                    {item.note[isBn ? "bn" : "en"]}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Sensitive Data Handling Note */}
          <div className="rounded-2xl border border-border/80 bg-muted/40 p-5 sm:p-6 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-1">
                {isBn ? "সংবেদনশীল তথ্য সুরক্ষা নীতি" : "Sensitive Data Protection Policy"}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {dataExchanged.sensitiveDataNote[isBn ? "bn" : "en"]}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
