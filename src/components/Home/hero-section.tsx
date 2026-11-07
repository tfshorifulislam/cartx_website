"use client";

import { Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";
import { HeroDashboardMockup } from "./hero-dashboard-mockup";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="hero-bg relative overflow-hidden transition-colors py-12">
      {/* ── Decorative background shapes ── */}

      {/* Large soft radial in the top-right — anchors the mockup side */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Main content (uses centralized .hero-padding token) ── */}
      <div className="container relative hero-padding">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* ── Left column: Text + CTAs ── */}
          <ScrollReveal
            direction="up"
            delay={0}
            className="flex-1 max-w-xl text-center lg:text-left"
          >
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4">
              <Layers className="size-3 text-secondary-accent" />
              <span>{t("home.eyebrow")}</span>
            </div>

            {/* H1 */}
            <h1 className="text-balance mb-3! sm:mb-3.5!">
              <span className="block text-foreground">{t("home.heroTitlePlain")}</span>
              <span className="block brand-gradient-text">
                {t("home.heroTitleHighlight")}
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-lg mx-auto lg:mx-0 !mb-4 sm:!mb-5">
              {t("home.heroDescription")}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              <CTAButton
                action="startStore"
                locale={locale}
                size="lg"
                showArrow
                className="px-6 py-2.5 text-xs sm:text-sm rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              />
              <CTAButton
                action="exploreFeatures"
                locale={locale}
                size="lg"
                variant="outline"
                className="px-6 py-2.5 text-xs sm:text-sm rounded-lg hover:-translate-y-0.5 transition-all duration-200"
              />
            </div>

            {/* Trust line */}
            <p className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-muted-foreground mt-3.5 sm:mt-4 !mb-0">
              <CheckCircle2 className="size-3.5 text-success shrink-0" />
              <span>{t("home.trustLine")}</span>
            </p>
          </ScrollReveal>

          {/* ── Right column: Product visual ── */}
          <ScrollReveal
            direction="up"
            delay={150}
            className="flex-1 w-full max-w-xl lg:max-w-none relative"
          >
            {/* Soft elevated glow behind the mockup */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.04] blur-2xl" />
            <div className="relative group transition-all duration-300 hover:-translate-y-1">
              <HeroDashboardMockup />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
