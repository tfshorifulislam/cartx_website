import { Metadata } from "next";
import Link from "next/link";
import { Home, Compass, FileQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | CartX",
  description:
    "The page you are looking for does not exist or has been relocated.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <article className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-background text-foreground transition-colors">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mx-auto shadow-xs">
          <FileQuestion className="size-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            The requested page could not be located. It may have been moved,
            renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary-hover transition-all w-full sm:w-auto"
          >
            <Home className="size-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/help"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted/50 transition-all w-full sm:w-auto"
          >
            <Compass className="size-4" />
            <span>Go to Help Center</span>
          </Link>
        </div>

        {/* Quick Links Navigation */}
        <div className="pt-8 border-t border-border/60">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs px-3 py-1.5 rounded-lg border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
