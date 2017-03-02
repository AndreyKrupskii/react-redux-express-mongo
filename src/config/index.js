const config = {
	port: 2017,
	build: {
		css: '/assets/screen.css',
		js: '/assets/bundle.js'
	},
	webpackPath: '/assets',
	mongoose: {
		uri: 'mongodb://127.0.0.1:27017/todo',
		options: {}
	}
}

export default config;