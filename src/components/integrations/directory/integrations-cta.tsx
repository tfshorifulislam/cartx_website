"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationsCTAProps {
  className?: string;
}

export function IntegrationsCTA({ className }: IntegrationsCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Integrations Call to Action"
      className={cn("py-16 sm:py-24 bg-background", className)}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary-accent/10 p-8 sm:p-12 md:p-16 text-center shadow-lg">
            {/* Ambient background blur */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-semibold mb-6">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>
                  {isBn ? "আপনার প্রয়োজনীয় সার্ভিস খুঁজছেন?" : "Looking For a Custom Integration?"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              <span className="block text-foreground">
                {isBn ? "বিশেষ কাস্টম প্রয়োজন?" : "Have Custom Integration Needs?"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আপনার কাস্টম ইআরপি বা সিস্টেম যুক্ত করতে চান?" : "Need a Specific Gateway or Custom ERP Bridge?"}
              </span>
            </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                {isBn
                  ? "আমাদের এন্টারপ্রাইজ টিম আপনাকে কাস্টম ওয়েবহুক, প্রাইভেট এপিআই এবং বিশেষায়িত সিস্টেম ইন্টিগ্রেশনে সহায়তা করার জন্য প্রস্তুত।"
                  : "CartX Enterprise provides custom webhooks, private API connectors, and bespoke integration support tailored to your unique requirements."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <span>{isBn ? "টিমের সাথে যোগাযোগ করুন" : "Talk to Solutions Team"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 transition-all w-full sm:w-auto"
                >
                  <span>{isBn ? "প্রাইসিং ও প্ল্যান দেখুন" : "View Pricing & Plans"}</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
