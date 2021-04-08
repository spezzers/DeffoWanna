import React from 'react';
import Layout from '../components/layout'
import Logo from '../components/Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  decorators: [(Story) => <Layout><Story/></Layout>]
};



export const Primary = () => <Logo/>
