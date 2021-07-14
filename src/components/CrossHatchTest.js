import React, { useContext } from 'react'
import shortHatch from '../images/shortHatch.svg'
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
			blend: 'multiply',
			themeFilters: 'brightness(1.25)',
			invert: 'invert(0)'
		}
	} else {
		return {
			blend: 'color-dodge',
			themeFilters: 'brightness(0.85)',
			invert: 'invert(1)'
		}
	}
})`
	filter: grayscale(1) brightness(1) contrast(500) 
		${props => props.themeFilters} blur(0.4px) !important;
	margin: 0;
	mix-blend-mode: ${props => props.blend};
	opacity: 0.75;
	.hatch {
		background-image: url(${shortHatch});
		filter: ${props => props.invert} blur(0.2px);
		background-origin: border-box;
		background-repeat: repeat;
		background-size: 70px;
		overflow-y: hidden;
		
		svg,
		img {
			filter: ${props => props.invert} contrast(0.5) blur(0);
			display: block;
			background-color: white !important;
			mix-blend-mode: hard-light;
			box-shadow: 0 0 20px 15px white;
		}

	}
`

const CrossHatchTest = () => {
	const theme = useContext(ThemeContext)
	return (
		<>
			<HatchedImage theme={theme}>
				<div className='hatch'>
					<DemoSVG />
					<Logo color='black' />
				</div>
			</HatchedImage>
		</>
	)
}

export default CrossHatchTest
