import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function Collaboration() {
  const data = useStaticQuery(graphql`
    query {
      frigos: file(
        relativePath: { eq: "03_Sodexo/Collaboration/AllFrigos.jpg" }
      ) {
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
      <SectionSubHead>Collaboration with NU!</SectionSubHead>
      <Wrapper>
        <p>Nu! owns this fridge tchnology.</p>
        <br />
        <Img
          fluid={data.frigos.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Collaboration
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  width: 80%;
  flex-direction: column;
  color: #000;
  p {
    margin: auto;
    text-align: center;
    font-family: Manjari;
    width: 80%;
    font-size: 24px;
    line-height: 28px;
  }
`
