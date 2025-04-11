module.exports = ({ isServer = false, isProd = false }) => ({
	test: /\.(png|jpe?g|gif|svg|webp)$/,
	type: 'asset',
	generator: {
		emit: !isServer,
		// Webpack issue: https://github.com/webpack/webpack/discussions/17715
		publicPath: isProd ? '//' : '//static/',
	},
});
