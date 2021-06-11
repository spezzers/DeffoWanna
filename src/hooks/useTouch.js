import { useState, useEffect, useCallback } from 'react'

const useTouch = props => {
	const [touches, setTouches] = useState([])
	const [activated, setActivated] = useState(false)
	const [hovering, setHovering] = useState(false)

	const deactivate = useCallback(() => {
		props?.deactivate ? props.deactivate() : console.log('deactivate')
		setActivated(false)
	}, [props])

	const hover = useCallback(() => {
		props?.hover ? props.hover() : console.log('hover')
		
	}, [props])

	useEffect(() => {
		if (!activated) {
			if (touches[0] === 'touchstart' && touches[1] === 'touchend') {
				deactivate()
			} else {
				hovering ? hover() : deactivate()
			}
		}
	}, [hovering, deactivate, activated, hover, touches])

	const activate = () => {
		props?.activate ? props.activate() : console.log('activate')
		setActivated(true)
	}

	const handleTouch = event => {
		const type = event.type
		switch (type) {
			case 'touchstart':
				setTouches([type])
				break
			case 'touchmove':
				if (touches[touches.length - 1] !== 'touchmove') {
					setTouches([...touches, type])
				}
				break
			case 'touchend':
				setTouches([...touches, type])
				break
			case 'touchcancel':
				setTouches([])
				break
			case 'click':
				activated ? deactivate() : activate()
				break
			case 'mouseleave':
				deactivate()
				setHovering(false)
				setTouches([])
				break
			case 'mouseenter':
				if (touches.length === 0) {
					setHovering(true)
				}
				break
			default:
				console.log(type)
				break
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
		attributes,
	}
}

export default useTouch
