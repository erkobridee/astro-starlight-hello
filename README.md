# Hello Astro Starlight

<!-- https://www.svgviewer.dev/svg-to-data-uri -->

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Astro](https://img.shields.io/badge/-astro-gray?style=flat&logo=astro)](https://astro.build/)
[![Svelte](https://img.shields.io/badge/-svelte-gray?style=flat&logo=svelte)](https://svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/-tailwindcss-gray?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/-typescript-gray?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/-docker-gray?style=flat&logo=docker)](https://www.docker.com/)
[![DevContainers](https://img.shields.io/badge/-devcontainers-gray?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNCIgc3R5bGU9ImZpbGw6IzE5M2U2MyIvPjxwb2x5Z29uIHBvaW50cz0iMTAuNzc3IDIyLjc0MiA5LjM0MyAyMS4zNDggMTIuNzI5IDE3Ljg2NSA5LjM0NiAxNC40MTcgMTAuNzc0IDEzLjAxNyAxNS41MjUgMTcuODU5IDEwLjc3NyAyMi43NDIiIHN0eWxlPSJmaWxsOiNhZGQxZWEiLz48cG9seWdvbiBwb2ludHM9IjIxLjQyIDE5LjEwMSAyMi44NTQgMTcuNzA2IDE5LjQ2OCAxNC4yMjQgMjIuODUxIDEwLjc3NiAyMS40MjMgOS4zNzYgMTYuNjcyIDE0LjIxOCAyMS40MiAxOS4xMDEiIHN0eWxlPSJmaWxsOiNhZGQxZWEiLz48L3N2Zz4=)](https://containers.dev/)

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

### Docker Commands

| Command                | Action                                                                |
| :--------------------- | :-------------------------------------------------------------------- |
| `npm run docker:build` | `docker build --no-cache -t astro-starlight-hello .`                  |
| `npm run docker:check` | `docker run -it astro-starlight-hello sh`                             |
| `npm run docker:rmi`   | `docker rmi -f astro-starlight-hello`                                 |
| `npm run docker:run`   | `docker run -p 8080:8080 astro-starlight-hello`                       |
| `npm run docker:rund`  | `docker run --name web-preview -d -p 8080:8080 astro-starlight-hello` |
| `npm run docker:stopd` | `docker stop web-preview`                                             |
| `npm run docker:rm`    | `docker rm $(docker ps -aq --filter name=web-preview)`                |
| `npm run docker:stop`  | `run-s docker:stopd docker:rm`                                        |

<!--
docker rm $(docker ps -aq --filter name=nginx)

docker rm $(docker ps -aq)
-->

## Local Development

- [VS Code](https://code.visualstudio.com/) + [Development Containers](https://containers.dev/) ( [Customizations](https://containers.dev/supporting#visual-studio-code) | [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) )

  - [[GitHub] erkobridee/devcontainer-hello](https://github.com/erkobridee/devcontainer-hello) - Learning about Development Containers

## Test it online

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/erkobridee/astro-starlight-hello)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/erkobridee/astro-starlight-hello?devcontainer_path=.devcontainer/devcontainer.json)

## Setup a new project using this repository

You can use the `Use this template` button

### degit

```sh
npx degit erkobridee/astro-starlight-hello {project_name}
```

### create a new project based on a GitHub repository’s main branch

```sh
npm create astro@latest -- --template erkobridee/astro-starlight-hello
```

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

### View Transitions

- [View transitions | Guides - Astro Docs](https://docs.astro.build/en/guides/view-transitions/)

- [View Transitions Router API Reference | Runtime API - Astro Docs](https://docs.astro.build/en/reference/modules/astro-transitions/)

- [Guide: Add View Transitions to Starlight | Bag of Tricks](https://events-3bg.pages.dev/jotter/starlight/guide/)

  - [[GitHub] martrapp/astro-vtbot](https://github.com/martrapp/astro-vtbot) - The 👜 Bag of Tricks ✨ for Astro's View Transitions. ⭐️ Please star to support this work!

### Examples of Customizations

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
