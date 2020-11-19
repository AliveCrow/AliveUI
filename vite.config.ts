const path = require('path')


module.exports = {
	// 引入第三方的配置
	// optimizeDeps: {
	// 	include: ["axios",]
	// },
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