const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const TransformJson = require("transform-json-webpack-plugin")
const package = require("./package.json")

const PROD = JSON.parse(process.env.NODE_ENV == "production")

const _resolve = {
	extensions: [".ts"],
	modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
}

const _module = {
	rules: [
		{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
	],
}

module.exports = {
	entry: [path.resolve(__dirname, "src", "content", "borderify.ts")],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: path.join("content", "borderify.js"),
	},
	resolve: _resolve,
	module: _module,
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "static", "**", "*"),
					to: "./",
					context: "static/",
				},
			],
		}),
		new TransformJson({
			source: path.resolve(__dirname, "src", "manifest.json"),
			filename: "manifest.json",
			object: {
				description: package.description,
				version: package.version,
			},
		}),
	],
	optimization: {
		minimize: PROD,
		minimizer: [new TerserPlugin({ parallel: true })],
	},
}
