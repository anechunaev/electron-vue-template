const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostCSSPlugins = require('postcss-preset-env');

module.exports = ({ isScss = true, isServer = false, exclude, prodEnv = true }) => ({
	test: isScss ? /\.s(c|a)ss$/ : /\.css/,
	use: [
		isServer
			? undefined
			: {
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '/dist',
					emit: !isServer,
				},
			},
		{
			loader: 'css-loader',
			options: {
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [
						PostCSSPlugins({
							stage: 0,
						}),
					],
				},
			},
		},
		isScss
			? {
					loader: 'sass-loader',
					options: {
						sourceMap: true,
					},
				}
			: undefined,
	].filter(Boolean),
	exclude,
});
