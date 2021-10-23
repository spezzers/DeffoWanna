import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'
import {
	breakpoint,
	colGap,
	smallRow,
	lineHeight,
	smallCol,
	col,
	minPageWidth
} from '../styles/sizes'
import Header from './Header'
import GlobalStyle from '../styles/GlobalStyle'
import ThemeToggleButton from './ThemeToggleButton'
import { themeContextColor } from '../styles/themes'

const FullWidthSection = ({ children, className, bgColor }) => {
	return (
		<section
			className={`full-width-section ${className}`}
			data-bg-color={bgColor ? bgColor : 'background'}
		>
			{children}
		</section>
	)
}

export const Section = styled(FullWidthSection)`
	z-index: 0;
	display: inherit;
	column-gap: inherit;
	row-gap: inherit;
	grid-template-areas: inherit;
	grid-template-columns: inherit;
	grid-template-rows: inherit;
	background-color: ${props => themeContextColor(props.bgColor)};
	grid-column: 1 / -1;
	position: relative;
	left: 0;
	right: 0;
	min-height: 100vh;
	min-width: inherit;
	height: ${props => props.height || 'auto'};
	box-sizing: border-box;
	padding-top: calc(${lineHeight} / 2);
	padding-bottom: calc(${lineHeight} / 2);
	:nth-child(2) {
		min-height: calc(100vh - ${smallRow});
	}
	${breakpoint.mobile} {
		margin-left: calc(${colGap} / -2);
		margin-right: calc(${colGap} / -2);
		width: 100vw;
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
	}
`

const PageGrid = styled.div`
	background-color: ${props => props.backgroundColor || props.theme.background};
	padding-top: ${smallRow};
	display: grid;
	justify-content: center;
	min-width: ${minPageWidth};
	min-height: 100vh;
	width: 100%;
	height: 100%;
	column-gap: ${colGap};
	grid-auto-rows: auto;
	position: absolute;
	z-index: 0;
	box-sizing: border-box;

	${breakpoint.mobile} {
		width: calc(100%);
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
		grid-template-columns:
			[logo-start]
			${colGap}
			${colGap}
			[logo-end]
			minmax(0, 1fr);
		grid-template-areas: 'main main main';
	}

	${breakpoint.tablet} {
		width: 100%;
		margin: 0;
		grid-template-columns:
			minmax(0, 1.5fr)
			${colGap}
			${colGap}
			minmax(${smallCol}, 2fr)
			minmax(${col}, 4fr)
			minmax(0, 3fr);
		grid-template-areas: '. main main main main .';
	}
	${breakpoint.desktop} {
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
		grid-template-areas: '. . main main main main main . .';
	}
`

const Minimal = styled.div`
	min-height: 100vh;
	width: 100vw;
	padding-top: 1.5rem;
	padding-bottom: 1rem;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-content: center;

	${breakpoint.mobile} {
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
	}
	${breakpoint.tablet} {
		padding-left: ${colGap};
		padding-right: ${colGap};
	}
	#theme-toggle-button {
		position: fixed;
		display: block;
		top: calc(${lineHeight} / 2);
		${breakpoint.mobile} {
			right: calc(${colGap} / 2);
		}
		${breakpoint.tablet} {
			right: ${colGap};
		}
	}
`

const Layout = props => {
	const theme = useTheme()
	if (!theme.current) {
		return null
	}
	if (props.minimal) {
		return (
			<ThemeProvider theme={theme.current}>
				<GlobalStyle />
				<Minimal>
					<ThemeToggleButton settheme={theme.setTheme} />
					{props.children}
				</Minimal>
			</ThemeProvider>
		)
	}
	return (
		<ThemeProvider theme={theme.current}>
			<GlobalStyle />
			<PageGrid>
				<Header
					location={props.location}
					fixHeader={props.fixHeader}
					themetogglebutton={<ThemeToggleButton settheme={theme.setTheme} />}
				/>
				{props.children}
			</PageGrid>
		</ThemeProvider>
	)
}

export default Layout
