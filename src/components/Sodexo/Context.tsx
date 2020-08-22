import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"
function Context() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "03_Sodexo/Context/MeS_Middle.png" }) {
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
      <SectionHead>Context</SectionHead>
      <Wrapper>
        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{
            width: "100%",
          }}
        />
        <h3>Eating at Work</h3>
        <p>An hand-made meal to your collaborators.</p>
      </Wrapper>
    </>
  )
}
export default Context
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  position: relative;
  color: #fff;
  h3 {
    position: absolute;
    left: 5%;
    top: 100px;
    width: 30%;
    font-family: Raleway;
    text-transform: uppercase;
    font-size: 64px;
    span {
      font-size: 24px;
    }
  }
  p {
    position: absolute;
    margin: auto;
    width: 362px;
    height: 142px;
    left: 5%;
    top: 300px;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
  }
`
