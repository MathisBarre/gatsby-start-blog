import React from "react"
import containerStyles from "./layout.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"

export default ({children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div>
      <h1 className={containerStyles.title}><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      <div className={containerStyles.container}>
        {children}
      </div>
    </div>
  )
}