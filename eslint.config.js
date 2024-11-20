/*
  https://eslint.org/docs/latest/use/configure/configuration-files

  https://github.com/ota-meshi/eslint-plugin-astro?tab=readme-ov-file#configuration
*/

import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },

    ignores: ['*.d.ts']
  }
];
