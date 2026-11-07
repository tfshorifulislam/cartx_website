import React from "react";
import { cn } from "@/lib/utils";

/**
 * Split a heading text into two balanced, visually pleasing lines.
 * Honors newlines, commas, colons, em-dashes, and natural word breaks.
 */
export function splitHeading(title: string): [string, string] {
  const trimmed = title.trim();
  if (trimmed.includes("\n")) {
    const parts = trimmed.split("\n");
    return [parts[0], parts.slice(1).join(" ")];
  }
  if (trimmed.includes(", ")) {
    const idx = trimmed.indexOf(", ");
    return [trimmed.slice(0, idx + 1), trimmed.slice(idx + 2)];
  }
  if (trimmed.includes(" — ")) {
    const parts = trimmed.split(" — ");
    return [parts[0], parts.slice(1).join(" — ")];
  }
  if (trimmed.includes(": ")) {
    const parts = trimmed.split(": ");
    return [parts[0], parts.slice(1).join(": ")];
  }
  const words = trimmed.split(" ");
  if (words.length >= 2) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return [trimmed, "CartX"];
}

export interface TwoLineHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  line1?: React.ReactNode;
  line2?: React.ReactNode;
  title?: string;
  line1ClassName?: string;
  line2ClassName?: string;
}

/**
 * TwoLineHeading — Standardized two-line heading across the CartX website.
 * Line 1: Black/foreground text using existing global typography styles.
 * Line 2: Brand gradient text using .brand-gradient-text CSS class.
 */
export function TwoLineHeading({
  as: Component = "h2",
  line1,
  line2,
  title,
  className,
  line1ClassName,
  line2ClassName,
  children,
  ...props
}: TwoLineHeadingProps) {
  let l1 = line1;
  let l2 = line2;

  if ((!l1 || !l2) && title) {
    const [splitL1, splitL2] = splitHeading(title);
    l1 = l1 ?? splitL1;
    l2 = l2 ?? splitL2;
  }

  return (
    <Component className={className} {...props}>
      {l1 && <span className={cn("block text-foreground", line1ClassName)}>{l1}</span>}
      {l2 && <span className={cn("block brand-gradient-text", line2ClassName)}>{l2}</span>}
      {children}
    </Component>
  );
}
