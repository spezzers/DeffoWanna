import { light, dark } from '../src/components/themes'
import { ThemeProvider } from 'styled-components'

export const parameters = {
	// actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: light.bg
			},
			{
				name: 'dark',
				value: dark.bg
			}
		]
	},
	// controls: {
	// 	matchers: {
	// 		color: /(background|color)$/i,
	// 		date: /Date$/
	// 	}
	// }
}

// can't figure out how to insert this into the background options
const getColors = theme => {
	const { name, ...colors } = { ...getTheme(theme) }
	const entries = Object.entries(colors)
	console.log(
		entries.map(color => ({
			name: color[0],
			value: color[1]
		}))
	)
}

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: ['light', 'dark']
		}
	}
}

const getTheme = theme => (theme === 'dark' ? dark : light)

const withThemeProvider = (Story, context) => {
	const theme = getTheme(context.globals.theme)
	getColors(context.globals.theme)
	return (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	)
}

export const decorators = [withThemeProvider]
