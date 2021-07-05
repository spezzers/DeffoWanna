import React from 'react'
import styled from 'styled-components'
import colorPalette from '../images/Color Palette.png'
import sample from '../images/sample.jpg'
import themes from '../styles/themes'

const Wrap = styled.div`
	div {
		padding: 30px;
		width: 300px;
		display: inline-block;
		img {
			width: 100%;
		}
	}
	.left {
		padding-right: 0;
	}
	.right {
		padding-left: 0;
	}
	.light {
		background-color: ${themes.light.background};
	}
	.dark {
		background-color: ${themes.dark.background};
		// NOTE Dark mode filter
		img {
			filter: brightness(88%) saturate(93%) contrast(114%) sepia(3%);
		}
	}
`

const colors = () => {
	return (
		<Wrap>
			<div className='dark left'>
				<img src={colorPalette} alt='color palette dark' />
			</div>
			<div className='light right'>
				<img src={colorPalette} alt='color palette light' />
			</div>
			<div className='dark'>
				<img className='dark' src={sample} alt='sample dark' />
			</div>
			<div className='light'>
				<img className='light' src={sample} alt='sample light' />
			</div>
		</Wrap>
	)
}

export default colors
