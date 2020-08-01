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
          fluid {
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
          width: "502px",
          height: "334px",
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
  height: 500px;
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    margin: auto;
    width: 362px;
    font-family: Manjari;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
`
