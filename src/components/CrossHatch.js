import React, { useContext } from 'react'
import { crossHatchDataBase64 } from './crossHatchData'
import styled, { ThemeContext } from 'styled-components'

//BUG First render uses wrong theme in dark mode (build only)

const Hatching = styled.div.attrs(props => {
	const isDark = props.theme.name === 'dark'
	console.log('isDark', isDark)
	return {
		...props,
		edgeSoftness:
			props.edgeSoftness > 0
				? `${props.edgeSoftness}px`
				: props.edgeSoftness === 0
				? 0
				: '15px',
		blend: isDark ? 'color-dodge' : 'multiply',
		themeFilters: isDark ? 'brightness(0.9)' : 'brightness(1.25)',
		invertHatch: isDark ? 'invert(1)' : 'invert(0)',
		invertContent: !isDark
			? 'invert(0)'
			: props.darkInvert
			? 'invert(0)'
			: 'invert(1)',
		text: !isDark ? 'black' : props.darkInvert ? 'black' : 'white',
		blacks: isDark
			? props.blacks || props.theme?.background || 'white'
			: props.blacks || props.theme?.text || 'black',
		whites: isDark
			? props.whites || props.theme?.purpleText || 'black'
			: props.whites || props.theme?.background || 'white'
	}
})`
	filter: blur(0.4px);
	//TODO create flex layout customizable via props -----
	display: block;
	//----------------------------------------------------
	position: relative;
	.wrapper {
		filter: grayscale(1) contrast(500) ${props => props.themeFilters};
		margin: 0;
	}

	.color {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
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

	.hatch {
		//OPTIMIZE Base64 is 1.84kb larger than SVG --------------
		background-image: url(${crossHatchDataBase64});
		//--------------------------------------------------------
		filter: ${props => props.invertHatch} contrast(0.5);
		background-origin: border-box;
		background-repeat: repeat;
		//TODO add pattern density prop-------------
		background-size: 60px;
		// -----------------------------------------
		//FIX edgeSoftness ----------
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness} ${props.edgeSoftness}`} white;
		//---------------------------

		.content {
			//TODO add background-color prop----------------
			background-color: white;
			//----------------------------------------------
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
				color: ${props => props.text};
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
