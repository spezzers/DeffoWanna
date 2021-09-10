import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import { lineHeight, smallRow } from '../styles/sizes'

const BlogPost = styled.div`
		grid-area: main;
		grid-row: 2;
		img {
			max-width: 100%;
		}
`

const HeroImg = styled(GatsbyImage)`
	grid-column: 1 / -1;
	grid-row: 1;
	position: relative;
	z-index: -1;
	width: 100%;
	max-height: calc(100vh - ${smallRow});
	margin-top: -${lineHeight};
`

const Template = ({
	data // this prop will be injected by the GraphQL query below.
}) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	const heroImage = getImage(frontmatter.hero?.childImageSharp?.gatsbyImageData)
	const hero = heroImage ? (
		<HeroImg image={heroImage} alt={frontmatter.alt || `hero image: ${frontmatter.title}`}/>
	) : null
	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title} - Deffo Wanna Blog</title>
			</Helmet>
			{hero}
			<BlogPost>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div
					className='blog-post-content'
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</BlogPost>
		</Layout>
	)
}
export const pageQuery = graphql`
	query($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				alt
				hero {
					childImageSharp { gatsbyImageData }
				}
			}
		}
	}
`
export default Template
