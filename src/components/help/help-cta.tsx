"use client";

import React from "react";
import Link from "next/link";
import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function HelpCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      aria-label="Help Center Call to Action"
      className={cn("py-12 sm:py-16 md:py-20 border-t border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-12 text-center shadow-xs relative overflow-hidden">
          <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Mail className="size-5 sm:size-6" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-2 sm:mb-3 leading-tight sm:leading-snug">
            <span className="block text-foreground">
              {isBn ? "আমরা আপনাকে সহায়তা করতে প্রস্তুত" : "We're Here to Help"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "এখনও আপনার প্রশ্নের উত্তর খুঁজে পাননি?" : "Still Have Questions?"}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed text-balance">
            {isBn
              ? "আমাদের কাস্টমার সাপোর্ট টিম আপনার যেকোনো কারিগরি ও ব্যবসায়িক প্রশ্নের উত্তর দিতে প্রস্তুত।"
              : "Our dedicated support engineers in Dhaka are available to assist you with onboarding, payment integrations, or domain setup."}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>{isBn ? "সাপোর্টে যোগাযোগ করুন" : "Contact Support"}</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <a
              href="mailto:support@cartx.store"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 hover:border-border/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="size-3.5 text-primary" />
              <span>support@cartx.store</span>
            </a>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground text-center">
            <div className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary shrink-0" />
              <span>{isBn ? "শনিবার - বৃহস্পতিবার: সকাল ৯টা - সন্ধ্যা ৬টা" : "Sat - Thu: 9:00 AM - 6:00 PM"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>{isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

