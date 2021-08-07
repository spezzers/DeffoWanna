import React from 'react'
import Skateboard from './Skateboard'
import birdsImg from '../images/birds.jpg'

export default {
	title: 'Components/Image Frames/Skateboard',
	component: Skateboard,
	argTypes: {
		src: {
			name: 'src',
			description: 'The image applied to the deck',
			control: 'file'
		},
		width: {
			name: 'width',
			description: 'Width of deck',
			control: 'number',
			table: {
				defaultValue: {
					summary: 80
				},
				type: {
					summary: 'px',
					detail: 'pixels'
				}
			}
		},
		length: {
			name: 'length',
			description: 'Length of deck',
			control: 'number',
			table: {
				defaultValue: {
					summary: 320
				},
				type: {
					summary: 'px',
					detail: 'pixels'
				}
			}
		},
		depth: {
			name: 'depth',
			description: 'Depth of deck',
			control: 'number',
			table: {
				defaultValue: {
					summary: 5
				},
				type: {
					summary: 'px',
					detail: 'pixels'
				}
			}
		},
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

export const Primary = args => <Skateboard src={birdsImg} {...args} />
