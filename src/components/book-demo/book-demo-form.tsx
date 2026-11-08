"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, AlertCircle, Loader2, Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoFormState, DemoFormErrors } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    // In this frontend-only public marketing website, form submission is not connected to a backend.
    setTimeout(() => {
      setStatus("success");
      setServerMessage(
        isBn
          ? "এই ওয়েবসাইটটি একটি পাবলিক মার্কেটিং ওয়েবসাইট হিসেবে চলছে এবং ব্যাকএন্ড ডাটাবেসের সাথে সংযুক্ত নয়। আপনার ইনপুট সঠিকভাবে যাচাই করা হয়েছে, তবে কোনো তথ্য জমা বা সংরক্ষণ করা হয়নি। সরাসরি ডেমো বুক করতে দয়া করে demo@cartx.ai এ ইমেইল করুন অথবা আমাদের কল করুন।"
          : "This website operates as a frontend-only public marketing demo with no backend or database connection. Your form inputs were validated successfully, but no request was transmitted or stored. To schedule a demo with our team, please contact us directly at demo@cartx.ai."
      );
    }, 400);
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
          <Card className="rounded-3xl border border-primary/25 bg-card p-8 sm:p-12 text-center shadow-card max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Info className="size-7" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              {isBn ? "পাবলিক ডেমো নোটিশ" : "Frontend Demo Notice"}
            </CardTitle>
            <div className="mb-3">
              <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wider">
                {isBn ? "সাবমিশন ব্যাকএন্ডের সাথে সংযুক্ত নয়" : "Submission Not Connected to Backend"}
              </Badge>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto mb-6">
              {serverMessage}
            </CardDescription>
            <div>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="cursor-pointer font-semibold"
              >
                <span>{isBn ? "ফর্মে ফিরে যান" : "Back to Form"}</span>
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-7"
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
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{serverMessage}</span>
                </div>
              )}

              {/* Row 1: Full Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-fullName">
                    {isBn ? "আপনার পুরো নাম" : "Full Name"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder={isBn ? "উদা: তানভীর আহমেদ" : "e.g. Tanvir Ahmed"}
                    value={formData.fullName}
                    onChange={handleChange}
                    error={Boolean(errors.fullName)}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="demo-workEmail">
                    {isBn ? "ওয়ার্ক ইমেইল ঠিকানা" : "Work Email Address"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-workEmail"
                    name="workEmail"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    error={Boolean(errors.workEmail)}
                    aria-invalid={Boolean(errors.workEmail)}
                  />
                  {errors.workEmail && (
                    <p className="text-xs text-destructive font-medium">{errors.workEmail}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Business Name & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-businessName">
                    {isBn ? "ব্যবসা বা প্রতিষ্ঠানের নাম" : "Business Name"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="demo-businessName"
                    name="businessName"
                    type="text"
                    required
                    placeholder={isBn ? "আপনার ব্র্যান্ডের নাম" : "Your brand or store name"}
                    value={formData.businessName}
                    onChange={handleChange}
                    error={Boolean(errors.businessName)}
                    aria-invalid={Boolean(errors.businessName)}
                  />
                  {errors.businessName && (
                    <p className="text-xs text-destructive font-medium">{errors.businessName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="demo-businessCategory">
                    {isBn ? "ব্যবসার ধরন / ক্যাটাগরি" : "Business Category"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.businessCategory}
                    onValueChange={(val) => {
                      if (val) {
                        setFormData((prev) => ({ ...prev, businessCategory: val }));
                        if (errors.businessCategory) {
                          setErrors((prev) => ({ ...prev, businessCategory: undefined }));
                        }
                      }
                    }}
                  >
                    <SelectTrigger id="demo-businessCategory" className="w-full">
                      <SelectValue placeholder={isBn ? "ক্যাটাগরি নির্বাচন করুন" : "Select category"} />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_CATEGORIES.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {isBn ? cat.bn : cat.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.businessCategory && (
                    <p className="text-xs text-destructive font-medium">{errors.businessCategory}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Business Size & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-businessSize">
                    {isBn ? "ব্যবসার আকার বা ধাপ" : "Business Size"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.businessSize}
                    onValueChange={(val) => {
                      if (val) {
                        setFormData((prev) => ({ ...prev, businessSize: val }));
                        if (errors.businessSize) {
                          setErrors((prev) => ({ ...prev, businessSize: undefined }));
                        }
                      }
                    }}
                  >
                    <SelectTrigger id="demo-businessSize" className="w-full">
                      <SelectValue placeholder={isBn ? "প্রতিষ্ঠানের আকার নির্বাচন করুন" : "Select business size"} />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_SIZES.map((sz) => (
                        <SelectItem key={sz.id} value={sz.id}>
                          {isBn ? sz.bn : sz.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.businessSize && (
                    <p className="text-xs text-destructive font-medium">{errors.businessSize}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="demo-inquiryType">
                    {isBn ? "অনুসন্ধানের প্রধান বিষয়" : "Inquiry Type"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(val) => {
                      if (val) {
                        setFormData((prev) => ({ ...prev, inquiryType: val }));
                        if (errors.inquiryType) {
                          setErrors((prev) => ({ ...prev, inquiryType: undefined }));
                        }
                      }
                    }}
                  >
                    <SelectTrigger id="demo-inquiryType" className="w-full">
                      <SelectValue placeholder={isBn ? "অনুসন্ধানের ধরন নির্বাচন করুন" : "Select inquiry type"} />
                    </SelectTrigger>
                    <SelectContent>
                      {INQUIRY_TYPES.map((inq) => (
                        <SelectItem key={inq.id} value={inq.id}>
                          {isBn ? inq.bn : inq.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.inquiryType && (
                    <p className="text-xs text-destructive font-medium">{errors.inquiryType}</p>
                  )}
                </div>
              </div>

              {/* Row 4: Required Capabilities (Multi-select using shadcn Checkbox & Label) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs sm:text-sm font-semibold text-foreground">
                    {isBn
                      ? "ডেমোতে যেসব ক্যাপাবিলিটি দেখতে চান"
                      : "Required Capabilities"}{" "}
                    <span className="text-destructive">*</span>
                    <span className="text-muted-foreground font-normal ml-1">
                      ({isBn ? "একাধিক নির্বাচনযোগ্য" : "Select all that apply"})
                    </span>
                  </Label>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {formData.requiredCapabilities.length} selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {CAPABILITY_OPTIONS.map((cap) => {
                    const isChecked = formData.requiredCapabilities.includes(cap.id);
                    return (
                      <label
                        key={cap.id}
                        htmlFor={`cap-${cap.id}`}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all select-none",
                          isChecked
                            ? "border-primary bg-primary/[0.06] text-foreground shadow-2xs"
                            : "border-border bg-card hover:bg-muted/50 text-foreground/80"
                        )}
                      >
                        <span className="truncate pr-2">{isBn ? cap.bn : cap.en}</span>
                        <Checkbox
                          id={`cap-${cap.id}`}
                          checked={isChecked}
                          onCheckedChange={() => toggleCapability(cap.id)}
                          className="shrink-0"
                        />
                      </label>
                    );
                  })}
                </div>
                {errors.requiredCapabilities && (
                  <p className="text-xs text-destructive font-medium">
                    {errors.requiredCapabilities}
                  </p>
                )}
              </div>

              {/* Row 5: Preferred Contact Method & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-preferredContactMethod">
                    {isBn ? "পছন্দের যোগাযোগ মাধ্যম" : "Preferred Contact Method"}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.preferredContactMethod}
                    onValueChange={(val) => {
                      if (val === "email" || val === "phone") {
                        setFormData((prev) => ({ ...prev, preferredContactMethod: val }));
                      }
                    }}
                  >
                    <SelectTrigger id="demo-preferredContactMethod" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">{isBn ? "ইমেইল (Email)" : "Email"}</SelectItem>
                      <SelectItem value="phone">{isBn ? "ফোন / মোবাইল (Phone)" : "Phone"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="demo-phone">
                    {isBn
                      ? formData.preferredContactMethod === "phone"
                        ? "মোবাইল নম্বর *"
                        : "মোবাইল নম্বর (ঐচ্ছিক)"
                      : formData.preferredContactMethod === "phone"
                      ? "Phone Number *"
                      : "Phone Number (Optional)"}
                  </Label>
                  <Input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 6: Website URL (Optional) */}
              <div className="space-y-1.5">
                <Label htmlFor="demo-website">
                  {isBn ? "বর্তমান ওয়েবসাইট বা শপ লিংক (ঐচ্ছিক)" : "Current Website or Store Link (Optional)"}
                </Label>
                <Input
                  id="demo-website"
                  name="website"
                  type="url"
                  placeholder="https://yourstore.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Row 7: Additional Requirements Message (Optional) */}
              <div className="space-y-1.5">
                <Label htmlFor="demo-message">
                  {isBn ? "অতিরিক্ত চাহিদা বা বিশেষ প্রশ্ন (ঐচ্ছিক)" : "Additional Requirements / Message (Optional)"}
                </Label>
                <Textarea
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
                  className="resize-y min-h-24 rounded-xl"
                />
              </div>

              {/* Row 8: Privacy acknowledgement */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="demo-privacyAccepted"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({ ...prev, privacyAccepted: Boolean(checked) }));
                      if (errors.privacyAccepted) {
                        setErrors((prev) => ({ ...prev, privacyAccepted: undefined }));
                      }
                    }}
                    error={Boolean(errors.privacyAccepted)}
                    className="mt-0.5"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="demo-privacyAccepted"
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer font-normal"
                    >
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
                    </Label>
                    {errors.privacyAccepted && (
                      <p className="text-xs text-destructive font-medium">
                        {errors.privacyAccepted}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex items-center justify-between flex-wrap gap-4">
                <Button
                  type="submit"
                  size="default"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-2.5 gap-2 font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>{isBn ? "অনুরোধ জমা হচ্ছে…" : "Submitting your request…"}</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      <span>{isBn ? "ডেমোর অনুরোধ জমা দিন" : "Request a Demo"}</span>
                    </>
                  )}
                </Button>

                <span className="text-xs text-muted-foreground">
                  {isBn ? "কোনো পেমেন্ট বা বাধ্যবাধকতা নেই" : "No credit card or commitment required"}
                </span>
              </div>
            </form>
          </Card>
        )}
      </div>
    </section>
  );
}
