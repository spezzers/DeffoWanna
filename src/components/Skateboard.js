import React from 'react'
import styled from 'styled-components'


const StyledDeck = styled.div`
	--width: ${props => props.width || '80px'};
	--height: ${props => props.height || '320px'};
	--radius: calc(var(--width) / 2);
	--rotate: ${props => props.rotateX ? `${props.rotateX}deg` : '0deg'};
	transform-style: preserve-3d;
	width: var(--width);
	height: var(--height);
	border-radius: calc(var(--width) / 2);
	transform: rotateY(var(--rotate));
	display: flex;
	flex-direction: column;
	justify-content: center;
	.mid {
		flex-grow: 1;
	}
	.nose, .tail, .mid {
		width: var(--width);
		background-color: blue;
	}

	.nose, .tail {
		height: calc(var(--width) * 0.75);
		border-radius: var(--radius) var(--radius) 0 0;
	}
	.nose {
		transform-origin: bottom;
		transform: rotateX(15deg);

	}
	.tail {
		transform-origin: top;
		transform: rotateX(-15deg);
		border-radius: 0 0 var(--radius) var(--radius);
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