import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead, SectionHead } from "./index"

function Design() {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(
        relativePath: { eq: "03_Sodexo/Graphic Design/Roundy_FS.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(
        relativePath: { eq: "03_Sodexo/Graphic Design/Streety_LFS.jpg" }
      ) {
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
      <SectionHead>Design</SectionHead>
      <SectionSubHead>Graphic Design</SectionSubHead>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.logo1.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
          <Img
            fluid={data.logo2.childImageSharp.fluid}
            style={{
              width: "49%",
              margin: "1%",
            }}
          />
        </div>
      </Wrapper>
    </>
  )
}
export default Design
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 80%;
  flex-direction: column;
  color: #000;
`
