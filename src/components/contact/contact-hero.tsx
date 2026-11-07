"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Clock, Headphones, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactHeroProps {
  onScrollToForm?: () => void;
  className?: string;
}

export function ContactHero({ onScrollToForm, className }: ContactHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onScrollToForm) {
      onScrollToForm();
      return;
    }
    const target =
      document.getElementById("contact-section") ||
      document.getElementById("contact-form-section") ||
      document.getElementById("contact-form");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) {
        lenis.scrollTo(top, {
          duration: 1.0,
          easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
        });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.replaceState(null, "", "#contact-section");
    }
  };

  const trustHighlights = [
    {
      icon: Clock,
      label: isBn ? "দ্রুত ইমেইল রেসপন্স" : "Prompt Email Response",
    },
    {
      icon: Headphones,
      label: isBn ? "ডেডিকেটেড মার্চেন্ট সাপোর্ট" : "Dedicated Merchant Support",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "সুরক্ষিত ও এনক্রিপ্টেড ডেটা" : "Encrypted Inquiry Vault",
    },
  ];

  return (
    <section
      aria-label="Contact Us Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home & Integrations Hero) ── */}

      {/* Large soft radial in the top-right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Small accent orb bottom-left for balance */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-[0.035]"
        style={{
          background:
            "radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid-dot pattern overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content (uses centralized .hero-padding token) ── */}
      <div className="container relative hero-padding">
        <ScrollReveal
          direction="up"
          delay={0}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
            <Mail className="size-3 text-secondary-accent shrink-0" />
            <span>
              {isBn ? "কার্টএক্স যোগাযোগ ও সহায়তা" : "CARTX SUPPORT & INQUIRIES"}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "আপনার অনলাইন ব্যবসা নিয়ে" : "Let's Connect & Grow"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "কথা বলুন আমাদের সাথে।" : "Your Online Business."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-7 text-balance">
            {isBn
              ? "CartX, প্রাইসিং, পেমেন্ট ও কুরিয়ার ইন্টিগ্রেশন বা হোয়াইট-লেবেল মোবাইল অ্যাপ সম্পর্কে কোনো প্রশ্ন আছে? আমাদের বার্তা পাঠান এবং আমাদের টিম আপনার সাথে যোগাযোগ করবে।"
              : "Have questions about CartX, pricing, courier integrations or white-label mobile apps? Send us a message and our team will follow up through the contact details you provide."}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
            <a
              href="#contact-section"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="size-3.5" />
              <span>{isBn ? "বার্তা পাঠান" : "Send a Message"}</span>
              <ArrowDown className="size-3.5" />
            </a>
            <Link
              href="/help"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              <span>{isBn ? "সহায়তা কেন্দ্র দেখুন" : "Visit Help Center"}</span>
              <ArrowRight className="size-3.5 text-muted-foreground" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-5 border-t border-border/50 text-xs text-muted-foreground">
            {trustHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <div className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <IconComponent className="size-2.5" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
