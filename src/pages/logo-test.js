import React from 'react'
import Layout from '../components/layout'
import CrossHatch from '../components/CrossHatch'
import Logo from '../components/Logo'
// import vid from '../images/odog.mp4'
import ollieBall from '../images/ollieBall_compressed.mp4'
import ollieBall2 from '../images/ollieBall2_compressed.mp4'
import pic from '../images/birds.jpg'
import useTheme from '../hooks/useTheme'

const LogoTest = () => {
	const theme = useTheme()
	console.log('current theme:', theme.current?.name)
	return (
		<Layout>
			<CrossHatch backgroundSize='35px' whites='red'>
				<video muted autoPlay loop playsInline>
					<source src={ollieBall2} type='video/mp4' />
				</video>
			</CrossHatch>
			<Logo color='black'/>
			<CrossHatch edgeSoftness={0} darkInvert >
				<div>
					<Logo color='black' />
				</div>
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
			
				<video muted autoPlay loop playsInline>
					<source src={ollieBall} type='video/mp4' />
				</video>
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
