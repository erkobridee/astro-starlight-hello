/// <reference path="../node_modules/starlight-blog/virtual.d.ts" />

declare module 'virtual:starlight/user-config' {
  const config: Record<string, any>;
  export default config;
}

declare module 'virtual:starlight/plugin-translations' {
  const translations: Record<string, any>;
  export default translations;
}
