import React, { useState, useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPaths } from './logoPaths'
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
	const [lightPos, setLightPos] = useState({ x: 700, y: -20 })

	let pathNames = []

	const getPaths = type => {
		const objs = Object.entries(logoPaths[type])
		const result = objs.reduce((acc, cur) => {
			const key = cur[0]
			const value = cur[1]
			if (!pathNames.includes(cur[0])) {
				pathNames = [...pathNames, cur[0]]
			}
			return (acc = { ...acc, [key]: value })
		}, {})
		return result
	}

	const normal = {
		...getPaths('normal'),
		color: props.color || theme?.purpleText || '#777777',
		weight: 5,
		filter: '',
		config: {
			mass: 1,
			tension: 450,
			friction: 60
		}
	}
	const heavy = {
		...normal,
		...getPaths('heavy'),
		weight: 22,
		filter: ''
	}
	const fuzzy = {
		...heavy,
		weight: 28,
		filter: 'url(#fuzzyWuzzy)',
		config: {
			mass: 1,
			tension: 500,
			friction: 22
		}
	}
	const baloon = {
		...normal,
		...getPaths('baloon'),
		weight: 27,
		filter: 'url(#lightSource)',
		config: {
			mass: 4,
			tension: 900,
			friction: 40
		}
	}

	const [logoProps, api] = useSpring(() => ({
		...normal,
		from: heavy,
		delay: 500
	}))

	const deactivate = () => {
		api.start(normal)
	}

	const activate = () => {
		api.start(baloon)
	}
	const hoverInactive = () => {
		api.start(fuzzy)
	}

	const activeMouseMove = cursorPos => {
		const logo = document.getElementById('logo')
		const logoBox = logo.getBoundingClientRect()
		const offsetX = (cursorPos.x - logoBox.left) * window.devicePixelRatio

		const offsetY = (cursorPos.y - logoBox.top) * window.devicePixelRatio
		setLightPos({ x: offsetX, y: offsetY })
	}

	const touch = useTouch({
		activate,
		deactivate,
		hoverInactive,
		activeMouseMove
	})

	return (
		<StyledLogo
			id='logo'
			style={logoProps}
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
				<filter id='lightSource'>
					<feGaussianBlur in='SourceGraphic' result='light1' stdDeviation={0.4 * props.rem} />

					<feDiffuseLighting
						in='light1'
						result='light2'
						lightingColor={theme.white}
						diffuseConstant={3 * props.rem}
					>
						<fePointLight x={lightPos.x} y={lightPos.y} z='5' />
					</feDiffuseLighting>

					<feComposite
						in='SourceGraphic'
						in2='light2'
						operator='arithmetic'
						k1={theme.name === 'light' ? 0.8 : 1}
						k2={theme.name === 'light' ? 0.45 : 0.6}
						k3='0'
						k4='0'
					/>
					<feDropShadow
						dx='-4'
						dy='3'
						stdDeviation={0.8 * props.rem}
						floodColor={theme.black}
						floodOpacity='0.1'
					/>
				</filter>
				<filter id='fuzzyWuzzy'>
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
			<animated.g
				fill='none'
				stroke={logoProps.color}
				strokeWidth={logoProps.weight}
			>
				<rect width='534' height='305' fill='none' stroke='none' />
				{pathNames.map(pathName => (
					<animated.path key={pathName} d={logoProps[pathName]} />
				))}
			</animated.g>
		</StyledLogo>
	)
}

export default Logo
