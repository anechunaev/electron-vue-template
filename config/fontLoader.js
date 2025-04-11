module.exports = () => ({
	test: /\.(woff(2)?|eot|ttf|otf|)$/,
	dependency: { not: ['url'] },
	type: 'asset',
	generator: {
		emit: false,
	},
});
