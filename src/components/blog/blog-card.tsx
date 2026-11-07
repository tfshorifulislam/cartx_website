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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

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
    <Card
      className={cn(
        "group/card flex flex-col h-full overflow-hidden p-0 gap-0 border border-border bg-card shadow-xs hover:border-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {/* Visual Cover Accent Banner (16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 via-muted/40 to-card flex items-center justify-center border-b border-border/60 select-none">
        {post.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={post.image}
            alt={isBn ? post.titleBn : post.titleEn}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <>
            <div
              className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-primary/10 blur-xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-secondary-accent/10 blur-xl"
              aria-hidden="true"
            />

            {/* Center icon plate */}
            <div className="relative z-10 size-12 sm:size-14 rounded-2xl bg-card/85 border border-border shadow-2xs backdrop-blur-xs flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform duration-300">
              <CategoryIcon className="size-6 text-primary" />
            </div>
          </>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <Badge
            variant="secondary"
            className="bg-card/90 text-foreground border border-border/80 backdrop-blur-xs text-[10px] font-semibold shadow-2xs hover:bg-card"
          >
            {categoryLabel}
          </Badge>
          {post.readTimeMinutes ? (
            <Badge
              variant="outline"
              className="bg-card/85 text-muted-foreground border-border/60 backdrop-blur-xs text-[10px] font-mono gap-1 px-2 py-0.5"
            >
              <Clock className="size-2.5 text-muted-foreground" />
              <span>{post.readTimeMinutes} {isBn ? "মি." : "min"}</span>
            </Badge>
          ) : null}
        </div>
      </div>

      {/* Card Header: Date & Title */}
      <CardHeader className="p-5 sm:p-6 pb-2 sm:pb-3 space-y-2">
        {post.publishedAt ? (
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Calendar className="size-3 text-muted-foreground shrink-0" />
            <span>{post.publishedAt}</span>
          </div>
        ) : null}

        <CardTitle className="text-base sm:text-lg font-bold text-foreground group-hover/card:text-primary transition-colors leading-snug line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline focus:outline-none">
            {isBn ? post.titleBn : post.titleEn}
          </Link>
        </CardTitle>
      </CardHeader>

      {/* Card Content: Excerpt */}
      <CardContent className="px-5 sm:px-6 py-0 flex-1">
        <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {isBn ? post.excerptBn : post.excerptEn}
        </CardDescription>
      </CardContent>

      {/* Card Footer: Author & Read Button */}
      <CardFooter className="p-5 sm:p-6 pt-4 mt-auto border-t border-border/70 flex items-center justify-between gap-3">
        {post.author ? (
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className="size-7 rounded-full bg-primary/15 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
              {post.author.avatar}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-foreground block truncate">
                {post.author.name}
              </span>
              {(post.author.roleBn || post.author.roleEn) ? (
                <span className="text-[10px] text-muted-foreground block truncate">
                  {isBn ? post.author.roleBn : post.author.roleEn}
                </span>
              ) : null}
            </div>
          </div>
        ) : (
          <div />
        )}

        <Button
          size="sm"
          variant="outline"
          render={<Link href={`/blog/${post.slug}`} />}
          className="gap-1.5 text-xs font-semibold group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shrink-0 cursor-pointer"
        >
          <span>{isBn ? "পড়ুন" : "Read"}</span>
          <ArrowRight className="size-3 transition-transform group-hover/btn:translate-x-0.5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogCardSkeleton({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        "flex flex-col h-full overflow-hidden p-0 gap-0 border border-border bg-card shadow-xs",
        className
      )}
    >
      <Skeleton className="aspect-video w-full rounded-none" />
      <CardHeader className="p-5 sm:p-6 pb-2 sm:pb-3 space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-2/3" />
      </CardHeader>
      <CardContent className="px-5 sm:px-6 py-0 flex-1 space-y-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-3/4" />
      </CardContent>
      <CardFooter className="p-5 sm:p-6 pt-4 mt-auto border-t border-border/70 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Skeleton className="size-7 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        </div>
        <Skeleton className="h-8 w-16 rounded-md" />
      </CardFooter>
    </Card>
  );
}
