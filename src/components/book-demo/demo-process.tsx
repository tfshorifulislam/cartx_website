"use client";

import React from "react";
import { ClipboardList, SearchCheck, MessageSquare, Video, CalendarClock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function DemoProcess({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      titleEn: "1. Share Your Requirements",
      titleBn: "১. চাহিদা ও তথ্যাদি শেয়ার করুন",
      descEn:
        "Tell us about your retail business, order volume, and the specific capabilities you want to explore.",
      descBn:
        "আপনার রিটেইল মডেল, অর্ডার ভলিউম এবং যেসব ফিচার দেখতে চান তা ফর্মের মাধ্যমে পূরণ করুন।",
    },
    {
      num: "02",
      icon: SearchCheck,
      titleEn: "2. Inquiry Review",
      titleBn: "২. প্রয়োজনীয়তা পর্যালোচনা",
      descEn:
        "Our product specialists review your store parameters and prepare relevant architectural workflows.",
      descBn:
        "আমাদের টিম আপনার ব্যবসার চাহিদা বিশ্লেষণ করে প্রাসঙ্গিক প্রোডাক্ট ও থিম ডেমো প্রস্তুত করবে।",
    },
    {
      num: "03",
      icon: MessageSquare,
      titleEn: "3. Follow-up",
      titleBn: "৩. ফলো-আপ ও সময় নির্ধারণ",
      descEn:
        "We reach out through your preferred contact method (Email or Phone) to coordinate a convenient time.",
      descBn:
        "আপনার পছন্দের যোগাযোগ মাধ্যমে (ইমেইল বা ফোন) টিম আপনার সুবিধাজনক সময়ে ডেমোর সময়সূচী সমন্বয় করবে।",
    },
    {
      num: "04",
      icon: Video,
      titleEn: "4. Demo or Consultation",
      titleBn: "৪. ডেমো বা কনসালটেশন",
      descEn:
        "A focused, screen-shared walkthrough addressing your store requirements, integrations, and rollout.",
      descBn:
        "স্ক্রিন শেয়ারের মাধ্যমে লাইভ ডেমো এবং আপনার সমস্ত প্রশ্নের সরাসরি উত্তর ও পরবর্তী দিকনির্দেশনা।",
    },
  ];

  return (
    <section
      aria-label="What Happens Next Process"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/20 transition-colors", className)}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section 04: What Happens Next */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
            {isBn ? "পরবর্তী ধাপসমূহ" : "WHAT HAPPENS NEXT"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "অনুরোধের পরবর্তী পদক্ষেপ" : "How Our Process Works"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "স্বচ্ছ ও সুসংগঠিত প্রক্রিয়া"
                : "A Structured, Transparent Review"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "কোনো জটিলতা ছাড়া সরাসরি আমাদের প্রযুক্তি ও ব্যবসায়িক বিশেষজ্ঞদের সাথে আলোচনার সুশৃঙ্খল ধাপ।"
              : "We respect your time. Here is exactly what to expect once your demo request is received."}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <ScrollReveal
                key={st.num}
                delay={(idx % 4) * 70}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                      STEP {st.num}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {isBn ? st.titleBn : st.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {isBn ? st.descBn : st.descEn}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Section 05: Scheduling Workflow Note */}
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CalendarClock className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="font-bold text-foreground">
                {isBn ? "ক্যালেন্ডার ও শিডিউলিং সংক্রান্ত তথ্য" : "Direct Scheduling & Time Coordination"}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {isBn
                  ? "স্বচ্ছতা রক্ষার স্বার্থে আমরা কোনো কৃত্রিম বা প্রি-জেনারেটেড ক্যালেন্ডার স্লট প্রদর্শন করি না। আপনার ফর্মটি সফলভাবে জমা হওয়ার পর আমাদের টিম আপনার চাহিদা পর্যালোচনা করবে এবং আপনার সুবিধাজনক সময়ে গুগল মিট বা সরাসরি কলের মাধ্যমে সেশন সমন্বয় করতে আপনার সাথে যোগাযোগ করবে।"
                  : "To ensure real-time coordination, we do not present simulated calendar slots or automated fictional times. After your submission is received and reviewed, our product team contacts you directly to coordinate a meeting time that fits your exact operational schedule."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
