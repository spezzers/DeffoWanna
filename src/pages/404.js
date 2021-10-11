import * as React from 'react'
import Custom404Svg from '../components/Custom404Svg'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Button from '../components/Button'
import { navigate } from 'gatsby-link'

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
	const goHome = () => navigate('/')
	return (
		<Layout minimal>
			<Helmet>
				<title>Page not found</title>
			</Helmet>
			<Main>
				<Custom404Svg />
				<div className='message'>Oops! Can't find that page... (sorry!)</div>
				<Button onClick={goHome} color='teal'>Take me home</Button>
				<Button variant='secondary' color='teal' onClick={goHome}>start over</Button>
			</Main>
		</Layout>
	)
}

export default NotFoundPage
