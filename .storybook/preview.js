import themes from '../src/styles/themes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import '@storybook/addon-console'
import { useDarkMode } from 'storybook-dark-mode'


const GlobalStyle = createGlobalStyle`
	body { 
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
	}
`

export const parameters = {
	backgrounds: {
		disable: true
	},
	controls: { expanded: true },
	layout: 'centered',
	matchers: {
		color: /(background|color)$/i,
		date: /Date$/,
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
