const defaultTheme = require('tailwindcss/defaultTheme');

import starlightPlugin from '@astrojs/starlight-tailwind';

// useful tools to generate colors palettes
// https://www.tailwindcolorpalette.com/

// Generated color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const accent = {
  200: '#abd79f',
  500: '#37AD00',
  600: '#1c5800',
  700: '#174700',
  800: '#103300',
  900: '#113d00',
  950: '#0a2c00'
};
const gray = {
  100: '#f5f6f5',
  200: '#eceeec',
  300: '#c0c3c0',
  400: '#888d87',
  500: '#555954',
  700: '#363935',
  800: '#242823',
  900: '#171917'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: { accent, gray },
      outlineColor: accent,
      ringColor: accent
    }
  },
  plugins: [starlightPlugin()]
};
