import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: "server",
  adapter: cloudflare(),
	site: "https://docs.getontime.no",
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: "Ontime documentation",
			favicon: "./favicon.ico",
			logo: {
				src: "./src/assets/images/icon.webp",
				replacesTitle: true,
			},
			customCss: ["./src/styles/custom.css"],
			social: {
				github: "https://github.com/cpvalente/ontime",
				discord: "https://discord.com/invite/eje3CSUEXm",
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
							label: "Integrations",
							autogenerate: { directory: "api/integrations" },
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
