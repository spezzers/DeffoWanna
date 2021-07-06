import React from 'react'
import styled from 'styled-components'

const StyledDeck = styled.div`
	--width: ${props => props.width || '80px'};
	--height: ${props => props.height || '320px'};
	--radius: calc(var(--width) / 2);
	--lat-flip: ${props => (props.latFlip ? `${props.latFlip}deg` : '0deg')};
	--long-flip: ${props => (props.longFlip ? `${props.longFlip}deg` : '0deg')};
	--spin: ${props => (props.spin ? `${props.spin}deg` : '0deg')};
	--rotate-x: ${props => (props.rotateX ? `${props.rotateX}deg` : '0deg')};
	--rotate-y: ${props => (props.rotateY ? `${props.rotateY}deg` : '0deg')};
	transform-style: preserve-3d;
	transform: rotateX(var(--rotate-x)) rotateZ(var(--rotate-y));
	* {
		transform-style: preserve-3d;
	}
	.deck {
		width: var(--width);
		height: var(--height);
		border-radius: calc(var(--width) / 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.flip {
		transform: rotateX(var(--long-flip)) rotateY(var(--lat-flip)) ;
	}
	.spin {
		transform: rotateZ(var(--spin));
	}
	.mid {
		flex-grow: 1;
	}
	.nose,
	.tail,
	.mid {
		width: var(--width);
		background-color: blue;
	}

	.nose,
	.tail {
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

const Skateboard = props => {
	return (
		<StyledDeck {...props}>
			<div className='spin'>
				<div className='flip'>
					<div className='deck'>
						<div className='nose'></div>
						<div className='mid'></div>
						<div className='tail'></div>
					</div>
				</div>
			</div>
		</StyledDeck>
	)
}

export default Skateboard
