"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, AlertCircle, Loader2, Info, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ContactFormState, ContactFormErrors } from "./types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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

  const [prevCategory, setPrevCategory] = useState(initialCategory);
  if (initialCategory !== prevCategory) {
    setPrevCategory(initialCategory);
    setFormData((prev) => ({ ...prev, subject: initialCategory }));
  }

  const [errors, setErrors] = useState<ContactFormErrors>({});
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

    // Public marketing website frontend demo verification
    setTimeout(() => {
      setStatus("success");
      setServerMessage(
        isBn
          ? "এই ওয়েবসাইটটি ব্যাকএন্ড বা ডেটাবেস সংযোগ ছাড়াই শুধুমাত্র ফ্রন্টএন্ড মোডে চলছে। আপনার বার্তাটি সফলভাবে যাচাই করা হয়েছে, তবে কোনো সার্ভারে পাঠানো হয়নি। সরাসরি যোগাযোগ করতে support@cartx.store এ ইমেইল করুন।"
          : "This website operates in frontend-only mode with no backend or database connected. Your message inputs were validated successfully, but no submission was transmitted to a server. To reach our team directly, please email support@cartx.store."
      );
    }, 400);
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

  if (status === "success") {
    return (
      <Card className={cn("border border-primary/30 bg-card p-6 sm:p-10 text-center shadow-md rounded-2xl animate-in fade-in zoom-in-95 duration-300", className)}>
        <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
          <Info className="size-7" />
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">
          {isBn ? "পাবলিক ডেমো নোটিশ" : "Frontend Demo Notice"}
        </CardTitle>
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wider">
            {isBn ? "বার্তা সাবমিশন ব্যাকএন্ডের সাথে সংযুক্ত নয়" : "Submission Not Connected to Backend"}
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
    );
  }

  return (
    <Card className={cn("border border-border/80 bg-card shadow-xs rounded-2xl p-6 sm:p-8 md:p-10", className)}>
      <CardHeader className="p-0 pb-6 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
            {isBn ? "বার্তা পাঠান" : "Send Us a Message"}
          </CardTitle>
          <Badge variant="outline" className="text-[10px] font-semibold text-primary border-primary/20 bg-primary/5">
            {isBn ? "দ্রুত রেসপন্স" : "Priority Inbox"}
          </Badge>
        </div>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {isBn
            ? "নিচের ফর্মটি পূরণ করুন, এবং আমাদের ঢাকার টিম দ্রুত আপনার সাথে যোগাযোগ করবে।"
            : "Fill out the fields below, and our team in Dhaka will respond promptly to your request."}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot hidden input */}
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
              className="rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-xs text-destructive flex items-center gap-2.5"
            >
              <AlertCircle className="size-4 shrink-0" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">
                {isBn ? "পুরো নাম" : "Full Name"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder={isBn ? "উদা: তানভীর আহমেদ" : "e.g. Tanvir Ahmed"}
                value={formData.fullName}
                onChange={handleChange}
                error={Boolean(errors.fullName)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-xs text-destructive font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">
                {isBn ? "ইমেইল ঠিকানা" : "Email Address"} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Company Name (Optional) & Phone Number (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="companyName">
                {isBn ? "প্রতিষ্ঠানের নাম (ঐচ্ছিক)" : "Company / Store (Optional)"}
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                placeholder={isBn ? "আপনার ব্র্যান্ডের নাম" : "Your brand or store name"}
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">
                {isBn ? "মোবাইল নম্বর (ঐচ্ছিক)" : "Phone Number (Optional)"}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3: Inquiry Category & Preferred Contact Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="subject">
                {isBn ? "অনুসন্ধানের বিষয় / ক্যাটাগরি" : "Subject / Inquiry Type"} <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.subject}
                onValueChange={(val) => {
                  if (val) {
                    setFormData((prev) => ({ ...prev, subject: val }));
                    if (errors.subject) {
                      setErrors((prev) => ({ ...prev, subject: undefined }));
                    }
                  }
                }}
              >
                <SelectTrigger id="subject" className="w-full">
                  <SelectValue placeholder={isBn ? "বিষয় নির্বাচন করুন" : "Select inquiry type"} />
                </SelectTrigger>
                <SelectContent>
                  {INQUIRY_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {isBn ? cat.bn : cat.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subject && (
                <p className="text-xs text-destructive font-medium">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="preferredContactMethod">
                {isBn ? "পছন্দের যোগাযোগ মাধ্যম" : "Preferred Contact Method"}
              </Label>
              <Select
                value={formData.preferredContactMethod}
                onValueChange={(val) => {
                  if (val === "email" || val === "phone") {
                    setFormData((prev) => ({ ...prev, preferredContactMethod: val }));
                  }
                }}
              >
                <SelectTrigger id="preferredContactMethod" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">{isBn ? "ইমেইল (Email)" : "Email"}</SelectItem>
                  <SelectItem value="phone">{isBn ? "ফোন / মোবাইল (Phone)" : "Phone"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4: Website URL (Optional) */}
          <div className="space-y-1.5">
            <Label htmlFor="website">
              {isBn ? "বর্তমান ওয়েবসাইট বা সোশ্যাল পেজ লিংক (ঐচ্ছিক)" : "Current Website or Social Page (Optional)"}
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://yourstore.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          {/* Row 5: Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message">
              {isBn ? "আপনার বার্তা" : "Message"} <span className="text-destructive">*</span>
            </Label>
            <Textarea
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
                "rounded-xl resize-y min-h-28",
                errors.message && "border-destructive focus-visible:ring-destructive/20"
              )}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-destructive font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Row 6: Privacy Policy Agreement */}
          <div className="pt-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="privacyAccepted"
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
                  htmlFor="privacyAccepted"
                  className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer font-normal"
                >
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
                </Label>
                {errors.privacyAccepted && (
                  <p className="text-xs text-destructive font-medium">
                    {errors.privacyAccepted}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Row 7: Action Button */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              size="default"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-7 py-2.5 gap-2 font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>{isBn ? "বার্তা পাঠানো হচ্ছে…" : "Sending your message…"}</span>
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  <span>{isBn ? "বার্তা পাঠান" : "Send Message"}</span>
                </>
              )}
            </Button>

            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Lock className="size-3 text-muted-foreground/70" />
              <span>{isBn ? "সুরক্ষিত এসএসএল এনক্রিপ্টেড সাবমিশন" : "TLS encrypted transmission"}</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
