import React from 'react'
import { crossHatchDataBase64 } from './crossHatchData'
import styled from 'styled-components'
import { themeContextColor } from './layout'

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
		backgroundColor: !isDark ? 'white' : props.darkInvert ? 'white' : 'black'
	}
})`
	--bg-size: ${props => props.backgroundSize || '3rem'};
	@keyframes jiggle {
		0% {
			background-position: calc(0.5 * var(--bg-size)) calc(-0.1 * var(--bg-size));
		}
		33% {
			background-position: calc(-0.25 * var(--bg-size)) calc(0.5 * var(--bg-size));
		}
		66% {
			background-position: calc(-0.1 * var(--bg-size)) calc(0.4 * var(--bg-size));
		}
	}

	width: fit-content;
	user-select: none;
	position: relative;
	z-index: -1;
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
		//TODO make animated texture optional (it's quite vertigo inducing!)
		animation: jiggle 1.2s steps(1) infinite;
		height: fit-content;
		filter: ${props => props.invertHatch};
		background-origin: border-box;
		background-repeat: repeat;
		background-position: center;
		background-size: var(--bg-size);
		box-shadow: inset 0 0
			${props => `${props.edgeSoftness}
			${props.edgeSoftness}`}
			white;
		* {
			display: block;
			background-image: none;
			background-color: ${props => props.backgroundColor};
			filter: ${props => props.invertContent} contrast(0.5);
			mix-blend-mode: hard-light;
			margin: 0;
			* {
				background-color: unset;
				mix-blend-mode: normal;
				filter: none;
			}
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
	const {
		edgeSoftness,
		darkInvert,
		blacks,
		whites,
		backgroundSize,
		...wrapProps
	} = props
	const hatchProps = {
		edgeSoftness,
		darkInvert,
		blacks,
		whites,
		backgroundSize
	}
	return (
		<div {...wrapProps}>
			<Hatching {...hatchProps}>
				<div className='wrapper'>
					<div className='hatch'>{props.children}</div>
				</div>
				<div className='dark color' />
				<div className='light color' />
			</Hatching>
		</div>
	)
}

export default CrossHatch
