import { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/refund-policy");

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | CartX",
  description:
    "Review CartX guidelines regarding subscription plan renewals, merchant account cancellations, one-time fees, and refund evaluation procedures.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Refund & Cancellation Policy | CartX",
    description:
      "Review CartX guidelines regarding subscription plan renewals, merchant account cancellations, one-time fees, and refund evaluation procedures.",
    url: canonical,
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "subscription-cancellation",
    titleEn: "1. Subscription Cancellation",
    titleBn: "১. সাবস্ক্রিপশন বাতিলকরণ",
    contentEn: [
      "Merchants may cancel subscription renewals at any time directly through the store administration billing dashboard. There are no cancellation penalties or early-termination surcharges.",
      "Upon submitting a cancellation request, your storefront and administration privileges will remain active until the conclusion of your current prepaid billing cycle.",
    ],
    contentBn: [
      "মার্চেন্টরা যেকোনো সময় তাদের স্টোর অ্যাডমিন প্যানেল থেকে পরবর্তী রিনিউয়াল বাতিল করতে পারেন। এর জন্য কোনো জরিমানা বা অতিরিক্ত ফি প্রযোজ্য নয়।",
      "বাতিলের পর চলতি বিলিং মেয়াদের শেষ দিন পর্যন্ত সমস্ত ফিচার এবং স্টোর সম্পূর্ণ সক্রিয় থাকবে।",
    ],
  },
  {
    id: "renewal-policy",
    titleEn: "2. Renewal Policy",
    titleBn: "২. রিনিউয়াল পলিসি",
    contentEn: [
      "Subscription plans billed on monthly or annual intervals renew automatically at the expiration of each billing cycle unless cancelled prior to the renewal date.",
      "Clear advance billing reminders are provided prior to annual cycle charges to ensure transparency and prevent unintended renewals.",
    ],
    contentBn: [
      "মাসিক বা বার্ষিক সাবস্ক্রিপশন প্ল্যান প্রতিটি সাইকেল শেষে স্বয়ংক্রিয়ভাবে রিনিউ হয়, যদি না তা রিনিউয়াল তারিখের পূর্বে বাতিল করা হয়।",
      "বার্ষিক প্ল্যানের ক্ষেত্রে অপ্রত্যাশিত চার্জ এড়াতে যথাসময়ে আগাম নোটিফিকেশন প্রদান করা হয়।",
    ],
  },
  {
    id: "refund-eligibility",
    titleEn: "3. Refund Eligibility",
    titleBn: "৩. রিফান্ডের যোগ্যতা ও নিয়মাবলী",
    contentEn: [
      "CartX provides a fully functional 14-day free trial on all plans so merchants can thoroughly verify features, integrations, and performance before purchasing.",
      "Because evaluation access is available upfront, recurring subscription fees are generally non-refundable once billed. Exceptions are evaluated on a case-by-case basis if an unresolvable core platform outage occurs within seven (7) days of an initial paid subscription activation.",
    ],
    contentBn: [
      "সেবা যাচাইয়ের জন্য ১৪ দিনের ফ্রি ট্রায়াল প্রদান করা হয় যাতে পেইড প্ল্যান গ্রহণের আগেই সমস্ত সুবিধা পরীক্ষা করা যায়।",
      "ফ্রি ট্রায়ালের সুবিধা থাকায় সাধারণ নিয়মে সাবস্ক্রিপশন ফি অপরিশোধযোগ্য। তবে প্রথম পেইড অ্যাক্টিভেশনের ৭ দিনের মধ্যে সমাধানহীন কারিগরি ত্রুটির ক্ষেত্রে বিশেষ বিবেচনায় রিফান্ডের আবেদন গ্রহণ করা হয়।",
    ],
  },
  {
    id: "one-time-service-fees",
    titleEn: "4. One-Time Service Fees",
    titleBn: "৪. এককালীন সার্ভিস ও কনফিগারেশন ফি",
    contentEn: [
      "Fees for one-time bespoke services—such as custom theme development, bespoke data migration assistance, or specialized integration onboarding—are non-refundable once engineering resources have been allocated and execution has begun.",
    ],
    contentBn: [
      "কাস্টম থিম ডিজাইন বা ডাটা মাইগ্রেশনের মতো বিশেষ এককালীন সার্ভিসের ক্ষেত্রে কাজ শুরু হওয়ার পর সংশ্লিষ্ট সার্ভিস ফি রিফান্ডযোগ্য নয়।",
    ],
  },
  {
    id: "white-label-app-fees",
    titleEn: "5. White-Label App Fees",
    titleBn: "৫. হোয়াইট-লেবেল মোবাইল অ্যাপ ফি",
    contentEn: [
      "Compilation and publishing fees for custom white-label iOS and Android apps cover dedicated build pipeline runs and store asset preparation. Once binary generation or store review submission begins, application compilation fees are non-refundable.",
      "Third-party developer account fees (such as Apple Developer or Google Play Console fees) are paid directly to those platforms and cannot be refunded by CartX.",
    ],
    contentBn: [
      "হোয়াইট-লেবেল মোবাইল অ্যাপ তৈরির ফি ডেডিকেটেড বিল্ড ও অ্যাপ সাবমিশন প্রক্রিয়ার সাথে সম্পর্কিত। কাজ শুরু হওয়ার পর এ সংক্রান্ত কারিগরি ফি অফেরতযোগ্য।",
      "অ্যাপল বা গুগল প্লে কনসোলের অফিশিয়াল চার্জ সরাসরি সংশ্লিষ্ট প্ল্যাটফর্মগুলোকে প্রদান করতে হয়, যা CartX কর্তৃক রিফান্ডযোগ্য নয়।",
    ],
  },
  {
    id: "payment-processing-fees",
    titleEn: "6. Payment Processing Fees",
    titleBn: "৬. পেমেন্ট গেটওয়ে প্রসেসিং ফি",
    contentEn: [
      "Payment processing fees collected by payment gateway operators (such as bKash, Nagad, or card aggregators) on consumer transactions are subject to those independent operators' commercial policies and are not refundable by CartX.",
    ],
    contentBn: [
      "গ্রাহকের লেনদেনে গেটওয়ে অপারেটরদের (যেমন বিকাশ বা নগদ) কর্তনকৃত ফি তাদের নিজস্ব পলিসি অনুযায়ী পরিচালিত হয় এবং তা CartX থেকে রিফান্ডযোগ্য নয়।",
    ],
  },
  {
    id: "refund-request-procedure",
    titleEn: "7. Refund Request Procedure",
    titleBn: "৭. রিফান্ড আবেদনের প্রক্রিয়া",
    contentEn: [
      "To request a refund review under qualifying technical disruption grounds, send an email to support@cartx.com with your registered store name, administrative email address, payment transaction reference, and a detailed description of the issue.",
      "Our technical operations team will review the system logs and communicate a formal decision in writing.",
    ],
    contentBn: [
      "যৌক্তিক কারিগরি কারণে রিফান্ডের আবেদন করতে রেজিস্টার্ড স্টোরের নাম, ট্রানজেকশন আইডি এবং সমস্যার বিশদ বিবরণসহ support@cartx.com-এ ইমেইল পাঠাতে হবে।",
      "আমাদের টেকনিক্যাল টিম লগ পর্যালোচনা করে লিখিতভাবে সিদ্ধান্তের বিষয়ে অবগত করবে।",
    ],
  },
  {
    id: "processing-timelines",
    titleEn: "8. Processing Timelines (Subject to Approval)",
    titleBn: "৮. রিফান্ড প্রসেসিং সময়সীমা (অনুমোদন সাপেক্ষে)",
    contentEn: [
      "If a refund is formally approved, the credit will be issued to the original payment source. Processing timelines typically range from 5 to 10 business days depending on the financial institution or mobile financial service channel.",
    ],
    contentBn: [
      "রিফান্ড অনুমোদিত হলে যে পেমেন্ট মাধ্যম থেকে অর্থ প্রদান করা হয়েছিল সেটিতেই তা ফেরত দেওয়া হয়। ব্যাংকিং বা এমএফএস চ্যানেলভেদে সাধারণত ৫ থেকে ১০ কার্যদিবস সময় লাগতে পারে।",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      titleEn="Refund & Cancellation Policy"
      titleBn="রিফান্ড ও বাতিলকরণ পলিসি"
      lastUpdated="November 2026 (Draft Working Document)"
      summaryEn="This policy provides transparent guidelines on CartX subscription renewals, account cancellations, one-time engineering scopes, and refund evaluation procedures."
      summaryBn="এই নীতিমালায় CartX সাবস্ক্রিপশন বাতিল, রিনিউয়াল, এককালীন সার্ভিস এবং রিফান্ড পর্যালোচনার সুনির্দিষ্ট নিয়মসমূহ উল্লেখ করা হয়েছে।"
      sections={SECTIONS}
      status="draft"
    />
  );
}
