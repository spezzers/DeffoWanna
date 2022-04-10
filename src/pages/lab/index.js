import React from 'react'
import Layout, { Section } from '../../components/layout'

const index = () => {
	return (
		<Layout>
			<Section>Experiments</Section>
			<Section bgColor='redBg'></Section>
			<Section bgColor='greenBg'></Section>
			<Section bgColor='yellowBg'></Section>
			<Section bgColor='blueBg'></Section>
		</Layout>
	)
}

export default index
