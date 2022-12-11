const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

const PROD = JSON.parse(process.env.NODE_ENV == "production")

module.exports = {
	entry: {
		background_scripts: "./background_scripts/background.ts",
		popup: "./popup/popup-script.ts",
	},
	output: {
		path: path.resolve(__dirname, "addon"),
		filename: "[name]/index.js",
	},
	resolve: {
		extensions: [".ts"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	mode: "none",
	optimization: {
		minimize: PROD,
		minimizer: [new TerserPlugin({ parallel: true })],
	},
}
