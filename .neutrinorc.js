module.exports = {
	use: [
		[
			'@neutrinojs/library',
			{
				name: '@usertech/react-routing',
			},
		],
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		'@usertech/neutrino-preset-eslint-prettier',
	],
};
