import { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/cookie-policy");

export const metadata: Metadata = {
  title: "Cookie Policy | CartX",
  description:
    "Learn about how CartX uses essential session cookies, local storage keys, and performance tokens on our public website and merchant platform.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Cookie Policy | CartX",
    description:
      "Learn about how CartX uses essential session cookies, local storage keys, and performance tokens on our public website and merchant platform.",
    url: canonical,
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "what-cookies-are",
    titleEn: "1. What Cookies Are",
    titleBn: "১. কুকিজ কী",
    contentEn: [
      "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work properly, provide a consistent user experience, and remember session states.",
      "Modern web browsers also utilize local storage and session storage APIs to securely maintain user selections without sending data to servers on every single asset request.",
    ],
    contentBn: [
      "কুকিজ হলো ক্ষুদ্র টেক্সট ফাইল যা কোনো ওয়েবসাইটে প্রবেশ করার সময় আপনার ডিভাইসে সংরক্ষিত হয়। এটি ওয়েবসাইটের কার্যকারিতা বজায় রাখতে সাহায্য করে।",
      "আধুনিক ওয়েব ব্রাউজারে লোকাল স্টোরেজের মাধ্যমে ব্যবহারকারীর পছন্দসমূহ নিরাপদে সংরক্ষিত থাকে।",
    ],
  },
  {
    id: "essential-cookies",
    titleEn: "2. Essential Cookies",
    titleBn: "২. প্রয়োজনীয় (এসেনশিয়াল) কুকিজ",
    contentEn: [
      "CartX uses strictly necessary cookies and local storage items required for core platform operation, including: (a) maintaining authenticated merchant administrative sessions; (b) persisting language preferences (English or Bangla); (c) safeguarding against Cross-Site Request Forgery (CSRF); and (d) preserving active storefront shopping carts.",
      "These essential tokens cannot be disabled without breaking foundational checkout or dashboard functionality.",
    ],
    contentBn: [
      "প্ল্যাটফর্মের স্বাভাবিক পরিচালনার জন্য প্রয়োজনীয় কুকিজ ব্যবহৃত হয়, যেমন: মার্চেন্ট লগইন সেশন, ভাষা নির্বাচন (ইংরেজি/বাংলা), নিরাপত্তা টোকেন এবং শপিং কার্ট সচল রাখা।",
      "এই অপরিহার্য কুকিগুলো নিষ্ক্রিয় করলে ওয়েবসাইটের মূল ফিচারগুলো কাজ নাও করতে পারে।",
    ],
  },
  {
    id: "optional-analytics-cookies",
    titleEn: "3. Optional Analytics Cookies",
    titleBn: "৩. অ্যানালিটিক্স ও পারফরম্যান্স পরিমাপক",
    contentEn: [
      "We may measure aggregate platform telemetry—such as asset loading speeds, server rendering durations, and edge CDN cache hit ratios—to identify bottlenecks and optimize mobile browsing across regional internet connections.",
      "Any performance analytics data collected by CartX is aggregated and anonymized, without personal identity tracking.",
    ],
    contentBn: [
      "ওয়েবসাইটের গতি বৃদ্ধি এবং লোডিং পারফরম্যান্স পর্যবেক্ষণে সামগ্রিক টেলিমেট্রি পরিমাপ করা হতে পারে।",
      "এ সংক্রান্ত সংগৃহীত তথ্য অজ্ঞাতনামা হিসেবে সংগৃহীত হয় এবং কোনো ব্যক্তিগত পরিচয় ট্র্যাক করে না।",
    ],
  },
  {
    id: "marketing-cookies",
    titleEn: "4. Marketing Cookies (Status & Policies)",
    titleBn: "৪. মার্কেটিং কুকিজ সংক্রান্ত অবস্থান",
    contentEn: [
      "CartX does not deploy third-party advertising cookies, cross-site behavior trackers, or data-monetization scripts on its public marketing pages or merchant admin panels.",
      "We do not sell user data to advertising exchanges or data brokers.",
    ],
    contentBn: [
      "CartX তার ওয়েবসাইটে বা মার্চেন্ট অ্যাডমিন প্যানেলে তৃতীয় পক্ষের বিজ্ঞাপন ট্র্যাকিং কুকি ব্যবহার করে না।",
      "আমরা কোনো বিজ্ঞাপন সংস্থার কাছে ব্যবহারকারীর ডেটা বিক্রি বা শেয়ার করি না।",
    ],
  },
  {
    id: "cookie-controls",
    titleEn: "5. Cookie Controls",
    titleBn: "৫. কুকি নিয়ন্ত্রণ ও ব্রাউজার সেটিংস",
    contentEn: [
      "Most web browsers allow you to control cookies through their browser preference settings. You can instruct your browser to block all cookies or notify you when a cookie is being placed.",
      "Please note that disabling cookies may prevent you from logging into the merchant admin console or maintaining items in a storefront checkout cart.",
    ],
    contentBn: [
      "বেশিরভাগ ওয়েব ব্রাউজারে সেটিংস পরিবর্তনের মাধ্যমে কুকিজ নিয়ন্ত্রণ বা মুছে ফেলার সুযোগ থাকে।",
      "কুকিজ সম্পূর্ণ বন্ধ করে দিলে স্টোর অ্যাডমিন প্যানেলে লগইন বা কার্ট সেভ করার সুবিধায় বিঘ্ন ঘটতে পারে।",
    ],
  },
  {
    id: "consent-mechanisms",
    titleEn: "6. Consent Mechanisms",
    titleBn: "৬. সম্মতি প্রক্রিয়া ও নীতি",
    contentEn: [
      "By continuing to browse our website and accessing merchant services, you acknowledge the placement of strictly necessary cookies essential for security and localization.",
      "Where applicable by future privacy regulations, granular consent selection tools will be displayed prior to non-essential cookie activation.",
    ],
    contentBn: [
      "ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি প্রয়োজনীয় নিরাপত্তা ও ভাষা নির্বাচনের কুকিজ ব্যবহারে সম্মতি জ্ঞাপন করছেন।",
      "ভবিষ্যতে অতিরিক্ত কোনো অপশনাল কুকিজ চালু করা হলে ব্যবহারকারীর সুস্পষ্ট সম্মতির ব্যবস্থা রাখা হবে।",
    ],
  },
  {
    id: "third-party-cookies",
    titleEn: "7. Third-Party Cookies",
    titleBn: "৭. তৃতীয় পক্ষের কুকিজ",
    contentEn: [
      "When merchants embed external scripts—such as third-party live chat widgets or social pixel integrations—on their individual storefronts, those third-party providers may place independent cookies subject to their own privacy policies.",
      "Merchants are responsible for disclosing third-party tracking scripts to their storefront visitors.",
    ],
    contentBn: [
      "মার্চেন্টরা যদি তাদের নিজস্ব স্টোরফ্রন্টে কোনো বহিরাগত চ্যাট উইজেট বা সোশ্যাল পিক্সেল কোড যুক্ত করেন, তবে সংশ্লিষ্ট তৃতীয় পক্ষ নিজস্ব কুকি স্থাপন করতে পারে।",
      "এ ধরনের কোড যুক্ত করার ক্ষেত্রে গ্রাহকদের কাছে তা প্রকাশের দায়িত্ব সংশ্লিষ্ট মার্চেন্টের।",
    ],
  },
  {
    id: "policy-updates",
    titleEn: "8. Policy Updates",
    titleBn: "৮. কুকি পলিসি হালনাগাদ",
    contentEn: [
      "We may update this Cookie Policy from time to time to reflect changes in technical session handling or applicable legal standards. For further details on our data protection commitments, please review our Privacy Policy.",
    ],
    contentBn: [
      "প্রযুক্তিগত পরিবর্তন বা আইনগত নিয়মের প্রেক্ষিতে এই কুকি পলিসি হালনাগাদ করা হতে পারে। ডেটা সুরক্ষার বিস্তারিত জানতে আমাদের Privacy Policy দেখুন।",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      titleEn="Cookie Policy"
      titleBn="কুকি পলিসি"
      lastUpdated="November 2026 (Draft Working Document)"
      summaryEn="This policy explains how CartX uses essential session tokens and browser storage to deliver secure e-commerce operations without intrusive cross-site ad tracking."
      summaryBn="এই নীতিমালায় ব্যাখ্যা করা হয়েছে যে কীভাবে CartX কোনো বিজ্ঞাপন ট্র্যাকিং ছাড়াই শুধুমাত্র প্রয়োজনীয় সেশন ও ব্রাউজার স্টোরেজ ব্যবহার করে।"
      sections={SECTIONS}
      status="draft"
    />
  );
}
