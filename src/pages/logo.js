import React from 'react'
import Layout from '../components/layout'
import LogoFat from '../components/logo/logo-fat'
import LogoSlim from '../components/logo/logo-slim'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { interpolate, splitPathString } from 'flubber'

const Logo = props => {
	const paths = [
		// 'M0,0 L10,0 L10,10Z',
		'M0,0 L5,0 L10,10Z',

		'M489.694 217.96 s-10.527-5.358-26.793-4.849 c-16.292.509-24.232 9.06-23.979 18.508.261 9.705 8.796 18.019 23.979 15.671 15.183-2.347 22.95-12.276 26.793-16.038V217.96',
		'M498.935 245.946c-5.103 0-9.241-4.159-9.241-9.288 0-9.766.758-28.613 0-37.388-1.445-16.748-16.365-20.774-30.944-18.617a70.193 70.193 0 00-11.774 2.812',
	]

	// const paths = [
	// 	'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
	// 	'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
	// 	'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
	// 	'M7 2v11h3v9l7-12h-4l4-8z',
	// 	'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
	//   ]
	console.log(typeof paths[0], splitPathString(paths[0]))
	const interpolator = interpolate(paths[0], paths[1], {
		maxSegmentLength: 0.1
	})
	// const interpolator = interpolate(splitPathString(paths[0]), splitPathString(paths[1]))
	console.log(interpolator(0))
	return (
		<Layout>
			<svg
				// viewBox='0 0 100 100'
				viewBox='0 0 534 305'
				fillRule='evenodd'
				clipRule='evenodd'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit={1.414}
			>
				<Spring from={{ t: 0 }} to={{ t: 1 }}>
					{({ t }) => (
						<animated.path
							fill='none'
							stroke='#000'
							strokeWidth={10}
							d={interpolator(t)}
						/>
					)}
				</Spring>
			</svg>

			<LogoSlim />
			<LogoFat />
		</Layout>
	)
}

export default Logo
