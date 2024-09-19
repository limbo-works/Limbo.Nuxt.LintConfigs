import simpleConfig from './eslint.config.simple.mjs';

export default [
	...simpleConfig,
	{
		rules: {
			'@unocss/order': 0,
		},
	},
];
