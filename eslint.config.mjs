import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // TypeScript handles these
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Allow explicit any when needed (warn instead of error)
      '@typescript-eslint/no-explicit-any': 'warn',

      // Consistency
      'prefer-const': 'warn',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '.astro/'],
  }
)
