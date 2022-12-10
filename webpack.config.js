const path = require("path")

module.exports = {
	entry: {
		background_scripts: "./background_scripts/background.ts",
		popup: "./popup/popup-script.ts",
	},
	output: {
		path: path.resolve(__dirname, "addon"),
		filename: "[name]/index.js",
	},
	mode: "none",
}
