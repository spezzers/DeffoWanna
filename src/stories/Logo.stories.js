import React from 'react'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import {light, dark} from '../components/themes'

export default {
	title: 'Components/Logo',
	component: Logo
	// decorators: [(Story) => <Layout><Story/></Layout>]
}


export const Primary = () => <Logo />