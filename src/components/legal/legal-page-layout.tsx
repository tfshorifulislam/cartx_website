"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  ShieldAlert,
  Clock,
  Mail,
  List,
  ChevronDown,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface LegalSection {
  id: string;
  titleEn: string;
  titleBn: string;
  contentEn: string[];
  contentBn: string[];
}

export interface LegalPageProps {
  titleEn: string;
  titleBn: string;
  lastUpdated: string;
  summaryEn: string;
  summaryBn: string;
  sections: LegalSection[];
  status?: "draft" | "review" | "approved";
}

const RELATED_POLICIES = [
  { href: "/privacy-policy", titleEn: "Privacy Policy", titleBn: "গোপনীয়তা নীতি" },
  { href: "/terms", titleEn: "Terms of Service", titleBn: "ব্যবহারের শর্তাবলী" },
  { href: "/refund-policy", titleEn: "Refund & Cancellation", titleBn: "রিফান্ড ও বাতিলকরণ" },
  { href: "/cookie-policy", titleEn: "Cookie Policy", titleBn: "কুকি পলিসি" },
  { href: "/acceptable-use", titleEn: "Acceptable Use Policy", titleBn: "গ্রহণযোগ্য ব্যবহারের নীতিমালা" },
];

export function LegalPageLayout({
  titleEn,
  titleBn,
  lastUpdated,
  summaryEn,
  summaryBn,
  sections,
  status = "draft",
}: LegalPageProps) {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const isBn = locale === "bn";
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Header */}
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

      {/* Main Content Layout with Sticky Sidebar on Desktop */}
      <section className="py-12 sm:py-16 bg-background transition-colors border-t border-border/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          {/* Mobile Collapsible Table of Contents */}
          <div className="lg:hidden mb-8">
            <button
              type="button"
              onClick={() => setMobileTocOpen((prev) => !prev)}
              aria-expanded={mobileTocOpen}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-card text-xs font-bold text-foreground cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <List className="h-4 w-4 text-primary" />
                <span>{isBn ? "বিষয়বস্তুর সূচিপত্র" : "Table of Contents"}</span>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  mobileTocOpen && "rotate-180"
                )}
              />
            </button>

            {mobileTocOpen && (
              <div className="mt-2 p-3 rounded-xl border border-border bg-card shadow-xs space-y-1 text-xs">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className="block p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                  >
                    {isBn ? section.titleBn : section.titleEn}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Desktop Sticky Table of Contents (Spans 4 columns) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border/60">
                  <List className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {isBn ? "বিষয়বস্তু সূচি" : "Contents"}
                  </span>
                </div>
                <nav className="space-y-1 text-xs max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors leading-snug"
                    >
                      {isBn ? section.titleBn : section.titleEn}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Policies Widget in Sidebar */}
              <div className="mt-5 rounded-2xl border border-border/60 bg-muted/20 p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                  {isBn ? "সংশ্লিষ্ট নীতিমালা" : "Related Policies"}
                </span>
                <ul className="space-y-2 text-xs">
                  {RELATED_POLICIES.filter((p) => p.href !== pathname).map((policy) => (
                    <li key={policy.href}>
                      <Link
                        href={policy.href}
                        className="text-foreground/80 hover:text-primary flex items-center gap-1.5 transition-colors"
                      >
                        <FileText className="h-3 w-3 text-muted-foreground shrink-0" />
                        <span>{isBn ? policy.titleBn : policy.titleEn}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Legal Content (Spans 8 columns) */}
            <main className="lg:col-span-8 space-y-8">
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

              {/* Legal & Compliance Review Notice */}
              <ScrollReveal delay={100}>
                <div className="rounded-2xl border border-warning/30 bg-warning/[0.04] p-6 sm:p-7 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-warning shrink-0" />
                    <span>
                      {isBn ? "আইনগত যাচাই ও অনুমোদন সংক্রান্ত তথ্য" : "Legal Review & Approval Requirement"}
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isBn
                      ? "এই নথির সমস্ত ধারা ও অনুচ্ছেদ কার্টএক্স প্ল্যাটফর্মের প্রস্তাবিত নীতি কাঠামোর ওপর ভিত্তি করে প্রস্তুতকৃত। প্রযোজ্য এখতিয়ার, স্থানীয় আইন এবং কমার্স মডেল অনুসারে যেকোনো আনুষ্ঠানিক প্রকাশের পূর্বে আইন ও কমপ্লায়েন্স বিশেষজ্ঞদের দ্বারা যাচাই করা প্রয়োজন।"
                      : "The contents of this document represent the architectural operating policy framework for CartX. Final binding legal effect requires formal review and ratification by qualified legal counsel in the governing jurisdiction prior to commercial deployment."}
                  </p>
                </div>
              </ScrollReveal>

              {/* Questions Contact Box */}
              <ScrollReveal delay={150}>
                <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {isBn ? "কোনো আইনি বা পলিসি প্রশ্ন আছে?" : "Questions About Our Terms or Policies?"}
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
            </main>
          </div>
        </div>
      </section>
    </article>
  );
}
