import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    extends: [js.configs.recommended],
    rules: {
      'no-console': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
    },
  },
]);
