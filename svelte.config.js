import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	files: {
		lib: 'scr/lib',
		routes: 'src/routes',
	},
	preprocess: sveltePreprocess()
};

export default config;


