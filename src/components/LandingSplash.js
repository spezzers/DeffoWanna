import React from 'react'
import logo from '../images/Deffo-Wanna-Logo-Animation.gif'
import styled, {keyframes} from 'styled-components'

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
	height: 100vh;
	width: 100vw;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;

	#logo {
		height: 6rem;
		width: 100%;
		background-image: url(${logo});
		mix-blend-mode: multiply;
		/* filter: invert(1); */
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
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
	
	return(
		<CenterFlex>
			<div id="logo"></div>
			<h2>Design & Web Development</h2>
			<p>(website coming soon!)</p>
		</CenterFlex>
	)
}

export default LandingSplash