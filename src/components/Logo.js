import React, { useContext, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPath } from './logoPath'

const StyledLogo = styled(animated.svg)`
	height: ${props => `${props.rem * 2.2}rem` || '2rem'};
	fill: none;
	position: ${props => props.position || 'relative'};
	:hover {
		cursor: pointer;
	}
`

const Logo = props => {
	const theme = useContext(ThemeContext)

	const normal = {
		color:
			props.color || theme?.purpleText || '#777777',
		shadeColor: props.shadeColor || theme?.black || '#000000',
		glareColor: props.glareColor || theme?.white || '#ffffff',
		path: logoPath.normal,
		weight: 5,
		glareAmount: 0,
		glareTransform: 'translate(0 0)',
		shadeAmount: 0,
		shadeTransform: 'translate(0 0)',
		filter: ''
	}
	const heavy = {
		...normal,
		path: logoPath.heavy,
		weight: 25
	}
	const baloon = {
		...normal,
		color: theme.purple,
		path: logoPath.baloon,
		weight: 20,
		glareAmount: 5,
		glareTransform: 'translate(3 -6.5)',
		shadeAmount: 35,
		shadeTransform: 'translate(1.8 -3.2)',
		filter: 'url(#shadeBlur)'
	}

	const [logoProps, set] = useSpring(() => ({
		...normal,
		from: heavy
	}))

	useEffect(() => {
		set({
			color: normal.color,
			shadeColor: normal.shadeColor,
			glareColor: normal.glareColor
		})
	}, [set, normal.color, normal.glareColor, normal.shadeColor])

	return (
		<StyledLogo
			rem={props.rem}
			viewBox='0 0 534 305'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.414}
			onMouseEnter={() => {
				set({
					...baloon,
					config: {
						mass: 1,
						tension: 280,
						friction: 10
					}
				})
			}}
			onMouseLeave={() =>
				set({
					...normal,
					config: config.default
				})
			}
		>
			<filter id='glareBlur'>
				<feGaussianBlur stdDeviation='3' />
			</filter>

			<filter id='shadeBlur'>
				<feGaussianBlur stdDeviation='3.2' />
			</filter>

			<animated.path
				className='base'
				d={logoProps.path}
				fill='none'
				stroke={logoProps.shadeColor}
				strokeWidth={logoProps.shadeAmount}
			/>

			<animated.path
				d={logoProps.path}
				fill='none'
				stroke={logoProps.color}
				filter={logoProps.filter}
				strokeWidth={logoProps.weight}
				transform={logoProps.shadeTransform}
			/>

			<animated.path
				d={logoProps.path}
				fill='none'
				strokeWidth={logoProps.glareAmount}
				filter='url(#glareBlur)'
				transform={logoProps.glareTransform}
				stroke={logoProps.glareColor}
			/>
		</StyledLogo>
	)
}

export default Logo
