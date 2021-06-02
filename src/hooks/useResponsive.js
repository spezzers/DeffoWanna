import {useEffect, useState} from 'react'

const useResponsive = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth || 1200,
		height: window.innerHeight || 800
	})

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		})
	}, [])
	return {
		windowSize
	}
}

export default useResponsive