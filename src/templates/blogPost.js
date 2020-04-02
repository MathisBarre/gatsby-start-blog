import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blogPost.module.scss"
import imgCalendar from "../images/calendar.svg"
import imgClock from "../images/clock.svg"

export default ({ data }) => {
  const post = data.markdownRemark
  var img = "";
  if (!!post.frontmatter.featuredImage) img = <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} className={styles.featuredImage} />

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <h2 className={styles.title}>{post.frontmatter.title}</h2>
      <h5 className={styles.tags}>{post.frontmatter.tags}</h5>
      <div className={styles.infobar}>
        <div className={styles.info}>
          <img src={imgCalendar} alt="calendar icon (publication date)" />
          <p className={styles.date}>{new Date(post.frontmatter.date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className={styles.info}>
          <img src={imgClock} alt="Clock icon (time to read)" />
          <p className={styles.timeToRead}>~ {post.timeToRead} {(post.timeToRead > 1) ? 'minutes' : "minute"}</p>
        </div>
      </div>

      {img}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      timeToRead
    }
  }
`