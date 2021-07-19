import React, { useContext } from 'react'
import shortHatch from '../images/shortHatch.svg'
import { crossHatchDataBase64 } from './crossHatchData'
import styled, { ThemeContext } from 'styled-components'

const Hatching = styled.div.attrs(props => {
	let passedProps = {
		...props,
		edgeSoftness:
			props.edgeSoftness > 0
				? `${props.edgeSoftness}px`
				: props.edgeSoftness === 0
				? 0
				: '15px',
		blend: 'multiply',
		themeFilters: 'brightness(1.25)',
		invertHatch: 'invert(0)',
		invertContent: 'invert(0)',
		text: 'black',
		blacks: props.blacks || props.theme?.contrast || 'black',
		whites: props.whites || props.theme?.background || 'white'
	}
	if (props.theme.name === 'dark') {
		passedProps = {
			...passedProps,
			blend: 'color-dodge',
			themeFilters: 'brightness(0.9)',
			invertHatch: 'invert(1)',
			invertContent: props.darkInvert ? 'invert(0)' : 'invert(1)',
			text: props.darkInvert ? 'black' : 'white',
			blacks: props.blacks || props.theme?.background || 'white',
			whites: props.whites || props.theme?.purpleText || 'black'
		}
	}
	return passedProps
})`
	filter: blur(0.4px);
	display: block;
	overflow: hidden;
	position: relative;
	.wrapper {
		filter: grayscale(1) contrast(500) ${props => props.themeFilters};
		margin: 0;
	}
	
	.color {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		box-sizing: border-box;
		pointer-events: none;
	}
	.dark {
		background-color: ${props => props.blacks};
		mix-blend-mode: lighten;
	}
	.light {
		background-color: ${props => props.whites};
		mix-blend-mode: darken;
	}
	
	.hatch { //BUG layout alignment issues for elements that extend off screen
		//TODO try multiple backgrounds with background-blend-mode method
		background-image: url(${crossHatchDataBase64}); //OPTIMIZE Base64 is 1.84kb larger than SVG
		/* background-image: url(${shortHatch});  */
		filter: ${props => props.invertHatch} contrast(0.5);
		background-origin: border-box;
		background-repeat: repeat;
		//TODO add pattern density prop
		background-size: 60px;
		// ----------------------------
		overflow-y: hidden;
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness} ${props.edgeSoftness}`} white;

		.content {
			//TODO add background-color prop
			background-color: white;
			//------------------------------
			mix-blend-mode: hard-light;
			filter: contrast(0.5) blur(0);

			* {
				filter: ${props => props.invertContent};
				margin: 0; //NOTE background-color doesn't fill to margin. Use padding for spacing
			}

			p,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				//OPTIMIZE consider an eroding/dilating filter to balance text weight across light and dark theme when using 'darkInvert'
				color: ${props => props.text}
			}
		}
	}
`

const CrossHatch = props => {
	const theme = useContext(ThemeContext)
	return (
		<Hatching theme={theme} {...props}>
			<div className='wrapper'>
				<div className='hatch'>
					<div className='content'>{props.children}</div>
				</div>
			</div>
			<div className='dark color' />
			<div className='light color' />
		</Hatching>
	)
}

export default CrossHatch
