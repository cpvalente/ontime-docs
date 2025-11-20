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
              label: "Ontime's Youtube Channel",
              url: "https://www.youtube.com/@ontimeapp",
              description: "The official Youtube channel for Ontime.",
            },
            {
              label: "Ontime's Discord",
              url: "https://discord.com/invite/eje3CSUEXm",
              description: "The official Discord server for Ontime.",
            },
            {
              label: "Ontime's Subreddit",
              url: "https://www.reddit.com/r/ontimeapp",
              description: "The official Subreddit for Ontime.",
            },
          ],
        }),
      ],
      title: "Ontime documentation",
      favicon: "./favicon.ico",
      logo: {
        src: "./src/assets/images/logo.png",
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
        {
          icon: "youtube",
          label: "Youtube",
          href: "https://www.youtube.com/@ontimeapp",
        },
        {
          icon: "reddit",
          label: "Reddit",
          href: "https://www.reddit.com/r/ontimeapp",
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
          items: [
            {
              label: "✨Ontime Cloud✨",
              link: "/ontime-cloud/",
            },
            {
              label: "Manage your stages",
              link: "/ontime-cloud/manage-stages/",
            },
            {
              label: "Manage your team",
              link: "/ontime-cloud/manage-team/",
            },
            {
              label: "Ontime Cloud FAQ",
              link: "/ontime-cloud/cloud-faq/",
            },
            {
              label: "Tips",
              autogenerate: { directory: "ontime-cloud/tips" },
            },
          ],
        },
        {
          label: "Ontime concepts",
          autogenerate: { directory: "concepts" },
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
              label: "Automated views",
              autogenerate: { directory: "interface/automated" },
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
            {
              label: "Youtube Channel",
              link: "https://www.youtube.com/@ontimeapp",
              badge: "Link",
              attrs: { target: "_blank" },
            },
            {
              label: "Subreddit",
              link: "https://www.reddit.com/r/ontimeapp",
              badge: "Link",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
  ],
});
