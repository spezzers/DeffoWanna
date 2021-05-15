import React from 'react'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import ToggleDarkMode from './ToggleDarkMode'
import './layout.css'
import { useSpring, animated } from 'react-spring'


const Layout = ({children, themeToggle}) => {
	const [theme, set] = useSpring(() => ({
		to: themes.dark,
		from: themes.light,
		onChange: x => document.body.style.backgroundColor = x.value.bg
	}))

	const toggleTheme = () => () => {
		const currentTheme = theme.name.get()
		const newTheme = currentTheme === 'dark' 
			? themes.light
			: themes.dark
		set({
			to: newTheme
		})
	}

	return (
		<ThemeProvider theme={theme}>
				{children}
				<ToggleDarkMode onClick={themeToggle ? themeToggle : toggleTheme()} />
		</ThemeProvider>
	)
}

export default Layout
