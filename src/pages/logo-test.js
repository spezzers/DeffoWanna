import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
// import styled from 'styled-components'

// const Wrap = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%;
// 	height: 100vh;
// 	background-color: ${props => props.theme.bg};
// `

const LogoTest = () => {
	return (
		<Layout>
			{/* <Wrap> */}
				<Logo
					// color='#65a7ed'
					// glareColor='#fce353' 
					// shadeColor='#ba2ea0'
				/>
			{/* </Wrap> */}
		</Layout>
	)
}

export default LogoTest
