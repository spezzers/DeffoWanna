import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledFlipCard = styled(animated.div)`
	--primary: ${props => props.theme.blueBg};
	perspective: 800px;
	transform-style: preserve-3d;
	height: ${props => props.height || '300px'};
	width: ${props => props.width || '200px'};
	:hover {
		cursor: pointer;
	}
	.card {
		transform-style: preserve-3d;
		height: inherit;
		width: inherit;
		.face {
			box-sizing: border-box;
			border-radius: 10px;
			height: inherit;
			width: inherit;
			background-color: var(--primary);
			position: absolute;
		}
		.face.back {
			transform: rotateY(180deg) translateZ(0.1px);
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
		scale: 1
	}))

	const focus = event => {
		const maxRotation = 15
		const y =
			((event.pageY - event.target.offsetTop) / event.target.clientHeight -
				0.5) *
			2
		const x =
			((event.pageX - event.target.offsetLeft) / event.target.clientWidth -
				0.5) *
			2
		api.start({
			rotateY: x * maxRotation * -1,
			rotateX: y * maxRotation,
			scale: 1.07
		})
	}
	const blur = () => {
		api.start({
			rotateY: 0,
			rotateX: 0,
			scale: 1
		})
	}

	return (
		<StyledFlipCard
			onMouseMove={event => focus(event)}
			onMouseLeave={blur}
		>
			<animated.div style={styles} className='card'>
				<div className='face front'>{props.front}</div>
				<div className='face back'>{props.back}</div>
			</animated.div>
		</StyledFlipCard>
	)
}

export default FlipCard
