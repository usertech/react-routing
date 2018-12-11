module.exports = {
	use: [
		[
			'@neutrinojs/library',
			{
				name: '@usertech/react-routing',
				babel: {
					// Override options for babel-preset-env
					presets: [
						['babel-preset-env', {
							// Passing in browser targets to babel-preset-env will replace them
							// instead of merging them when using the 'web' target
							targets: {
								browsers: ["last 2 versions", "ie >= 7"],
							}
						}]
					]
				}
			},
		],
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		'@usertech/neutrino-preset-eslint-prettier',
	],
};
