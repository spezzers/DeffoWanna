import React, { useContext, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPath } from './logoPath'
import useTouch from '../hooks/useTouch'

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
		color: props.color || theme?.purpleText || '#777777',
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
		path: logoPath.baloon,
		weight: 20,
		glareAmount: 5,
		glareTransform: 'translate(3 -6.5)',
		shadeAmount: 35,
		shadeTransform: 'translate(1.8 -3.2)',
		filter: 'url(#colorSoften)'
	}

	const [logoProps, api] = useSpring(() => ({
		...normal,
		from: heavy,
		delay: 500
	}))

	useEffect(() => {
		api.start({
			color: normal.color,
			shadeColor: normal.shadeColor,
			glareColor: normal.glareColor
		})
	}, [api, normal.color, normal.glareColor, normal.shadeColor])

	const deactivate = () =>
		api.start({
			...normal,
			config: config.default
		})

	const activate = () =>
		api.start({
			...baloon,
			config: {
				mass: 1,
				tension: 280,
				friction: 10
			}
		})
	const hover = () => {
		api.start({
			...heavy,
			config: {
				mass: 1,
				tension: 300,
				friction: 18
			}
		})
	}

	const touch = useTouch({
		activate,
		deactivate,
		hover
	})

	return (
		<StyledLogo
			id='logo'
			rem={props.rem}
			viewBox='0 0 534 305'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.414}
			{...touch.attributes()}
		>
			<filter id='glareBlur'>
				<feGaussianBlur stdDeviation='3.5' />
			</filter>

			<filter id='colorSoften'>
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
