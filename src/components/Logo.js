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
		path: logoPath.normal,
		weight: 5,
		filter: '',
		config: config.default
	}
	const fuzzy = {
		...normal,
		path: logoPath.heavy,
		weight: 28,
		filter: 'url(#displacementFilter)',
		config: {
			mass: 1,
			tension: 500,
			friction: 22
		}
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
		weight: 27,
		filter: 'url(#lightSource)',
		k1: 1,
		k2: 0.5,
		config: {
			mass: 1,
			tension: 450,
			friction: 8
		}
	}

	const [logoProps, api] = useSpring(() => ({
		...normal,
		from: heavy,
		delay: 500
	}))

	const deactivate = () =>
		api.start({
			...normal
		})

	const activate = () => {
		api.start({
			...baloon
		})
		console.log(document.getElementById('logo').getBoundingClientRect())
	}
	const hover = () => {
		api.start({
			...fuzzy
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
			<animated.defs>
				<filter id='lightSource'>
					<feGaussianBlur in='SourceGraphic' result='light1' stdDeviation='4.4' />

					<feDiffuseLighting
						in='light1'
						result='light2'
						lightingColor={theme.white}
						diffuseConstant='17'
					>
						<fePointLight x='700' y='-60' z='10' />
					</feDiffuseLighting>

					<feGaussianBlur in='light2' result='light3' stdDeviation='2' />

					<feComposite
						in='SourceGraphic'
						in2='light3'
						operator='arithmetic'
						k1='0.9'
						k2='0.5'
						k3='0'
						k4='0'
					/>
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
			</animated.defs>

			<animated.path
				d={logoProps.path}
				fill='none'
				stroke={logoProps.color}
				filter={logoProps.filter}
				strokeWidth={logoProps.weight}
				transform={logoProps.colorDirection}
			/>
		</StyledLogo>
	)
}

export default Logo
