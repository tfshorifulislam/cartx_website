"use client";

import React from "react";
import { ArrowDown, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface ContactHeroProps {
  onScrollToForm?: () => void;
  className?: string;
}

export function ContactHero({ onScrollToForm, className }: ContactHeroProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const handleScroll = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById("contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      aria-label="Contact Us Hero"
      className={cn(
        "hero-bg relative overflow-hidden transition-colors",
        className
      )}
    >
      {/* ── Decorative background shapes (Matches Home Hero) ── */}

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
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
            <Mail className="size-3 text-secondary-accent shrink-0" />
            <span>{isBn ? "কার্টএক্স যোগাযোগ" : "CONTACT CARTX"}</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-balance mb-3! sm:mb-3.5!">
            <span className="block text-foreground">
              {isBn ? "আপনার অনলাইন ব্যবসা" : "Let's Talk About"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "নিয়ে কথা বলুন।" : "Your Online Business."}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto !mb-6 sm:!mb-7 text-balance">
            {isBn
              ? "CartX, প্রাইসিং, পেমেন্ট ও কুরিয়ার ইন্টিগ্রেশন বা হোয়াইট-লেবেল মোবাইল অ্যাপ সম্পর্কে কোনো প্রশ্ন আছে? আমাদের বার্তা পাঠান এবং আমাদের টিম আপনার সাথে যোগাযোগ করবে।"
              : "Have questions about CartX, pricing, integrations or white-label mobile apps? Send us a message and our team will follow up through the contact details you provide."}
          </p>

          {/* Primary CTA Button */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="size-4" />
              <span>{isBn ? "বার্তা পাঠান" : "Send a Message"}</span>
              <ArrowDown className="size-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

