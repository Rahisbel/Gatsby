import * as React from 'react'
import MyComponent from './my-component'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Dog" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
      
    </Layout>
  )
}

export default IndexPage