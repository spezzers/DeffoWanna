import React from 'react'
import Button from './Button'

export default {
	title: 'Components/UI/Button',
	component: Button,
	argTypes: {
		primary: {
			name: 'primary',
			control: 'boolean'
		}
	}
}

const Template = (args, {argTypes}) => (
	<Button {...args} >{args.children}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	children: 'I like big buttons...'
}
export const Secondary = Template.bind({})
Secondary.args = {
	children: '...I cannot lie.'
}