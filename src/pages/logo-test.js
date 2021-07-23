import React from 'react'
import Layout from '../components/layout'
import CrossHatch from '../components/CrossHatch'
import Logo from '../components/Logo'
import vid from '../images/odog.mp4'
import pic from '../images/birds.jpg'

const LogoTest = () => {
	return (
		<Layout>
			<CrossHatch>
				<Logo color='black' />
			</CrossHatch>
			<CrossHatch>
				<h1>
					Design and
					<br />
					Web Development
				</h1>
			</CrossHatch>

			<CrossHatch>
				<img src={pic} alt='pic' height='600px' />
			</CrossHatch>
			{/*TODO prevent video interaction (opera browser, picture-in-picture button)*/}
			<CrossHatch>
				<video muted autoPlay loop playsInline>
					<source src={vid} type='video/mp4' />
				</video>
			</CrossHatch>
			<CrossHatch darkInvert>
				<video height='1080px' muted autoPlay loop playsInline>
					<source src={vid} type='video/mp4' />
				</video>
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
