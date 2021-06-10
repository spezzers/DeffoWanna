import React from 'react'
// import { ThemeContext } from 'styled-components'

const ToggleThemeButton = ({ onClick }) => {
	// const theme = useContext(ThemeContext)
	
	return (
		<>
			{/* <svg width={26} height={26} fill='none'>
				<circle
					cx={12.68}
					cy={12.68}
					r={11.18}
					stroke={theme.purpleTextSubtle}
					strokeWidth={3}
					strokeDasharray='2.37 4.75'
				/>
				<circle cx={12.68} cy={12.68} r={7.68} fill='#57515D' />
			</svg> */}
			<button onClick={onClick}>Toggle Theme</button>
		</>
	)
}

export default ToggleThemeButton
