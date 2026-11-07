# Task: Make View Demo Modal Fully Responsive

**Target Page:** `/demo-stores`

**Target Component:** View Demo Modal

## Objective

When users click the **View Demo** button on the Demo Stores page, a modal opens with Desktop and Mobile preview options.

Currently, the modal and its preview content are not fully responsive.

Update the modal so that it works perfectly on mobile, tablet, laptop, and desktop screens.

**Important:** Focus only on the View Demo modal and its internal preview layout. Do not redesign unrelated parts of the website.

## 1. Modal Responsive Layout

- Make the modal width responsive to the viewport.
- Use available screen space efficiently.
- On desktop, display a large, well-balanced modal.
- On tablet, reduce modal dimensions appropriately.
- On mobile, use almost the full available screen width and height.
- Prevent modal content from overflowing the viewport.
- Use appropriate maximum width and maximum height.
- Keep the modal centered on desktop.
- On mobile, use a comfortable full-screen or near-full-screen layout.

## 2. Desktop Preview

When the Desktop preview option is selected:

- Display the demo store in a desktop-style preview.
- Scale the preview according to the available modal width.
- Prevent horizontal overflow.
- Preserve the website's original aspect ratio.
- Ensure the preview does not get cut off.
- Use internal scrolling when the preview content is taller than the available space.
- Keep the desktop preview visually realistic.

## 3. Mobile Preview

When the Mobile preview option is selected:

- Display the demo store inside a realistic mobile-sized preview.
- Keep the mobile preview centered inside the modal.
- Preserve the original mobile layout and proportions.
- Prevent the preview from overflowing the modal.
- Allow vertical scrolling inside the preview when necessary.
- Make sure the preview remains usable on small mobile screens.
- Do not stretch or distort the mobile preview.

## 4. Desktop and Mobile Toggle

Preserve the existing Desktop/Mobile preview switcher.

Requirements:

- Switching between Desktop and Mobile must work smoothly.
- The selected option must have a clear active state.
- Preview dimensions must update correctly when switching.
- Switching must not break the modal layout.
- Keep the toggle accessible on smaller screens.

## 5. Modal Header and Controls

Make the modal header responsive.

- Keep the demo store title readable.
- Keep Desktop/Mobile controls visible.
- Keep the close button accessible.
- Prevent header elements from overlapping.
- On mobile, adjust spacing and alignment appropriately.
- Ensure all controls remain usable with touch input.

## 6. Scrolling Behavior

Handle scrolling carefully.

- Prevent the modal from exceeding the viewport height.
- Keep the modal header and controls accessible.
- Allow the preview area to scroll independently where appropriate.
- Avoid unnecessary nested scrollbars.
- Prevent background page scrolling while the modal is open.
- Restore normal page scrolling after closing the modal.

## 7. Technical Requirements

- Inspect the existing modal component before changing it.
- Reuse the existing shadcn/ui Dialog component if already implemented.
- Use existing global CSS colors and typography.
- Use existing responsive breakpoints and Tailwind conventions.
- Avoid hardcoded colors.
- Avoid unnecessary dependencies.
- Preserve the existing demo preview functionality.
- Do not modify backend architecture.
- Do not rewrite unrelated components.

## 8. Responsive Testing

Test the modal at these viewport widths:

| Device       |  Width |
| ------------ | -----: |
| Small Mobile |  320px |
| Mobile       |  375px |
| Large Mobile |  425px |
| Tablet       |  768px |
| Laptop       | 1024px |
| Desktop      | 1440px |

Verify both Desktop and Mobile preview modes at different viewport sizes.

## 9. Final Verification

- [ ] View Demo button opens the modal correctly.
- [ ] Modal fits within all viewport sizes.
- [ ] Desktop preview scales correctly.
- [ ] Mobile preview scales correctly.
- [ ] Desktop/Mobile toggle works.
- [ ] Preview content does not get unexpectedly cropped.
- [ ] Preview scrolling works correctly.
- [ ] Modal header and close button remain accessible.
- [ ] No horizontal overflow.
- [ ] Background scrolling is handled correctly.
- [ ] English and Bangla content works.
- [ ] Existing functionality remains unchanged.

## Final Instruction

First inspect the existing View Demo modal and understand how Desktop and Mobile previews are rendered.

Then fix the responsive behavior without changing the existing visual identity or unnecessarily rewriting the component.

**The modal itself and the website preview inside it must both be responsive independently.**
