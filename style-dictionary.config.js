import StyleDictionary from 'style-dictionary'

// Register custom format for Tailwind CSS v4 theme
StyleDictionary.registerFormat({
  name: 'tailwind/theme-css',
  format: function (dictionary) {
    let themeVars = ''

    // Process all tokens and organize them for Tailwind v4 @theme
    dictionary.allTokens.forEach((token) => {
      const path = token.path

      // Handle color tokens
      if (path[0] === 'color') {
        if (path[1] === 'brand') {
          // Brand colors: color.brand.default -> --color-brand-default
          themeVars += `  --color-brand-${path[2]}: var(--color-brand-${path[2]});\n`
        } else if (path[1] === 'grayscale') {
          // Grayscale: color.grayscale.black -> --color-grayscale-black
          themeVars += `  --color-grayscale-${path[2]}: var(--color-grayscale-${path[2]});\n`
        }
      }

      // Handle component tokens
      if (path[0] === 'component') {
        const componentName = path[1] // button, avatar, etc.
        const variantName = path[2] // primary, secondary, etc.
        const property = path[3] // background, text, border, etc.
        const state = path[4] // default, hover, active, disabled

        // Create unique property names that include the state
        // e.g., --color-button-primary-background-default: var(--component-button-primary-background-default);
        if (state) {
          themeVars += `  --color-${componentName}-${variantName}-${property}-${state}: var(--${token.name});\n`
        } else {
          // For properties without states (like border-radius, padding)
          themeVars += `  --color-${componentName}-${variantName}-${property}: var(--${token.name});\n`
        }
      }
    })

    return `/* Auto-generated from design tokens - DO NOT EDIT MANUALLY */
@theme {
${themeVars}}
`
  },
})

export default {
  source: [
    'src/design-tokens/01-primitive/**/*.json',
    'src/design-tokens/02-brand/**/*.json',
    'src/design-tokens/03-semantic/**/*.json',
    'src/design-tokens/04-component/**/*.json',
    'src/design-tokens/05-platform/**/*.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/',
      files: [
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/design-tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
    tailwind: {
      transformGroup: 'css',
      buildPath: 'src/',
      files: [
        {
          destination: 'tailwind-theme.css',
          format: 'tailwind/theme-css',
        },
      ],
    },
  },
}
