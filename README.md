# Hello Astro Starlight

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Initial setup

```
npm create astro@latest -- --template starlight/tailwind
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                                  |
| :------------------------ | :-------------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                                   |
| `npm start`               | Starts local dev server at `localhost:4321`                                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                             |
| `npm run sync`            | Run the CLI command `astro sync` that generates TypeScript types for all Astro modules. |
| `npm run build`           | Build your production site to `./dist/`                                                 |
| `npm run preview`         | Preview your build locally, before deploying                                            |
| `npm run build-n-preview` | Build the production site and run the preview                                           |
| `npm run lint`            | Run the `prettier` and `eslint`                                                         |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                        |
| `npm run astro -- --help` | Get help using the Astro CLI                                                            |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## References

- [@astrojs/svelte | Astro Docs](https://docs.astro.build/en/guides/integrations-guide/svelte/)

- [Internationalization (i18n) | Guides - Starlight](https://starlight.astro.build/guides/i18n/)

- [Authoring Content in Markdown | Guides - Starlight](https://starlight.astro.build/guides/authoring-content/)

- [Custom 404 page - Customizing Starlight | Guides - Starlight](https://starlight.astro.build/guides/customization/#custom-404-page)

- [Custom fonts - Customizing Starlight | Guides - Starlight](https://starlight.astro.build/guides/customization/#custom-fonts)

  - [Poppins | Fontsource](https://fontsource.org/fonts/poppins)

  - [Poppins | Google Fonts](https://fonts.google.com/specimen/Poppins)

- [CSS & Styling | Guides - Starlight](https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor)

  - Contrast level: `AAA`

  - Accent [ Hue: `139`, Chroma: `0.27` ]

  - Gray [ Hue: `139`, Chroma: `0.1` ]

  - base color: `#1c5800`

- code logic to load the documents from `src/content/docs` : [Starlight repo - packages/starlight/utils/routing.ts](https://github.com/withastro/starlight/blob/6f3202b3eb747de8a1cfcba001ab618d5fdee44a/packages/starlight/utils/routing.ts)

### Override Starlight Components

- [Overriding Components | Guides - Starlight](https://starlight.astro.build/guides/overriding-components/)

- [Overrides Reference | Reference - Starlight](https://starlight.astro.build/reference/overrides/)

### Examples of customizations

- [[GitHub] kinde-oss/documentation](https://github.com/kinde-oss/documentation)

- [[GitHub] mearashadowfax/ScrewFast](https://github.com/mearashadowfax/ScrewFast) - Open-source Astro website template with sleek, customizable TailwindCSS components. [ Interesting case: site, blog and documentation ]

### Examples of Themes

- [[GitHub] HiDeoo/starlight-theme-rapide](https://github.com/HiDeoo/starlight-theme-rapide) - Starlight theme inspired by the Visual Studio Code Vitesse theme

- [[GitHub] Fevol/starlight-theme-obsidian](https://github.com/Fevol/starlight-theme-obsidian) - Starlight theme inspired by the style of Obsidian Publish sites

### Examples of Blog

- [[GitHub] HiDeoo/starlight-blog](https://github.com/HiDeoo/starlight-blog) - Starlight plugin to add a blog to your documentation

  - [[GitHub] wasp-lang/open-saas/opensaas-sh/blog](https://github.com/wasp-lang/open-saas/tree/main/opensaas-sh/blog)

- [[GitHub] rebecamurillo/astro-blog-i18n-starter](https://github.com/rebecamurillo/astro-blog-i18n-starter) - Astro built starter project for a static website and blog witth multilingual i18n configuration.

### Docker

- [Build your Astro Site with Docker | Astro Docs](https://docs.astro.build/en/recipes/docker/)

- [How to deploy your Astro static site with Nginx and Docker | Michaël Gainyo](https://michaelgainyo.github.io/blog/deploy-astro-build-static-site-with-docker-nginx/)

- [How to Dockerize and Deploy Astro | DEV Community](https://dev.to/code42cate/how-to-dockerize-and-deploy-astro-6ll)

#### Commands

##### Build image

- `docker build --no-cache -t <your-astro-image-name> .`

```sh
docker build --no-cache -t astro-starlight-hello .
```

or

```sh
npm run docker:build
```

- to check the container content

```sh
docker run -it astro-starlight-hello sh
```

or

```sh
npm run docker:check
```

##### Remove image

- `docker rmi -f <your-astro-image-name>`

```sh
docker rmi -f astro-starlight-hello
```

or

```sh
npm run docker:rmi
```

##### Run

- `docker run -p <local-port>:<container-port> <your-astro-image-name>`

```sh
docker run -p 8080:8080 astro-starlight-hello
```

or

```sh
npm run docker:run
```

###### detached mode

- start `docker run --name <container-name> -d -p <local-port>:<container-port> <your-astro-image-name>`

```sh
docker run --name nginx -d -p 8080:8080 astro-starlight-hello
```

or

```sh
npm run docker:rund
```

- stop `docker stop <container-name>`

```sh
docker stop nginx
```

or

```sh
npm run docker:stopd
```
