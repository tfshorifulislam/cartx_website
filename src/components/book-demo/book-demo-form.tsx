"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoFormState, DemoFormErrors } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const BUSINESS_CATEGORIES = [
  { id: "Fashion & Apparel", en: "Fashion & Apparel", bn: "ফ্যাশন ও পোশাক" },
  { id: "Electronics", en: "Electronics & Gadgets", bn: "ইলেকট্রনিক্স ও গ্যাজেট" },
  { id: "Beauty & Cosmetics", en: "Beauty & Cosmetics", bn: "সৌন্দর্য ও প্রসাধন" },
  { id: "Grocery & Food", en: "Grocery & Food", bn: "গ্রোসারি ও খাদ্যপণ্য" },
  { id: "Home & Lifestyle", en: "Home & Lifestyle", bn: "হোম ও লাইফস্টাইল" },
  { id: "Books & Stationery", en: "Books & Stationery", bn: "বই ও স্টেশনারি" },
  { id: "Other", en: "Other Vertical", bn: "অন্যান্য ক্যাটাগরি" },
];

const BUSINESS_SIZES = [
  { id: "Starting a New Business", en: "Starting a New Business", bn: "নতুন ব্যবসা শুরু করছি" },
  { id: "Small Business", en: "Small Business (1–5 Team members)", bn: "ছোট ব্যবসা (১–৫ জন টিম)" },
  { id: "Growing Business", en: "Growing Business (6–20 Team members)", bn: "ক্রমবর্ধমান ব্যবসা (৬–২০ জন)" },
  { id: "Established Business", en: "Established Business (20+ Team members)", bn: "প্রতিষ্ঠিত ব্র্যান্ড (২০+ জন)" },
  { id: "Enterprise", en: "Enterprise / High-volume Retail", bn: "এন্টারপ্রাইজ / বৃহদাকার রিটেইল" },
];

const INQUIRY_TYPES = [
  { id: "General Product Demo", en: "General Product Demo", bn: "সাধারণ প্রোডাক্ট ডেমো" },
  { id: "Pricing & Sales", en: "Pricing & Plan Consultation", bn: "প্রাইসিং ও প্ল্যান পরামর্শ" },
  { id: "Enterprise Inquiry", en: "Enterprise Customization", bn: "এন্টারপ্রাইজ কাস্টমাইজেশন" },
  { id: "White-label Mobile App", en: "White-label Mobile App Consultation", bn: "হোয়াইট-লেবেল মোবাইল অ্যাপ" },
  { id: "Payment Integration", en: "Payment Gateway Questions", bn: "পেমেন্ট গেটওয়ে সংক্রান্ত" },
  { id: "Courier Integration", en: "Courier Delivery Operations", bn: "কুরিয়ার ও ডেলিভারি অপারেশন" },
  { id: "Partnership", en: "Agency / Technology Partnership", bn: "এজেন্সি বা টেক পার্টনারশিপ" },
  { id: "Other", en: "Other Inquiry", bn: "অন্যান্য" },
];

const CAPABILITY_OPTIONS = [
  { id: "Storefront", en: "Storefront & Themes", bn: "স্টোরফ্রন্ট ও থিম" },
  { id: "Product Management", en: "Product & Variants", bn: "প্রোডাক্ট ও ভ্যারিয়েন্ট" },
  { id: "Order Management", en: "Order Management", bn: "অর্ডার ম্যানেজমেন্ট" },
  { id: "Inventory", en: "Inventory Control", bn: "ইনভেন্টরি কন্ট্রোল" },
  { id: "Payments", en: "bKash & Card Payments", bn: "বিকাশ ও কার্ড পেমেন্ট" },
  { id: "Courier / Delivery", en: "Courier Integrations", bn: "কুরিয়ার ইন্টিগ্রেশন" },
  { id: "Analytics", en: "Business Analytics", bn: "রিপোর্ট ও অ্যানালিটিক্স" },
  { id: "Mobile Apps", en: "White-label Mobile Apps", bn: "মোবাইল শপিং অ্যাপ" },
  { id: "Integrations", en: "Third-party APIs", bn: "এপিআই ও ইন্টিগ্রেশন" },
  { id: "Other", en: "Other Capabilities", bn: "অন্যান্য প্রয়োজনীয়তা" },
];

export function BookDemoForm({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [formData, setFormData] = useState<DemoFormState>({
    fullName: "",
    workEmail: "",
    businessName: "",
    businessCategory: "Fashion & Apparel",
    businessSize: "Growing Business",
    inquiryType: "General Product Demo",
    requiredCapabilities: ["Storefront", "Payments", "Courier / Delivery"],
    preferredContactMethod: "email",
    phone: "",
    website: "",
    message: "",
    privacyAccepted: false,
    website_hp: "",
  });

  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [inquiryRef, setInquiryRef] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof DemoFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleCapability = (capId: string) => {
    setFormData((prev) => {
      const exists = prev.requiredCapabilities.includes(capId);
      const updated = exists
        ? prev.requiredCapabilities.filter((c) => c !== capId)
        : [...prev.requiredCapabilities, capId];
      return { ...prev, requiredCapabilities: updated };
    });

    if (errors.requiredCapabilities) {
      setErrors((prev) => ({ ...prev, requiredCapabilities: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: DemoFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = isBn
        ? "অনুগ্রহ করে আপনার পুরো নাম লিখুন।"
        : "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim() || !emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = isBn
        ? "অনুগ্রহ করে একটি সঠিক বিজনেস ইমেইল ঠিকানা দিন।"
        : "Please enter a valid work email address.";
    }

    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      newErrors.businessName = isBn
        ? "অনুগ্রহ করে আপনার প্রতিষ্ঠানের নাম লিখুন।"
        : "Please enter your business or company name.";
    }

    if (!formData.businessCategory) {
      newErrors.businessCategory = isBn
        ? "ব্যবসায়িক ক্যাটাগরি নির্বাচন করুন।"
        : "Please select a business category.";
    }

    if (!formData.businessSize) {
      newErrors.businessSize = isBn
        ? "প্রতিষ্ঠানের আকার নির্বাচন করুন।"
        : "Please select business size.";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = isBn
        ? "অনুসন্ধানের ধরন নির্বাচন করুন।"
        : "Please select inquiry type.";
    }

    if (formData.requiredCapabilities.length === 0) {
      newErrors.requiredCapabilities = isBn
        ? "কমপক্ষে একটি ফিচার বা ক্যাপাবিলিটি নির্বাচন করুন।"
        : "Please select at least one capability you are looking to explore.";
    }

    if (formData.preferredContactMethod === "phone" && (!formData.phone.trim() || formData.phone.trim().length < 7)) {
      newErrors.phone = isBn
        ? "ফোন যোগাযোগের জন্য একটি সঠিক মোবাইল নম্বর প্রয়োজন।"
        : "Phone number is required when phone is your preferred contact method.";
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = isBn
        ? "এগিয়ে যেতে প্রাইভেসী পলিসি সম্মতি প্রয়োজন।"
        : "You must acknowledge the privacy notice to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerMessage(
          data.message ||
            (isBn
              ? "অনুরোধ জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
              : "We could not submit your request. Please try again.")
        );
        return;
      }

      setStatus("success");
      setInquiryRef(data.inquiryId || "");
      setServerMessage(
        isBn
          ? "ধন্যবাদ! আপনার ডেমো অনুরোধ সফলভাবে জমা হয়েছে। আমাদের টিম আপনার চাহিদা পর্যালোচনা করে যোগাযোগ করবে।"
          : "Thank you! Your demo request has been submitted successfully. Our team will review your requirements and follow up."
      );
    } catch {
      setStatus("error");
      setServerMessage(
        isBn
          ? "সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।"
          : "We could not submit your request. Please try again."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setServerMessage("");
    setFormData({
      fullName: "",
      workEmail: "",
      businessName: "",
      businessCategory: "Fashion & Apparel",
      businessSize: "Growing Business",
      inquiryType: "General Product Demo",
      requiredCapabilities: ["Storefront", "Payments", "Courier / Delivery"],
      preferredContactMethod: "email",
      phone: "",
      website: "",
      message: "",
      privacyAccepted: false,
      website_hp: "",
    });
  };

  return (
    <section
      id="demo-form"
      aria-label="Demo Request Form"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "লাইভ ডেমো বুক করুন" : "Schedule a Live Consultation"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "আপনার ব্যবসা সম্পর্কে জানান" : "Tell Us About Your Business"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isBn
              ? "কয়েকটি বিবরণ শেয়ার করুন যাতে আমরা আপনার নির্দিষ্ট প্রয়োজনীয়তা সঠিকভাবে বুঝতে পারি।"
              : "Share a few details so we can better understand your requirements and prepare a relevant demo."}
          </p>
        </ScrollReveal>

        {status === "success" ? (
          <div className="rounded-3xl border border-success/30 bg-card p-8 sm:p-12 text-center shadow-card max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="h-14 w-14 rounded-2xl bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              {isBn ? "ডেমো অনুরোধ সফলভাবে জমা হয়েছে!" : "Demo Request Submitted!"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {serverMessage}
            </p>
            {inquiryRef && (
              <div className="inline-block rounded-lg bg-muted/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground mb-6 border border-border">
                {isBn ? "রেফারেন্স নম্বর: " : "Request Reference ID: "}
                <span className="font-bold text-foreground">{inquiryRef}</span>
              </div>
            )}
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span>{isBn ? "আরেকটি অনুরোধ করুন" : "Submit Another Request"}</span>
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm space-y-7"
          >
            {/* Honeypot hidden input */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="demo_website_hp">Do not fill this</label>
              <input
                id="demo_website_hp"
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website_hp}
                onChange={handleChange}
              />
            </div>

            {/* Error Banner */}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs sm:text-sm text-destructive flex items-center gap-3"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{serverMessage}</span>
              </div>
            )}

            {/* Row 1: Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="demo-fullName" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "আপনার পুরো নাম *" : "Full Name *"}
                </label>
                <input
                  id="demo-fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder={isBn ? "উদা: তানভীর আহমেদ" : "e.g. Tanvir Ahmed"}
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.fullName ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-destructive font-medium">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="demo-workEmail" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "ওয়ার্ক ইমেইল ঠিকানা *" : "Work Email Address *"}
                </label>
                <input
                  id="demo-workEmail"
                  name="workEmail"
                  type="email"
                  required
                  placeholder={isBn ? "you@company.com" : "you@company.com"}
                  value={formData.workEmail}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.workEmail)}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.workEmail ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.workEmail && (
                  <p className="mt-1.5 text-xs text-destructive font-medium">{errors.workEmail}</p>
                )}
              </div>
            </div>

            {/* Row 2: Business Name & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="demo-businessName" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "ব্যবসা বা প্রতিষ্ঠানের নাম *" : "Business Name *"}
                </label>
                <input
                  id="demo-businessName"
                  name="businessName"
                  type="text"
                  required
                  placeholder={isBn ? "আপনার ব্র্যান্ডের নাম" : "Your brand or store name"}
                  value={formData.businessName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.businessName)}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.businessName ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.businessName && (
                  <p className="mt-1.5 text-xs text-destructive font-medium">{errors.businessName}</p>
                )}
              </div>

              <div>
                <label htmlFor="demo-businessCategory" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "ব্যবসার ধরন / ক্যাটাগরি *" : "Business Category *"}
                </label>
                <select
                  id="demo-businessCategory"
                  name="businessCategory"
                  required
                  value={formData.businessCategory}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {isBn ? cat.bn : cat.en}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Business Size & Inquiry Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="demo-businessSize" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "ব্যবসার আকার বা ধাপ *" : "Business Size *"}
                </label>
                <select
                  id="demo-businessSize"
                  name="businessSize"
                  required
                  value={formData.businessSize}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  {BUSINESS_SIZES.map((sz) => (
                    <option key={sz.id} value={sz.id}>
                      {isBn ? sz.bn : sz.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="demo-inquiryType" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "অনুসন্ধানের প্রধান বিষয় *" : "Inquiry Type *"}
                </label>
                <select
                  id="demo-inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  {INQUIRY_TYPES.map((inq) => (
                    <option key={inq.id} value={inq.id}>
                      {isBn ? inq.bn : inq.en}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Required Capabilities (Multi-select Accessible Chips) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs sm:text-sm font-semibold text-foreground">
                  {isBn
                    ? "ডেমোতে যেসব ক্যাপাবিলিটি দেখতে চান * (একাধিক নির্বাচনযোগ্য)"
                    : "Required Capabilities * (Select all that apply)"}
                </label>
                <span className="text-[11px] text-muted-foreground font-mono">
                  {formData.requiredCapabilities.length} selected
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CAPABILITY_OPTIONS.map((cap) => {
                  const isSelected = formData.requiredCapabilities.includes(cap.id);
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => toggleCapability(cap.id)}
                      className={cn(
                        "text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between gap-2",
                        isSelected
                          ? "border-primary bg-primary/[0.08] text-primary shadow-xs"
                          : "border-border bg-background text-foreground/80 hover:bg-muted/50"
                      )}
                    >
                      <span className="truncate">{isBn ? cap.bn : cap.en}</span>
                      <div
                        className={cn(
                          "h-4 w-4 rounded-md border flex items-center justify-center shrink-0 transition-colors",
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-border bg-card"
                        )}
                      >
                        {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.requiredCapabilities && (
                <p className="mt-1.5 text-xs text-destructive font-medium">
                  {errors.requiredCapabilities}
                </p>
              )}
            </div>

            {/* Row 5: Preferred Contact Method & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="demo-preferredContactMethod" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "পছন্দের যোগাযোগ মাধ্যম *" : "Preferred Contact Method *"}
                </label>
                <select
                  id="demo-preferredContactMethod"
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  <option value="email">{isBn ? "ইমেইল (Email)" : "Email"}</option>
                  <option value="phone">{isBn ? "ফোন / মোবাইল (Phone)" : "Phone"}</option>
                </select>
              </div>

              <div>
                <label htmlFor="demo-phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn
                    ? formData.preferredContactMethod === "phone"
                      ? "মোবাইল নম্বর *"
                      : "মোবাইল নম্বর (ঐচ্ছিক)"
                    : formData.preferredContactMethod === "phone"
                    ? "Phone Number *"
                    : "Phone Number (Optional)"}
                </label>
                <input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  placeholder={isBn ? "+880 1XXX-XXXXXX" : "+880 1XXX-XXXXXX"}
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.phone ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-destructive font-medium">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Row 6: Website URL (Optional) */}
            <div>
              <label htmlFor="demo-website" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                {isBn ? "বর্তমান ওয়েবসাইট বা শপ লিংক (ঐচ্ছিক)" : "Current Website or Store Link (Optional)"}
              </label>
              <input
                id="demo-website"
                name="website"
                type="url"
                placeholder="https://yourstore.com"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
              />
            </div>

            {/* Row 7: Additional Requirements Message (Optional) */}
            <div>
              <label htmlFor="demo-message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                {isBn ? "অতিরিক্ত চাহিদা বা বিশেষ প্রশ্ন (ঐচ্ছিক)" : "Additional Requirements / Message (Optional)"}
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={4}
                placeholder={
                  isBn
                    ? "আপনার বর্তমান অর্ডার ভলিউম, বিশেষ ইন্টিগ্রেশন বা কোনো নির্দিষ্ট চাহিদা থাকলে লিখুন..."
                    : "Share details on your current order volume, specific requirements, or rollout timeline..."
                }
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors resize-y"
              />
            </div>

            {/* Row 8: Privacy acknowledgement */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isBn ? (
                    <>
                      আমি কার্টএক্স-এর{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline font-semibold" target="_blank">
                        গোপনীয়তা নীতি (Privacy Policy)
                      </Link>{" "}
                      পড়েছি এবং সম্মত হচ্ছি যে আমার প্রদত্ত তথ্যের মাধ্যমে টিম ডেমো সমন্বয় করতে পারে।
                    </>
                  ) : (
                    <>
                      I acknowledge the CartX{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline font-semibold" target="_blank">
                        Privacy Policy
                      </Link>{" "}
                      and agree that my submitted information will be used to coordinate this demo.
                    </>
                  )}
                </span>
              </label>
              {errors.privacyAccepted && (
                <p className="mt-1.5 text-xs text-destructive font-medium pl-7">
                  {errors.privacyAccepted}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{isBn ? "অনুরোধ জমা হচ্ছে…" : "Submitting your request…"}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{isBn ? "ডেমোর অনুরোধ জমা দিন" : "Request a Demo"}</span>
                  </>
                )}
              </button>

              <span className="text-xs text-muted-foreground">
                {isBn ? "কোনো পেমেন্ট বা বাধ্যবাধকতা নেই" : "No credit card or commitment required"}
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

