import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'

const fontSizePx = 19
export const fontSize = `${fontSizePx}px`
export const lineHeight = `${fontSizePx * 1.263}px`
export const rowGap = lineHeight
export const colGap = `${((fontSizePx * 1.263) / 5) * 8}px`
export const breakpoint = {
	mobile: '@media only screen and (min-width: 13.947rem)',
	tablet: '@media only screen and (min-width: 38rem)',
	desktop: '@media only screen and (min-width: 59rem)'
}
export const themeContextColor = (color, fallback) => props => {
	const fallbackColor = fallback ? fallback : 'initial'
	return props.theme[color] || color || fallbackColor
}

const Grid = styled.div`
	--row-gap: ${lineHeight};
	--col-gap: calc((var(--row-gap) / 5) * 8);
	--small-col: calc(var(--col-gap) * 2);
	--col: calc(var(--col-gap) * 4);
	--header-row: calc(var(--row-gap) * 2.75);
	--row: calc(var(--row-gap) * 5);
	--small-row: calc(var(--row-gap) * 3);

	display: grid;
	justify-content: center;
	width: 100%;
	column-gap: var(--col-gap);
	row-gap: var(--row-gap);

	grid-template-rows: var(--header-row) var(--row-gap) var(--small-row) repeat(
			auto-fit,
			var(--row)
		);

	${breakpoint.mobile} {
		grid-template-columns: [logo-start] var(--col-gap) var(--col-gap) [logo-end] 1fr;
	}
	${breakpoint.tablet} {
		grid-template-columns:
			1fr
			[logo-start]
			var(--col-gap)
			[main-start]
			var(--col-gap)
			[logo-end]
			var(--small-col)
			var(--col)
			[main-end]
			2fr;
		grid-template-areas: '.  logo logo . . .';
	}
	${breakpoint.desktop} {
		grid-template-columns:
			2fr
			var(--small-col)
			var(--col-gap)
			var(--col-gap)
			[logo-end]
			var(--small-col)
			var(--col)
			var(--col)
			var(--col)
			[main-end]
			3fr;
		grid-template-areas: '. . logo logo . . . . .';
	}
`

const GlobalStyle = createGlobalStyle`
* {
	-webkit-font-smoothing: antialiased;
}
body {
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.text};
	margin: 0;
	padding: 0 0 calc(${lineHeight} * 2) 0;
	font-family: 'IBM Plex Sans', sans-serif;
	line-height: ${lineHeight};
	font-size: ${fontSize};
	p {
		font-family: IBM Plex Sans;
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0.012em;
	}
	//TODO change heading font
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

const ThemeToggleButton = styled.div`
	grid-column: -3 / -1;
	justify-self: right;
	align-self: center;
	position: relative;
	margin-right: ${rowGap};
`

const Layout = ({ children }) => {
	const theme = useTheme()
	if (!theme.current) {
		return null
	}
	return (
		<ThemeProvider theme={theme.current}>
			<Grid>
				<ThemeToggleButton>
					<theme.ToggleButton />
				</ThemeToggleButton>
				{children}
			</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
