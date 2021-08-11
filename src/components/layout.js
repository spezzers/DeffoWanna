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
	mobile: '@media only screen and (max-width: 31rem)',
	tablet: '@media only screen and (min-width: 31rem)',
	desktop: '@media only screen and (min-width: 62rem)'
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

	grid-template-rows:
		var(--header-row)
		var(--row-gap)
		var(--small-row)
		repeat(auto-fill, var(--row));

	${breakpoint.mobile} {
		width: calc(100% - var(--col-gap));
		margin: 0 auto;
		grid-template-columns: [logo-start] var(--col-gap) var(--col-gap) [logo-end] 1fr;
		grid-template-areas: 'logo logo header';
	}

	${breakpoint.tablet} {
		width: 100%;
		margin: 0;
		grid-template-columns:
			1.5fr
			var(--col-gap)
			var(--col-gap)
			minmax(var(--small-col), 2fr)
			minmax(var(--col), 4fr)
			3fr;
		grid-template-areas: '.  logo logo header header header';
	}
	${breakpoint.desktop} {
		width: 100%;
		margin: 0;
		grid-template-columns:
			3fr
			var(--small-col)
			var(--col-gap)
			var(--col-gap)
			var(--small-col)
			var(--col)
			var(--col)
			var(--col)
			4fr;
		grid-template-areas: '. . logo logo . header header header header';
	}
`

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
		margin: 0;
		padding: 0 0 calc(${lineHeight} * 2) 0;
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
			font-style: normal;
		}
		h1 {
			font-family: IBM Plex Serif;
			font-style: normal;
			font-weight: bold;
			line-height: calc(2 * ${lineHeight});
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
	}
`

const StyledHeader = styled.div`
	font-size: 0.95rem;
	display: flex;
	grid-area: header;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin: 0 ${colGap} 0 0;
	color: ${themeContextColor('purpleText')};
	${breakpoint.mobile} {
		margin: 0;
	}
	.theme-button {
		align-self: stretch;
		display: flex;
		align-items: center;
	}
	.header {
		margin: 0 ${colGap} 0 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		${breakpoint.mobile} {
			display: none;
		}
		.nav {
			${breakpoint.tablet} {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				height: 50%;
				margin: 0;
				padding: 0;
				li {
					font-weight: 400;
					list-style: none;
				}
			}
		}
		.header-title {
			border-top: 1px solid ${themeContextColor('purpleText')};
			font-weight: 200;
			color: ${themeContextColor('purpleTextStrong')};
			:before {
				${breakpoint.tablet} {
					content: 'Design & Web Dev';
				}
				${breakpoint.desktop} {
					content: 'Graphic Design & Web Development';
				}
			}
		}
	}
`

export const Header = props => {
	return (
		<StyledHeader>
			<div className='header'>
				<ul className='nav'>
					<li>Home</li>
					<li>Portfolio</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<div className='header-title' />
			</div>
			<div className='theme-button'>{props.children}</div>
		</StyledHeader>
	)
}

const Layout = ({ children }) => {
	const theme = useTheme()
	if (!theme.current) {
		return null
	}
	return (
		<ThemeProvider theme={theme.current}>
			<Grid>
				<Header>
					<theme.ToggleButton />
				</Header>
				{children}
			</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
