import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

//---//

import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

//---//

import packageJSON from './package.json' assert { type: 'json' };

const { name, github_pages } = packageJSON;
const isGitHubPagesBuild = !!process.env.GITHUB_PAGES;
const isGitHubPagesPreview = !!process.env.GITHUB_PAGES_PREVIEW;

//---//

// https://astro.build/config
// https://starlight.astro.build/guides/i18n/
// https://starlight.astro.build/reference/configuration/
let config = {
  redirects: {
    '/': '/en'
  },

  integrations: [
    svelte({ extensions: ['.svelte'] }),

    starlight({
      disable404Route: true,

      defaultLocale: 'en',

      locales: {
        en: { label: ' English' },
        'pt-br': { label: 'Português', lang: 'pt-BR' }
      },

      /*
      title: {
        en: 'Docs with Tailwind',
        'pt-BR': 'Docs com Tailwind'
      },
      */
      title: 'Astro Starlight Tailwind',

      // https://starlight.astro.build/guides/sidebar/#internationalization
      sidebar: [
        {
          label: 'Guides',
          translations: {
            'pt-BR': 'Guias'
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              translations: {
                'pt-BR': 'Guia de Exemplo'
              },
              slug: 'guides/example'
            }
          ]
        },
        {
          label: 'Reference',
          translations: {
            'pt-BR': 'Referências'
          },
          autogenerate: { directory: 'reference' }
        }
      ],

      customCss: ['./src/assets/styles/tailwind.css'],

      components: {
        LanguageSelect:
          './src/components/astro/starlight-overrides/LanguageSelect.astro',
        Hero: './src/components/astro/starlight-overrides/Hero.astro',
        Pagination:
          './src/components/astro/starlight-overrides/Pagination.astro'
      },

      // https://starlight.astro.build/reference/configuration/#social
      social: {
        github: 'https://github.com/erkobridee/astro-starlight-hello'
      },

      // https://starlight.astro.build/reference/configuration/#head
      // https://fonts.google.com/specimen/Poppins
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
          }
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true
          }
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          }
        }
      ],

      plugins: [starlightBlog()]
    }),

    tailwind({ applyBaseStyles: false })
  ]
};

//---//

if (isGitHubPagesBuild) {
  const base = `/${name}`;

  config = {
    ...config,
    site: isGitHubPagesPreview ? undefined : github_pages,
    base,
    redirects: {
      '/': base + '/en'
    }
  };
}

if (process.env.NODE_ENV !== 'production') {
  config.output = 'hybrid';
  config.integrations = [...config.integrations, react(), keystatic()];
}

export default defineConfig(config);
