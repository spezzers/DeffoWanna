import themes from '../src/components/themes'
import { ThemeProvider } from 'styled-components'

export const parameters = {
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: themes.light.bg
			},
			{
				name: 'dark',
				value: themes.dark.bg
			}
		]
	}
}

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			items: [
				{
					title: 'light',
					value: 'light'
				},
				{
					title: 'dark',
					value: 'dark'
				}
			]
		}
	}
}
