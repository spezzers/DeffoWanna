import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledFlipCard = styled(animated.div)`
	--primary: ${props => props.theme.backgroundSecondary};
	--black: ${props => props.theme.black};
	perspective: 800px;
	transform-style: preserve-3d;
	height: ${props => props.height};
	width: ${props => props.width};
	filter: ${props =>
		`drop-shadow(0 10px 15px ${props.theme.black || '#000000'}25)`};
	:hover {
		cursor: pointer;
	}
	div {
		width: inherit;
		height: inherit;
		perspective: 800px;
		transform-style: preserve-3d;
		.card {
			perspective: 800px;
			transform-style: preserve-3d;
			width: inherit;
			height: inherit;
			transform-style: preserve-3d;
			height: inherit;
			width: inherit;
			.face {
				border-radius: 10px;
				height: inherit;
				width: inherit;
				background-color: var(--primary);
				position: absolute;
			}
			.face.back {
				backface-visibility: hidden;
				transform: rotateY(180deg) translateZ(0.1px);
			}
			.face.front {
				transform: rotateY(0deg) translateZ(0.1px);
			}
		}
	}
	* {
		pointer-events: none;
	}
`

const FlipCard = props => {
	const [styles, setStyles] = useSpring(() => ({
		rotateY: 0,
		rotateX: 0,
		scale: 1
	}))

	const maxRotation = 15
	const width = props.width || '200px'
	const height = props.height || '300px'

	let flipped = 0
	let x = 0
	let y = 0

	const flip = () => {
		flipped = flipped !== 0 ? 0 : -180
		setStyles.start({
			rotateY: x * maxRotation * -1 + flipped,
			rotateX: y * maxRotation * (flipped ? -1 : 1)
		})
	}

	const focus = event => {
		const
			yA = event.pageY,
			yB = event.target.offsetTop,
			yC = (yA - yB) / event.target.clientHeight

		y = (yC - 0.5) * 2

		const
			xA = event.pageX,
			xB = event.target.offsetLeft,
			xC = (xA - xB) / event.target.clientWidth

		x = (xC - 0.5) * 2

		setStyles.start({
			rotateY: x * maxRotation * -1 + flipped,
			rotateX: y * maxRotation * (flipped ? -1 : 1),
			scale: 1.07
		})
	}
	const blur = () => {
		setStyles.start({
			rotateY: 0 + flipped,
			rotateX: 0,
			scale: 1
		})
	}

	return (
		<StyledFlipCard
			width={width}
			height={height}
			onMouseMove={event => focus(event)}
			onMouseLeave={blur}
			onClick={flip}
		>
			<animated.div style={styles} className='card'>
				<div className='face front'>{props.front}</div>
				<div className='face back'>{props.back}</div>
			</animated.div>
		</StyledFlipCard>
	)
}

export default FlipCard
