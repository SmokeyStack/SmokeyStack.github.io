module.exports = {
	lang: 'en-US',
	title: 'SmokeyStack',
	description: 'Website for SmokeyStack.',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		docsDir: 'docs',
		lastUpdated: 'Last Updated',
		sidebar: [
			{
				text: 'About',
				children: [
					{ text: 'About Me', link: '/About/AboutMe' },
					{ text: 'Links', link: '/About/Links' }
				]
			},
			{ text: 'Download', link: '/Downloads/ComingSoon' }
		]
	}
}
