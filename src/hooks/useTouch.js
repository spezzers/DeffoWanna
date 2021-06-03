import { useState, useEffect } from 'react'

const useTouch = attr => {
	const [touches, setTouches] = useState([])
	const [activated, setActivated] = useState(false)
	const tap = () => (attr?.onTap ? attr.onTap() : console.log('tapped'))
	const drag = () => (attr?.onDrag ? attr.onDrag() : console.log('dragged'))
	
	
	useEffect(() => {
		console.log('touches', touches, 'activated', activated)
		if (touches.length > 0) {
			if (touches.includes('touchend')) {
				if (touches.includes('touchmove')) {
					drag()
				}
				setTouches([])
			}
		}
	}, [touches])


	const handleTouch = event => {
		const type = event.type
		console.log(type)
		if (type === 'touchstart') {
			setTouches([type])
		}
		if (type === 'touchmove' && touches[touches.length - 1] !== 'touchmove') {
			setTouches([...touches, type])
		}
		if (type === 'touchend') {
			setTouches([...touches, type])
		}
		if (type === 'touchcancel') {
			setTouches([])
		}
		if (type === 'click') {
			event.preventDefault()
			console.log(touches)
			tap()
			setActivated(!activated)
		}
	}

	const attributes = () => {
		return {
			onTouchStart: event => handleTouch(event),
			onTouchEnd: event => handleTouch(event),
			onTouchMove: event => handleTouch(event),
			onTouchCancel: event => handleTouch(event),
			onClick: event => handleTouch(event),
			onMouseEnter: event => handleTouch(event),
			onMouseLeave: event => handleTouch(event)
		}
	}
	return {
		touches,
		attributes,
		activated
	}
}

export default useTouch
