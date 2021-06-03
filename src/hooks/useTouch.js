import React, { useState, useEffect } from 'react'

const useTouch = () => {
	const [touches, setTouches] = useState([])
	const [activated, setActivated] = useState(false)

	useEffect(() => {
		console.log(touches)
	}, [touches])

	const handleTouch = event => {
		const type = event.type
		if (type === 'touchstart') {
			setTouches([type])
		}
		if (type === 'touchmove' && touches[touches.length - 1] !== 'touchmove') {
			setTouches([...touches, type])
		}
		if ( type === 'touchend') {
			setTouches([...touches, type])
		}
	}

	const attributes = () => {
		return {
			onTouchStart: event => handleTouch(event),
			onTouchEnd: event => handleTouch(event),
			onTouchMove: event => handleTouch(event),
			onTouchCancel: event => handleTouch(event)
		}
	}
	return {
		touches,
		attributes,
		activated
	}
}

export default useTouch
