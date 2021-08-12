import React from 'react'
import LandingSplash from '../components/LandingSplash'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const Index = () => {

	return (
		<Layout>
			<Helmet>
				<title>Deffo Wanna - Graphic Designer & Web Developer</title>
			</Helmet>
			<LandingSplash />
		</Layout>
	)
}

export default Index