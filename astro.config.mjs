// @ts-check
import { defineConfig } from 'astro/config';
import icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';
import { githubPages, siteConfig } from './.castro/config.ts';

export default defineConfig({
	...githubPages(),
	...siteConfig({
    title: 'NSIS Discussion Archive',
	  description: 'Mirror of the NSIS discussion forum on Winamp.com',
    keywords: ['Nullsoft Scriptable Install System', 'nsis', 'windows installer', 'DSL', 'install script', 'windows setup'],
  }),
	vite: {
		plugins: [
			icons({
				compiler: 'astro',
			}),
			tailwindcss(),
		],
	},
});
