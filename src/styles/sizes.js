const fontSizePx = 19
const lineHeightRatio = 1.263

export const fontSize = `${fontSizePx}px`
export const lineHeight = `${fontSizePx * lineHeightRatio}px`
export const rowGap = lineHeight
export const colGap = `${((fontSizePx * lineHeightRatio) / 5) * 8}px`

export const breakpoint = {
	mobile: '@media only screen and (max-width: 31rem)',
	tablet: '@media only screen and (min-width: 31rem)',
	desktop: '@media only screen and (min-width: 62rem)'
}