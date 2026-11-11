import { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/acceptable-use");

export const metadata: Metadata = {
  title: "Acceptable Use Policy | CartX",
  description:
    "Review prohibited merchandise, unlawful activities, network security protections, and enforcement guidelines for stores operating on CartX.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Acceptable Use Policy | CartX",
    description:
      "Review prohibited merchandise, unlawful activities, network security protections, and enforcement guidelines for stores operating on CartX.",
    url: canonical,
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "purpose-and-scope",
    titleEn: "1. Purpose and Scope",
    titleBn: "১. উদ্দেশ্য ও পরিধি",
    contentEn: [
      "This Acceptable Use Policy ('AUP') defines prohibited merchant activities, unacceptable merchandise types, and platform security standards on CartX.",
      "All account holders, storefront operators, and administrative users must adhere strictly to these standards to maintain a trustworthy commerce environment.",
    ],
    contentBn: [
      "এই গ্রহণযোগ্য ব্যবহারের নীতিমালায় নিষিদ্ধ ব্যবসায়িক কার্যক্রম, অননুমোদিত পণ্য এবং প্ল্যাটফর্মের সার্বিক নিরাপত্তা নীতিমালা নির্ধারিত হয়েছে।",
      "একটি নিরাপদ বাণিজ্যিক পরিবেশ বজায় রাখতে সমস্ত মার্চেন্ট ও ব্যবহারকারীকে এই নিয়মগুলো কঠোরভাবে মেনে চলতে হবে।",
    ],
  },
  {
    id: "prohibited-content",
    titleEn: "2. Prohibited Content",
    titleBn: "২. নিষিদ্ধ পণ্য ও সামগ্রী",
    contentEn: [
      "CartX strictly prohibits the listing, marketing, or sale of the following merchandise categories: (a) counterfeit branded goods, bootlegs, or unauthorized replicas; (b) illicit narcotics, unauthorized prescription drugs, or controlled substances; (c) firearms, explosives, ammunition, or tactical weaponry; (d) sexually explicit media or non-consensual imagery; and (e) endangered animal wildlife products.",
    ],
    contentBn: [
      "CartX প্ল্যাটফর্মে নিম্নলিখিত পণ্যের প্রদর্শন বা বিক্রয় সম্পূর্ণ নিষিদ্ধ: (ক) নকল বা পাইরেটেড ব্র্যান্ডেড সামগ্রী; (খ) অবৈধ মাদকদ্রব্য ও অননুমোদিত ওষুধ; (গ) আগ্নেয়াস্ত্র ও বিস্ফোরক; (ঘ) অশ্লীল সামগ্রী; এবং (ঙ) বিপন্ন বন্যপ্রাণী ও নিষিদ্ধ প্রাকৃতিক উপাদান।",
    ],
  },
  {
    id: "abusive-usage",
    titleEn: "3. Abusive Usage",
    titleBn: "৩. অপব্যবহার ও অনৈতিক আচরণ",
    contentEn: [
      "Merchants may not engage in predatory trade practices, deceptive pricing, multi-level marketing (MLM) schemes, pyramid promotions, or fraudulent sweepstakes designed to mislead consumers.",
    ],
    contentBn: [
      "ভোক্তাদের বিভ্রান্ত করার উদ্দেশ্যে প্রতারণামূলক অফার, ভুয়া লটারি বা পিরামিড স্কিম পরিচালনা করা সম্পূর্ণ নিষিদ্ধ।",
    ],
  },
  {
    id: "unlawful-activity",
    titleEn: "4. Unlawful Activity",
    titleBn: "৪. বেআইনি ও অপরাধমূলক কার্যক্রম",
    contentEn: [
      "CartX infrastructure must not be used for money laundering, terrorist financing, human trafficking, stolen credit card monetization, or any activity that violates the statutory laws of Bangladesh or the merchant's operating jurisdiction.",
    ],
    contentBn: [
      "মানি লন্ডারিং, চোরাই কার্ডের ব্যবহার বা যেকোনো প্রকার বেআইনি অপরাধমূলক কাজে প্ল্যাটফর্মের প্রযুক্তি ব্যবহার কঠোরভাবে নিষিদ্ধ।",
    ],
  },
  {
    id: "spam-and-unsolicited-communications",
    titleEn: "5. Spam and Unsolicited Communications",
    titleBn: "৫. স্প্যাম ও অনাকাঙ্ক্ষিত যোগাযোগ",
    contentEn: [
      "Store owners must not utilize CartX messaging, SMS gateway triggers, or notification features to transmit unsolicited bulk marketing messages ('spam') without documented prior opt-in consent from recipients.",
    ],
    contentBn: [
      "গ্রাহকের সম্মতি ছাড়া অনাকাঙ্ক্ষিত এসএমএস বা ইমেইল স্প্যামিংয়ের উদ্দেশ্যে প্ল্যাটফর্মের কমিউনিকেশন টুল ব্যবহার করা যাবে না।",
    ],
  },
  {
    id: "security-attacks",
    titleEn: "6. Security Attacks",
    titleBn: "৬. সাইবার আক্রমণ ও নিরাপত্তা বিঘ্নিতকরণ",
    contentEn: [
      "You must not attempt to compromise system integrity through: (a) distributing trojans, viruses, worms, or malicious ransomware; (b) conducting denial-of-service (DoS/DDoS) flood attacks; (c) attempting unauthorized network penetration; or (d) executing credential brute-force attempts on admin authentication gateways.",
    ],
    contentBn: [
      "ম্যালওয়্যার বা ভাইরাস ছড়ানো, ডিডস (DDoS) আক্রমণ পরিচালনা করা কিংবা অনুমতি ব্যতীত সিস্টেমের নিরাপত্তা ভেদ করার চেষ্টা করা কঠোর অপরাধ হিসেবে গণ্য হবে।",
    ],
  },
  {
    id: "platform-misuse",
    titleEn: "7. Platform Misuse",
    titleBn: "৭. পরিকাঠামোর অপব্যবহার",
    contentEn: [
      "Merchants must not abuse shared multi-tenant resources through automated scraping, unconstrained API hammering, or utilizing CartX as an arbitrary file-hosting or backup repository for non-store assets.",
    ],
    contentBn: [
      "স্টোর বহির্ভূত ফাইলের আনলিমিটেড স্টোরেজ হিসেবে প্ল্যাটফর্ম ব্যবহার করা বা অনিয়ন্ত্রিত স্ক্র্যাপিংয়ের মাধ্যমে সার্ভার ধীরগতির কারণ সৃষ্টি করা নিষিদ্ধ।",
    ],
  },
  {
    id: "intellectual-property-violations",
    titleEn: "8. Intellectual Property Violations",
    titleBn: "৮. বুদ্ধিবৃত্তিক সম্পত্তি লঙ্ঘন",
    contentEn: [
      "Merchants must respect trademark, copyright, and patent laws. You may not host images, product descriptions, or trademarked logos without authorization from legitimate rights holders.",
    ],
    contentBn: [
      "অনুমতি ছাড়া অন্যের কপিরাইটযুক্ত ছবি, ব্র্যান্ডের লোগো বা ট্রেডমার্ক করা কন্টেন্ট ব্যবহার করা যাবে না।",
    ],
  },
  {
    id: "reporting-violations",
    titleEn: "9. Reporting Violations",
    titleBn: "৯. অনিয়ম ও অভিযোগ দাখিল",
    contentEn: [
      "If you identify a storefront on CartX that appears to violate this Acceptable Use Policy, please submit an investigation notice to support@cartx.com with the store URL and supporting evidence.",
    ],
    contentBn: [
      "কোনো স্টোরে এই নীতিমালার লঙ্ঘন দেখা দিলে সংশ্লিষ্ট স্টোরের লিংক এবং প্রমাণাদিসহ support@cartx.com-এ অভিযোগ পাঠানো যাবে।",
    ],
  },
  {
    id: "enforcement-and-suspension",
    titleEn: "10. Enforcement and Suspension",
    titleBn: "১০. তদন্ত ও শাস্তিমূলক ব্যবস্থা",
    contentEn: [
      "CartX reserves the right to immediately freeze, suspend, or permanently terminate store access upon confirmation of credible AUP violations, without prior liability, to protect platform safety and consumer welfare.",
    ],
    contentBn: [
      "নীতিমালার স্পষ্ট লঙ্ঘন প্রমাণিত হলে প্ল্যাটফর্ম ও ভোক্তাদের সুরক্ষায় অবিলম্বে সংশ্লিষ্ট স্টোর সাময়িক বা স্থায়ীভাবে বন্ধ করার অধিকার CartX সংরক্ষণ করে।",
    ],
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalLayout
      titleEn="Acceptable Use Policy"
      titleBn="গ্রহণযোগ্য ব্যবহারের নীতিমালা"
      lastUpdated="November 2026 (Draft Working Document)"
      summaryEn="This Acceptable Use Policy establishes strict operational boundaries, prohibited merchandise classes, and network security protections for all stores on CartX."
      summaryBn="এই নীতিমালায় CartX প্ল্যাটফর্মে স্টোর পরিচালনাকালে অনুমোদিত ও নিষিদ্ধ কার্যক্রম, অননুমোদিত পণ্য এবং নেটওয়ার্ক সুরক্ষার সুস্পষ্ট নিয়মাবলী উল্লেখ করা হয়েছে।"
      sections={SECTIONS}
      status="draft"
    />
  );
}
