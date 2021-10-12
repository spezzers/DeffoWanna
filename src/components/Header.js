import React, { useLayoutEffect, useRef, useCallback, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import { themeContextColor } from '../styles/themes'
import {
	lineHeight,
	breakpoint,
	colGap,
	pageGrid,
	smallRow,
	smallRowPx
} from '../styles/sizes'

const HeaderWrap = styled(animated.header).attrs(props => {
	return {
		...props,
		style: {
			backgroundColor: props.style.bgColor
		}
	}
})`
	position: fixed;
	z-index: 10;
	height: ${smallRow};

	${pageGrid.defaults}
	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
		box-sizing: content-box;
		padding: 0 calc(${colGap} / 2);
		grid-template-areas: 'logo logo header';
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
	#logo {
		margin-top: -0.175rem;
		grid-area: logo;
		align-self: center;
	}

	.navigation {
		background-color: inherit;
		font-size: 0.95rem;
		height: ${smallRow};
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
			background-color: inherit;
			order: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			.nav-menu {
				background-color: inherit;
				display: flex;
				justify-content: flex-end;
				.nav-links {
					background-color: inherit;
					max-width: 33rem;
					flex-grow: 1;
					justify-content: flex-end;

					a {
						background-color: inherit;
						--timing: 0.1s ease-in-out;
						margin-right: 2em;
						transition: padding var(--timing), margin var(--timing),
							border var(--timing), border-bottom var(--timing),
							border-radius var(--timing), transform var(--timing);
						:hover,
						:focus {
							padding: 0.45em 0.5em 0.3em;
							margin: -0.45em 1.5em -0.7em -0.5em;
							color: ${themeContextColor('purpleTextStrong')};
							transform: scale(1.15);
							outline: none;
							border-radius: 0 0 0.95em 0.95em;
							border-bottom: 0.2em solid ${themeContextColor('purpleText')};
						}
					}
					a:last-child {
						margin-right: 0;
						:hover,
						:focus {
							margin-right: -0.5em;
						}
					}
				}
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
			}
			.site-subheading {
				display: none;
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
			margin-left: calc(${colGap} / 2);
		}
		@media screen and (min-width: 21.5rem) {
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
					display: block;
					order: 1;
					visibility: visible;
					border: none;
					margin: 0 auto 0 0;
					line-height: 1.2em;
					padding: 0 1em;
					:before {
						content: 'Design & Web Development';
					}
				}
			}
		}
		@media screen and (max-width: 43.999rem) {
			.collapsible {
				flex-grow: 1;
				flex-direction: row;
				justify-content: flex-end;
				margin-right: 0;

				.nav-menu {
					:focus > .nav-links,
					:focus-within > .nav-links {
						visibility: visible;
					}
					.feather-menu {
						display: block;
						position: relative;
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
						vertical-align: text-bottom;
						background-color: ${themeContextColor('purpleBg')};
						a {
							transition: none;
							background-color: unset;
							:hover,
							:focus {
								transform: unset;
								border: unset;
								margin: unset;
								padding: unset;
								overflow: visible;
								border-radius: unset;
							}
							color: ${themeContextColor('text')};
							:visited {
								color: ${themeContextColor('text')};
							}
						}
					}
				}
				.site-subheading {
					border: none;
					line-height: ${lineHeight};
					:before {
						${breakpoint.tablet} {
							content: 'Design & Web Development';
						}
						content: 'Design & Web Dev';
					}
				}
			}
		}

		@media screen and (min-width: 44rem) {
			.collapsible {
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
						margin: 0;
						padding: 0;
						user-select: none;
						a {
							font-weight: 400;
							color: inherit;
							text-decoration: none;
							box-sizing: content-box;
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
					padding: 0;
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
	const theme = useContext(ThemeContext)
	const headerRef = useRef(null)
	const linkto = props.location?.pathname !== '/' ? '/' : null
	const logoSize = 4
	const fixHeader = props.fixHeader || false

	const [style, api] = useSpring(() => ({
		transform: 'translateY(0px)',
		bgColor: theme['background'],
		boxShadow: '0 -6rem 0 6rem black'
	}))

	const toggleCollapse = useCallback(
		bool => {
			if (bool) {
				return api.start({
					transform: `translateY(-${smallRow})`
				})
			} else {
				return api.start({
					transform: 'translateY(0px)'
				})
			}
		},
		[api]
	)

	useLayoutEffect(() => {
		if (!fixHeader) {
			if (typeof window !== 'undefined') {
				let previousScrollPos = window.scrollY
				const newScrollPos = () => window.scrollY

				const sections = document.getElementsByClassName('full-width-section')

				let section = 0

				const directionalCollapse = newScrollPos => {
					const threshold = headerRef?.current?.clientHeight || 60
					if (newScrollPos >= 0) {
						if (newScrollPos === 0) {
							return toggleCollapse(false)
						}
						if (newScrollPos > previousScrollPos + threshold) {
							previousScrollPos = newScrollPos
							return toggleCollapse(true)
						}
						if (newScrollPos < previousScrollPos - threshold) {
							previousScrollPos = newScrollPos
							return toggleCollapse(false)
						}
					}
				}
				const changeBackgroundColor = (newScrollPos, immediate) => {
					if (sections.length > 0) {
						for (const [key, value] of Object.entries(sections)) {
							if (
								value.offsetTop - smallRowPx <= newScrollPos &&
								value.offsetTop + value.offsetHeight > newScrollPos
							) {
								const n = parseInt(key)
								if (n !== section) {
									section = n
									const newColor = value.dataset.bgColor || 'background'

									return api.start({
										bgColor: theme[newColor],
										immediate: immediate !== null ? immediate : true
									})
								}
								return
							}
						}
					}
					api.start({
						bgColor: theme['background'],
						immediate: true
					})
				}

				changeBackgroundColor(newScrollPos(), true)

				window.addEventListener(
					'scroll',
					() => {
						directionalCollapse(newScrollPos())
						changeBackgroundColor(newScrollPos(), false)
					},
					{
						passive: true
					}
				)
			}
		}
	}, [headerRef, api, fixHeader, toggleCollapse, theme])
	return (
		<HeaderWrap
			ref={headerRef}
			style={style}
			onFocus={() => toggleCollapse(false)}
		>
			<Logo size={logoSize} linkto={linkto} title='home' />
			<div className='navigation'>
				<div className='collapsible'>
					<div className='nav-menu'>
						<svg
							tabIndex='0'
							width={24}
							height={24}
							fill='none'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={1}
							strokeLinecap='round'
							strokeLinejoin='round'
							role='menu'
							className='feather feather-menu'
						>
							<path d='M3 12h18M3 6h18M3 18h18' />
						</svg>
						<nav className='nav-links' role='navigation'>
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
							<Link tabIndex='0' to='/contact/' activeClassName='current-page'>
								Contact
							</Link>
						</nav>
					</div>
					<div className='site-subheading' role='complementary' />
				</div>

				<div className='theme-button'>{props.themetogglebutton}</div>
			</div>
		</HeaderWrap>
	)
}

export default Header
