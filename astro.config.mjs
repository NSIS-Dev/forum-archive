// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import castro from './.castro/integration.ts';

export default defineConfig({
	integrations: [
		castro({
			title: 'Forum Archive',
			description: 'Unofficial archive for the NSIS discussion forum',
			keywords: ['Nullsoft 			Scriptable Install System', 'nsis', 'windows installer', 'DSL', 'install script', 'windows setup'],
			githubPages: true,
		}),
		sitemap(),
	],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Libre Franklin',
			cssVariable: '--font-sans',
		},
	],
});
