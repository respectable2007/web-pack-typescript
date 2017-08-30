/*定义输出文件路径*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.ts',
	module: {
		rules: [{
			test:/\.tsx?$/,
			use:'ts-loader',
			exclude: /node_modules/
		}]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.tsx','.ts','.js']
	},
	output: {
		filename:'bundle.js',
		path: __dirname
	}
};