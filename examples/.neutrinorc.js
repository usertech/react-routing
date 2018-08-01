module.exports = {
	use: [
		[
			'@neutrinojs/react',
			{
				html: {
					title: 'examples',
				},
			},
		],
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		(neutrino) => neutrino.config.output.publicPath('/'),
	],
};
