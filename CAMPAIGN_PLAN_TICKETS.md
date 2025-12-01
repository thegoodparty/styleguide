# Campaign Plan Feature Tickets

This backlog focuses on the UI work needed to productionize the Campaign Plan experience.  
All tickets reference the analyses captured in `@styleguide/CAMPAIGN_PLAN_COMPONENTS.md` and are split between the component library and the web application.

> **Reminder:** These tickets cover UI/state scaffolding only. Task automation, backend wiring, and HubSpot/Amplitude work are out of the initial scope unless explicitly noted.

---

## 📦 Repo: `@styleguide`

Goal: supply reusable components so future product surfaces can stay consistent and migrate away from ad‑hoc MUI usage.

### [styleguide] Global Tokens & Utilities
- **Scope:** Align border radii, typography, and border colors with Campaign Plan specs.
- **Tasks:**
  - Update `tailwind.config.js` to map `borderRadius.md` (`rounded-md`) to 8px (`--border-radius-base`).
  - Add Open Sans + Outfit font families and expose `font-opensans`, `font-outfit` utilities.
  - Verify `border-input` and `text-muted-foreground` tokens match `#d4d4d4` and `#737373`, adjusting CSS variables if needed.
- **Deliverable:** Documented token changes plus migration note for downstream consumers.

### [styleguide] ResponsiveDialog System
- **Scope:** Create a responsive dialog wrapper (`ResponsiveDialog`) for use in Campaign Plan flows (add/view modal).
- **Existing Components:** `src/components/ui/dialog.tsx` and `drawer.tsx` already exist; this ticket composes them into a responsive pattern.
- **Webapp Reference:** `app/shared/utils/ResponsiveModal.tsx` (MUI) exists but we want to use a styleguide implementation for this new feature.
- **Tasks:**
  - Create `ResponsiveDialog` wrapper that renders:
    - `Drawer` (vaul) + handle + gradient overlay on mobile (`≤1024px`).
    - `Dialog` with 10px radius border + close icon with 70% opacity on desktop.
  - Expose slots for header, body, footer (stacked buttons on mobile, inline on desktop).
- **Open Questions:**
  - Should the gradient overlay exactly match the Figma spec or can we approximate with an opacity token?
  - Do we standardize close-icon opacity across all dialogs once this lands?

### [styleguide] TaskCheckbox Component
- **Source:** “Task Checkbox (Circular)” section.
- **Scope:** Build a new `TaskCheckbox` component tailored to the circular style (instead of piggybacking on the square checkbox).
- **Requirements:**
  - Implement a standalone wrapper around Radix checkbox with the circular styling hooks described below.
  - **Styling:** 
    - `size-5` (20px).
    - `rounded-full`.
    - **Unchecked:** `border-[1.5px] border-neutral-500` (ring).
    - **Hover:** Thicker or darker ring state (match Figma interaction).
    - **Checked:** `bg-black text-white` (filled circle with centered check icon).
  - Update Storybook stories to include the new variant.
- **Existing Components:** `src/components/ui/checkbox.tsx` (shadcn implementation).
- **Webapp Reference:** `app/shared/inputs/Checkbox.js` (MUI) and `BlackCheckbox.js` are custom; the new variant should enable migrating away from them.

### [styleguide] TaskItem
- **Scope:** Create a composition helper exported as `TaskItem` to standardize checkbox + text + metadata layout.
- **Features:**
  - Accepts `title` and `description` props, both applying text truncation with ellipsis if too long.
  - Accepts `date` prop: renders "Today" if match, otherwise "MMM D" format (e.g. "Sep 7").
  - Accepts `type` prop (e.g. "Event", "Text", "Robocall"): renders as a text label next to the date.
  - Layout: Checkbox (Left) + Content (Right).
- **Open Questions:**
  - On mobile, do we allow text wrapping instead of truncation (per component notes)?

### [styleguide] Loading Checklist
- **Source:** Annotation on Campaign Plan timeline view referencing Serve onboarding loading UX.
- **Scope:** Promote the existing Serve “loading steps” UI into the styleguide and extract common checklist/footer components we can reuse here.
- **Existing Assets:** `app/polls/onboarding/components/LoadingList.js` and `LoadingFooter.js`.
- **Tasks:**
  - Extract checklist + footer into Storybook demos with neutral tokens (icons: `FaRegHourglass`, `LuLoaderCircle`, `FaCheck`).
  - Provide props for step labels/status plus optional auto-advance timer hook.
  - Document migration path for Serve onboarding to consume the new component to avoid duplication.
- **Open Questions:**
  - Should the loading animation auto-advance (like the Serve implementation) or wait for API-driven status?
  - Do we need both footer variants (mobile sticky + desktop inline) in the shared component?
  - Annotation asks if this should live in Storybook—confirm expectation for documentation depth.

---

## 💻 Repo: `@gp-webapp`

Goal: build the Campaign Plan dashboard UI using the updated styleguide components, removing the bespoke MUI patterns where possible. Data wiring will fill in later.

### [webapp] Campaign Plan Dashboard Shell
- **Scope:** New page (e.g., `/dashboard/campaign-plan`) that reuses `DashboardLayout` but swaps the main content with the Campaign Plan experience.
- **Tasks:**
  - Compose top area with page title, CTA(s), and `ProgressTrackerCard`.
  - Load mock data (feature flag ready) to unblock downstream integrations.
  - Ensure responsive behavior from 1024px+.
- **Dependencies:** Wait for [styleguide] Progress Components Enhancements, otherwise polyfill with temporary styling.

### [webapp] Weekly Task Navigator
- **Scope:** Implement the weekly navigation bar (current week label, arrow buttons, “View full plan” link) per design.
- **Tasks:**
  - Use `date-fns` to derive week labels and determine when to show “Today”.
  - Provide callback placeholders for past/present/future toggles (no persistence yet).
  - Confirm whether arrow button / link components exist elsewhere or need to be implemented for this navigator.

### [webapp] Task List Rendering (UI-Only)
- **Scope:** Build a `TaskListContainer` that renders `WeeklyTaskNavigator` and grouped task sections using `TaskItem`.
- **Tasks:**
  - Map demo JSON to UI, respecting states (unchecked, hover, checked).
  - Include `WeeklyTaskNavigator` at the top of the container, followed by the list of `TaskItem`s.
- **Dependencies:** [styleguide] TaskItem.
- **Open Questions mirrored from component analysis:**
  - How should truncation behave on mobile?
  - Does “View full plan” expand/collapse the section or navigate elsewhere?

### [webapp] “Full Plan” Viewer Modal
- **Scope:** Render the full AI plan content inside `ResponsiveDialog` using the new prose utilities.
- **Tasks:**
  - Accept structured JSON (mock) and render sections: Overview, Strategic Landscape, Timeline, Budget, Community, Voter Contact Plan.
  - Include close button, scrollable body, and footer CTA placeholders.
  - Ensure keyboard/focus trapping works in both dialog and drawer modes.
- **Dependencies:** [styleguide] ResponsiveDialog System.
- **Open Questions:**
  - Should Outfit be loaded globally or scoped to this modal?
  - Do we need a download/print CTA in the modal footer (future consideration)?

---

## 🧭 Suggested Sequence

1. **Foundation (Styleguide):** [styleguide] Global Tokens → ResponsiveDialog to unlock primitives.
2. **Task UI Primitives:** [styleguide] TaskCheckbox, TaskItem, Progress Card, Loading Checklist.
3. **Webapp Shell:** [webapp] Dashboard Shell → Weekly Navigator → Task List rendering.
4. **Interactions & Modals:** [webapp] Task Interaction → “Full Plan” modal.
