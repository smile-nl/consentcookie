var path = require('path');
var config = require('../config');

var merge = require('webpack-merge');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var devWebpackConfig = require('./webpack.dev.conf');

module.exports = merge(devWebpackConfig, {
	// eval-source-map is faster for development
	devtool : false,
	plugins : [
	// http://vuejs.github.io/vue-loader/workflow/production.html
	new webpack.DefinePlugin({
		'process.env' : env
	}), new webpack.optimize.UglifyJsPlugin({
		compress : {
			warnings : false
		}
	}), new webpack.optimize.OccurenceOrderPlugin(),
	// generate dist index.html with correct asset hash for caching.
	// you can customize output by editing /index.html
	// see https://github.com/ampedandwired/html-webpack-plugin
	new HtmlWebpackPlugin({
		filename : process.env.NODE_ENV === 'testing' ? 'index.html' : config.build.index,
		template : 'index.html',
		inject : true,
		minify : {
			removeComments : true,
			collapseWhitespace : true,
			removeAttributeQuotes : true
		}
	})]
});
