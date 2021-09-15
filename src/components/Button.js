import React from 'react'
import styled from 'styled-components'
import { colGap, lineHeight } from '../styles/sizes'
import { themeContextColor } from '../styles/themes'

const StyledButton = styled.button.attrs(props => {
	const color = (themeColor, append) => {
		const validColors = ['purple', 'blue', 'teal', 'green', 'yellow', 'orange', 'red']
		const validAppends = ['Bg', 'Text', 'TextStrong']
		if (
			validColors.includes(themeColor) &&
			validAppends.includes(append)
		) {
			return `${themeColor}${append}`
		} 
		return `purple${append}`
	}

	const variant = props.variant === 'secondary' ? 'secondary' : 'primary'

	const newProps =
		variant === 'primary'
			? {
					main: color(props.color, 'Text'),
					bg: props.bgColor ? color(props.bgColor, 'Bg') : 'background',
					black: 'black',
					white: 'white',
					contrast: 'contrast'
			  }
			: {
					main: props.bgColor ? color(props.bgColor, 'Bg') : 'background',
					bg: color(props.color, 'Text'),
					black: color(props.color, 'Bg'),
					white: color(props.color, 'Text'),
					contrast: color(props.color, 'Text')
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
	font-size: .9rem;
	font-weight: 600;
	font-family: IBM Plex Sans, sans-serif;
	color: var(--bg);
	border-radius: 0.5em;
	transform: translateY(-0.125em);
	filter: none;
	border: 0.1em solid var(--main);
	text-align: center;
	line-height: ${lineHeight};
	padding: calc(${lineHeight} / 2) calc(${colGap} / 2);
	box-shadow: 0 0 0 0.1em var(--white), 0 0.2em 0 0.2em var(--black),
		0 0.2em 0 0.4em var(--contrast);
	cursor: pointer;
	transition: all 0.02s ease-in-out;
	:hover,
	:focus {
		filter: contrast(2);
		outline: none;
	}
	:active {
		filter: saturate(3);
		transform: translateY(0.075em);
		box-shadow: 0 0 0 0.1em var(--white), 0 0.025em 0 0.2em var(--black),
			0 0.025em 0 0.4em var(--contrast);
	}
`

const Button = props => {
	return (
		<StyledButton {...props} type='button' label='Dude'>
			{props.children}
		</StyledButton>
	)
}

export default Button
