import React from 'react'
import Layout from '../components/layout'
import CrossHatchTest from '../components/CrossHatch'
import vid from '../images/odog.mp4'

const LogoTest = () => {
	return (
		<Layout>
			<CrossHatchTest>
				<h1>
					Design and
					<br />
					Web Development
				</h1>
				<video width='100%' muted autoPlay loop playsInline>
					<source src={vid} type='video/mp4' />
				</video>
			</CrossHatchTest>
			<h2>Hello World</h2>
			<h3>How are you?</h3>
			<h4>Yeah, not bad thanks.</h4>
			<h5>How about you?</h5>
			<h6>I've ran out of title tags</h6>
			<p>
				Facilisis magnis donec massa donec laborum repellat porta condimentum
				feugiat accumsan ac proident tenetur? Aute omnis ab iaculis, nibh cum id
				montes! Senectus netus tincidunt, rhoncus? Quas blandit exercitationem
				dui! Tincidunt error placeat perspiciatis consectetuer tempore, itaque
				varius dignissimos iure ullam vestibulum! Similique nisi pretium
				praesent suscipit accusantium eu faucibus.
			</p>

			<p>
				Nesciunt deleniti interdum ipsum exercitationem diamlorem fringilla,
				arcu laborum, turpis dignissim nobis. Dapibus, praesentium dolorem.
				Nesciunt massa architecto! Incididunt, mus? Occaecat maecenas ad
				ultricies, habitasse facilisi quo! Quo, dictum urna nostrum lacinia
				consectetur! Maecenas nascetur, sapiente? Natoque turpis labore delectus
				magni! Luctus sagittis quo, dolorum eiusmod! Nobis deleniti, sem iusto.
			</p>

			<p>
				Morbi explicabo mollit. Voluptatem, consequuntur sed nostrud, veniam.
				Vestibulum, fusce corporis nisl fuga purus diamlorem senectus,
				aspernatur adipiscing soluta quos, phasellus labore, ducimus proin,
				convallis fermentum mollit sociosqu, natoque quas! Debitis taciti,
				imperdiet fringilla ante, netus, nonummy est ex eiusmod turpis maiores!
				Mi cursus! Cum leo varius beatae accusantium qui.
			</p>
		</Layout>
	)
}

export default LogoTest
