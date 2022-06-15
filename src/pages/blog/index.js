import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
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
            slug
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