var webpack=require("webpack");
var path=require("path");
module.exports = {
	entry: ['./main.js'],
	output: {
		path:path.resolve(__dirname,'/build'), // This is where images AND js will go
		publicPath: './build/', // This is used to generate URLs
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.coffee$/,
			loader: "coffee-loader"
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	watch:true
};