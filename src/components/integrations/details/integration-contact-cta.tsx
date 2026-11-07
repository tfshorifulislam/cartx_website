"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getIntegrationBySlug } from "../integrations-data";
import { cn } from "@/lib/utils";

interface IntegrationContactCTAProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationContactCTA({
  integration,
  className,
}: IntegrationContactCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const relatedIntegrations = integration.relatedSlugs
    .map((slug) => getIntegrationBySlug(slug))
    .filter((item): item is IntegrationItem => Boolean(item));

  return (
    <section
      aria-label="Contact and Next Steps"
      className={cn("py-16 sm:py-24 bg-background", className)}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal delay={0}>
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary-accent/10 p-8 sm:p-12 md:p-16 text-center shadow-lg mb-12">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-semibold mb-6">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>
                  {isBn
                    ? `${integration.name} সেটআপে সহায়তা চান?`
                    : `Need Assistance with ${integration.name}?`}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                <span className="block text-foreground">
                  {isBn ? "সহায়তা প্রয়োজন?" : "Need Technical Assistance?"}
                </span>
                <span className="block brand-gradient-text">
                  {isBn
                    ? "আমাদের কারিগরি টিম সংযোগ প্রক্রিয়া সহজ করে দেবে"
                    : "Our Integration Engineers Are Ready to Assist"}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                {isBn
                  ? `আপনি কি ${integration.name}-এর স্যান্ডবক্স টেস্টিং বা লাইভ ক্রেডেনশিয়াল কনফিগার করতে সমস্যার সম্মুখীন হচ্ছেন? আমাদের প্রকৌশলীদের সাথে সরাসরি যোগাযোগ করুন।`
                  : `Whether validating sandbox credentials or troubleshooting live webhook signatures for ${integration.name}, our specialist support team is here to help.`}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <span>{isBn ? "সাপোর্ট টিমের সাথে যোগাযোগ করুন" : "Contact Technical Support"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/integrations"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 transition-all w-full sm:w-auto"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>{isBn ? "সকল ইন্টিগ্রেশন ডিরেক্টরি" : "All Integrations"}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Integrations */}
          {relatedIntegrations.length > 0 && (
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">
                {isBn ? "সম্পর্কিত অন্যান্য ইন্টিগ্রেশনসমূহ" : "Related Integrations"}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {relatedIntegrations.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/integrations/${rel.slug}`}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-foreground text-xs font-semibold shadow-sm transition-all hover:border-primary/50 hover:-translate-y-0.5"
                  >
                    <span>{rel.name}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
