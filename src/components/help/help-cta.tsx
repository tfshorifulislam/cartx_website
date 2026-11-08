"use client";

import React from "react";
import { Mail, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

export function HelpCTA({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  return (
    <StandardCTASection
      ariaLabel="Help Center Call to Action"
      className={className}
      badge={{
        icon: Mail,
        text: isBn ? "সহায়তা কেন্দ্র" : "Customer Support",
      }}
      titlePlain={
        isBn ? "আমরা আপনাকে সহায়তা করতে প্রস্তুত" : "We're Here to Help"
      }
      titleHighlight={
        isBn ? "এখনও আপনার প্রশ্নের উত্তর খুঁজে পাননি?" : "Still Have Questions?"
      }
      description={
        isBn
          ? "আমাদের কাস্টমার সাপোর্ট টিম আপনার যেকোনো কারিগরি ও ব্যবসায়িক প্রশ্নের উত্তর দিতে প্রস্তুত।"
          : "Our dedicated support engineers in Dhaka are available to assist you with onboarding, payment integrations, or domain setup."
      }
      primaryButton={{
        href: "/contact",
        text: isBn ? "সাপোর্টে যোগাযোগ করুন" : "Contact Support",
        showArrow: true,
      }}
      secondaryButton={{
        href: "mailto:support@cartx.store",
        text: "support@cartx.store",
        icon: Mail,
      }}
    >
      <div className="pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400 text-center w-full mt-2">
        <div className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5 text-secondary-accent shrink-0" />
          <span>
            {isBn
              ? "শনিবার - বৃহস্পতিবার: সকাল ৯টা - সন্ধ্যা ৬টা"
              : "Sat - Thu: 9:00 AM - 6:00 PM"}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5 text-secondary-accent shrink-0" />
          <span>{isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}</span>
        </div>
      </div>
    </StandardCTASection>
  );
}
