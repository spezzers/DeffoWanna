import * as React from 'react'
import { Link } from 'gatsby'
import Custom404Svg from '../components/Custom404Svg'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	.message {
		@media (orientation: portrait) {
			text-align: center;
		}
		@media (orientation: landscape) {
			text-align: left;
		}
		font-size: 1.5rem;
		line-height: 2rem;
	}
`

// markup
const NotFoundPage = () => {
	return (
		<Layout minimal>
			<Helmet>
				<title>Page not found</title>
			</Helmet>
			<Custom404Svg />
			<Main>
				<div className='message'>Oops! Can't find that page...</div>
			</Main>
		</Layout>
	)
}

export default NotFoundPage
