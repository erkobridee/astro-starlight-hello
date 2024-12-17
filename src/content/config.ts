import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      loader: docsLoader(),
      extend: (context) => blogSchema(context)
    })
  }),
  i18n: defineCollection({
    loader: i18nLoader() /*type: 'data'*/,
    schema: i18nSchema()
  })
};
