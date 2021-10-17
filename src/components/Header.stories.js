import React from 'react'
import Header from './Header'
import useTheme from '../hooks/useTheme'
import ThemeToggleButton from './ThemeToggleButton'

export default {
	title: ' Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		fixHeader: {
			name: 'fixHeader',
			description: 'Prevent the header from collapsing on page page scroll',
			control: { type: 'boolean' },
			table: {
				type: {
					summary: 'boolean',
					detail: 'pass this prop down from the Layout component'
				},
				defaultValue: {
					summary: false
				}
			}
		}
	}
}

const Template = args => {
	const theme = useTheme()
	return (
		<Header
			{...args}
			themetogglebutton={<ThemeToggleButton settheme={theme.setTheme} />}
		/>
	)
}

export const Primary = Template.bind({})
