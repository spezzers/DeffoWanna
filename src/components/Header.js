import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import { lineHeight, breakpoint, colGap, pageGrid } from '../styles/sizes'
import { themeContextColor } from '../styles/themes'

const HeaderWrap = styled(animated.div)`
	position: sticky;
	z-index: 10;
	background-color: ${props => props.color || themeContextColor('background')};
	box-shadow: 0 -6rem 0 6rem ${props => props.color || themeContextColor('background')};
	#logo {
		grid-area: logo;
		${breakpoint.tablet} {
		}
	}
	${pageGrid.defaults}
	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
		grid-template-areas:
			'logo logo header';
		#logo {
			margin-left: calc(-0.5 * ${colGap});
		}
	}
	${breakpoint.tablet} {
		${pageGrid.columns.tablet}
		grid-template-areas:
			'.  logo logo header header header';
		#logo {
			margin-left: -${colGap};
		}
	}
	${breakpoint.desktop} {
		${pageGrid.columns.desktop}
		grid-template-areas:
			'. . logo logo . header header header header';
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
					:focus {
						outline: none;
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
					:focus > .nav-links,
					:focus-within > .nav-links {
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

const Header = props => {
	const linkto = props.location?.pathname !== '/' ? '/' : null
	const logoSize = 4
	const headerRef = useRef()

	const [style, api] = useSpring(() => ({
		top: '-4rem'
	}))

	useEffect(() => {
		let collapse = false
		const toggleCollapse = () => {
			if (collapse) {
				return api.start({
					top: '-4rem',
					delay: 0
				})
			} else {
				return api.start({
					top: '0rem',
					delay: 100
				})
			}
		}

		if (typeof window !== 'undefined') {
			let previousScrollPos = window.scrollY
			window.addEventListener(
				'scroll',
				() => {
					const newScrollPos = window.scrollY
					const threshold = headerRef.current.clientHeight
					if (newScrollPos >= 0) {
						if (newScrollPos > previousScrollPos + threshold) {
							if (!collapse) {
								collapse = true
								return toggleCollapse()
							}
							previousScrollPos = newScrollPos
						}
						if (newScrollPos < previousScrollPos - threshold) {
							if (collapse) {
								collapse = false
								return toggleCollapse()
							}
							previousScrollPos = newScrollPos
						}
					}
				},
				{
					passive: true
				}
			)
		}
	}, [api])

	return (
		<HeaderWrap ref={headerRef} style={style}>
			<Logo size={logoSize} linkto={linkto} title='home' />
			<div className='navigation'>
				<div className='collapsible'>
					<div className='nav-menu'>
						<svg
							tabIndex='0'
							width={24}
							height={24}
							fill='none'
							preserveAspectRatio='MidXMidY meet'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={1}
							strokeLinecap='round'
							strokeLinejoin='round'
							role='menu'
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
							<Link tabIndex='0' to='/blog/' activeClassName='current-page'>
								Blog
							</Link>
							<Link tabIndex='0' to='/grid/' activeClassName='current-page'>
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
					<div className='site-subheading' role='complementary' />
				</div>

				<div className='theme-button'>{props.themetogglebutton}</div>
			</div>
		</HeaderWrap>
	)
}

export default Header
