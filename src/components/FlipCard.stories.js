import React from 'react'
import FlipCard from './FlipCard'


export default {

	title: 'Components/FlipCard',
	component: FlipCard
}

export const Primary = args => {
	return (
		<FlipCard {...args}></FlipCard>
	)
}