import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AuboutPage = () => (
  <Layout location={window.location}>
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    <p>Welcome to my life</p>
  </Layout>
)

export default AuboutPage
