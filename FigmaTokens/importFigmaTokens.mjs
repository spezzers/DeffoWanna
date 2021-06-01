import { readFile, writeFile } from 'fs/promises'

console.log('IMPORT >> Figma Tokens ~ started...')

const dataFile = './tokens.json'

try {
	const data = JSON.parse(
		await readFile(new URL(dataFile, import.meta.url))
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
	console.log('\x1b[32m', `sucessfully imported Figma Color Tokens to 'themes.js'`)
} catch (error) {
	if (error.errno === -4058) {
		console.log('\x1b[31m%s\x1b[0m', 'error', `can't find ${dataFile}`)
	} else {
		console.log('\x1b[31m%s\x1b[0m', 'error', error.message)
	}
}