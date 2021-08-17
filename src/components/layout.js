import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useTheme from '../hooks/useTheme'
import Logo from '../components/Logo'
import '../styles/layout.css'
import { Link } from 'gatsby'

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
	min-height: 100vh;
	box-sizing: border-box;
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
	.navigation {
		font-size: 0.95rem;
		display: flex;
		box-sizing: border-box;
		grid-area: header;
		flex-direction: row;
		align-items: stretch;
		justify-content: flex-end;
		color: ${themeContextColor('purpleText')};
		${breakpoint.mobile} {
			margin: 0 0 0 -${colGap};
		}
		${breakpoint.tablet} {
			margin: 0 ${colGap} 0 0;
		}
		${breakpoint.desktop} {
			margin-left: -${colGap};
		}

		.collapsible {
			order: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-items: flex-end;
			.nav-menu {
				margin-left: 100%;
				.feather-menu {
					cursor: pointer;
					width: 2rem;
					height: 2rem;
					flex-shrink: 0;
					order: 2;
					:hover {
						stroke: ${themeContextColor('purpleTextStrong')};
					}
				}
				.nav-links {
				}
			}
			.site-subheading {
				visibility: hidden;
				width: 100%;
				font-weight: 200;
				color: ${themeContextColor('purpleTextStrong')};
			}
		}
		.theme-button {
			align-self: stretch;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			order: 3;
		}
		@media screen and (min-width: 21rem) {
			.collapsible {
				visibility: visible;
				margin: 0;
				.nav-menu {
					order: 2;
					margin: 0;
				}
				.nav-links {
					visibility: visible;
				}
				.site-subheading {
					order: 1;
					visibility: visible;
					border: none;
					margin: 0 auto 0 0;
					line-height: 1.2em;
					:before {
						content: 'Design & Web Development';
					}
				}
			}
		}
		@media screen and (max-width: 37.999rem) {
			.collapsible {
				flex-grow: 1;
				flex-direction: row;
				justify-content: center;
				.nav-menu {
					:focus > .nav-links, :focus-within > .nav-links {
						visibility: visible;
					}
					.feather-menu {
						display: block;
						margin-right: calc(${colGap} / 2);
						position: relative;
						top: -0.2rem;
					}
					.nav-links {
						visibility: hidden;
						position: absolute;
						display: flex;
						flex-direction: column;
						padding: calc(2 * ${lineHeight}) ${colGap};
						text-align: right;
						right: 0;
						top: 0;
						height: 100vh;
						width: calc(100vw - calc(${colGap} * 2));
						box-sizing: border-box;
						justify-content: space-evenly;
						vertical-align: text-bottom;
						background-color: ${themeContextColor('purpleBg')};
						a {
							color: ${themeContextColor('text')};
							:visited {
								color: ${themeContextColor('text')};
							}
						}
					}
				}
				.site-subheading {
					border: none;
					line-height: 1.2em;

					:before {
						${breakpoint.tablet} {
							content: 'Design & Web Development';
						}
						content: 'Design & Web Dev';
					}
				}
			}
		}

		@media screen and (min-width: 38rem) {
			.collapsible {
				margin: 0 ${colGap} 0 0;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.nav-menu {
					order: 1;
					width: 100%;
					.feather-menu {
						display: none;
					}
					.nav-links {
						display: flex;
						flex-direction: row;
						justify-content: space-evenly;
						margin: 0;
						padding: 0;
						user-select: none;
						a {
							font-weight: 400;
							color: inherit;
							text-decoration: none;
							margin: 0 auto;
							box-sizing: content-box;
						}
						a.contact {
							margin-right: 0;
						}
						.current-page {
							color: ${themeContextColor('purpleTextStrong')};
							border-bottom: 3px solid ${themeContextColor('purpleText')};
							margin-bottom: -3px;
						}
					}
				}

				.site-subheading {
					order: 2;
					border-top: 1px solid ${themeContextColor('purpleText')};
					line-height: ${lineHeight};
					:before {
						${breakpoint.desktop} {
							content: 'Graphic Design & Web Development';
						}
					}
				}
			}
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
	position: absolute;
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
	const linkTo = props.location?.pathname !== '/' ? '/' : null
	return (
		<ThemeProvider theme={theme.current}>
			<Grid>
				<Header>
					<Logo size='4' linkTo={linkTo} />
					<div className='navigation'>
						<div className='collapsible'>
							<div className='nav-menu' tabIndex='0' role='menu'>
								<svg
									width={24}
									height={24}
									fill='none'
									preserveAspectRatio='MidXMidY meet'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={1}
									strokeLinecap='round'
									strokeLinejoin='round'
									role='none'
									className='feather feather-menu'
									{...props}
								>
									<path d='M3 12h18M3 6h18M3 18h18' />
								</svg>
								<div className='nav-links' role='navigation'>
									<Link
										tabIndex='0'
										to='/logo-test/'
										activeClassName='current-page'
									>
										Portfolio
									</Link>
									<Link tabIndex='0' to='/grid/' activeClassName='current-page'>
										Blog
									</Link>
									<Link
										tabIndex='0'
										to='/about/'
										activeClassName='current-page'
									>
										About
									</Link>
									<Link
										className='contact'
										tabIndex='0'
										to='/contact/'
										activeClassName='current-page'
									>
										Contact
									</Link>
								</div>
							</div>
							<div className='site-subheading' role='complementary'/>
						</div>

						<div className='theme-button'>
							<theme.ToggleButton />
						</div>
					</div>
				</Header>
				{props.children}
			</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
