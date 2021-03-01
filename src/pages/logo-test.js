import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import styled from 'styled-components'

const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`

const LogoTest = () => {
	return (
		<Layout>
			<Wrap>
				<Logo color='#52a' highlightColor='#cfd' />
			</Wrap>
		</Layout>
	)
}

export default LogoTest
