import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import styled, { ThemeContext } from 'styled-components'
import { logoPaths } from './logoPaths'
import useTouch from '../hooks/useTouch'
import { navigate } from 'gatsby'

const StyledLogo = styled(animated.svg)`
	height: ${props => `${props.size ? `${props.size}rem` : null}`};
	fill: none;
	position: ${props => props.position || 'initial'};
	:hover {
		cursor: pointer;
	}
	:focus {
		outline: none;
	}
`

const AnimFePointLight = animated('fePointLight')

const Logo = props => {
	const theme = useContext(ThemeContext)

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
		scale: 1,
		...getPaths('normal'),
		color: props.color || theme?.purpleText || '#777777',
		weight: 5,
		filter: '',
		config: {
			clamp: false,
			mass: 1,
			tension: 450,
			friction: 60
		}
	}
	const heavy = {
		...normal,
		...getPaths('heavy'),
		color: theme?.purpleBg || normal.color,
		weight: 22,
		filter: ''
	}

	const baloon = {
		...normal,
		...getPaths('baloon'),
		weight: 27,
		filter: 'url(#lightSource)',
	}

	const [logoProps, api] = useSpring(() => ({
		...normal,
		from: heavy,
		delay: 500
	}))

	const deactivate = () => {
		api.start({
			to: normal,
			config: {
				clamp: false,
				mass: 1,
				tension: 450,
				friction: 60
			}
		})
	}

	const getLightPoint = cursorPos => {
		const logo = document.getElementById('logo')
		const logoBox = logo.getBoundingClientRect()
		const scale = 524 / logoBox.width
		const offsetX = (cursorPos.x - logoBox.left) * scale || 800
		const offsetY = (cursorPos.y - logoBox.top) * scale || 120
		return { x: offsetX, y: offsetY }
	}

	const activate = cursorPos => {
		api.start({
			to: heavy,
			config: {
				clamp: props.linkto !== null ? true : false,
				mass: 1,
				tension: 220,
				friction: 8,
			},
			onRest: () => {
				if (props.linkto) {
					navigate(props.linkto)
				}
			}
		})
	}
	const hoverInactive = cursorPos => {
		api.start({
			to: baloon,
			config: {
				clamp: false,
				mass: 1,
				tension: 400,
				friction: 10
			}
		})
	}

	const hoverMouseMove = cursorPos => {
		const result = getLightPoint(cursorPos)
		setLightPos.start(result)
	}

	const touch = useTouch({
		activate,
		deactivate,
		hoverInactive,
		hoverMouseMove
	})

	return (
		<StyledLogo
			{...props}
			tabIndex='0'
			id='logo'
			role='button'
			viewBox='0 0 534 305'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.414}
			{...touch.attributes()}
		>
			<title>{props.title ? props.title : 'Deffo Wanna'}</title>
			<desc>{props.title ? 'Deffo Wanna' : ''} graphic design and web development</desc>
			<defs>
				<filter id='lightSource'>
					<feGaussianBlur
						in='SourceGraphic'
						result='light1'
						stdDeviation={5.5}
					/>

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
						k1={lightIntensity * (theme.name === 'light' ? 0.6 : 1)}
						k2={theme.name === 'light' ? 0.5 : 0.6}
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
