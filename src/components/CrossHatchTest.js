import React, { useContext } from 'react'
import hatch from '../images/shortHatch.jpg'
import logoAnim from '../images/Deffo-Wanna-Logo-Animation.gif'
import styled, { ThemeContext } from 'styled-components'

import Logo from './Logo'

export const DemoSVG = () => {
	return (
		<svg width='500px' height='200px' viewBox='0 0 500 200'>
			<defs>
				<linearGradient id='gradientFill'>
					<stop offset='0%' stopColor='black' />
					<stop offset='100%' stopColor='white' />
				</linearGradient>
			</defs>
			<rect width='100%' height='100%' fill='url(#gradientFill)' />
		</svg>
	)
}

const HatchedImage = styled.div.attrs(props => {
	if (props.theme.name === 'light') {
		return {
			blend: 'darken',
			themeFilters: 'brightness(1.25)'
		}
	} else {
		return {
			blend: 'lighten',
			themeFilters: 'invert(1) brightness(0.85)'
		}
	}
})`
	filter: grayscale(100%) brightness(1.15) contrast(100)
		${props => props.themeFilters} blur(0.4px) !important;
	margin: 0;
	mix-blend-mode: ${props => props.blend};
`

const Hatch = styled.div`
	background-image: url(${hatch});
	background-origin: border-box;
	background-repeat: repeat;
	background-size: 120px;
	overflow-y: hidden;

	svg,
	img {
		display: block;
		background-color: white !important;
		opacity: 0.47;
	}
`

const CrossHatchTest = () => {
	const theme = useContext(ThemeContext)
	return (
		<>
			<HatchedImage theme={theme}>
				<Hatch>
					<DemoSVG />
					<Logo color='black' />
				</Hatch>
			</HatchedImage>
		</>
	)
}

export default CrossHatchTest
