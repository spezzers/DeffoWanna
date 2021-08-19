import React from 'react'
import { graphql, Link } from 'gatsby'

const BlogIndex = ({data}) => {
	// code here
	return <div>{data.allMarkdownRemark.nodes.map((blog) => <Link to={blog.frontmatter.slug} key={blog.frontmatter.slug}>{blog.frontmatter.title}</Link>)}</div>
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