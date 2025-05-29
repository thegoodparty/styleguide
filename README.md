# goodparty-styleguide

A modern React component library built with automated design tokens and Tailwind CSS v4.

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

3. Use the components in your project:
   ```tsx
   import { Avatar, Button } from 'goodparty-styleguide';

   export default function MyComponent() {
     return (
       <div>
         <Avatar variant="brightyellow" size="medium">
           <Avatar.Fallback>JD</Avatar.Fallback>
         </Avatar>
         <Button variant="default">Click me</Button>
       </div>
     );
   }
   ```

### Option 2: Tailwind CSS v3 (Legacy)

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
- **JavaScript Tokens** (`src/design-tokens/tokens.js`) - Programmatic access to token values

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
