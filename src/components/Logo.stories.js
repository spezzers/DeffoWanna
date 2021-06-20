import React from 'react'
import Logo from './Logo'

export default {
	title: 'Components/Logo',
	component: Logo,
	argTypes: {
		size: {
			name: 'Size',
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
			name: 'Color',
			control: 'color',
			table: {
				defaultValue: {
					summary: '#ff99344'
				}
			}
		}
	}
}

const Template = args => <Logo {...args}/>

export const Primary = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {size: 4}