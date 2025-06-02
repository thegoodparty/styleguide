# goodparty-styleguide

A modern React component library with automated design tokens, Tailwind CSS v4, and comprehensive typography system.

## 📦 Installation

Install the package from npm:

```bash
npm install goodparty-styleguide
# or
yarn add goodparty-styleguide
# or
pnpm add goodparty-styleguide
```

> **Peer dependencies:** You must have `react` and `react-dom` installed in your project.

## 🚀 Usage

### Components

Import components directly from the package:

```tsx
import { Button, Input, Card } from "goodparty-styleguide";

export default function Example() {
  return (
    <Card>
      <Input placeholder="Type here..." />
      <Button variant="default">Click me</Button>
    </Card>
  );
}
```

### Typography

The styleguide includes a complete typography system with pre-styled HTML elements and utility classes:

```html
<!-- Use semantic HTML elements - they're automatically styled -->
<h1>Page Title</h1>
<p class="text-lead">Introduction paragraph with lead styling</p>
<p>Regular body text with <strong>emphasis</strong> and <a href="#">links</a></p>

<!-- Or use utility classes for custom styling -->
<p class="text-xl font-semibold">Custom styled text</p>
<button class="button-text-medium">Perfectly styled button text</button>
```

**Key Features:**
- ✅ Pre-styled HTML elements (h1-h6, p, lists, blockquotes, etc.)
- ✅ Utility classes for sizes, weights, and line heights
- ✅ CSS custom properties for all typography values
- ✅ Outfit font with system fallbacks
- ✅ Responsive and accessible defaults
- ✅ A new checklist item for the design system

## 🆕 Usage in a New Project

### Option 1: Tailwind CSS v4 or Later (Recommended)

1. Install the package and Tailwind CSS v4 or later:
   ```bash
   npm install goodparty-styleguide tailwindcss@next
   ```
   > **Note:** `tailwindcss@next` installs the latest version of Tailwind CSS (v4 or newer).

2. Import the styles in your CSS file (e.g., `src/index.css`):
   ```css
   @import 'tailwindcss';
   @import 'goodparty-styleguide/dist/index.css';
   ```
   
   > **Complete styles included:** The main CSS import includes design tokens, Tailwind theme, typography, and all component styles.

3. Use components and typography in your project:
   ```tsx
   import { Avatar, Button } from 'goodparty-styleguide';

   export default function MyComponent() {
     return (
       <article>
         <h1>Welcome to Our Platform</h1>
         <p className="text-lead">
           Get started with beautiful, consistent design.
         </p>
         
         <div className="flex items-center gap-4">
           <Avatar variant="brightyellow" size="medium">
             <Avatar.Fallback>JD</Avatar.Fallback>
           </Avatar>
           <Button variant="default">Get Started</Button>
         </div>
         
         <p>
           Use any HTML elements and they'll automatically match 
           your design system.
         </p>
       </article>
     );
   }
   ```

### Option 2: Individual CSS Files

If you need more granular control, import individual CSS files:

```css
/* Core design tokens (required) */
@import 'goodparty-styleguide/dist/design-tokens.css';

/* Tailwind color mappings (required for components) */
@import 'goodparty-styleguide/dist/tailwind-theme.css';

/* Typography system (optional) */
@import 'goodparty-styleguide/dist/typography.css';
```

Or just typography styles without components:

```css
/* Typography only */
@import 'goodparty-styleguide/dist/typography.css';
```

This gives you:
- **Text Sizes:** `.text-xs` through `.text-7xl`
- **Font Weights:** `.font-regular` (400) to `.font-bold` (700)
- **Special Styles:** `.text-lead`, `.text-large`, `.text-small`, `.text-muted`
- **Button Text:** `.button-text-large`, `.button-text-medium`, `.button-text-small`
- **All HTML elements** pre-styled with consistent typography

### Option 3: Tailwind CSS v3 (Legacy)

1. Install the package and Tailwind CSS:
   ```bash
   npm install goodparty-styleguide tailwindcss
   ```

2. Set up Tailwind in your project:
   - Run `npx tailwindcss init` to create a `tailwind.config.js`.
   - Update `tailwind.config.js` to include the design tokens:
     ```javascript
     module.exports = {
       content: [
         './src/**/*.{js,ts,jsx,tsx}',
         './node_modules/goodparty-styleguide/dist/**/*.{js,ts}'
       ],
       theme: {
         extend: {
           colors: {
             // Auto-generated design token colors
             'avatar': {
               'default': { 'background': 'var(--component-avatar-default-background)' },
               'brightyellow': { 'background': 'var(--component-avatar-brightyellow-background)' },
               'lavender': { 'background': 'var(--component-avatar-lavender-background)' },
               'halogreen': { 'background': 'var(--component-avatar-halogreen-background)' },
               'blue': { 'background': 'var(--component-avatar-blue-background)' },
               'waxflower': { 'background': 'var(--component-avatar-waxflower-background)' },
             },
             'button': {
               'default': { 
                 'background': 'var(--component-button-default-background)',
                 'text': 'var(--component-button-default-text)',
                 'border': 'var(--component-button-default-border)'
               },
               'secondary': { 
                 'background': 'var(--component-button-secondary-background)',
                 'text': 'var(--component-button-secondary-text)',
                 'border': 'var(--component-button-secondary-border)'
               },
               'destructive': { 
                 'background': 'var(--component-button-destructive-background)',
                 'text': 'var(--component-button-destructive-text)',
                 'border': 'var(--component-button-destructive-border)'
               },
               // ... other button variants
             },
             'brand': {
               'default': 'var(--color-brand-default)',
               'secondary': 'var(--color-brand-secondary)',
               'accent': 'var(--color-brand-accent)',
               'midnight': 'var(--color-brand-midnight)',
               'lavender': 'var(--color-brand-lavender)',
               'halogreen': 'var(--color-brand-halogreen)',
               'waxflower': 'var(--color-brand-waxflower)',
             }
           }
         }
       },
       plugins: []
     };
     ```

3. Import the styles in your CSS file (e.g., `src/index.css`):
   ```css
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';
   @import 'goodparty-styleguide/dist/index.css';
   ```
   
   > **Note:** In Tailwind v3, you may need to manually copy design token values to your `tailwind.config.js` for full compatibility.

## 📦 What's Included

When you install this package, you get these build artifacts in `dist/`:

| File | Purpose | When to Use |
|------|---------|-------------|
| `index.css` | Main stylesheet importing all CSS files | **Recommended** - Import this for complete styling |
| `design-tokens.css` | Core CSS custom properties for colors, spacing, etc. | Individual control - Required for any styling |
| `tailwind-theme.css` | Auto-generated Tailwind CSS v4 theme mappings | Individual control - Required for components |  
| `typography.css` | Complete typography system with Outfit font | Individual control or typography-only projects |
| `index.js` / `index.cjs` | React components (ESM/CommonJS) | JavaScript imports |
| `index.d.ts` | TypeScript definitions | Type checking |

**Quick Start:** Just import `dist/index.css` - it includes everything you need.

## 🎨 Design Token System

This package uses an automated design token system that ensures consistency between design decisions and component implementations.

### How It Works

1. **Design tokens** are defined in JSON files (`src/design-tokens/`)
2. **Style Dictionary** processes these tokens and generates CSS custom properties ([Project](https://styledictionary.com) | [Repo](https://github.com/style-dictionary/style-dictionary))
3. **Components** use semantic token classes (e.g., `bg-button-default-background`)
4. **Tailwind CSS v4** automatically picks up the generated theme

### Available Component Variants

#### Button Variants
- `default` - Primary brand button
- `secondary` - Secondary brand button  
- `destructive` - Destructive/danger actions
- `outline` - Outlined button style
- `ghost` - Minimal button style
- `whiteOutline` - White outlined for dark backgrounds
- `whiteGhost` - White ghost for dark backgrounds

#### Avatar Variants
- `default` - Default white background
- `brightyellow` - Bright yellow brand color
- `lavender` - Lavender brand color
- `halogreen` - Halo green brand color
- `blue` - Blue brand color
- `waxflower` - Wax flower brand color

### Customizing Design Tokens

To customize the design system, modify the token files in `src/design-tokens/` and run:

```bash
npm run build:tokens
```

This will regenerate all CSS custom properties and Tailwind theme files.

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/thegoodparty/styleguide.git
cd goodparty-styleguide
npm install
```

### Development Workflow

```bash
# Start the development server (for the package itself)
npm run dev

# Launch Storybook for component development
npm run storybook

# Build design tokens and launch Storybook (useful when working on tokens)
npm run storybook:tokens

# Watch for token changes and rebuild automatically (run in separate terminal)
npm run tokens:watch

# Build design tokens manually
npm run build:tokens
```

### Building & Publishing

```bash
# Build the package for distribution
npm run build

# Build Storybook for deployment
npm run build:storybook

# Clean build artifacts
npm run clean

# Publish to npm (automatically runs clean + build)
npm publish
```

### Design Token Development

The design token system is built with [Style Dictionary](https://amzn.github.io/style-dictionary/) and generates:

- **CSS Custom Properties** (`src/design-tokens.css`) - Core token definitions  
- **Tailwind Theme** (`src/tailwind-theme.css`) - Auto-generated Tailwind CSS v4 theme
- **Typography System** (`src/typography.css`) - Complete typography with Outfit font
- **JavaScript Tokens** (`src/design-tokens/tokens.js`) - Programmatic access to token values

All CSS files are automatically included in the `dist/` build output and imported via `dist/index.css`.

#### Token Architecture

```
Primitive Tokens (colors.json)
    ↓
Semantic Tokens (brand.json)
    ↓
Component Tokens (button.json, avatar.json)
    ↓
Generated CSS & Tailwind Classes
```

### Useful Development Tips

- **Working with Design Tokens**: Use `npm run tokens:watch` in one terminal and `npm run storybook` in another for live token updates
- **Quick Token Testing**: Use `npm run storybook:tokens` to rebuild tokens and restart Storybook in one command
- **Before Publishing**: The `prepublishOnly` script automatically ensures a clean build before publishing to npm
- **Tailwind CSS v4**: The package automatically generates v4-compatible `@theme` configurations

## 📄 License

MIT
