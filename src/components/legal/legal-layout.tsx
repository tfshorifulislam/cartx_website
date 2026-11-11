"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldAlert, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { LegalSidebar } from "./legal-sidebar";
import { LegalContent } from "./legal-content";

export interface LegalSection {
  id: string;
  titleEn: string;
  titleBn: string;
  contentEn: string[];
  contentBn: string[];
}

export interface LegalLayoutProps {
  titleEn: string;
  titleBn: string;
  lastUpdated: string;
  summaryEn: string;
  summaryBn: string;
  sections: LegalSection[];
  status?: "draft" | "review" | "approved";
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * LegalLayout — Shared layout component for all CartX legal & compliance pages.
 * Integrates:
 * 1. Hero header (breadcrumb, policy status badge, title with brand gradient, summary, draft/effective date).
 * 2. Responsive 2-column grid container.
 * 3. Left column: LegalSidebar (table of contents and related policies navigation).
 * 4. Right column: LegalContent (document sections, compliance note, support box).
 */
export function LegalLayout({
  titleEn,
  titleBn,
  lastUpdated,
  summaryEn,
  summaryBn,
  sections,
  status = "draft",
  sidebar,
  children,
  className,
}: LegalLayoutProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <article className={cn("flex flex-col min-h-screen bg-background text-foreground transition-colors", className)}>
      {/* ── Hero Header ── */}
      <header className="hero-bg transition-colors">
        <div className="container relative hero-padding mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal delay={0}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-medium">{isBn ? titleBn : titleEn}</span>
            </nav>
          </ScrollReveal>

          {/* Status Badge */}
          <ScrollReveal delay={80}>
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4",
                status === "approved"
                  ? "border-success/30 bg-success/10 text-success"
                  : "border-warning/30 bg-warning/10 text-warning"
              )}
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>
                {status === "approved"
                  ? isBn
                    ? "অনুমোদিত আইনি দলিল"
                    : "Official Ratified Policy Document"
                  : isBn
                  ? "খসড়া সংস্করণ — আইনি ও ব্যবসায়িক অনুমোদনের জন্য অপেক্ষমান"
                  : "Draft Policy — Pending Formal Legal & Business Approval"}
              </span>
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={120}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
              <span className="brand-gradient-text">{isBn ? titleBn : titleEn}</span>
            </h1>
          </ScrollReveal>

          {/* Introductory Summary */}
          <ScrollReveal delay={160}>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {isBn ? summaryBn : summaryEn}
            </p>
          </ScrollReveal>

          {/* Effective Date & Transparency Note */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>
                  {isBn ? `কার্যকরী সময়কাল / খসড়া তারিখ: ${lastUpdated}` : `Working Draft Date: ${lastUpdated}`}
                </span>
              </div>
              <span className="text-border">•</span>
              <span className="italic text-muted-foreground/80">
                {isBn
                  ? "চূড়ান্ত ব্যবসায়িক ও আইনগত যাচাইকরণের পূর্বে এটি প্রাক-পর্যালোচনা দলিল হিসেবে সংরক্ষিত।"
                  : "Preserved for structured compliance scoping prior to finalized production publication."}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ── Main Content Layout (Responsive 2-Column Grid) ── */}
      <section className="py-12 sm:py-16 bg-background transition-colors border-t border-border/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar Column (Spans 4 columns on desktop) */}
            <div className="lg:col-span-4 w-full">
              {sidebar ? sidebar : <LegalSidebar sections={sections} />}
            </div>

            {/* Content Column (Spans 8 columns on desktop) */}
            <div className="lg:col-span-8 w-full">
              {children ? children : <LegalContent sections={sections} />}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

// Backward-compatibility alias
export { LegalLayout as LegalPageLayout };
