import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js';
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
				prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},
		extensions: [".svelte", ...mdsvexConfig.extensions],
		preprocess: [mdsvex(mdsvexConfig)]

	},
	files: {
		lib: 'scr/lib',
		routes: 'src/routes',
	},
	preprocess: sveltePreprocess()
};

export default config;

