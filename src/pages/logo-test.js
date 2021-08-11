import React from 'react'
import Layout from '../components/layout'
import CrossHatch from '../components/CrossHatch'
import Logo from '../components/Logo'
import ollieBall from '../images/ollieBall_compressed.mp4'
import ollieBall2 from '../images/ollieBall2_compressed.mp4'
import pic from '../images/birds.jpg'

const LogoTest = () => {
	return (
		<Layout>
			<CrossHatch backgroundSize='50px' blacks='black' whites='blue'>
				<video muted autoPlay loop playsInline>
					<source src={ollieBall2} type='video/mp4' />
				</video>
			</CrossHatch>
			<Logo color='black' />
			<CrossHatch edgeSoftness={0} darkInvert>
				<div>
					<Logo color='black' />
				</div>
			</CrossHatch>
			<div>
				<CrossHatch>
					<h1>
						Design and
						<br />
						Web Development
					</h1>
				</CrossHatch>
			</div>

			<video muted autoPlay loop playsInline width='100%'>
				<source src={ollieBall} type='video/mp4' />
			</video>
			<CrossHatch>
				<img src={pic} alt='pic' height='600px' />
			</CrossHatch>

			<h2>Hello World</h2>
			<h3>How are you?</h3>
			<h4>Yeah, not bad thanks.</h4>
			<h5>How about you?</h5>
			<h6>I've ran out of title tags</h6>
			<p>
				Facilisis magnis donec massa donec laborum repellat porta condimentum
				feugiat accumsan ac proident tenetur? Aute omnis ab iaculis, nibh cum id
				montes! Senectus netus tincidunt, rhoncus? Quas blandit exercitationem
				dui.
			</p>
		</Layout>
	)
}

export default LogoTest
