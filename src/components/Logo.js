import React, { useContext } from 'react'
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
		glareDirection: 'translate(0 0)',
		shadeAmount: 0,
		colorDirection: 'translate(0 0)',
		filter: '',
		glareOpacity: 0,
		shadeOpacity: 0
	}
	const fuzzy = {
		...normal,
		path: logoPath.heavy,
		weight: 28,
		filter: 'url(#displacementFilter)'
	}
	const heavy = {
		...normal,
		path: logoPath.heavy,
		weight: 22,
		filter: ''
	}
	const baloon = {
		...normal,
		path: logoPath.baloon,
		weight: 26,
		glareAmount: 4.5,
		glareTransform: 'translate(3.2 -6.7)',
		shadeAmount: 32,
		colorDirection: 'translate(1.4 -2.8)',
		filter: 'url(#colorSoften)',
		glareOpacity: 1,
		shadeOpacity: 1
	}

	const [logoProps, api] = useSpring(() => ({
		...normal,
		from: heavy,
		delay: 500
	}))

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
			...fuzzy,
			config: {
				mass: 1,
				tension: 500,
				friction: 22
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
			<defs>
				<filter id='glareBlur'>
					<feGaussianBlur stdDeviation='3.3' />
				</filter>

				<filter id='colorSoften'>
					<feGaussianBlur stdDeviation='2' />
				</filter>
				<filter id='displacementFilter'>
					<feTurbulence
						type='turbulence'
						baseFrequency='0.15'
						numOctaves='1'
						result='turbulence'
					/>
					<feDisplacementMap
						in2='turbulence'
						in='SourceGraphic'
						scale='10'
						xChannelSelector='R'
						yChannelSelector='G'
					/>
				</filter>
			</defs>

			<animated.path
				d={logoProps.path}
				fill='none'
				stroke={logoProps.shadeColor}
				opacity={logoProps.shadeOpacity}
				strokeWidth={logoProps.shadeAmount}
			/>

			<animated.path
				d={logoProps.path}
				fill='none'
				stroke={logoProps.color}
				filter={logoProps.filter}
				strokeWidth={logoProps.weight}
				transform={logoProps.colorDirection}
			/>

			<animated.path
				d={logoProps.path}
				fill='none'
				strokeWidth={logoProps.glareAmount}
				opacity={logoProps.glareOpacity}
				filter='url(#glareBlur)'
				transform={logoProps.glareTransform}
				stroke={logoProps.glareColor}
			/>
		</StyledLogo>
	)
}

export default Logo
