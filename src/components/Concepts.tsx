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
  const images = data.images.edges
    .sort((a: any, b: any) => {
      console.log(a.node.relativePath)
      const nameA = a.node.relativePath.toUpperCase()
      const nameB = b.node.relativePath.toUpperCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
    .map((image: any) => {
      return image.node.childImageSharp.fluid
    })

  console.log(images)
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
