"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { DemoStoreItem, DemoStoreCategory } from "./types";
import { DEMO_CATEGORIES, DEMO_STORES_REGISTRY } from "./demo-stores-data";
import { DemoStoresHero } from "./demo-stores-hero";
import { DemoStoreCard } from "./demo-store-card";
import { DemoStoreModal } from "./demo-store-modal";
import { StoreDevicePreview } from "./store-device-preview";
import { StoreSectionsShowcase } from "./store-sections-showcase";
import { ProductCheckoutPreview } from "./product-checkout-preview";
import { DemoStoresCTA } from "./demo-stores-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

export function DemoStoresView() {
  const { locale } = useLanguage();
  const isBn = locale === "bn";

  const [selectedCategory, setSelectedCategory] = useState<DemoStoreCategory>("all");
  const [activeModalStore, setActiveModalStore] = useState<DemoStoreItem | null>(null);
  const [modalMode, setModalMode] = useState<"desktop" | "mobile">("desktop");

  const filteredStores =
    selectedCategory === "all"
      ? DEMO_STORES_REGISTRY
      : DEMO_STORES_REGISTRY.filter((s) => s.category === selectedCategory);

  const handleExploreScroll = () => {
    const el = document.getElementById("demo-gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDemo = (store: DemoStoreItem) => {
    setActiveModalStore(store);
    setModalMode("desktop");
  };

  const handleOpenMobile = (store: DemoStoreItem) => {
    setActiveModalStore(store);
    setModalMode("mobile");
  };

  return (
    <article className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      {/* Section 1: Hero */}
      <DemoStoresHero onExploreClick={handleExploreScroll} />

      {/* Section 2: Category Filter Navigation & Section 3: Store Gallery */}
      <section
        id="demo-gallery"
        aria-label="Demo Store Gallery"
        className="py-12 sm:py-16 md:py-20 border-b border-border bg-background transition-colors"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Category Filter Navigation */}
          <div className="mb-8 sm:mb-12 flex flex-col items-center">
            <div className="w-full sm:w-auto overflow-x-auto pb-2 pt-1 px-1 scrollbar-none touch-pan-x">
              <div className="inline-flex items-center gap-1.5 p-1 rounded-full border border-border bg-card shadow-xs min-w-max mx-auto">
                {DEMO_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? DEMO_STORES_REGISTRY.length
                      : DEMO_STORES_REGISTRY.filter((s) => s.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-ring",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      )}
                    >
                      <span>{cat.label[isBn ? "bn" : "en"]}</span>
                      <span
                        className={cn(
                          "rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none",
                          isActive
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
            </div>
          </div>

          {/* Store Gallery Grid */}
          {filteredStores.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {filteredStores.map((store, idx) => (
                <ScrollReveal key={store.id} delay={(idx % 3) * 80}>
                  <DemoStoreCard
                    store={store}
                    onViewDemo={handleOpenDemo}
                    onMobilePreview={handleOpenMobile}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto space-y-3">
              <div className="h-12 w-12 rounded-full bg-muted text-muted-foreground mx-auto flex items-center justify-center">
                <Inbox className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {isBn ? "এই ক্যাটাগরিতে কোনো ডেমো স্টোর পাওয়া যায়নি" : "No demo stores found in this category"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isBn
                  ? "অন্য কোনো ক্যাটাগরি বেছে নিন অথবা সকল ডেমো স্টোর দেখুন।"
                  : "Try selecting another category or view all available demo stores."}
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted/50"
              >
                {isBn ? "সকল স্টোর দেখুন" : "View All Stores"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Desktop and Mobile Previews */}
      <StoreDevicePreview store={DEMO_STORES_REGISTRY[0]} />

      {/* Section 5: Example Storefront Sections */}
      <StoreSectionsShowcase />

      {/* Section 6: Product Detail & Checkout Preview */}
      <ProductCheckoutPreview />

      {/* Section 7: Final CTA */}
      <DemoStoresCTA />

      {/* Interactive Modal for full store preview */}
      {activeModalStore && (
        <DemoStoreModal
          key={`${activeModalStore.id}-${modalMode}`}
          store={activeModalStore}
          mode={modalMode}
          onClose={() => setActiveModalStore(null)}
        />
      )}
    </article>
  );
}
