"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, CheckCircle2, Scale, RefreshCw, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function AboutPrinciples({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const principles = [
    {
      icon: ShieldCheck,
      title: isBn ? "গ্রাহকের আস্থা ও নিরাপত্তা" : "Customer Trust & Security",
      desc: isBn
        ? "আমরা কোনো শর্টকাট নিই না। ডেটা আইসোলেশন, ব্যাকআপ এবং টিএলএস এনক্রিপশন প্রতিটি স্টোরের মূল ভিত্তি।"
        : "We refuse architectural shortcuts. Strict store data isolation, automated backups, and encrypted transit protect every merchant.",
    },
    {
      icon: Scale,
      title: isBn ? "স্বচ্ছ ও সৎ মূল্য নির্ধারণ" : "Clear, Honest Pricing",
      desc: isBn
        ? "০% প্ল্যাটফর্ম লেনদেন কমিশন। কোনো লুকানো চার্জ বা অপ্রত্যাশিত ফি নেই।"
        : "0% platform commission on orders. We believe merchants should keep what they earn without unexpected percentage cuts.",
    },
    {
      icon: Cpu,
      title: isBn ? "নির্ভরযোগ্য সিস্টেম ও পারফরম্যান্স" : "Reliable Infrastructure",
      desc: isBn
        ? "লাইটওয়েট কোডবেস এবং দ্রুত পেজ লোডিং টাইম নিশ্চিত করার মাধ্যমে আমরা প্রতিটি কেনাকাটার অভিজ্ঞতাকে নির্বিঘ্ন রাখি।"
        : "Fast page load times, optimized server-side rendering, and high-concurrency resilience during sales and viral surges.",
    },
    {
      icon: RefreshCw,
      title: isBn ? "নিরবচ্ছিন্ন উদ্ভাবন ও উন্নতি" : "Continuous Improvement",
      desc: isBn
        ? "মার্চেন্টদের মতামতের ভিত্তিতে প্ল্যাটফর্মে নিয়মিত নতুন ফিচার ও সিস্টেম অপ্টিমাইজেশন রোলআউট করা হয়।"
        : "We listen closely to merchant operational workflows and release regular platform updates, integrations, and optimizations.",
    },
    {
      icon: HeartHandshake,
      title: isBn ? "উদ্যোক্তার প্রতি দায়বদ্ধতা" : "Commitment to Merchant Success",
      desc: isBn
        ? "সহজ ডকুমেন্টেশন, সার্বক্ষণিক সাপোর্ট এবং ব্যবসায়ীদের দীর্ঘমেয়াদি উন্নয়নে আমাদের পূর্ণ সমর্থন।"
        : "Accessible documentation, proactive support, and a product roadmap aligned entirely with merchant longevity.",
    },
    {
      icon: CheckCircle2,
      title: isBn ? "দায়িত্বশীল ও টেকসই প্রযুক্তি" : "Responsible Technology",
      desc: isBn
        ? "আধুনিক রিসোর্স-দক্ষ ক্লাউড প্রযুক্তি যা সর্বনিম্ন রিসোর্স অপচয় করে সর্বোত্তম কার্যক্ষমতা দেয়।"
        : "Resource-efficient cloud infrastructure designed to minimize compute waste while delivering blazing-fast storefront speed.",
    },
  ];

  return (
    <section
      id="principles"
      aria-label="Core Principles"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span>{isBn ? "আমাদের কাজের মূল ভিত্তি" : "Our Guiding Values"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "আমাদের মূল চালিকাশক্তি" : "Core Operating"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "মূলনীতি ও নীতিসমূহ" : "Principles We Stand By"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "যে আদর্শ ও মানদণ্ড আমাদের প্রতিটি সিদ্ধান্ত ও প্রযুক্তিগত নির্মাণকে পরিচালনা করে।"
                : "The engineering ethics and merchant commitments that guide every feature we release."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-border/80 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {pr.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
