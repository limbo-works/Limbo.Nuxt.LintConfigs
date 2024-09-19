import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.amd,
				...globals.node,
			},
		},
		plugins: {
			vue: pluginVue,
		},
		rules: {
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'prefer-destructuring': ['warn', { object: true, array: false }],
			'no-unused-vars': ['warn'],
			'no-undef': 0,
			'vue/no-v-html': 0,
			'vue/no-v-text-v-html-on-component': 0,
			'vue/require-default-prop': 0,
			'vue/no-multiple-template-root': 0,
			'vue/multi-word-component-names': 'off',
		},
	},
	// Global ignores
	{
		ignores: ['**/.nuxt/', '**/.output/'],
	},
];
