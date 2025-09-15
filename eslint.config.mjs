import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node, // habilita variáveis globais do Node.js
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules, // inclui as regras recomendadas do JS
      'prettier/prettier': 'error', // mostra erro se o código não seguir o Prettier
    },
  },
]);
