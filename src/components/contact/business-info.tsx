"use client";

import React from "react";
import { Building2, MapPin, Mail, Clock, Headphones } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function BusinessInfo({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const details = [
    {
      icon: Building2,
      labelEn: "Company Name",
      labelBn: "কোম্পানির নাম",
      valueEn: "WebQ LTD.",
      valueBn: "ওয়েবিকিউ লিমিটেড",
      link: null,
    },
    {
      icon: MapPin,
      labelEn: "Headquarters",
      labelBn: "প্রধান কার্যালয়",
      valueEn: "Dhaka, Bangladesh",
      valueBn: "ঢাকা, বাংলাদেশ",
      link: null,
    },
    {
      icon: Mail,
      labelEn: "Official Email",
      labelBn: "অফিসিয়াল ইমেইল",
      valueEn: "support@cartx.store",
      valueBn: "support@cartx.store",
      link: "mailto:support@cartx.store",
    },
    {
      icon: Clock,
      labelEn: "Office Hours",
      labelBn: "অফিস সময়সূচী",
      valueEn: "Saturday – Thursday: 9:00 AM – 6:00 PM (BST)",
      valueBn: "শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০ (BST)",
      link: null,
    },
    {
      icon: Headphones,
      labelEn: "Support Availability",
      labelBn: "সহায়তার প্রাপ্যতা",
      valueEn: "Business Days • Email & Ticket Assistance",
      valueBn: "কার্যদিবস • ইমেইল ও টিকেট সহায়তা",
      link: null,
    },
  ];

  return (
    <section
      aria-label="Business Information"
      className={cn("py-14 sm:py-20 border-b border-border bg-card/20 transition-colors", className)}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xs">
          <div className="mb-8 border-b border-border/70 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
              {isBn ? "প্রতিষ্ঠানের বিবরণ" : "Corporate Details"}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              <span className="block text-foreground">
                {isBn ? "অফিস ও সহায়তা ডেস্ক" : "Corporate Office"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "ব্যবসায়িক তথ্য ও প্রাপ্যতা" : "Business Information"}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border/70 bg-background/50 p-5 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5 text-muted-foreground mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {isBn ? item.labelBn : item.labelEn}
                    </span>
                  </div>

                  <div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-xs sm:text-sm font-semibold text-primary hover:underline break-all"
                      >
                        {isBn ? item.valueBn : item.valueEn}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        {isBn ? item.valueBn : item.valueEn}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

