import React from 'react'
import { crossHatchDataBase64 } from './crossHatchData'
import styled from 'styled-components'
import { themeContextColor } from '../styles/themes'

const Hatching = styled.div.attrs(props => {
	const isDark = props.theme.name === 'dark'
	const invertContentBool = props.invertContent || false
	const preserveHatchBool = props.preserveHatch || false

	const inverts = () => {
		let edgeColor = 'white'
		let invertContent = 'invert(0)'
		let invertHatch = 'invert(0)'
		if (isDark) {
			if (invertContentBool && !preserveHatchBool) {
				invertHatch = 'invert(1)'
				edgeColor = 'white'
			} else if (invertContentBool && preserveHatchBool) {
				invertContent = 'invert(1)'
				edgeColor = 'black'
			} else if (!invertContentBool && !preserveHatchBool) {
				invertContent = 'invert(1)'
				invertHatch = 'invert(1)'
				edgeColor = 'white'
			} else {
				edgeColor = 'black'
			}
		}
		return { invertHatch, invertContent, edgeColor }
	}

	const newProps = {
		...props,
		...inverts(),
		animate: props.animate ? 'jiggle 1.2s steps(1) infinite' : 'none',
		edgeSoftness:
			props.edgeSoftness > 0
				? `${props.edgeSoftness}px`
				: props.edgeSoftness === 0
				? 0
				: '15px',
		themeFilters: isDark ? 'brightness(0.9)' : 'brightness(1.25)',
		blacks: isDark
			? themeContextColor(
					props.blacks,
					themeContextColor('background', 'white')
			  )
			: themeContextColor(props.blacks, themeContextColor('text', 'black')),
		whites: isDark
			? themeContextColor(
					props.whites,
					themeContextColor('purpleText', 'black')
			  )
			: themeContextColor(
					props.whites,
					themeContextColor('background', 'white')
			  ),
		backgroundColor: !isDark ? 'white' : props.invertContent ? 'white' : 'black'
	}
	return newProps
})`
	--bg-size: ${props => props.backgroundSize || '3rem'};
	@keyframes jiggle {
		0% {
			background-position: calc(0.5 * var(--bg-size))
				calc(-0.1 * var(--bg-size));
		}
		33% {
			background-position: calc(-0.25 * var(--bg-size))
				calc(0.5 * var(--bg-size));
		}
		66% {
			background-position: calc(-0.1 * var(--bg-size))
				calc(0.4 * var(--bg-size));
		}
	}

	width: fit-content;
	user-select: none;
	position: relative;
	.hatch-wrap {
		position: relative;
		filter: grayscale(1) contrast(500) ${props => props.themeFilters};
		margin: 0;
		z-index: 0;
	}

	:before,
	:after {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
		content: '';
	}
	:before {
		background-color: ${props => props.blacks};
		mix-blend-mode: lighten;
	}
	:after {
		background-color: ${props => props.whites};
		mix-blend-mode: darken;
	}

	.hatch {
		background-image: url(${crossHatchDataBase64});
		animation: ${props => props.animate};
		height: fit-content;
		filter: ${props => props.invertHatch};
		background-origin: border-box;
		background-repeat: repeat;
		background-position: center;
		background-size: var(--bg-size);
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness}
			${props.edgeSoftness} ${props.edgeColor}`};

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
	.hatch > * {
		display: block;
		background-image: none;
		background-color: ${props => props.backgroundColor};
		filter: ${props => props.invertContent} contrast(0.475);
		mix-blend-mode: hard-light;
		margin: 0;
		* {
			/* background-color: unset; */
			/* mix-blend-mode: normal; */
			/* filter: none; */
		}
	}
`

const CrossHatch = props => {
	const {
		edgeSoftness,
		invertContent,
		preserveHatch,
		blacks,
		whites,
		backgroundSize,
		animate,
		...wrapProps
	} = props
	const hatchProps = {
		edgeSoftness,
		invertContent,
		preserveHatch,
		blacks,
		whites,
		animate,
		backgroundSize
	}
	return (
		<div {...wrapProps}>
			<Hatching {...hatchProps}>
				<div className='hatch-wrap'>
					<div className='hatch'>{props.children}</div>
				</div>
			</Hatching>
		</div>
	)
}

export default CrossHatch
