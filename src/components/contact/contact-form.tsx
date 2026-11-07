"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ContactFormState, ContactFormErrors } from "./types";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  initialCategory?: string;
  className?: string;
}

const INQUIRY_CATEGORIES = [
  { id: "General Inquiry", en: "General Inquiry", bn: "সাধারণ তথ্যানুসন্ধান" },
  { id: "Pricing & Sales", en: "Pricing & Sales", bn: "প্রাইসিং ও সেলস" },
  { id: "Technical Support", en: "Technical Support", bn: "কারিগরি সহায়তা" },
  { id: "Payment Integration", en: "Payment Integration", bn: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন" },
  { id: "Courier Integration", en: "Courier Integration", bn: "কুরিয়ার ইন্টিগ্রেশন" },
  { id: "White-label Mobile App", en: "White-label Mobile App", bn: "হোয়াইট-লেবেল মোবাইল অ্যাপ" },
  { id: "Partnership", en: "Partnership", bn: "অংশীদারিত্ব ও কোলাবোরেশন" },
  { id: "Other", en: "Other", bn: "অন্যান্য" },
];

export function ContactForm({ initialCategory = "General Inquiry", className }: ContactFormProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    subject: initialCategory,
    preferredContactMethod: "email",
    website: "",
    message: "",
    privacyAccepted: false,
    website_hp: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
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

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = isBn
        ? "অনুগ্রহ করে আপনার পুরো নাম লিখুন (কমপক্ষে ২ অক্ষর)।"
        : "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = isBn
        ? "অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।"
        : "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject = isBn
        ? "অনুগ্রহ করে অনুসন্ধানের ধরন নির্বাচন করুন।"
        : "Please select an inquiry category.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = isBn
        ? "অনুগ্রহ করে কমপক্ষে ১০ অক্ষরের বার্তা লিখুন।"
        : "Please enter a message with at least 10 characters.";
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
      const res = await fetch("/api/contact", {
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
              ? "বার্তা জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।"
              : "We could not submit your message. Please try again.")
        );
        return;
      }

      setStatus("success");
      setInquiryRef(data.inquiryId || "");
      setServerMessage(
        isBn
          ? "ধন্যবাদ! আপনার বার্তা সফলভাবে জমা হয়েছে। আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
          : "Thank you! Your message has been submitted successfully. Our team will follow up soon."
      );
    } catch {
      setStatus("error");
      setServerMessage(
        isBn
          ? "সার্ভারের সাথে সংযোগ স্থাপন করা যায়নি। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করে পুনরায় চেষ্টা করুন।"
          : "We could not submit your message. Please try again."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setServerMessage("");
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      subject: "General Inquiry",
      preferredContactMethod: "email",
      website: "",
      message: "",
      privacyAccepted: false,
      website_hp: "",
    });
  };

  return (
    <section
      id="contact-form"
      aria-label="Send Us a Message"
      className={cn("py-16 sm:py-24 border-b border-border bg-background transition-colors", className)}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            <span className="block text-foreground">
              {isBn ? "যোগাযোগের সহজ মাধ্যম" : "Get in Touch"}
            </span>
            <span className="block brand-gradient-text">
              {isBn ? "আমাদের একটি বার্তা পাঠান" : "Send Us a Message"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isBn
              ? "আপনার ব্যবসার প্রয়োজনীয়তা জানান, এবং আমরা আপনার প্রদত্ত যোগাযোগের মাধ্যমে উত্তর দেব।"
              : "Tell us how we can help, and we'll follow up using the contact details you provide."}
          </p>
        </ScrollReveal>

        {status === "success" ? (
          <div className="rounded-3xl border border-success/30 bg-card p-8 sm:p-12 text-center shadow-card max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="h-14 w-14 rounded-2xl bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              {isBn ? "বার্তা সফলভাবে পাঠানো হয়েছে!" : "Message Received!"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {serverMessage}
            </p>
            {inquiryRef && (
              <div className="inline-block rounded-lg bg-muted/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground mb-6 border border-border">
                {isBn ? "রেফারেন্স নম্বর: " : "Reference ID: "}
                <span className="font-bold text-foreground">{inquiryRef}</span>
              </div>
            )}
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span>{isBn ? "আরেকটি বার্তা পাঠান" : "Send Another Message"}</span>
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm space-y-6"
          >
            {/* Honeypot hidden input for spam protection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Do not fill this out</label>
              <input
                id="website_hp"
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website_hp}
                onChange={handleChange}
              />
            </div>

            {/* General Server Error Banner */}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs sm:text-sm text-destructive flex items-center gap-3"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{serverMessage}</span>
              </div>
            )}

            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "পুরো নাম *" : "Full Name *"}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder={isBn ? "উদা: তানভীর আহমেদ" : "e.g. Tanvir Ahmed"}
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.fullName ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-destructive font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={isBn ? "name@company.com" : "name@company.com"}
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors",
                    errors.email ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                  )}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive font-medium">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Company Name (Optional) & Phone Number (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="companyName" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "প্রতিষ্ঠানের নাম (ঐচ্ছিক)" : "Company / Business Name (Optional)"}
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder={isBn ? "আপনার ব্র্যান্ডের নাম" : "Your brand or store name"}
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "মোবাইল নম্বর (ঐচ্ছিক)" : "Phone Number (Optional)"}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={isBn ? "+880 1XXX-XXXXXX" : "+880 1XXX-XXXXXX"}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Inquiry Category & Preferred Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "অনুসন্ধানের বিষয় / ক্যাটাগরি *" : "Subject / Inquiry Type *"}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  {INQUIRY_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {isBn ? cat.bn : cat.en}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-destructive font-medium">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="preferredContactMethod" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {isBn ? "পছন্দের যোগাযোগ মাধ্যম" : "Preferred Contact Method"}
                </label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
                >
                  <option value="email">{isBn ? "ইমেইল (Email)" : "Email"}</option>
                  <option value="phone">{isBn ? "ফোন / মোবাইল (Phone)" : "Phone"}</option>
                </select>
              </div>
            </div>

            {/* Row 4: Website URL (Optional) */}
            <div>
              <label htmlFor="website" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                {isBn ? "বর্তমান ওয়েবসাইট / পেজ লিংক (ঐচ্ছিক)" : "Current Website or Social Page (Optional)"}
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourstore.com"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-colors"
              />
              {errors.website && (
                <p className="mt-1.5 text-xs text-destructive font-medium">
                  {errors.website}
                </p>
              )}
            </div>

            {/* Row 5: Message */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                {isBn ? "আপনার বার্তা *" : "Message *"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={
                  isBn
                    ? "আপনার ব্যবসা, প্রয়োজনীয় ফিচার বা প্রশ্ন বিস্তারিত লিখুন..."
                    : "Tell us about your store requirements, questions or timeline..."
                }
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(
                  "w-full rounded-xl border bg-background px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 shadow-xs transition-colors resize-y",
                  errors.message ? "border-destructive focus:ring-destructive/30" : "border-border focus:ring-primary"
                )}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-destructive font-medium">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Row 6: Privacy acknowledgement */}
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
                      পড়েছি এবং সম্মত হচ্ছি যে আমার প্রদত্ত তথ্যের মাধ্যমে টিম আমার সাথে যোগাযোগ করতে পারে।
                    </>
                  ) : (
                    <>
                      I acknowledge the CartX{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline font-semibold" target="_blank">
                        Privacy Policy
                      </Link>{" "}
                      and agree that my contact details will be used to respond to this inquiry.
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
                    <span>{isBn ? "বার্তা পাঠানো হচ্ছে…" : "Sending your message…"}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{isBn ? "বার্তা পাঠান" : "Send Message"}</span>
                  </>
                )}
              </button>

              <span className="text-xs text-muted-foreground">
                {isBn ? "সুরক্ষিত এসএসএল এনক্রিপ্টেড সাবমিশন" : "Secure TLS encrypted transmission"}
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

