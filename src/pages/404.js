import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styles from "./404.module.scss"

export default () => (
  <Layout>
    <SEO title="404 Error" />
    <h2 className={styles.title}>404 Error</h2>
    <p className={styles.subtitle}>This page doesn't exist</p>
  </Layout>
)