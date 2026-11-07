"use client";

import React from "react";
import { KeyRound, Workflow, Wand2, Landmark, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhyCartX({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const pillars = [
    {
      icon: KeyRound,
      title: isBn ? "১. সম্পূর্ণ স্টোর মালিকানা" : "1. Full Store Ownership",
      subtitle: isBn ? "আপনার ডেটা, আপনার ব্র্যান্ড" : "Zero Vendor Lock-in",
      desc: isBn
        ? "মার্চেন্টরা তাদের গ্রাহক, ডোমেন, প্রোডাক্ট ক্যাটালগ এবং ব্যবসায়িক তথ্যের শতভাগ নিয়ন্ত্রণ বজায় রাখেন। কোনো অপ্রত্যাশিত ফি বা বাধ্যতামূলক সীমাবদ্ধতা নেই।"
        : "Merchants retain complete control of their customers, domain, data, and brand identity. You own your storefront, your customer relationships, and your brand equity.",
    },
    {
      icon: Workflow,
      title: isBn ? "২. সমন্বিত বিজনেস ওয়ার্কফ্লো" : "2. Connected Workflows",
      subtitle: isBn ? "একটি কেন্দ্রীয় ড্যাশবোর্ড" : "Unified Management",
      desc: isBn
        ? "অর্ডার প্রসেসিং, ইনভেন্টরি, স্থানীয় পেমেন্ট গেটওয়ে, কুরিয়ার কনসাইনমেন্ট এবং কাস্টমার রেকর্ড একটি সুসংগত ড্যাশবোর্ডে একত্রিত।"
        : "Order management, payment gateways, automated courier tracking, and customer communication live inside a single coherent administrative dashboard.",
    },
    {
      icon: Wand2,
      title: isBn ? "৩. সহজ ও কোডমুক্ত টুলস" : "3. Accessible, Code-Free Tools",
      subtitle: isBn ? "যেকোনো দলের জন্য উপযোগী" : "Designed for Everyone",
      desc: isBn
        ? "সহজ ভিজ্যুয়াল থিম কাস্টমাইজার এবং সোজা সাপটা অ্যাডমিন ইন্টারফেস। কোনো কোডিং বা প্রযুক্তিগত দক্ষতার প্রয়োজন নেই।"
        : "Intuitive visual customization, instantaneous storefront publishing, and straightforward store controls requiring zero technical or programming background.",
    },
    {
      icon: Landmark,
      title: isBn ? "৪. স্থানীয় বাজারের বাস্তবতায় তৈরি" : "4. Local-Market Focus",
      subtitle: isBn ? "বাংলাদেশি ইকমার্সের উপযোগী" : "Native Ecosystem Fit",
      desc: isBn
        ? "বিকাশ, নগদ, কার্ড গেটওয়ে এবং স্টেডফাস্ট, পাঠাও, রেডএক্স কুরিয়ারের সাথে সরাসরি ইন্টিগ্রেশন। সম্পূর্ণ স্থানীয় চাহিদার কথা মাথায় রেখে প্রস্তুত।"
        : "Native integrations with Bangladesh's premier payment providers (bKash, Nagad, cards) and top delivery networks (Steadfast, Pathao, RedX) built right in.",
    },
    {
      icon: TrendingUp,
      title: isBn ? "৫. ভবিষ্যৎমুখী স্কেলেবিলিটি" : "5. Flexible, Scalable Growth",
      subtitle: isBn ? "ক্যাম্পেইন ও ট্র্যাফিক সামলানোর প্রস্তুতি" : "Engineered for Peak Demand",
      desc: isBn
        ? "ক্লাউড আর্কিটেকচার যা পিক ক্যাম্পেইন, ফ্ল্যাশ সেল এবং হাজার হাজার একযোগে আসা অর্ডার নির্বিঘ্নে পরিচালনা করতে সক্ষম।"
        : "Modern cloud infrastructure built to absorb sudden traffic surges, high-velocity flash sales, and continuous inventory expansions without stuttering.",
    },
  ];

  return (
    <section
      id="why-cartx"
      aria-label="Why CartX"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <span>{isBn ? "কেন CartX আলাদা" : "Built Differently"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "অনলাইন ব্যবসার আস্থায়" : "Why Modern Merchants"}
              </span>
              <span className="block brand-gradient-text">
                {isBn ? "কেন ব্যবসায়ীরা CartX বেছে নেন" : "Choose CartX"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "৫টি মূল স্তম্ভ যা আমাদের পণ্য উন্নয়ন এবং প্রতিটি ফিচারের নকশাকে পথ প্রদর্শন করে।"
                : "Five architectural and operational pillars that make CartX the platform of choice for forward-thinking merchants."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                delay={idx * 70}
                className={idx === 0 ? "lg:col-span-2" : undefined}
              >
                <div
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/30 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
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
