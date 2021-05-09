import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { light, dark } from './themes'
import ToggleDarkMode from './ToggleDarkMode'
import './layout.css'

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.bg};
`

const Layout = ({ children, isDarkTheme }) => {
	const [darkTheme, setDarkTheme] = useState(isDarkTheme || false)

	const theme = isDarkTheme ? isDarkTheme : darkTheme ? dark : light

	useEffect(() => {
		document.body.style.backgroundColor = theme.bg
	}, [darkTheme, theme.bg])

	const toggleTheme = () => setDarkTheme(!darkTheme)

	return (
		<ThemeProvider theme={theme}>
			<Main>
				{children}
				<ToggleDarkMode onClick={toggleTheme} />
			</Main>
		</ThemeProvider>
	)
}

export default Layout
