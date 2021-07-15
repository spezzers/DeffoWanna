import React, { useContext } from 'react'
import shortHatch from '../images/shortHatch.svg'
import styled, { ThemeContext } from 'styled-components'

const Hatching = styled.div.attrs(props => {
	let passedProps = {
		...props,
		blend: 'multiply',
		themeFilters: 'brightness(1.25)',
		invertHatch: 'invert(0)',
		invertContent: 'invert(0)',
		blacks: props.blacks || props.theme?.contrast || 'black',
		whites: props.whites || props.theme?.background || 'white',
	}
	if (props.theme.name === 'dark') {
		passedProps = {
			...passedProps,
			blend: 'color-dodge',
			themeFilters: 'brightness(0.9)',
			invertHatch: 'invert(1)',
			invertContent: props.darkInvert ? 'invert(0)' : 'invert(1)',
			blacks: props.blacks || props.theme?.background || 'white',
			whites: props.whites || props.theme?.purpleText || 'black'
		}
		
	}
	return passedProps
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
		top: 0;
		left: 0;
		display: block;
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
		background-image: url(${shortHatch});
		filter: ${props => props.invertHatch} contrast(0.5) blur(0.2px);
		background-origin: border-box;
		background-repeat: repeat;
		background-size: 60px;
		overflow-y: hidden;
		box-shadow: inset 0 0 20px 20px white;

		.content {
			background-color: white;
			mix-blend-mode: hard-light;
			display: inline-block;

			* {
			}

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
				filter: ${props => {
					console.log(props)
					return (props.invertContent)}}  contrast(0.5) blur(0);

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
