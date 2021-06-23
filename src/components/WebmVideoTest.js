import React from 'react'
import LogoAnimation from '../assets/logoAnimation.webm'
import LogoAnimationMP4 from '../assets/logoAnimation.mp4'

const SvgVid = () => {
	return (
		<>
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
					<video width='100%' height='100%' autoPlay playsInline loop muted>
						{/* FIX Dang! WebM not working on iOS */}
						{/* BUG Firefox only plays video on mouseEvents - very weird! */}
						<source src={LogoAnimation} type='video/mp4' />
						<source src={LogoAnimationMP4} type='video/mp4' />
					</video>
				</foreignObject>
			</svg>
			<video playsInline width='100%' height='100%' autoPlay loop muted>
				{/* NOTE check if ios has issue with file format */}
				<source src={LogoAnimation} type='video/webm' />
				<source src={LogoAnimationMP4} type='video/mp4' />
			</video>
		</>
	)
}

const WebmVideoTest = () => {
	return <SvgVid />
}
// TODO rename this component and update references
export default WebmVideoTest
