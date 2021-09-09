import { useState, useEffect, useCallback } from 'react'
import themes from '../styles/themes'


const useTheme = () => {
	const [current, setCurrent] = useState(null)

	const systemPrefersDarkTheme =
		typeof window !== 'undefined'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: null

	const setThemeAgent = useCallback(
		themeName => {
			if (themeName) {
				if (
					(themeName === 'dark' && systemPrefersDarkTheme === true) ||
					(themeName === 'light' && systemPrefersDarkTheme === false)
				) {
					return 'system'
				}
				return 'user'
			}
		},
		[systemPrefersDarkTheme]
	)

	const storageAvailable = useCallback(() => {
		if (typeof window !== 'undefined') {
			try {
				window.localStorage.setItem('storageAvailable', 'yes')
				window.localStorage.removeItem('storageAvailable')
				return true
			} catch (e) {
				return false
			}
		}
		return false
	}, [])

	const setStorage = useCallback(
		(key, value) => {
			if (storageAvailable()) {
				window.localStorage.setItem(key, value)
			}
		},
		[storageAvailable]
	)

	useEffect(() => {

		if (!current) {
			if (storageAvailable()) {
				const getLocalPrefs = window.localStorage.getItem('theme')
				let localPrefs = getLocalPrefs ? getLocalPrefs.split(',') : null

				if (
					localPrefs !== null &&
					!(
						['light', 'dark'].includes(localPrefs[0]) &&
						['user', 'system', 'default'].includes(localPrefs[1])
					)
				) {
					window.localStorage.removeItem('theme')
				}

				if (localPrefs !== null && systemPrefersDarkTheme !== null) {
					const systemThemeName = systemPrefersDarkTheme ? 'dark' : 'light'

					if (localPrefs[1] && localPrefs[1] === 'system') {
						setStorage('theme', [systemThemeName, 'system'])
						setCurrent(themes[systemThemeName])
					} else if (['user', 'default'].includes(localPrefs[1])) {
						setStorage('theme', [localPrefs[0], setThemeAgent(localPrefs[0])])
						setCurrent(themes[localPrefs[0]])
					}
				} else if (
					localPrefs !== null &&
					['light', 'dark'].includes(localPrefs[0]) &&
					systemPrefersDarkTheme === null
				) {
					setStorage('theme', [localPrefs[0], setThemeAgent(localPrefs[0])])
					setCurrent(themes[localPrefs[0]])
				} else if (systemPrefersDarkTheme !== null) {
					const systemThemeName = systemPrefersDarkTheme ? 'dark' : 'light'
					setStorage('theme', [systemThemeName, 'system'])
					setCurrent(themes[systemThemeName])
				} else {
					setStorage('theme', ['light', 'default'])
					setCurrent(themes['light'])
				}
			} else setCurrent(themes['light'])
		}
	}, [
		systemPrefersDarkTheme,
		current,
		setThemeAgent,
		storageAvailable,
		setStorage
	])

	const setTheme = themeName => {
		const newTheme = themes[themeName]
		setStorage('theme', [newTheme.name, setThemeAgent(newTheme.name)])
		setCurrent(newTheme)
	}

	return {
		current,
		setTheme,
	}
}

export default useTheme
