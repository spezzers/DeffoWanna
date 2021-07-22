import React, { useState, useEffect, useMemo, useCallback } from 'react'
import themes from '../styles/themes'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const NonNavigatingButton = styled.span`
	cursor: pointer;
`
const useTheme = () => {
	const [current, setCurrent] = useState(null)
	const [hovering, setHovering] = useState(false)

	const themeIconProps = useMemo(
		() => ({
			color: hovering
				? current?.purpleTextStrong || 'blue'
				: current?.purpleText || 'purple',
			rotation: `rotate(${hovering ? 60 : 25})`,
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

	const systemPrefersDarkTheme =
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: null

	const setThemeAgent = useCallback(
		themeName => {
			if (themeName) {
				if (
					(themeName === 'dark' && systemPrefersDarkTheme === true) ||
					(themeName === 'light' && systemPrefersDarkTheme === false)
				) {
					return 'system'
				}
				return 'user'
			}
		},
		[systemPrefersDarkTheme]
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

		if (!current) {
			if (typeof window !== 'undefined') {
				const getLocalPrefs = window.localStorage.getItem('theme')
				
				let localPrefs = getLocalPrefs ? getLocalPrefs.split(',') : null

				// reset corrupt localStorage theme
				if (!(['light', 'dark'].includes(localPrefs[0]) && ['user', 'system', 'default'].includes(localPrefs[1]))) {
					window.localStorage.removeItem('theme')
				}

				if (localPrefs !== null && systemPrefersDarkTheme !== null) {
					// localPrefs & systemPreferredTheme

					const systemThemeName = systemPrefersDarkTheme ? 'dark' : 'light'

					if (localPrefs[1] && localPrefs[1] === 'system') {
						// localPrefs === 'system'
						// localPrefs = [systemPreferredTheme, 'system']

						window.localStorage.setItem('theme', [systemThemeName, 'system'])
						setCurrent(themes[systemThemeName])
					} else if (['user', 'default'].includes(localPrefs[1])) {
						// localPref !== 'system'
						// localPrefs = [localPreferredTheme, 'user'/'system']

						window.localStorage.setItem('theme', [
							localPrefs[0],
							setThemeAgent(localPrefs[0])
						])
						setCurrent(themes[localPrefs[0]])
					}
				} else if (
					localPrefs !== null &&
					['light', 'dark'].includes(localPrefs[0]) &&
					systemPrefersDarkTheme === null
				) {
					// localPrefs only
					// localPrefs = [localPrefs, 'user']

					window.localStorage.setItem('theme', [
						localPrefs[0],
						setThemeAgent(localPrefs[0])
					])
					setCurrent(themes[localPrefs[0]])
				} else if (systemPrefersDarkTheme !== null) {
					// systemPreferredTheme only

					const systemThemeName = systemPrefersDarkTheme ? 'dark' : 'light'

					window.localStorage.setItem('theme', [systemThemeName, 'system'])
					setCurrent(themes[systemThemeName])
				} else {
					// no preferences

					window.localStorage.setItem('theme', ['light', 'default'])
					setCurrent(themes['light'])
				}
			}
		}
	}, [api, themeIconProps, systemPrefersDarkTheme, current, setThemeAgent])

	const toggleTheme = () => {
		const newTheme = current?.name === 'dark' ? themes.light : themes.dark
		const newIcon =
			themeButtonProps.name.get() === 'light' ? darkIconProps : lightIconProps
		window.localStorage.setItem('theme', [
			newTheme.name,
			setThemeAgent(newTheme.name)
		])
		api.start({ to: newIcon })
		setCurrent(newTheme)
	}

	const themeIconMouseEvent = e => {
		switch (e.type) {
			case 'mouseenter':
				setHovering(true)
				break
			case 'mouseleave':
				setHovering(false)
				break
			case 'click':
				toggleTheme()
				break
			default:
				console.log('unhandled mouse event:', e.type)
		}
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
				transform={themeButtonProps.rotation}
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
		ToggleButton,
		toggleTheme
	}
}

export default useTheme
