import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Intro() {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "02_Documentia/Intro/DocumentiaBrand_hide.png" }
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
    <Wrapper>
      <Img
        fluid={data.image.childImageSharp.fluid}
        style={{
          width: "500px",
          height: "350px",
          margin: "auto",
        }}
      />
      <p>
        Imagine a world living inside your computer files… So fragile and pure
        that any contact from the outside could wreck it beyond recognition… A
        game where you play inside your documents folder.
      </p>
    </Wrapper>
  )
}
export default Intro
const Wrapper = styled.div`
  display: flex;
  margin: 5vh auto;
  p {
    margin: auto;
    padding-left: 20px;
    width: 362px;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`
