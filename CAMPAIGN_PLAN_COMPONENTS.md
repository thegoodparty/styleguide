# Campaign Plan Components Analysis

**Figma Source:** [Campaign plan](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4789-18293&m=dev)
**Generated:** November 19, 2025

## Overview

This document tracks the components required for the "Campaign Plan" feature, analyzing their availability in `@styleguide` and detailing necessary modifications or creations.

---

## Common Form Components (Mobile & Desktop)

### 1. Select Component ("Item type")
*   **Status:** Available (`src/components/ui/select.tsx`)
*   **Figma Specs:**
    *   Label: "Item type *" (Font: Open Sans, Medium, 14px)
    *   Trigger Height: 40px
    *   Border Radius: 8px
    *   Border Color: `#d4d4d4`
    *   Padding: `12px` (x), `10px` (y)
    *   Icon: ChevronDown (16px)
*   **Current Implementation:**
    *   Standard shadcn `Select`.
    *   Uses `rounded-md` (typically 6px).
    *   Uses `border-input` token.
*   **Gap Analysis:**
    *   **Border Radius:** Figma uses `8px`. Our styleguide tokens define `--border-radius-base: 8px` and `--border-radius-md: 12px`. The `SelectTrigger` uses `rounded-md` (default 6px). **Gap:** 2px.
    *   **Icon Color:** Figma icon color is likely standard text or muted text. Current implementation uses `text-muted-foreground`.
*   **Pending Questions:**
    *   Is the **8px** border radius a strict requirement? (Standardizing on 6px would be easier for existing components, but we can override to 8px if critical).
    *   The icon color in Figma appears to be a specific gray (`#737373`?). Is our standard `text-muted-foreground` acceptable?
*   **Action Items:**
    *   [ ] **Update Border Radius:** Update global `rounded-md` utility to 8px.
    *   [ ] **Verify Colors:** Ensure `border-input` resolves to `#d4d4d4` (neutral-300).
    *   [ ] **Usage Pattern:** Use `FormField` + `FormLabel` + `FormControl`.

### 2. Input Component ("Title")
*   **Status:** Available (`src/components/ui/input.tsx`)
*   **Figma Specs:**
    *   Label: "Title *"
    *   Height: 40px
    *   Border Radius: 8px
    *   Border Color: `#d4d4d4`
    *   Padding: `12px` (x), `10px` (y)
    *   Placeholder Color: `#737373` (neutral-500)
*   **Current Implementation:**
    *   Standard shadcn `Input`.
    *   Uses `rounded-md` and `border-input`.
*   **Pending Questions:**
    *   Same questions as Select (Border Radius, Placeholder Color matches).
*   **Action Items:**
    *   [ ] **Verify Border Radius:** Same as Select (ensure 8px).
    *   [ ] **Verify Colors:** Ensure `border-input` matches.

### 3. Textarea / Description Input ("Description")
*   **Status:** Available (`src/components/ui/textarea.tsx`)
*   **Figma Specs:**
    *   Label: "Description"
    *   Visuals: Matches Input.
*   **Pending Questions:**
    *   Is there a max-height or min-height for this textarea? (Figma shows it at a specific height).
*   **Action Items:**
    *   [ ] **Verify Border Radius:** Same as Select/Input.

### 4. DatePicker ("Date")
*   **Status:** **Missing Composite Component** (Building blocks available: `Calendar`, `Popover`)
*   **Figma Specs:**
    *   Label: "Date *"
    *   Trigger Button:
        *   Icon: Calendar (Left aligned, 16px)
        *   Text: "Pick a date" or Selected Date (Right of icon)
        *   Height: 40px
        *   Border Radius: 8px
        *   Border Color: `#d4d4d4`
*   **Pending Questions:**
    *   On mobile, should the DatePicker open a full-screen drawer or modal instead of a popover? (Better UX for touch).
    *   Is the "Pick a date" text a placeholder or a label?
*   **Action Items:**
    *   [ ] **Create Component:** Create `src/components/ui/date-picker.tsx` (or similar).
    *   **Implementation:**
        *   Use shadcn DatePicker pattern.
        *   **Styling Override:** Ensure Calendar icon is on the **LEFT** of the text.
        *   **Styling:** Match Input/Select styling (40px height, 8px border radius).

### 5. Action Buttons ("Add" / "Cancel")
*   **Status:** `Button` component exists.
*   **Figma Specs:**
    *   Primary: `height 40px`, pill shape (`rounded-full`). Disabled state = 50% opacity.
    *   Outline: Black border, text color `#0a0a0a`, pill shape.
*   **Pending Questions:**
    *   The "Outline" button uses a stark black border. Is this a specific "Strong Outline" variant? (Our default outline is usually subtler).
*   **Action Items:**
    *   [ ] **Outline Variant:** Ensure `button-outline` can support a black border override or create a specific variant for this high-contrast outline.

---

## Task List Components (Campaign Tasks)

**Reference Node:** [4734:16665](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4734-16665&m=dev) & [4421:16132](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4421-16132&m=dev)

### 1. Task Checkbox (Circular)
*   **Status:** **Missing Pattern**.
    *   `@styleguide`: Has standard square `Checkbox`.
    *   `@gp-webapp`: Uses MUI `Checkbox` or `BlackCheckbox` (square).
*   **Figma Specs (Node 4421:16132):**
    *   **Shape:** Circular (`rounded-full`).
    *   **States:**
        *   **Enabled/Unchecked:** Circular ring.
        *   **Hover:** Circular ring (potentially bolder or different shade).
        *   **Selected/Checked:** Filled circle (Black/Primary) with white checkmark.
*   **Pending Questions:**
    *   Is the circular checkbox specific to these Tasks, or should it replace our square checkboxes globally?
*   **Action Items:**
    *   [ ] **Create `TaskCheckbox`:** Create a specific component or variant in `@styleguide`.
        *   **Option A (Variant):** Add `className="rounded-full"` to standard Checkbox.
        *   **Option B (New Component):** If the interaction/animation differs significantly, create `TaskCheckbox`.
    *   [ ] **Styling:** Ensure the check icon centers correctly in the circular shape and matches the Figma "Task Check" states.

### 2. Progress Bar ("Campaign progress")
*   **Status:** Available (`src/components/ui/progress.tsx`).
*   **Figma Specs:**
    *   Height: ~8px.
    *   Radius: Full pill shape.
    *   Color: Brand blue fill, light blue/gray track.
*   **Pending Questions:**
    *   Is the track color (background) a specific gray token?
*   **Action Items:**
    *   [ ] **Verify:** No changes needed if tokens match. Confirm `bg-primary` matches the design's blue.

### 3. Task List Item
*   **Status:** Composite pattern (Row).
*   **Figma Specs:**
    *   Layout: Checkbox (Left) + Text (Middle) + Chevron/Action (Right, on hover).
    *   Hover: Background highlight.
    *   Text: Truncated with ellipsis if too long.
    *   Tooltip: Shows full text on hover for truncated items.
*   **Pending Questions:**
    *   How should truncation behave on mobile? (Tooltip on long-press, or allow wrapping?)
    *   Do the "hover" actions (right chevron) appear on tap for mobile?
*   **Action Items:**
    *   [ ] **Create Pattern:** Implement a `TaskItem` component or pattern.
    *   [ ] **Truncation:** Use `truncate` class.
    *   [ ] **Tooltip Integration:** Wrap truncated text in `Tooltip` if overflow is detected (or always for consistency if simple).

### 4. Section Header ("Sep 7-14")
*   **Status:** Composite pattern.
*   **Figma Specs:**
    *   Text: Date range.
    *   Actions: `+` button (icon only), "View full plan" link.
    *   Layout: Flex row, space between.
*   **Pending Questions:**
    *   What happens when "View full plan" is clicked? (Navigation or expansion?)
*   **Action Items:**
    *   [ ] **Implementation:** Use `Collapsible` for the section if it expands/collapses, or a standard `div` header if it's just a grouping. The `+` button should be a `Button` with `size="icon"` and `variant="ghost"` or `outline`.

---

## Full Plan Dashboard Components

**Reference Node:** [4822:9991](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4822-9991&m=dev)

### 1. Progress Tracker (Detailed)
*   **Status:** Custom Component (Extensions of `Card` and `Progress` needed).
*   **Figma Specs:**
    *   **Container:** `rounded-xl` (12px), Border 1px solid `divider` (approx `#0000001F`).
    *   **Progress Bar:** Height `16px`, Rounded `32px`.
    *   **Typography:** Heading "Campaign progress" (24px SemiBold).
    *   **Action Button:** "Record voter contacts" (Light gray background `#E0E6EC`, Medium Text).
*   **Gap Analysis:**
    *   Standard `Progress` component is typically thin (8px). This view uses a thicker (16px) bar.
    *   Button style (`#E0E6EC` background) is specific. It resembles `variant="secondary"` but needs color verification.
*   **Action Items:**
    *   [ ] **Update Progress:** Ensure `Progress` component accepts a height prop or class (e.g., `h-4`).
    *   [ ] **Button Variant:** Verify if `secondary` variant matches `#E0E6EC`. If not, add a custom utility or variant.

### 2. "Your Full Plan" Modal
*   **Status:** `Dialog` exists, but content styling is complex.
*   **Figma Specs:**
    *   **Typography Conflict:** Header uses **Open Sans** (18px SemiBold), but Body content uses **Outfit** font family (Regular/Medium).
    *   **Content:** Rich text with ordered lists, bullet points, and section headers.
*   **Pending Questions:**
    *   **Font Family:** The designs switch between **Open Sans** (Forms/Headers) and **Outfit** (Body copy in this modal). Which is the primary font? Should we introduce Outfit as a secondary font?
*   **Action Items:**
    *   [ ] **Typography Strategy:** Clarify font usage. If Outfit is required, add it to `tailwind.config.js` (e.g., `font-outfit`).
    *   [ ] **Rich Text Styling:** Ensure we have prose/typography classes (e.g., `prose-ul`, `prose-li`) to handle the list formatting inside the modal.

### 3. Navigation Menu (Sidebar)
*   **Status:** **Exists in `@gp-webapp`** (`DashboardLayout`).
*   **Action Items:**
    *   [x] **Use Existing:** No new component needed. Ensure colors/active states match the existing implementation if modifying the shell.

---

## Mobile Layout Components (≤1024px)

**Reference Node:** [4734:11558](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4734-11558&m=dev) (Mobile View)

### 1. Mobile Bottom Drawer ("Add an item")
*   **Status:** Drawer primitives exist (`src/components/ui/drawer.tsx`) using `vaul`.
*   **Figma Specs:**
    *   Full-width bottom sheet.
    *   Translucent background gradient (white 20% overlay on black).
    *   Rounded top corners (`10px`).
    *   Centered grip handle (`8px` tall, 120px wide, muted).
    *   **Content Layout:** Max-width **384px**, centered horizontally, `16px` padding.
    *   **Footer:** Buttons stack vertically (Full width "Add", Full width "Cancel").
*   **Pending Questions:**
    *   The background overlay has a gradient effect in Figma. Is this critical, or is a standard semi-transparent black overlay acceptable?
    *   Is the drawer dismissible by dragging down? (Standard behavior, but checking confirmation).
*   **Action Items:**
    *   [ ] **Update DrawerContent:** Add support for a `max-w-[384px] mx-auto` content constraint within the full-width sheet.
    *   [ ] **Add Handle:** Create a `DrawerHandle` component or prop.
    *   [ ] **Footer Layout:** Ensure `DrawerFooter` supports vertically stacked full-width buttons.
    *   [ ] **Overlay:** Check if gradient overlay is possible via styling props.

---

## Desktop Layout Components (≥1024px)

**Reference Node:** [4734:11558](https://www.figma.com/design/KcLtUy845Ow6cVpbdScPGi/Campaign-plan?node-id=4734-11558&m=dev) (Desktop View)

### 1. Desktop Dialog ("Add an item")
*   **Status:** Dialog primitives exist (`src/components/ui/dialog.tsx`).
*   **Figma Specs:**
    *   Modal centered on screen.
    *   Border: `#d4d4d4`, Radius: `10px`.
    *   Padding: `24px`.
    *   Close Icon: Top-right, 16px, 70% opacity.
    *   **Footer:** Buttons align right, horizontal layout (Outline "Cancel" + Filled "Add").
*   **Pending Questions:**
    *   The design shows a specific opacity for the close icon. Should this be standardized across all dialogs?
    *   Is the `10px` border radius for the Dialog consistent with the 8px radius used for inputs? (Mixing radii can look inconsistent).
*   **Action Items:**
    *   [ ] **Responsive Wrapper:** Create a pattern or component (e.g., `ResponsiveDialog`) that renders `Drawer` on mobile and `Dialog` on desktop.
    *   [ ] **Styling:** Ensure `DialogContent` supports `rounded-[10px]` and specific border color.
    *   [ ] **Close Button:** Allow customization of the close icon size/opacity if default doesn't match.

### 2. Select Menu (Desktop Dropdown)
*   **Status:** `SelectContent` exists.
*   **Figma Specs:**
    *   Menu Surface: 8px radius, 1px border `#d4d4d4`.
    *   Items: 40px height, simple padding (8px left), subtle hover.
*   **Pending Questions:**
    *   Is the hover state for items a simple background change or more complex?
*   **Action Items:**
    *   [ ] **Verify Styling:** Ensure `SelectContent` inherits the 8px border radius.
    *   [ ] **Item Styling:** Check padding values match design.

### 3. Toast Notification (`Sonner`)
*   **Status:** `src/components/ui/sonner.tsx` exists.
*   **Figma Specs:** 343px width, 16px top margin (in container).
*   **Pending Questions:**
    *   Should the toast be positioned top-right or top-center?
    *   What is the duration for the toast to remain visible?
*   **Action Items:**
    *   [ ] **Verify Placement:** Ensure `Toaster` is configured for correct positioning (top-right or top-center) matching design intent.

---

## Global Style Gaps

### 1. Border Radius
*   **Figma:** consistently uses **8px** (and 10px for large containers).
*   **Codebase:** Shadcn defaults `rounded-md` to **6px**.
*   **Recommendation:** Update `tailwind.config.js` to map `borderRadius.md` to **8px** (using `var(--border-radius-base)`).

### 2. Font Family (New Conflict)
*   **Figma:** **Open Sans** (Headers/Forms) vs **Outfit** (Body text in Dashboards/Modals).
*   **Codebase:** Defaults to **Inter**.
*   **Recommendation:**
    *   Update typography tokens to prioritize **Open Sans** as the primary font.
    *   Introduce **Outfit** as a secondary font for specific dashboard/report elements if the design intent is to distinguish them.

### 3. Icon Colors
*   **Figma:** Muted gray (`#737373`).
*   **Codebase:** `text-muted-foreground` (`#70757A`).
*   **Conclusion:** Close match, likely acceptable.

---

## Recommended Implementation Plan

1.  **Global Config Updates:**
    *   Update `borderRadius.md` to **8px**.
    *   Update Font Family: Add Open Sans and Outfit.
2.  **Component Creation/Update:**
    *   Create `DatePicker` (Composite).
    *   Create/Update `ResponsiveDialog` wrapper (handles Drawer vs Dialog).
    *   Update `Drawer` internals (Handle, Content Max-Width).
    *   **New:** Implement `TaskCheckbox` (Circular variant).
    *   **New:** Implement `TaskItem` pattern with Tooltip and Truncation.
    *   **New:** Create `ProgressTracker` component (Thick progress bar + Layout).
3.  **Verification:**
    *   Check Button Outline border colors.
    *   Verify Border Colors (`#d4d4d4`).
    *   Resolve "Outfit" vs "Open Sans" usage with Design team.
