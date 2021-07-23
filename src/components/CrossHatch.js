import React, { useContext, useLayoutEffect } from 'react'
import { crossHatchDataBase64 } from './crossHatchData'
import styled, { ThemeContext } from 'styled-components'
import useResponsive from '../hooks/useResponsive'

//FIX crossHatch background-image fails on iOS device rotation until page refresh

const Hatching = styled.div.attrs(props => {
	const isDark = props.theme.name === 'dark'
	return {
		...props,
		edgeSoftness:
			props.edgeSoftness > 0
				? `${props.edgeSoftness}px`
				: props.edgeSoftness === 0
				? 0
				: '15px',
		themeFilters: isDark ? 'brightness(0.9)' : 'brightness(1.25)',
		invertHatch: isDark ? 'invert(1)' : 'invert(0)',
		invertContent: !isDark
			? 'invert(0)'
			: props.darkInvert
			? 'invert(0)'
			: 'invert(1)',
		blacks: isDark
			? props.blacks || props.theme?.background || 'white'
			: props.blacks || props.theme?.text || 'black',
		whites: isDark
			? props.whites || props.theme?.purpleText || 'black'
			: props.whites || props.theme?.background || 'white',
		backgroundColor: isDark ? 'black' : 'white'
	}
})`
	//TODO create flex layout customizable via props -----
	//----------------------------------------------------
	width: fit-content;
	position: relative;
	background-color: ${props => props.backgroundColor};
	.wrapper {
		position: relative;

		filter: grayscale(1) contrast(500) ${props => props.themeFilters};
		margin: 0;
	}

	.color {
		position: absolute;
		inset: 0;
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
		//OPTIMIZE Base64 is 1.84kb larger than SVG and multiplies with every instance--------------
		background-image: url(${crossHatchDataBase64});
		//--------------------------------------------------------
		height: fit-content;
		filter: ${props => props.invertHatch} contrast(0.5);
		background-origin: border-box;
		background-repeat: repeat;
		background-position: center;
		//TODO add pattern density prop-------------
		background-size: 60px;
		// -----------------------------------------
		//FIX edgeSoftness ----------
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness} ${props.edgeSoftness}`} white;
		//---------------------------
		* :not(svg){
			background-image: none;
			background-color: ${props => props.backgroundColor};
			mix-blend-mode: hard-light;
			filter: ${props => props.invertContent} contrast(0.5);
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
			filter: invert(0);
			color: black;
			background-image: none;
			background-color: white;

		}
	}
`

const CrossHatch = props => {
	const responsive = useResponsive()
	const theme = useContext(ThemeContext)
	useLayoutEffect(() => {
		console.log('CrossHatch useEffect')
	}, [responsive.windowSize])
	return (
		<Hatching theme={theme} {...props}>
			<div className='wrapper'>
				<div className='hatch'>{props.children}</div>
			</div>
			<div className='dark color' />
			<div className='light color' />
		</Hatching>
	)
}

export default CrossHatch
