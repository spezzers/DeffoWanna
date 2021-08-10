import React from 'react'
import styled from 'styled-components'
import Layout, { breakpoint } from '../components/layout'
import Logo from '../components/Logo'


const StyledH1 = styled.h1`
	grid-row: 2 / span 2;
	margin: 0;
	${breakpoint.mobile} {
		grid-column: 1 / span 3;
		:before {
			content: 'Mobile\ ';
		}
	}
	${breakpoint.tablet} {
		grid-column: 2 / span 3;
		:before {
			content: 'Tablet\ ';
		}
	}
	${breakpoint.desktop} {
		grid-column: 3 / span 3;
		:before {
			content: 'Desktop\ ';
		}
	}
`
const StyledLogo = styled(Logo)`
	grid-area: logo;
`
const StyledP = styled.p`
	${breakpoint.mobile} {
		grid-row: 4 / span 5;
		grid-column: 1 / -1;
	}
	${breakpoint.tablet} {
		grid-row: 4 / span 4;
		grid-column: 3 / span 3;
	}
	${breakpoint.desktop} {
		grid-row: 4 / span 4;
		grid-column: 4 / span 4;
	}
`

const Grid = props => {
	return (
		<Layout>
			<StyledLogo size='4' />
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
		</Layout>
	)
}

export default Grid
