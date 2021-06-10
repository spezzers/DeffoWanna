import React, { useContext } from 'react'
import { useSpring } from 'react-spring'
import { ThemeContext } from 'styled-components'

const ToggleThemeButton = ({ onClick }) => {
	const theme = useContext(ThemeContext)

	const lightIconProps = {
		circle1: {
			cx: 12.68,
			cy: 12.68,
			r: 11.18,
			stroke: theme.textSubtle,
			strokeWidth: 3,
			strokeDasharray: '2.37 4.75'
		},
		circle2: {
			cx: 12.68,
			cy: 12.68,
			r: 7.68,
			fill: theme.textSubtle
		}
	}
	const darkIconProps = {
		circle1: {
			cx: 13.0405,
			cy: 12.6802,
			r: 8.21733,
			stroke: theme.textSubtle,
			strokeWidth: 2.20498,
			strokeDasharray: '2.37 0'
		},
		circle2: {
			cx: 10.3198,
			cy: 12.6802,
			r: 6.31982,
			fill: theme.textSubtle
		}
	}

	const [spring] = useSpring(() =>
		theme.name === 'dark' ? darkIconProps : lightIconProps
	)
	const circle1 = spring.circle1.get()
	const circle2 = spring.circle2.get()

	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={26}
				height={26}
				fill='none'
				onClick={onClick}
			>
				<circle {...circle1} />
				<circle {...circle2} />
			</svg>
		</>
	)
}

export default ToggleThemeButton
