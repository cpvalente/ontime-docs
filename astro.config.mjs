import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://docs.getontime.no",
  integrations: [
    starlight({
      plugins: [
        starlightLinksValidator(),
        starlightLlmsTxt({
          projectName: "Ontime",
          projectDescription:
            "Documentation for Ontime, a platform for managing production and backstage operations.",
          optionalLinks: [
            {
              label: "Ontime's website",
              url: "https://www.getontime.no",
              description: "The official website for Ontime.",
            },
            {
              label: "Ontime's GitHub",
              url: "https://github.com/cpvalente/ontime",
              description: "The official GitHub repository for Ontime.",
            },
            {
              label: "Ontime's Discord",
              url: "https://discord.com/invite/eje3CSUEXm",
              description: "The official Discord server for Ontime.",
            },
          ],
        }),
      ],
      title: "Ontime documentation",
      favicon: "./favicon.ico",
      logo: {
        src: "./src/assets/images/icon.webp",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cpvalente/ontime",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/eje3CSUEXm",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/cpvalente/ontime-docs/edit/main",
      },
      sidebar: [
        {
          label: "Ontime",
          autogenerate: { directory: "ontime" },
        },
        {
          label: "Ontime Cloud",
          autogenerate: { directory: "ontime-cloud" },
        },
        {
          label: "Interface",
          items: [
            {
              label: "Interface overview",
              link: "/interface/",
            },
            {
              label: "Production views",
              autogenerate: { directory: "interface/production" },
            },
            {
              label: "Backstage views",
              autogenerate: { directory: "interface/backstage" },
            },
            {
              label: "Public views",
              autogenerate: { directory: "interface/public" },
            },
          ],
        },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Feedback and control",
          items: [
            {
              label: "API overview",
              link: "/api/",
            },

            {
              label: "Data",
              autogenerate: { directory: "api/data" },
            },
            {
              label: "Automation",
              autogenerate: { directory: "api/automation" },
            },
            {
              label: "Protocol API",
              autogenerate: { directory: "api/protocols" },
            },
          ],
        },
        {
          label: "Quick tips",
          autogenerate: { directory: "quick-tips" },
        },
        {
          label: "Additional notes",
          autogenerate: { directory: "additional-notes" },
        },
        {
          label: "External links",
          items: [
            {
              label: "Ontime website",
              link: "https://www.getontime.no",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "Github Repo",
              link: "https://www.github.com/cpvalente/ontime",
              badge: "Link",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
  ],
});
