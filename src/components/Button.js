import React from 'react'
import styled from 'styled-components'
import { colGap, lineHeight } from '../styles/sizes'
import { themeContextColor } from '../styles/themes'

const _Button = styled.button`
	--main: ${themeContextColor('purpleTextStrong')};
	--bg: ${themeContextColor('background')};
	--contrast: ${themeContextColor('contrast')};
	--black: ${themeContextColor('black')};
	--white: ${themeContextColor('white')};
	box-sizing: border-box;
	background-color: var(--main);
	color: var(--bg);
	border-radius: .5em;
	transform: translateY(-.125em);
	border: 1px solid var(--main);
	padding: calc(${lineHeight} / 2) calc(${colGap} / 2);
	box-shadow:
		0 0 0 0.1em var(--white),
		0 0.225em 0 0.3em var(--black),
		0 0.25em 0 0.45em var(--contrast)
		;
	cursor: pointer;
`

const Button = (props) => {
	const primary = props.secondary || false
	return(
		<_Button type='button'>
			Button.js
		</_Button>
	)
}

export default Button