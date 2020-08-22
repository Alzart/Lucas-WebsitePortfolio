import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const settings = {
  autoPlay: true,
  infiniteLoop: true,
  interval: 3000,
  showThumbs: false,
}

function Concepts() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "concept" } }) {
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
    <div style={{ width: "80%", margin: "5vh auto" }}>
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
    </div>
  )
}
export default Concepts
