// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import castro from './.castro/integration.ts';

export default defineConfig({
	integrations: [
		castro({
			title: 'NSIS Forums Archive',
			githubPages: true,
		}),
		sitemap(),
	],
});
