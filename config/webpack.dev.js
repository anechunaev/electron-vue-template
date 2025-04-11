const path = require('node:path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { createWebpackConfig } = require('./createWebpackConfig');
const styleLoader = require('./styleLoader');
const imageLoader = require('./imageLoader');
const fontLoader = require('./fontLoader');

module.exports = createWebpackConfig({
	target: 'electron-renderer',
	entry: {
		main: path.resolve(__dirname, '../src/main.ts'),
		render: path.resolve(__dirname, '../src/render.ts'),
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'public/[name].js',
		assetModuleFilename: 'public/[name][ext]',
	},
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
		},
		styleLoader({
			isScss: true,
			prodEnv: false,
		}),
		imageLoader({}),
		fontLoader(),
	],
	plugins: [
		new webpack.DefinePlugin({
			process: { env: { NODE_ENV: '"development"' } },
			__PLATFORM__: '"web"',
			__VUE_OPTIONS_API__: 'false',
			__VUE_PROD_DEVTOOLS__: 'false',
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'public/[name].css',
		}),
		new WebpackManifestPlugin(),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
	],
});
