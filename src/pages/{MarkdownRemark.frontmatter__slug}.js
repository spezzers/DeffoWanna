import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

const BlogPost = styled.div`
	grid-area: main;
`

const Template = ({
	data // this prop will be injected by the GraphQL query below.
}) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	const heroImage = frontmatter.hero?.childImageSharp?.fluid
	const hero = heroImage ? <Img fluid={heroImage} /> : null
	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title} - Deffo Wanna Blog</title>
			</Helmet>
			<BlogPost>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				{hero}
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
				hero {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
export default Template
