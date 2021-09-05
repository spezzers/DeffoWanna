import React from 'react'
import Header from './Header'

export default {
	title: ' Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
	}
}

const Template = args => <Header {...args} />

export const Primary = Template.bind({})