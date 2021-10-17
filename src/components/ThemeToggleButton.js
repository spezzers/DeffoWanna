import React, { useState, useEffect, useMemo, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const NonNavigatingButton = styled.div`
	cursor: pointer;
	outline: none;
`

const ThemeToggleButton = props => {
	const [hovering, setHovering] = useState(false)
	const current = useContext(ThemeContext)

	const themeIconProps = useMemo(
		() => ({
			color: !hovering
				? current?.purpleText || 'purple'
				: current?.name === 'dark'
					? current?.white || 'white'
					: current?.orangeText || 'orange',
			transform: `rotate(${hovering ? 60 : 25}) scale(${hovering ? 1.2 : 1})`,
			config: config.default
		}),
		[hovering, current]
	)

	const lightIconProps = {
		...themeIconProps,
		name: 'light',
		cx0: 12.68,
		cy0: 12.68,
		r0: 11.18,
		strokeWidth: 3,
		strokeDasharray: '2.37 4.75',
		cx1: 12.68,
		cy1: 12.68,
		r1: 7.68
	}
	const darkIconProps = {
		...themeIconProps,
		name: 'dark',
		cx0: 13.0405,
		cy0: 12.6802,
		r0: 9.417,
		strokeWidth: 2.527,
		strokeDasharray: '7 0',
		cx1: 8.959,
		cy1: 12.6802,
		r1: 6.68
	}

	const [themeButtonProps, api] = useSpring(() =>
		current?.name === 'dark' ? darkIconProps : lightIconProps
	)

	useEffect(() => {
		api.start({
			...themeIconProps,
			config: {
				mass: 1,
				tension: 400,
				friction: 15
			}
		})
	})

	const toggleTheme = () => {
		const newIcon =
			themeButtonProps.name.get() === 'light' ? darkIconProps : lightIconProps
		const newTheme = current.name === 'light' ? 'dark' : 'light'
		props.settheme(newTheme)
		api.start({ to: newIcon })
	}

	const themeIconEvent = e => {
		switch (e.type) {
		case 'focus':
		case 'mouseenter':
			setHovering(true)
			break
		case 'blur':
		case 'mouseleave':
			setHovering(false)
			break
		case 'keydown':
			if (e.key !== 'Enter') {
				break
			}
			toggleTheme()
			break
		case 'click':
			toggleTheme()
			break
		default:
			console.trace('unhandled mouse event:', e.type)
		}
	}

	return (
		<NonNavigatingButton
			{...props}
			style={{height: '26px', width: '26px'}}
			tabIndex='0'
			aria-label='toggle dark mode'
			id='theme-toggle-button'
			role='button'
			onKeyDown={e => themeIconEvent(e)}
			onClick={e => themeIconEvent(e)}
			onMouseLeave={e => themeIconEvent(e)}
			onMouseEnter={e => themeIconEvent(e)}
			onFocus={e => themeIconEvent(e)}
			onBlur={e => themeIconEvent(e)}
		>
			<animated.svg
				role='document'
				xmlns='http://www.w3.org/2000/svg'
				width={26}
				height={26}
				fill='none'
				transform={themeButtonProps.transform}
			>
				<animated.circle
					cx={themeButtonProps.cx0}
					cy={themeButtonProps.cy0}
					r={themeButtonProps.r0}
					stroke={themeButtonProps.color}
					strokeWidth={themeButtonProps.strokeWidth}
					strokeDasharray={themeButtonProps.strokeDasharray}
				/>
				<animated.circle
					cx={themeButtonProps.cx1}
					cy={themeButtonProps.cy1}
					r={themeButtonProps.r1}
					fill={themeButtonProps.color}
				/>
			</animated.svg>
		</NonNavigatingButton>
	)
}

export default ThemeToggleButton
