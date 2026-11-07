"use client";

import React, { useState, useMemo } from "react";
import { BlogHero } from "./blog-hero";
import { BlogFeatured } from "./blog-featured";
import { BlogCard } from "./blog-card";
import { BlogNewsletter } from "./blog-newsletter";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  BlogCategory,
} from "@/lib/blog-data";
import { useLanguage } from "@/lib/i18n/language-context";
import { Search, X, Inbox } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.titleEn.toLowerCase().includes(q) ||
        post.titleBn.toLowerCase().includes(q) ||
        post.excerptEn.toLowerCase().includes(q) ||
        post.excerptBn.toLowerCase().includes(q) ||
        post.author.name.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero */}
      <BlogHero />

      {/* Section 2: Featured Article (shown when no search query and 'all' is selected) */}
      {!searchQuery && selectedCategory === "all" && featuredPost && (
        <BlogFeatured post={featuredPost} />
      )}

      {/* Main Listing Section: Categories + Search + Grid */}
      <section
        id="articles-feed"
        aria-label="Blog Articles Feed"
        className="py-10 sm:py-16 md:py-20 bg-background transition-colors"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Controls Bar: Search & Categories */}
          <ScrollReveal className="max-w-5xl mx-auto mb-8 sm:mb-12 space-y-5 sm:space-y-6">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto w-full px-1 sm:px-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isBn
                    ? "নিবন্ধ বা বিষয়বস্তু খুঁজুন (যেমন: পেমেন্ট, ডেলিভারি)..."
                    : "Search guides, strategies, and operational tips..."
                }
                className="w-full rounded-xl sm:rounded-2xl border border-border bg-card/90 backdrop-blur-xs pl-10 sm:pl-11 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground cursor-pointer rounded-full"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills (10 Categories) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none">
              {BLOG_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? BLOG_POSTS.length
                    : BLOG_POSTS.filter((p) => p.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all cursor-pointer",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <span>{isBn ? cat.nameBn : cat.nameEn}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none",
                        isSelected
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Results Summary if filtering */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground pb-3 border-b border-border/70">
              <span>
                {isBn
                  ? `মোট ${filteredPosts.length}টি নিবন্ধ পাওয়া গেছে`
                  : `Showing ${filteredPosts.length} article${filteredPosts.length === 1 ? "" : "s"}`}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-primary hover:underline cursor-pointer font-semibold text-left sm:text-right"
              >
                {isBn ? "ফিল্টার মুছুন" : "Reset filters"}
              </button>
            </div>
          )}

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post, idx) => (
                <ScrollReveal key={post.slug} delay={(idx % 3) * 70} className="h-full">
                  <BlogCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-12 sm:py-16 px-4 sm:px-8 rounded-xl sm:rounded-2xl border border-dashed border-border bg-card/40">
              <Inbox className="size-9 sm:size-10 text-muted-foreground mx-auto mb-3 opacity-60" />
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                {isBn ? "কোনো নিবন্ধ পাওয়া যায়নি" : "No articles found"}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {isBn
                  ? "আপনার অনুসন্ধানের সাথে মিলে এমন কোনো ফলাফল নেই। অন্য কোনো শব্দ অনুসন্ধান করুন।"
                  : "Try adjusting your search query or selecting a different category."}
              </p>
              <Button
                size="sm"
                variant="default"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="cursor-pointer font-semibold"
              >
                {isBn ? "সব নিবন্ধ দেখুন" : "View all articles"}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Section 7: Newsletter Signup */}
      <BlogNewsletter />
    </article>
  );
}
