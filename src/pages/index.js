import React from 'react'
import LandingSplash from '../components/LandingSplash'
import Layout, { Section, Grid } from '../components/layout'
import { Helmet } from 'react-helmet'
import { themeContextColor } from '../styles/themes'

const Index = props => {
	return (
		<Layout location={props.location}>
			<Helmet>
				<title>Deffo Wanna - Graphic Designer & Web Developer</title>
			</Helmet>
			<Section>
				<LandingSplash />
			</Section>
			<Section height='2000px' backgroundColor={themeContextColor('blueBg')}>
				<h1>Section 2</h1>
			</Section>
			<Section backgroundColor={themeContextColor('greenBg')}>
				<h1>Section 3</h1>
			</Section>
			<Section>
				<h1>Section 4</h1>
			</Section>
			<Section>
				<h1>Section 5</h1>
			</Section>
		</Layout>
	)
}

export default Index
