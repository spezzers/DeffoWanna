import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'

const GlobalStyle = createGlobalStyle`
* {
	-webkit-font-smoothing: antialiased;
}
body {
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.text};
	margin: 0;
	padding: 5px 10px;
	font-family: 'IBM Plex Sans', sans-serif;
	line-height: 24px;
	font-size: 19px;
	p {
		font-family: IBM Plex Sans;
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0.012em;
	}
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Raleway', serif;
	}
	h1 {
		font-style: normal;
		font-weight: 900;
		font-size: 38px;
		line-height: 48px;
		letter-spacing: 0.02em;
	}
}
`

const Layout = ({ children }) => {
	const theme = useTheme()
	return (
		<ThemeProvider theme={theme.current}>
			{children}
			<theme.ToggleButton />
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
