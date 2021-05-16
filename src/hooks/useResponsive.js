import {useEffect, useState} from 'react'

const useResponsive = () => {
	const [windowSize, setWindowSize] = useState({
		width: 1200,
		height: 800
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