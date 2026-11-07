"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function BookDemoCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Book Demo Call to Action"
      className={cn("py-20 sm:py-28 bg-background relative overflow-hidden transition-colors", className)}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal className="rounded-3xl border border-border bg-card/60 backdrop-blur-xs p-8 sm:p-14 text-center shadow-card relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            <span className="block text-foreground">
              {isBn ? "কার্টএক্স অভিজ্ঞতা নিতে প্রস্তুত?" : "Ready to See CartX in Action?"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "আপনার ব্যবসার জন্য সেরা সমাধান খুঁজুন"
                : "Let's Find the Right Fit for Your Business"}
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {isBn
              ? "CartX এক্সপ্লোর করুন অথবা আপনার চাহিদা নিয়ে বিস্তারিত কথা বলতে সরাসরি আমাদের টিমের সাথে যোগাযোগ করুন।"
              : "Explore CartX on your own or contact our team directly to discuss your custom retail requirements."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <span>{isBn ? "বিনামূল্যে স্টোর শুরু করুন" : "Start Your Store"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{isBn ? "আমাদের সাথে যোগাযোগ করুন" : "Contact Us"}</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

