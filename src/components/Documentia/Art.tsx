import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead } from "./index"

function Art() {
  const data = useStaticQuery(graphql`
    query {
      sketch: file(
        relativePath: { eq: "02_Documentia/Process/SketchDocumentia.PNG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      props: file(relativePath: { eq: "02_Documentia/Process/all_props.png" }) {
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
      <SectionHead>Art</SectionHead>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <Img
            fluid={data.sketch.childImageSharp.fluid}
            style={{
              width: "500px",
              height: "350px",
              margin: "auto",
            }}
          />
          <p>
            At first, I did the props roughly in order to test everything to
            make changes and ajustments.
          </p>
        </div>
        <br />
        <p>I made all props in two days.</p>
        <Img
          fluid={data.props.childImageSharp.fluid}
          style={{
            width: "100%",
            margin: "auto",
          }}
        />
      </Wrapper>
    </>
  )
}
export default Art

const Wrapper = styled.div`
  margin: 5vh auto;
  p {
    margin: auto;
    width: 362px;
    font-family: Manjari;
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
`
