import { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/privacy-policy");

export const metadata: Metadata = {
  title: "Privacy Policy | CartX E-Commerce Platform",
  description:
    "Learn how CartX handles merchant account information, customer checkout data processed on behalf of stores, payment data flows, and platform security.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Privacy Policy | CartX E-Commerce Platform",
    description:
      "Learn how CartX handles merchant account information, customer checkout data processed on behalf of stores, payment data flows, and platform security.",
    url: canonical,
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "introduction-and-scope",
    titleEn: "1. Introduction and Scope",
    titleBn: "১. ভূমিকা ও পরিধি",
    contentEn: [
      "This Privacy Policy outlines how the CartX platform ('CartX', 'we', 'our', 'us') processes and protects information when merchants and visitors use our public website, subscription services, and commerce infrastructure.",
      "CartX operates as an e-commerce SaaS platform providing hosted digital storefronts, administrative tooling, and operational integrations for independent retailers and merchants.",
    ],
    contentBn: [
      "এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে যে কীভাবে CartX প্ল্যাটফর্ম মার্চেন্ট এবং ওয়েবসাইটের ব্যবহারকারীদের তথ্য প্রক্রিয়া ও সংরক্ষণ করে।",
      "CartX একটি ই-কমার্স SaaS প্ল্যাটফর্ম যা অনলাইন স্টোরফ্রন্ট, অ্যাডমিন ড্যাশবোর্ড এবং ব্যবসায়িক ইন্টিগ্রেশন সেবা প্রদান করে।",
    ],
  },
  {
    id: "information-collected",
    titleEn: "2. Information Collected",
    titleBn: "২. সংগৃহীত তথ্যাদি",
    contentEn: [
      "We collect information necessary to deliver platform services, communicate with account holders, maintain secure tenant sessions, and fulfill merchant customer support inquiries.",
      "Information is gathered directly from account holders during registration, demo requests, contact inquiries, and through essential technical session tokens during platform interaction.",
    ],
    contentBn: [
      "প্ল্যাটফর্ম সেবা পরিচালনা, অ্যাকাউন্ট হোল্ডারদের সাথে যোগাযোগ, সিকিউর সেশন নিশ্চিতকরণ এবং কাস্টমার সাপোর্ট প্রদানের জন্য প্রয়োজনীয় তথ্য সংগ্রহ করা হয়।",
      "অ্যাকাউন্ট তৈরি, ডেমো অনুরোধ, যোগাযোগের ফরম পূরণ এবং ব্রাউজিং সেশনের মাধ্যমে এই তথ্যসমূহ সংগৃহীত হয়।",
    ],
  },
  {
    id: "account-and-business-data",
    titleEn: "3. Account and Business Data",
    titleBn: "৩. মার্চেন্ট অ্যাকাউন্ট ও ব্যবসায়িক তথ্য",
    contentEn: [
      "To establish and manage a merchant store account, CartX processes business details such as full administrative contact names, verified work email addresses, business phone numbers, store names, trade categories, and billing preference selections.",
      "Merchants maintain direct control over their catalog assets, pricing records, promotional banners, and store configuration settings through the merchant control panel.",
    ],
    contentBn: [
      "মার্চেন্ট স্টোর অ্যাকাউন্ট পরিচালনার জন্য প্রশাসনিক যোগাযোগের নাম, ভেরিফায়েড ইমেইল, মোবাইল নম্বর, স্টোরের নাম, ক্যাটাগরি এবং বিলিং সম্পর্কিত তথ্য প্রক্রিয়া করা হয়।",
      "মার্চেন্টরা তাদের অ্যাডমিন প্যানেলের মাধ্যমে প্রোডাক্ট ক্যাটালগ, মূল্যতালিকা এবং স্টোর কনফিগারেশনের সম্পূর্ণ নিয়ন্ত্রণ বজায় রাখেন।",
    ],
  },
  {
    id: "customer-data-processed-by-merchants",
    titleEn: "4. Customer Data Processed by Merchants",
    titleBn: "৪. মার্চেন্টের পক্ষ থেকে প্রক্রিয়াধীন গ্রাহক তথ্য",
    contentEn: [
      "When customers place orders through a merchant storefront, CartX serves as a technical data processor on behalf of the store owner. Customer checkout information—such as recipient names, shipping addresses, phone numbers, and purchased line items—is stored solely to execute order fulfillment and courier dispatch.",
      "Each merchant is the legal data controller of their end-customer data and is responsible for providing their own store privacy policies and honoring consumer privacy obligations.",
    ],
    contentBn: [
      "কোনো গ্রাহক যখন মার্চেন্টের স্টোরফ্রন্টে অর্ডার করেন, তখন CartX প্রযুক্তিগত প্রসেসর হিসেবে কাজ করে। গ্রাহকের নাম, ডেলিভারি ঠিকানা, ফোন নম্বর এবং অর্ডারের বিবরণ শুধুমাত্র ডেলিভারি সম্পন্ন করার জন্য সংরক্ষিত হয়।",
      "প্রতিটি মার্চেন্ট তাদের ক্রেতাদের তথ্যের নিয়ন্ত্রক এবং নিজস্ব স্টোর প্রাইভেসি পলিসি প্রদর্শনের জন্য দায়ী।",
    ],
  },
  {
    id: "cookies-and-analytics",
    titleEn: "5. Cookies and Analytics",
    titleBn: "৫. কুকিজ ও পারফরম্যান্স অ্যানালিটিক্স",
    contentEn: [
      "CartX uses essential session cookies and local storage tokens to preserve language selections (English/Bangla), protect against cross-site request forgery (CSRF), and maintain secure merchant authentication sessions.",
      "We may collect aggregated, non-personally identifiable telemetry regarding page rendering speeds and server response latencies to optimize platform infrastructure performance across regional networks.",
    ],
    contentBn: [
      "ভাষা পছন্দ (বাংলা/ইংরেজি), নিরাপত্তা টোকেন এবং অ্যাডমিন সেশন সচল রাখার জন্য CartX প্রয়োজনীয় কুকিজ ও ব্রাউজার স্টোরেজ ব্যবহার করে।",
      "সার্ভার স্পিড ও অপ্টিমাইজেশনের জন্য সার্বিক পারফরম্যান্সের অজ্ঞাতনামা প্রযুক্তিগত টেলিমেট্রি সংগ্রহ করা হতে পারে।",
    ],
  },
  {
    id: "payment-provider-data-flows",
    titleEn: "6. Payment Provider Data Flows",
    titleBn: "৬. পেমেন্ট গেটওয়ে সংক্রান্ত ডেটা প্রবাহ",
    contentEn: [
      "CartX does not process, capture, or store sensitive credit or debit card numbers, CVVs, or mobile banking PINs on its application servers.",
      "When online checkouts occur via bKash, Nagad, or SSLCOMMERZ, customers are redirected or securely connected to licensed payment gateways. CartX receives only verified transaction reference numbers, amounts, and execution statuses required to update store order records.",
    ],
    contentBn: [
      "CartX নিজস্ব সার্ভারে কোনো ক্রেডিট/ডেবিট কার্ড নম্বর, CVV কিংবা মোবাইল ব্যাংকিং পিন কোড সংরক্ষণ বা প্রক্রিয়া করে না।",
      "বিকাশ, নগদ বা এসএসএলকমার্জ পেমেন্টের সময় গ্রাহককে সংশ্লিষ্ট অনুমোদিত গেটওয়েতে রিডাইরেক্ট করা হয়। CartX শুধুমাত্র ট্রানজেকশন আইডি এবং স্ট্যাটাস রেকর্ড হিসেবে গ্রহণ করে।",
    ],
  },
  {
    id: "third-party-integrations",
    titleEn: "7. Third-Party Integrations",
    titleBn: "৭. তৃতীয় পক্ষের ইন্টিগ্রেশন ও লজিস্টিকস",
    contentEn: [
      "Merchants may configure direct connections with courier partners (such as Steadfast, Pathao Courier, RedX) and third-party tools. To generate consignment barcodes, CartX securely transmits recipient addresses and package specifications to the merchant's authenticated courier API.",
      "Third-party integrations operate under their respective independent terms and privacy frameworks.",
    ],
    contentBn: [
      "মার্চেন্টরা স্টোরের সাথে স্টেডফাস্ট, পাঠাও কিংবা রেডএক্স কুরিয়ার যুক্ত করতে পারেন। পার্সেল বুকিংয়ের সময় শুধুমাত্র প্রয়োজনীয় ডেলিভারি তথ্য সংশ্লিষ্ট কুরিয়ার এপিআইতে পাঠানো হয়।",
      "তৃতীয় পক্ষের সার্ভিসগুলো তাদের নিজস্ব নীতিমালা এবং শর্তাবলী অনুযায়ী পরিচালিত হয়।",
    ],
  },
  {
    id: "data-storage-and-security",
    titleEn: "8. Data Storage and Security",
    titleBn: "৮. তথ্য সংরক্ষণ ও নিরাপত্তা ব্যবস্থা",
    contentEn: [
      "CartX employs logical tenant isolation to ensure that one merchant store's database cannot be viewed, accessed, or queried by other stores.",
      "Platform communication is encrypted in transit using industry-standard TLS (Transport Layer Security). Production database systems undergo automated snapshot backups to safeguard against accidental operational data loss.",
    ],
    contentBn: [
      "লজিক্যাল আইসোলেশনের মাধ্যমে এক স্টোরের ডেটা অন্য স্টোর থেকে সম্পূর্ণ পৃথক রাখা হয়।",
      "সমস্ত ট্র্যাফিক শিল্পমানের TLS এনক্রিপশনের মাধ্যমে স্থানান্তরিত হয় এবং তথ্য সুরক্ষায় স্বয়ংক্রিয় ব্যাকআপ ব্যবস্থা কার্যকর থাকে।",
    ],
  },
  {
    id: "data-retention-and-deletion",
    titleEn: "9. Data Retention and Deletion",
    titleBn: "৯. ডেটা সংরক্ষণের মেয়াদ ও স্থায়ী অপসারণ",
    contentEn: [
      "Account and store data is retained for the active duration of the merchant's subscription. Upon formal store cancellation or service closure, operational databases are purged according to platform archiving schedules unless required for legal compliance or fraud prevention.",
      "Merchants may request full export of product catalog spreadsheets and customer order records through standard CSV download utilities at any time.",
    ],
    contentBn: [
      "সাবস্ক্রিপশন সক্রিয় থাকা অবস্থায় স্টোরের তথ্য সংরক্ষিত থাকে। সাবস্ক্রিপশন বাতিল বা অ্যাকাউন্ট ক্লোজ করার পর নির্ধারিত আর্কাভিং পলিসি অনুযায়ী ডেটা অপসারণ করা হয়।",
      "মার্চেন্টরা যেকোনো সময় ক্যাটালগ ও অর্ডার ডাটা এক্সপোর্ট করে নিজেদের কাছে সংরক্ষণ করতে পারেন।",
    ],
  },
  {
    id: "user-rights-and-contact-process",
    titleEn: "10. User Rights and Contact Process",
    titleBn: "১০. ব্যবহারকারীর অধিকার ও যোগাযোগ প্রক্রিয়া",
    contentEn: [
      "Authorized account owners may review, modify, or correct administrative profile details directly in the store settings panel. For inquiries regarding specific data processing activities or to request account termination, merchants may reach out to support@cartx.com.",
      "Customers of individual merchant storefronts should submit data access or correction requests directly to the merchant from whom they made their purchase.",
    ],
    contentBn: [
      "অ্যাকাউন্টের মালিকরা অ্যাডমিন প্যানেল থেকে তথ্য হালনাগাদ করতে পারেন। অ্যাকাউন্ট স্থায়ীভাবে মুছে ফেলা বা তথ্য সম্পর্কিত অনুসন্ধানের জন্য support@cartx.com-এ যোগাযোগ করা যাবে।",
      "ব্যক্তিগত স্টোরের ক্রেতাদের তথ্যের অধিকার সংক্রান্ত যেকোনো অনুরোধ সংশ্লিষ্ট স্টোর মালিকের নিকট দাখিল করতে হবে।",
    ],
  },
  {
    id: "policy-updates",
    titleEn: "11. Policy Updates",
    titleBn: "১১. পলিসি হালনাগাদকরণ",
    contentEn: [
      "We may revise this Privacy Policy periodically to reflect enhancements to our commerce software, introduction of new integration capabilities, or changes in applicable regulatory requirements.",
      "When meaningful operational revisions occur, the updated policy date will be displayed at the top of this document, and registered merchants will receive notification through platform channels where appropriate.",
    ],
    contentBn: [
      "প্ল্যাটফর্মের নতুন ফিচার বা আইনগত পরিবর্তনের সাথে সামঞ্জস্য রেখে এই গোপনীয়তা নীতি সময়ে সময়ে হালনাগাদ করা হতে পারে।",
      "কোনো গুরুত্বপূর্ণ পরিবর্তন সাধিত হলে এই পৃষ্ঠার শীর্ষে আপডেটের তারিখ প্রদর্শিত হবে এবং প্রয়োজনে মার্চেন্টদের নোটিফিকেশন প্রদান করা হবে।",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      titleEn="Privacy Policy"
      titleBn="গোপনীয়তা নীতি"
      lastUpdated="November 2026 (Draft Working Document)"
      summaryEn="This Privacy Policy outlines how CartX processes administrative account information, facilitates secure payment flows, and manages customer order data processed on behalf of merchants."
      summaryBn="এই গোপনীয়তা নীতিতে ব্যাখ্যা করা হয়েছে যে কীভাবে CartX মার্চেন্টদের অ্যাকাউন্ট তথ্য, পেমেন্ট ডাটা প্রবাহ এবং স্টোরফ্রন্টের গ্রাহক তথ্য দায়িত্বশীলতার সাথে প্রক্রিয়া করে।"
      sections={SECTIONS}
      status="draft"
    />
  );
}
