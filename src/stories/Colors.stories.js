import React from 'react'
import { light, dark } from '../components/themes'

const Colors = ({ theme }) => {
	// const colors = Object.entries(theme)
	// const colors = Object.entries(theme)
	// console.log(colors)
	return (
		<table>
			<tbody>
				{Object.entries(theme).map(entry => {
					const [key, value] = entry
					return (
						<tr>
							<td>{key}</td>
							<td>{value}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
		// <div>{colors}</div>
	)
}
export default {
	title: 'Design System/Colors',
	component: Colors
}

export const Primary = () => <Colors theme={light} />
