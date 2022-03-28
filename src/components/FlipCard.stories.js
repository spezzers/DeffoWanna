import React from 'react'
import FlipCard from './FlipCard'
import styled from 'styled-components'


const Face = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.blueBg};
	border-radius: 20px ;
	display: flex;
	align-items: center ;
	justify-content: center ;
	::after {
		content: attr(data-label);
	}
`

export default {
	title: 'Components/FlipCard',
	component: FlipCard,
	argTypes: {
		front: {
			name: 'front',
			control: 'text',
			description: 'The front face of the card',
			table: {
				disable: true
			}
		},
		back: {
			name: 'back',
			control: 'text',
			description: 'The back face of the card',
			table: {
				disable: true
			}
		},
		width: {
			name: 'width',
			control: 'text',
			description: 'The width of the card',
			table: {
				type: {
					summary: 'length'
				},
				defaultValue: {
					summary: '200px'
				}
			}
		},
		height: {
			name: 'height',
			control: 'text',
			description: 'The height of the card',
			table: {
				type: {
					summary: 'length'
				},
				defaultValue: {
					summary: '300px'
				}
			}
		}
	}
}

// eslint-disable-next-line no-unused-vars
const Template = (args, { argTypes }) => {
	return <FlipCard {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
	front: <Face data-label="Front Face"/>,
	back: <Face className="linda" data-label="Back Face"/>,
}
