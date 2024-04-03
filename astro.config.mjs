import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  site: "https://docs.getontime.no",
  integrations: [
    //starlightLinksValidator(),
    starlight({
      title: "Ontime documentation",
      logo: {
        src: "./src/assets/images/icon.png",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/cpvalente/ontime",
      },
      editLink: {
        baseUrl: "https://github.com/cpvalente/ontime-docs/edit/main",
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
          autogenerate: { directory: "views" },
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
