"use client";

import React, { useState } from "react";
import { ContactHero } from "./contact-hero";
import { ContactCards } from "./contact-cards";
import { ContactForm } from "./contact-form";
import { BusinessInfo } from "./business-info";
import { ContactFAQ } from "./contact-faq";
import { ContactCTA } from "./contact-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/lib/i18n/language-context";
import { MessageSquare } from "lucide-react";

export function ContactView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [selectedCategory, setSelectedCategory] = useState<string>("General Inquiry");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 01: Hero */}
      <ContactHero />

      {/* Section 02: Contact Channels / Categories */}
      <ContactCards onSelectCategory={handleSelectCategory} />

      {/* Section 03: Main Contact Section (Desktop: Two-Column Layout) */}
      <section
        id="contact-section"
        aria-label="Contact and Inquiry Submission"
        className="py-12 sm:py-16 md:py-20 border-b border-border bg-background transition-colors"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3 select-none">
              <MessageSquare className="size-3 text-secondary-accent shrink-0" />
              <span>{isBn ? "যোগাযোগের সহজ মাধ্যম" : "GET IN TOUCH"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "আমাদের একটি বার্তা পাঠান" : "Send Us a Message"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "আমরা সর্বদা আপনার পাশে আছি" : "We're Here to Help You Grow"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isBn
                ? "আপনার ব্যবসার প্রয়োজনীয়তা জানান, এবং আমাদের ঢাকার টিম আপনার প্রদত্ত যোগাযোগের মাধ্যমে দ্রুত উত্তর দেবে।"
                : "Tell us how we can help, and our Dhaka-based team will follow up promptly through your preferred contact channel."}
            </p>
          </ScrollReveal>

          {/* Two-Column Responsive Layout on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Information & Corporate Cards (5 cols on Desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <BusinessInfo layout="sidebar" />
            </div>

            {/* Right Column: Contact Form (7 cols on Desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm initialCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: FAQ Preview */}
      <ContactFAQ />

      {/* Section 05: Final CTA */}
      <ContactCTA />
    </article>
  );
}
