import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
            <p>My cool posts will go in here</p>
        </Layout>
    )
}

export const queryBlogs = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
            date(formatString: "DD-MM-YYYY")
            title
        }
            id
            body
            parent {
            ... on File {
                modifiedTime(formatString: "MMMM D, YYYY")
                }
            }
        }
    }
}
`


export default BlogPage