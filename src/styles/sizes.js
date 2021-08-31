// custom defined style values
const fontSizePx = 19
const lineHeightRatio = 1.263


// calculated style values
const lineHeightPx = fontSizePx * lineHeightRatio
const colGapPx = ((fontSizePx * lineHeightRatio) / 5) * 8
const colPx = colGapPx * 4
const rowPx = lineHeightPx * 5
const smallColPx = colGapPx * 2
const smallRowPx = lineHeightPx * 3


// exported style strings
export const fontSize = `${fontSizePx}px`
export const lineHeight = `${lineHeightPx}px`

export const colGap = `${colGapPx}px`
export const col = `${colPx}px`
export const smallCol = `${smallColPx}px`

export const rowGap = lineHeight
export const row = `${rowPx}px`
export const smallRow = `${smallRowPx}px`


// exported breakpoint object
export const breakpoint = {
	mobile: '@media only screen and (max-width: 31rem)',
	tablet: '@media only screen and (min-width: 31rem)',
	desktop: '@media only screen and (min-width: 62rem)'
}