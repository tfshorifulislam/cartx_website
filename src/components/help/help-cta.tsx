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
      className={cn("py-16 sm:py-24 border-t border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            <span className="block text-foreground">
              {isBn ? "আমরা আপনাকে সহায়তা করতে প্রস্তুত" : "We're Here to Help"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "এখনও আপনার প্রশ্নের উত্তর খুঁজে পাননি?" : "Still Have Questions?"}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            {isBn
              ? "আমাদের কাস্টমার সাপোর্ট টিম আপনার যেকোনো কারিগরি ও ব্যবসায়িক প্রশ্নের উত্তর দিতে প্রস্তুত।"
              : "Our dedicated support engineers in Dhaka are available to assist you with onboarding, payment integrations, or domain setup."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>{isBn ? "সাপোর্টে যোগাযোগ করুন" : "Contact Support"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:support@cartx.store"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>support@cartx.store</span>
            </a>
          </div>

          <div className="pt-6 border-t border-border/70 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>{isBn ? "শনিবার - বৃহস্পতিবার: সকাল ৯টা - সন্ধ্যা ৬টা" : "Sat - Thu: 9:00 AM - 6:00 PM"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

