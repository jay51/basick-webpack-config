const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
let path = require("path");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist"
	},
	module: {
		// configuration regarding modules
		rules: [
			// babel for all modren js features
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			// css This enables you to import './style.css'
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			// files Now, import MyImage from './my-image.png'
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({ template: "index.html" })
	]
};
