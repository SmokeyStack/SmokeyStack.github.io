module.exports = {
	lang: 'en-US',
	title: 'SmokeyStack',
	description: 'Website for SmokeyStack.',

	head: [
		// Enable to make the bedrock wiki installable
		// [
		// 	'link',
		// 	{
		// 		rel: 'manifest',
		// 		type: 'application/json',
		// 		href: '/manifest.webmanifest',
		// 	},
		// ],
		// [
		// 	'script',
		// 	{
		// 		src: '/registerSW.js',
		// 	},
		// ],
	],

	markdown: {
		lineNumbers: true
	},

	themeConfig: {
		//repo: 'bedrock-oss/bedrock-wiki-vite',
		docsDir: 'docs',

		lastUpdated: 'Last Updated',
		// vitepress config right now
		/*algolia: {
			apiKey: 'c57105e511faa5558547599f120ceeba',
			indexName: 'vitepress',
		},

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',

		nav: [
			{
				text: 'Discord',
				link: '/discord',
				activeMatch: '^/discord',
			},
			{
				text: 'Contribute',
				link: '/contribute',
				activeMatch: '^/contribute',
			},
			{
				text: 'Docs',
				link: 'https://bedrock.dev',
			},
			{
				text: 'MS Docs',
				link: 'https://docs.microsoft.com/en-us/minecraft/creator/',
			},
			// {
			// 	text: 'News',
			// 	link: '/news',
			// 	activeMatch: '^/news',
			// },
		],*/

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
