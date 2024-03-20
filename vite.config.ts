import { fileURLToPath, URL } from 'node:url';
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		glsl({
			include: [
				// Glob pattern, or array of glob patterns to import
				'**/*.glsl',
				'**/*.wgsl',
				'**/*.vert',
				'**/*.frag',
				'**/*.vs',
				'**/*.fs',
			],
			exclude: undefined, // Glob pattern, or array of glob patterns to ignore
			warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
			defaultExtension: 'glsl', // Shader suffix when no extension is specified
			compress: false, // Compress output shader code
			watch: true, // Recompile shader on change
			root: '/', // Directory for root imports
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/scss/base/breakpoints.scss" as break;`,
			},
		},
	},
});
