import React, {useContext} from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled, {ThemeContext} from 'styled-components'
import {logoPath} from './logoPath'

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
		color: props.color || theme.name === 'light' ? theme.purple2 : theme.purple1 || '#999999',
		shadeColor: props.shadeColor || theme.teal1 || '#000000',
		glareColor: props.glareColor || theme.light || '#ffffff',
		path: logoPath.normal,
		weight: 5,
		glareAmount: 0,
		glareTransform: 'translate(0 0)',
		shadeAmount: 0,
		shadeTransform: 'translate(0 0)',
		filter: '',
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

	const [{ path, weight, glareAmount, glareTransform, color, shadeAmount, shadeTransform, filter, shadeColor, glareColor }, set] = useSpring(() => ({
		...normal,
		from: heavy
	}))

	return (
		<BaseLogo
			viewBox='0 0 534 305'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.414}
			onMouseEnter={() =>
				set({
					...baloon,
					config: {
						mass: 1,
						tension: 280,
						friction: 10
					}
				})
			}
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
				d={path}
				fill='none'
				stroke={shadeColor}
				strokeWidth={shadeAmount}
			/>

			<animated.path
				d={path}
				fill='none'
				stroke={color}
				filter={filter}
				strokeWidth={weight}
				transform={shadeTransform}
			/>

			<animated.path
				d={path}
				fill='none'
				strokeWidth={glareAmount}
				filter='url(#glareBlur)'
				transform={glareTransform}
				stroke={glareColor}
			/>			
		</BaseLogo>
	)
}

export default Logo
