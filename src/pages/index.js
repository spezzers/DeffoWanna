import React from 'react'
import LandingSplash from '../components/LandingSplash'
import Layout, { Section } from '../components/layout'
import { Helmet } from 'react-helmet'

const Index = props => {
	return (
		<Layout location={props.location}>
			<Helmet>
				<title>Deffo Wanna - Graphic Designer & Web Developer</title>
			</Helmet>
			<Section id='section1'>
				<LandingSplash />
			</Section>
			<Section id='section2' height='2000px' bgColor='blueBg'>
				<h1>Section 2</h1>
			</Section>
			<Section id='section3' bgColor='greenBg'>
				<h1>Section 3</h1>
			</Section>
			<Section id='section4'>
				<h1>Section 4</h1>
			</Section>
			<Section id='section5'>
				<h1>Section 5</h1>
			</Section>
		</Layout>
	)
}

export default Index
