import React from 'react'
import styled from 'styled-components'
import Layout, { breakpoint, colGap, themeContextColor } from '../components/layout'
import Logo from '../components/Logo'

const StyledH1 = styled.h1`
	background-color: green;
	grid-column: 3;
	grid-row: 2;
`
const StyledLogo = styled(Logo)`
	grid-area: logo;
`
const StyledP = styled.p`
	${breakpoint.mobile} {
		grid-row: 4 / span 5;
		grid-column: 1 / -1;
		padding: 0 ${colGap};
	}
	${breakpoint.tablet} {
		grid-row: 4 / span 4;
		grid-column: 3 / 5;
	}
	${breakpoint.desktop} {
		grid-row: 4 / span 4;
		grid-column: 4 / 6;
	}
`
const Footer = styled.div`
	grid-row: -2 / -1;
	grid-column: 1 / -1;
	background-color: ${themeContextColor('purple')};
`

const Grid = props => {
	return (
		<Layout>
			<StyledLogo />
			<StyledH1>Grid</StyledH1>
			<StyledP>
				Crucifix master cleanse palo santo fashion axe la croix. Kogi portland
				tattooed vegan. Mlkshk sartorial roof party hell of shoreditch
				farm-to-table lumbersexual art party jean shorts air plant viral.
				Pour-over vinyl you probably haven't heard of them ugh venmo green juice
				authentic glossier williamsburg 90's cronut helvetica. Kinfolk taxidermy
				health goth gluten-free, selvage farm-to-table portland roof party wolf
				gastropub. Umami hella messenger bag small batch trust fund snackwave.
				Gluten-free brooklyn thundercats messenger bag.
			</StyledP>
			<Footer backgroundColor='purple' />
		</Layout>
	)
}

export default Grid
