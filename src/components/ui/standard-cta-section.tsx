"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export const STANDARD_CTA_PRIMARY_BUTTON_CLASS =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-lg bg-primary hover:bg-primary-hover hover:-translate-y-0.5 text-primary-foreground shadow-md transition-all duration-200 cursor-pointer";

export const STANDARD_CTA_SECONDARY_BUTTON_CLASS =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:-translate-y-0.5 text-slate-100 hover:text-white transition-all duration-200 cursor-pointer";

export interface StandardCTAButtonConfig {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  text: string;
  icon?: React.ComponentType<{ className?: string }>;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
}

export interface StandardCTABadgeConfig {
  icon?: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface StandardCTATrustItem {
  icon?: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface StandardCTASectionProps {
  ariaLabel?: string;
  className?: string;
  badge?: StandardCTABadgeConfig;
  titlePlain: React.ReactNode;
  titleHighlight: React.ReactNode;
  description: React.ReactNode;
  primaryButton?: StandardCTAButtonConfig;
  secondaryButton?: StandardCTAButtonConfig;
  actions?: React.ReactNode;
  trustNote?: React.ReactNode;
  trustItems?: StandardCTATrustItem[];
  children?: React.ReactNode;
}

export function StandardCTASection({
  ariaLabel = "Call to Action",
  className,
  badge,
  titlePlain,
  titleHighlight,
  description,
  primaryButton,
  secondaryButton,
  actions,
  trustNote,
  trustItems,
  children,
}: StandardCTASectionProps) {
  const renderButton = (btn?: StandardCTAButtonConfig, isPrimary = true) => {
    if (!btn) return null;

    const baseClass = isPrimary
      ? STANDARD_CTA_PRIMARY_BUTTON_CLASS
      : STANDARD_CTA_SECONDARY_BUTTON_CLASS;
    const finalClass = cn(baseClass, btn.className);
    const IconComponent = btn.icon;

    const content = (
      <>
        {IconComponent && <IconComponent className="size-4 shrink-0" />}
        <span>{btn.text}</span>
        {btn.showArrow && <ArrowRight className="size-4 shrink-0" />}
      </>
    );

    if (btn.href) {
      if (btn.external) {
        return (
          <a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={btn.onClick}
            className={finalClass}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={btn.href} onClick={btn.onClick} className={finalClass}>
          {content}
        </Link>
      );
    }

    return (
      <button type="button" onClick={btn.onClick} className={finalClass}>
        {content}
      </button>
    );
  };

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "relative section-padding overflow-hidden bg-slate-950 text-slate-100 transition-colors border-t border-border",
        className
      )}
    >
      {/* ── Subtle Background Radial Glow (Restrained & SaaS-Aligned) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 10%, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow Pill */}
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300 mb-4 select-none">
                {badge.icon && (
                  <badge.icon className="size-3 text-secondary-accent shrink-0" />
                )}
                <span>{badge.text}</span>
              </div>
            )}

            {/* Heading with Brand Gradient Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              <span className="block text-white">{titlePlain}</span>
              <span className="block brand-gradient-text">{titleHighlight}</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {description}
            </p>

            {/* Action Buttons */}
            {actions ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6">
                {actions}
              </div>
            ) : primaryButton || secondaryButton ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-6">
                {renderButton(primaryButton, true)}
                {renderButton(secondaryButton, false)}
              </div>
            ) : null}

            {/* Reassuring Factual Note */}
            {trustNote && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="size-3.5 text-secondary-accent shrink-0" />
                <span>{trustNote}</span>
              </div>
            )}

            {/* Micro Trust Strip / Guarantees */}
            {trustItems && trustItems.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 pt-5 border-t border-slate-800/80">
                {trustItems.map((item, idx) => {
                  const ItemIcon = item.icon || ShieldCheck;
                  return (
                    <div key={idx} className="inline-flex items-center gap-1.5">
                      <ItemIcon className="size-3.5 text-secondary-accent shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Additional custom children (e.g. related links, schedules) */}
            {children}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
