import React, { useContext } from 'react'
import shortHatch from '../images/shortHatch.svg'
import styled, { ThemeContext } from 'styled-components'
import pic from '../images/lowRes.jpg'
import vid from '../images/odog.mp4'

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
			invert: 'invert(0) contrast(0.5)',
			contrast: 'black'
		}
	} else {
		return {
			blend: 'color-dodge',
			themeFilters: 'brightness(0.9)',
			invert: 'invert(1) contrast(0.5)',
			contrast: 'white'
		}
	}
})`
	filter: grayscale(1) contrast(500) ${props => props.themeFilters} blur(0.4px) !important;
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

		.content {
			background-color: white;
			mix-blend-mode: hard-light;
			display: block;

			p,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				color: black;
				:selection {
					color: black;
					background: white;
				}
			}
			svg,
			img, video {
				filter: ${props => props.invert} blur(0);
			}
		}
	}
`

const CrossHatchTest = () => {
	const theme = useContext(ThemeContext)
	return (
		<>
			<img src={shortHatch} alt='' display='none' width='0' />
			<HatchedImage theme={theme}>
				<div className='hatch'>
					<div className='content'>
						<video muted autoPlay loop playsInline >
							<source src={vid} type='video/mp4' />
						</video>
						<DemoSVG />
						<h1>Graphic Design & Web Development</h1>
						<img src={pic} width='600px' alt='birds' />
						<Logo color={theme.name === 'light' ? 'black' : 'white'} />
					</div>
				</div>
			</HatchedImage>
		</>
	)
}

export default CrossHatchTest
