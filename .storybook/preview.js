import themes from '../src/styles/themes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import '@storybook/addon-console'
import { useDarkMode } from 'storybook-dark-mode'
import GlobalStyle from '../src/styles/GlobalStyle'
import '../src/styles/layout.css'

export const parameters = {
	backgrounds: {
		disable: true
	},
	controls: { expanded: true },
	layout: 'centered',
	matchers: {
		color: /(background|color)$/i,
		date: /Date$/
	}
}

const withThemeProvider = (Story, context) => {
	const theme = useDarkMode() ? themes.dark : themes.light
	return (
		<ThemeProvider theme={theme}>
			<Story {...context} />
			<GlobalStyle theme={theme} />
		</ThemeProvider>
	)
}

export const decorators = [withThemeProvider]
