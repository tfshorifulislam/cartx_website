# Task: Make Demo Stores Page Fully Responsive

**Target Page:** `/demo-stores`

**URL:** `http://localhost:3000/demo-stores`

## Objective

Improve the responsive design of the Demo Stores page.

Currently, demo store previews and their content are not displaying properly across different screen sizes.

Update the entire page so that all demo store content, preview images, cards, text, and interactive elements work perfectly on mobile, tablet, laptop, and desktop.

**Important:** This task is only for the Demo Stores page. Do not redesign unrelated pages.

## 1. Audit Existing Design

Before making changes:

- Inspect the complete `/demo-stores` page.
- Identify all demo store cards and preview components.
- Inspect image dimensions and aspect ratios.
- Check existing container widths, grid layouts, and spacing.
- Identify horizontal overflow and elements that break on smaller screens.
- Check existing global CSS and responsive breakpoints.

## 2. Responsive Layout

Implement a mobile-first responsive layout.

Required behavior:

- **Mobile:** Single-column layout with properly sized demo previews.
- **Tablet:** Two-column layout where space allows.
- **Laptop:** Three-column layout where appropriate.
- **Large Desktop:** Balanced multi-column layout with consistent spacing.

Do not force fixed widths that cause horizontal scrolling.

Use responsive CSS Grid or Flexbox based on the existing component structure.

## 3. Demo Store Preview Cards

Make every demo store card responsive.

Requirements:

- Images must maintain their correct aspect ratios.
- Preview content must not be cropped unexpectedly.
- Card widths must adapt to the available screen width.
- Titles and descriptions must wrap naturally.
- Buttons must remain visible and accessible.
- Cards must have consistent spacing and alignment.
- Avoid fixed heights that cut off important content.
- Maintain a consistent visual hierarchy.

## 4. Demo Preview Images

Pay special attention to demo store screenshots and previews.

- Prevent images from overflowing their containers.
- Use appropriate `object-fit` behavior.
- Preserve image proportions.
- Use responsive image dimensions.
- Avoid distorted or stretched previews.
- Ensure previews remain visually clear on mobile.
- Use Next.js Image where appropriate and follow existing image conventions.

## 5. Typography and Spacing

- Use font sizes from global CSS/theme typography.
- Use colors from global CSS variables.
- Maintain consistent heading and paragraph spacing.
- Ensure long titles and descriptions wrap correctly.
- Keep text readable on small screens.
- Avoid unnecessary oversized text.

## 6. Responsive Breakpoints

Test the page at these viewport widths:

| Device        |  Width |
| ------------- | -----: |
| Small Mobile  |  320px |
| Mobile        |  375px |
| Large Mobile  |  425px |
| Tablet        |  768px |
| Laptop        | 1024px |
| Desktop       | 1440px |
| Large Desktop | 1920px |

These are testing targets, not a requirement to create separate CSS rules for every width.

## 7. Design Quality

The final page must:

- Look premium and professional.
- Maintain CartX branding.
- Follow the existing global design system.
- Use shadcn/ui where appropriate.
- Maintain consistent card styles.
- Avoid unnecessary gradients and decorations.
- Preserve existing content and functionality.
- Avoid introducing generic AI-generated design patterns.

## 8. Restrictions

- Do not change unrelated pages.
- Do not change existing demo store content.
- Do not remove any demo stores.
- Do not modify backend architecture.
- Do not add unnecessary dependencies.
- Do not introduce hardcoded colors or arbitrary typography values.
- Do not break English or Bangla language support.

## 9. Final Verification

After implementation:

- [ ] All demo store cards are responsive.
- [ ] All preview images display correctly.
- [ ] No horizontal overflow exists.
- [ ] Text wraps correctly.
- [ ] Buttons remain accessible.
- [ ] Mobile layout works at 320px.
- [ ] Tablet layout works at 768px.
- [ ] Desktop layout works at 1440px.
- [ ] English and Bangla layouts work.
- [ ] Existing functionality remains intact.
- [ ] No console errors or broken images.

## Final Instruction

First inspect the existing Demo Stores page and identify the responsive issues.

Then update the necessary components and CSS without unnecessarily rewriting the entire page.

The final result must be a polished, fully responsive Demo Stores page that looks consistent with the rest of the CartX public website.
