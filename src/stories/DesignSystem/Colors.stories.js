import React from 'react'
import themes from '../../components/themes'
import styled from 'styled-components'

const Color = props => {
	return (
		<div className='row'>
			<div className='label'>{props.label}</div>
			<div style={{ backgroundColor: `${props.value}` }} className='value'>
				{props.value}
			</div>
		</div>
	)
}
const ColorsList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
	.row {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin: 5px;
		.value {
			padding: 15px;
			flex-grow: 10;
		}
		.label {
			flex-grow: 1;
			flex-basis: 1;
		}
	}
`

const Colors = ({ theme }) => {
	return (
		<ColorsList>
			{Object.entries(theme).map(entry => {
				const [key, value] = entry
				if (key === 'name') {
					return <h1 key={key}>{value} theme</h1>
				}
				return <Color key={key} label={key} value={value} />
			})}
		</ColorsList>
	)
}

export default {
	title: 'Design System/Colors',
	component: Colors
}

export const Light = () => <Colors theme={themes.light} />
export const Dark = () => <Colors theme={themes.dark} />
