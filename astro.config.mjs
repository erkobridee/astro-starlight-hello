// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// https://starlight.astro.build/guides/i18n/
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
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						'pt-BR': 'Referências'
					},
					autogenerate: { directory: 'reference' },
				},
			],

			customCss: ['./src/assets/styles/tailwind.css'],

      components: {
        LanguageSelect: './src/components/starlight-overrides/LanguageSelect.astro'
      }
		}),

		tailwind({ applyBaseStyles: false }),
	],
});
