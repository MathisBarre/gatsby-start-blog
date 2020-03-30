import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

import styles from "./index.module.css"

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({node: article}) => (
      <article>
        <h2 className={styles.articleTitle}><Link to={article.fields.slug}>{article.frontmatter.title} <span className={styles.date}> - {new Date(article.frontmatter.date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' })}</span></Link></h2>
        <h5 className={styles.articleTag}>{article.frontmatter.tags}</h5>
        <p>{article.frontmatter.description}</p>
      </article>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            description
            date
            tags
          }
          timeToRead
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`