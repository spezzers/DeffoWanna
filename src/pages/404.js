import * as React from 'react'
import Custom404Svg from '../components/Custom404Svg'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	.message {
		text-align: center;
		font-size: 1.5rem;
		line-height: 2rem;
		padding: 1rem;
	}
	* {
		flex-grow: 1;
	}
`

// markup
const NotFoundPage = () => {
	return (
		<Layout minimal>
			<Helmet>
				<title>Page not found</title>
			</Helmet>
			<Main>
				<Custom404Svg />
				<div className='message'>Oops! Can't find that page...</div>
			</Main>
		</Layout>
	)
}

export default NotFoundPage
