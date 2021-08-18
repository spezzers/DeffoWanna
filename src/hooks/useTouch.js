import { useState, useEffect, useCallback } from 'react'
import { devLogger } from '../helpers/loggers'

const useTouch = props => {
	const [touches, setTouches] = useState([])
	const [activated, setActivated] = useState(false)
	const [hovering, setHovering] = useState(false)

	const deactivate = useCallback(() => {
		props?.deactivate ? props.deactivate() : devLogger('deactivate')
		setActivated(false)
	}, [props])

	const hoverInactive = useCallback(() => {
		props?.hoverInactive
			? props.hoverInactive()
			: devLogger('hover unactivated element')
	}, [props])

	useEffect(() => {
		if (!activated) {
			if (touches[0] === 'touchstart' && touches[1] === 'touchend') {
				return deactivate()
			} else {
				return hovering ? hoverInactive() : deactivate()
			}
		}
	}, [hovering, deactivate, activated, hoverInactive, touches])

	const activate = e => {
		props?.activate
			? props.activate({ x: e.clientX, y: e.clientY })
			: devLogger('activate')
		setActivated(true)
	}

	const handleTouch = e => {
		const type = e.type
		devLogger(type, touches)
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
			case 'keydown':
				if (e.key !== 'Enter') {
					break
				}
				e.preventDefault()
				activated ? deactivate() : activate(e)
				break
			case 'click':
				e.preventDefault()
				activated ? deactivate() : activate(e)
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
			case 'focus':
				setHovering(true)
				break
			case 'blur':
				setHovering(false)
				break
			default:
				devLogger(type)
				break
		}
	}

	const hoverMouseMove = () => {
		if (hovering) {
			return {
				onMouseMove: e => {
					if (props.hoverMouseMove !== undefined) {
						return props.hoverMouseMove({ x: e.clientX, y: e.clientY })
					}
				}
			}
		}
	}

	const attributes = () => {
		return {
			...hoverMouseMove(),
			onTouchStart: event => handleTouch(event),
			onTouchEnd: event => handleTouch(event),
			onTouchMove: event => handleTouch(event),
			onTouchCancel: event => handleTouch(event),
			onClick: event => handleTouch(event),
			onMouseEnter: event => handleTouch(event),
			onMouseLeave: event => handleTouch(event),
			onKeyDown: event => handleTouch(event),
			onFocus: event => handleTouch(event),
			onBlur: event => handleTouch(event)
		}
	}
	return {
		attributes,
		activated,
		hovering
	}
}

export default useTouch
