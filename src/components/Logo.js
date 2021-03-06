import React, { useContext, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPath } from './logoPath'

const BaseLogo = styled(animated.svg)`
	height: 10rem;
	fill: none;
	position: ${props => props.position || 'relative'};
	:hover {
		cursor: pointer;
	}
`

const Logo = props => {
	const theme = useContext(ThemeContext)
	const defaultProps = {
		color:
			props.color || theme.name === 'dark'
				? theme.purple2
				: theme.purple1 || '#999999',
		shadeColor: props.shadeColor || theme.teal1 || '#000000',
		glareColor: props.glareColor || theme.light || '#ffffff',
		path: logoPath.normal,
		weight: 5,
		glareAmount: 0,
		glareTransform: 'translate(0 0)',
		shadeAmount: 0,
		shadeTransform: 'translate(0 0)',
		filter: ''
	}

	const [normal, heavy, baloon] = [
		{
			...defaultProps
		},
		{
			...defaultProps,
			path: logoPath.heavy,
			weight: 25
		},
		{
			...defaultProps,
			path: logoPath.baloon,
			weight: 20,
			glareAmount: 5,
			glareTransform: 'translate(3 -6.5)',
			shadeAmount: 35,
			shadeTransform: 'translate(1.8 -3.2)',
			filter: 'url(#shadeBlur)'
		}
	]

	const [logoProps, set] = useSpring(() => ({
		...normal,
		from: heavy
	}))

	useEffect(() => {
		set({
			color: defaultProps.color,
			shadeColor: defaultProps.shadeColor,
			glareColor: defaultProps.glareColor
		})
	}, [
		set,
		defaultProps.color,
		defaultProps.glareColor,
		defaultProps.shadeColor
	])

	return (
		<BaseLogo
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
				<feGaussianBlur stdDeviation='4' />
			</filter>

			<filter id='shadeBlur'>
				<feGaussianBlur stdDeviation='3.2' />
			</filter>

			<animated.path
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
		</BaseLogo>
	)
}

export default Logo
