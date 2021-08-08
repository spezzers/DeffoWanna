import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Logo from '../components/Logo'

const StyledH1 = styled.h1`

	background-color: green;
	grid-column: main-start / 6;
	grid-row: 2;
	:before {
		vertical-align: baseline;
		content: '';
		display: inline-block;
		height: 48px;
	}
`
const StyledLogo = styled(Logo)`
	grid-column: 2 / 4;
`
const StyledP = styled.p`
	grid-row: 4 / auto;
	grid-column: 3 / 6;
	
`



const Grid = props => {
	// code here
	return (
		<Layout>
				<StyledLogo/>
				<StyledH1>Grid</StyledH1>
				<StyledP>Crucifix master cleanse palo santo fashion axe la croix. Kogi portland tattooed vegan. Mlkshk sartorial roof party hell of shoreditch farm-to-table lumbersexual art party jean shorts air plant viral. Pour-over vinyl you probably haven't heard of them ugh venmo green juice authentic glossier williamsburg 90's cronut helvetica. Kinfolk taxidermy health goth gluten-free, selvage farm-to-table portland roof party wolf gastropub. Umami hella messenger bag small batch trust fund snackwave. Gluten-free brooklyn thundercats messenger bag.</StyledP>
		</Layout>
	)
}

export default Grid
