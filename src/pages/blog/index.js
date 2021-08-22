import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout, {fontSize, lineHeight} from '../../components/layout'
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
	// code here
	return (
		<Layout>
			<BlogList>
				{data.allMarkdownRemark.nodes.map(blog => (
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
					title
					slug
					date
				}
			}
		}
	}
`
