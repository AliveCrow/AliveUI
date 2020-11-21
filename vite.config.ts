const path = require('path')
import { autoRouters } from './src/plugins/auto-router'
import { md } from "./src/plugins/import-md";

module.exports = {
	// 引入第三方的配置
	// optimizeDeps: {
	// 	include: ["axios",]
	// },
	plugins: [],
	alias: {
		// alias a path to a fs directory
		// the key must start and end with a slash
		'/@/': path.resolve(__dirname, 'src'),
	},
	cssPreprocessOptions: {
		scss: {
			//设置公共变量
			additionalData: `@import "./src/lib/var.scss";`,
		}
	},

}