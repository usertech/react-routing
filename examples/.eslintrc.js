module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
	], // extending recommended config and config derived from eslint-config-prettier
	plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
	rules: {
		'prettier/prettier': [
			// customizing prettier rules (unfortunately not many of them are customizable)
			'error',
			{},
		],
		'react/prop-types': 0, // adding some custom ESLint rules
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		sourceType: 'module',
	},
	globals: {
		process: true,
		window: true,
		document: true,
		URL: true,
		navigator: true,
		console: true,
		fetch: true,
	},
};
