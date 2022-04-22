import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import legacy from '@vitejs/plugin-legacy'

const resolve = (p: string) => path.resolve(__dirname, p)

export default ({ mode }) => {
	const __DEV__ = mode === 'development'
	return defineConfig({
		base: __DEV__ ? '/' : './',
		plugins: [
			vue(),
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
			})
		],
		build: {
			rollupOptions: {
				input: 'index.html',
			},
		},
		resolve: {
			alias: {
				'@': resolve('src'),
			},
		},
		server: {
			port: 3000,
			host: '0.0.0.0',
		},
	})
}
