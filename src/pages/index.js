import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Dog" src="https://cdn.pixabay.com/photo/2022/06/03/23/33/cat-7240997_960_720.jpg"/>
      
    </Layout>
  )
}

export default IndexPage