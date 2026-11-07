"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { IntegrationStatusBadge } from "../directory/integration-status-badge";
import { IntegrationIcon } from "../directory/integration-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface IntegrationDetailHeaderProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationDetailHeader({
  integration,
  className,
}: IntegrationDetailHeaderProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const planLabels = {
    starter: isBn ? "স্টার্টার" : "Starter",
    growth: isBn ? "গ্রোথ" : "Growth",
    scale: isBn ? "স্কেল" : "Scale",
  };

  return (
    <section
      aria-label="Provider Overview Header"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute -right-36 -top-36 h-[26rem] w-[26rem] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative hero-padding max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              {isBn ? "হোম" : "Home"}
            </Link>
            <span>/</span>
            <Link
              href="/integrations"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              {isBn ? "ইন্টিগ্রেশনসমূহ" : "Integrations"}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              {integration.name}
            </span>
          </nav>
        </div>

        <ScrollReveal delay={0}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left: Icon, Names, Overview */}
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl border border-border shadow-sm",
                    integration.iconBg
                  )}
                >
                  <IntegrationIcon
                    name={integration.iconName}
                    className={cn("h-8 w-8", integration.iconColor)}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {integration.categoryLabel[isBn ? "bn" : "en"]}
                    </span>
                    <IntegrationStatusBadge status={integration.status} size="sm" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                    <span className="brand-gradient-text">{integration.name}</span>
                  </h1>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium text-foreground/90 mb-3">
                {integration.tagline[isBn ? "bn" : "en"]}
              </p>

              {/* Overview paragraph */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {integration.providerOverview.overview[isBn ? "bn" : "en"]}
              </p>

              {/* Eligible Plans Badges */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                <span className="font-semibold text-foreground">
                  {isBn ? "অনুমোদিত প্ল্যানসমূহ:" : "Available on:"}
                </span>
                {integration.eligiblePlans.map((plan) => (
                  <span
                    key={plan}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted text-foreground font-medium text-xs border border-border/60"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    {planLabels[plan]}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              {integration.providerOverview.actionHref && (
                <a
                  href={integration.providerOverview.actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto"
                >
                  <span>
                    {integration.providerOverview.actionLabel?.[isBn ? "bn" : "en"] ||
                      (isBn ? "অফিসিয়াল সাইট" : "Official Website")}
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/60 transition-all w-full sm:w-auto"
              >
                <span>{isBn ? "সহায়তা প্রয়োজন?" : "Need Setup Help?"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
