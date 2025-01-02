// https://eslint.org/docs/latest/use/configure/configuration-files
import js from '@eslint/js';

// https://github.com/ota-meshi/eslint-plugin-astro?tab=readme-ov-file#configuration
import eslintPluginAstro from 'eslint-plugin-astro';

// https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#configuration
import eslintPluginSvelte from 'eslint-plugin-svelte';

//---//

// https://www.npmjs.com/package/globals
import globals from 'globals';

import svelteConfig from './svelte.config.js';

//---///

export default [
  js.configs.recommended,

  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],

  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    files: ['src/**/*.svelte'],

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parserOptions: {
        // Specify the `svelte.config.js`.
        svelteConfig,

        // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
        parser: '@typescript-eslint/parser'
      }
    }
  },

  {
    files: ['**/*.mjs'],

    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },

    ignores: ['*.d.ts']
  }
];
