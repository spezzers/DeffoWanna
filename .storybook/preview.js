import themes from '../src/styles/themes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body { 
		background-color: ${props => props.theme.background};
		color: red;
	}
`

export const parameters = {
	backgrounds: {
		disable: true
	},
	controls: { expanded: true },
	layout: 'centered'
}

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		toolbar: {
			icon: 'mirror',
			items: [
				{
					title: 'light',
					value: themes.light
				},
				{
					title: 'dark',
					value: themes.dark
				}
			]
		}
	}
}


const getTheme = themeName => {
	// for some reason 'context.globals.theme' (themeName) 
	// inconsistently returns either a string or an object
	if (typeof themeName === 'string') {
		return themes[themeName]
	}
	else {
		return themeName
	}
}

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme)
	return (
		<ThemeProvider theme={theme}>
			<Story {...context} />
			<GlobalStyle theme={theme} />
		</ThemeProvider>
	)
}

export const decorators = [withThemeProvider]
