import React from 'react'
import LogoAnimation from '../assets/logoAnimation.webm'
import LogoAnimationMP4 from '../assets/logoAnimation.mp4'
import styled from 'styled-components'

const SvgVid = () => {
	return (
		<div>
			<svg
				height='0'
			>
					<filter id='vidFilter'>
						<feColorMatrix // FIX iOS doesn't support this!
							in='SourceGraphic'
							result='alpha'
							type='matrix'
							values=' 1  0  0  0  0 
								0  1  0  0  0 
								0  0  1  0  0 
								-10 -10 -10  1  0'
						/>
						<feFlood result='fill' floodColor='red' />

						<feComposite in2='alpha' in='fill' operator='in' />
					</filter>
			</svg>

			<video
				className='vid'
				playsInline
				width='100%'
				height='100%'
				autoPlay
				loop
				muted
				// filter='url(#vidFilter)'
				style={{filter: 'url(#vidFilter)'}}
			>
				<source src={LogoAnimation} type='video/webm' />
				<source src={LogoAnimationMP4} type='video/mp4' />
			</video>
		</div>
	)
}


const Wrap = styled.div`
	.vid {
		filter: url(#{vidFilter});
	}
`

const WebmVideoTest = () => {
	return (
		<Wrap>
			<SvgVid />
		</Wrap>
	)
}
// TODO rename this component and update references
export default WebmVideoTest
