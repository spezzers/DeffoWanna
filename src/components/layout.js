import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'
import '../styles/layout.css'
import { pageGrid, breakpoint, colGap, smallRow, lineHeight } from '../styles/sizes'
import Header from './Header'
import GlobalStyle from '../styles/GlobalStyle'
import ThemeToggleButton from './ThemeToggleButton'
import { themeContextColor } from '../styles/themes'

const FullWidthSection = ({children, className, bgColor}) => {
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
	height: ${props => props.height || 'auto'};
	box-sizing: border-box;
	padding-top: calc(${lineHeight} / 2);
	padding-bottom: calc(${lineHeight} / 2);
	:first-child {
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
	width: 100%;
	height: 100%;
	column-gap: ${colGap};
	grid-auto-rows: auto;
	position: absolute;
	z-index: 0;
	box-sizing: border-box;

	${breakpoint.mobile} {
		${pageGrid.columns.mobile}
	}

	${breakpoint.tablet} {
		${pageGrid.columns.tablet}
	}
	${breakpoint.desktop} {
		${pageGrid.columns.desktop}
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
