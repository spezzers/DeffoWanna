module.exports = {
	siteMetadata: {
		title: 'deffowanna',
		siteUrl: 'https://deffowanna.design'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							showLineNumbers: false,
							noInlineHighlight: false,
							languageExtensions: [
								{
									language: 'superscript',
									extend: 'javascript',
									definition: {
										superscript_types: /(SuperType)/
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/
										}
									}
								}
							],
							prompt: {
								user: 'root',
								host: 'localhost',
								global: false
							},
							escapeEntities: {}
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			__key: 'pages'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: './src/markdown-pages/'
			}
		}
	]
}
