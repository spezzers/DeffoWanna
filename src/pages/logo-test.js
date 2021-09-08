import React from 'react'
import Layout from '../components/layout'
import CrossHatch from '../components/CrossHatch'
import ollieBall2 from '../images/ollieBall2_compressed.mp4'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const BackgroundHatch = styled(CrossHatch)`
	width: 100vw;
	height: 100vh;
	position: fixed;
	inset: 0;
	z-index: -1;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Test = styled.div`
	width: 300px;
	height: 180px;
	:after {
		background-color: white;
		top: -20px;
		position: absolute;
		left: -20px;
	}
	:before {
		border-radius: 50px;
		border: 20px solid #ccc;
		content: '';
		box-sizing: border-box;
		width: 300px;
		height: 180px;
		position: absolute;
		background-color: white;
		/* top: -20px; */
		/* left: -20px; */
		z-index: -10;
	}
`

const LogoTest = () => {
	return (
		<Layout>
			<Helmet title='Logo Test' />
			<CrossHatch invertHatch={false} edgeSoftness={30}>
				<video playsInline loop muted autoPlay>
					<source src={ollieBall2} type='video/mp4' />
				</video>
			</CrossHatch>
			<BackgroundHatch
				backgroundSize='60px'
				className='background'
				edgeSoftness={0}
				darkInvert
				blacks='purple'
			>
				{/* <video muted autoPlay loop playsInline>
						<source src={ollieBall2} type='video/mp4' />
					</video> */}
				<Test />
			</BackgroundHatch>
		</Layout>
	)
}

export default LogoTest
