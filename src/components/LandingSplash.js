import React from 'react'
import logo from '../images/Deffo-Wanna-Logo-Animation.gif'
import styled, { keyframes } from 'styled-components'
import CrossHatch from './CrossHatch'

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const CenterFlex = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	grid-area: main;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
	text-align: center;

	h2 {
		opacity: 0;
		animation: ${fadeIn} 1.5s ease 1.8s;
		animation-fill-mode: forwards;
	}
	p {
		opacity: 0;
		animation: ${fadeIn} 2.5s ease 2.5s;
		animation-fill-mode: forwards;
	}
`

const LandingSplash = () => {
	return (
		<CenterFlex>
			<CrossHatch invertContent backgroundSize='50px' animate>
				<img src={`${logo}?a=${Math.random()}`} alt='deffo wanna logo animation' height='120px'/>
			</CrossHatch>
			<h2>Design & Web Development</h2>
			<p>(website coming soon!)</p>
		</CenterFlex>
	)
}

export default LandingSplash
