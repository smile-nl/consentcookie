var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

/* adding bourbon, a sass library*/
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToBourbon = require('node-bourbon').includePaths;

module.exports = {
	entry : {
		app : './src/app.js'
	},
	output : {
		path : config.build.assetsRoot,
		publicPath : "/",
		filename : 'icookie.js'
	},
	resolve : {
		extensions : ['', '.js', '.vue'],
		fallback : [path.join(__dirname, '../node_modules')],
		alias : {
			'src' : path.resolve(__dirname, '../src'),
			'assets' : path.resolve(__dirname, '../src/assets'),
			'components' : path.resolve(__dirname, '../src/components'),
			'router' : path.resolve(__dirname, '../src/router'),
			'views' : path.resolve(__dirname, '../src/views'),
			'services' : path.resolve(__dirname, '../src/services'),
		}
	},
	resolveLoader : {
		fallback : [path.join(__dirname, '../node_modules')]
	},
	module : {
		loaders : [{
			test : /\.vue$/,
			loader : 'vue'
		}, {
			test : /\.js$/,
			loader : 'babel',
			include : projectRoot,
			exclude : /node_modules/
		}, {
			test : /\.json$/,
			loader : 'json'
		}, {
			test : /\.html$/,
			loader : 'vue-html'
		}, {
			test : /\.(png|jpe?g|gif)(\?.*)?$/,
			loader : 'url',
			query : {
				limit : 10000,
				name : utils.assetsPath('img/[name].[hash:7].[ext]')
			}
		},
		/* Font loading as Base64 */
		{
			test : /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader : 'base64-font-loader'
		}]
	},
	vue : {
		loaders : utils.cssLoaders(),
		exclude: node_modules
	},
	sassLoader: {
        includePaths: [pathToBourbon]
    }
};
