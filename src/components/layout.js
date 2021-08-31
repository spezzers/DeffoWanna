import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from '../hooks/useTheme'
import Logo from '../components/Logo'
import '../styles/layout.css'
import { themeContextColor } from '../styles/themes'
import {
	lineHeight,
	pageGrid,
	breakpoint,
	colGap,
	rowGap,
	fontSize
} from '../styles/sizes'
import Header from './Header'

const Grid = styled.div`
	--header-row: calc(${rowGap} * 2.75);

	display: grid;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	column-gap: ${colGap};
	row-gap: ${rowGap};

	grid-auto-rows: auto;

	#logo {
		grid-area: logo;
		${breakpoint.tablet} {
		}
	}

	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
		grid-template-areas:
			'logo logo header'
			'main main main'
			'main main main'
			'main main main';
		#logo {
			margin-left: calc(-0.5 * ${colGap});
		}
	}

	${breakpoint.tablet} {
		${pageGrid.columns.tablet}
		grid-template-areas:
			'.  logo logo header header header'
			'. main main main main .'
			'. main main main main .'
			'. main main main main .';
		#logo {
			margin-left: -${colGap};
		}
	}
	${breakpoint.desktop} {
		${pageGrid.columns.desktop}
		grid-template-areas:
			'. . logo logo . header header header header'
			'. . main main main main main . .'
			'. . main main main main main . .'
			'. . main main main main main . .';
	}
`

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
		margin: 0;
		padding: 0;
		font-family: 'IBM Plex Sans', sans-serif;
		line-height: ${lineHeight};
		font-size: ${fontSize};
		
		p {
			font-family: 'IBM Plex Sans';
			font-style: normal;
			font-weight: 400;
			letter-spacing: 0.012em;
		}
		h1, h2, h3, h4, h5, h6 {
			font-family: 'IBM Plex Serif', serif;
			font-weight: normal;
			font-style: normal;
			margin: ${lineHeight} 0;
			color: ${themeContextColor('textStrong')};
			line-height: 1.4em;
		}
		h1, h2 {
			margin: calc(2 * ${lineHeight}) 0;
		}
		h1 {
			color: ${themeContextColor('text')};
			font-family: IBM Plex Serif;
			font-style: normal;
			font-weight: bold;
			letter-spacing: 0.002em;
			${breakpoint.mobile} {
				font-size: 2.1rem;
			}
			${breakpoint.tablet} {
				font-size: 2.5rem;
			}
			${breakpoint.desktop} {
				font-size: calc(2 * ${lineHeight});
			}
		}
		h2 {
			font-size: 1.895rem;
			letter-spacing: 0.01em;
		}
		h3 {
			font-size: 1.526rem;
			letter-spacing: 0.023em;
		}
		h4 {
			font-size: 1.368rem;
			letter-spacing: 0.05em;
		}
		h5 {
			font-size: 1.263rem;
			letter-spacing: 0.06em;
		}
		h6 {
			font-size: 1.105rem;
			letter-spacing: 0.07em;
		}
	}
`

const Minimal = styled.div`
	height: 100vh;
	width: 100vw;
	padding-top: 1.5rem;
	padding-bottom: 1rem;
	box-sizing: border-box;
	display: flex;
	align-items: stretch;
	justify-content: center;
	@media (orientation: portrait) {
		flex-direction: column;
	}
	@media (orientation: landscape) {
		flex-direction: row;
	}
	${breakpoint.mobile} {
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
	}
	${breakpoint.tablet} {
		padding-left: ${colGap};
		padding-right: ${colGap};
	}
	#theme-toggle-button {
		position: fixed;
		display: block;
		top: calc(${rowGap} / 2);
		${breakpoint.mobile} {
			right: calc(${colGap} / 2);
		}
		${breakpoint.tablet} {
			right: ${colGap};
		}
	}
`

const Layout = props => {
	const theme = useTheme()
	if (!theme.current) {
		return null
	}
	if (props.minimal) {
		return (
			<ThemeProvider theme={theme.current}>
				<GlobalStyle />
				<Minimal>
					<theme.ToggleButton />
					{props.children}
				</Minimal>
			</ThemeProvider>
		)
	}
	const linkto = props.location?.pathname !== '/' ? '/' : null
	return (
		<ThemeProvider theme={theme.current}>
			<Grid>
				<Logo size='4' linkto={linkto} title='home' />
				<Header themeToggleButton={<theme.ToggleButton />} />
				{props.children}
			</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
