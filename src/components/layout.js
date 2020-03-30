import React from "react"
import containerStyles from "./layout.module.scss"
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
      <div className={containerStyles.container}>
        <header className={containerStyles.header}>
          <h1 className={containerStyles.title}><Link to="/">{data.site.siteMetadata.title}</Link></h1>
          <Link to="/about/" >About me</Link>
        </header>
        {children}
      </div>
    </div>
  )
}