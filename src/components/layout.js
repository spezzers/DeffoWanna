import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'
import { pageGrid, breakpoint, colGap, rowGap, smallRow } from '../styles/sizes'
import Header from './Header'
import GlobalStyle from '../styles/GlobalStyle'
import ThemeToggleButton from './ThemeToggleButton'
import { themeContextColor } from '../styles/themes'

const FullWidthSection = props => {
	return (
		<section
			className={`full-width-section ${props.className}`}
			data-bg-color={props.bgColor ? props.bgColor : 'background'}
		>
			{props.children}
		</section>
	)
}

export const Section = styled(FullWidthSection)`
	background-color: ${props => themeContextColor(props.bgColor)};
	grid-column: 1 / -1;
	width: 100vw;
	min-height: 100vh;
	height: ${props => props.height || 'auto'};
	box-sizing: border-box;
	:first-child {
		min-height: calc(100vh - ${smallRow});
	}
	${breakpoint.mobile} {
		box-sizing: border-box;
		margin-left: calc(${colGap} / -2);
		margin-right: calc(${colGap} / -2);
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
	}
`

const PageGrid = styled.div`
	background-color: ${props => props.backgroundColor || props.theme.background};
	padding-top: ${smallRow};
	display: grid;
	justify-content: center;
	width: 100%;
	height: 100%;
	column-gap: ${colGap};
	grid-auto-rows: auto;
	position: absolute;

	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
		padding-left: calc(${colGap} / 2);
		padding-right: calc(${colGap} / 2);
		grid-template-areas: 'main main main';
	}

	${breakpoint.tablet} {
		${pageGrid.columns.tablet}
		grid-template-areas:
			'. main main main main .';
	}
	${breakpoint.desktop} {
		${pageGrid.columns.desktop}
		grid-template-areas:
			'. . main main main main main . .';
	}
`

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	background-color: blue;
	opacity: 0.5;
	inset: 0;
	z-index: 250;
`

const Minimal = styled.div`
	height: 100vh;
	width: 100vw;
	padding-top: 1.5rem;
	padding-bottom: 1rem;
	box-sizing: border-box;
	display: flex;
	align-items: stretch;
	justify-content: center;
	@media (orientation: portrait) {
		flex-direction: column;
	}
	@media (orientation: landscape) {
		flex-direction: row;
	}
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
		top: calc(${rowGap} / 2);
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
			<Header
				location={props.location}
				fixHeader={props.fixHeader}
				themetogglebutton={<ThemeToggleButton settheme={theme.setTheme} />}
			/>
			<PageGrid>{props.children}</PageGrid>
			{/* <Overlay /> */}
		</ThemeProvider>
	)
}

export default Layout
