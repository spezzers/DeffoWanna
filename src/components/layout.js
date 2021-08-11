import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from '../hooks/useTheme'
import Logo from '../components/Logo'
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
		minmax(var(--row), 1fr);

	grid-auto-rows: auto;

	${breakpoint.mobile} {
		width: calc(100% - var(--col-gap));
		margin: 0 auto;
		grid-template-columns:
			[logo-start]
			var(--col-gap)
			var(--col-gap)
			[logo-end]
			minmax(0, 1fr);
		grid-template-areas:
			'logo logo header'
			'main main main'
			'main main main'
			'main main main';
	}

	${breakpoint.tablet} {
		width: 100%;
		margin: 0;
		grid-template-columns:
			minmax(0, 1.5fr)
			var(--col-gap)
			var(--col-gap)
			minmax(var(--small-col), 2fr)
			minmax(var(--col), 4fr)
			minmax(0, 3fr);
		grid-template-areas:
			'.  logo logo header header header'
			'. main main main main .'
			'. main main main main .'
			'. main main main main .';
	}
	${breakpoint.desktop} {
		width: 100%;
		margin: 0;
		grid-template-columns:
			minmax(0, 3fr)
			var(--small-col)
			var(--col-gap)
			var(--col-gap)
			var(--small-col)
			var(--col)
			var(--col)
			var(--col)
			minmax(0, 4fr);
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

const Header = styled.div`
	display: contents;
	#logo {
		grid-area: logo;
		${breakpoint.mobile} {
			margin-left: calc(-0.5 * ${colGap});
		}
		${breakpoint.tablet} {
			margin-left: -${colGap};
		}
	}
	#menu {
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
		${breakpoint.desktop} {
			margin-left: -${colGap};
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
			.nav-links {
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
	}
`

const Layout = ({ children }) => {
	const theme = useTheme()
	if (!theme.current) {
		return null
	}
	return (
		<ThemeProvider theme={theme.current}>
			<Grid>
				<Header>
					<Logo size='4' />
					<div id='menu'>
						<div className='header'>
							<ul className='nav-links'>
								<li>Home</li>
								<li>Portfolio</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
							<div className='header-title' />
						</div>
						<div className='theme-button'>
							<theme.ToggleButton />
						</div>
					</div>
				</Header>
				{children}
			</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
