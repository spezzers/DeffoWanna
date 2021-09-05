import React from 'react'
import Header from './Header'
import useTheme from '../hooks/useTheme'
import ThemeToggleButton from './ThemeToggleButton'

export default {
	title: ' Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
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
