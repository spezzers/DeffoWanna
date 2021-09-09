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
			: `${props.width / (8 / 0.5)}px`
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
			overflow: hidden;
			background-color: var(--background-color);
			flex-shrink: 0;
			display: flex;
			img {
				height: var(--length);
			}
		}
		.nose {
			align-items: flex-start;
			justify-content: center;
		}
		.mid {
			align-items: center;
			justify-content: center;
		}
		.tail {
			align-items: flex-end;
			justify-content: center;
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
		flex-shrink: 0;
		flex-grow: 0;
	}

	.nose,
	.tail {
		height: calc(var(--width) * 0.75);
	}

	.nose {
		border-radius: var(--radius) var(--radius) 0 0;
		transform-origin: bottom;
		transform: rotateX(15deg);
	}
	.mid {
		height: calc(var(--length) - (1.5 * var(--width)));
	}
	.tail {
		transform-origin: top;
		transform: rotateX(-15deg);
		border-radius: 0 0 var(--radius) var(--radius);
	}
`

const Skateboard = props => {
	const alt = props.alt ? `${props.alt} - ` : ''
	const graphic = section => {
		if (props.src) {
			return (
				<img
					alt={`${alt}skateboard deck design, ${section} section graphic`}
					srcSet={props.srcSet}
					src={props.src}
				/>
			)
		}
		return null
	}

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
								<div className='nose'>{graphic('nose')}</div>
								<div className='mid'>{graphic('middle')}</div>
								<div className='tail'>{graphic('tail')}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledDeck>
	)
}

export default Skateboard
