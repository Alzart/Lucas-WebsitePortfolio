import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHead, SectionSubHead } from "./index"

function Context() {
  const data = useStaticQuery(graphql`
    query {
      cuisine: file(
        relativePath: { eq: "03_Sodexo/Context/passion-cuisine.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logos: file(
        relativePath: { eq: "03_Sodexo/Context/Logo-concurrents.jpg" }
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
      <SectionHead>Context</SectionHead>
      <SectionSubHead>Sodexo in Few Words</SectionSubHead>
      <Wrapper>
        <p>
          Sodexo is a french multinational company focusing on services.
          There’re well known for delivering on site restauration services like
          at schools, hospital and corporations. Their activity is even wider
          with facility management and mobility and expenses managment.
        </p>
        <br />
        <Img
          fluid={data.cuisine.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
        <br />
        <p>
          But this way of deliver food by building an entire kitchen on the site
          becomes old since new actors are investing the market...
        </p>
        <br />
        <Img
          fluid={data.logos.childImageSharp.fluid}
          style={{ width: "80%", margin: "auto" }}
        />
        <br />
        <p>That’s the reason why Sodexo will soon launch ‘LeFoodSpot’</p>
      </Wrapper>
    </>
  )
}
export default Context
const Wrapper = styled.div`
  margin: 5vh auto;
  position: relative;
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
