import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {light, dark} from './themes'
import ToggleDarkMode from '../components/ToggleDarkMode'
import './layout.css'

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-color: ${props => props.theme.bg};
`

const Layout = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false)

	const theme = darkTheme ? dark : light

	useEffect(() => {
		document.body.style.backgroundColor = theme.bg
	}, [darkTheme, theme.bg])

	const toggleTheme = () => setDarkTheme(!darkTheme)

	return (
		<ThemeProvider theme={theme}>
			<Main>
				{children}
				<ToggleDarkMode onClick={toggleTheme}/>
			</Main>
		</ThemeProvider>
	)
}

export default Layout
