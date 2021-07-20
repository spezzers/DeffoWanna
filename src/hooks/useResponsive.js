import { useEffect, useState } from 'react'

const useResponsive = () => {
	const [windowSize, setWindowSize] = useState({
		width: 1200,
		height: 800,
		default: true
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (windowSize.default) {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
					default: false
				})
			}
			window.addEventListener('resize', () => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
					default: false
				})
			})
		}
	}, [windowSize.default])
	return {
		windowSize
	}
}

export default useResponsive
