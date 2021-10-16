import React, { useLayoutEffect, useRef, useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useSpring } from 'react-spring'
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import { smallRow, smallRowPx } from '../styles/sizes'
import HeaderWrap from './HeaderWrap'

const Header = props => {
	const theme = useContext(ThemeContext)
	const headerRef = useRef(null)
	const linkto = props.location?.pathname !== '/' ? '/' : null
	const logoSize = 4
	const fixHeader = props.fixHeader || false

	const [style, api] = useSpring(() => ({
		transform: 'translateY(0px)',
		bgColor: theme['background']
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

				let section

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
								newScrollPos >= value.offsetTop - smallRowPx &&
								newScrollPos < value.offsetTop + value.offsetHeight + smallRowPx
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
