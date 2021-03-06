import React from 'react'
import styled from 'styled-components'

const StyledDeck = styled.div.attrs(props => {
	let size = {
		length: '320px',
		width: '80px',
		thickness: '5px'
	}
	if (props.length) {
		size.length = `${props.length}px`
		size.width = props.width
			? `${props.width}px`
			: `${props.length / (32 / 8)}px`
		size.thickness = props.thickness
			? `${props.thickness}px`
			: `${props.length / (32 / 0.5)}px`
	} else if (props.width) {
		size.width = `${props.width}px`
		size.length = `${props.width * (32 / 8)}px`
		size.thickness = props.thickness
			? props.thickness
			: `${props.width / (8 / 0.5)}`
	} else if (props.thickness) {
		size.thickness = props.thickness
	}
	return size
})`
	--length: ${props => props.length};
	--width: ${props => props.width};
	--thickness: ${props => props.thickness};
	--radius: calc(var(--width) / 2);
	--lat-flip: ${props => (props.latFlip ? `${props.latFlip}deg` : '0deg')};
	--long-flip: ${props => (props.longFlip ? `${props.longFlip}deg` : '0deg')};
	--spin: ${props => (props.spin ? `${props.spin}deg` : '0deg')};
	--rotate-x: ${props => (props.rotateX ? `${props.rotateX}deg` : '0deg')};
	--rotate-y: ${props => (props.rotateY ? `${props.rotateY}deg` : '0deg')};
	--background-color: ${props => props.backgroundColor || 'white'};
	--src: ${props => `url(${props.src})` || null};
	--board-color: ${props => props.boardColor || 'BurlyWood'};
	--grip-color: ${props => props.gripColor || 'black'};
	transform-style: preserve-3d;
	perspective: calc(2.5 * var(--length));
	perspective-origin: center;

	.orientation {
		transform: rotateX(var(--rotate-x)) rotateZ(var(--rotate-y));
	}

	* {
		transform-style: preserve-3d;
	}
	.deck,
	.graphic,
	.griptape,
	.board {
		width: var(--width);
		height: var(--length);
	}
	.griptape,
	.graphic,
	.board {
		border-radius: calc(var(--width) / 2);
		flex-direction: column;
		justify-content: center;
		display: flex;
		position: absolute;
		transform-style: preserve-3d;
	}
	.griptape {
		transform: translateZ(calc(var(--thickness) / -2));
		.mid,
		.nose,
		.tail {
			background-color: var(--grip-color);
		}
	}

	.board {
		.mid,
		.nose,
		.tail {
			background-color: var(--board-color);
		}
	}
	.board.top {
		transform: translateZ(calc(var(--thickness) / -2.1));
	}
	.board.bottom {
		transform: translateZ(calc(var(--thickness) / 2.1));
	}
	.graphic {
		transform: translateZ(calc(var(--thickness) / 2));
		.nose,
		.tail,
		.mid {
			background-color: var(--background-color);
		}
		.nose {
			background-image: var(--src);
			background-position: center top;
			background-size: auto var(--length);
		}
		.mid {
			background-image: var(--src);
			background-position: center;
			background-size: auto var(--length);
		}
		.tail {
			background-image: var(--src);
			background-position: center bottom;
			background-size: auto var(--length);
		}
	}
	.flip {
		transform: rotateX(var(--long-flip)) rotateY(var(--lat-flip));
	}
	.spin {
		transform: rotateZ(var(--spin));
	}

	.nose,
	.tail,
	.mid {
		width: var(--width);
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
	.mid {
		flex-grow: 1;
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
			<div className='orientation'>
				<div className='spin'>
					<div className='flip'>
						<div className='deck'>
							<div className='griptape'>
								<div className='nose'></div>
								<div className='mid'></div>
								<div className='tail'></div>
							</div>
							<div className='board top'>
								<div className='nose'></div>
								<div className='mid'></div>
								<div className='tail'></div>
							</div>
							<div className='board'>
								<div className='nose'></div>
								<div className='mid'></div>
								<div className='tail'></div>
							</div>
							<div className='board bottom'>
								<div className='nose'></div>
								<div className='mid'></div>
								<div className='tail'></div>
							</div>
							<div className='graphic'>
								<div className='nose'></div>
								<div className='mid'></div>
								<div className='tail'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledDeck>
	)
}

export default Skateboard
