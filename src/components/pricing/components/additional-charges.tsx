"use client";

import React from "react";
import { Receipt, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { AdditionalChargeItem } from "../types/pricing.types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface AdditionalChargesProps {
  charges: AdditionalChargeItem[];
  className?: string;
}

export function AdditionalCharges({ charges, className }: AdditionalChargesProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const chargedByLabels = {
    third_party: {
      text: isBn ? "তৃতীয় পক্ষ কর্তৃক চার্জকৃত" : "Billed by Third-Party Provider",
      className: "bg-muted text-muted-foreground border-border",
    },
    cartx: {
      text: isBn ? "কার্টএক্স কর্তৃক চার্জকৃত" : "Billed by CartX",
      className: "bg-primary/10 text-primary border-primary/20",
    },
    both: {
      text: isBn ? "যৌথ সমন্বয়" : "CartX & Third-Party",
      className: "bg-secondary text-secondary-foreground border-border",
    },
  };

  return (
    <section
      id="additional-charges"
      aria-label="Additional Charges and Usage Fees"
      className={cn("py-16 sm:py-20 border-b border-border bg-card/30", className)}
    >
      <div className="container mx-auto">
        {/* Eyebrow & Title with ScrollReveal */}
        <ScrollReveal direction="up" delay={0} className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Receipt className="h-3.5 w-3.5" />
            <span>{isBn ? "অতিরিক্ত চার্জ ও ফি" : "Usage & Additional Fees"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "কোন লুকানো চার্জ নেই" : "Clear & Predictable Costs"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "স্বচ্ছ অতিরিক্ত চার্জ ও তৃতীয় পক্ষের ফি"
                : "Transparent Additional Charges & Fees"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "কোনো গোপন খরচ নেই। পেমেন্ট গেটওয়ে, এসএমএস এবং এক্সট্রা স্টোরেজের সম্ভাব্য খরচসমূহ আগে থেকেই জেনে নিন।"
              : "Complete clarity on third-party payment gateway fees, carrier SMS tariffs, and scalable infrastructure add-ons."}
          </p>
        </ScrollReveal>

        {/* List of Charges with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 gap-4 mb-10 max-w-4xl mx-auto">
          {charges.map((item, idx) => {
            const badge = chargedByLabels[item.chargedBy];
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={idx * 50}
              >
                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">
                        {item.name[isBn ? "bn" : "en"]}
                      </h3>
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                          badge.className
                        )}
                      >
                        {badge.text}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description[isBn ? "bn" : "en"]}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end justify-center shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-border/60">
                    <span className="text-xs text-muted-foreground">
                      {item.basis[isBn ? "bn" : "en"]}
                    </span>
                    <span className="font-bold text-foreground text-sm font-mono mt-0.5">
                      {item.cost[isBn ? "bn" : "en"]}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* 0% CartX Platform Commission Guarantee Box with ScrollReveal */}
        <ScrollReveal
          direction="up"
          delay={150}
          className="max-w-4xl mx-auto rounded-2xl border border-success/30 bg-success/[0.04] p-5 sm:p-6 flex items-start gap-4 transition-colors"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-success/15 text-success">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              {isBn
                ? "কার্টএক্স ০% প্ল্যাটফর্ম লেনদেন ফি গ্যারান্টি"
                : "CartX 0% Platform Transaction Fee Guarantee"}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {isBn
                ? "আমরা আপনার অর্ডার বিক্রয়ের ওপর কোনো অতিরিক্ত শতাংশ বা লেনদেন ফি গ্রহণ করি না। আপনার অর্জিত সমস্ত মুনাফা সম্পূর্ণ আপনার।"
                : "CartX does not charge any cut or percentage fee on your store sales. You only pay your flat subscription and direct third-party gateway processing tariffs."}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
