import React from 'react'
import Button from './Button'

const colors = ['purple', 'blue', 'teal', 'green', 'yellow', 'orange', 'red']

export default {
	title: 'Components/UI/Buttons',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
			description: 'Vary the visual prominence of the button',
			table: {
				type: {
					summary: 'string',
					detail: 'primary | secondary'
				},
				defaultValue: {
					summary: 'primary',
				}
			}
		},
		color: {
			name: 'color',
			description: 'Main color',
			options: colors,
			control: { type: 'select' },
			table: {
				type: {
					summary: 'string',
					detail: 'name of a color from the app theme'
				},
				defaultValue: {
					summary: 'purple',
					detail: 'theme.purple'
				}
			}
		},
		bgColor: {
			name: 'bgColor',
			description: 'Background color',
			options: colors,
			control: {
				type: 'select'
			},
			table: {
				type: {
					summary: 'string',
					detail: 'name of a color from the app theme'
				},
				defaultValue: {
					summary: 'background',
					detail: 'theme.background'
				}
			}
		},
		children: {
			description: 'Content that appears on the button',
			table: {
				type: {
					summary: 'text | html',
				}
			}
		}
	}
}

// eslint-disable-next-line no-unused-vars
const Template = (args, { argTypes }) => (
	<Button {...args}>{args.children}</Button>
)

export const Big = Template.bind({})
Big.args = {
	children: 'I like big buttons...'
}
