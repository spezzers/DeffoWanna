import React from 'react'
import CrossHatch from './CrossHatch'
import pic from '../images/lowRes.jpg'
import vid from '../images/odog.mp4'
import Logo from './Logo'

const DemoSVG = () => {
	return (
		<svg width='500px' height='200px' viewBox='0 0 500 200'>
			<defs>
				<linearGradient id='gradientFill'>
					<stop offset='0%' stopColor='black' />
					<stop offset='100%' stopColor='white' />
				</linearGradient>
			</defs>
			<rect width='100%' height='100%' fill='url(#gradientFill)' />
		</svg>
	)
}

export default {
	title: 'Components/Graphic Effects/CrossHatch',
	component: CrossHatch,
	argTypes: {
		blacks: {
			name: 'blacks',
			control: 'color',
			table: {
				defaultValue: {
					summary: 'black'
				}
			}
		},
		whites: {
			name: 'whites',
			control: 'color',
			table: {
				defaultValue: {
					summary: 'white'
				}
			}
		},
		darkInvert: {
			name: 'darkInvert',
			description: 'Invert colours in dark mode',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: {
					summary: 'boolean'
				},
				defaultValue: {
					summary: false
				}
			}
		},
		edgeSoftness: {
			name: 'edgeSoftness',
			description: 'Feathering of the edges',
			control: {
				type: 'number',
				min: 0,
				step: 1
			},
			table: {
				type: {
					summary: 'px'
				},
				defaultValue: {
					summary: 15
				}
			}
		}
	}
}

export const Primary = args => (
	<CrossHatch {...args}>
		<DemoSVG />
	</CrossHatch>
)
export const Video = args => (
	<CrossHatch {...args}>
		<video width='1080px' muted autoPlay loop playsInline>
			<source src={vid} type='video/mp4' />
		</video>
	</CrossHatch>
)
export const Image = args => (
	<CrossHatch {...args}>
		<img src={pic} width='600px' alt='sample image' />
	</CrossHatch>
)
export const Text = args => (
	//TODO define specific decorator defaults in controls (darkInvert)
	// check documentation for correct way of doing this...
	<CrossHatch {...args} darkInvert edgeSoftness={0}>
		<h1>Cross-Hatch Effect</h1>
		<p>Super cool, right?!</p>
		<p>It does seem a little difficult to read paragraph text. Perhaps to be used with larger display sized text.</p>
	</CrossHatch>
)

export const AnimatedLogo = args => (
	<CrossHatch {...args} darkInvert >
		<Logo color='black'/>
	</CrossHatch>
)