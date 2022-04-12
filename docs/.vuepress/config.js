const { path } = require('@vuepress/utils');

module.exports = {
	lang: 'en-US',
	title: 'SmokeyStack',
	description: 'This is my website',
	theme: path.resolve(__dirname, './theme/local-theme/index.js'),
	themeConfig: {
		darkMode: false,
		sidebar: {
			'/': [
				{
					text: 'About',
					collapsible: true,
					children: ['/about/about_me.md', '/about/links.md'],
				},
				{
					text: 'Downloads',
					link: '/downloads/coming_soon.md'
				},
			],
		},
	},
}