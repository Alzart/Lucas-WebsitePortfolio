import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionSubHead } from "./index"

function UserScenario() {
  const data = useStaticQuery(graphql`
    query {
      storyboard: file(
        relativePath: { eq: "03_Sodexo/Design/StoryBoard.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      schema: file(relativePath: { eq: "03_Sodexo/Design/Frigal_NU22.png" }) {
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
      <SectionSubHead>User Scenario</SectionSubHead>
      <Wrapper>
        <Img
          fluid={data.storyboard.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "auto",
          }}
        />
        <Img
          fluid={data.schema.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "auto",
          }}
        />
        <br />
        <p>
          I’ve noticed the main steps from the user scenario to translate the
          actions into the physical world.
        </p>
      </Wrapper>
    </>
  )
}
export default UserScenario
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
