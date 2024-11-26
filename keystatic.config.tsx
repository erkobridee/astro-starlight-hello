import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },

  singletons: {
    i18n: singleton({
      label: 'i18n',
      path: 'src/content/i18n/pt-BR',
      format: { data: 'json' },
      schema: {}
    })
  },

  collections: {
    docs: collection({
      label: 'Docs',
      slugField: 'title',

      // it lacks support for i18n directories
      path: 'src/content/docs/**',
      format: { contentField: 'content' },

      // it's not easy to map the fields
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description'
        }),
        template: fields.text({
          label: 'Template'
        }),
        hero: fields.object({
          title: fields.text({
            label: 'Title'
          })
        }),

        content: fields.mdx({
          label: 'Content'
        })
      }
    })
  }
});
