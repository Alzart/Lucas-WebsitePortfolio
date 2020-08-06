import React from "react"
import styled from "styled-components"
import Layout from "../layout"
import SEO from "../seo"
import Carousel from "../HomePageCarousel"
const IndexPage = () => (
  <Layout location={window.location}>
    <SEO title="Home" />
    <Title>Hi! I'm Lucas</Title>
    <Carousel />
  </Layout>
)

export default IndexPage

const Title = styled.div`
  position: absolute;
  z-index: 500;
  width: 736px;
  height: 149px;
  left: 164px;
  top: 243px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  color: #ffffff;
`