import React from 'react'
import LogoAnimation from '../assets/logoAnimation.webm'

const SvgVid = () => {
	return (
		<svg
			viewBox='0 0 1080 540'
			height='8rem'
			preserveAspectRatio='xMinYMin'
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<filter id='vidfilter'>
					<feColorMatrix
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
			</defs>
			<foreignObject
				id='vid'
				width='100%'
				height='100%'
				filter='url(#vidfilter)'
			>
					<style>filter='invert(100%)'</style>
					<video width='100%' height='100%' autoPlay loop muted>
						<source src={LogoAnimation} type='video/webm' />
					</video>
			</foreignObject>
		</svg>
	)
}

const WebmVideoTest = () => {
	return <SvgVid />
}

export default WebmVideoTest
