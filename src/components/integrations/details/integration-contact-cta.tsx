"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { IntegrationItem } from "../types";
import { getIntegrationBySlug } from "../integrations-data";
import { StandardCTASection } from "@/components/ui/standard-cta-section";

interface IntegrationContactCTAProps {
  integration: IntegrationItem;
  className?: string;
}

export function IntegrationContactCTA({
  integration,
  className,
}: IntegrationContactCTAProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const relatedIntegrations = integration.relatedSlugs
    .map((slug) => getIntegrationBySlug(slug))
    .filter((item): item is IntegrationItem => Boolean(item));

  return (
    <StandardCTASection
      ariaLabel="Contact and Next Steps"
      className={className}
      badge={{
        icon: HelpCircle,
        text: isBn
          ? `${integration.name} সেটআপে সহায়তা চান?`
          : `Need Assistance with ${integration.name}?`,
      }}
      titlePlain={isBn ? "সহায়তা প্রয়োজন?" : "Need Technical Assistance?"}
      titleHighlight={
        isBn
          ? "আমাদের কারিগরি টিম সংযোগ প্রক্রিয়া সহজ করে দেবে"
          : "Our Integration Engineers Are Ready to Assist"
      }
      description={
        isBn
          ? `আপনি কি ${integration.name}-এর স্যান্ডবক্স টেস্টিং বা লাইভ ক্রেডেনশিয়াল কনফিগার করতে সমস্যার সম্মুখীন হচ্ছেন? আমাদের প্রকৌশলীদের সাথে সরাসরি যোগাযোগ করুন।`
          : `Whether validating sandbox credentials or troubleshooting live webhook signatures for ${integration.name}, our specialist support team is here to help.`
      }
      primaryButton={{
        href: "/contact",
        text: isBn
          ? "সাপোর্ট টিমের সাথে যোগাযোগ করুন"
          : "Contact Technical Support",
        showArrow: true,
      }}
      secondaryButton={{
        href: "/integrations",
        text: isBn ? "সকল ইন্টিগ্রেশন ডিরেক্টরি" : "All Integrations",
        icon: ArrowLeft,
      }}
    >
      {relatedIntegrations.length > 0 && (
        <div className="pt-8 border-t border-slate-800/80 w-full mt-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center">
            {isBn ? "সম্পর্কিত অন্যান্য ইন্টিগ্রেশনসমূহ" : "Related Integrations"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {relatedIntegrations.map((rel) => (
              <Link
                key={rel.slug}
                href={`/integrations/${rel.slug}`}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200 text-xs font-semibold shadow-xs transition-all hover:bg-slate-800 hover:border-primary/50 hover:-translate-y-0.5"
              >
                <span>{rel.name}</span>
                <ArrowRight className="h-3 w-3 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </StandardCTASection>
  );
}
