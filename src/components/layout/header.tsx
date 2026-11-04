"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  BookOpen,
  HelpCircle,
  Smartphone,
  Store,
  Layers,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-context";
import { CTAButton } from "@/components/ui/cta-system";

export function Header() {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync scroll state with native window and page reloads
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Synchronize with active Lenis smooth scroll instance
  useLenis((lenis) => {
    setIsScrolled(lenis.scroll > 0);
  });

  const centerNavLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.features"), href: "/features" },
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.themes"), href: "/themes" },
    { name: t("nav.integrations"), href: "/integrations" },
    { name: t("nav.pricing"), href: "/pricing" },
  ];

  const resourceLinks = [
    {
      name: t("resources.blog.title"),
      href: "/blog",
      description: t("resources.blog.desc"),
      icon: BookOpen,
    },
    {
      name: t("resources.help.title"),
      href: "/help",
      description: t("resources.help.desc"),
      icon: HelpCircle,
    },
    {
      name: t("resources.demo.title"),
      href: "/demo-stores",
      description: t("resources.demo.desc"),
      icon: Store,
    },
    {
      name: t("resources.mobile.title"),
      href: "/white-label-apps",
      description: t("resources.mobile.desc"),
      icon: Smartphone,
    },
    {
      name: t("resources.howItWorks.title"),
      href: "/how-it-works",
      description: t("resources.howItWorks.desc"),
      icon: Layers,
    },
  ];

  // Close dropdown on outside click or Esc
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setResourcesOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Track previous pathname during render to auto-close menus on route change without cascading effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  }

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isResourceActive = resourceLinks.some((r) => pathname.startsWith(r.href));

  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-md transition-colors animate-in fade-in slide-in-from-top-1 duration-300 motion-reduce:animate-none">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: CartX Wordmark Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-ring group select-none transition-opacity duration-200 hover:opacity-90"
            aria-label="CartX Home"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm tracking-tight shadow-xs transition-transform duration-200 ease-out group-hover:scale-105 active:scale-95 motion-reduce:transform-none">
              CX
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground transition-colors">
              Cart<span className="text-primary font-extrabold">X</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-medium tracking-normal"
          aria-label="Primary Navigation"
        >
          {centerNavLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-1.5 rounded-md transition-all duration-200 select-none",
                  active
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                aria-current={active ? "page" : undefined}
              >
                <span>{link.name}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute bottom-0 inset-x-2.5 h-[2px] rounded-full bg-primary transition-all duration-200 ease-out origin-center motion-reduce:transition-none",
                    active
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                  )}
                />
              </Link>
            );
          })}

          {/* Resources Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResourcesOpen((prev) => !prev)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className={cn(
                "group relative flex items-center gap-1 px-3 py-1.5 rounded-md transition-all duration-200 select-none cursor-pointer",
                isResourceActive || resourcesOpen
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <span>{t("nav.resources")}</span>
              <ChevronDown
                className={cn(
                  "size-3.5 opacity-70 transition-transform duration-200 ease-out motion-reduce:transition-none",
                  resourcesOpen && "rotate-180"
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute bottom-0 inset-x-2.5 h-[2px] rounded-full bg-primary transition-all duration-200 ease-out origin-center motion-reduce:transition-none",
                  isResourceActive || resourcesOpen
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                )}
              />
            </button>

            {resourcesOpen && (
              <div
                role="menu"
                data-lenis-prevent
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl border border-border bg-card p-1.5 shadow-dropdown animate-in fade-in-50 zoom-in-95 duration-150 z-50 motion-reduce:animate-none"
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 border-b border-border/50 mb-1">
                  {t("resources.title")}
                </div>
                {resourceLinks.map((res) => {
                  const ResIcon = res.icon;
                  const resActive = pathname.startsWith(res.href);
                  return (
                    <Link
                      key={res.href}
                      href={res.href}
                      role="menuitem"
                      className={cn(
                        "group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-150 active:scale-[0.99] motion-reduce:transform-none",
                        resActive
                          ? "bg-primary/5 text-primary"
                          : "hover:bg-muted/60 text-foreground"
                      )}
                    >
                      <div className="size-7 rounded-md bg-muted flex items-center justify-center shrink-0 mt-0.5 text-primary transition-transform duration-150 group-hover:scale-105 group-hover:bg-primary/10">
                        <ResIcon className="size-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className={cn("text-xs font-semibold leading-tight transition-colors", resActive ? "text-primary" : "text-foreground")}>
                          {res.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground leading-snug truncate mt-0.5">
                          {res.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Us Link */}
          <Link
            href="/contact"
            className={cn(
              "group relative px-3 py-1.5 rounded-md transition-all duration-200 select-none",
              isLinkActive("/contact")
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
            aria-current={isLinkActive("/contact") ? "page" : undefined}
          >
            <span>{t("nav.contact")}</span>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute bottom-0 inset-x-2.5 h-[2px] rounded-full bg-primary transition-all duration-200 ease-out origin-center motion-reduce:transition-none",
                isLinkActive("/contact")
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
              )}
            />
          </Link>
        </nav>

        {/* Right: Controls & Primary CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            className="group flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] cursor-pointer select-none motion-reduce:transform-none"
            aria-label={t("lang.aria")}
          >
            <Globe className="size-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-12 motion-reduce:transform-none" />
            <span className={locale === "en" ? "font-bengali font-semibold text-primary" : "font-semibold text-primary"}>
              {locale === "en" ? "বাংলা" : "English"}
            </span>
          </button>

          <div className="h-4 w-px bg-border/80" aria-hidden="true" />

          {/* Log In */}
          <Link
            href="/login"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-muted/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-ring motion-reduce:transform-none"
          >
            {t("nav.login")}
          </Link>

          {/* Primary CTA: Start Your Store */}
          <div className="transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none inline-flex">
            <CTAButton action="startStore" locale={locale} size="sm" />
          </div>
        </div>

        {/* Mobile: Hamburger & Quick Switch */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1 text-xs font-medium px-2 py-1.5 rounded-md border border-border bg-card text-foreground cursor-pointer select-none transition-all duration-200 hover:bg-muted active:scale-95 motion-reduce:transform-none"
            aria-label={t("lang.aria")}
          >
            <Globe className="size-3 text-primary" />
            <span className={locale === "en" ? "font-bengali font-semibold" : "font-semibold"}>
              {locale === "en" ? "বাং" : "EN"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-md p-1.5 text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring transition-all duration-200 active:scale-90 motion-reduce:transform-none"
          >
            {mobileMenuOpen ? (
              <X className="size-5 transition-transform duration-200 animate-in fade-in zoom-in-75 motion-reduce:animate-none" />
            ) : (
              <Menu className="size-5 transition-transform duration-200 animate-in fade-in zoom-in-75 motion-reduce:animate-none" />
            )}
          </button>
        </div>
      </div>

      {/* Scroll-Triggered Bottom Border (Smooth opacity transition, zero layout shift) */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border transition-opacity duration-200 ease-out motion-reduce:transition-none",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          data-lenis-prevent
          className="lg:hidden border-t border-border bg-card px-4 py-5 shadow-modal animate-in slide-in-from-top-2 fade-in-20 duration-200 motion-reduce:animate-none"
        >
          <div className="flex flex-col space-y-4">
            <nav className="flex flex-col space-y-0.5" aria-label="Mobile Navigation">
              {centerNavLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 active:scale-[0.99] motion-reduce:transform-none",
                      active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <span>{link.name}</span>
                    {active && <span className="size-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}

              {/* Resources section on mobile */}
              <div className="pt-2 pb-1 border-t border-border/60 mt-2">
                <span className="px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                  {t("resources.title")}
                </span>
              </div>
              {resourceLinks.map((res) => {
                const ResIcon = res.icon;
                const active = pathname.startsWith(res.href);
                return (
                  <Link
                    key={res.href}
                    href={res.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 active:scale-[0.99] motion-reduce:transform-none",
                      active
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <ResIcon className="size-4 text-primary shrink-0" />
                    <span>{res.name}</span>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium mt-1 border-t border-border/60 transition-all duration-150 active:scale-[0.99] motion-reduce:transform-none",
                  isLinkActive("/contact")
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span>{t("nav.contact")}</span>
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link
                href="/login"
                className="w-full text-center py-2 text-xs font-medium text-foreground hover:text-primary border border-border rounded-md bg-background transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none"
              >
                {t("nav.login")}
              </Link>
              <div className="w-full transition-transform duration-150 active:scale-[0.98] motion-reduce:transform-none">
                <CTAButton action="startStore" locale={locale} showArrow className="w-full py-2.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
