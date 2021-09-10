import { createGlobalStyle } from 'styled-components'
import { themeContextColor } from './themes'
import { lineHeight, breakpoint, fontSize, rowGap, colGap } from './sizes'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
		font-family: 'IBM Plex Sans', sans-serif;
		line-height: ${lineHeight};
		font-size: ${fontSize};
		max-width: 1900px;
		
		
		p {
			font-family: 'IBM Plex Sans';
			font-style: normal;
			font-weight: 400;
			letter-spacing: 0.012em;
			margin: ${lineHeight} 0;
			span.gatsby-resp-image-wrapper {
				margin: ${lineHeight} 0;
			}
			strong, em {
				color: ${props => props.theme.textStrong};
			}
		}
		h1, h2, h3, h4, h5, h6 {
			font-family: 'IBM Plex Serif', serif;
			font-weight: normal;
			font-style: normal;
			margin: ${lineHeight} 0;
			color: ${themeContextColor('textStrong')};
			line-height: 1.4em;
		}
		h1, h2 {
			margin: calc(2 * ${lineHeight}) 0;
		}
		h1 {
			color: ${themeContextColor('text')};
			font-family: IBM Plex Serif;
			font-style: normal;
			font-weight: bold;
			letter-spacing: 0.002em;
			${breakpoint.mobile} {
				font-size: 2.1rem;
			}
			${breakpoint.tablet} {
				font-size: 2.5rem;
			}
			${breakpoint.desktop} {
				font-size: calc(2 * ${lineHeight});
			}
		}
		h2 {
			font-size: 1.895rem;
			letter-spacing: 0.01em;
		}
		h3 {
			font-size: 1.526rem;
			letter-spacing: 0.023em;
		}
		h4 {
			font-size: 1.368rem;
			letter-spacing: 0.05em;
		}
		h5 {
			font-size: 1.263rem;
			letter-spacing: 0.06em;
		}
		h6 {
			font-size: 1.105rem;
			letter-spacing: 0.07em;
		}
	}
	img {
		filter: ${props =>
			props.theme.name === 'dark'
				? 'contrast(0.95) brightness(0.8) saturate(0.96) '
				: 'contrast(1) brightness(1) saturate(1)'}
	}

	code[class*="language-"],
	pre[class*="language-"] {
		color: #f8f8f2;
		color: ${themeContextColor('text')};
		font-size: 1rem;
		text-shadow: -0.02em 0.1em 0.2em ${themeContextColor('background')};
		font-family: 'IBM Plex Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	/* Code blocks */
	pre[class*="language-"] {
		padding: ${rowGap} calc(${colGap} / 2);
		margin: ${lineHeight} 0;
		overflow: auto;
		border-radius: 0.25em;
		background: #272822;
		background: ${themeContextColor(
			'backgroundSecondary'
		)} linear-gradient(110deg, ${themeContextColor(
	'purpleBg'
)}38, ${themeContextColor('orangeBg')}31);
		box-shadow: inset 0 .05em .2em ${themeContextColor('black')}05;
	}

	/* Inline code */
	:not(pre) > code[class*="language-"] {
		padding: .1em .2em;
		border-radius: .2em;
		white-space: normal;
		background-color: ${themeContextColor('backgroundSecondary')};
		color: ${themeContextColor('text')};
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: slategray;
	}

	.token.punctuation {
		color: #f8f8f2;
		color: ${themeContextColor('text')};
	}

	.namespace {
		opacity: .7;
	}

	.token.property,
	.token.tag,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #f92672;
		color: ${themeContextColor('redTextStrong')};

	}

	.token.boolean,
	.token.number {
		color: #ae81ff;
		color: ${themeContextColor('blueTextStrong')};

	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #a6e22e;
		color: ${themeContextColor('greenTextStrong')};

	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string,
	.token.variable {
		color: #f8f8f2;
		color: ${themeContextColor('text')};

	}

	.token.atrule,
	.token.attr-value,
	.token.function {
		color: #e6db74;
		color: ${themeContextColor('tealText')};

	}

	.token.keyword {
		color: #66d9ef;
		color: ${themeContextColor('purpleTextStrong')}; 

	}

	.token.regex,
	.token.important {
		color: #fd971f;
		color: ${themeContextColor('orangeTextStrong')};
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
`

export default GlobalStyle
