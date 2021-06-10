import React, { useState } from 'react'
import themes from '../styles/themes'
import {useSpring} from 'react-spring'

const useTheme = () => {
	const themePrefs =
		typeof window !== 'undefined'
			? window.localStorage.getItem('theme') || 'light'
			: 'light'
	const [current, setCurrent] = useState(themes[themePrefs])
	const toggleTheme = () => {
		const newTheme = current.name === 'dark' ? themes.light : themes.dark
		window.localStorage.setItem('theme', newTheme.name)
		setCurrent(newTheme)
	}

	const lightIconProps = {
		circle1: {
			cx: 12.68,
			cy: 12.68,
			r: 11.18,
			stroke: current.textSubtle,
			strokeWidth: 3,
			strokeDasharray: '2.37 4.75'
		},
		circle2: {
			cx: 12.68,
			cy: 12.68,
			r: 7.68,
			fill: current.textSubtle
		}
	}
	const darkIconProps = {
		circle1: {
			cx: 13.0405,
			cy: 12.6802,
			r: 8.21733,
			stroke: current.textSubtle,
			strokeWidth: 2.20498,
			strokeDasharray: '2.37 0'
		},
		circle2: {
			cx: 10.3198,
			cy: 12.6802,
			r: 6.31982,
			fill: current.textSubtle
		}
	}

	const [spring] = useSpring(() =>
		current.name === 'dark' ? darkIconProps : lightIconProps
	)
	const circle1 = spring.circle1.get()
	const circle2 = spring.circle2.get()

	const toggleButton = (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={26}
				height={26}
				fill='none'
				onClick={toggleTheme}
			>
				<circle {...circle1} />
				<circle {...circle2} />
			</svg>
		</>
	)

	return {
		current,
		toggleButton
	}
}

export default useTheme
