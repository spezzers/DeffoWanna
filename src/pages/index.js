import React from 'react'
import LandingSplash from '../components/LandingSplash'
import Layout, { Section, Grid } from '../components/layout'
import { Helmet } from 'react-helmet'

const Index = props => {
	return (
		<Layout location={props.location}>
			<Helmet>
				<title>Deffo Wanna - Graphic Designer & Web Developer</title>
			</Helmet>
			<Section>
				<LandingSplash />
			</Section>
			<Section>
				<h1>Section 2</h1>
				<Grid></Grid>
			</Section>
			<Section>
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
