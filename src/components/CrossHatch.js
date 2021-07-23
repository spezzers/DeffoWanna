import React, { useContext } from 'react'
import { crossHatchDataBase64 } from './crossHatchData'
import styled, { ThemeContext } from 'styled-components'

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
		backgroundColor: !isDark ? 'white' : props.darkInvert ? 'white' : 'black'
	}
})`
	width: fit-content;
	position: relative;
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
		background-image: url(${crossHatchDataBase64});
		height: fit-content;
		filter: ${props => props.invertHatch};
		background-origin: border-box;
		background-repeat: repeat;
		background-position: center;
		background-size: 60px;
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness} ${props.edgeSoftness}`} white;
		* {
			display: block;
			background-image: none;
			background-color: ${props => props.backgroundColor};
			filter: ${props => props.invertContent} contrast(0.5);
			mix-blend-mode: hard-light;
			margin: 0; //NOTE background-color doesn't fill to margin. Use padding for spacing
			* {
				background-color: unset;
				mix-blend-mode: normal;
				filter: none;
			}
		}
		* :not(.wrap) {
			filter: none ${props => [props.invertContent]};
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			filter: invert(0);
			color: black; //TODO customizable text color/intensity
			background-image: none;
			background-color: white;
		}
	}
`

const CrossHatch = props => {
	const theme = useContext(ThemeContext)
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
