import React, { useContext } from 'react'
import shortHatch from '../images/shortHatch.svg'
import styled, { ThemeContext } from 'styled-components'

const Hatching = styled.div.attrs(props => {
	if (props.theme.name === 'dark') {
		return {
			...props,
			blend: 'color-dodge',
			themeFilters: 'brightness(0.9)',
			invert: 'invert(1) contrast(0.5)',
			darkColor: props.darkColor || props.theme?.background || 'white',
			lightColor: props.lightColor || props.theme?.purple || 'black'
		}
	} else {
		return {
			...props,
			blend: 'multiply',
			themeFilters: 'brightness(1.25)',
			invert: 'invert(0) contrast(0.5)',
			darkColor: props.darkColor || props.theme?.contrast || 'black',
			lightColor: props.lightColor || props.theme?.background || 'white'
		}
	}
})`
	filter: blur(0.4px);
	display: block;
	overflow: hidden;
	.wrapper {
		filter: grayscale(1) contrast(500) ${props => props.themeFilters};
		margin: 0;
	}
	.color {
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 200;
		top: 0;
		left: 0;
		display: block;
	}
	.dark {
		background-color: ${props => props.darkColor};
		mix-blend-mode: lighten;
	}
	.light {
		background-color: ${props => props.lightColor};
		mix-blend-mode: darken;
	}
	.hatch {
		background-image: url(${shortHatch});
		filter: ${props => props.invert} blur(0.2px);
		background-origin: border-box;
		background-repeat: repeat;
		background-size: 60px;
		overflow-y: hidden;
		box-shadow: inset 0 0 20px 20px white;


		.content {
			background-color: white;
			mix-blend-mode: hard-light;
			display: inline-block;

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
			img,
			video {
				filter: ${props => props.invert} blur(0);
			}
		}
	}
`

const CrossHatch = props => {
	const theme = useContext(ThemeContext)
	return (
		<Hatching theme={theme}>
			<div className='dark color' />
			<div className='light color' />
			<div className='wrapper'>
				<div className='hatch'>
					<div className='content'>{props.children}</div>
				</div>
			</div>
		</Hatching>
	)
}

export default CrossHatch
