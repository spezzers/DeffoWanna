import React from 'react'
import Skateboard from './Skateboard'

export default {
	title: 'Components/Image Frames/Skateboard',
	component: Skateboard,
	argTypes: {
		rotateX: {
			name: 'rotate-x',
			description: 'Overall deck rotation on X axis',
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
		},
		rotateY: {
			name: 'rotate-y',
			description: 'Overall deck rotation on Y axis',
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
		},
		latFlip: {
			name: 'lat-flip',
			description: 'Deck flip rotation (trick example: kickflip)',
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
		},
		longFlip: {
			name: 'long-flip',
			description: 'Deck vertical rottion (trick example: impossible)',
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
		},
		spin: {
			name: 'spin',
			description: 'Deck spin rotation (trick example: shove-it)',
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