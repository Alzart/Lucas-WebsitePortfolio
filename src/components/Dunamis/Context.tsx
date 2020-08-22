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
        <h3>
          ATLAS <span>by</span> Japet
        </h3>
        <p>
          is an exoskeleton belt. It helps people suffering from back pain to
          regain their muscles during physical reeducation.
        </p>
      </Wrapper>
    </>
  )
}
export default Context
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  position: relative;
  color: #000;
  h3 {
    position: absolute;
    right: 20%;
    top: 100px;
    font-family: Raleway;
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
    right: 10%;
    top: 300px;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
  }
`
