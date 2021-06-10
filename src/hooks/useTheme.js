import React, {useState} from 'react'
import themes from '../styles/themes'
import ToggleThemeButton from '../components/ToggleThemeButton'



const useTheme = () => {
	const themePrefs = typeof window !== 'undefined' ? window.localStorage.getItem('theme') || 'light' : 'light'
	const [current, setCurrent] = useState(
		themes[themePrefs]
	)
	const toggleTheme = () => {
		const newTheme = current.name === 'dark' ? themes.light : themes.dark
		window.localStorage.setItem('theme', newTheme.name)
		setCurrent(newTheme)
	}
	const toggleButton = <ToggleThemeButton onClick={toggleTheme} />


	return {
		current,
		toggleButton
	}
}

export default useTheme