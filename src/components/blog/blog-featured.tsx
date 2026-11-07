"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookmarkCheck, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BlogPost, BLOG_CATEGORIES } from "@/lib/blog-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

interface BlogFeaturedProps {
  post: BlogPost;
  className?: string;
}

export function BlogFeatured({ post, className }: BlogFeaturedProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const catMeta = BLOG_CATEGORIES.find((c) => c.id === post.category);
  const categoryLabel = catMeta
    ? isBn
      ? catMeta.nameBn
      : catMeta.nameEn
    : post.category;

  return (
    <section
      aria-label="Featured Article"
      className={cn(
        "py-8 sm:py-12 border-b border-border bg-card/20 transition-colors",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Visual Cover Accent Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary/15 via-primary/5 to-muted/40 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border/60">
              <div
                className="absolute -top-12 -right-12 size-48 rounded-full bg-primary/10 blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-12 -left-12 size-48 rounded-full bg-secondary-accent/10 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-xs">
                    <BookmarkCheck className="size-3.5" />
                    <span>{isBn ? "নির্বাচিত গাইড" : "Featured Guide"}</span>
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-background/80 border border-border text-[11px] font-semibold text-foreground backdrop-blur-xs">
                    {categoryLabel}
                  </span>
                </div>

                <div className="my-6 flex items-center justify-center p-6 rounded-2xl bg-card/60 border border-border/60 shadow-2xs backdrop-blur-xs">
                  <div className="flex flex-col items-center text-center">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                      <BookOpen className="size-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                      CARTX EDITORIAL • 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-xs ring-2 ring-background shrink-0">
                    {post.author.avatar}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-foreground block truncate">
                      {post.author.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground block truncate">
                      {isBn ? post.author.roleBn : post.author.roleEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-muted-foreground" />
                    <span>{post.publishedAt}</span>
                  </span>
                  <span className="text-muted-foreground/40" aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-muted-foreground" />
                    <span>{post.readTimeMinutes} {isBn ? "মিনিট পাঠ" : "min read"}</span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug tracking-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {isBn ? post.titleBn : post.titleEn}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 sm:line-clamp-4">
                  {isBn ? post.excerptBn : post.excerptEn}
                </p>
              </div>

              <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>{isBn ? "পুরো গাইডটি পড়ুন" : "Read Full Article"}</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

