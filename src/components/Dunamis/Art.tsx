import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"
function Context() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "01_Dunamis/Context/Atlas.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionHead>Art</SectionHead>
      <Wrapper>
        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Context
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  flex-direction: column;
  color: #000;
`
