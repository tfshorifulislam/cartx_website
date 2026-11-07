# Task: Convert CartX Website into a Clean Frontend-Only Public Website

## Objective

Clean up the entire `cartx-website` project.

This project is strictly a **public marketing website**. It should contain only frontend UI and the code required to run the public website.

Remove all unnecessary backend, CMS, database, and admin-related functionality. Also remove genuinely unused files and folders.

**Important: Do not redesign the website. This task is only about architecture cleanup and removing unnecessary code.**

## 1. Remove Backend and CMS

Inspect the entire project and remove backend/CMS-related functionality, including:

- Backend or server application folders.
- CMS dashboards and CMS-related pages.
- CMS components and configuration.
- Database clients and database connections.
- Prisma schemas, migrations, and seed files if no longer needed.
- Backend API endpoints.
- Backend-only authentication and authorization.
- Backend-only services and utilities.
- Admin panels and admin-only functionality.
- Backend-specific dependencies and packages.
- Unnecessary environment variables related to removed backend services.
- Backend-only scripts and configuration.
- Server actions used exclusively for backend data mutations.

Do not keep unnecessary backend infrastructure.

**Important:** Do not delete Next.js Server Components, static rendering, metadata generation, or framework-required server-side code just because they contain the word "server". Preserve anything required by the public frontend.

## 2. Keep Only the Public Website

The final project should contain only the public CartX website.

Preserve all existing public pages:

- Homepage
- Features
- Feature Details
- Solutions
- Solution Details
- Themes
- Theme Details
- Integrations
- Pricing
- Blog
- Resources
- Contact
- Privacy Policy
- Terms and Conditions
- Other existing public pages

Preserve:

- Header and Footer
- Navigation
- Reusable UI components
- English and Bangla localization
- Responsive layouts
- Global CSS
- Typography system
- Brand colors
- Animations
- Icons and images
- SEO metadata
- Sitemap and robots configuration

Do not remove any existing public page simply because it is not directly connected to another page.

## 3. Frontend-Only Functionality

After cleanup:

- Every public page must work without a backend.
- No database connection should be required.
- No CMS should be required.
- No private API should be required to render public pages.
- No fake API calls.
- No fake authentication.
- No fake data persistence.
- No false success messages.

If an existing form depends on a backend, keep the UI where appropriate but make it clear that submission is not connected.

Do not pretend that frontend-only functionality is connected to a real backend.

## 4. Pricing Page — Future Backend Integration

The Pricing page may require backend integration in the future.

For now:

- Keep the Pricing page completely frontend-only.
- Keep pricing data in a separate, centralized configuration file.
- Keep pricing cards reusable.
- Separate pricing data from UI components.
- Make the structure easy to connect to an API in the future.
- Do not implement API calls.
- Do not create database models.
- Do not create backend services.
- Do not invent prices, discounts, or plan features.

## 5. Remove Unnecessary Files and Folders

Perform a complete project audit.

Identify and remove genuinely unused:

- Components
- Pages
- Hooks
- Utilities
- Stylesheets
- Assets
- Duplicate files
- Old prototypes
- Abandoned code
- CMS-related files
- Backend-related files
- Unused configuration files
- Unnecessary scripts
- Obsolete documentation

Before deleting anything:

1. Check imports and exports.
2. Check route usage.
3. Check dynamic imports.
4. Check package dependencies.
5. Check configuration references.
6. Check whether the file is used at runtime.

Do not delete files just because they appear unused at first glance.

If a file's purpose is uncertain, keep it and mention it in the final report.

## 6. Protect Essential Project Files

Do not delete these without a verified reason:

- `.git/`
- `package.json`
- Package lockfile
- Next.js configuration
- TypeScript configuration
- Tailwind configuration
- PostCSS configuration
- ESLint configuration
- Global CSS
- Localization files
- Public assets
- Public routes
- Shared layouts
- Required UI components
- `instruction.md`
- `README.md`

Do not delete `node_modules` or `.next` as part of source cleanup.

## 7. Code Quality

Keep the code:

- Beginner-friendly.
- Easy to understand.
- Clean and readable.
- Properly organized.
- Reusable where appropriate.
- Free from unnecessary abstractions.
- Free from duplicate implementations.

Do not overcomplicate the project architecture.

Do not rewrite unrelated components.

Do not change the existing website design unless necessary to fix an issue caused by removing backend functionality.

## 8. Git Safety

Before making changes:

- Check the current Git status.
- Review existing uncommitted changes.
- Preserve all existing user modifications.

Never run destructive commands such as:

- `git reset --hard`
- `git clean -fd`
- Force checkout commands.

Do not overwrite or discard existing work.

## 9. Final Verification

After cleanup, verify:

- [ ] No CMS functionality remains.
- [ ] No backend application remains.
- [ ] No database integration remains.
- [ ] No unnecessary backend dependencies remain.
- [ ] All public pages still work.
- [ ] English language works.
- [ ] Bangla language works.
- [ ] Language switching works.
- [ ] Responsive design remains intact.
- [ ] Global CSS remains intact.
- [ ] shadcn/ui components work correctly.
- [ ] Pricing page remains frontend-only.
- [ ] No broken imports exist.
- [ ] No broken routes exist.
- [ ] No unnecessary files or folders remain.
- [ ] Production build succeeds.

Run:

1. ESLint
2. TypeScript type-check
3. Production build

Fix issues caused by this cleanup.

If any check fails, explain the reason. Do not claim that the project is working without verification.

## 10. Final Report

When finished, provide a summary containing:

1. Backend folders and files removed.
2. CMS folders and files removed.
3. Unnecessary files and folders deleted.
4. Dependencies removed.
5. Configuration files updated.
6. Public frontend features preserved.
7. Any uncertain files intentionally retained.
8. ESLint results.
9. TypeScript results.
10. Production build results.

## Non-Negotiable Instructions

- This is a public marketing website, not a web application.
- Frontend UI only. No backend.
- No CMS.
- No database.
- No admin dashboard.
- No unnecessary files or folders.
- Preserve all existing public pages.
- Preserve the existing design and branding.
- Preserve English and Bangla support.
- Use shadcn/ui.
- Keep code beginner-friendly.
- Do not destroy existing Git changes.
- Do not invent fake backend functionality.
- Do not implement future Pricing backend integration now.

**First audit the complete project. Then safely remove backend/CMS functionality and genuinely unnecessary files. Finally, verify that the public website works correctly.**
