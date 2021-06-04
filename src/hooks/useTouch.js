import { useState, useEffect, useCallback } from 'react'

const useTouch = props => {
	const [touches, setTouches] = useState([])
	const [activated, setActivated] = useState(false)
	const [hovering, setHovering] = useState(false)

	const deactivate = useCallback(() => {
		if (props?.deactivate) {
			props.deactivate()
		} else {
			console.log('deactivate')
		}
		setActivated(false)
	}, [props])

	const hover = useCallback(() => {
		if (props?.hover) {
			props.hover()
		} else {
			console.log('hover')
		}
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
		if (props?.activate) {
			props.activate()
		} else {
			console.log('activate')
		}
		setActivated(true)
	}

	const handleTouch = event => {
		const type = event.type

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
			activated ? deactivate() : activate()
		}
		if (type === 'mouseleave') {
			deactivate()
			setTouches([])
			setHovering(false)
		}
		if (type === 'mouseenter') {
			setHovering(true)
			hover()
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
