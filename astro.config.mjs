// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import castro from './.castro/integration.ts';

export default defineConfig({
	integrations: [
		castro({
			title: 'NSIS Forum Archive',
	  description: 'Mirror of the NSIS discussion forum on Winamp.com',
    keywords: ['Nullsoft Scriptable Install System', 'nsis', 'windows installer', 'DSL', 'install script', 'windows setup'],
			githubPages: true,
		}),
		sitemap(),
	],
});
