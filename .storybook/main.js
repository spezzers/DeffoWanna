module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'storybook-dark-mode'
	],
	core: {
		builder: 'webpack5'
	},
	webpackFinal: async config => {
		// Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
		config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
		config.module.rules[0].exclude = [/core-js/]

		// Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
		config.module.rules[0].use[0].options.plugins.push(
			require.resolve('babel-plugin-remove-graphql-queries')
		)

		config.resolve.mainFields = ['browser', 'module', 'main']
		return config
	}
}
