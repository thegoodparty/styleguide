# Component Usage Analysis: GoodParty Styleguide in GP-Webapp

**Styleguide Version:** 1.3.27

## Overview

This document provides a comprehensive analysis of component usage between the `goodparty-styleguide` library (based on shadcn/ui) and the `gp-webapp` application. The goal is to identify which components are currently being used and which components remain candidates for migration.

---

## 1. Components Currently Used from Styleguide

These components are actively imported from `goodparty-styleguide` in the webapp codebase:

| Component | Files Using This Component |
|-----------|---------------------------|
| **Alert** | `app/(candidate)/dashboard/polls/shared/ConfidenceAlert.js`<br/>`app/(candidate)/dashboard/polls/[id]/components/StatusAlert.js` |
| **AlertDialog** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/DeleteSegment.js`<br/>*(with sub-components: Content, Header, Footer, Title, Description, Trigger, Action, Cancel)* |
| **AlertTitle** | `app/(candidate)/dashboard/polls/shared/ConfidenceAlert.js`<br/>`app/(candidate)/dashboard/polls/[id]/components/StatusAlert.js` |
| **ArrowLeftIcon** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js` |
| **ArrowRightIcon** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js` |
| **Breadcrumb** | `app/(candidate)/dashboard/polls/shared/Crumbs.js`<br/>*(with sub-components: List, Item, Link, Page, Separator)* |
| **Button** | `app/polls/welcome/components/GetStartedButton.js`<br/>`app/shared/stepper/StepFooter.tsx`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/Download.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/SegmentSection.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/DeleteSegment.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/FiltersSheet.js`<br/>`app/(candidate)/dashboard/polls/shared/ConfidenceAlert.js`<br/>`app/(candidate)/dashboard/polls/[id]/components/PollsIssueCard.js`<br/>`app/(candidate)/dashboard/polls/create/CreatePoll.tsx`<br/>`app/(candidate)/dashboard/election-result/loss/page.js` |
| **Calendar** | `app/shared/inputs/DateInputCalendar.tsx` |
| **Card** | `app/polls/onboarding/components/TextInsight.js`<br/>`app/polls/onboarding/components/MessageCard.js`<br/>`app/(candidate)/dashboard/polls/[id]/components/PollsIssueCard.js`<br/>`app/(candidate)/dashboard/polls/[id]/issue/[issueIndex]/components/DetailsSection.js`<br/>`app/(candidate)/dashboard/polls/[id]/expand/components/SelectSection.js` |
| **CardContent** | `app/polls/onboarding/components/TextInsight.js`<br/>`app/polls/onboarding/components/NumberInsight.js`<br/>`app/polls/onboarding/components/MessageCard.js`<br/>`app/polls/onboarding/components/DataVisualizationInsight.js`<br/>`app/(candidate)/dashboard/polls/[id]/issue/[issueIndex]/components/DetailsSection.js`<br/>`app/(candidate)/dashboard/polls/[id]/expand-payment-success/components/ExpandPaymentPage.js` |
| **Checkbox** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/FiltersSheet.js` |
| **DataTable** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js` |
| **DataTableColumnHeader** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/ContactsTable.js` |
| **Input** | `app/shared/inputs/DateInputCalendar.tsx`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/SearchBar.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/FiltersSheet.js`<br/>`app/(candidate)/dashboard/polls/create/CreatePoll.tsx` |
| **Select** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/SegmentSection.js`<br/>`app/(candidate)/dashboard/polls/[id]/expand/components/SelectSection.js`<br/>`app/(candidate)/dashboard/polls/create/CreatePoll.tsx`<br/>*(with sub-components: Trigger, Content, Item, Value, Group, Label)* |
| **Sheet** | `app/(candidate)/dashboard/contacts/[[...attr]]/components/person/PersonOverlay.js`<br/>`app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/FiltersSheet.js`<br/>*(with sub-component: SheetContent)* |
| **Table** | `app/(candidate)/dashboard/polls/components/PollsTable.tsx`<br/>*(with sub-components: Body, Cell, Head, Header, Row)* |
| **Textarea** | `app/(candidate)/dashboard/polls/create/CreatePoll.tsx` |

### Summary Statistics
- **Total Base Components Used:** 18 unique base components (plus their sub-components)
- **Total Files Using Styleguide:** 25 files
- **Primary Usage Areas:** 
  - Contacts management
  - Polls/surveys
  - Dashboard features

---

## 2. Components Available but NOT Currently Used

These components are available in the styleguide but have not yet been adopted in the webapp. They are strong candidates for future migration.

### High Priority - Heavy MUI Usage

| Styleguide Component | Current Webapp Implementation | Files Affected | Recommended Migration Action |
|---------------------|-------------------------------|----------------|------------------------------|
| **Dialog** | `Modal.tsx` wraps MUI Modal | **34 files** | **High Priority:** Replace with styleguide Dialog |
| **Dialog** (AlertDialog variant) | `AlertDialog.tsx` wraps MUI Dialog | **19 files** | **High Priority:** Replace with styleguide AlertDialog (already using in 1 file) |
| **Tabs** | `Tabs.tsx` wraps MUI Tabs | 2 files | **Medium Priority:** Replace MUI Tabs wrapper |
| **Sonner** (Toast) | `Snackbar.tsx` wraps MUI Snackbar | Global provider | **Medium Priority:** Replace snackbar system with Sonner |
| **DropdownMenu** | `MoreMenu.tsx` wraps MUI Menu/MenuItem | 1 file | Replace with styleguide DropdownMenu |
| **Popover** | Direct MUI Popover usage | 1 file | Replace with styleguide Popover |
| **Tooltip** | Direct MUI Tooltip usage | 2 files | Replace with styleguide Tooltip |
| **Progress** | MUI LinearProgress/CircularProgress | 4 files | Replace with styleguide Progress |

### Medium Priority - Form Components

| Styleguide Component | Current Webapp Implementation | Files Affected | Recommended Migration Action |
|---------------------|-------------------------------|----------------|------------------------------|
| **Input + Label** | `TextField.tsx` wraps MUI TextField | **55 files** | **High Priority:** Large impact migration |
| **RadioGroup** | `RadioGroup.tsx` wraps MUI RadioGroup | 1 file (RenderInputField) | Replace MUI wrapper |
| **Form** | Custom form components with `react-hook-form` | Many files | Adopt Form wrapper for validation UI |

### Low Priority - Specialized Components

| Styleguide Component | Current Webapp Implementation | Files Affected | Recommended Migration Action |
|---------------------|-------------------------------|----------------|------------------------------|
| **Avatar** | `CandidateAvatar.tsx` (custom with next/image) | 2 files | Refactor to use Avatar composition |
| **Badge** | `Pill.tsx` custom component | 0 files (unused) | Adopt for status indicators |
| **Carousel** | `react-slick` library | 4 files | Replace 3rd party lib with styleguide Carousel |
| **Chart** | Custom charts using `recharts` directly | 8 files | Standardize on styleguide Chart wrapper |
| **IconButton** | Custom `IconButton.tsx` | Various | Replace custom component |
| **Skeleton** | `ButtonLoading.tsx`, `ChartSkeleton.tsx` | Various | Standardize loading states |

### Not Currently Used in Webapp

| Styleguide Component | Path |
|---------------------|------|
| Accordion | `src/components/ui/accordion.tsx` |
| AspectRatio | `src/components/ui/aspect-ratio.tsx` |
| Collapsible | `src/components/ui/collapsible.tsx` |
| Command | `src/components/ui/command.tsx` |
| ContextMenu | `src/components/ui/context-menu.tsx` |
| Drawer | `src/components/ui/drawer.tsx` |
| HoverCard | `src/components/ui/hover-card.tsx` |
| InputOTP | `src/components/ui/input-otp.tsx` |
| Label | `src/components/ui/label.tsx` |
| Menubar | `src/components/ui/menubar.tsx` |
| NavigationMenu | `src/components/ui/navigation-menu.tsx` |
| Pagination | `src/components/ui/pagination.tsx` |
| Resizable | `src/components/ui/resizable.tsx` |
| ScrollArea | `src/components/ui/scroll-area.tsx` |
| Separator | `src/components/ui/separator.tsx` |
| Sidebar | `src/components/ui/sidebar.tsx` |
| Slider | `src/components/ui/slider.tsx` |
| Switch | `src/components/ui/switch.tsx` |
| Toggle | `src/components/ui/toggle.tsx` |
| ToggleGroup | `src/components/ui/toggle-group.tsx` |

### New shadcn Components to Add to Styleguide

These components are available from `@shadcn` registry but not yet in the styleguide. Adding them would help replace existing MUI/custom components in the webapp:

| Component | Replaces | Webapp Usage | Add Command |
|-----------|----------|--------------|-------------|
| **Spinner** | MUI `CircularProgress`, `ButtonLoading.tsx` | 4 files + loading states | `npx shadcn@latest add spinner` |
| **Field** | `TextField.tsx` (Input + Label combo) | 55 files | `npx shadcn@latest add field` |
| **InputGroup** | Custom input with icon/button patterns | Various form inputs | `npx shadcn@latest add input-group` |

### Utility Components

| Styleguide Component | Current Webapp Implementation | Recommended Migration Action |
|---------------------|-------------------------------|-----------------------------|
| **Icons** | `@mui/icons-material`, `react-icons`, `@heroicons/react` | Styleguide exports heroicons; gradually standardize |
| **GoodPartyOrgLogo** | Custom logo implementations | Standardize branding usage |
| **GoodPartyOrgLogoWordmark** | Custom logo implementations | Standardize branding usage |

---

## 3. Custom Components in GP-Webapp (Migration Candidates)

These are local components in `gp-webapp` that could potentially be replaced with styleguide equivalents.

### Buttons (`app/shared/buttons/`)
- `PrimaryButton.tsx` → **Button** (variant="default")
- `SecondaryButton.tsx` → **Button** (variant="secondary")
- `ErrorButton.tsx` → **Button** (variant="destructive")
- `SuccessButton.tsx` → **Button** (custom variant needed)
- `WarningButton.tsx` → **Button** (custom variant needed)
- `BlackButton.tsx` → **Button** (custom variant needed)
- `PurpleButton.tsx` → **Button** (custom variant needed)
- `InfoButton.tsx` → **Button** (variant="outline")
- `IconButton.tsx` → **IconButton** from styleguide
- `Pill.tsx` → **Badge** (currently unused in webapp)
- `ButtonLoading.tsx` → **Skeleton** or loading state within **Button**

### Inputs & Forms (`app/shared/inputs/`)
- `TextField.tsx` (wraps MUI TextField) → **Input** + **Label** (used in **55 files**)
- `PasswordInput.tsx` → **Input** (type="password")
- `EmailInput.tsx` → **Input** (type="email")
- `PhoneInput.tsx` → **Input** (with formatting)
- `Checkbox.tsx` (wraps MUI Checkbox) → **Checkbox** (used in **8 files**)
- `RadioGroup.tsx` (wraps MUI RadioGroup) → **RadioGroup** + **RadioGroupItem**
- `DateInputCalendar.tsx` → Already uses **Input** + **Calendar** ✅
- `Carousel.tsx` / `CarouselResponsive.tsx` (uses react-slick) → **Carousel** from styleguide
- `RenderInputField.tsx` → Composite component, needs gradual migration

### Alerts (`app/shared/alerts/`)
- `StyledAlert.tsx` (wraps MUI Alert) → **Alert**
- `ErrorAlert.tsx` → **Alert** (variant="destructive")
- `InfoAlert.tsx` → **Alert** (variant="default")
- `NewInfoAlert.tsx` → **Alert** (variant="default")

### Utils (`app/shared/utils/`)
- `Modal.tsx` (wraps MUI Modal) → **Dialog** (used in **34 files**)
- `AlertDialog.tsx` (wraps MUI Dialog) → **AlertDialog** (used in **19 files**)
- `Tabs.tsx` (wraps MUI Tabs) → **Tabs** (used in **2 files**)
- `Snackbar.tsx` (wraps MUI Snackbar) → **Sonner** (toast notifications)
- `MoreMenu.tsx` (wraps MUI Menu) → **DropdownMenu**
- `ResponsiveModal.tsx` → **Dialog** or **Drawer** (responsive)

### Typography (`app/shared/typography/`)
- `H1.tsx` through `H6.tsx` → Could use semantic HTML with typography.css classes
- `MarketingH1.tsx` through `MarketingH5.tsx` → Marketing-specific typography
- `Body1.tsx`, `Body2.tsx` → Use standard `<p>` with typography classes
- `Subtitle1.tsx`, `Subtitle2.tsx` → Use semantic HTML
- `Caption.tsx`, `Overline.tsx` → Use semantic HTML with custom classes

### Cards (`app/shared/cards/`)
- `ResourceCard.tsx` → **Card** + **CardContent**
- `CardPageWrapper.tsx` → **Card**

### Charts (`app/shared/charts/`)
- `InsightDonutChart.js` → **Chart** (using styleguide recharts wrapper)
- `InsightPieChart.js` → **Chart**
- `InsightHorizontalBarChart.js` → **Chart**
- `InsightVerticalBarChart.js` → **Chart**
- `InsightHorizontalGaugeChart.js` → **Chart**
- `ChartSkeleton.tsx` → **Skeleton**

### Candidates (`app/shared/candidates/`)
- `CandidateAvatar.tsx` → **Avatar** + **AvatarImage** + **AvatarFallback** (used in 2 files)
- `GoalsChart.tsx` → **Chart** (uses recharts directly)

### Navigation (`app/shared/layouts/navigation/`)
- `NavDropdown.js` → **DropdownMenu** or **NavigationMenu**
- `RightSideMobile.js` → **Sheet** (mobile drawer) or **Sidebar**

---

## 4. Design Tokens & Styling

The webapp already imports the styleguide's design system:

```css
@import 'goodparty-styleguide/dist/design-tokens.css';
@import 'goodparty-styleguide/dist/tailwind-theme.css';
@import 'goodparty-styleguide/dist/typography.css';
```

This provides:
- CSS custom properties for colors, spacing, typography
- Tailwind theme extensions
- Typography utility classes

The webapp also defines custom button styles using these tokens (see `globals.css`).

---

## 5. Migration Strategy & Recommendations

### Phase 1: Highest Impact (108 files)
**Priority:** These components have the largest footprint and should be tackled first with careful planning.

| Component Migration | Files | Styleguide Component |
|---------------------|-------|---------------------|
| TextField.tsx → Input + Label | 55 | `input.tsx` + `label.tsx` |
| Modal.tsx → Dialog | 34 | `dialog.tsx` |
| AlertDialog.tsx (MUI) → AlertDialog | 19 | `alert-dialog.tsx` |

### Phase 2: Form Components (10 files)
**Priority:** Complete the form component migration for consistency.

| Component Migration | Files | Styleguide Component |
|---------------------|-------|---------------------|
| Checkbox.tsx → Checkbox | 8 | `checkbox.tsx` |
| RadioGroup.tsx → RadioGroup | 1 | `radio-group.tsx` |
| Snackbar.tsx → Sonner | 1 (global) | `sonner.tsx` |

### Phase 3: Medium Impact (14 files)
**Priority:** Lower file count but still important for consistency.

| Component Migration | Files | Styleguide Component |
|---------------------|-------|---------------------|
| Carousel.tsx (react-slick) → Carousel | 4 | `carousel.tsx` |
| CircularProgress/LinearProgress → Progress | 4 | `progress.tsx` |
| Tabs.tsx → Tabs | 2 | `tabs.tsx` |
| Tooltip (MUI) → Tooltip | 2 | `tooltip.tsx` |
| CandidateAvatar.tsx → Avatar | 2 | `avatar.tsx` |

### Phase 4: Charts & Data Visualization (8 files)

| Component Migration | Files | Styleguide Component |
|---------------------|-------|---------------------|
| InsightDonutChart.js → Chart | 1 | `chart.tsx` |
| InsightPieChart.js → Chart | 1 | `chart.tsx` |
| InsightHorizontalBarChart.js → Chart | 1 | `chart.tsx` |
| InsightVerticalBarChart.js → Chart | 1 | `chart.tsx` |
| InsightHorizontalGaugeChart.js → Chart | 1 | `chart.tsx` |
| GoalsChart.tsx → Chart | 1 | `chart.tsx` |
| Other chart files → Chart | 2 | `chart.tsx` |

### Phase 5: Low Impact (2 files + opportunistic)
**Priority:** These can be migrated opportunistically or when touched.

| Component Migration | Files | Styleguide Component |
|---------------------|-------|---------------------|
| MoreMenu.tsx → DropdownMenu | 1 | `dropdown-menu.tsx` |
| Popover (MUI) → Popover | 1 | `popover.tsx` |
| Pill.tsx → Badge | 0 (unused) | `badge.tsx` |
| ButtonLoading.tsx → Skeleton/Spinner | Various | `skeleton.tsx` / Add `spinner` |
| Custom buttons → Button variants | Various | `button.tsx` |

### Phase 6: Typography & Layout
- **Typography** → Replace custom H1-H6, Body1-2 with semantic HTML + `typography.css` classes
- **Sidebar** → `sidebar.tsx` when refactoring navigation
- **NavigationMenu** → `navigation-menu.tsx` when refactoring navigation

### MUI Components Still in Use (92 files total)

| MUI Import | Wrapper | Files |
|------------|---------|-------|
| `@mui/material/Modal` | Modal.tsx | 34 |
| `@mui/material/Dialog` | AlertDialog.tsx | 19 |
| `@mui/material/TextField` | TextField.tsx | 55 |
| `@mui/material/Checkbox` | Checkbox.tsx | 8 |
| `@mui/material/Tabs` | Tabs.tsx | 2 |
| `@mui/material/Snackbar` | Snackbar.tsx | 1 |
| `@mui/material/Menu` | MoreMenu.tsx | 1 |
| `@mui/material/Tooltip` | Direct usage | 2 |
| `@mui/material/Popover` | Direct usage | 1 |
| `@mui/material/CircularProgress` | Direct usage | 3 |
| `@mui/material/LinearProgress` | Direct usage | 1 |
| `@mui/icons-material` | Various | 92 |

---

## 6. Benefits of Full Migration

1. **Consistency:** Unified design system across the application
2. **Accessibility:** shadcn/ui components are built with ARIA compliance
3. **Maintainability:** Single source of truth for UI components
4. **Performance:** Optimized components with proper React patterns
5. **Developer Experience:** Better TypeScript support and documentation
6. **Reduced Dependencies:** Can remove Material-UI dependency
7. **Smaller Bundle Size:** Tree-shakeable, modular components

---

## 7. Challenges & Considerations

1. **Material-UI Dependency:** The app has **92 files** importing from `@mui/*`; migration must be gradual
2. **TextField Migration:** The `TextField.tsx` wrapper is used in **55 files** - this is the largest single migration
3. **Modal/Dialog Migration:** Combined **53 files** use Modal or AlertDialog wrappers
4. **Custom Styling:** Some components have custom GoodParty-specific styling that needs to be preserved
5. **API Differences:** Component APIs differ between Material-UI and shadcn/ui (e.g., event handlers, props)
6. **Design Tokens:** Ensure all custom color variants (purple, mint, cyan, etc.) are supported in styleguide
7. **Form Validation:** Ensure compatibility with existing `react-hook-form` integration
8. **Testing:** Each migrated component needs thorough testing across all use cases
9. **Icon Library:** Currently using mix of `@mui/icons-material`, `react-icons`, and `@heroicons/react`

---

## Appendix: Files Using Styleguide Components

```
app/polls/welcome/components/GetStartedButton.js
app/polls/onboarding/components/TextInsight.js
app/polls/onboarding/components/NumberInsight.js
app/polls/onboarding/components/DataVisualizationInsight.js
app/polls/onboarding/components/MessageCard.js
app/shared/stepper/StepFooter.tsx
app/shared/inputs/DateInputCalendar.tsx
app/(candidate)/dashboard/contacts/[[...attr]]/components/Download.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/ContactsTable.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/person/PersonOverlay.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/SearchBar.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/ServerDataTable.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/SegmentSection.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/DeleteSegment.js
app/(candidate)/dashboard/contacts/[[...attr]]/components/segments/FiltersSheet.js
app/(candidate)/dashboard/polls/shared/ConfidenceAlert.js
app/(candidate)/dashboard/polls/shared/Crumbs.js
app/(candidate)/dashboard/polls/components/PollsTable.tsx
app/(candidate)/dashboard/polls/create/CreatePoll.tsx
app/(candidate)/dashboard/polls/[id]/expand/components/SelectSection.js
app/(candidate)/dashboard/polls/[id]/components/PollsIssueCard.js
app/(candidate)/dashboard/polls/[id]/components/StatusAlert.js
app/(candidate)/dashboard/polls/[id]/issue/[issueIndex]/components/DetailsSection.js
app/(candidate)/dashboard/polls/[id]/expand-payment-success/components/ExpandPaymentPage.js
app/(candidate)/dashboard/election-result/loss/page.js
```

**Total:** 25 files actively using styleguide components

