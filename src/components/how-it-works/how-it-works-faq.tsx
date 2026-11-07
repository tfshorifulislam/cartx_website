"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "setup-time",
    questionEn: "How long does it take to launch a store on CartX?",
    questionBn: "CartX-এ একটি স্টোর চালু করতে কত সময় লাগে?",
    answerEn:
      "Most merchants can launch a functional store within a few hours. The onboarding process takes under 2 minutes to create your account, select a theme, and set up your store name. Once you upload your initial products and configure your payment and delivery preferences, your store is ready to receive orders.",
    answerBn:
      "অধিকাংশ মার্চেন্ট কয়েক ঘণ্টার মধ্যেই একটি কার্যকর স্টোর চালু করতে পারেন। অ্যাকাউন্ট তৈরি, থিম নির্বাচন এবং স্টোরের নাম সেট আপ করতে অনবোর্ডিং প্রক্রিয়ায় ২ মিনিটেরও কম সময় লাগে। আপনার প্রাথমিক পণ্য আপলোড এবং পেমেন্ট ও ডেলিভারি পছন্দ কনফিগার করলেই আপনার স্টোর অর্ডার গ্রহণের জন্য প্রস্তুত হয়।",
  },
  {
    id: "domain",
    questionEn: "Can I use my own custom domain?",
    questionBn: "আমি কি আমার নিজস্ব কাস্টম ডোমেইন ব্যবহার করতে পারি?",
    answerEn:
      "Yes. Every CartX store gets a complimentary `.cartx.store` subdomain instantly. You can connect your custom domain (e.g., `yourbrand.com`) on Growth, Business, and Enterprise plans with free automated SSL certificate provisioning and simple DNS guidance.",
    answerBn:
      "হ্যাঁ। প্রতিটি CartX স্টোর তাৎক্ষণিকভাবে একটি প্রশংসাসূচক `.cartx.store` সাবডোমেন পায়। আপনি Growth, Business এবং Enterprise প্ল্যানে বিনামূল্যে স্বয়ংক্রিয় SSL সার্টিফিকেট এবং সহজ DNS নির্দেশিকা সহ আপনার নিজস্ব কাস্টম ডোমেইন (যেমন `yourbrand.com`) সংযুক্ত করতে পারেন।",
  },
  {
    id: "payments",
    questionEn: "How do customer payments and payouts work?",
    questionBn: "গ্রাহকের পেমেন্ট এবং পেআউট কীভাবে কাজ করে?",
    answerEn:
      "CartX supports both Cash on Delivery (COD) and automated payment gateway integrations (bKash, Nagad, cards). Payments collected via gateways deposit directly into your connected merchant account according to your gateway partner's settlement schedule. CartX charges 0% platform transaction commission.",
    answerBn:
      "CartX ক্যাশ অন ডেলিভারি (COD) এবং স্বয়ংক্রিয় পেমেন্ট গেটওয়ে ইন্টিগ্রেশন (বিকাশ, নগদ, কার্ড) উভয়ই সমর্থন করে। গেটওয়ের মাধ্যমে সংগৃহীত পেমেন্ট আপনার গেটওয়ে পার্টনারের নিষ্পত্তি সময়সূচী অনুযায়ী সরাসরি আপনার সংযুক্ত মার্চেন্ট অ্যাকাউন্টে জমা হয়। CartX ০% প্ল্যাটফর্ম লেনদেন কমিশন নেয়।",
  },
  {
    id: "courier",
    questionEn: "How does delivery and courier integration work?",
    questionBn: "ডেলিভারি এবং কুরিয়ার ইন্টিগ্রেশন কীভাবে কাজ করে?",
    answerEn:
      "You can connect leading courier services (Steadfast, Pathao, RedX, Paperfly) using your API keys. Once connected, you can generate delivery consignments directly from your CartX order management screen, print shipping labels with barcodes, and provide real-time parcel tracking to your customers.",
    answerBn:
      "আপনি আপনার API কী ব্যবহার করে শীর্ষস্থানীয় কুরিয়ার পরিষেবা (Steadfast, Pathao, RedX, Paperfly) সংযুক্ত করতে পারেন। সংযুক্ত হয়ে গেলে, আপনি সরাসরি আপনার CartX অর্ডার ম্যানেজমেন্ট স্ক্রিন থেকে ডেলিভারি কনসাইনমেন্ট তৈরি করতে পারেন, বারকোড সহ শিপিং লেবেল প্রিন্ট করতে পারেন এবং আপনার গ্রাহকদের রিয়েল-টাইম পার্সেল ট্র্যাকিং দিতে পারেন।",
  },
  {
    id: "technical-skills",
    questionEn: "Do I need coding or design experience to use CartX?",
    questionBn: "CartX ব্যবহার করার জন্য কি আমার কোডিং বা ডিজাইন অভিজ্ঞতার প্রয়োজন আছে?",
    answerEn:
      "No coding skills are required. CartX is built with an intuitive visual theme customizer, straightforward forms for product management, and automated order workflows. If you can use a smartphone or web browser, you can run a CartX store.",
    answerBn:
      "কোনো কোডিং দক্ষতার প্রয়োজন নেই। CartX তৈরি হয়েছে একটি সহজ ভিজ্যুয়াল থিম কাস্টমাইজার, পণ্য পরিচালনার সহজ ফর্ম এবং স্বয়ংক্রিয় অর্ডার ওয়ার্কফ্লো সহ। আপনি যদি স্মার্টফোন বা ওয়েব ব্রাউজার ব্যবহার করতে পারেন, তবে আপনি একটি CartX স্টোর পরিচালনা করতে পারবেন।",
  },
  {
    id: "data-security",
    questionEn: "How is my customer and store data protected?",
    questionBn: "আমার গ্রাহক এবং স্টোরের তথ্য কীভাবে সুরক্ষিত থাকে?",
    answerEn:
      "CartX maintains strict data isolation between stores. All traffic is encrypted in transit using industry-standard TLS. Customer records, order history, and business analytics belong entirely to you and are never shared, resold, or accessed without authorization.",
    answerBn:
      "CartX স্টোরগুলির মধ্যে কঠোর তথ্য পৃথকীকরণ বজায় রাখে। সমস্ত ট্র্যাফিক শিল্প-মানের TLS ব্যবহার করে ট্রানজিটে এনক্রিপ্ট করা হয়। গ্রাহকের রেকর্ড, অর্ডারের ইতিহাস এবং ব্যবসায়িক অ্যানালিটিক্স সম্পূর্ণরূপে আপনার নিজস্ব এবং কখনোই অননুমোদিতভাবে শেয়ার, পুনরায় বিক্রি বা অ্যাক্সেস করা হয় না।",
  },
];

export function HowItWorksFAQ() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";
  const [openItem, setOpenItem] = useState<string | null>("setup-time");

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-card/40 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{isBn ? "সাধারণ প্রশ্নোত্তর" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            <span className="block text-foreground">
              {isBn ? "শুরু করার আগে" : "Essential Guidance"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "আপনার যা জানা প্রয়োজন"
                : "Everything You Need to Know"}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {isBn
              ? "CartX সেটআপ, পেমেন্ট, কুরিয়ার এবং স্টোর পরিচালনা সম্পর্কিত সাধারণ প্রশ্নের উত্তর।"
              : "Clear answers to common questions about setting up, managing, and scaling your CartX store."}
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openItem === item.id;
            return (
              <ScrollReveal
                key={item.id}
                delay={idx * 50}
                className={cn(
                  "rounded-xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-card border-primary/30 shadow-sm"
                    : "bg-card/60 border-border hover:border-border/80"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {isBn ? item.questionBn : item.questionEn}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                    {isBn ? item.answerBn : item.answerEn}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

