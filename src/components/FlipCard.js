import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledFlipCard = styled(animated.div)`
	--primary: ${props => props.theme.blue};
	perspective: 800px;
	transform-style: preserve-3d;
	width: 200px;
	height: 300px;
	.card {
		padding: 10px;
		box-sizing: border-box;
		border-radius: 10px;
		background-color: var(--primary);
		width: 200px;
		height: 300px;
		
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
				<div className='Front'>{props.front}</div>
				<div className='Back'>{props.back}</div>
			</animated.div>
		</StyledFlipCard>
	)
}

export default FlipCard
