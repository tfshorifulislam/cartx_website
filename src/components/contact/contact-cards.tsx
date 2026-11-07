"use client";

import React from "react";
import { Handshake, LifeBuoy, Smartphone, Mail, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContactCardsProps {
  onSelectCategory?: (category: string) => void;
  className?: string;
}

export function ContactCards({ onSelectCategory, className }: ContactCardsProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const lenis = useLenis();

  const cards = [
    {
      id: "Pricing & Sales",
      icon: Handshake,
      titleEn: "Sales & Partnerships",
      titleBn: "বিক্রয় ও অংশীদারিত্ব",
      descEn: "For pricing questions, onboarding and business partnerships.",
      descBn: "প্রাইসিং সম্পর্কিত প্রশ্ন, অনবোর্ডিং এবং প্রাতিষ্ঠানিক পার্টনারশিপের জন্য।",
      actionEn: "Inquire About Sales",
      actionBn: "সেলস সম্পর্কে জানুন",
    },
    {
      id: "Technical Support",
      icon: LifeBuoy,
      titleEn: "Technical Support",
      titleBn: "কারিগরি সহায়তা",
      descEn: "For existing merchant account and product-related issues.",
      descBn: "চলমান মার্চেন্ট অ্যাকাউন্ট, পেমেন্ট বা টেকনিক্যাল সমস্যার সহায়তার জন্য।",
      actionEn: "Get Support",
      actionBn: "সহায়তা চান",
    },
    {
      id: "White-label Mobile App",
      icon: Smartphone,
      titleEn: "White-label Apps",
      titleBn: "হোয়াইট-লেবেল অ্যাপস",
      descEn: "For branded mobile app requirements and publishing consultations.",
      descBn: "নিজস্ব ব্র্যান্ডের আইওএস ও অ্যান্ড্রয়েড শপিং অ্যাপ ও পাবলিশিং পরামর্শের জন্য।",
      actionEn: "Discuss Mobile App",
      actionBn: "অ্যাপ নিয়ে কথা বলুন",
    },
    {
      id: "General Inquiry",
      icon: Mail,
      titleEn: "General Inquiries",
      titleBn: "সাধারণ তথ্যানুসন্ধান",
      descEn: "For other questions about CartX and WebQ LTD.",
      descBn: "CartX প্ল্যাটফর্ম এবং WebQ LTD সম্পর্কিত যেকোনো সাধারণ প্রশ্নের জন্য।",
      actionEn: "Ask a Question",
      actionBn: "প্রশ্ন করুন",
    },
  ];

  const handleCardClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const formEl =
      document.getElementById("contact-section") ||
      document.getElementById("contact-form-section") ||
      document.getElementById("contact-form");
    if (formEl) {
      const top = formEl.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) {
        lenis.scrollTo(top, {
          duration: 0.9,
          easing: (val) => Math.min(1, 1.001 - Math.pow(2, -10 * val)),
        });
      } else {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      aria-label="Contact Channels"
      className={cn(
        "py-10 sm:py-14 border-b border-border bg-card/25 transition-colors",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal
                key={card.id}
                delay={(idx % 4) * 60}
                className="h-full"
              >
                <Card
                  onClick={() => handleCardClick(card.id)}
                  className="h-full cursor-pointer border border-border/80 bg-card p-5 sm:p-6 shadow-xs hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <CardHeader className="p-0 space-y-3">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 duration-200">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {isBn ? card.titleBn : card.titleEn}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 pt-2 flex-1">
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {isBn ? card.descBn : card.descEn}
                    </CardDescription>
                  </CardContent>

                  <div className="pt-4 mt-auto border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                    <span>{isBn ? card.actionBn : card.actionEn}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
