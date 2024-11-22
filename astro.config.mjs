// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// https://starlight.astro.build/guides/i18n/
// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  redirects: {
    '/': '/en'
  },

  integrations: [
    starlight({
      disable404Route: true,

      defaultLocale: 'en',

      locales: {
        en: { label: ' English' },
        'pt-br': { label: 'Português', lang: 'pt-BR' }
      },

      title: {
        en: 'Docs with Tailwind',
        'pt-BR': 'Docs com Tailwind'
      },

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

      customCss: [
        './src/assets/styles/tailwind.css'
        // './src/assets/styles/custom.css'
      ],

      components: {
        LanguageSelect:
          './src/components/starlight-overrides/LanguageSelect.astro'
      },

      // https://starlight.astro.build/reference/configuration/#social
      social: {
        github: 'https://github.com/erkobridee'
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
      ]
    }),

    tailwind({ applyBaseStyles: false })
  ]
});
