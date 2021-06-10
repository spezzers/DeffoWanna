import React, { useEffect, useState } from 'react'
import themes from '../styles/themes'
import { useSpring, animated } from 'react-spring'

const useTheme = () => {
	console.log(window.matchMedia('(prefers-color-scheme: dark)'))
	const themePrefs =
		typeof window !== 'undefined'
			? window.localStorage.getItem('theme') || 'light'
			: 'light'

	const [current, setCurrent] = useState(themes[themePrefs])

	const lightIconProps = {
		name: 'light',
		cx0: 12.68,
		cy0: 12.68,
		r0: 11.18,
		stroke: current.purpleTextSubtle,
		strokeWidth: 3,
		strokeDasharray: '2.37 4.75',
		cx1: 12.68,
		cy1: 12.68,
		r1: 7.68,
		fill: current.purpleTextSubtle
	}
	const darkIconProps = {
		name: 'dark',
		cx0: 13.0405,
		cy0: 12.6802,
		r0: 9.417,
		stroke: current.purpleTextSubtle,
		strokeWidth: 2.527,
		strokeDasharray: '6.5 0',
		cx1: 8.959,
		cy1: 12.6802,
		r1: 6.68,
		fill: current.purpleTextSubtle
	}

	const [spring, api] = useSpring(() =>
		current.name === 'dark' ? darkIconProps : lightIconProps
	)

	const toggleTheme = () => {
		const newTheme = current.name === 'dark' ? themes.light : themes.dark
		const newIcon =
			spring.name.get() === 'light' ? darkIconProps : lightIconProps
		window.localStorage.setItem('theme', newTheme.name)
		api.start({ to: newIcon })
		console.log('toggle', '\ntheme', newTheme, '\nicon', newIcon)
		setCurrent(newTheme)
	}

	const ToggleButton = () => (
		<animated.svg
			xmlns='http://www.w3.org/2000/svg'
			width={26}
			height={26}
			fill='none'
			onClick={toggleTheme}
		>
			<animated.circle
				cx={spring.cx0}
				cy={spring.cy0}
				r={spring.r0}
				stroke={spring.stroke}
				strokeWidth={spring.strokeWidth}
				strokeDasharray={spring.strokeDasharray}
			/>
			<animated.circle
				cx={spring.cx1}
				cy={spring.cy1}
				r={spring.r1}
				fill={spring.fill}
			/>
		</animated.svg>
	)

	return {
		current,
		ToggleButton
	}
}

export default useTheme
