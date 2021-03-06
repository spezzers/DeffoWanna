import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import './layout.css'

const light = {
  name: 'light',
	bg: '#F7F1EE',
	light: '#F7F1EE',
	accent: '#57486F',
	text: '#1b1523',
	dark: '#1b1523',
	confirm1: '#145D43',
	confirm2: '#3D9E5C',
	error1: '#9E0A39',
	error2: '#C03051',
	purple1: '#57486F',
	purple2: '#A97DAF',
	purpleText: '#57486F',
	teal1: '#395660',
	teal2: '#44CFC8',
	tealText: '#395660',
	blue1: '#476885',
	blue2: '#768EA7'
}
const dark = {
  name: 'dark',
	bg: '#1b1523',
	dark: '#1b1523',
	accent: '#B2A3A3',
	text: '#F7F1EE',
	light: '#F7F1EE',
	confirm1: '#22AA66',
	confirm2: '#1CCA73',
	error1: '#DD5A70',
	error2: '#FC798F',
	purple1: '#6B5D89',
	purple2: '#A883AA',
	purpleText: '#B99BBB',
	teal1: '#2F5C65',
	teal2: '#2BB0AA',
	tealText: '#45B5B0',
	blue1: '#4E6A83',
	blue2: '#8BA7C1'
}

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

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? dark.bg : light.bg
  }, [darkTheme])

	const toggleTheme = () => setDarkTheme(!darkTheme)

	return (
		<ThemeProvider
			theme={darkTheme ? dark : light}
		>
      <Main>
			{children}
			<button onClick={toggleTheme}>Toggle Theme</button>
      </Main>
		</ThemeProvider>
	)
}

export default Layout
