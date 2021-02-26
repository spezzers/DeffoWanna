import React from 'react'
import Layout from '../components/layout'
import LogoFat from '../components/logo/logo-fat'
import LogoSlim from '../components/logo/logo-slim'


const Logo = () => {

	return (
		<Layout>
			<LogoSlim />
			<LogoFat />
		</Layout>
	)
}

export default Logo