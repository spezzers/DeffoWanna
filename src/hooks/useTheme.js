import React, { useState } from 'react'
import themes from '../styles/themes'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const NonNavigatingButton = styled.span`
	cursor: pointer;
`
const useTheme = () => {
	console.log(window.matchMedia('(prefers-color-scheme: dark)'))
	const themePrefs =
		typeof window !== 'undefined'
			? window.localStorage.getItem('theme') || 'light'
			: 'light'

	const [current, setCurrent] = useState(themes[themePrefs])

	const themeIconProps = {
		color: themes.light.purpleText,
		config: config.default
	}

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

	const themeIconMouseEnterProps = {
		...current,
		color: current.teal,
		strokeWidth: 2.8,
		config: {
			mass: 1,
			tension: 400,
			friction: 25
		}
	}

	const [themeButtonProps, api] = useSpring(() =>
		current.name === 'dark' ? darkIconProps : lightIconProps
	)

	const themeIconMouseEvent = e => {
		switch (e.type) {
			case 'mouseenter':
				api.start(themeIconMouseEnterProps)
				break
			case 'hover':
				api.start(themeIconMouseEnterProps)
				break
			case 'mouseleave':
				api.start({
					to: current.name === 'light' ? lightIconProps : darkIconProps
				})
				break
			case 'click':
				toggleTheme()
				break
			default:
				console.log('unhandled mouse event:', e.type)
		}
	}

	const toggleTheme = () => {
		const newTheme = current.name === 'dark' ? themes.light : themes.dark
		const newIcon =
			themeButtonProps.name.get() === 'light' ? darkIconProps : lightIconProps
		window.localStorage.setItem('theme', newTheme.name)
		api.start({ to: newIcon })
		setCurrent(newTheme)
	}

	const ToggleButton = () => (
		<NonNavigatingButton
			onClick={e => themeIconMouseEvent(e)}
			onMouseLeave={e => themeIconMouseEvent(e)}
			onMouseEnter={e => themeIconMouseEvent(e)}
		>
			<animated.svg
				xmlns='http://www.w3.org/2000/svg'
				width={26}
				height={26}
				fill='none'
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

	return {
		current,
		ToggleButton
	}
}

export default useTheme
