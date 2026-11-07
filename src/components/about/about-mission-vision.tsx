"use client";

import React from "react";
import { Target, Compass } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function AboutMissionVision({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <section
      id="mission-vision"
      aria-label="Mission and Vision"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <Target className="h-3.5 w-3.5" />
              <span>{isBn ? "আমাদের উদ্দেশ্য ও পথচলা" : "Purpose & Direction"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "আমাদের দীর্ঘমেয়াদী" : "Our Purpose &"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "লক্ষ্য ও ভবিষ্যৎ দৃষ্টিভঙ্গি" : "Mission & Vision"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "প্রযুক্তির জটিলতা দূর করে প্রতিটি ব্যবসায়ীকে নিজেদের ইকমার্স সফলতায় সক্ষম করা আমাদের মূল প্রতিজ্ঞা।"
                : "Driven by engineering excellence, clear ethics, and a deep commitment to merchant independence."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <ScrollReveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {isBn ? "আমাদের মিশন" : "Our Mission"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {isBn
                    ? "ইকমার্স প্রযুক্তিকে সহজ ও কার্যকর করা"
                    : "Democratizing E-Commerce Infrastructure"}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {isBn
                    ? "প্রতিটি আকারের ব্যবসার জন্য অপরিহার্য ইকমার্স টুলগুলোকে আরও সহজলভ্য, নির্ভরযোগ্য এবং ব্যবহারের জন্য সহজ করে তোলা, যাতে উদ্যোক্তারা কোনো প্রযুক্তিগত বাধা ছাড়াই সফলভাবে ব্যবসা পরিচালনা করতে পারেন।"
                    : "Make essential e-commerce tools more accessible, dependable, and simple to use for businesses of every scale."}
                </p>
              </div>
              <div className="pt-6 border-t border-border/60">
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "জটিল সেটআপ ও কোডিংয়ের ঝামেলা দূর করা" : "Eliminating code and technical debt"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "ন্যায্য ও স্বচ্ছ মূল্য নির্ধারণ নিশ্চিত করা" : "Fair, honest, and transparent pricing"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "স্থানীয় ব্যবসার চাহিদাকে অগ্রাধিকার দেওয়া" : "Tailored for local operational realities"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal delay={160}>
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Compass className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {isBn ? "আমাদের ভিশন" : "Our Vision"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {isBn
                    ? "স্থায়ী ও নির্ভরযোগ্য বাণিজ্যের ভবিষ্যৎ"
                    : "Building a Dependable Foundation for Growth"}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {isBn
                    ? "এমন একটি নির্ভরযোগ্য প্ল্যাটফর্ম গড়ে তোলা যা ব্যবসাগুলোকে কোনো প্রযুক্তিগত ঘর্ষণ ছাড়াই তাদের অনলাইন কার্যক্রম চালু করতে, পরিচালনা করতে এবং স্কেল করতে সাহায্য করে।"
                    : "Build a dependable platform that helps businesses launch, operate, and scale their online operations without technical friction."}
                </p>
              </div>
              <div className="pt-6 border-t border-border/60">
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "উচ্চ ট্র্যাফিক ও সেলস ক্যাম্পেইনে অবিচল নির্ভরযোগ্যতা" : "High concurrency and peak stability"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "তথ্য গোপনীয়তা ও সম্পূর্ণ স্বাধীনতা বজায় রাখা" : "Zero lock-in and total data sovereignty"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{isBn ? "প্রতিনিয়ত পণ্য আধুনিকীকরণ ও মানোন্নয়ন" : "Continuous software improvements"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
