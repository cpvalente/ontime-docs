[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Ontime docs

This repo contains the documentation for the Ontime project.
It is build with Astro and starlight, please see the documentation

# Contributing

Ontime is a community project and any contribution is valuable.
If you have have questions, call for clarifications or suggestions, please open an issue.

If you are comfortable with development, you are also welcome to create a Pull Request.

## 🚀 Project Structure

See below the main directories and files of the project.
We omit the files inside the documentation as they would tend to get out of sync with implementation.

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   |   └── additional-notes    <--- Implementation specific notes
│   │   |   └── api                 <--- API documentation
│   │   |   └── interface           <--- Documentation of the views
│   │   |   └── ontime              <--- Introduction documents
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
