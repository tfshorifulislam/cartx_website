"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const guarantees = [
    { en: "No credit card required to start", bn: "শুরু করতে কোনো ক্রেডিট কার্ড প্রয়োজন নেই" },
    { en: "0% platform transaction commission", bn: "০% প্ল্যাটফর্ম লেনদেন কমিশন" },
    { en: "Free SSL and subdomain included", bn: "ফ্রি এসএসএল এবং সাবডোমেইন অন্তর্ভুক্ত" },
  ];

  return (
    <section
      aria-label="Ready to Explore CartX"
      className={cn("py-16 sm:py-24 bg-background relative overflow-hidden transition-colors", className)}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal>
          <Card className="rounded-3xl border border-border bg-card/60 backdrop-blur-xs p-8 sm:p-14 text-center shadow-card relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
              <span className="block text-foreground">
                {isBn ? "অনলাইন স্টোর শুরু করতে প্রস্তুত?" : "Ready to Start Building?"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "কার্টএক্স প্ল্যাটফর্ম এক্সপ্লোর করুন" : "Explore the CartX Platform"}
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {isBn
                ? "শত শত বাংলাদেশি উদ্যোক্তার সাথে যোগ দিন যারা প্রতিদিন তাদের অনলাইন স্টোর পরিচালনায় CartX ব্যবহার করছেন।"
                : "Launch your storefront today or explore our transparent subscription plans designed for businesses of every scale."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <Link
                href="/start"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "px-7 py-3 text-sm font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                )}
              >
                <span>{isBn ? "আপনার স্টোর শুরু করুন" : "Start Your Store"}</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-7 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all cursor-pointer"
                )}
              >
                <span>{isBn ? "প্রাইসিং প্ল্যান দেখুন" : "View Pricing"}</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-border/70 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs text-muted-foreground">
              {guarantees.map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-success shrink-0" />
                  <span>{isBn ? item.bn : item.en}</span>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
