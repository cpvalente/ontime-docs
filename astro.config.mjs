import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlightLinksValidator(),
    starlight({
      title: "the-docs",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/cpvalente/ontime",
      },
      sidebar: [
        {
          label: "Ontime",
          autogenerate: { directory: "ontime" },
        },
        {
          label: "Interface",
          autogenerate: { directory: "interface" },
        },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Views",
          autogenerate: { directory: "views",  },
        },
        {
          label: "API - Feedback and control",
          autogenerate: { directory: "api" },
        },
        {
          label: "Additional Notes",
          autogenerate: { directory: "additional-notes" },
        },
        {
          label: "External links",
          items: [
            { label: "Ontime website", link: "https://www.getontime.no" },
            {
              label: "Github Repo",
              link: "https://www.github.com/cpvalente/ontime",
            },
          ],
        },
      ],
    }),
  ],
});
