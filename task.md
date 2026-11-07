# Task: Standardize Two-Line Section Headings Across the CartX Website

## Objective

Update the section headings throughout the CartX public website so every section heading follows the same two-line visual pattern.

## Required Heading Style

Every section heading must contain exactly two visual lines:

- **Line 1:** Black text, using the existing global typography styles.
- **Line 2:** Brand gradient text, using the existing `brand-gradient-text` CSS class.

Example structure:

```tsx
<h2 className="...">
  <span>Build Your Business</span>
  <span className="brand-gradient-text">With CartX</span>
</h2>
```

Use the project's existing heading classes and global CSS typography tokens. The example is illustrative; adapt it to the existing component and styling conventions.

## Implementation Requirements

1. Apply this heading pattern to every section heading across all public website pages, not only the homepage.
2. Keep the first line black by using the existing global theme/text token. Do not hardcode a hex or RGB color.
3. Apply `brand-gradient-text` to the second line. Reuse the existing class; do not create a new gradient or duplicate its CSS.
4. Use the global CSS font-size, font-weight, line-height, and responsive typography rules.
5. Keep both lines visually balanced, properly aligned, and readable on mobile, tablet, laptop, and desktop.
6. Allow natural line wrapping within each line when necessary, but preserve the two-part heading hierarchy.
7. Keep headings semantically correct (normally `h2` for page sections). Do not use `<br />` as a substitute for the two styled text elements.
8. Preserve the existing heading wording where possible. Rewrite wording only when needed to create a natural two-line heading; do not change product claims or meaning.
9. Keep the heading spacing consistent across sections and pages.
10. Do not change unrelated page layouts, content, or functionality.

## Scope

- Homepage sections
- Features and feature-detail pages
- Solutions and solution-detail pages
- Themes and theme-detail pages
- Integrations
- Pricing
- Resources, blog, contact, and other public marketing pages where section headings appear

Page titles or small labels that are not section headings do not need to be converted unless they are currently styled as section headings.

## Validation Checklist

- [ ] Every section heading has two styled lines.
- [ ] First line uses the global black/text color token.
- [ ] Second line uses `brand-gradient-text`.
- [ ] No hardcoded color values or duplicate gradient CSS were introduced.
- [ ] Font sizes and typography come from global CSS/theme tokens.
- [ ] Headings remain readable and correctly spaced at all responsive breakpoints.
- [ ] English and Bangla versions both follow the same visual pattern.
- [ ] No unrelated design or functionality was changed.
- [ ] Run the available lint, type-check, and build checks when practical.
