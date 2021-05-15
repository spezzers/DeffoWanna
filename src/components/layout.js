import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import themes from './themes'
import ToggleDarkMode from './ToggleDarkMode'
import './layout.css'
import { useSpring, animated } from 'react-spring'

const Main = styled(animated.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.bg};
`

const Layout = ({ children }) => {
	const [styles, set] = useSpring(() => ({
		// loop: true,
		to: themes.dark,
		from: themes.light,
		onChange: x => document.body.style.backgroundColor = x.value.bg
	}))

	const toggleTheme = () => {
		const currentTheme = styles.name.get()
		const newTheme = currentTheme === 'dark' ? themes.light : themes.dark
		set({
			to: newTheme
		})
	}

	return (
		<ThemeProvider theme={styles}>
			<Main>
				{children}
				<ToggleDarkMode onClick={toggleTheme} />
			</Main>
		</ThemeProvider>
	)
}

export default Layout
