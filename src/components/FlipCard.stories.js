import React from 'react'
import FlipCard from './FlipCard'

export default {
	title: 'Components/FlipCard',
	component: FlipCard,
	argTypes: {}
}

const Template = (args, { argTypes }) => {
	return <FlipCard {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
	front: <h1>Front</h1>,
	back: <h2>Back</h2>
}
