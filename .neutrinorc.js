module.exports = {
	use: [
		[
			'@neutrinojs/library',
			{
				name: 'react-routing',
			},
		],
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
	],
};
