import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledFlipCard = styled(animated.div)`
	--primary: ${props => props.theme.blueBg};
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
	.card {
		perspective: 800px;
		transform-style: preserve-3d;
		width: inherit;
		height: inherit;
		.faces {
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
	const [styles, api] = useSpring(() => ({
		rotateY: 0,
		rotateX: 0,
		scale: 1,
		filter: 'brightness(1)'
	}))

	const maxRotation = 15
	const width = props.width || '200px'
	const height = props.height || '300px'
	const brighten = {
		active: 1.04,
		tilt: 0.08
	}

	let flipped = 0
	let x = 0
	let y = 0

	const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

	const flip = () => {
		flipped = flipped !== 0 ? 0 : -180
		api.start({
			rotateY: x * maxRotation * -1 + flipped,
			rotateX: y * maxRotation * (flipped ? -1 : 1)
		})
	}

	const focus = event => {
		y =
			((event.pageY - event.target.offsetTop) / event.target.clientHeight -
				0.5) *
			2

		x =
			((event.pageX - event.target.offsetLeft) / event.target.clientWidth -
				0.5) *
			2

		api.start({
			rotateY: x * maxRotation * -1 + flipped,
			rotateX: y * maxRotation * (flipped ? -1 : 1),
			scale: 1.07,
			filter: `brightness(${
				brighten.active + clamp((y - x) / 2, -1, 1) * brighten.tilt
			})`
		})
	}
	const blur = () => {
		api.start({
			rotateY: 0 + flipped,
			rotateX: 0,
			scale: 1,
			filter: 'brightness(1)'
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
				<div className='faces'>
					<div className='face front'>{props.front}</div>
					<div className='face back'>{props.back}</div>
				</div>
			</animated.div>
		</StyledFlipCard>
	)
}

export default FlipCard
