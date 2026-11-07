"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  ArrowRight,
  TrendingUp,
  BarChart2,
  Truck,
  CreditCard,
  BookOpen,
  Smartphone,
  Search,
  Award,
  RefreshCw,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { BlogPost, BLOG_CATEGORIES, BlogCategory } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const CATEGORY_ICONS: Record<BlogCategory, React.ElementType> = {
  all: Layers,
  "ecommerce-strategy": TrendingUp,
  "marketing-conversion": BarChart2,
  "operations-logistics": Truck,
  "payment-finance": CreditCard,
  "platform-guides": BookOpen,
  "mobile-commerce": Smartphone,
  "seo-traffic": Search,
  "case-studies": Award,
  "product-updates": RefreshCw,
};

export function BlogCard({ post, className }: BlogCardProps) {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const catMeta = BLOG_CATEGORIES.find((c) => c.id === post.category);
  const categoryLabel = catMeta ? (isBn ? catMeta.nameBn : catMeta.nameEn) : post.category;
  const CategoryIcon = CATEGORY_ICONS[post.category] || BookOpen;

  return (
    <article
      className={cn(
        "rounded-xl sm:rounded-2xl border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group",
        className
      )}
    >
      {/* Visual Cover Accent Banner */}
      <div className="relative aspect-16/10 sm:aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 via-muted/40 to-card flex items-center justify-center border-b border-border/60 select-none">
        <div
          className="absolute -top-10 -right-10 size-32 rounded-full bg-primary/10 blur-xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 size-32 rounded-full bg-secondary-accent/10 blur-xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Center icon plate */}
        <div className="relative z-10 size-12 sm:size-14 rounded-2xl bg-card/85 border border-border shadow-2xs backdrop-blur-xs flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
          <CategoryIcon className="size-6 text-primary" />
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-card/90 border border-border/80 backdrop-blur-xs text-[10px] font-semibold text-foreground shadow-2xs">
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-card/80 text-muted-foreground text-[10px] font-mono backdrop-blur-xs border border-border/50">
            <Clock className="size-2.5" />
            <span>{post.readTimeMinutes} {isBn ? "মি." : "min"}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Published Date */}
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2.5">
            <Calendar className="size-3 text-muted-foreground" />
            <span>{post.publishedAt}</span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2.5 leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {isBn ? post.titleBn : post.titleEn}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
            {isBn ? post.excerptBn : post.excerptEn}
          </p>
        </div>

        {/* Author & Read Link */}
        <div className="pt-4 border-t border-border/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className="size-7 rounded-full bg-primary/15 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
              {post.author.avatar}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-foreground block truncate">
                {post.author.name}
              </span>
              <span className="text-[10px] text-muted-foreground block truncate">
                {isBn ? post.author.roleBn : post.author.roleEn}
              </span>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="size-8 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground group-hover:bg-primary group-hover:border-primary transition-all shrink-0 shadow-2xs"
            aria-label={`Read ${isBn ? post.titleBn : post.titleEn}`}
          >
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

