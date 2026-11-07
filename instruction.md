# CartX Public Website --- Project Instructions

These instructions apply to all work in the `cartx-website` repository.
Follow them before creating, editing, or refactoring any page or
component.

## 1. Project Scope

-   This repository is for the **public CartX marketing website only**.
-   Do not build merchant dashboards, admin panels, storefront engines,
    or other application features here.
-   There is **currently no backend** for this website. Use static
    content and frontend-only interactions where appropriate.
-   Keep the architecture ready for a future backend integration on the
    **Pricing** page. Do not invent API endpoints, database schemas,
    credentials, or backend behavior. Keep pricing data/configuration
    easy to replace with API-driven data later.
-   Never expose secrets, private configuration, or credentials in
    frontend code.

## 2. Technology and UI Library

-   Use the existing project stack and conventions: Next.js, TypeScript,
    Tailwind CSS, and the existing component structure.
-   Use **shadcn/ui** as the UI component library.
-   Before building a new UI element, check whether an appropriate
    shadcn/ui component already exists in the project.
-   Prefer reusable, accessible components over duplicated page-specific
    implementations.
-   Do not add another UI library unless explicitly requested.

## 3. Colors and Typography

-   **Always use colors defined by the project's global CSS
    theme/tokens.**
-   Read `src/app/globals.css` (or the actual global CSS file used by
    the project) before styling.
-   Use existing CSS variables and theme tokens for text, backgrounds,
    borders, primary actions, muted content, and states.
-   Do not hardcode hex, RGB, or arbitrary color values in components or
    page styles when a global token exists.
-   If a genuinely new color token is required, define it centrally in
    the global CSS/theme first, then use that token.
-   **Always use font sizes and typography tokens from the global
    CSS/theme.**
-   Do not scatter arbitrary font-size values across components. Reuse
    the project's typography scale and responsive type utilities.
-   Keep typography consistent in headings, body text, labels, buttons,
    and navigation.

## 4. Responsive Design

-   Every page and component must work well on **mobile, tablet, laptop,
    and large desktop**.
-   Use a mobile-first responsive approach.
-   Check layouts at small, medium, and large breakpoints; do not design
    only for desktop.
-   Prevent horizontal overflow, clipped content, overlapping elements,
    and unreadable text.
-   Make navigation, grids, cards, tables, forms, dialogs, and pricing
    layouts usable on touch screens.
-   Use responsive spacing, widths, and typography rather than fixed
    desktop-only dimensions.
-   Do not hide important content on mobile simply to make the layout
    fit.

## 5. Language Support: English and Bangla

-   The public website must support **both English and Bangla**.
-   Follow the existing localization/i18n routing and translation
    structure. Do not create a separate, competing language system.
-   All user-facing text must have translations in both languages,
    including navigation, buttons, forms, validation messages, metadata
    where applicable, and footer content.
-   Do not leave hardcoded English text in a component that is expected
    to be localized.
-   Use natural, clear Bangla---not literal or awkward word-for-word
    translations.
-   Verify that Bangla text renders correctly and does not break
    spacing, line height, alignment, or responsive layouts.
-   Language switching must preserve the equivalent page/route whenever
    a translated route exists.

## 6. Visual and UX Quality

-   CartX is a **public-facing product and marketing website**. The
    design must look premium, polished, trustworthy, and
    production-ready.
-   Maintain a consistent visual system across all pages: hero sections,
    headings, buttons, cards, forms, navigation, and footer.
-   Use clear visual hierarchy, balanced whitespace, readable content
    widths, consistent alignment, and purposeful interactions.
-   Avoid generic AI-generated layouts, unnecessary gradients, excessive
    decoration, oversized cards, and excessive empty space.
-   Use animation and transitions sparingly. They must not reduce
    usability or accessibility.
-   Keep the experience fast, accessible, and easy to understand.
-   Do not create duplicate headers, footers, CTAs, or controls when
    shared components already exist.

## 7. Code Structure and Maintainability

-   Write **beginner-friendly, easy-to-understand code**.
-   Prefer clear names, small components, straightforward conditions,
    and simple data flow.
-   Avoid unnecessary abstractions, clever one-liners, deeply nested
    logic, and premature optimization.
-   Keep components focused. Extract reusable components when there is a
    clear reuse or readability benefit.
-   Follow the existing folder structure and naming conventions.
-   Use TypeScript types for component props and data. Avoid `any`; use
    a clear type or interface instead.
-   Keep content/data separate from presentation when it improves
    readability and future maintenance.
-   Do not duplicate code that can reasonably be shared.
-   Add comments only when they explain non-obvious decisions; do not
    comment every line.
-   Do not rewrite unrelated files or change existing behavior without a
    clear requirement.

## 8. Content and Product Accuracy

-   CartX serves the Bangladesh market, with English and Bangla language
    support.
-   Use clear, entrepreneur-friendly, professional language.
-   Do not invent customer counts, partner logos, testimonials, ratings,
    review stars, growth statistics, integrations, or product
    capabilities.
-   Do not make unsupported claims about pricing, discounts,
    commissions, features, or availability.
-   Use illustrative/demo labels for sample data where needed.
-   Pricing, plan features, discounts, and availability must come from
    approved project configuration or a future authorized backend---not
    assumptions.

## 9. Pricing Page --- Future Backend Readiness

-   The website currently has no backend, but the Pricing page may
    connect to one in the future.
-   Keep plan content and pricing values centralized rather than
    scattering them across UI components.
-   Separate pricing data from card presentation so the data source can
    later be replaced by an API.
-   Do not pretend that a backend/API is already connected.
-   Do not hardcode invented discounts or plan entitlements.
-   Keep loading, error, and empty states in mind when designing future
    data-driven sections, but do not add fake API calls.

## 10. Accessibility and Quality Checks

-   Use semantic HTML and accessible shadcn/ui components.
-   Ensure keyboard navigation, visible focus states, appropriate
    labels, and sufficient contrast using the global theme.
-   Add meaningful alt text to informative images; use empty alt text
    for decorative images.
-   Before considering work complete:
    1.  Check the page in mobile, tablet, and desktop layouts.
    2.  Check both English and Bangla.
    3.  Confirm colors and typography come from global CSS/theme tokens.
    4.  Confirm there are no console errors or broken interactions.
    5.  Run the available lint, type-check, and build commands when
        practical.

## 11. Non-Negotiable Rules

1.  Use global CSS/theme tokens for **all colors**.
2.  Use global CSS/theme typography tokens for **all font sizes**.
3.  Make every page responsive across **all device sizes**.
4.  Keep code structure simple and beginner-friendly.
5.  Support **English and Bangla** throughout the public website.
6.  Use **shadcn/ui** for UI components.
7.  Keep the design premium, consistent, accessible, and
    production-ready.
8.  Do not add a backend; only keep the Pricing page prepared for a
    future integration.
9.  Do not invent product facts, pricing, metrics, or customer proof.
10. Preserve the existing project architecture and avoid unrelated
    changes.
