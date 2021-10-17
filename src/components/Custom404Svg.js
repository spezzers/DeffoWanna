import React from 'react'
import styled from 'styled-components'
import { themeContextColor } from '../styles/themes'
import custom404SvgPaths from './custom404SvgPaths'

const Animated404SVG = styled.svg`
	@keyframes t0 {
		0% {
			opacity: 1;
		}
		8.333333% {
			opacity: 0;
		}
	}
	@keyframes t1 {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
	@keyframes t2 {
		0% {
			opacity: 1;
		}
		16.66667% {
			opacity: 0;
		}
	}

	#f0 {
		--index: 0;
		opacity: 1;
	}
	#f1 {
		--index: 1;
		opacity: 0;
	}
	#f2 {
		--index: 2;
		opacity: 0;
	}
	#f3 {
		--index: 3;
		opacity: 0;
	}
	#f4 {
		--index: 4;
		opacity: 0;
	}
	#f5 {
		--index: 5;
		opacity: 0;
	}
	#f6 {
		--index: 6;
		opacity: 0;
	}
	#f7 {
		--index: 7;
		opacity: 0;
	}
	#f8 {
		--index: 8;
		opacity: 0;
	}
	#f9 {
		--index: 9;
		opacity: 0;
	}
	#f10 {
		--index: 10;
		opacity: 0;
	}
	#f11 {
		--index: 11;
		opacity: 0;
	}

	background-color: transparent;

	#t0,
	#t1,
	#t2 {
		--visible: 1;
		--bookmarkIndex: -1;
		--latched: 0;
		--playMode: 0;
		--masked: 0;
		--blendMode: 0;
		--pressureEnabled: 0;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	#t0 {
		--timeOffset: 68.39995;
		--speed: 10;
		fill: ${themeContextColor('text')};
		stroke-opacity: 0;
		fill-opacity: 1;
		stroke-width: 10;
	}
	#t0 .frame {
		animation: t0 1.2s calc(var(--index) * 0.1s) steps(1) infinite;
	}
	#t1,
	#t2 {
		stroke: ${themeContextColor('teal')};
		stroke-opacity: 1;
		fill-opacity: 0;
		stroke-width: 3.026753;
	}
	#t1 {
		--timeOffset: 28.00004;
		--speed: 2;
	}
	#t1 .frame {
		animation: t1 1s calc(var(--index) * 0.5s) steps(1) infinite;
	}
	#t2 {
		--timeOffset: 29.90003;
		--speed: 5;
	}
	#t2 .frame {
		animation: t2 1.2s calc(var(--index) * 0.2s) steps(1) infinite;
	}
`

const Custom404Svg = () => {
	return (
		<Animated404SVG
			role='img'
			aria-label='error 404: Page not found'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='-585 -540 1080 1080'
			preserveAspectRatio='xMidYMid meet'
		>
			{custom404SvgPaths}
		</Animated404SVG>
	)
}

export default Custom404Svg
