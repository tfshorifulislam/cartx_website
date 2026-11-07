"use client";

import React, { useState } from "react";
import { Mail, Info, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function BlogNewsletter({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      aria-label="Newsletter Signup"
      className={cn(
        "py-12 sm:py-16 md:py-20 border-t border-border bg-card/30 transition-colors",
        className,
      )}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <ScrollReveal className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-12 text-center shadow-xs relative overflow-hidden">
          <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <Mail className="size-5 sm:size-6" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2 sm:mb-3 leading-tight sm:leading-snug">
            <span className="block text-foreground">
              {isBn
                ? "ই-কমার্স ইনসাইট ও আপডেট"
                : "Actionable Industry Insights"}
            </span>
            <span className="block brand-gradient-text">
              {isBn
                ? "সাপ্তাহিক নিউজলেটার পান আপনার ইনবক্সে"
                : "Delivered Directly to Your Inbox"}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed text-balance">
            {isBn
              ? "কোনো স্প্যাম নয়। শুধুমাত্র প্রমাণিত ব্যবসায়িক কৌশল, কমার্স টিপস এবং নতুন ফিচার আপডেটের নিয়মিত সারসংক্ষেপ।"
              : "No spam, ever. Only tested conversion strategies, delivery operational guides, and product updates curated for online merchants."}
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/25 text-foreground text-xs sm:text-sm font-medium">
              <Info className="size-4 shrink-0 text-primary" />
              <span>
                {isBn
                  ? "এটি একটি ফ্রন্টএন্ড ডেমো। নিউজলেটার সাবস্ক্রিপশন কোনো ব্যাকএন্ড সার্ভিসের সাথে সংযুক্ত নয়।"
                  : "Frontend demo mode: Newsletter subscription is not connected to a mailing service."}
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto w-full"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  isBn ? "আপনার ইমেইল ঠিকানা দিন" : "Enter your email address"
                }
                className="flex-1 rounded-lg sm:rounded-xl border border-border bg-background px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-2xs transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>{isBn ? "সাবস্ক্রাইব করুন" : "Subscribe"}</span>
                <ArrowRight className="size-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-muted-foreground mt-4">
            {isBn
              ? "আমরা আপনার তথ্যের গোপনীয়তা রক্ষা করি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারেন।"
              : "We respect your privacy. Unsubscribe anytime with a single click."}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
