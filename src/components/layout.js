import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'
import { pageGrid, breakpoint, colGap, rowGap } from '../styles/sizes'
import Header from './Header'
import GlobalStyle from '../styles/GlobalStyle'
import ThemeToggleButton from './ThemeToggleButton'

const Grid = styled.div`
	--header-row: calc(${rowGap} * 2.75);
	padding-top: ${rowGap};
	display: grid;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	column-gap: ${colGap};
	row-gap: ${rowGap};
	grid-auto-rows: auto;

	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
		grid-template-areas:
			'main main main';
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
			<Header
				themetogglebutton={<ThemeToggleButton settheme={theme.setTheme} />}
			/>
			<Grid>{props.children}</Grid>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default Layout
