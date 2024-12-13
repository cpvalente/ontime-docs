import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import vercel from '@astrojs/vercel';

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
			plugins: [starlightLinksValidator()],
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://www.googletagmanager.com/gtag/js?id=G-8G20EBYWKR",
						defer: true,
					},
					content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8G20EBYWKR');
        `,
				},
			],
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
