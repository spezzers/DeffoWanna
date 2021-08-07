import React from 'react'
import styled from 'styled-components'
import Layout, {lineHeight} from '../components/layout'
import Logo from '../components/Logo'

const StyledGrid = styled.div`
	--row-gap: ${lineHeight};
	--col-gap: calc((var(--row-gap) / 5) * 8);
	--xs-col: calc(var(--col-gap) * 2);
	--s-col: calc(var(--col-gap) * 3);
	--col: calc(var(--col-gap) * 4);
	display: grid;
	place-items: center;
	width: 100%;
	margin: 0 auto 0;
	~ * {
		border: 1px solid red;
	}
	column-gap: var(--col-gap);
	row-gap: var(--row-gap);
	grid-template-columns: var(--s-col) var(
			--xs-col
		) [logo-start] var(--col-gap) var(--col-gap) [logo-end] var(--xs-col) var(--s-col) repeat(auto-fill, var(--col));
	h1 {
		background-color: green;
		grid-column-start: 2;
	}
	.item-2 {
		grid-column-start: 4;
	}
	#logo {
		grid-column-start: logo-start;
		grid-column-end: logo-end;
		overflow: hidden;
	}
`

const Grid = props => {
	// code here
	return (
		<Layout>
			<StyledGrid>
				<Logo />
				<h1>Grid</h1>
				<div className='item-2'>Grid</div>
			</StyledGrid>
		</Layout>
	)
}

export default Grid
