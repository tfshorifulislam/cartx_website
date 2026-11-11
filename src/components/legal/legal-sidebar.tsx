"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, ChevronDown, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export interface LegalSectionItem {
  id: string;
  titleEn: string;
  titleBn: string;
}

export interface RelatedPolicy {
  href: string;
  titleEn: string;
  titleBn: string;
}

export const RELATED_POLICIES: RelatedPolicy[] = [
  { href: "/privacy-policy", titleEn: "Privacy Policy", titleBn: "গোপনীয়তা নীতি" },
  { href: "/terms", titleEn: "Terms of Service", titleBn: "ব্যবহারের শর্তাবলী" },
  { href: "/refund-policy", titleEn: "Refund & Cancellation", titleBn: "রিফান্ড ও বাতিলকরণ" },
  { href: "/cookie-policy", titleEn: "Cookie Policy", titleBn: "কুকি পলিসি" },
  { href: "/acceptable-use", titleEn: "Acceptable Use Policy", titleBn: "গ্রহণযোগ্য ব্যবহারের নীতিমালা" },
];

export interface LegalSidebarProps {
  sections: LegalSectionItem[];
  className?: string;
}

/**
 * LegalSidebar — Dedicated navigation component for legal pages.
 * Handles:
 * - Table of contents on-page navigation (desktop sticky & mobile collapsible).
 * - Related legal policies navigation with active page indication.
 * - Bilingual support for English and Bangla.
 */
export function LegalSidebar({ sections, className }: LegalSidebarProps) {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const isBn = locale === "bn";
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <aside className={cn("w-full", className)}>
      {/* ── Mobile Collapsible Table of Contents ── */}
      <div className="lg:hidden mb-8">
        <button
          type="button"
          onClick={() => setMobileTocOpen((prev) => !prev)}
          aria-expanded={mobileTocOpen}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-card text-xs font-bold text-foreground cursor-pointer shadow-xs"
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

      {/* ── Desktop Sticky Sidebar ── */}
      <div className="hidden lg:block sticky top-24 self-start space-y-5">
        {/* Table of Contents Box */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border/60">
            <List className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              {isBn ? "বিষয়বস্তু সূচি" : "Contents"}
            </span>
          </div>
          <nav className="space-y-1 text-xs max-h-[calc(100vh-240px)] overflow-y-auto pr-1">
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

        {/* Related Policies Navigation with Active State Indication */}
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
            {isBn ? "আইনি নীতিমালা" : "Legal Policies"}
          </span>
          <ul className="space-y-1.5 text-xs">
            {RELATED_POLICIES.map((policy) => {
              const isActive = pathname === policy.href;
              return (
                <li key={policy.href}>
                  <Link
                    href={policy.href}
                    className={cn(
                      "flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors leading-snug",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                    )}
                  >
                    <FileText
                      className={cn(
                        "h-3.5 w-3.5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    <span>{isBn ? policy.titleBn : policy.titleEn}</span>
                    {isActive && (
                      <span className="ml-auto text-[10px] font-medium text-primary uppercase tracking-wider">
                        {isBn ? "বর্তমান" : "Current"}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
