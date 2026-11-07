"use client";

import React from "react";
import { Building2, MapPin, Mail, Code2, Server } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function WebQLtd({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const companyStats = [
    {
      label: isBn ? "হেডকোয়ার্টার" : "Headquarters",
      value: isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh",
      icon: MapPin,
    },
    {
      label: isBn ? "কোম্পানি সত্তা" : "Corporate Entity",
      value: "WebQ LTD.",
      icon: Building2,
    },
    {
      label: isBn ? "সফটওয়্যার ইঞ্জিনিয়ারিং" : "Software Focus",
      value: isBn ? "কমার্স ক্লাউড সলিউশন" : "E-Commerce Cloud SaaS",
      icon: Code2,
    },
    {
      label: isBn ? "যোগাযোগ ও সহায়তা" : "Direct Contact",
      value: "support@cartx.store",
      icon: Mail,
    },
  ];

  return (
    <section
      id="webq-ltd"
      aria-label="WebQ LTD Company Profile"
      className={cn("py-16 sm:py-24 border-b border-border bg-card/30 transition-colors", className)}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-border/70">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{isBn ? "প্রযোজনা ও মালিকানা" : "Parent Company & Engineering"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  <span className="block text-foreground">
                    {isBn ? "কার্টএক্সের পেছনের প্রতিষ্ঠান" : "The Engineering Behind CartX"}
                  </span>
                  <span className="block brand-gradient-text">
                    {isBn ? "WebQ LTD সম্পর্কে" : "About WebQ LTD."}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/40 px-3 py-2 rounded-xl border border-border">
                <Server className="h-3.5 w-3.5 text-primary" />
                <span>Registered Tech Company</span>
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4 mb-8">
              <p>
                {isBn
                  ? "CartX হলো WebQ LTD-এর একটি শীর্ষস্থানীয় ফ্ল্যাগশিপ প্রোডাক্ট। WebQ LTD হলো বাংলাদেশে নিবন্ধিত একটি আধুনিক সফটওয়্যার টেকনোলজি কোম্পানি, যার সদর দপ্তর ঢাকা, বাংলাদেশে অবস্থিত। আমরা আধুনিক প্রযুক্তি ও ক্লাউড অবকাঠামোর সাহায্যে ব্যবসায়িক অটোমেশন ও ইকমার্স সফটওয়্যার সমাধানে নিবেদিত।"
                  : "CartX is proudly developed and operated by WebQ LTD., a registered software and technology enterprise headquartered in Dhaka, Bangladesh. We build resilient, high-performance web software designed to solve real-world operational challenges for digital merchants and growing businesses."}
              </p>
              <p>
                {isBn
                  ? "আমাদের ইঞ্জিনিয়ারিং টিম প্রতিটি লাইব্রেরি ও সিস্টেমকে স্থানীয় ইকমার্স বাস্তুতন্ত্র (যেমন পেমেন্ট গেটওয়ে সেটেলমেন্ট, স্থানীয় কুরিয়ার ট্র্যাকিং এবং মোবাইল নেটওয়ার্ক অপ্টিমাইজেশন) এর সাথে সামঞ্জস্য রেখে স্ক্র্যাচ থেকে উন্নত করেছে।"
                  : "Our engineering philosophy balances modern web performance with practical infrastructure simplicity. We prioritize security, system up-time, transparent billing, and dedicated technical support so our merchants can focus completely on serving their customers."}
              </p>
            </div>

            {/* Company Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {companyStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={i} delay={i * 60}>
                    <div className="rounded-xl border border-border/80 bg-background/60 p-4 flex flex-col justify-between h-full">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-[11px] font-medium uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        {stat.value}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
