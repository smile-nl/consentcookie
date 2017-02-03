var path = require('path');
var utils = require('./utils');

module.exports = {
	entry : "./source/js/icookie.js",
	output : {
		path : path.resolve(__dirname, './dist'),
		publicPath : '/dist/',
		filename : 'icookie.js'
	},
	resolveLoader : {
		root : path.join(__dirname, 'node_modules'),
	},
	module : {
		loaders : [{
			test : /\.css$/,
			loader : "style-loader!css-loader"
		}, {
			test : /\.png$/,
			loader : "url-loader?limit=100000"
		}, {
			test : /\.jpg$/,
			loader : "file-loader"
		}, {
			test : /\.html$/,
			loader : "vue-html"
		}, {
			test : /\.vue$/,
			loader : 'vue'
		}]
	},
	vue : {
		loaders : utils.cssLoaders()
	}
}; 