"use client";

import React from "react";
import { ShieldAlert, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface LegalContentSection {
  id: string;
  titleEn: string;
  titleBn: string;
  contentEn: string[];
  contentBn: string[];
}

export interface LegalContentProps {
  sections: LegalContentSection[];
  className?: string;
  /** Optional custom compliance review notice text */
  reviewNotice?: React.ReactNode;
  /** Optional custom contact box */
  contactBox?: React.ReactNode;
}

/**
 * LegalContent — Renders legal document sections, compliance notes, and contact blocks.
 * Handles:
 * - Structured section rendering with responsive typography and accessible anchor IDs.
 * - Consistent paragraph spacing and contrast using project design tokens.
 * - Legal review & compliance notice callout.
 * - Direct support contact card.
 */
export function LegalContent({
  sections,
  className,
  reviewNotice,
  contactBox,
}: LegalContentProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <main className={cn("space-y-8", className)}>
      {/* ── Document Sections ── */}
      {sections.map((section, idx) => (
        <ScrollReveal key={section.id} delay={Math.min(idx * 30, 250)}>
          <section
            id={section.id}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs scroll-mt-24"
          >
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">
              {isBn ? section.titleBn : section.titleEn}
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {(isBn ? section.contentBn : section.contentEn).map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* ── Legal & Compliance Review Notice ── */}
      {reviewNotice ? (
        reviewNotice
      ) : (
        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-warning/30 bg-warning/[0.04] p-6 sm:p-7 space-y-2">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-warning shrink-0" />
              <span>
                {isBn
                  ? "আইনগত যাচাই ও অনুমোদন সংক্রান্ত তথ্য"
                  : "Legal Review & Approval Requirement"}
              </span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isBn
                ? "এই নথির সমস্ত ধারা ও অনুচ্ছেদ কার্টএক্স প্ল্যাটফর্মের প্রস্তাবিত নীতি কাঠামোর ওপর ভিত্তি করে প্রস্তুতকৃত। প্রযোজ্য এখতিয়ার, স্থানীয় আইন এবং কমার্স মডেল অনুসারে যেকোনো আনুষ্ঠানিক প্রকাশের পূর্বে আইন ও কমপ্লায়েন্স বিশেষজ্ঞদের দ্বারা যাচাই করা প্রয়োজন।"
                : "The contents of this document represent the architectural operating policy framework for CartX. Final binding legal effect requires formal review and ratification by qualified legal counsel in the governing jurisdiction prior to commercial deployment."}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* ── Questions Contact Box ── */}
      {contactBox ? (
        contactBox
      ) : (
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {isBn
                  ? "কোনো আইনি বা পলিসি প্রশ্ন আছে?"
                  : "Questions About Our Terms or Policies?"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isBn
                  ? "আমাদের কমপ্লায়েন্স ও সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন।"
                  : "Contact our compliance team with questions or requests."}
              </p>
            </div>
            <a
              href="mailto:support@cartx.com"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors shrink-0"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>support@cartx.com</span>
            </a>
          </div>
        </ScrollReveal>
      )}
    </main>
  );
}
