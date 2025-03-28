import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			exclude: [],
			include: ['src/**/*.ts'],
			reporter: ['cobertura', 'lcov', 'text', 'json', 'html'],
		},
		include: ['src/**/*.test.ts'],
	},
});
