"use client";

import React from "react";
import Link from "next/link";
import { Building2, MapPin, Mail, Clock, Headphones, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface BusinessInfoProps {
  layout?: "sidebar" | "full";
  className?: string;
}

export function BusinessInfo({ layout = "sidebar", className }: BusinessInfoProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const details = [
    {
      icon: Building2,
      labelEn: "Company Name",
      labelBn: "কোম্পানির নাম",
      valueEn: "WebQ LTD.",
      valueBn: "ওয়েবিকিউ লিমিটেড",
      link: null,
    },
    {
      icon: MapPin,
      labelEn: "Headquarters",
      labelBn: "প্রধান কার্যালয়",
      valueEn: "Dhaka, Bangladesh",
      valueBn: "ঢাকা, বাংলাদেশ",
      link: null,
    },
    {
      icon: Mail,
      labelEn: "Official Email",
      labelBn: "অফিসিয়াল ইমেইল",
      valueEn: "support@cartx.store",
      valueBn: "support@cartx.store",
      link: "mailto:support@cartx.store",
    },
    {
      icon: Clock,
      labelEn: "Office Hours",
      labelBn: "অফিস সময়সূচী",
      valueEn: "Sat – Thu: 9:00 AM – 6:00 PM (BST)",
      valueBn: "শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০ (BST)",
      link: null,
    },
    {
      icon: Headphones,
      labelEn: "Support Availability",
      labelBn: "সহায়তার প্রাপ্যতা",
      valueEn: "Business Days • Email & Ticket Assistance",
      valueBn: "কার্যদিবস • ইমেইল ও টিকেট সহায়তা",
      link: null,
    },
  ];

  if (layout === "sidebar") {
    return (
      <aside aria-label="Contact Information" className={cn("space-y-5", className)}>
        {/* Main Office Card */}
        <Card className="border border-border/80 bg-card p-6 shadow-xs rounded-2xl">
          <CardHeader className="p-0 pb-4 space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                {isBn ? "প্রধান কার্যালয় ও যোগাযোগ" : "Headquarters & Office"}
              </span>
              <Badge variant="outline" className="text-[10px] font-medium border-border/70">
                {isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, BD"}
              </Badge>
            </div>
            <CardTitle className="text-lg font-bold text-foreground">
              {isBn ? "ওয়েবিকিউ লিমিটেড" : "WebQ LTD."}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              {isBn
                ? "বাংলাদেশের শীর্ষস্থানীয় ইকমার্স প্ল্যাটফর্ম সলিউশন"
                : "Official provider of the CartX e-commerce ecosystem"}
            </CardDescription>
          </CardHeader>

          <Separator className="my-2" />

          <CardContent className="p-0 pt-3 space-y-4">
            {details.slice(1).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                      {isBn ? item.labelBn : item.labelEn}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-xs sm:text-sm font-semibold text-primary hover:underline break-all block"
                      >
                        {isBn ? item.valueBn : item.valueEn}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-medium text-foreground block">
                        {isBn ? item.valueBn : item.valueEn}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Support SLA & Security Card */}
        <Card className="border border-border/80 bg-card/60 p-5 shadow-xs rounded-2xl">
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="size-4.5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-foreground">
                  {isBn ? "দ্রুত রেসপন্স নিশ্চয়তা" : "Fast Response SLA"}
                </span>
                <Badge variant="secondary" className="text-[10px] font-mono py-0 h-4 px-1.5">
                  24h
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isBn
                  ? "কার্যদিবসে প্রেরিত সমস্ত অনুসন্ধান আমাদের ঢাকা অফিসে অবস্থিত টিম কর্তৃক সর্বোচ্চ অগ্রাধিকারের সাথে পর্যালোচনা করা হয়।"
                  : "All inquiries submitted during business hours are reviewed by our Dhaka-based team with priority follow-up."}
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Knowledge Base Shortcut Card */}
        <Card className="border border-border/80 bg-card/60 p-5 shadow-xs rounded-2xl">
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-secondary-accent/15 text-secondary-accent flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="size-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-foreground block mb-1">
                {isBn ? "তাৎক্ষণিক উত্তর খুঁজছেন?" : "Looking for Quick Answers?"}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {isBn
                  ? "পেমেন্ট গেটওয়ে, কুরিয়ার বা প্রোডাক্ট ম্যানেজমেন্ট সম্পর্কিত গাইড দেখতে পারেন।"
                  : "Check our complete guides on MFS payments, courier setup, and store configuration."}
              </p>
              <Link
                href="/help"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>{isBn ? "সহায়তা কেন্দ্র ব্রাউজ করুন" : "Browse Help Center"}</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </Card>
      </aside>
    );
  }

  return (
    <section
      aria-label="Corporate Details"
      className={cn("py-12 sm:py-16 border-b border-border bg-card/20 transition-colors", className)}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 border-b border-border/70 pb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
            {isBn ? "প্রতিষ্ঠানের বিবরণ" : "Corporate Details"}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            <span className="block text-foreground">
              {isBn ? "অফিস ও সহায়তা ডেস্ক" : "Corporate Office"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "ব্যবসায়িক তথ্য ও প্রাপ্যতা" : "Business Information"}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="rounded-xl border border-border/70 bg-background/50 p-5 flex flex-col justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5 text-muted-foreground mb-3">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {isBn ? item.labelBn : item.labelEn}
                  </span>
                </div>

                <div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-xs sm:text-sm font-semibold text-primary hover:underline break-all"
                    >
                      {isBn ? item.valueBn : item.valueEn}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {isBn ? item.valueBn : item.valueEn}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
