// custom defined style values
const fontSizePx = 19
const lineHeightRatio = 1.263

// calculated style values
const lineHeightPx = Math.round(fontSizePx * lineHeightRatio)
const colGapPx = ((fontSizePx * lineHeightRatio) / 5) * 8
const colPx = colGapPx * 4
const rowPx = lineHeightPx * 5
const smallColPx = colGapPx * 2
export const smallRowPx = lineHeightPx * 3

// exported style strings
export const fontSize = `${fontSizePx}px`
export const lineHeight = `${lineHeightPx}px`

export const colGap = `${colGapPx}px`
export const col = `${colPx}px`
export const smallCol = `${smallColPx}px`

export const rowGap = lineHeight
export const row = `${rowPx}px`
export const smallRow = `${smallRowPx}px`

// page breakpoints
export const breakpoint = {
	mobile: '@media only screen and (max-width: 31rem)',
	tablet: '@media only screen and (min-width: 31rem)',
	desktop: '@media only screen and (min-width: 62rem)'
}

// Grid
export const pageGrid = {
	defaults: `
		display: grid;
		column-gap: ${colGap};
		row-gap: ${rowGap};
		box-sizing: border-box;
	
	`,
	columns: {
		mobile: `
		width: calc(100% - ${colGap});
		margin: 0 auto;
		grid-template-columns:
			[logo-start]
			${colGap}
			${colGap}
			[logo-end]
			minmax(0, 1fr);
	`,
		tablet: `
		width: 100%;
		margin: 0;
		grid-template-columns:
			minmax(0, 1.5fr)
			${colGap}
			${colGap}
			minmax(${smallCol}, 2fr)
			minmax(${col}, 4fr)
			minmax(0, 3fr);
	`,
		desktop: `
		width: 100%;
		margin: 0;
		grid-template-columns:
			minmax(0, 3fr)
			${smallCol}
			${colGap}
			${colGap}
			${smallCol}
			${col}
			${col}
			${col}
			minmax(0, 4fr);
	`
	}
}
