import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPaths } from './logoPaths'
import useTouch from '../hooks/useTouch'

const StyledLogo = styled(animated.svg)`
	height: ${props => `${props.size ? `${props.size}rem` :  null}`};
	fill: none;
	position: ${props => props.position || 'relative'};
	:hover {
		cursor: pointer;
	}
`

const AnimFePointLight = animated('fePointLight')

const Logo = props => {
	const theme = useContext(ThemeContext)
	
	const size = props.size
	
	const lightColor = props.lightColor || theme.white || 'white'
	const lightIntensity = props.lightIntensity > 1 ? props.lightIntensity : 1

	const [lightPos, setLightPos] = useSpring(() => ({
		x: 700,
		y: -20,
		config: {
			mass: 1,
			tension: 800,
			friction: 45
		}
	}))

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

	const getLightPoint = cursorPos => {
		const logo = document.getElementById('logo')
		const logoBox = logo.getBoundingClientRect()
		const scale = 524 / logoBox.width
		const offsetX = (cursorPos.x - logoBox.left) * scale
		const offsetY = (cursorPos.y - logoBox.top) * scale
		return { x: offsetX, y: offsetY }
	}

	const activate = cursorPos => {
		const result = getLightPoint(cursorPos)
		setLightPos.start(result)
		api.start(baloon)
	}
	const hoverInactive = () => {
		api.start(fuzzy)
	}

	const activeMouseMove = cursorPos => {
		const result = getLightPoint(cursorPos)
		setLightPos.start(result)
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
			size={size}
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
					<feGaussianBlur in='SourceGraphic' result='light1' stdDeviation={5.5} />

					<feDiffuseLighting
						in='light1'
						result='light2'
						lightingColor={lightColor}
						diffuseConstant={12}
						surfaceScale={0.4}
					>
						<AnimFePointLight x={lightPos.x} y={lightPos.y} z='5' />
					</feDiffuseLighting>

					<feComposite
						in='SourceGraphic'
						in2='light2'
						operator='arithmetic'
						k1={lightIntensity * (theme.name === 'light' ? 2.8 : 1)}
						k2={theme.name === 'light' ? 0.45 : 0.6}
						k3='0'
						k4='0'
					/>
					<feDropShadow
						dx='-4'
						dy='3'
						stdDeviation={3.2}
						floodColor={theme.black}
						floodOpacity='0.1'
					/>
				</filter>
				<filter id='fuzzyWuzzy'>
					<feTurbulence
						type='turbulence'
						baseFrequency={0.06}
						numOctaves='1'
						result='turbulence'
					/>
					<feDisplacementMap
						in2='turbulence'
						in='SourceGraphic'
						scale={8.8}
						xChannelSelector='R'
						yChannelSelector='G'
					/>
				</filter>
			</defs>
			<animated.g
				filter={logoProps.filter}
				stroke={logoProps.color}
				strokeWidth={logoProps.weight}
			>
				<rect
					x='0'
					y='0'
					width='534'
					height='305'
					fill='none'
					stroke='none'
					filter=''
				/>
				{pathNames.map(pathName => (
					<animated.path key={pathName} d={logoProps[pathName]} filter='' />
				))}
			</animated.g>
		</StyledLogo>
	)
}

export default Logo
