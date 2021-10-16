import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { lineHeight, smallRow } from '../styles/sizes'
import { themeContextColor } from '../styles/themes'

const BlogPost = styled.article`
	grid-column: main-start / main-end;
	grid-row: ${props => console.log(props.rowStart)};
	img {
		max-width: 100%;
	}
`
const Footnotes = styled.section`
	grid-row: ${props => props.rowStart};
	grid-column: main-start / main-end;
	font-weight: 200;
	font-size: 1rem;
	color: ${themeContextColor('textStrong')};
	border-top: 1px solid ${themeContextColor('text')};
`

const HeroImg = styled(GatsbyImage)`
	grid-column: 1 / -1;
	grid-row: 1;
	position: relative;
	z-index: 0;
	width: 100%;
	height: 100vh;
	max-height: calc(100vh - ${smallRow});
`

const Template = ({ data }) => {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	const heroImage = getImage(frontmatter.hero?.childImageSharp?.gatsbyImageData)
	console.log(heroImage)
	const hero = heroImage ? (
		<HeroImg
			image={heroImage}
			alt={frontmatter.alt || `hero image: ${frontmatter.title}`}
		/>
	) : null

	if (html.includes('<div class="footnotes">')) {
		const splitHtml = html.split('<div class="footnotes">')
		let splitFootnotes = splitHtml[1].split('\n')
		const footnotes = splitFootnotes.slice(2, -1).join('')
		splitFootnotes.pop()
		return (
			<Layout>
				<Helmet>
					<title>{frontmatter.title} - Deffo Wanna Blog</title>
				</Helmet>
				{hero}
				<BlogPost
					rowStart={hero ? 2 : 1}
					className='blog-post-content'
					dangerouslySetInnerHTML={{
						__html: `<h1>${frontmatter.title}</h1><h2>${frontmatter.date}</h2>${splitHtml[0]}`
					}}
				/>
				<Footnotes
					rowStart={hero ? 3 : 2}
					className='footnotes'
					dangerouslySetInnerHTML={{
						__html: `<h6>Footnotes</h6>${footnotes}`
					}}
				/>
			</Layout>
		)
	}

	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title} - Deffo Wanna Blog</title>
			</Helmet>
			{hero}
			<BlogPost
				rowStart={hero ? 2 : 1}
				className='blog-post-content'
				dangerouslySetInnerHTML={{
					__html: `<h1>${frontmatter.title}</h1><h2>${frontmatter.date}</h2>${html}`
				}}
			/>
		</Layout>
	)
}
export const pageQuery = graphql`
	query($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			htmlAst
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				alt
				hero {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH)
					}
				}
			}
		}
	}
`
export default Template
