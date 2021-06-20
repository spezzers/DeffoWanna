import React from 'react'
import Logo from './Logo'

export default {
	title: 'Components/Logo',
	component: Logo,
	argTypes: {
		size: {
			name: 'size',
			description: 'Font size of the logo',
			control: 'number',
			table: {
				defaultValue: {
					summary: 4
				},
				type: {
					summary: 'rem',
					detail: 'Overall height is 2.2x the rem number'
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
					summary: 'ThemeContext.white | white',
				}
			}
		}
	}
}

const Template = args => <Logo {...args}/>

export const Primary = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {size: 4}