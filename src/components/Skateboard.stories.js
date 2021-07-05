import React from 'react'
import Skateboard from './Skateboard'

export default {
	title: 'Components/Image Frames/Skateboard',
	component: Skateboard,
	argTypes: {
		rotateX: {
			name: 'rotate',
			description: 'Deck flip rotation',
			control: {
				type: 'range',
				min: -180,
				max: 180,
				step: 5
			},
			table: {
				defaultValue: {
					summary: 0
				},
				type: {
					summary: 'deg',
					detail: 'degrees'
				}
			}
		}
	}
}

export const Primary = args => <Skateboard {...args}/>