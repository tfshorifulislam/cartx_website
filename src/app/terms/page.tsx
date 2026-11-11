import { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { getCanonicalUrl } from "@/lib/seo/site-config";

const canonical = getCanonicalUrl("/terms");

export const metadata: Metadata = {
  title: "Terms & Conditions | CartX Platform Agreement",
  description:
    "Review the Terms and Conditions governing merchant store creation, subscription billing, zero commission commitments, and acceptable use of the CartX platform.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Terms & Conditions | CartX Platform Agreement",
    description:
      "Review the Terms and Conditions governing merchant store creation, subscription billing, zero commission commitments, and acceptable use of the CartX platform.",
    url: canonical,
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    titleEn: "1. Acceptance of Terms",
    titleBn: "১. শর্তাবলীর গ্রহণযোগ্যতা",
    contentEn: [
      "By registering a merchant account, accessing the administrative dashboard, or launching a storefront on CartX ('CartX', 'the Platform', 'we', 'our'), you agree to be bound by these Terms & Conditions.",
      "If you are accepting these terms on behalf of a registered company, business partnership, or retail brand, you represent that you have legal authority to bind that entity to this agreement.",
    ],
    contentBn: [
      "একটি মার্চেন্ট অ্যাকাউন্ট তৈরি বা CartX প্ল্যাটফর্ম ব্যবহারের মাধ্যমে আপনি এই শর্তাবলী মেনে চলার আনুষ্ঠানিক সম্মতি প্রদান করছেন।",
      "আপনি যদি কোনো বাণিজ্যিক প্রতিষ্ঠান বা ব্র্যান্ডের পক্ষে এই চুক্তি গ্রহণ করেন, তবে আপনার সংশ্লিষ্ট প্রতিষ্ঠানকে বাধ্য করার আইনি ক্ষমতা রয়েছে বলে গণ্য হবে।",
    ],
  },
  {
    id: "eligibility",
    titleEn: "2. Eligibility",
    titleBn: "২. অ্যাকাউন্ট খোলার যোগ্যতা",
    contentEn: [
      "To open an active merchant account on CartX, you must be of legal age under applicable law to enter into binding agreements and operate a legitimate retail or commercial enterprise.",
      "You must not have been previously banned or terminated from the platform for fraudulent or unlawful conduct.",
    ],
    contentBn: [
      "একটি সক্রিয় স্টোর অ্যাকাউন্ট পরিচালনার জন্য আপনার আইনি প্রাপ্তবয়স্কতা এবং বৈধ ব্যবসা পরিচালনার যোগ্যতা থাকতে হবে।",
      "পূর্বে প্রতারণা বা অনিয়মের কারণে কার্টএক্স প্ল্যাটফর্ম থেকে নিষিদ্ধ কোনো ব্যক্তি বা প্রতিষ্ঠান অ্যাকাউন্ট খোলার যোগ্য নয়।",
    ],
  },
  {
    id: "account-responsibilities",
    titleEn: "3. Account Responsibilities",
    titleBn: "৩. অ্যাকাউন্ট পরিচালনা ও নিরাপত্তার দায়িত্ব",
    contentEn: [
      "Merchants are strictly responsible for safeguarding their login credentials and for all actions executed under their store administrative accounts.",
      "You agree to notify CartX immediately at support@cartx.com if you suspect unauthorized access or any credential breach concerning your account.",
    ],
    contentBn: [
      "লগইন তথ্যের গোপনীয়তা রক্ষা করা এবং অ্যাকাউন্টের মাধ্যমে সম্পন্ন হওয়া সকল কার্যক্রমের দায় সম্পূর্ণভাবে মার্চেন্টের।",
      "কোনো অননুমোদিত অ্যাক্সেস বা নিরাপত্তার ত্রুটি পরিলক্ষিত হলে অবিলম্বে support@cartx.com-এ অবহিত করতে হবে।",
    ],
  },
  {
    id: "subscription-terms",
    titleEn: "4. Subscription Terms",
    titleBn: "৪. সাবস্ক্রিপশন শর্তাবলী",
    contentEn: [
      "CartX provides tiered subscription plans (Starter, Growth, Business, and Enterprise) offering distinct catalog limits, team accounts, and infrastructure allocations as outlined on our pricing page.",
      "New store accounts may access an introductory 14-day free trial period to evaluate platform tools. No credit card is required to initiate the trial.",
    ],
    contentBn: [
      "CartX বিভিন্ন ক্যাটাগরির সাবস্ক্রিপশন প্ল্যান (Starter, Growth, Business, Enterprise) প্রদান করে যার বিশদ বিবরণ মূল্যতালিকায় অন্তর্ভুক্ত রয়েছে।",
      "নতুন স্টোরসমূহ সেবা মূল্যায়নের জন্য ১৪ দিনের ফ্রি ট্রায়াল সুবিধা উপভোগ করতে পারেন, যার জন্য অগ্রিম পেমেন্টের প্রয়োজন হয় না।",
    ],
  },
  {
    id: "acceptable-platform-use",
    titleEn: "5. Acceptable Platform Use",
    titleBn: "৫. প্ল্যাটফর্মের গ্রহণযোগ্য ব্যবহার",
    contentEn: [
      "You agree not to use CartX to distribute malicious code, probe system vulnerabilities without authorization, conduct denial-of-service disruptions, or engage in deceptive consumer trade practices.",
      "Detailed restrictions on prohibited inventory and unauthorized network activity are set forth in our Acceptable Use Policy.",
    ],
    contentBn: [
      "প্ল্যাটফর্মে ক্ষতিকর কোড ছড়ানো, বিনা অনুমতিতে নিরাপত্তা নিরীক্ষণ বা গ্রাহকদের সাথে কোনো প্রতারণামূলক কার্যকলাপ পরিচালনা করা সম্পূর্ণ নিষিদ্ধ।",
      "নিষিদ্ধ পণ্যের তালিকা ও নেটওয়ার্ক বিধিমালা আমাদের 'Acceptable Use Policy'-তে বিস্তারিত বর্ণিত হয়েছে।",
    ],
  },
  {
    id: "store-ownership-and-merchant-obligations",
    titleEn: "6. Store Ownership and Merchant Obligations",
    titleBn: "৬. স্টোরের মালিকানা ও মার্চেন্টের দায়বদ্ধতা",
    contentEn: [
      "Merchants retain full intellectual property ownership of their brand trademarks, product catalog data, media assets, and customer lists.",
      "Merchants are solely responsible for setting retail prices, accurately displaying inventory levels, fulfilling consumer orders, collecting applicable VAT/sales taxes, and resolving consumer complaints directly.",
    ],
    contentBn: [
      "মার্চেন্টরা তাদের ব্র্যান্ডের লোগো, প্রোডাক্ট ক্যাটালগ এবং কাস্টমার তালিকার শতভাগ মালিকানা বজায় রাখেন।",
      "পণ্যের সঠিক বিবরণ প্রদান, সময়মতো অর্ডার সরবরাহ, প্রযোজ্য কর প্রদান এবং গ্রাহক অভিযোগ নিষ্পত্তির সম্পূর্ণ দায়িত্ব মার্চেন্টের।",
    ],
  },
  {
    id: "payment-and-billing",
    titleEn: "7. Payment and Billing",
    titleBn: "৭. বিলিং ও প্ল্যাটফর্ম কমিশন পলিসি",
    contentEn: [
      "CartX charges 0% platform transaction commission on your store sales. You retain all revenue earned from customer orders.",
      "Subscription fees are billed in advance on monthly or annual intervals. Third-party payment gateway transaction fees and courier shipping tariffs are billed directly by respective service providers.",
    ],
    contentBn: [
      "CartX স্টোরের অর্ডারের বিক্রয়ের ওপর কোনো অতিরিক্ত কমিশন চার্জ করে না (০% প্ল্যাটফর্ম ফি)। অর্জিত সমস্ত মুনাফা সম্পূর্ণ আপনার।",
      "সাবস্ক্রিপশন ফি মাসিক বা বার্ষিক ভিত্তিতে পূর্বে পরিশোধিত হয়। পেমেন্ট গেটওয়ে এবং কুরিয়ার চার্জ সংশ্লিষ্ট সেবা প্রদানকারী সরাসরি গ্রহণ করে।",
    ],
  },
  {
    id: "suspension-and-termination",
    titleEn: "8. Suspension and Termination",
    titleBn: "৮. অ্যাকাউন্ট স্থগিতকরণ ও সমাপ্তি",
    contentEn: [
      "CartX reserves the right to suspend or terminate store access if an account violates these Terms, breaches the Acceptable Use Policy, fails to settle subscription dues, or poses a credible security or fraud risk.",
      "Merchants may cancel their subscription at any time via the admin settings panel, with access continuing through the end of the prepaid term.",
    ],
    contentBn: [
      "নিয়ম লঙ্ঘন, বকেয়া পরিশোধে ব্যর্থতা বা ক্ষতিকর কার্যকলাপের প্রমাণ পেলে সংশ্লিষ্ট স্টোর অ্যাকাউন্ট স্থগিত করার অধিকার CartX সংরক্ষণ করে।",
      "মার্চেন্টরা যেকোনো সময় অ্যাডমিন সেটিংস থেকে সাবস্ক্রিপশন বাতিল করতে পারেন এবং মেয়াদ শেষ হওয়া পর্যন্ত সেবা ব্যবহার করতে পারেন।",
    ],
  },
  {
    id: "intellectual-property",
    titleEn: "9. Intellectual Property",
    titleBn: "৯. বুদ্ধিবৃত্তিক সম্পত্তি",
    contentEn: [
      "The CartX platform software, administrative dashboards, proprietary themes, documentation, and underlying code are the intellectual property of CartX.",
      "Merchants are granted a limited, revocable, non-exclusive license to use the platform solely for the purpose of operating their authorized digital store.",
    ],
    contentBn: [
      "CartX সফটওয়্যার, ড্যাশবোর্ড ডিজাইন, অফিশিয়াল থিম এবং সংশ্লিষ্ট কোডের বুদ্ধিবৃত্তিক মালিকানা CartX-এর।",
      "অনুমোদিত স্টোর পরিচালনার উদ্দেশ্যে মার্চেন্টদের একটি সীমিত ও প্রত্যাহারযোগ্য ব্যবহারের লাইসেন্স প্রদান করা হয়।",
    ],
  },
  {
    id: "third-party-services",
    titleEn: "10. Third-Party Services",
    titleBn: "১০. তৃতীয় পক্ষের সেবাসমূহ",
    contentEn: [
      "Our platform integrates with third-party payment gateways (bKash, Nagad, SSLCOMMERZ) and logistics couriers (Steadfast, Pathao, RedX). CartX does not control and is not liable for third-party gateway downtime, delivery delays, or independent tariff adjustments.",
    ],
    contentBn: [
      "প্ল্যাটফর্মটি বিভিন্ন পেমেন্ট গেটওয়ে এবং কুরিয়ার সার্ভিসের সাথে সংযুক্ত। এসব তৃতীয় পক্ষের সার্ভার ডাউনটাইম বা ডেলিভারি বিলম্বের জন্য CartX দায়ী নয়।",
    ],
  },
  {
    id: "service-availability",
    titleEn: "11. Service Availability",
    titleBn: "১১. সেবার প্রাপ্যতা ও রক্ষণাবেক্ষণ",
    contentEn: [
      "We strive to maintain reliable platform uptime; however, CartX does not warrant uninterrupted, error-free operations. Routine maintenance windows and system upgrades are scheduled during off-peak hours whenever practical.",
    ],
    contentBn: [
      "আমরা প্ল্যাটফর্মের সার্বক্ষণিক সচলতা নিশ্চিত করার প্রচেষ্টা চালাই, তবে নিরবচ্ছিন্ন বা ত্রুটিমুক্ত সেবার সম্পূর্ণ ওয়ারেন্টি প্রযোজ্য নয়। প্রয়োজনীয় রক্ষণাবেক্ষণ যথাসম্ভব অফ-পিক সময়ে সম্পন্ন করা হয়।",
    ],
  },
  {
    id: "liability-limitations",
    titleEn: "12. Liability Limitations",
    titleBn: "১২. দায়বদ্ধতার সীমাবদ্ধতা",
    contentEn: [
      "To the maximum extent permitted by applicable law, CartX shall not be liable for indirect, incidental, punitive, or consequential damages resulting from store operation, inventory shortfalls, or third-party courier handling.",
      "In all events, CartX's total cumulative liability under this agreement is limited to the subscription fees paid by the merchant in the three (3) months preceding the event giving rise to liability.",
    ],
    contentBn: [
      "প্রযোজ্য আইনের অধীনে CartX কোনো পরোক্ষ, আনুষঙ্গিক বা ব্যবসায়িক ক্ষতির জন্য দায়ী থাকবে না।",
      "যেকোনো পরিস্থিতিতে CartX-এর মোট দায়বদ্ধতা সংশ্লিষ্ট ঘটনার পূর্ববর্তী তিন (৩) মাসে মার্চেন্ট কর্তৃক প্রদত্ত সাবস্ক্রিপশন ফির মধ্যে সীমাবদ্ধ থাকবে।",
    ],
  },
  {
    id: "dispute-handling",
    titleEn: "13. Dispute Handling",
    titleBn: "১৩. বিরোধ নিষ্পত্তি",
    contentEn: [
      "In the event of any operational disagreement or contractual dispute arising out of this agreement, the parties agree to engage in good-faith negotiations to resolve the issue informally.",
      "Final governing legal terms, jurisdiction, and arbitration forums will be designated upon formal legal ratification.",
    ],
    contentBn: [
      "চুক্তি সংক্রান্ত যেকোনো বিরোধ দেখা দিলে উভয় পক্ষ পারস্পরিক আলোচনার মাধ্যমে তা শান্তিপূর্ণভাবে নিষ্পত্তির প্রচেষ্টা চালাবে।",
      "আইনগত আনুষ্ঠানিক অনুমোদনের পর প্রযোজ্য বিচারিক এখতিয়ার নির্ধারণ করা হবে।",
    ],
  },
  {
    id: "contact-information",
    titleEn: "14. Contact Information",
    titleBn: "১৪. যোগাযোগের ঠিকানা",
    contentEn: [
      "For contractual inquiries, policy notices, or legal questions concerning these Terms, please contact our team at support@cartx.com.",
    ],
    contentBn: [
      "চুক্তির শর্তাবলী বা আইনি প্রশ্ন সংক্রান্ত যেকোনো বিষয়ে আমাদের সাথে support@cartx.com-এ যোগাযোগ করুন।",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      titleEn="Terms & Conditions"
      titleBn="ব্যবহারের শর্তাবলী"
      lastUpdated="November 2026 (Draft Working Document)"
      summaryEn="These Terms & Conditions constitute the baseline operational agreement between CartX and merchants operating digital stores on our e-commerce infrastructure."
      summaryBn="এই ব্যবহারের শর্তাবলী CartX প্ল্যাটফর্মে স্টোর পরিচালনাকারী মার্চেন্টদের সাথে মৌলিক পরিচালন চুক্তি গঠন করে।"
      sections={SECTIONS}
      status="draft"
    />
  );
}
