import React from 'react'
import styled from 'styled-components'


const StyledDeck = styled.div`
	--width: ${props => props.width || '80px'};
	--height: ${props => props.height || '320px'};
	--radius: calc(var(--width) / 2);
	transform-style: preserve-3d;
	background-color: ${props => props.color || 'red'};
	width: var(--width);
	height: var(--height);
	border-radius: calc(var(--width) / 2);
	transform: rotateY(30deg) rotateX(-5deg);
	.nose, .tail {
		width: var(--width);
		height: calc(var(--width) * 0.75);
		border-radius: var(--radius) var(--radius) 0 0;
		background-color: blue;
	}
	.tail {
		transform: rotate(180deg);
	}
`

const Skateboard = (props) => {
	return(
		<StyledDeck {...props}>
			<div className='nose'></div>
			<div className='mid'></div>
			<div className='tail'></div>
		</StyledDeck>
	)
}

export default Skateboard