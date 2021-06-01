import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import themes from '../styles/themes'
import ToggleDarkMode from './ToggleDarkMode'
import './layout.css'
import { useSpring } from 'react-spring'
import useResponsive from '../hooks/useResponsive'

const PageWrapper = styled.div`
	margin: 0;
	padding: 5px 10px;
	///// temporay style for testing 
	pre {
		color: red;
	}
	///////////////////////////////
`

const Layout = ({ children, themeToggle }) => {
	const responsive = useResponsive()
	const [theme, set] = useSpring(() => ({
		to: themes.dark,
		from: themes.light,
		onChange: x => (document.body.style.backgroundColor = x.value.background)
	}))

	const toggleTheme = () => () => {
		const currentTheme = theme.name.get()
		const newTheme = currentTheme === 'dark' ? themes.light : themes.dark
		set({
			to: newTheme
		})
	}

	return (
		<ThemeProvider theme={theme}>
			<PageWrapper>
				<pre>
					width: {responsive.windowSize.width} height:{' '}
					{responsive.windowSize.height}
				</pre>
				{children}
				<ToggleDarkMode onClick={themeToggle ? themeToggle : toggleTheme()} />
			</PageWrapper>
		</ThemeProvider>
	)
}

export default Layout
