import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function StoryBoard() {
  const data = useStaticQuery(graphql`
    query {
      panel: file(relativePath: { eq: "01_Dunamis/StoryBoard/panel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionSubHead>Story Board</SectionSubHead>
      <Wrapper>
        <Img
          fluid={data.panel.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
      </Wrapper>
    </>
  )
}
export default StoryBoard
const Wrapper = styled.div`
  margin: 5vh auto;
`
