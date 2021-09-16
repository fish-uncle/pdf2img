const webpack = require('webpack')
const pkg = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false

module.exports = {
	publicPath: isProduction ? './' : '/',
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true,
	},
	css: {
		extract: false,
		sourceMap: false,
	},
	configureWebpack: config => {
		config.output.libraryExport = 'default'
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.version': JSON.stringify(pkg.version),
			}),
		)
	},
	chainWebpack: config => {
		if (isProduction) {
			if (needReport) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end()
			}
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
