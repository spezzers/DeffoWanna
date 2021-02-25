import React from 'react'
import logo from '../images/Deffo-Wanna-Logo-Animation.gif'
import styled from 'styled-components'


const CenterFlex = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;

	#logo {
		height: 6rem;
	}
`

const LandingSplash = () => {
	
	return(
		<CenterFlex>
			<img id="logo" src={logo} alt="animated logo"/>
			<h2>Design & Web Development</h2>
		</CenterFlex>
	)
}

export default LandingSplash