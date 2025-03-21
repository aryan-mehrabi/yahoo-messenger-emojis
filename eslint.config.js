// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
  prettier,
];
