"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export function ProductCheckoutPreview({ className }: { className?: string }) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("Charcoal");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeStep, setActiveStep] = useState<
    "product" | "checkout" | "success"
  >("product");
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");

  const productPrice = 2450;
  const deliveryFee = 60;
  const totalPrice = productPrice * quantity + deliveryFee;

  const handleReset = () => {
    setActiveStep("product");
    setQuantity(1);
    setSelectedSize("M");
  };

  return (
    <section
      id="checkout-preview"
      aria-label="Product and Checkout Flow Preview"
      className={cn(
        "py-16 sm:py-24 border-b border-border bg-card/30 transition-colors",
        className,
      )}
    >
      <div className="container mx-auto">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>{isBn ? "চেকআউট প্রিভিউ" : "Checkout Flow Preview"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              <span className="block text-foreground">
                {isBn ? "মসৃণ শপিং অভিজ্ঞতা" : "Streamlined Customer Journey"}
              </span>
              <span className="block brand-gradient-text">
                {isBn
                  ? "পণ্য নির্বাচন থেকে নিরাপদ চেকআউট"
                  : "Product Detail & 1-Click Checkout"}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {isBn
                ? "গ্রাহকরা কীভাবে পণ্য ভ্যারিয়েন্ট সিলেক্ট করে এক ক্লিকে অর্ডার সম্পন্ন করেন তা সরাসরি পরীক্ষা করুন।"
                : "Experience how customers browse variants, add items to their shopping bag, and complete orders through CartX."}
            </p>
          </div>
        </ScrollReveal>

        {/* Demo Safe Environment Banner */}
        <ScrollReveal delay={60}>
          <div className="max-w-4xl mx-auto rounded-xl border border-primary/20 bg-primary/[0.04] p-3 text-center text-xs text-primary font-medium mb-8 flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
            <span>
              {isBn
                ? "সিমুলেশন টেস্ট মোড: কোনো বাস্তব লেনদেন প্রক্রিয়া করা হয় না এবং কোনো পেমেন্ট তথ্য সংগ্রহ করা হয় না।"
                : "Safe Simulation Mode: Non-transactional environment. No real payment credentials or bank details are collected."}
            </span>
          </div>
        </ScrollReveal>

        {/* Interactive Experience Container */}
        <ScrollReveal delay={120}>
          <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-xs overflow-hidden">
            {/* Step Breadcrumbs */}
            <div className="grid grid-cols-3 border-b border-border text-center text-xs font-semibold select-none bg-muted/20">
              <button
                type="button"
                onClick={() => setActiveStep("product")}
                className={cn(
                  "py-3.5 px-2 transition-all cursor-pointer border-r border-border",
                  activeStep === "product"
                    ? "bg-card text-primary font-bold shadow-2xs border-b-2 border-b-primary"
                    : "text-muted-foreground",
                )}
              >
                1. {isBn ? "পণ্য নির্বাচন" : "Product Detail"}
              </button>
              <button
                type="button"
                onClick={() => setActiveStep("checkout")}
                className={cn(
                  "py-3.5 px-2 transition-all cursor-pointer border-r border-border",
                  activeStep === "checkout"
                    ? "bg-card text-primary font-bold shadow-2xs border-b-2 border-b-primary"
                    : "text-muted-foreground",
                )}
              >
                2. {isBn ? "ডেলিভারি ও পেমেন্ট" : "Shipping & Payment"}
              </button>
              <button
                type="button"
                onClick={() => setActiveStep("success")}
                className={cn(
                  "py-3.5 px-2 transition-all cursor-pointer",
                  activeStep === "success"
                    ? "bg-card text-primary font-bold shadow-2xs border-b-2 border-b-primary"
                    : "text-muted-foreground",
                )}
              >
                3. {isBn ? "অর্ডার নিশ্চিতকরণ" : "Order Placed"}
              </button>
            </div>

            {/* Interactive Screen Content */}
            <div className="p-6 sm:p-8">
              {activeStep === "product" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Product Media Area */}
                  <div className="rounded-xl border border-border/80 bg-muted/30 p-6 flex flex-col items-center justify-center min-h-[260px] text-center">
                    <div className="h-28 w-28 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-3">
                      <ShoppingBag className="h-10 w-10 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      {isBn ? "টেইলর্ড চিনো প্যান্ট" : "Tailored Chino Pant"}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {selectedColor} • Size {selectedSize}
                    </span>
                  </div>

                  {/* Product Options & Details */}
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {isBn ? "বেস্টসেলার" : "Bestseller"}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {isBn
                          ? "টেইলর্ড চিনো প্যান্ট — প্রিমিয়াম কটন"
                          : "Tailored Chino Pant — Premium Cotton"}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-mono text-xl font-extrabold text-foreground">
                          ৳{productPrice}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground line-through">
                          ৳2,800
                        </span>
                      </div>
                    </div>

                    {/* Size Matrix */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {isBn ? "সাইজ নির্বাচন করুন:" : "Select Size:"}
                      </label>
                      <div className="flex gap-2">
                        {["30", "32", "34", "36"].map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSelectedSize(sz)}
                            className={cn(
                              "h-9 w-11 rounded-lg border text-xs font-bold transition-all cursor-pointer",
                              selectedSize === sz
                                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                : "border-border bg-card text-foreground hover:bg-muted/50",
                            )}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {isBn ? "রং নির্বাচন করুন:" : "Select Color:"}
                      </label>
                      <div className="flex gap-2">
                        {["Charcoal", "Navy", "Olive"].map((clr) => (
                          <button
                            key={clr}
                            type="button"
                            onClick={() => setSelectedColor(clr)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer",
                              selectedColor === clr
                                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                : "border-border bg-card text-foreground hover:bg-muted/50",
                            )}
                          >
                            {clr}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity selector */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-foreground">
                        {isBn ? "পরিমাণ:" : "Qty:"}
                      </span>
                      <div className="inline-flex items-center rounded-lg border border-border bg-muted/30">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="px-3 py-1 text-sm font-bold hover:bg-muted cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-mono text-xs font-bold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="px-3 py-1 text-sm font-bold hover:bg-muted cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Add to Bag CTA */}
                    <button
                      type="button"
                      onClick={() => setActiveStep("checkout")}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
                    >
                      <span>
                        {isBn
                          ? "চেকআউট এগিয়ে নিন (৳" + totalPrice + ")"
                          : "Proceed to Checkout (৳" + totalPrice + ")"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {activeStep === "checkout" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left: Customer & Address Mock Info */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-foreground pb-2 border-b border-border">
                      {isBn
                        ? "ডেলিভারি তথ্য (ডেমো)"
                        : "Shipping Information (Demo)"}
                    </h4>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <label className="block text-muted-foreground mb-1">
                          {isBn ? "গ্রাহকের নাম" : "Customer Name"}
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="Tanvir Ahmed"
                          className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-foreground font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-muted-foreground mb-1">
                          {isBn ? "মোবাইল নম্বর" : "Contact Phone"}
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="01700-000000"
                          className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-foreground font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-muted-foreground mb-1">
                          {isBn ? "ডেলিভারি ঠিকানা" : "Delivery Address"}
                        </label>
                        <input
                          type="text"
                          readOnly
                          value="House 42, Road 11, Banani, Dhaka"
                          className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-foreground font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Payment Method & Place Order */}
                  <div className="space-y-4 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-foreground pb-2 border-b border-border">
                        {isBn
                          ? "পেমেন্ট মাধ্যম বেছে নিন"
                          : "Payment Method (Simulation)"}
                      </h4>
                      <div className="space-y-2 pt-2">
                        {[
                          {
                            id: "cod",
                            label: isBn
                              ? "ক্যাশ অন ডেলিভারি (COD)"
                              : "Cash on Delivery",
                            badge: isBn
                              ? "পণ্য পেয়ে পরিশোধ"
                              : "Pay upon receipt",
                          },
                          {
                            id: "bkash",
                            label: isBn
                              ? "বিকাশ পেমেন্ট (সিমুলেশন)"
                              : "bKash Online Payment",
                            badge: "0% Fee",
                          },
                          {
                            id: "card",
                            label: isBn
                              ? "ভিসা / মাস্টারকার্ড"
                              : "Debit / Credit Card",
                            badge: "SSLCommerz",
                          },
                        ].map((pm) => (
                          <div
                            key={pm.id}
                            onClick={() => setPaymentMethod(pm.id)}
                            className={cn(
                              "flex items-center justify-between p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all",
                              paymentMethod === pm.id
                                ? "border-primary bg-primary/[0.05] text-primary"
                                : "border-border bg-card text-foreground hover:bg-muted/40",
                            )}
                          >
                            <span>{pm.label}</span>
                            <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                              {pm.badge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Summary calculations */}
                    <div className="rounded-xl border border-border bg-muted/20 p-3 space-y-1 text-xs">
                      <div className="flex justify-between text-muted-foreground">
                        <span>{isBn ? "পণ্যের মূল্য" : "Subtotal"}</span>
                        <span className="font-mono">
                          ৳{productPrice * quantity}
                        </span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>{isBn ? "কুরিয়ার ডেলিভারি" : "Delivery"}</span>
                        <span className="font-mono">৳{deliveryFee}</span>
                      </div>
                      <div className="flex justify-between font-bold text-foreground pt-1 border-t border-border/60">
                        <span>{isBn ? "মোট পরিশোধযোগ্য" : "Total Billed"}</span>
                        <span className="font-mono text-primary font-extrabold">
                          ৳{totalPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveStep("success")}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-hover)] transition-all cursor-pointer shadow-xs"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {isBn
                          ? "অর্ডার নিশ্চিত করুন (সিমুলেশন)"
                          : "Place Test Order (Simulation)"}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {activeStep === "success" && (
                <div className="text-center py-6 max-w-md mx-auto space-y-4">
                  <div className="h-16 w-16 rounded-full bg-success/15 text-success mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">
                    {isBn
                      ? "সফল ডেমো অর্ডার #CX-9024"
                      : "Test Order Placed #CX-9024"}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isBn
                      ? "আপনার ডেমো চেকআউট সিমুলেশন সফল হয়েছে! মার্চেন্ট ড্যাশবোর্ডে তাৎক্ষণিকভাবে এই অর্ডারটি প্রদর্শিত হবে।"
                      : "The simulation is complete! In a live CartX store, this immediately triggers SMS notifications, courier dispatch, and dashboard tracking."}
                  </p>

                  <div className="rounded-xl border border-border bg-muted/30 p-4 text-xs text-left space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isBn ? "অর্ডার নম্বর" : "Order ID"}
                      </span>
                      <span className="font-mono font-bold text-foreground">
                        #CX-9024
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isBn ? "পেমেন্ট স্ট্যাটাস" : "Payment"}
                      </span>
                      <span className="text-success font-semibold">
                        {isBn ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {isBn ? "মোট টাকা" : "Amount"}
                      </span>
                      <span className="font-mono font-bold text-foreground">
                        ৳{totalPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted/50 transition-all cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5 text-primary" />
                    <span>
                      {isBn ? "পুনরায় টেস্ট করুন" : "Run Another Test Preview"}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
