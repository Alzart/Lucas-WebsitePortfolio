import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function HomePageCarousel() {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    showThumbs: false,
  }
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "home-page" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.images.edges.map((image: any) => {
    return image.node.childImageSharp.fluid
  })

  return (
    <Wrapper>
      <Carousel {...settings}>
        {images.map((image: any) => {
          return (
            <Img
              key={image}
              fluid={image}
              alt="Image No Found"
              style={{ height: "100vh", minWidth: "100%" }}
            />
          )
        })}
      </Carousel>
    </Wrapper>
  )
}
export default HomePageCarousel
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000;
`
