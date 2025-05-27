# goodparty-styleguide

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
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🆕 Usage in a New Project

1. Install the package and Tailwind CSS:
   ```bash
   npm install goodparty-styleguide tailwindcss
   ```

2. Set up Tailwind in your project:
   - Run `npx tailwindcss init` to create a `tailwind.config.js`.
   - Update `tailwind.config.js` to include the custom colors and scan the package:
     ```javascript
     module.exports = {
       content: [
         './src/**/*.{js,ts,jsx,tsx}',
         './node_modules/goodparty-styleguide/dist/**/*.{js,ts}'
       ],
       theme: {
         extend: {
           colors: {
             'brand': {
               'primary': 'var(--color-brand-primary)',
               'secondary': 'var(--color-brand-secondary)',
               'accent': 'var(--color-brand-accent)',
               'midnight': 'var(--color-brand-midnight)',
               'lavender': 'var(--color-brand-lavender)',
               'halo-green': 'var(--color-brand-haloGreen)',
               'wax-flower': 'var(--color-brand-waxFlower)',
               'pink': 'var(--color-brand-brandPink)',
               'blue': 'var(--color-brand-brandBlue)',
               'cream': 'var(--color-brand-brandCream)'
             }
           }
         }
       },
       plugins: []
     };
     ```

3. Import the styles in your CSS file (e.g., `src/index.css`):
   ```css
   @import 'tailwindcss';
   @import 'goodparty-styleguide/dist/index.css';
   ```

4. Use the components in your project:
   ```tsx
   import { Avatar } from 'goodparty-styleguide';

   export default function MyComponent() {
     return (
       <Avatar variant="brightYellow" size="medium">
         <Avatar.Fallback>JD</Avatar.Fallback>
       </Avatar>
     );
   }
   ```

## 🛠️ Development

```bash
# Clone the repo
git clone <repository-url>
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

### Useful Development Tips

- **Working with Design Tokens**: Use `npm run tokens:watch` in one terminal and `npm run storybook` in another for live token updates
- **Quick Token Testing**: Use `npm run storybook:tokens` to rebuild tokens and restart Storybook in one command
- **Before Publishing**: The `prepublishOnly` script automatically ensures a clean build before publishing to npm

## 📄 License

MIT
