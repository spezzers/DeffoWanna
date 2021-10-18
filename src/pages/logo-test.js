import React from 'react'
import Layout from '../components/layout'
import CrossHatch from '../components/CrossHatch'
import ollieBall2 from '../images/ollieBall2_compressed.mp4'
import { Helmet } from 'react-helmet'

const LogoTest = () => {
	return (
		<Layout>
			<Helmet title='Logo Test' />
			<CrossHatch preserveHatch edgeSoftness={30} backgroundSize='40px' animate>
				<video playsInline loop muted autoPlay>
					<source src={ollieBall2} type='video/mp4' />
				</video>
			</CrossHatch>
		</Layout>
	)
}

export default LogoTest
