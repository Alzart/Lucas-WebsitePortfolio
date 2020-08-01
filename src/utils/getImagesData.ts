//@ts-nocheck
import { useStaticQuery, graphql } from "gatsby"

export default function (query: string) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  let images = []

  data.images.edges.forEach(image => {
    if (image.node.relativePath.includes(query)) {
      images.push(image.node.childImageSharp.fluid)
    }
  })
  return images
}
