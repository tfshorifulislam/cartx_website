"use client";

import React from "react";
import { Smartphone, Bell, Layers, RefreshCw, Palette } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WhyBrandedApp({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const benefits = [
    {
      icon: Palette,
      title: isBn
        ? "ব্র্যান্ডেড কাস্টমার অভিজ্ঞতা"
        : "Branded Customer Experience",
      desc: isBn
        ? "আপনার নিজস্ব লোগো, থিম ও রঙের সমন্বয়ে তৈরি স্বতন্ত্র নেটিভ ইন্টারফেস যা আপনার ব্র্যান্ড পরিচিতিকে অনন্য রূপ দেয়।"
        : "Present your store in a customized mobile interface built with your verified brand colors, logo typography, and theme styling.",
    },
    {
      icon: Smartphone,
      title: isBn
        ? "পণ্যে সরাসরি দ্রুত অ্যাক্সেস"
        : "Direct Access to Store Products",
      desc: isBn
        ? "ব্রাউজারে ইউআরএল লেখার প্রয়োজন ছাড়া হোমস্ক্রিন থেকে এক ট্যাপেই কাস্টমার আপনার পুরো ক্যাটালগ ব্রাউজ করতে পারেন।"
        : "Shoppers can open your full catalog from their home screens in one tap without typing URLs or searching through mobile browsers.",
    },
    {
      icon: Bell,
      title: isBn
        ? "অর্ডার-সম্পর্কিত নোটিফিকেশন"
        : "Order-Related Push Notifications",
      desc: isBn
        ? "অর্ডার গ্রহণ, প্যাকেজিং ও কুরিয়ার ডেলিভারি স্ট্যাটাস সরাসরি কাস্টমারের ফোনে পুশ নোটিফিকেশনের মাধ্যমে প্রেরণ করুন।"
        : "Send transactional updates when an order is accepted, packed, handed to courier dispatch, and delivered, where supported.",
    },
    {
      icon: Layers,
      title: isBn
        ? "নিজস্ব ব্র্যান্ড আইকন ও পরিচয়"
        : "Dedicated Brand Identity & App Icon",
      desc: isBn
        ? "অ্যাপল অ্যাপ স্টোর ও গুগল প্লে স্টোরে আপনার প্রতিষ্ঠানের অফিসিয়াল নামে অ্যাপ ও অ্যাপ আইকন প্রদর্শিত হয়।"
        : "Your verified business logo sits as a dedicated app icon on customer home screens and official app store marketplaces.",
    },
    {
      icon: RefreshCw,
      title: isBn
        ? "কার্টএক্স স্টোর অপারেশনের সাথে সমন্বয়"
        : "Seamless CartX Backend Connection",
      desc: isBn
        ? "ইনভেন্টরি, মূল্য ও অর্ডার রিয়েলটাইমে কার্টএক্স ওয়েব স্টোরের সাথে সিঙ্ক থাকে; আলাদা কোনো প্রোডাক্ট ডাটা এন্ট্রি লাগে না।"
        : "Products, stock levels, order status, and customer records remain in instant real-time sync with your primary CartX dashboard.",
    },
  ];

  return (
    <section
      id="why-branded-app"
      aria-label="Why a Branded App"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-card/30 transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
            <Smartphone className="h-3.5 w-3.5" />
            <span>
              {isBn ? "মোবাইল সুবিধার বিশ্লেষণ" : "Strategic Benefits"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn
                ? "ব্র্যান্ডের নিজস্ব পরিচিতি"
                : "Elevate Your Brand Presence"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "কেন আপনার ব্র্যান্ডের জন্য ডেডিকেটেড মোবাইল অ্যাপ?"
                : "Why Deliver a Dedicated Branded App?"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "ওয়েবসাইটের পাশাপাশি গ্রাহকদের সাথে আরও দ্রুত ও কার্যকর যোগাযোগের সুবিধা পেতে নেটিভ মোবাইল অ্যাপের ভূমিকা।"
              : "Complement your web storefront with dedicated mobile native tools that give repeat buyers a streamlined shopping channel."}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <ScrollReveal
                key={idx}
                delay={(idx % 3) * 70}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-card transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
