module.exports = {
	root: true,
	extends: ['.eslintrc.simple.cjs', '@unocss', 'prettier'],
	rules: {
		'@unocss/order': 0,
	},
};
