import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout, { Section } from '../../components/layout'
import { colGap, lineHeight } from '../../styles/sizes'
import Img from 'gatsby-image'

import styled from 'styled-components'

const BlogList = styled.div`
	grid-area: main;
`

const BlogEntry = styled(Link)`
	display: list-item;
	color: inherit;
	background-color: ${props => props.theme.backgroundSecondary};
	text-decoration: none;
	list-style: none;
	margin: calc(${lineHeight} / 2);
	padding: calc(${lineHeight} / 2) calc(${colGap} / 2);
	border-radius: 0.3rem;
	transition: 0.2s;
	:focus-within,
	:hover {
		transform: scale(1.025);
		box-shadow: 0 0 1rem ${props => props.theme.black}11;
		background-color: ${props => props.theme.purpleBg};
		:not(.blog-post-title) {
			color: ${props => props.theme.purpleTextStrong};
			text-decoration: none;
		}
	}

	.blog-post-title {
		font-size: 1rem;
		line-height: calc(${lineHeight});
	}
	.date {
		color: ${props => props.theme.textStrong};
		font-size: 0.85rem;
		font-weight: 200;
	}
`

const BlogItem = ({ title, date, slug, hero, className }) => (
	<BlogEntry to={slug} classNmae={`dave ${className}`}>
		{hero ? <Img fluid={hero} alt={title} className='dave' /> : null}
		<div className='blog-post-title'>{title}</div>
		<div className='date'>{date}</div>
	</BlogEntry>
)

const BlogIndex = ({ data }) => {
	const blogs = data.allMarkdownRemark.nodes
	return (
		<Layout>
			<Section bgColor='background'>
				<BlogList>
					{blogs.map(blog => (
						<BlogItem
							slug={blog.frontmatter.slug}
							key={blog.frontmatter.slug}
							title={blog.frontmatter.title}
							date={blog.frontmatter.date}
							hero={blog.frontmatter.hero?.childImageSharp.fixed || null}
						/>
					))}
				</BlogList>
			</Section>
		</Layout>
	)
}

export default BlogIndex

export const query = graphql`
	{
		allMarkdownRemark {
			nodes {
				frontmatter {
					date(formatString: "YYYY-MM-DD")
					title
					slug
					hero {
						childImageSharp {
							fixed {
								base64
								aspectRatio
								srcWebp
								srcSetWebp
								originalName
							}
						}
					}
				}
			}
		}
	}
`
