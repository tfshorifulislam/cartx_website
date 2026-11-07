import React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { splitHeading } from "@/lib/heading-utils";

export interface SectionHeadingProps {
  /** Optional eyebrow text displayed inside the branded pill badge */
  eyebrow?: string;
  /** Optional accent icon displayed inside the pill badge */
  eyebrowIcon?: LucideIcon;
  /** Primary title text or node */
  title: string | React.ReactNode;
  /** Optional phrase within title to render with brand text gradient */
  titleHighlight?: string;
  /**
   * Whether to apply the Hero Section's brand gradient text styling
   * (linear-gradient 135deg var(--primary) to var(--secondary-accent) with background-clip text).
   * Defaults to true to maintain consistent brand gradient titles across all sections.
   */
  titleGradient?: boolean;
  /** Optional supporting description text */
  description?: string;
  /** Alignment: "center" (default for marketing sections) or "left" */
  align?: "center" | "left";
  /** Semantic heading level: "h1" | "h2" | "h3" (default "h2") */
  as?: "h1" | "h2" | "h3";
  /** Sizing variant: "compact" (20px–30px) | "default" (24px–36px) | "large" (30px–46px) */
  size?: "compact" | "default" | "large";
  className?: string;
}

/**
 * SectionHeading — Standardized heading lockup for all CartX marketing sections.
 * Matches the visual design standard established by the Home Page Hero Section:
 * - Branded uppercase pill badge with border-primary/20 and bg-primary/[0.06]
 * - Consistent tracking-widest, text-primary, font-bold typography
 * - Responsive bold title styled with the Hero Section's exact brand text gradient (.brand-gradient-text)
 * - Constrained, readable muted body copy
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  titleHighlight,
  description,
  align = "center",
  as: Component = "h2",
  size = "default",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const sizeClasses = {
    compact: "text-xl sm:text-2xl lg:text-3xl",
    default: "text-2xl sm:text-3xl lg:text-4xl",
    large: "text-3xl sm:text-4xl lg:text-5xl",
  }[size];

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter
          ? "items-center text-center max-w-2xl mx-auto"
          : "items-start text-left max-w-xl",
        className
      )}
    >
      {/* ── Branded Eyebrow Pill (Matches Hero Section Reference) ── */}
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-3.5 sm:mb-4 select-none">
          {Icon && <Icon className="size-3 text-secondary-accent shrink-0" />}
          <span>{eyebrow}</span>
        </div>
      )}

      {/* ── Title (Standardized Two-Line Section Heading: Line 1 Black Text, Line 2 Brand Gradient) ── */}
      <Component
        className={cn(
          "font-bold tracking-tight text-balance leading-[1.25] sm:leading-[1.2]",
          sizeClasses,
          description ? "!mb-3 sm:!mb-3.5" : "!mb-0"
        )}
      >
        {titleHighlight ? (
          <>
            <span className="block text-foreground">{title}</span>
            <span className="block brand-gradient-text">{titleHighlight}</span>
          </>
        ) : typeof title === "string" ? (
          (() => {
            const [l1, l2] = splitHeading(title);
            return (
              <>
                <span className="block text-foreground">{l1}</span>
                <span className="block brand-gradient-text">{l2}</span>
              </>
            );
          })()
        ) : (
          title
        )}
      </Component>

      {/* ── Supporting Description (Slate muted text, never gradient) ── */}
      {description && (
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
