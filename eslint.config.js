import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { 
    ignores: [
      'dist', 
      'storybook-static', 
      '.storybook',
      'src/design-tokens/tokens.js', // Auto-generated
      'src/tailwind-tokens.js', // Auto-generated
    ] 
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn', 
        { 
          allowConstantExport: true,
          allowExportNames: ['meta', 'default'],
        }
      ],
      
      // Prettier integration
      'prettier/prettier': 'error',
      
      // TypeScript-specific rules from the legacy config
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      
      // Unused imports detection
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    extends: [prettierConfig],
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn', 
        { 
          allowConstantExport: true,
          allowExportNames: ['meta', 'default'],
        }
      ],
      
      // Prettier integration
      'prettier/prettier': 'error',
      
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    // Design system components often export variants - relax react-refresh rules
    files: ['src/components/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // Storybook files can export anything and use hooks in render functions
    // Disable unused-imports as the plugin incorrectly flags JSX components used in stories
    files: ['**/*.stories.{js,jsx,ts,tsx}', '.storybook/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'unused-imports/no-unused-imports': 'off', // Disabled due to false positives with JSX in stories
    },
  }
)
