import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
const accent = {
  200: '#a0d9a9',
  600: '#005722',
  900: '#003e16',
  950: '#002d0e'
};

const gray = {
  100: '#f5f7f5',
  200: '#eceeec',
  300: '#c0c3c0',
  400: '#878d88',
  500: '#545a55',
  700: '#353a35',
  800: '#242824',
  900: '#171917'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
        // serif: ['serif']
      },
      colors: { accent, gray },
      outlineColor: accent,
      ringColor: accent
    }
  },
  plugins: [starlightPlugin()]
};
