import React from 'react'
import styled from 'styled-components'
import { colGap, lineHeight } from '../styles/sizes'
import { themeContextColor } from '../styles/themes'

const _Button = styled.button.attrs(props => {
	const newProps = props.primary
		? { main: 'purpleText',
			bg: 'background',
			black: 'black',
			white: 'white',
			contrast: 'contrast'
		}
		: {
			main: 'background',
			bg: 'purpleTextStrong',
			black: 'purpleBg',
			white: 'purpleText',
			contrast: 'purpleText'
		}

	return newProps
})`
	--main: ${props => themeContextColor(props.main)};
	--bg: ${props => themeContextColor(props.bg)};
	--contrast: ${props => themeContextColor(props.contrast)};
	--black: ${props => themeContextColor(props.black)};
	--white: ${props => themeContextColor(props.white)};
	background-color: var(--main);
	margin: calc(${lineHeight} / 2) calc(${colGap} / 2);
	font-size: 1em;
	font-weight: 600;
	color: var(--bg);
	border-radius: .5em;
	transform: translateY(-.125em);
	filter: none;
	border: .1em solid var(--main);
	text-align: center;
	line-height: ${lineHeight};
	padding: calc(${lineHeight} / 2) calc(${colGap} / 2);
	box-shadow:
		0 0 0 0.1em var(--white),
		0 0.2em 0 0.2em var(--black),
		0 0.2em 0 0.4em var(--contrast);
	cursor: pointer;
	transition: all .02s ease-in-out;
	:hover, :focus {
		filter: contrast(2);
		outline: none;
	}
	:active {
		filter: saturate(3);
		transform: translateY(0.075em);
		box-shadow:
		0 0 0 0.1em var(--white),
		0 0.025em 0 0.2em var(--black),
		0 0.025em 0 0.4em var(--contrast);
	}
`

const Button = (props) => {
	return(
		<_Button {...props} type='button'>
			{props.children}
		</_Button>
	)
}

export default Button