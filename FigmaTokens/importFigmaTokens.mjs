import { readFile, writeFile } from 'fs/promises'
console.log('IMPORT >> Figma Tokens ~ started...')

try {
	const data = JSON.parse(
		await readFile(new URL('./tokens.json', import.meta.url))
	)

	let light = {}
	let dark = {}
	for (const [key, value] of Object.entries(data.colors)) {
		if (key === 'Light') {
			light = value
		}
		if (key === 'Dark') {
			dark = value
		}
	}

	let lightColorsArray = [['name', 'light']]
	let darkColorsArray = [['name', 'dark']]

	for (const [key, value] of Object.entries(light)) {
		lightColorsArray.push([key, value.value])
	}
	for (const [key, value] of Object.entries(dark)) {
		darkColorsArray.push([key, value.value])
	}

	const themes = {
		light: Object.fromEntries(lightColorsArray),
		dark: Object.fromEntries(darkColorsArray)
	}

	// console.log(`const themes = ${JSON.stringify(themes, null, 2)}`)

	await writeFile(
		'src/styles/themes.js',
		`const themes = ${JSON.stringify(themes, null, 2)}

export default themes`
	)
	console.log(`sucessfully imported Figma Color Tokens to 'themes.js'`)
} catch (error) {
	console.log(error)
}