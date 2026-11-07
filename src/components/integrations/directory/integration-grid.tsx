"use client";

import React from "react";
import { IntegrationItem, IntegrationFilterState } from "../types";
import { IntegrationCard } from "./integration-card";
import { IntegrationEmptyState } from "./integration-empty-state";
import { IntegrationSearchFilters } from "./integration-search-filters";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface IntegrationGridProps {
  integrations: IntegrationItem[];
  filters: IntegrationFilterState;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  totalCount: number;
  filteredCount: number;
}

export function IntegrationGrid({
  integrations,
  filters,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
  hasActiveFilters,
  totalCount,
  filteredCount,
}: IntegrationGridProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      id="integrations-directory"
      aria-label="Integrations Directory"
      className="py-16 sm:py-24 border-b border-border bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
              {isBn ? "ইন্টিগ্রেশন ডিরেক্টরি" : "Integrations Directory"}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "সরাসরি কানেক্ট করুন" : "Browse All Connectors"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আপনার পছন্দের সার্ভিস ও গেটওয়ে যুক্ত করুন" : "Connect Your Favorite Services & Gateways"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isBn
                ? "পেমেন্ট, কুরিয়ার, অ্যানালিটিক্স এবং এসএমএস গেটওয়েগুলো সহজেই কয়েক ক্লিকের মাধ্যমে সংযোগ করুন।"
                : "Explore our verified catalog of ready-to-use local and global e-commerce integrations."}
            </p>
          </ScrollReveal>
        </div>

        {/* Search & Filters */}
        <div className="mb-8">
          <IntegrationSearchFilters
            filters={filters}
            onSearchChange={onSearchChange}
            onCategoryChange={onCategoryChange}
            onStatusChange={onStatusChange}
            onReset={onReset}
            hasActiveFilters={hasActiveFilters}
            totalCount={totalCount}
            filteredCount={filteredCount}
          />
        </div>

        {/* Results Grid or Empty State */}
        {integrations.length === 0 ? (
          <IntegrationEmptyState onReset={onReset} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, index) => (
              <ScrollReveal
                key={item.slug}
                delay={Math.min(index * 40, 300)}
              >
                <IntegrationCard integration={item} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

