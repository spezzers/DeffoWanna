import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { breakpoint } from '../styles/sizes'
import { Helmet } from 'react-helmet'

const GridTitle = styled.h1`
	:before {
		${breakpoint.mobile} {
			content: 'Mobile Grid';
		}
		${breakpoint.tablet} {
			content: 'Tablet Grid';
		}
		${breakpoint.desktop} {
			content: 'Desktop Grid';
		}
	}
`

const Main = styled.div`
	grid-area: main;
`

const Grid = props => {
	return (
		<Layout>
			<Helmet>
				<title>Grid Test</title>
			</Helmet>
			<Main>
				<GridTitle />
				<p>
					Crucifix master cleanse palo santo fashion axe la croix. Kogi portland
					tattooed vegan.
				</p>
				<p>
					Mlkshk sartorial roof party hell of shoreditch farm-to-table
					lumbersexual art party jean shorts air plant viral. Pour-over vinyl
					you probably haven't heard of them ugh venmo green juice authentic
					glossier williamsburg 90's cronut helvetica.
				</p>
				<h2>This is a Long-ish H2 Type of Heading</h2>
				<p>
					Kinfolk taxidermy health goth gluten-free, selvage farm-to-table
					portland roof party wolf gastropub. Umami hella messenger bag small
					batch trust fund snackwave. Gluten-free brooklyn thundercats messenger
					bag.
				</p>
				<h3>And This One Is a Slightly Longer H3 Heading</h3>
				<p>
					Cornhole chambray actually lyft cardigan before they sold out. Cloud
					bread forage wayfarers lomo, microdosing tbh hammock post-ironic fixie
					bitters adaptogen deep v before they sold out banh mi.
				</p>
				<h4>Ok, Time For a H4 Heading</h4>
				<p>
					8-bit sartorial lyft actually microdosing bushwick. Sustainable
					flexitarian VHS umami cold-pressed woke pok pok +1. Sriracha beard
					squid you probably haven't heard of them, cornhole flannel heirloom
					ethical.
				</p>

				<h5>Now We’re Going For a H5</h5>
				<p>
					Selvage readymade beard sustainable. Flannel etsy echo park cronut
					pickled man bun. Kinfolk blog iPhone, kickstarter chambray kitsch
					sustainable yuccie la croix af humblebrag tbh.
				</p>

				<h6>Last and Probably Least, a H6 Heading</h6>
				<p>
					Shoreditch bespoke hella jianbing, fixie chillwave tacos offal
					asymmetrical sustainable swag. Actually mixtape lomo, snackwave
					try-hard activated charcoal hoodie raclette 3 wolf moon. XOXO pork
					belly leggings blog af activated charcoal. Post-ironic tilde
					asymmetrical mixtape pabst. Mustache fingerstache flexitarian, banh mi
					food truck roof party salvia.
				</p>
			</Main>
		</Layout>
	)
}

export default Grid
