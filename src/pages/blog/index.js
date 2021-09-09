import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { lineHeight } from '../../styles/sizes'

import styled from 'styled-components'

const BlogList = styled.div`
	grid-area: main;
`
const BlogEntry = styled(Link)`
	display: list-item;
	color: inherit;
	text-decoration: none;
	list-style: none;
	margin: calc(${lineHeight} / 2);
`

const BlogIndex = ({ data }) => {
	const blogs = data.allMarkdownRemark.nodes
	return (
		<Layout>
			<BlogList>
				{blogs.map(blog => (
					<BlogEntry to={blog.frontmatter.slug} key={blog.frontmatter.slug}>
						{blog.frontmatter.title}
					</BlogEntry>
				))}
			</BlogList>
		</Layout>
	)
}

export default BlogIndex

export const query = graphql`
	{
		allMarkdownRemark {
			nodes {
				frontmatter {
					date
					title
					slug
				}
			}
		}
	}
`
