import React from 'react'
import Logo from './Logo'

export default {
	title: 'Components/Logo',
	component: Logo,
	argTypes: {
		size: {
			name: 'size',
			description: 'Overall size of the logo',
			control: 'number',
			table: {
				type: {
					summary: 'rem'
				}
			}
		},
		color: {
			name: 'color',
			control: 'color',
			table: {
				defaultValue: {
					summary: 'ThemeContext.purple|#777777'
				}
			}
		},
		lightColor: {
			name: 'lightColor',
			description: 'Color of light source when activated',
			control: 'color',
			table: {
				defaultValue: {
					summary: 'ThemeContext.white | white'
				}
			}
		},
		lightIntensity: {
			name: 'lightIntensity',
			description: 'Intensity of light source when activated',
			control: {
				type: 'number',
				min: 1,
				max: 10,
				step: 0.5
			},
			table: {
				defaultValue: {
					summary: 1,
				},

			}
		}
	}
}

const Template = args => <Logo {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Default'
Primary.args = { size: 8 }
