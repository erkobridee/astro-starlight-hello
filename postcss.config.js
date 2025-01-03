import nextedImport from 'postcss-nested-import';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    /* https://github.com/eriklharper/postcss-nested-import */
    nextedImport
  ]
};

export default config;
