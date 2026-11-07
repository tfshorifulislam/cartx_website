"use client";

import React, { useState } from "react";
import { Play, Pause, Video } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function HowItWorksWalkthrough({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentChapter, setCurrentChapter] = useState<number>(0);

  const chapters = [
    {
      title: isBn ? "অধ্যায় ১: স্টোরফ্রন্ট কাস্টমাইজেশন" : "Chapter 1: Storefront Customization",
      caption: isBn
        ? "সহজে থিম বাছাই করে লোগো, রঙ ও অ্যানাউন্সমেন্ট বার পরিবর্তন।"
        : "Selecting an e-commerce theme and editing brand colors in real time.",
      duration: "0:45",
      screenHighlight: isBn ? "থিম কাস্টমাইজার লাইভ প্রিভিউ" : "Theme Customizer Live Canvas",
    },
    {
      title: isBn ? "অধ্যায় ২: দ্রুত প্রোডাক্ট ও ভ্যারিয়েন্ট আপলোড" : "Chapter 2: Product & Variant Cataloging",
      caption: isBn
        ? "ছবি আপলোড, সাইজ ও কালার ভ্যারিয়েন্ট সিলেক্টর এবং মূল্য নির্ধারণ।"
        : "Uploading product shots, generating size/color matrices, and setting stock.",
      duration: "1:15",
      screenHighlight: isBn ? "প্রোডাক্ট ক্রিয়েশন ড্যাশবোর্ড" : "Product Management Matrix",
    },
    {
      title: isBn ? "অধ্যায় ৩: বিকাশ ও কুরিয়ার অটোমেশন" : "Chapter 3: Connecting Courier & bKash",
      caption: isBn
        ? "বিকাশ মার্চেন্ট এপিআই ও পাঠাও/স্টেডফাস্ট কুরিয়ার সংযোগ।"
        : "Entering API tokens to automate bKash payments and courier pickups.",
      duration: "1:50",
      screenHighlight: isBn ? "পেমেন্ট ও কুরিয়ার সেটিংস" : "Logistics & Gateway Settings",
    },
    {
      title: isBn ? "অধ্যায় ৪: অর্ডার প্রসেসিং ও ইনভয়েস" : "Chapter 4: Order Dispatch & Fulfillment",
      caption: isBn
        ? "গ্রাহকের অর্ডার গ্রহণ, স্বয়ংক্রিয় ইনভয়েস প্রিন্ট ও চালান তৈরি।"
        : "Receiving customer orders, printing PDF invoices, and dispatching parcel.",
      duration: "2:30",
      screenHighlight: isBn ? "অর্ডার ফুলফিলমেন্ট কনসোল" : "Order Fulfillment Console",
    },
  ];

  const activeChap = chapters[currentChapter];

  return (
    <section
      id="product-walkthrough"
      aria-label="Product Walkthrough Demonstration"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Video className="h-3.5 w-3.5" />
            <span>{isBn ? "ভিডিও ও ইন্টারঅ্যাক্টিভ ওয়াকথ্রু" : "Interactive Product Walkthrough"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "ভিজ্যুয়াল ওয়াকথ্রু" : "Interactive Platform Tour"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "কার্টএক্স ড্যাশবোর্ডের পূর্ণাঙ্গ ব্যবহারবিধি"
                : "Watch the Merchant Workflow in Action"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "ধাপে ধাপে দেখুন কীভাবে সহজে কয়েক ক্লিকে একটি পূর্ণাঙ্গ অনলাইন স্টোর ম্যানেজ করা যায়।"
              : "An interactive simulated walkthrough showcasing the merchant dashboard interface, product creation, and courier handovers."}
          </p>
        </ScrollReveal>

        {/* Video / Walkthrough Player Container */}
        <ScrollReveal delay={80} className="max-w-4xl mx-auto rounded-3xl border border-border bg-card shadow-card overflow-hidden">
          {/* Main Visual Player Frame */}
          <div className="relative aspect-video bg-slate-950 flex flex-col justify-between p-6 sm:p-8 text-white select-none">
            {/* Top Bar inside player */}
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="font-bold tracking-wider">{activeChap.title}</span>
              <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-[11px]">
                {activeChap.screenHighlight}
              </span>
            </div>

            {/* Center Play Graphic */}
            <div className="flex flex-col items-center justify-center my-auto text-center">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer mb-3"
                aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}
              >
                {isPlaying ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
              </button>
              <span className="text-xs font-semibold text-white/90">
                {isPlaying
                  ? (isBn ? "ওয়াকথ্রু প্লে হচ্ছে..." : "Playing Demonstration...")
                  : (isBn ? "ওয়াকথ্রু দেখতে ক্লিক করুন" : "Click to Preview Chapter")}
              </span>
            </div>

            {/* Bottom Caption Bar */}
            <div className="rounded-xl bg-black/60 backdrop-blur-md p-3 text-xs text-white/90 border border-white/10 flex items-center justify-between gap-4">
              <span className="truncate">{activeChap.caption}</span>
              <span className="font-mono text-[11px] text-white/60 shrink-0">{activeChap.duration}</span>
            </div>
          </div>

          {/* Chapter Selector Navigation Tabs */}
          <div className="p-4 sm:p-6 border-t border-border bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {chapters.map((chap, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setCurrentChapter(i);
                    setIsPlaying(true);
                  }}
                  className={cn(
                    "text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer",
                    currentChapter === i
                      ? "border-primary bg-primary/[0.05] text-primary"
                      : "border-border bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                  )}
                >
                  <span className="block text-[10px] font-mono font-bold text-primary mb-0.5">
                    0{i + 1}
                  </span>
                  <span className="block truncate">{chap.title.split(":")[1] || chap.title}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
