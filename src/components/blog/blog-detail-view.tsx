"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  ArrowRight,
  Target,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BlogPost, BLOG_CATEGORIES, getRelatedBlogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";
import { BlogNewsletter } from "./blog-newsletter";
import { BlogCTA } from "./blog-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface BlogDetailViewProps {
  post: BlogPost;
}

export function BlogDetailView({ post }: BlogDetailViewProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [copied, setCopied] = useState(false);
  const catMeta = BLOG_CATEGORIES.find((c) => c.id === post.category);
  const categoryLabel = catMeta ? (isBn ? catMeta.nameBn : catMeta.nameEn) : post.category;
  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Article Header */}
      <header className="hero-bg py-10 sm:py-14 transition-colors">
        <ScrollReveal direction="up" distance={20} className="container mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">
              {isBn ? "হোম" : "Home"}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-foreground transition-colors">
              {isBn ? "ব্লগ" : "Blog"}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary font-medium">{categoryLabel}</span>
          </nav>

          {/* Category Badge & Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="inline-block rounded-md bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
              {categoryLabel}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.publishedAt}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTimeMinutes} {isBn ? "মিনিট পাঠ" : "min read"}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            {isBn ? post.titleBn : post.titleEn}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            {isBn ? post.excerptBn : post.excerptEn}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-border/80 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm shadow-xs">
                {post.author.avatar}
              </div>
              <div>
                <span className="text-sm font-bold text-foreground block">
                  {post.author.name}
                </span>
                <span className="text-xs text-muted-foreground block">
                  {isBn ? post.author.roleBn : post.author.roleEn}
                </span>
              </div>
            </div>

            {/* Quick Share buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Copy link"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? (isBn ? "কপি হয়েছে" : "Copied!") : (isBn ? "লিংক কপি" : "Copy link")}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </header>

      {/* Main Body Layout: Table of Contents + Article Text */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Desktop Sticky Table of Contents (3 cols) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{isBn ? "সূচিপত্র" : "Table of Contents"}</span>
                </div>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-medium text-muted-foreground hover:text-primary transition-colors py-1 leading-snug"
                    >
                      {isBn ? item.titleBn : item.titleEn}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                    {isBn ? "নিবন্ধ শেয়ার করুন" : "Share this guide"}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 cursor-pointer"
                      aria-label="Copy Link"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.titleEn)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40"
                      aria-label="Share on X"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.1H5.06v8.4h2.8z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40"
                      aria-label="Share on Facebook"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article Body (8 cols) */}
            <div className="lg:col-span-8">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden rounded-2xl border border-border bg-card p-5 mb-8 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                  {isBn ? "সূচিপত্র" : "Table of Contents"}
                </span>
                <nav className="space-y-1.5">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-medium text-primary hover:underline py-1"
                    >
                      {isBn ? item.titleBn : item.titleEn}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                {post.contentSections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-24">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                      {isBn ? sec.headingBn : sec.headingEn}
                    </h2>

                    <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {(isBn ? sec.bodyBn : sec.bodyEn).map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {(isBn ? sec.calloutBn : sec.calloutEn) && (
                      <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-5 border-l-4 border-l-primary">
                        <p className="text-xs sm:text-sm font-medium text-foreground">
                          {isBn ? sec.calloutBn : sec.calloutEn}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Contextual Product CTA */}
              <ScrollReveal className="mt-14 rounded-2xl border border-border bg-gradient-to-br from-card to-card/60 p-8 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-3">
                  <Target className="h-3.5 w-3.5" />
                  <span>{isBn ? "কার্টএক্স শুরু করুন" : "Power Your Online Store"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {isBn
                    ? "আজই চালু করুন আপনার সম্পূর্ণ নিজস্ব ইকমার্স ব্যবসা"
                    : "Ready to launch your e-commerce store with CartX?"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-xl leading-relaxed">
                  {isBn
                    ? "বিকাশ, নগদ, কার্ড পেমেন্ট এবং স্বয়ংক্রিয় কুরিয়ার ট্র্যাকিং সহ সহজ ও নির্ভরযোগ্য ইকমার্স সমাধান।"
                    : "Experience zero platform transaction commissions, lightning-fast mobile checkouts, and native courier integrations."}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/start"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:opacity-90 transition-opacity"
                  >
                    <span>{isBn ? "বিনামূল্যে স্টোর তৈরি করুন" : "Start Your Free Store"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <span>{isBn ? "প্ল্যান ও প্রাইসিং দেখুন" : "View Pricing"}</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Bottom Social Share */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs font-semibold text-muted-foreground">
                  {isBn ? "নিবন্ধটি উপকারী মনে হলে শেয়ার করুন:" : "Found this helpful? Share with other merchants:"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Share2 className="h-3.5 w-3.5 text-primary" />
                    <span>{isBn ? "শেয়ার লিংক" : "Share"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Related Articles */}
      {relatedPosts.length > 0 && (
        <section
          aria-label="Related Articles"
          className="py-14 sm:py-20 border-t border-border bg-card/20 transition-colors"
        >
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <ScrollReveal className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                {isBn ? "আরও পড়ুন" : "Keep Learning"}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                <span className="block text-foreground">
                  {isBn ? "জ্ঞান সমৃদ্ধ করুন" : "Keep Learning"}
                </span>
                <span className="block brand-gradient-text">
                  {isBn ? "সম্পর্কিত অন্যান্য নিবন্ধ" : "Related Guides & Insights"}
                </span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rPost, idx) => (
                <ScrollReveal key={rPost.slug} delay={(idx % 3) * 70}>
                  <BlogCard post={rPost} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 8: Final Blog CTA */}
      <BlogCTA />

      {/* Section 9: Newsletter */}
      <BlogNewsletter />
    </article>
  );
}
